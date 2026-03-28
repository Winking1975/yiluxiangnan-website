#!/usr/bin/env python3
# inject_i18n.py  — 批量为所有子页面注入 lang.css / i18n.js 及导航 data-i18n 属性
import os, re

BASE = r'c:/Users/Admin/WorkBuddy/20260315170733'

# pages: (filename, active-nav-key, page-hero-title-key, page-hero-sub-key)
PAGES = [
    ('hotel.html',     'nav.hotel',     'hotel.page.title',    'hotel.page.sub'),
    ('rent.html',      'nav.rent',      'rent.page.title',     'rent.page.sub'),
    ('work.html',      'nav.work',      'work.page.title',     'work.page.sub'),
    ('study.html',     'nav.study',     'study.page.title',    'study.page.sub'),
    ('bank.html',      'nav.bank',      'bank.page.title',     'bank.page.sub'),
    ('services.html',  'nav.services',  'services.page.title', 'services.page.sub'),
    ('community.html', 'nav.community', 'community.page.title','community.page.sub'),
    ('safety.html',    None,            'safety.page.title',   'safety.page.sub'),
]

# The shared nav HTML with data-i18n (active nav set dynamically)
def make_nav(active_key):
    navs = [
        ('index.html',    'fa-home',          'nav.home',      '首页'),
        ('visa.html',     'fa-passport',       'nav.visa',      '签证办理'),
        ('flight.html',   'fa-plane',          'nav.flight',    '机票预订'),
        ('hotel.html',    'fa-hotel',          'nav.hotel',     '酒店住宿'),
        ('rent.html',     'fa-building',       'nav.rent',      '租房租车'),
        ('work.html',     'fa-briefcase',      'nav.work',      '工作就业'),
        ('study.html',    'fa-graduation-cap', 'nav.study',     '留学教育'),
        ('bank.html',     'fa-university',     'nav.bank',      '金融银行'),
        ('services.html', 'fa-concierge-bell', 'nav.services',  '本地服务'),
        ('community.html','fa-users',          'nav.community', '华人社区'),
    ]
    items = []
    for href, icon, key, label in navs:
        active = ' class="active"' if key == active_key else ''
        items.append(f'    <li{active}><a href="{href}"><i class="fas {icon}"></i> <span data-i18n="{key}">{label}</span></a></li>')
    return '\n'.join(items)

def make_topbar_header(active_key):
    nav_items = make_nav(active_key)
    return f'''<div class="top-bar"><div class="container"><span><i class="fas fa-bullhorn"></i> <span data-i18n="topbar.notice"></span></span><div class="top-bar-right"><a href="login.html"><i class="fas fa-user"></i> <span data-i18n="topbar.login">登录</span></a><span class="divider">|</span><a href="register.html"><i class="fas fa-user-plus"></i> <span data-i18n="topbar.register">注册</span></a></div></div></div>
<header class="main-header">
  <div class="container">
    <div class="logo"><a href="index.html"><span class="logo-icon">🌴</span><span class="logo-text">南洋通</span><span class="logo-sub">NanYangTong</span></a></div>
    <div class="search-bar"><div class="search-location"><i class="fas fa-map-marker-alt"></i><select><option data-i18n="country.my">马来西亚</option><option data-i18n="country.id">印度尼西亚</option></select></div><input type="text" data-i18n-placeholder="search.placeholder" placeholder="搜索..."/><button class="search-btn"><i class="fas fa-search"></i> <span data-i18n="search.btn">搜索</span></button></div>
    <div class="header-actions"><a href="publish.html" class="btn-publish"><i class="fas fa-plus-circle"></i> <span data-i18n="header.publish">发布信息</span></a></div>
  </div>
  <nav class="sub-nav"><div class="container"><ul>
{nav_items}
  </ul></div></nav>
</header>'''

for filename, active_key, title_key, sub_key in PAGES:
    fpath = os.path.join(BASE, filename)
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Add lang.css after pages.css (or style.css if no pages.css)
    if 'lang.css' not in content:
        if 'css/pages.css' in content:
            content = content.replace(
                'href="css/pages.css"/>',
                'href="css/pages.css"/>\n  <link rel="stylesheet" href="css/lang.css"/>'
            ).replace(
                'href="css/pages.css" />',
                'href="css/pages.css" />\n  <link rel="stylesheet" href="css/lang.css" />'
            )
        else:
            content = content.replace(
                'href="css/style.css"/>',
                'href="css/style.css"/>\n  <link rel="stylesheet" href="css/pages.css"/>\n  <link rel="stylesheet" href="css/lang.css"/>'
            ).replace(
                'href="css/style.css" />',
                'href="css/style.css" />\n  <link rel="stylesheet" href="css/pages.css" />\n  <link rel="stylesheet" href="css/lang.css" />'
            )

    # 2. Add i18n.js before main.js
    if 'i18n.js' not in content:
        content = content.replace(
            '<script src="js/main.js"></script>',
            '<script src="js/i18n.js"></script>\n<script src="js/main.js"></script>'
        )

    # 3. Replace top-bar + header block with i18n version
    # Find the block from <div class="top-bar"> to </header>
    tb_start = content.find('<div class="top-bar"')
    # safety.html has style on top-bar
    if tb_start == -1:
        tb_start = content.find('<div class="top-bar"')
    header_end = content.find('</header>') + len('</header>')
    if tb_start != -1 and header_end > tb_start:
        new_nav = make_topbar_header(active_key)
        content = content[:tb_start] + new_nav + '\n\n' + content[header_end:]

    # 4. Update page-hero breadcrumb + h1 + p with data-i18n
    # Replace breadcrumb text and h1/p in page-hero block
    # We'll do a targeted replace for the breadcrumb link
    content = content.replace(
        '<a href="index.html">首页</a>',
        '<a href="index.html" data-i18n="nav.home">首页</a>'
    )

    # Replace <h1> in page-hero with data-i18n span
    def add_i18n_to_hero_h1(m):
        inner = m.group(1)
        # if already has data-i18n, skip
        if 'data-i18n' in inner:
            return m.group(0)
        # wrap text content in span
        return f'<h1>{inner} <span data-i18n="{title_key}"></span></h1>'

    # simpler: just tag the <p> inside page-hero
    # Replace page-hero <p> first occurrence after page-hero div
    hero_idx = content.find('class="page-hero"')
    if hero_idx == -1:
        hero_idx = content.find("class='page-hero'")
    if hero_idx != -1:
        hero_end = content.find('</div>', hero_idx)
        # find next </div> to close page-hero container  
        hero_block = content[hero_idx:hero_end+6]
        # mark the <p> in the hero
        if f'data-i18n="{sub_key}"' not in hero_block:
            # try to tag the <p> tag
            new_hero_block = re.sub(
                r'<p>([^<]+)</p>',
                f'<p data-i18n="{sub_key}">\\1</p>',
                hero_block,
                count=1
            )
            content = content[:hero_idx] + new_hero_block + content[hero_end+6:]

    with open(fpath, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f'✅ {filename}')

print('\n🌴 All pages updated with i18n support!')
