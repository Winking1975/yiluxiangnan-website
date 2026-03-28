/* ===================================================
   一路向南 — Country Switching Module
   国家切换模块：全局状态管理 + 面板切换 + 跨页面同步
   =================================================== */

(function () {
  var STORAGE_KEY = 'nyt_country';
  var SUPPORTED   = ['my', 'id', 'sg', 'th'];
  var DEFAULT     = 'my';

  /* ──── 工具函数 ──── */
  function getCountry() {
    return sessionStorage.getItem(STORAGE_KEY) || DEFAULT;
  }

  function setCountry(code) {
    if (!SUPPORTED.includes(code)) code = DEFAULT;
    sessionStorage.setItem(STORAGE_KEY, code);

    // 同步 header select
    document.querySelectorAll('.search-location select').forEach(function (sel) {
      // option 按顺序对应 my/id/sg/th
      var idx = SUPPORTED.indexOf(code);
      if (idx >= 0 && sel.options[idx]) sel.selectedIndex = idx;
    });

    // 同步 country-tab 按钮
    document.querySelectorAll('.country-tab').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.country === code);
    });

    // 切换所有 data-country-panel 面板
    switchPanels(code);

    // 切换所有 data-country-show / data-country-hide 元素
    switchVisibility(code);

    // 触发自定义事件，让各页面自定义逻辑响应
    window.dispatchEvent(new CustomEvent('countrychange', { detail: { country: code } }));

    // 显示切换反馈
    showFeedback(code);
  }

  /* ──── 面板切换 ────
     约定：
     - data-country-panel="my"   → 只在国家=my时显示
     - data-country-panel="id"   → 只在国家=id时显示
     - data-country-panel="my,id" → 在 my 或 id 时显示
     - 没有 data-country-panel 的元素不受影响

     支持两种面板模式：
     1. hidden 模式：通过 .hidden 类控制（Bootstrap 风格）
     2. active 模式：通过 .country-panel.active 类控制（medical.html 风格，display:none/block）
  */
  function switchPanels(code) {
    document.querySelectorAll('[data-country-panel]').forEach(function (el) {
      var countries = el.getAttribute('data-country-panel').split(',').map(function (s) { return s.trim(); });
      var show = countries.includes(code);

      // 通用：hidden 类
      if (show) {
        el.classList.remove('hidden');
      } else {
        el.classList.add('hidden');
      }

      // 兼容 .country-panel 面板（medical.html 等使用 display:none/block）
      if (el.classList.contains('country-panel')) {
        if (show) {
          el.classList.add('active');
        } else {
          el.classList.remove('active');
        }
      }

      // 兼容 .slide 面板（index.html banner 使用 .slide.active 控制显示）
      if (el.classList.contains('slide')) {
        if (show) {
          el.classList.add('active');
        } else {
          el.classList.remove('active');
        }
      }
    });

    // 兼容 index.html 的 city-nav 模式
    document.querySelectorAll('.city-nav').forEach(function (nav) {
      var id = nav.id; // cities-my, cities-id 等
      if (!id) return;
      var navCountry = id.replace('cities-', '');
      if (navCountry === code) {
        nav.classList.remove('hidden');
      } else {
        nav.classList.add('hidden');
      }
    });
  }

  /* ──── 可见性切换 ────
     约定：
     - data-country-show="my"   → 只在国家=my时显示（否则隐藏）
     - data-country-hide="id"   → 在国家=id时隐藏
  */
  function switchVisibility(code) {
    document.querySelectorAll('[data-country-show]').forEach(function (el) {
      var countries = el.getAttribute('data-country-show').split(',').map(function (s) { return s.trim(); });
      el.style.display = countries.includes(code) ? '' : 'none';
    });

    document.querySelectorAll('[data-country-hide]').forEach(function (el) {
      var countries = el.getAttribute('data-country-hide').split(',').map(function (s) { return s.trim(); });
      el.style.display = countries.includes(code) ? 'none' : '';
    });
  }

  /* ──── 视觉反馈 ──── */
  function showFeedback(code) {
    var names = { my: '🇲🇾 马来西亚', id: '🇮🇩 印度尼西亚', sg: '🇸🇬 新加坡', th: '🇹🇭 泰国' };
    var fb = document.createElement('div');
    fb.style.cssText = 'position:fixed;top:80px;right:20px;background:#2d9b5c;color:#fff;padding:12px 20px;border-radius:8px;font-size:14px;z-index:10000;box-shadow:0 4px 12px rgba(0,0,0,0.15);animation:langFeedbackIn 0.3s ease;';
    fb.textContent = '✓ 已切换到 ' + (names[code] || code);
    document.body.appendChild(fb);
    setTimeout(function () {
      fb.style.animation = 'langFeedbackOut 0.3s ease';
      setTimeout(function () { fb.remove(); }, 300);
    }, 2000);
  }

  /* ──── 绑定 header select（所有页面通用） ──── */
  function bindSelects() {
    document.querySelectorAll('.search-location select').forEach(function (sel) {
      // 移除已有的 change 监听（防重复）
      if (sel._countryBound) return;
      sel._countryBound = true;

      sel.addEventListener('change', function () {
        var idx = sel.selectedIndex;
        if (idx >= 0 && idx < SUPPORTED.length) {
          setCountry(SUPPORTED[idx]);
        }
      });
    });
  }

  /* ──── 绑定 country-tab 按钮 ──── */
  function bindTabs() {
    document.querySelectorAll('.country-tab').forEach(function (btn) {
      if (btn._countryBound) return;
      btn._countryBound = true;

      btn.addEventListener('click', function () {
        var code = btn.dataset.country;
        if (code) setCountry(code);
      });
    });
  }

  /* ──── 初始化 ──── */

  // 注入全局 hidden 样式（确保跨页面兼容）
  (function injectStyles() {
    var s = document.createElement('style');
    s.textContent = '.hidden { display: none !important; }';
    document.head.appendChild(s);
  })();

  function init() {
    // 先绑定事件
    bindSelects();
    bindTabs();

    // 恢复之前的选择
    var current = getCountry();

    // 同步 select 选中状态
    document.querySelectorAll('.search-location select').forEach(function (sel) {
      var idx = SUPPORTED.indexOf(current);
      if (idx >= 0 && sel.options[idx]) sel.selectedIndex = idx;
    });

    // 同步 tab 高亮
    document.querySelectorAll('.country-tab').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.country === current);
    });

    // 切换面板
    switchPanels(current);
    switchVisibility(current);

    console.log('[Country] Initialized with country:', current);
  }

  // DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // 监听 DOM 变化，处理动态加载的 select
  var observer = new MutationObserver(function () {
    bindSelects();
    bindTabs();
  });
  observer.observe(document.documentElement, { childList: true, subtree: true });

  // 延迟断开 observer 避免性能问题
  setTimeout(function () { observer.disconnect(); }, 5000);

  /* ──── 暴露全局 API ──── */
  window.NYT_Country = {
    get: getCountry,
    set: setCountry,
    init: init
  };
})();
