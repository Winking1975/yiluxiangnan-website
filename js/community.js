/**
 * 一路向南社区模块 - 经验分享、点赞、评论
 * 纯前端实现，数据存储在 localStorage
 * 接入用户系统：发帖/评论/点赞需登录
 */

(function() {
  'use strict';

  const STORAGE_KEY = 'nyt_community';
  const POSTS_KEY = 'nyt_posts';

  // ============ 数据管理 ============
  const CommunityData = {
    // 获取存储的数据
    getData() {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : { likes: {}, comments: {}, userPosts: [] };
    },

    // 保存数据
    saveData(data) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    },

    // 获取帖子列表（合并内置帖子和用户帖子）
    getAllPosts() {
      const builtInPosts = window.NYT_POSTS || [];
      const userPosts = this.getData().userPosts || [];
      return [...builtInPosts, ...userPosts].sort((a, b) => b.timestamp - a.timestamp);
    },

    // 添加用户帖子
    addPost(post) {
      const data = this.getData();
      post.id = 'user_' + Date.now();
      post.timestamp = Date.now();
      post.likes = 0;
      post.comments = [];
      data.userPosts.unshift(post);
      this.saveData(data);
      return post;
    },

    // 点赞/取消点赞
    toggleLike(postId) {
      const data = this.getData();
      if (!data.likes) data.likes = {};
      
      const isLiked = data.likes[postId];
      if (isLiked) {
        delete data.likes[postId];
      } else {
        data.likes[postId] = true;
      }
      this.saveData(data);
      return !isLiked; // 返回新的状态
    },

    // 检查是否已点赞
    isLiked(postId) {
      const data = this.getData();
      return data.likes && data.likes[postId];
    },

    // 获取点赞数（内置点赞 + 用户点赞）
    getLikeCount(postId, baseLikes = 0) {
      const data = this.getData();
      const userLikes = data.likes && data.likes[postId] ? 1 : 0;
      return baseLikes + userLikes;
    },

    // 添加评论
    addComment(postId, comment) {
      const data = this.getData();
      if (!data.comments) data.comments = {};
      if (!data.comments[postId]) data.comments[postId] = [];
      
      comment.id = 'cmt_' + Date.now();
      comment.timestamp = Date.now();
      data.comments[postId].push(comment);
      this.saveData(data);
      return comment;
    },

    // 获取评论列表
    getComments(postId) {
      const data = this.getData();
      return data.comments && data.comments[postId] ? data.comments[postId] : [];
    }
  };

  // ============ UI 渲染 ============
  const CommunityUI = {
    // 渲染帖子卡片
    renderPostCard(post) {
      const isLiked = CommunityData.isLiked(post.id);
      const likeCount = CommunityData.getLikeCount(post.id, post.likes || 0);
      const comments = CommunityData.getComments(post.id);
      const timeStr = this.formatTime(post.timestamp);
      const user = typeof UserData !== 'undefined' ? UserData.getCurrent() : null;

      // 显示作者头像 — 如果是用户自己发的帖子，显示登录态头像
      const authorName = post.author || '匿名用户';
      const avatarColor = post.avatarColor || '#999';

      return `
        <div class="community-post" data-post-id="${post.id}">
          <div class="post-header">
            <div class="post-avatar" style="background: ${avatarColor}">${authorName.charAt(0)}</div>
            <div class="post-meta">
              <div class="post-author">${this.escapeHtml(authorName)}</div>
              <div class="post-time">${timeStr} · ${post.category || '经验分享'}</div>
            </div>
          </div>
          <div class="post-content">
            <div class="post-text">${this.escapeHtml(post.content)}</div>
            ${post.images ? this.renderImages(post.images) : ''}
          </div>
          <div class="post-actions">
            <button class="post-action like-btn ${isLiked ? 'liked' : ''}" onclick="CommunityApp.toggleLike('${post.id}')">
              <i class="${isLiked ? 'fas' : 'far'} fa-heart"></i>
              <span class="like-count">${likeCount}</span>
            </button>
            <button class="post-action comment-btn" onclick="CommunityApp.toggleComments('${post.id}')">
              <i class="far fa-comment"></i>
              <span class="comment-count">${comments.length + (post.comments?.length || 0)}</span>
            </button>
            <button class="post-action share-btn" onclick="CommunityApp.sharePost('${post.id}')">
              <i class="far fa-share-square"></i>
              分享
            </button>
          </div>
          <div class="post-comments" id="comments-${post.id}" style="display:none;">
            <div class="comments-list">
              ${this.renderComments(comments)}
            </div>
            <div class="comment-input-area">
              <input type="text" class="comment-input" placeholder="${user ? '写下你的评论...' : '登录后即可评论'}" 
                     ${user ? '' : 'readonly onclick="UserApp.showLogin()"' }
                     onkeypress="if(event.key==='Enter')CommunityApp.submitComment('${post.id}',this)">
              <button class="comment-submit" onclick="CommunityApp.submitComment('${post.id}',this.previousElementSibling)">
                发送
              </button>
            </div>
          </div>
        </div>
      `;
    },

    // 渲染图片
    renderImages(images) {
      if (!images || images.length === 0) return '';
      const imageHtml = images.map(img => `<img src="${img}" alt="" class="post-image">`).join('');
      return `<div class="post-images ${images.length > 1 ? 'multi' : ''}">${imageHtml}</div>`;
    },

    // 渲染评论
    renderComments(comments) {
      if (comments.length === 0) return '<div class="no-comments">暂无评论，来说两句吧~</div>';
      
      return comments.map(c => `
        <div class="comment-item">
          <div class="comment-avatar" style="background:${c.avatarColor || '#999'}">${(c.author || '?').charAt(0)}</div>
          <div class="comment-body">
            <div class="comment-author">${this.escapeHtml(c.author || '匿名用户')}</div>
            <div class="comment-text">${this.escapeHtml(c.content)}</div>
            <div class="comment-time">${this.formatTime(c.timestamp)}</div>
          </div>
        </div>
      `).join('');
    },

    // 格式化时间
    formatTime(timestamp) {
      const now = Date.now();
      const diff = now - timestamp;
      const minute = 60 * 1000;
      const hour = 60 * minute;
      const day = 24 * hour;

      if (diff < minute) return '刚刚';
      if (diff < hour) return Math.floor(diff / minute) + '分钟前';
      if (diff < day) return Math.floor(diff / hour) + '小时前';
      if (diff < 7 * day) return Math.floor(diff / day) + '天前';
      
      const date = new Date(timestamp);
      return `${date.getMonth() + 1}月${date.getDate()}日`;
    },

    // HTML转义
    escapeHtml(text) {
      const div = document.createElement('div');
      div.textContent = text;
      return div.innerHTML.replace(/\n/g, '<br>');
    }
  };

  // ============ 应用逻辑 ============
  window.CommunityApp = {
    // 初始化
    init(containerId, posts) {
      this.container = document.getElementById(containerId);
      if (!this.container) return;
      
      // 存储内置帖子
      window.NYT_POSTS = posts || [];
      
      // 渲染所有帖子
      this.renderAllPosts();
      
      // 添加发帖表单
      this.addPostForm();
    },

    // 渲染所有帖子
    renderAllPosts() {
      const posts = CommunityData.getAllPosts();
      if (posts.length === 0) {
        this.container.innerHTML = '<div class="no-posts">暂无分享，来做第一个分享者吧！</div>';
        return;
      }
      
      this.container.innerHTML = posts.map(p => CommunityUI.renderPostCard(p)).join('');
    },

    // 添加发帖表单
    addPostForm() {
      const user = typeof UserData !== 'undefined' ? UserData.getCurrent() : null;
      const formHtml = user ? `
        <div class="community-post-form">
          <div class="post-form-header">
            <div class="post-avatar" style="background:${user.avatarColor};width:32px;height:32px;font-size:14px;">${user.nickname.charAt(0)}</div>
            <span>分享你的经验，${this.escapeHtml(user.nickname)}</span>
          </div>
          <textarea class="post-form-textarea" placeholder="分享你的入境经验、签证心得、或者任何有用的信息..." maxlength="500"></textarea>
          <div class="post-form-footer">
            <span class="char-count">0/500</span>
            <button class="post-form-submit" onclick="CommunityApp.submitPost()">
              <i class="fas fa-paper-plane"></i> 发布
            </button>
          </div>
        </div>
      ` : `
        <div class="community-post-form" style="text-align:center;padding:24px;">
          <div class="post-form-header" style="justify-content:center;">
            <i class="fas fa-lock" style="color:#bbb;"></i>
            <span style="color:#999;">登录后即可发帖分享</span>
          </div>
          <button class="post-form-submit" style="margin:12px auto 0;" onclick="UserApp.showLogin()">
            <i class="fas fa-sign-in-alt"></i> 登录 / 注册
          </button>
        </div>
      `;
      
      // 在容器前插入表单
      const formDiv = document.createElement('div');
      formDiv.innerHTML = formHtml;
      this.container.parentNode.insertBefore(formDiv.firstElementChild, this.container);
      
      // 绑定字数统计（仅登录用户）
      const textarea = this.container.parentNode.querySelector('.post-form-textarea');
      const charCount = this.container.parentNode.querySelector('.char-count');
      if (textarea && charCount) {
        textarea.addEventListener('input', () => {
          charCount.textContent = `${textarea.value.length}/500`;
        });
      }
    },

    // 提交帖子
    submitPost() {
      // 检查登录状态
      if (typeof UserApp !== 'undefined') {
        UserApp.requireLogin(() => { this._doSubmitPost(); });
      } else {
        this._doSubmitPost();
      }
    },

    _doSubmitPost() {
      const textarea = document.querySelector('.post-form-textarea');
      if (!textarea) return;
      const content = textarea.value.trim();
      
      if (!content) {
        this.showToast('请输入内容后再发布');
        return;
      }
      
      const user = typeof UserData !== 'undefined' ? UserData.getCurrent() : null;
      const author = user ? user.nickname : '匿名用户';
      const avatarColor = user ? user.avatarColor : this.getRandomColor();

      const post = CommunityData.addPost({
        author: author,
        avatarColor: avatarColor,
        content: content,
        category: '经验分享'
      });
      
      textarea.value = '';
      const charCount = document.querySelector('.char-count');
      if (charCount) charCount.textContent = '0/500';
      
      // 重新渲染
      this.renderAllPosts();
      
      // 显示成功提示
      this.showToast('发布成功！');
    },

    // 切换点赞
    toggleLike(postId) {
      // 检查登录状态
      if (typeof UserApp !== 'undefined') {
        UserApp.requireLogin(() => { this._doToggleLike(postId); });
        return;
      }
      this._doToggleLike(postId);
    },

    _doToggleLike(postId) {
      const newState = CommunityData.toggleLike(postId);
      const postEl = document.querySelector(`[data-post-id="${postId}"]`);
      if (!postEl) return;
      const likeBtn = postEl.querySelector('.like-btn');
      const likeCount = postEl.querySelector('.like-count');
      
      likeBtn.classList.toggle('liked', newState);
      likeBtn.querySelector('i').className = newState ? 'fas fa-heart' : 'far fa-heart';
      
      // 更新数字
      const currentCount = parseInt(likeCount.textContent);
      likeCount.textContent = newState ? currentCount + 1 : currentCount - 1;
    },

    // 切换评论区显示
    toggleComments(postId) {
      const commentsEl = document.getElementById(`comments-${postId}`);
      if (!commentsEl) return;
      const isVisible = commentsEl.style.display !== 'none';
      commentsEl.style.display = isVisible ? 'none' : 'block';
      
      if (!isVisible) {
        // 展开时刷新评论列表
        const comments = CommunityData.getComments(postId);
        const listEl = commentsEl.querySelector('.comments-list');
        listEl.innerHTML = CommunityUI.renderComments(comments);

        // 更新评论输入框状态
        const input = commentsEl.querySelector('.comment-input');
        const user = typeof UserData !== 'undefined' ? UserData.getCurrent() : null;
        if (user) {
          input.placeholder = '写下你的评论...';
          input.readOnly = false;
          input.onclick = null;
        } else {
          input.placeholder = '登录后即可评论';
          input.readOnly = true;
          input.onclick = () => { if (typeof UserApp !== 'undefined') UserApp.showLogin(); };
        }
      }
    },

    // 提交评论
    submitComment(postId, inputEl) {
      // 检查登录状态
      if (typeof UserApp !== 'undefined') {
        UserApp.requireLogin(() => { this._doSubmitComment(postId, inputEl); });
        return;
      }
      this._doSubmitComment(postId, inputEl);
    },

    _doSubmitComment(postId, inputEl) {
      const content = inputEl.value.trim();
      if (!content) return;
      
      const user = typeof UserData !== 'undefined' ? UserData.getCurrent() : null;
      const author = user ? user.nickname : '匿名用户';
      const avatarColor = user ? user.avatarColor : '#999';

      CommunityData.addComment(postId, {
        author: author,
        avatarColor: avatarColor,
        content: content
      });
      
      inputEl.value = '';
      
      // 刷新评论列表
      const comments = CommunityData.getComments(postId);
      const listEl = document.querySelector(`#comments-${postId} .comments-list`);
      if (listEl) listEl.innerHTML = CommunityUI.renderComments(comments);
      
      // 更新评论数
      const postEl = document.querySelector(`[data-post-id="${postId}"]`);
      if (postEl) {
        const countEl = postEl.querySelector('.comment-count');
        countEl.textContent = parseInt(countEl.textContent) + 1;
      }
    },

    // 分享帖子
    sharePost(postId) {
      const url = window.location.href + '#post-' + postId;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(url);
        this.showToast('链接已复制到剪贴板');
      } else {
        this.showToast('分享功能需要HTTPS环境');
      }
    },

    // 显示提示
    showToast(message) {
      const toast = document.createElement('div');
      toast.className = 'community-toast';
      toast.textContent = message;
      document.body.appendChild(toast);
      
      setTimeout(() => toast.classList.add('show'), 10);
      setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
      }, 2000);
    },

    // 随机颜色
    getRandomColor() {
      const colors = ['#2d9b5c', '#1976d2', '#e91e63', '#f57c00', '#9c27b0', '#00bcd4', '#795548'];
      return colors[Math.floor(Math.random() * colors.length)];
    },

    // HTML转义
    escapeHtml(text) {
      const div = document.createElement('div');
      div.textContent = text;
      return div.innerHTML;
    }
  };

  // 暴露数据管理器供外部使用
  window.CommunityData = CommunityData;
})();
