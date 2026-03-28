/* ===== 南洋通 main.js ===== */

/* 数字滚动动画 */
function animateNumbers() {
  document.querySelectorAll('.stat-num[data-target]').forEach(el => {
    const target = parseInt(el.dataset.target, 10);
    const duration = 1800;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { current = target; clearInterval(timer); }
      el.textContent = Math.floor(current).toLocaleString();
    }, 16);
  });
}

/* IntersectionObserver 触发数字动画 */
const statsSection = document.querySelector('.stats-section');
if (statsSection) {
  const obs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) { animateNumbers(); obs.disconnect(); }
  }, { threshold: 0.3 });
  obs.observe(statsSection);
}

/* 国家 Tab 切换 — 已迁移到 country.js 统一管理 */
/* country-tab 点击和 header select change 均由 NYT_Country 处理 */

/* 服务商 Tab */
document.querySelectorAll('.prov-tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.prov-tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

/* 城市链接 */
document.querySelectorAll('.city-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    link.closest('.city-nav').querySelectorAll('.city-link').forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

/* 搜索框 Enter 键 */
const searchInput = document.querySelector('.search-bar input');
const searchBtn = document.querySelector('.search-btn');
if (searchInput && searchBtn) {
  searchInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') searchBtn.click();
  });
  searchBtn.addEventListener('click', () => {
    const q = searchInput.value.trim();
    if (q) {
      alert('搜索功能即将上线，正在搜索：' + q);
    }
  });
}

/* 顶部导航滚动阴影 */
const mainHeader = document.querySelector('.main-header');
if (mainHeader) {
  window.addEventListener('scroll', () => {
    mainHeader.style.boxShadow = window.scrollY > 10
      ? '0 4px 20px rgba(0,0,0,0.12)'
      : '0 2px 8px rgba(0,0,0,0.08)';
  });
}

/* 联系按钮提示 */
document.querySelectorAll('.btn-contact, .btn-apply, .btn-consult').forEach(btn => {
  btn.addEventListener('click', e => {
    if (btn.href === '#' || !btn.href) {
      e.preventDefault();
      showToast('功能即将上线，请关注微信公众号「一路向南阳光灿烂」');
    }
  });
});

/* Toast 提示 */
function showToast(msg) {
  let toast = document.getElementById('nyt-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'nyt-toast';
    toast.style.cssText = `
      position:fixed;bottom:30px;left:50%;transform:translateX(-50%) translateY(20px);
      background:rgba(26,26,26,0.9);color:#fff;padding:12px 28px;border-radius:50px;
      font-size:14px;z-index:9999;opacity:0;transition:all 0.3s ease;pointer-events:none;
      max-width:90vw;text-align:center;
    `;
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.opacity = '1';
  toast.style.transform = 'translateX(-50%) translateY(0)';
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(20px)';
  }, 3000);
}

/* 回到顶部按钮 */
const backTop = document.createElement('div');
backTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
backTop.style.cssText = `
  position:fixed;bottom:80px;right:24px;width:44px;height:44px;
  background:#2d9b5c;color:#fff;border-radius:50%;display:flex;
  align-items:center;justify-content:center;cursor:pointer;
  box-shadow:0 4px 16px rgba(45,155,92,0.4);opacity:0;transition:all 0.3s;
  z-index:999;font-size:16px;
`;
document.body.appendChild(backTop);
window.addEventListener('scroll', () => {
  backTop.style.opacity = window.scrollY > 400 ? '1' : '0';
  backTop.style.pointerEvents = window.scrollY > 400 ? 'auto' : 'none';
});
backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* 图片懒加载占位 */
document.querySelectorAll('img[data-src]').forEach(img => {
  const obs2 = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      img.src = img.dataset.src;
      obs2.disconnect();
    }
  });
  obs2.observe(img);
});

console.log('🌴 南洋通 NanYangTong loaded.');
