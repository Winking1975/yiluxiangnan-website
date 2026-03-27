/**
 * 一路向南 — 在线咨询 / 预约模块（方案D：表单留资 + UTM追踪）
 * 
 * 功能：
 * 1. 客户点击"咨询商户"→ 弹出咨询表单
 * 2. 留资数据存 localStorage（ylxn_inquiries）
 * 3. 每条线索自动记录：商户ID、来源UTM、时间戳、用户信息
 * 4. 支持按商户/日期查看线索记录（管理面板）
 * 5. 线索导出为CSV（方便后续跟进）
 * 6. 公开API：window.InquiryApp
 */

(function() {
  'use strict';

  const STORAGE_KEY = 'ylxn_inquiries'; // 所有咨询记录

  // ============ 线索数据管理 ============
  const InquiryData = {
    getAll() {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    },

    saveAll(list) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    },

    /**
     * 添加一条咨询记录
     * @param {Object} params
     * @param {string} params.merchantId   - 商户标识（如 'kl_translate'）
     * @param {string} params.merchantName - 商户名称
     * @param {string} params.category     - 服务类别（如 '翻译公证'）
     * @param {string} params.contactName  - 客户姓名
     * @param {string} params.contactPhone - 客户电话
     * @param {string} params.contactWechat- 客户微信（可选）
     * @param {string} params.message      - 咨询内容
     * @param {string} params.utmSource    - UTM来源（自动读取）
     * @returns {Object} 保存的记录
     */
    add(params) {
      const record = {
        id: 'inq_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
        merchantId: params.merchantId || '',
        merchantName: params.merchantName || '',
        category: params.category || '',
        contactName: (params.contactName || '').trim(),
        contactPhone: (params.contactPhone || '').trim(),
        contactWechat: (params.contactWechat || '').trim(),
        message: (params.message || '').trim(),
        status: 'new',           // new / contacted / closed / invalid
        createdAt: Date.now(),
        // UTM 追踪
        utmSource: params.utmSource || this._readUTM('utm_source'),
        utmMedium: this._readUTM('utm_medium'),
        utmCampaign: this._readUTM('utm_campaign'),
        utmContent: this._readUTM('utm_content'),
        // 用户信息
        userId: (window.UserApp && UserApp.getCurrentUser()) ? UserApp.getCurrentUser().id : null,
        userNickname: (window.UserApp && UserApp.getCurrentUser()) ? UserApp.getCurrentUser().nickname : null,
        pageUrl: window.location.href,
        // 备注（商户反馈用）
        note: '',
        merchantReply: ''
      };

      const list = this.getAll();
      list.unshift(record); // 最新的排前面
      this.saveAll(list);
      return record;
    },

    // 更新线索状态
    updateStatus(id, status) {
      const list = this.getAll();
      const item = list.find(r => r.id === id);
      if (item) {
        item.status = status;
        item.updatedAt = Date.now();
        this.saveAll(list);
        return true;
      }
      return false;
    },

    // 添加商户备注
    addNote(id, note) {
      const list = this.getAll();
      const item = list.find(r => r.id === id);
      if (item) {
        item.note = note;
        item.updatedAt = Date.now();
        this.saveAll(list);
        return true;
      }
      return false;
    },

    // 按商户统计
    getStatsByMerchant() {
      const list = this.getAll();
      const stats = {};
      list.forEach(r => {
        if (!stats[r.merchantId]) {
          stats[r.merchantId] = {
            merchantId: r.merchantId,
            merchantName: r.merchantName,
            category: r.category,
            total: 0,
            new: 0,
            contacted: 0,
            closed: 0
          };
        }
        stats[r.merchantId].total++;
        if (stats[r.merchantId][r.status] !== undefined) {
          stats[r.merchantId][r.status]++;
        }
      });
      return Object.values(stats);
    },

    // 读取URL中的UTM参数
    _readUTM(param) {
      try {
        const url = new URL(window.location.href);
        return url.searchParams.get(param) || '';
      } catch(e) {
        // 从URL字符串中手动解析（兼容旧浏览器）
        const match = window.location.search.match(new RegExp('[?&]' + param + '=([^&]*)'));
        return match ? decodeURIComponent(match[1]) : '';
      }
    },

    // 导出为CSV
    exportCSV() {
      const list = this.getAll();
      if (list.length === 0) return null;

      const headers = ['ID', '商户ID', '商户名称', '类别', '客户姓名', '客户电话', '客户微信', '咨询内容', '状态', '用户ID', '用户昵称', 'UTM来源', 'UTM媒介', 'UTM活动', '页面URL', '创建时间', '备注'];
      const rows = list.map(r => [
        r.id,
        r.merchantId,
        '"' + (r.merchantName || '').replace(/"/g, '""') + '"',
        '"' + (r.category || '').replace(/"/g, '""') + '"',
        '"' + (r.contactName || '').replace(/"/g, '""') + '"',
        r.contactPhone,
        r.contactWechat,
        '"' + (r.message || '').replace(/"/g, '""') + '"',
        r.status,
        r.userId || '',
        r.userNickname || '',
        r.utmSource,
        r.utmMedium,
        r.utmCampaign,
        r.pageUrl,
        new Date(r.createdAt).toLocaleString('zh-CN'),
        '"' + (r.note || '').replace(/"/g, '""') + '"'
      ]);

      // 加 BOM 头确保 Excel 正确识别中文
      let csv = '\uFEFF' + headers.join(',') + '\n';
      rows.forEach(row => { csv += row.join(',') + '\n'; });
      return csv;
    }
  };

  // ============ UI 管理 ============
  const InquiryUI = {
    // 当前咨询的商户信息
    _currentMerchant: null,

    /**
     * 打开咨询弹窗
     * @param {Object} merchant - { id, name, category, buttonText }
     */
    openInquiry(merchant) {
      // 检查是否已登录（如果已登录，自动填充姓名和微信）
      const isLoggedIn = window.UserApp && UserApp.isLoggedIn();
      const currentUser = isLoggedIn ? UserApp.getCurrentUser() : null;

      this._currentMerchant = merchant;
      this.hideModal();

      const overlay = document.createElement('div');
      overlay.id = 'inquiry-modal-overlay';
      overlay.className = 'inquiry-modal-overlay';
      overlay.onclick = (e) => { if (e.target === overlay) this.hideModal(); };

      const modal = document.createElement('div');
      modal.className = 'inquiry-modal';
      modal.id = 'inquiry-modal';
      modal.innerHTML = this._inquiryFormHTML(merchant, currentUser);

      overlay.appendChild(modal);
      document.body.appendChild(overlay);
      document.body.style.overflow = 'hidden';

      requestAnimationFrame(() => overlay.classList.add('show'));
      this._bindFormEvents(modal, merchant);

      // ESC 关闭
      this._escHandler = (e) => { if (e.key === 'Escape') this.hideModal(); };
      document.addEventListener('keydown', this._escHandler);
    },

    hideModal() {
      const overlay = document.getElementById('inquiry-modal-overlay');
      if (overlay) {
        overlay.classList.remove('show');
        setTimeout(() => overlay.remove(), 300);
        document.body.style.overflow = '';
      }
      if (this._escHandler) {
        document.removeEventListener('keydown', this._escHandler);
        this._escHandler = null;
      }
      this._currentMerchant = null;
    },

    // 咨询表单 HTML
    _inquiryFormHTML(merchant, currentUser) {
      const name = currentUser ? currentUser.nickname : '';
      const wechat = currentUser ? '' : ''; // 微信号不在用户系统中存储

      return `
        <button class="inquiry-modal-close" onclick="InquiryApp.hideModal()">&times;</button>
        <div class="inquiry-modal-header">
          <div class="inquiry-merchant-icon">${(merchant.name || '').charAt(0)}</div>
          <div>
            <h2>${this._esc(merchant.name)}</h2>
            <p class="inquiry-category">${this._esc(merchant.category || '')} · 在线咨询</p>
          </div>
        </div>

        <div class="inquiry-tip">
          <i class="fas fa-shield-alt"></i>
          <span>您的信息仅用于对接商户，平台严格保密</span>
        </div>

        <form class="inquiry-form" id="inquiry-form" onsubmit="return false;">
          <div class="inquiry-form-row">
            <div class="form-group">
              <label><i class="fas fa-user"></i> 您的姓名 <span class="required">*</span></label>
              <input type="text" id="inq-name" value="${this._esc(name)}" placeholder="请输入真实姓名" maxlength="20" required />
            </div>
            <div class="form-group">
              <label><i class="fas fa-phone"></i> 联系电话 <span class="required">*</span></label>
              <input type="tel" id="inq-phone" placeholder="手机号码" maxlength="15" required />
            </div>
          </div>
          <div class="inquiry-form-row">
            <div class="form-group">
              <label><i class="fab fa-weixin"></i> 微信号 <span class="inquiry-optional">选填</span></label>
              <input type="text" id="inq-wechat" value="${this._esc(wechat)}" placeholder="方便商户微信联系您" maxlength="30" />
            </div>
            <div class="form-group">
              <label><i class="fas fa-tag"></i> 咨询类型 <span class="required">*</span></label>
              <select id="inq-type" required>
                <option value="">请选择</option>
                <option value="咨询">价格咨询</option>
                <option value="预约">预约服务</option>
                <option value="报价">获取报价</option>
                <option value="合作">商务合作</option>
                <option value="其他">其他</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label><i class="fas fa-comment-dots"></i> 详细需求</label>
            <textarea id="inq-message" placeholder="请描述您的具体需求，例如：需要翻译一份出生公证，中译英，3天内完成" rows="3" maxlength="500"></textarea>
            <small class="inquiry-char-count"><span id="inq-char-count">0</span>/500</small>
          </div>

          <div id="inq-error" class="inquiry-form-error" style="display:none;"></div>

          <button type="submit" class="inquiry-btn-submit" id="inq-submit">
            <i class="fas fa-paper-plane"></i> 提交咨询
          </button>
        </form>

        <div class="inquiry-footer-note">
          <i class="fas fa-clock"></i> 商户通常在24小时内回复
        </div>
      `;
    },

    // 绑定表单事件
    _bindFormEvents(modal, merchant) {
      // 字数统计
      const textarea = modal.querySelector('#inq-message');
      const charCount = modal.querySelector('#inq-char-count');
      if (textarea && charCount) {
        textarea.addEventListener('input', () => {
          charCount.textContent = textarea.value.length;
        });
      }

      // 表单提交
      const form = modal.querySelector('#inquiry-form');
      if (form) {
        form.onsubmit = (e) => {
          e.preventDefault();
          this._submitInquiry(merchant);
        };
      }
    },

    // 提交咨询
    _submitInquiry(merchant) {
      const name = document.getElementById('inq-name').value.trim();
      const phone = document.getElementById('inq-phone').value.trim();
      const wechat = document.getElementById('inq-wechat').value.trim();
      const type = document.getElementById('inq-type').value;
      const message = document.getElementById('inq-message').value.trim();

      // 验证
      if (!name) { this._showError('请输入您的姓名'); return; }
      if (name.length < 2) { this._showError('姓名至少2个字符'); return; }
      if (!phone) { this._showError('请输入联系电话'); return; }
      if (!/^[\d\-+() ]{7,15}$/.test(phone)) { this._showError('请输入正确的电话号码'); return; }
      if (!type) { this._showError('请选择咨询类型'); return; }

      // 组合咨询内容
      const fullMessage = `[${type}] ${message || '无补充说明'}`;

      // 保存
      const record = InquiryData.add({
        merchantId: merchant.id || merchant.name,
        merchantName: merchant.name,
        category: merchant.category || '',
        contactName: name,
        contactPhone: phone,
        contactWechat: wechat,
        message: fullMessage
      });

      console.log('[Inquiry] 咨询已记录:', record.id, '→', merchant.name);

      // 关闭弹窗，显示成功提示
      this.hideModal();
      this._showSuccess(merchant.name);
    },

    // 显示错误
    _showError(msg) {
      const el = document.getElementById('inq-error');
      if (el) {
        el.textContent = msg;
        el.style.display = 'block';
        setTimeout(() => { el.style.display = 'none'; }, 4000);
      }
    },

    // 提交成功提示
    _showSuccess(merchantName) {
      // 创建成功弹窗
      const overlay = document.createElement('div');
      overlay.id = 'inquiry-success-overlay';
      overlay.className = 'inquiry-modal-overlay';
      overlay.onclick = (e) => { if (e.target === overlay) overlay.remove(); };
      overlay.innerHTML = `
        <div class="inquiry-success-card">
          <div class="inquiry-success-icon"><i class="fas fa-check-circle"></i></div>
          <h3>咨询已提交！</h3>
          <p>您的咨询已发送给 <strong>${this._esc(merchantName)}</strong></p>
          <p class="inquiry-success-sub">商户通常在 <strong>24小时内</strong> 通过电话或微信联系您</p>
          <div class="inquiry-success-actions">
            <button class="inquiry-btn-view" onclick="InquiryApp.showMyInquiries();this.closest('.inquiry-modal-overlay').remove();">
              <i class="fas fa-list-alt"></i> 查看我的咨询
            </button>
            <button class="inquiry-btn-close" onclick="this.closest('.inquiry-modal-overlay').remove();document.body.style.overflow='';">
              知道了
            </button>
          </div>
        </div>
      `;
      document.body.appendChild(overlay);
      document.body.style.overflow = 'hidden';
      requestAnimationFrame(() => overlay.classList.add('show'));
    },

    // ============ 我的咨询记录 ============
    showMyInquiries() {
      const isLoggedIn = window.UserApp && UserApp.isLoggedIn();
      const currentUser = isLoggedIn ? UserApp.getCurrentUser() : null;
      let list;

      if (currentUser) {
        // 已登录：只看自己的
        list = InquiryData.getAll().filter(r => r.userId === currentUser.id);
      } else {
        // 未登录：看所有（本地的）
        list = InquiryData.getAll();
      }

      this.hideModal();
      this._showRecordPanel('我的咨询记录', list, false);
    },

    // ============ 线索管理面板（运营用） ============
    showAdminPanel() {
      const list = InquiryData.getAll();
      this.hideModal();
      this._showRecordPanel('线索管理面板', list, true);
    },

    // 通用记录面板
    _showRecordPanel(title, list, isAdmin) {
      // 移除已有面板
      const existing = document.getElementById('inquiry-records-overlay');
      if (existing) existing.remove();

      const overlay = document.createElement('div');
      overlay.id = 'inquiry-records-overlay';
      overlay.className = 'inquiry-modal-overlay';

      const stats = InquiryData.getStatsByMerchant();
      const totalNew = list.filter(r => r.status === 'new').length;
      const totalContacted = list.filter(r => r.status === 'contacted').length;

      let tableHTML = '';
      if (list.length === 0) {
        tableHTML = '<div class="inquiry-empty"><i class="fas fa-inbox"></i><p>暂无咨询记录</p></div>';
      } else {
        tableHTML = '<div class="inquiry-table-wrap"><table class="inquiry-table">' +
          '<thead><tr>' +
            '<th>商户</th><th>客户</th><th>电话</th><th>需求</th>' +
            (isAdmin ? '<th>状态</th><th>时间</th>' : '<th>时间</th>') +
          '</tr></thead><tbody>';

        list.slice(0, 50).forEach(r => {
          const date = new Date(r.createdAt);
          const timeStr = date.toLocaleDateString('zh-CN') + ' ' + 
                          String(date.getHours()).padStart(2,'0') + ':' + 
                          String(date.getMinutes()).padStart(2,'0');
          const statusLabel = this._statusLabel(r.status);

          tableHTML += '<tr>' +
            '<td><strong>' + this._esc(r.merchantName) + '</strong></td>' +
            '<td>' + this._esc(r.contactName) + (r.contactWechat ? '<br><small>微信: ' + this._esc(r.contactWechat) + '</small>' : '') + '</td>' +
            '<td>' + this._esc(r.contactPhone) + '</td>' +
            '<td class="inq-msg-cell">' + this._esc(r.message) + '</td>' +
            (isAdmin ? '<td>' + statusLabel + '</td>' : '') +
            '<td><small>' + timeStr + '</small></td>' +
          '</tr>';
        });

        tableHTML += '</tbody></table></div>';
      }

      overlay.innerHTML = `
        <div class="inquiry-records-panel">
          <div class="inquiry-records-header">
            <div>
              <h2><i class="fas fa-clipboard-list"></i> ${title}</h2>
              <div class="inquiry-stats-bar">
                <span class="stat-badge total">共 ${list.length} 条</span>
                ${isAdmin ? '<span class="stat-badge new">新线索 ' + totalNew + '</span>' +
                            '<span class="stat-badge contacted">已联系 ' + totalContacted + '</span>' +
                            '<span class="stat-badge merchants">商户 ' + stats.length + '</span>' : ''}
              </div>
            </div>
            <div>
              ${isAdmin ? '<button class="inquiry-btn-export" onclick="InquiryApp.exportCSV()"><i class="fas fa-download"></i> 导出CSV</button>' : ''}
              <button class="inquiry-modal-close" onclick="document.getElementById(\'inquiry-records-overlay\').remove();document.body.style.overflow=\'\';">&times;</button>
            </div>
          </div>
          ${isAdmin ? this._merchantStatsHTML(stats) : ''}
          ${tableHTML}
        </div>
      `;

      document.body.appendChild(overlay);
      document.body.style.overflow = 'hidden';
      requestAnimationFrame(() => overlay.classList.add('show'));

      overlay.onclick = (e) => { if (e.target === overlay) { overlay.remove(); document.body.style.overflow = ''; } };
    },

    // 商户统计卡片
    _merchantStatsHTML(stats) {
      if (stats.length === 0) return '';
      let html = '<div class="inquiry-merchant-stats">';
      stats.forEach(s => {
        html += '<div class="inq-stat-card">' +
          '<div class="inq-stat-name">' + this._esc(s.merchantName) + '</div>' +
          '<div class="inq-stat-cat">' + this._esc(s.category) + '</div>' +
          '<div class="inq-stat-numbers">' +
            '<span class="inq-stat-total">' + s.total + '</span>' +
            '<small>新' + s.new + ' · 联' + s.contacted + '</small>' +
          '</div>' +
        '</div>';
      });
      html += '</div>';
      return html;
    },

    // 状态标签
    _statusLabel(status) {
      const map = {
        'new': '<span class="inq-status new">新线索</span>',
        'contacted': '<span class="inq-status contacted">已联系</span>',
        'closed': '<span class="inq-status closed">已成交</span>',
        'invalid': '<span class="inq-status invalid">无效</span>'
      };
      return map[status] || '<span class="inq-status">' + status + '</span>';
    },

    // HTML转义
    _esc(text) {
      if (!text) return '';
      const div = document.createElement('div');
      div.textContent = text;
      return div.innerHTML;
    }
  };

  // ============ 公开 API ============
  window.InquiryApp = {
    /**
     * 打开商户咨询弹窗
     * @param {Object} merchant - { id, name, category, buttonText }
     */
    open(merchant) {
      InquiryUI.openInquiry(merchant);
    },

    /** 关闭弹窗 */
    hideModal() {
      InquiryUI.hideModal();
    },

    /** 查看我的咨询记录 */
    showMyInquiries() {
      InquiryUI.showMyInquiries();
    },

    /** 打开线索管理面板（运营后台） */
    showAdminPanel() {
      InquiryUI.showAdminPanel();
    },

    /** 导出所有线索为CSV文件 */
    exportCSV() {
      const csv = InquiryData.exportCSV();
      if (!csv) {
        alert('暂无数据可导出');
        return;
      }
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = '一路向南_咨询线索_' + new Date().toISOString().slice(0,10) + '.csv';
      link.click();
      URL.revokeObjectURL(link.href);
    },

    /** 获取线索总数 */
    getCount() {
      return InquiryData.getAll().length;
    },

    /** 获取商户统计 */
    getMerchantStats() {
      return InquiryData.getStatsByMerchant();
    },

    /** 更新线索状态 */
    updateStatus(id, status) {
      return InquiryData.updateStatus(id, status);
    }
  };

  // 暴露数据层（高级用途）
  window.InquiryData = InquiryData;

  console.log('[Inquiry] 咨询模块已加载');
})();
