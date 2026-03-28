/**
 * 一路向南 — 前端用户系统
 * 纯前端实现，用户数据存储在 localStorage
 * 支持：注册、登录、退出、个人信息编辑
 */

(function() {
  'use strict';

  const STORAGE_KEY = 'ylxn_users';       // 所有注册用户列表
  const CURRENT_KEY = 'ylxn_current_user'; // 当前登录用户

  // ============ 用户数据管理 ============
  const UserData = {
    // 获取所有用户
    getAll() {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    },

    // 保存所有用户
    saveAll(users) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
    },

    // 获取当前登录用户
    getCurrent() {
      const data = localStorage.getItem(CURRENT_KEY);
      return data ? JSON.parse(data) : null;
    },

    // 设置当前登录用户
    setCurrent(user) {
      localStorage.setItem(CURRENT_KEY, JSON.stringify(user));
    },

    // 清除当前用户（退出登录）
    clearCurrent() {
      localStorage.removeItem(CURRENT_KEY);
    },

    // 通过用户名查找
    findByUsername(username) {
      return this.getAll().find(u => u.username === username);
    },

    // 通过昵称查找
    findByNickname(nickname) {
      return this.getAll().find(u => u.nickname === nickname);
    },

    // ============ 注册 ============
    register(data) {
      const { username, password, nickname } = data;

      // 验证用户名
      if (!username || username.length < 3) {
        return { ok: false, msg: '用户名至少3个字符' };
      }
      if (username.length > 20) {
        return { ok: false, msg: '用户名最多20个字符' };
      }
      if (!/^[a-zA-Z0-9_]+$/.test(username)) {
        return { ok: false, msg: '用户名只能包含字母、数字和下划线' };
      }
      if (this.findByUsername(username)) {
        return { ok: false, msg: '该用户名已被注册' };
      }

      // 验证密码
      if (!password || password.length < 6) {
        return { ok: false, msg: '密码至少6个字符' };
      }

      // 验证昵称
      if (!nickname || nickname.trim().length < 1) {
        return { ok: false, msg: '请输入昵称' };
      }
      if (nickname.length > 15) {
        return { ok: false, msg: '昵称最多15个字符' };
      }
      if (this.findByNickname(nickname.trim())) {
        return { ok: false, msg: '该昵称已被使用' };
      }

      // 创建用户
      const colors = ['#2d9b5c', '#1976d2', '#e91e63', '#f57c00', '#9c27b0', '#00bcd4', '#795548', '#607d8b', '#ff5722', '#3f51b5'];
      const user = {
        id: 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
        username: username.toLowerCase().trim(),
        password: password, // 前端演示用，不加密
        nickname: nickname.trim(),
        avatarColor: colors[Math.floor(Math.random() * colors.length)],
        bio: '',
        createdAt: Date.now(),
        postCount: 0,
        likeCount: 0
      };

      const users = this.getAll();
      users.push(user);
      this.saveAll(users);

      return { ok: true, msg: '注册成功！', user: user };
    },

    // ============ 登录 ============
    login(username, password) {
      const user = this.findByUsername(username.toLowerCase().trim());
      if (!user) {
        return { ok: false, msg: '用户名不存在' };
      }
      if (user.password !== password) {
        return { ok: false, msg: '密码错误' };
      }
      
      this.setCurrent(user);
      return { ok: true, msg: '登录成功！', user: user };
    },

    // ============ 退出 ============
    logout() {
      this.clearCurrent();
    },

    // ============ 更新个人信息 ============
    updateProfile(updates) {
      const current = this.getCurrent();
      if (!current) return { ok: false, msg: '请先登录' };

      const users = this.getAll();
      const idx = users.findIndex(u => u.id === current.id);
      if (idx === -1) return { ok: false, msg: '用户不存在' };

      // 检查昵称是否被占用
      if (updates.nickname && updates.nickname !== current.nickname) {
        if (this.findByNickname(updates.nickname.trim())) {
          return { ok: false, msg: '该昵称已被使用' };
        }
        users[idx].nickname = updates.nickname.trim();
      }
      if (updates.bio !== undefined) {
        users[idx].bio = updates.bio.trim().substring(0, 100);
      }

      this.saveAll(users);
      this.setCurrent(users[idx]);
      return { ok: true, msg: '资料已更新', user: users[idx] };
    },

    // ============ 修改密码 ============
    changePassword(oldPwd, newPwd) {
      const current = this.getCurrent();
      if (!current) return { ok: false, msg: '请先登录' };

      if (current.password !== oldPwd) {
        return { ok: false, msg: '原密码错误' };
      }
      if (newPwd.length < 6) {
        return { ok: false, msg: '新密码至少6个字符' };
      }

      const users = this.getAll();
      const idx = users.findIndex(u => u.id === current.id);
      users[idx].password = newPwd;
      this.saveAll(users);
      this.setCurrent(users[idx]);
      return { ok: true, msg: '密码已修改' };
    },

    // ============ 获取用户头像首字 ============
    getAvatarLetter(user) {
      if (!user) return '?';
      return (user.nickname || user.username || '?').charAt(0).toUpperCase();
    }
  };

  // ============ UI 管理 ============
  const UserUI = {
    // 显示模态弹窗
    showModal(type) {
      // 如果已登录且要打开登录/注册，显示个人中心
      if (UserData.getCurrent() && (type === 'login' || type === 'register')) {
        type = 'profile';
      }

      // 移除已有弹窗
      this.hideModal();

      const overlay = document.createElement('div');
      overlay.id = 'user-modal-overlay';
      overlay.className = 'user-modal-overlay';
      overlay.onclick = (e) => { if (e.target === overlay) this.hideModal(); };

      const modal = document.createElement('div');
      modal.className = 'user-modal';
      modal.id = 'user-modal';

      if (type === 'login') {
        modal.innerHTML = this.loginHTML();
      } else if (type === 'register') {
        modal.innerHTML = this.registerHTML();
      } else if (type === 'profile') {
        modal.innerHTML = this.profileHTML();
      }

      overlay.appendChild(modal);
      document.body.appendChild(overlay);
      document.body.style.overflow = 'hidden';

      // 触发入场动画
      requestAnimationFrame(() => overlay.classList.add('show'));

      // 绑定事件
      this.bindEvents(modal, type);

      // ESC 关闭
      this._escHandler = (e) => { if (e.key === 'Escape') this.hideModal(); };
      document.addEventListener('keydown', this._escHandler);
    },

    hideModal() {
      const overlay = document.getElementById('user-modal-overlay');
      if (overlay) {
        overlay.classList.remove('show');
        setTimeout(() => overlay.remove(), 300);
        document.body.style.overflow = '';
      }
      if (this._escHandler) {
        document.removeEventListener('keydown', this._escHandler);
        this._escHandler = null;
      }
    },

    // 登录表单 HTML
    loginHTML() {
      return `
        <button class="user-modal-close" onclick="UserApp.hideModal()">&times;</button>
        <div class="user-modal-header">
          <div class="user-modal-logo">🌴</div>
          <h2>欢迎回来</h2>
          <p>登录一路向南，加入华人社区</p>
        </div>
        <form class="user-form" id="login-form" onsubmit="return false;">
          <div class="form-group">
            <label for="login-username"><i class="fas fa-user"></i> 用户名</label>
            <input type="text" id="login-username" placeholder="请输入用户名" autocomplete="username" required />
          </div>
          <div class="form-group">
            <label for="login-password"><i class="fas fa-lock"></i> 密码</label>
            <input type="password" id="login-password" placeholder="请输入密码" autocomplete="current-password" required />
          </div>
          <div id="login-error" class="user-form-error" style="display:none;"></div>
          <button type="submit" class="user-btn-primary" id="login-submit">
            <i class="fas fa-sign-in-alt"></i> 登录
          </button>
        </form>
        <div class="user-modal-footer">
          还没有账号？<a href="#" id="switch-to-register">立即注册</a>
        </div>
        <div class="user-form-tip">
          <i class="fas fa-info-circle"></i> 新用户请先注册，数据保存在本地浏览器中
        </div>
      `;
    },

    // 注册表单 HTML
    registerHTML() {
      return `
        <button class="user-modal-close" onclick="UserApp.hideModal()">&times;</button>
        <div class="user-modal-header">
          <div class="user-modal-logo">🌴</div>
          <h2>加入一路向南</h2>
          <p>注册账号，开始分享你的南洋生活</p>
        </div>
        <form class="user-form" id="register-form" onsubmit="return false;">
          <div class="form-group">
            <label for="reg-username"><i class="fas fa-user"></i> 用户名</label>
            <input type="text" id="reg-username" placeholder="字母、数字或下划线，3-20位" autocomplete="username" required />
          </div>
          <div class="form-group">
            <label for="reg-nickname"><i class="fas fa-id-badge"></i> 昵称</label>
            <input type="text" id="reg-nickname" placeholder="你希望别人怎么称呼你" autocomplete="nickname" required />
          </div>
          <div class="form-group">
            <label for="reg-password"><i class="fas fa-lock"></i> 密码</label>
            <input type="password" id="reg-password" placeholder="至少6个字符" autocomplete="new-password" required />
          </div>
          <div class="form-group">
            <label for="reg-password2"><i class="fas fa-lock"></i> 确认密码</label>
            <input type="password" id="reg-password2" placeholder="再次输入密码" autocomplete="new-password" required />
          </div>
          <div id="register-error" class="user-form-error" style="display:none;"></div>
          <button type="submit" class="user-btn-primary" id="register-submit">
            <i class="fas fa-user-plus"></i> 注册
          </button>
        </form>
        <div class="user-modal-footer">
          已有账号？<a href="#" id="switch-to-login">立即登录</a>
        </div>
        <div class="user-form-tip">
          <i class="fas fa-info-circle"></i> 账号数据保存在本地浏览器，更换设备需重新注册
        </div>
      `;
    },

    // 个人中心 HTML
    profileHTML() {
      const user = UserData.getCurrent();
      if (!user) return '';

      const regDate = new Date(user.createdAt);
      const dateStr = `${regDate.getFullYear()}-${String(regDate.getMonth()+1).padStart(2,'0')}-${String(regDate.getDate()).padStart(2,'0')}`;

      return `
        <button class="user-modal-close" onclick="UserApp.hideModal()">&times;</button>
        <div class="user-modal-header">
          <div class="user-avatar-large" style="background:${user.avatarColor}">
            ${UserData.getAvatarLetter(user)}
          </div>
          <h2>${this.escapeHtml(user.nickname)}</h2>
          <p class="user-profile-meta">@${this.escapeHtml(user.username)} · 注册于 ${dateStr}</p>
        </div>

        <div class="user-profile-section">
          <h3><i class="fas fa-edit"></i> 编辑资料</h3>
          <form class="user-form" id="profile-form" onsubmit="return false;">
            <div class="form-group">
              <label>昵称</label>
              <input type="text" id="profile-nickname" value="${this.escapeHtml(user.nickname)}" maxlength="15" />
            </div>
            <div class="form-group">
              <label>个人简介</label>
              <textarea id="profile-bio" placeholder="介绍一下自己..." maxlength="100" rows="2">${this.escapeHtml(user.bio || '')}</textarea>
            </div>
            <div id="profile-msg" class="user-form-success" style="display:none;"></div>
            <button type="submit" class="user-btn-primary" id="profile-submit">
              <i class="fas fa-save"></i> 保存修改
            </button>
          </form>
        </div>

        <div class="user-profile-section">
          <h3><i class="fas fa-key"></i> 修改密码</h3>
          <form class="user-form" id="password-form" onsubmit="return false;">
            <div class="form-group">
              <label>原密码</label>
              <input type="password" id="pwd-old" placeholder="输入原密码" />
            </div>
            <div class="form-group">
              <label>新密码</label>
              <input type="password" id="pwd-new" placeholder="至少6个字符" />
            </div>
            <div class="form-group">
              <label>确认新密码</label>
              <input type="password" id="pwd-new2" placeholder="再次输入新密码" />
            </div>
            <div id="pwd-msg" class="user-form-error" style="display:none;"></div>
            <button type="submit" class="user-btn-secondary" id="pwd-submit">
              <i class="fas fa-key"></i> 修改密码
            </button>
          </form>
        </div>

        <div class="user-profile-actions">
          <button class="user-btn-danger" id="logout-btn">
            <i class="fas fa-sign-out-alt"></i> 退出登录
          </button>
        </div>
      `;
    },

    // ============ 事件绑定 ============
    bindEvents(modal, type) {
      if (type === 'login') {
        // 切换到注册
        const switchBtn = modal.querySelector('#switch-to-register');
        if (switchBtn) {
          switchBtn.onclick = (e) => { e.preventDefault(); this.showModal('register'); };
        }

        // 登录表单提交
        const form = modal.querySelector('#login-form');
        if (form) {
          form.onsubmit = (e) => {
            e.preventDefault();
            const username = document.getElementById('login-username').value;
            const password = document.getElementById('login-password').value;
            const result = UserData.login(username, password);

            if (result.ok) {
              this.hideModal();
              UserApp.updateHeader();
              if (typeof CommunityApp !== 'undefined' && CommunityApp.renderAllPosts) {
                CommunityApp.renderAllPosts();
              }
              UserApp.showToast('登录成功，欢迎 ' + result.user.nickname + '！');
            } else {
              this.showFormError('login-error', result.msg);
            }
          };
        }
      }

      if (type === 'register') {
        // 切换到登录
        const switchBtn = modal.querySelector('#switch-to-login');
        if (switchBtn) {
          switchBtn.onclick = (e) => { e.preventDefault(); this.showModal('login'); };
        }

        // 注册表单提交
        const form = modal.querySelector('#register-form');
        if (form) {
          form.onsubmit = (e) => {
            e.preventDefault();
            const username = document.getElementById('reg-username').value;
            const nickname = document.getElementById('reg-nickname').value;
            const password = document.getElementById('reg-password').value;
            const password2 = document.getElementById('reg-password2').value;

            if (password !== password2) {
              this.showFormError('register-error', '两次密码输入不一致');
              return;
            }

            const result = UserData.register({ username, nickname, password });
            if (result.ok) {
              // 注册后自动登录
              UserData.setCurrent(result.user);
              this.hideModal();
              UserApp.updateHeader();
              UserApp.showToast('注册成功，欢迎 ' + result.user.nickname + '！');
            } else {
              this.showFormError('register-error', result.msg);
            }
          };
        }
      }

      if (type === 'profile') {
        // 保存资料
        const profileForm = modal.querySelector('#profile-form');
        if (profileForm) {
          profileForm.onsubmit = (e) => {
            e.preventDefault();
            const nickname = document.getElementById('profile-nickname').value;
            const bio = document.getElementById('profile-bio').value;
            const result = UserData.updateProfile({ nickname, bio });

            if (result.ok) {
              this.showFormSuccess('profile-msg', result.msg);
              UserApp.updateHeader();
              // 更新头部显示
              setTimeout(() => {
                const header = document.querySelector('.user-modal-header h2');
                if (header) header.textContent = result.user.nickname;
              }, 500);
            } else {
              this.showFormError('profile-msg', result.msg);
            }
          };
        }

        // 修改密码
        const pwdForm = modal.querySelector('#password-form');
        if (pwdForm) {
          pwdForm.onsubmit = (e) => {
            e.preventDefault();
            const oldPwd = document.getElementById('pwd-old').value;
            const newPwd = document.getElementById('pwd-new').value;
            const newPwd2 = document.getElementById('pwd-new2').value;

            if (newPwd !== newPwd2) {
              this.showFormError('pwd-msg', '两次新密码输入不一致');
              return;
            }

            const result = UserData.changePassword(oldPwd, newPwd);
            if (result.ok) {
              this.showFormSuccess('pwd-msg', result.msg);
              document.getElementById('pwd-old').value = '';
              document.getElementById('pwd-new').value = '';
              document.getElementById('pwd-new2').value = '';
            } else {
              this.showFormError('pwd-msg', result.msg);
            }
          };
        }

        // 退出登录
        const logoutBtn = modal.querySelector('#logout-btn');
        if (logoutBtn) {
          logoutBtn.onclick = () => {
            UserData.logout();
            this.hideModal();
            UserApp.updateHeader();
            if (typeof CommunityApp !== 'undefined' && CommunityApp.renderAllPosts) {
              CommunityApp.renderAllPosts();
            }
            UserApp.showToast('已退出登录');
          };
        }
      }
    },

    showFormError(id, msg) {
      const el = document.getElementById(id);
      if (el) {
        el.textContent = msg;
        el.style.display = 'block';
        el.className = 'user-form-error';
        setTimeout(() => { el.style.display = 'none'; }, 4000);
      }
    },

    showFormSuccess(id, msg) {
      const el = document.getElementById(id);
      if (el) {
        el.textContent = msg;
        el.style.display = 'block';
        el.className = 'user-form-success';
        setTimeout(() => { el.style.display = 'none'; }, 3000);
      }
    },

    escapeHtml(text) {
      const div = document.createElement('div');
      div.textContent = text;
      return div.innerHTML;
    }
  };

  // ============ 公开 API ============
  window.UserApp = {
    // 初始化（在页面加载时调用）
    init() {
      this.updateHeader();
      console.log('[User] 用户系统已初始化');
    },

    // 显示登录弹窗
    showLogin() {
      UserUI.showModal('login');
    },

    // 显示注册弹窗
    showRegister() {
      UserUI.showModal('register');
    },

    // 显示个人中心
    showProfile() {
      UserUI.showModal('profile');
    },

    // 关闭弹窗
    hideModal() {
      UserUI.hideModal();
    },

    // 获取当前用户
    getCurrentUser() {
      return UserData.getCurrent();
    },

    // 检查是否已登录
    isLoggedIn() {
      return !!UserData.getCurrent();
    },

    // 需要登录才能操作（点赞/发帖/评论时调用）
    requireLogin(callback) {
      if (this.isLoggedIn()) {
        callback();
      } else {
        UserUI.showModal('login');
      }
    },

    // 退出登录（从顶栏退出按钮调用）
    logout() {
      UserData.logout();
      this.updateHeader();
      if (typeof CommunityApp !== 'undefined' && CommunityApp.renderAllPosts) {
        CommunityApp.renderAllPosts();
      }
      this.showToast(this._t('user.success.logout', '已退出登录'));
    },

    // 翻译辅助方法
    _t(key, fallback) {
      if (window.NYT_Lang && typeof window.NYT_Lang.t === 'function') {
        return window.NYT_Lang.t(key) || fallback;
      }
      return fallback;
    },

    // 显示 Toast 提示
    showToast(message) {
      const toast = document.createElement('div');
      toast.className = 'user-toast';
      toast.textContent = message;
      document.body.appendChild(toast);

      requestAnimationFrame(() => toast.classList.add('show'));
      setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
      }, 2500);
    },

    // 更新顶栏用户状态
    updateHeader() {
      const userArea = document.querySelector('.top-bar-right');
      if (!userArea) return;

      const user = UserData.getCurrent();
      if (user) {
        const letter = UserData.getAvatarLetter(user);
        const logoutText = this._t('topbar.logout', '退出');
        userArea.innerHTML = `
          <a href="#" class="user-header-btn" onclick="UserApp.showProfile();return false;" title="${user.nickname}">
            <span class="user-header-avatar" style="background:${user.avatarColor}">${letter}</span>
            <span class="user-header-name">${UserUI.escapeHtml(user.nickname)}</span>
          </a>
          <span class="divider">|</span>
          <a href="#" onclick="UserApp.logout();return false;">
            <i class="fas fa-sign-out-alt"></i> ${logoutText}
          </a>
        `;
      } else {
        userArea.innerHTML = `
          <a href="#" onclick="UserApp.showLogin();return false;">
            <i class="fas fa-user"></i> <span data-i18n="topbar.login">登录</span>
          </a>
          <span class="divider">|</span>
          <a href="#" onclick="UserApp.showRegister();return false;">
            <i class="fas fa-user-plus"></i> <span data-i18n="topbar.register">注册</span>
          </a>
        `;
      }

      // 重新应用 i18n
      if (window.NYT_Lang) {
        const lang = window.NYT_Lang.getLang();
        if (lang !== 'zh') {
          window.NYT_Lang.applyLang(lang);
        }
      }
    }
  };

  // 暴露数据管理器（社区模块需要）
  window.UserData = UserData;

  // 自动初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => UserApp.init());
  } else {
    UserApp.init();
  }
})();
