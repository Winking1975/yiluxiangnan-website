/* ===================================================
   南洋通 NanYangTong — i18n Translations
   Languages: zh-CN | en | ms (Bahasa Melayu) | id (Bahasa Indonesia)
   =================================================== */

window.NYT_I18N = {

  /* ────────────────────────────────────────────────
     COMMON — shared across all pages
  ──────────────────────────────────────────────── */
  'nav.home':        { zh:'首页', en:'Home', ms:'Laman Utama', id:'Beranda' },
  'nav.visa':        { zh:'签证办理', en:'Visa Services', ms:'Perkhidmatan Visa', id:'Layanan Visa' },
  'nav.flight':      { zh:'机票预订', en:'Flights', ms:'Tempahan Penerbangan', id:'Pesan Tiket' },
  'nav.hotel':       { zh:'酒店住宿', en:'Hotels', ms:'Hotel', id:'Hotel' },
  'nav.rent':        { zh:'租房租车', en:'Rent / Cars', ms:'Sewa Rumah & Kereta', id:'Sewa Rumah & Mobil' },
  'nav.work':        { zh:'工作就业', en:'Jobs', ms:'Pekerjaan', id:'Pekerjaan' },
  'nav.study':       { zh:'留学教育', en:'Study Abroad', ms:'Pendidikan', id:'Pendidikan' },
  'nav.bank':        { zh:'金融银行', en:'Banking', ms:'Perbankan', id:'Perbankan' },
  'nav.services':    { zh:'本地服务', en:'Local Services', ms:'Perkhidmatan Tempatan', id:'Layanan Lokal' },
  'nav.community':   { zh:'华人社区', en:'Community', ms:'Komuniti', id:'Komunitas' },
  'nav.medical':     { zh:'医疗就医', en:'Medical Guide', ms:'Panduan Perubatan', id:'Panduan Medis' },

  'topbar.notice':   { zh:'公告：马来西亚e-NTL签证新政策已更新，点击查看详情', en:'Notice: Malaysia e-NTL visa new policy updated. Click for details.', ms:'Notis: Dasar visa e-NTL Malaysia baharu dikemaskini. Klik untuk maklumat lanjut.', id:'Pengumuman: Kebijakan visa e-NTL Malaysia diperbarui. Klik untuk detail.' },
  'topbar.login':    { zh:'登录', en:'Login', ms:'Log Masuk', id:'Masuk' },
  'topbar.register': { zh:'注册', en:'Register', ms:'Daftar', id:'Daftar' },
  'topbar.logout':   { zh:'退出', en:'Logout', ms:'Log Keluar', id:'Keluar' },
  'user.login.title':      { zh:'欢迎回来', en:'Welcome Back', ms:'Selamat Kembali', id:'Selamat Datang Kembali' },
  'user.login.subtitle':   { zh:'登录一路向南，加入华人社区', en:'Sign in to join the Chinese community', ms:'Log masuk untuk menyertai komuniti Cina', id:'Masuk untuk bergabung dengan komunitas Tionghoa' },
  'user.login.username':   { zh:'用户名', en:'Username', ms:'Nama Pengguna', id:'Nama Pengguna' },
  'user.login.password':   { zh:'密码', en:'Password', ms:'Kata Laluan', id:'Kata Sandi' },
  'user.login.btn':        { zh:'登录', en:'Sign In', ms:'Log Masuk', id:'Masuk' },
  'user.login.noaccount':  { zh:'还没有账号？', en:'No account yet?', ms:'Tiada akaun lagi?', id:'Belum punya akun?' },
  'user.login.goregister': { zh:'立即注册', en:'Register now', ms:'Daftar sekarang', id:'Daftar sekarang' },
  'user.login.tip':        { zh:'新用户请先注册，数据保存在本地浏览器中', en:'Please register first. Data is stored locally in your browser.', ms:'Sila daftar terlebih dahulu. Data disimpan secara tempatan dalam pelayar anda.', id:'Silakan daftar terlebih dahulu. Data disimpan secara lokal di browser Anda.' },
  'user.register.title':       { zh:'加入一路向南', en:'Join Us', ms:'Sertai Kami', id:'Bergabunglah' },
  'user.register.subtitle':    { zh:'注册账号，开始分享你的南洋生活', en:'Register and start sharing your Southeast Asia life', ms:'Daftar akaun dan mula berkongsi kehidupan Asia Tenggara anda', id:'Daftar akun dan mulai berbagi kehidupan Asia Tenggara Anda' },
  'user.register.nickname':    { zh:'昵称', en:'Nickname', ms:'Nama Samaran', id:'Nama Panggilan' },
  'user.register.btn':         { zh:'注册', en:'Register', ms:'Daftar', id:'Daftar' },
  'user.register.hasaccount':  { zh:'已有账号？', en:'Already have an account?', ms:'Sudah ada akaun?', id:'Sudah punya akun?' },
  'user.register.gologin':     { zh:'立即登录', en:'Sign in now', ms:'Log masuk sekarang', id:'Masuk sekarang' },
  'user.register.tip':         { zh:'账号数据保存在本地浏览器，更换设备需重新注册', en:'Account data is stored locally. You will need to re-register on a new device.', ms:'Data akaun disimpan secara tempatan. Anda perlu mendaftar semula pada peranti baharu.', id:'Data akun disimpan secara lokal. Anda perlu mendaftar ulang di perangkat baru.' },
  'user.profile.edit':         { zh:'编辑资料', en:'Edit Profile', ms:'Sunting Profil', id:'Sunting Profil' },
  'user.profile.save':         { zh:'保存修改', en:'Save Changes', ms:'Simpan Perubahan', id:'Simpan Perubahan' },
  'user.profile.bio':          { zh:'个人简介', en:'Bio', ms:'Bio', id:'Bio' },
  'user.profile.changepwd':    { zh:'修改密码', en:'Change Password', ms:'Tukar Kata Laluan', id:'Ubah Kata Sandi' },
  'user.profile.logout':       { zh:'退出登录', en:'Sign Out', ms:'Log Keluar', id:'Keluar' },
  'user.error.username.min':   { zh:'用户名至少3个字符', en:'Username must be at least 3 characters', ms:'Nama pengguna sekurang-kurangnya 3 aksara', id:'Nama pengguna minimal 3 karakter' },
  'user.error.username.max':   { zh:'用户名最多20个字符', en:'Username must be at most 20 characters', ms:'Nama pengguna maksimum 20 aksara', id:'Nama pengguna maksimal 20 karakter' },
  'user.error.username.format': { zh:'用户名只能包含字母、数字和下划线', en:'Username can only contain letters, numbers, and underscores', ms:'Nama pengguna hanya boleh mengandungi huruf, nombor dan garis bawah', id:'Nama pengguna hanya boleh berisi huruf, angka, dan garis bawah' },
  'user.error.username.taken': { zh:'该用户名已被注册', en:'This username is already taken', ms:'Nama pengguna ini telah didaftarkan', id:'Nama pengguna ini sudah terdaftar' },
  'user.error.password.min':   { zh:'密码至少6个字符', en:'Password must be at least 6 characters', ms:'Kata laluan sekurang-kurangnya 6 aksara', id:'Kata sandi minimal 6 karakter' },
  'user.error.nickname.empty': { zh:'请输入昵称', en:'Please enter a nickname', ms:'Sila masukkan nama samaran', id:'Silakan masukkan nama panggilan' },
  'user.error.nickname.max':   { zh:'昵称最多15个字符', en:'Nickname must be at most 15 characters', ms:'Nama samaran maksimum 15 aksara', id:'Nama panggilan maksimal 15 karakter' },
  'user.error.nickname.taken': { zh:'该昵称已被使用', en:'This nickname is already taken', ms:'Nama samaran ini telah digunakan', id:'Nama panggilan ini sudah digunakan' },
  'user.error.password.mismatch': { zh:'两次密码输入不一致', en:'Passwords do not match', ms:'Kata laluan tidak sepadan', id:'Kata sandi tidak cocok' },
  'user.error.login.notfound': { zh:'用户名不存在', en:'Username not found', ms:'Nama pengguna tidak dijumpai', id:'Nama pengguna tidak ditemukan' },
  'user.error.login.wrongpwd': { zh:'密码错误', en:'Incorrect password', ms:'Kata laluan salah', id:'Kata sandi salah' },
  'user.error.oldpwd':         { zh:'原密码错误', en:'Old password is incorrect', ms:'Kata laluan lama salah', id:'Kata sandi lama salah' },
  'user.success.register':     { zh:'注册成功！', en:'Registration successful!', ms:'Pendaftaran berjaya!', id:'Pendaftaran berhasil!' },
  'user.success.login':        { zh:'登录成功！', en:'Login successful!', ms:'Log masuk berjaya!', id:'Login berhasil!' },
  'user.success.logout':       { zh:'已退出登录', en:'You have been signed out', ms:'Anda telah log keluar', id:'Anda telah keluar' },
  'user.success.profile':      { zh:'资料已更新', en:'Profile updated', ms:'Profil dikemaskini', id:'Profil diperbarui' },
  'user.success.password':     { zh:'密码已修改', en:'Password changed', ms:'Kata laluan ditukar', id:'Kata sandi diubah' },

  // ──── 在线咨询/预约模块 ────
  'services.my.inquiries':     { zh:'我的咨询', en:'My Inquiries', ms:'Pertanyaan Saya', id:'Pertanyaan Saya' },
  'inquiry.title':             { zh:'在线咨询', en:'Inquiry', ms:'Pertanyaan', id:'Pertanyaan' },
  'inquiry.subtitle':          { zh:'咨询商户', en:'Contact Merchant', ms:'Hubungi Peniaga', id:'Hubungi Pedagang' },
  'inquiry.privacy':           { zh:'您的信息仅用于对接商户，平台严格保密', en:'Your info is used only to connect you with the merchant. We keep it strictly confidential.', ms:'Maklumat anda hanya digunakan untuk menghubungkan anda dengan peniaga. Kami merahsiakannya.', id:'Info Anda hanya digunakan untuk menghubungkan Anda dengan pedagang. Kami menjaga kerahasiaannya.' },
  'inquiry.name':              { zh:'您的姓名', en:'Your Name', ms:'Nama Anda', id:'Nama Anda' },
  'inquiry.phone':             { zh:'联系电话', en:'Phone Number', ms:'Nombor Telefon', id:'Nomor Telepon' },
  'inquiry.wechat':            { zh:'微信号', en:'WeChat ID', ms:'ID WeChat', id:'ID WeChat' },
  'inquiry.type':              { zh:'咨询类型', en:'Inquiry Type', ms:'Jenis Pertanyaan', id:'Jenis Pertanyaan' },
  'inquiry.message':           { zh:'详细需求', en:'Details', ms:'Butiran', id:'Detail' },
  'inquiry.submit':            { zh:'提交咨询', en:'Submit', ms:'Hantar', id:'Kirim' },
  'inquiry.success':           { zh:'咨询已提交！', en:'Inquiry Submitted!', ms:'Pertanyaan Dihantar!', id:'Pertanyaan Terkirim!' },
  'inquiry.success.sent':      { zh:'您的咨询已发送给', en:'Your inquiry has been sent to', ms:'Pertanyaan anda telah dihantar kepada', id:'Pertanyaan Anda telah dikirim ke' },
  'inquiry.success.reply':     { zh:'商户通常在24小时内通过电话或微信联系您', en:'The merchant will usually contact you within 24 hours via phone or WeChat', ms:'Peniaga biasanya menghubungi anda dalam 24 jam melalui telefon atau WeChat', id:'Pedagang biasanya menghubungi Anda dalam 24 jam melalui telepon atau WeChat' },
  'inquiry.view':              { zh:'查看我的咨询', en:'View My Inquiries', ms:'Lihat Pertanyaan Saya', id:'Lihat Pertanyaan Saya' },
  'inquiry.admin.title':       { zh:'线索管理面板', en:'Lead Management', ms:'Pengurusan Lead', id:'Manajemen Lead' },
  'inquiry.export':            { zh:'导出CSV', en:'Export CSV', ms:'Eksport CSV', id:'Ekspor CSV' },
  'inquiry.status.new':        { zh:'新线索', en:'New', ms:'Baharu', id:'Baru' },
  'inquiry.status.contacted':  { zh:'已联系', en:'Contacted', ms:'Dihubungi', id:'Dihubungi' },
  'inquiry.status.closed':     { zh:'已成交', en:'Closed', ms:'Ditutup', id:'Ditutup' },
  'inquiry.status.invalid':    { zh:'无效', en:'Invalid', ms:'Tidak Sah', id:'Tidak Valid' },

  'topbar.mobile':   { zh:'手机版', en:'Mobile', ms:'Versi Mudah Alih', id:'Versi Mobile' },

  'header.publish':  { zh:'发布信息', en:'Post Info', ms:'Hantar Maklumat', id:'Pasang Iklan' },
  'header.login':    { zh:'登录', en:'Login', ms:'Log Masuk', id:'Masuk' },
  'search.placeholder': { zh:'搜索签证办理、租房、工作、留学...', en:'Search visa, rental, jobs, study...', ms:'Cari visa, sewa, kerja, pengajian...', id:'Cari visa, sewa, kerja, studi...' },
  'search.btn':      { zh:'搜索', en:'Search', ms:'Cari', id:'Cari' },

  'country.my':      { zh:'马来西亚', en:'Malaysia', ms:'Malaysia', id:'Malaysia' },
  'country.id':      { zh:'印度尼西亚', en:'Indonesia', ms:'Indonesia', id:'Indonesia' },
  'country.sg':      { zh:'新加坡', en:'Singapore', ms:'Singapura', id:'Singapura' },
  'country.th':      { zh:'泰国', en:'Thailand', ms:'Thailand', id:'Thailand' },

  'city.label':      { zh:'热门城市：', en:'Popular Cities:', ms:'Bandar Popular:', id:'Kota Populer:' },

  'footer.brand.desc': { zh:'专注为中国人提供东南亚生活服务，让出行更安心，生活更便利。', en:'Dedicated to providing Southeast Asia life services for Chinese, making travel safer and life more convenient.', ms:'Kami menyediakan perkhidmatan hidup Asia Tenggara untuk rakyat China, menjadikan perjalanan lebih selamat dan kehidupan lebih mudah.', id:'Berdedikasi memberikan layanan kehidupan Asia Tenggara bagi orang Tiongkok, membuat perjalanan lebih aman dan kehidupan lebih nyaman.' },
  'footer.hotline':  { zh:'7×24小时服务热线', en:'24/7 Service Hotline', ms:'Talian Perkhidmatan 24/7', id:'Hotline Layanan 24/7' },

  'footer.visa.title':  { zh:'签证服务', en:'Visa Services', ms:'Perkhidmatan Visa', id:'Layanan Visa' },
  'footer.life.title':  { zh:'生活服务', en:'Life Services', ms:'Perkhidmatan Kehidupan', id:'Layanan Kehidupan' },
  'footer.guide.title': { zh:'攻略指南', en:'Travel Guides', ms:'Panduan Perjalanan', id:'Panduan Perjalanan' },
  'footer.about.title': { zh:'关于我们', en:'About Us', ms:'Tentang Kami', id:'Tentang Kami' },

  'footer.visa.tourist':  { zh:'旅游签证', en:'Tourist Visa', ms:'Visa Pelancong', id:'Visa Turis' },
  'footer.visa.work':     { zh:'工作签证', en:'Work Visa', ms:'Visa Kerja', id:'Visa Kerja' },
  'footer.visa.student':  { zh:'学生签证', en:'Student Visa', ms:'Visa Pelajar', id:'Visa Pelajar' },
  'footer.visa.mm2h':     { zh:'MM2H第二家园', en:'MM2H Programme', ms:'Program MM2H', id:'Program MM2H' },
  'footer.visa.pr':       { zh:'永久居留', en:'Permanent Residence', ms:'Pemastautin Tetap', id:'Residensi Permanen' },

  'footer.life.rent':     { zh:'租房租车', en:'Rent / Cars', ms:'Sewa Rumah & Kereta', id:'Sewa Rumah & Mobil' },
  'footer.life.hotel':    { zh:'酒店预订', en:'Hotel Booking', ms:'Tempahan Hotel', id:'Pesan Hotel' },
  'footer.life.work':     { zh:'找工作', en:'Find Jobs', ms:'Cari Kerja', id:'Cari Kerja' },
  'footer.life.bank':     { zh:'银行开户', en:'Bank Account', ms:'Buka Akaun Bank', id:'Buka Rekening Bank' },
  'footer.life.services': { zh:'生活服务', en:'Life Services', ms:'Perkhidmatan Kehidupan', id:'Layanan Kehidupan' },

  'footer.guide.my':      { zh:'马来西亚新手指南', en:'Malaysia Newcomer Guide', ms:'Panduan Pendatang Baru Malaysia', id:'Panduan Pendatang Baru Malaysia' },
  'footer.guide.id':      { zh:'印尼新手指南', en:'Indonesia Newcomer Guide', ms:'Panduan Pendatang Baru Indonesia', id:'Panduan Pendatang Baru Indonesia' },
  'footer.guide.safety':  { zh:'防骗安全指南', en:'Anti-Scam Guide', ms:'Panduan Anti-Penipuan', id:'Panduan Anti-Penipuan' },
  'footer.guide.law':     { zh:'法律常识', en:'Legal Basics', ms:'Asas Undang-undang', id:'Dasar Hukum' },
  'footer.guide.culture': { zh:'文化礼仪', en:'Culture & Etiquette', ms:'Budaya & Etika', id:'Budaya & Etiket' },

  'footer.about.us':      { zh:'公司介绍', en:'About Us', ms:'Tentang Kami', id:'Tentang Kami' },
  'footer.about.join':    { zh:'服务商入驻', en:'List Your Service', ms:'Senaraikan Perkhidmatan', id:'Daftarkan Layanan' },
  'footer.about.contact': { zh:'联系我们', en:'Contact Us', ms:'Hubungi Kami', id:'Hubungi Kami' },
  'footer.about.privacy': { zh:'隐私政策', en:'Privacy Policy', ms:'Dasar Privasi', id:'Kebijakan Privasi' },
  'footer.about.terms':   { zh:'服务条款', en:'Terms of Service', ms:'Terma Perkhidmatan', id:'Ketentuan Layanan' },

  /* ────────────────────────────────────────────────
     INDEX PAGE
  ──────────────────────────────────────────────── */
  'index.banner.tag':    { zh:'🇲🇾 马来西亚', en:'🇲🇾 Malaysia', ms:'🇲🇾 Malaysia', id:'🇲🇾 Malaysia' },
  'index.banner.h1':     { zh:'在马来西亚生活<br/>从这里开始', en:'Life in Malaysia<br/>Starts Here', ms:'Kehidupan di Malaysia<br/>Bermula Di Sini', id:'Kehidupan di Malaysia<br/>Dimulai Di Sini' },
  'index.banner.p':      { zh:'签证·住房·工作·留学·银行·生活服务<br/>一站解决，专业靠谱', en:'Visa · Housing · Jobs · Study · Banking · Life Services<br/>All-in-one, Professional & Reliable', ms:'Visa · Perumahan · Kerja · Pengajian · Perbankan · Perkhidmatan Kehidupan<br/>Satu henti, profesional & dipercayai', id:'Visa · Hunian · Pekerjaan · Studi · Perbankan · Layanan Kehidupan<br/>Satu atap, profesional & terpercaya' },
  'index.banner.btn1':   { zh:'办理签证 →', en:'Get Visa →', ms:'Mohon Visa →', id:'Ajukan Visa →' },
  'index.banner.btn2':   { zh:'新手指南', en:'Newcomer Guide', ms:'Panduan Baru', id:'Panduan Pendatang' },

  'quick.visa':    { zh:'签证办理', en:'Visa', ms:'Visa', id:'Visa' },
  'quick.flight':  { zh:'买机票', en:'Flights', ms:'Terbang', id:'Tiket' },
  'quick.hotel':   { zh:'订酒店', en:'Hotels', ms:'Hotel', id:'Hotel' },
  'quick.rent':    { zh:'租房子', en:'Rent Room', ms:'Sewa Rumah', id:'Sewa Rumah' },
  'quick.car':     { zh:'租汽车', en:'Rent Car', ms:'Sewa Kereta', id:'Sewa Mobil' },
  'quick.work':    { zh:'找工作', en:'Find Jobs', ms:'Cari Kerja', id:'Cari Kerja' },
  'quick.study':   { zh:'留学申请', en:'Study Abroad', ms:'Belajar di Luar', id:'Studi Luar Negeri' },
  'quick.bank':    { zh:'开银行卡', en:'Open Account', ms:'Buka Akaun', id:'Buka Rekening' },
  'quick.services':{ zh:'生活服务', en:'Services', ms:'Perkhidmatan', id:'Layanan' },
  'quick.community':{ zh:'华人社区', en:'Community', ms:'Komuniti', id:'Komunitas' },
  'quick.medical':  { zh:'就医指南', en:'Medical Guide', ms:'Panduan Perubatan', id:'Panduan Medis' },

  'home.featured.visa.title':  { zh:'签证办理中心', en:'Visa Processing Center', ms:'Pusat Pemprosesan Visa', id:'Pusat Pemrosesan Visa' },
  'home.featured.visa.all':    { zh:'全部 →', en:'All →', ms:'Semua →', id:'Semua →' },
  'home.featured.rent.title':  { zh:'热门房源', en:'Popular Rentals', ms:'Sewa Popular', id:'Sewa Populer' },
  'home.featured.rent.more':   { zh:'更多房源 →', en:'More Listings →', ms:'Lebih Banyak →', id:'Lebih Banyak →' },

  'visa.tourist.name':    { zh:'旅游签证', en:'Tourist Visa', ms:'Visa Pelancong', id:'Visa Turis' },
  'visa.tourist.desc':    { zh:'免签/落地签/电子签<br/>最快1天出签', en:'Visa-free/VOA/e-Visa<br/>As fast as 1 day', ms:'Bebas Visa/VOA/e-Visa<br/>Secepat 1 hari', id:'Bebas Visa/VOA/e-Visa<br/>Secepat 1 hari' },
  'visa.tourist.btn':     { zh:'立即办理', en:'Apply Now', ms:'Mohon Sekarang', id:'Ajukan Sekarang' },
  'visa.work.name':       { zh:'工作签证 (EP/DP)', en:'Work Visa (EP/DP)', ms:'Visa Kerja (EP/DP)', id:'Visa Kerja (EP/DP)' },
  'visa.work.desc':       { zh:'Employment Pass<br/>专业人士首选', en:'Employment Pass<br/>For professionals', ms:'Employment Pass<br/>Untuk profesional', id:'Employment Pass<br/>Untuk profesional' },
  'visa.work.btn':        { zh:'立即办理', en:'Apply Now', ms:'Mohon Sekarang', id:'Ajukan Sekarang' },
  'visa.student.name':    { zh:'学生签证', en:'Student Visa', ms:'Visa Pelajar', id:'Visa Pelajar' },
  'visa.student.desc':    { zh:'Student Pass<br/>院校直接担保', en:'Student Pass<br/>School-sponsored', ms:'Student Pass<br/>Penajaan sekolah', id:'Student Pass<br/>Disponsori sekolah' },
  'visa.student.btn':     { zh:'立即办理', en:'Apply Now', ms:'Mohon Sekarang', id:'Ajukan Sekarang' },
  'visa.mm2h.name':       { zh:'MM2H第二家园', en:'MM2H Programme', ms:'Program MM2H', id:'Program MM2H' },
  'visa.mm2h.desc':       { zh:'长期居留签证<br/>全家移居首选', en:'Long-term residency<br/>Best for families', ms:'Kediaman jangka panjang<br/>Pilihan terbaik keluarga', id:'Residensi jangka panjang<br/>Pilihan terbaik keluarga' },
  'visa.mm2h.btn':        { zh:'立即办理', en:'Apply Now', ms:'Mohon Sekarang', id:'Ajukan Sekarang' },

  'rent.tag.whole':     { zh:'整租', en:'Entire Unit', ms:'Sewa Penuh', id:'Unit Penuh' },
  'rent.tag.share':     { zh:'合租', en:'Shared', ms:'Dikongsi', id:'Bersama' },
  'rent.tag.serviced':  { zh:'服务公寓', en:'Serviced Apt', ms:'Apartmen Servis', id:'Apartemen Servis' },
  'rent.badge.agent':   { zh:'中介可联系', en:'Agent Available', ms:'Ejen Tersedia', id:'Agen Tersedia' },
  'rent.badge.new':     { zh:'新上架', en:'New Listing', ms:'Senarai Baru', id:'Listing Baru' },
  'rent.badge.chinese': { zh:'中文房东', en:'Chinese Landlord', ms:'Tuan Rumah Cina', id:'Pemilik Tionghoa' },

  'home.cats.title':    { zh:'全面服务，一站搞定', en:'Complete Services, One-Stop Solution', ms:'Perkhidmatan Lengkap, Satu Henti', id:'Layanan Lengkap, Satu Atap' },
  'home.cats.sub':      { zh:'从落地第一天开始，我们帮你解决所有问题', en:'From day one of arrival, we solve every problem for you', ms:'Dari hari pertama tiba, kami selesaikan setiap masalah anda', id:'Dari hari pertama tiba, kami selesaikan setiap masalah Anda' },

  'cat.visa.title':    { zh:'签证服务', en:'Visa Services', ms:'Perkhidmatan Visa', id:'Layanan Visa' },
  'cat.visa.sub':      { zh:'旅游签·工签·学签·MM2H·永居', en:'Tourist·Work·Student·MM2H·PR', ms:'Pelancong·Kerja·Pelajar·MM2H·Pemastautin', id:'Turis·Kerja·Pelajar·MM2H·Residen' },
  'cat.visa.f1':       { zh:'✓ 中文全程跟进', en:'✓ Full Chinese support', ms:'✓ Sokongan bahasa Cina penuh', id:'✓ Dukungan bahasa Mandarin penuh' },
  'cat.visa.f2':       { zh:'✓ 最快1天出签', en:'✓ Approval in 1 day', ms:'✓ Kelulusan dalam 1 hari', id:'✓ Persetujuan dalam 1 hari' },
  'cat.visa.f3':       { zh:'✓ 拒签退款保障', en:'✓ Refund if rejected', ms:'✓ Bayaran balik jika ditolak', id:'✓ Pengembalian dana jika ditolak' },

  'cat.flight.title':  { zh:'机票预订', en:'Flight Booking', ms:'Tempahan Penerbangan', id:'Pesan Tiket Pesawat' },
  'cat.flight.sub':    { zh:'直飞·经停·特价机票推荐', en:'Direct·Stopover·Deals', ms:'Terus·Singgah·Tawaran', id:'Langsung·Transit·Promo' },
  'cat.flight.f1':     { zh:'✓ 实时比价最低价', en:'✓ Real-time best price', ms:'✓ Harga terbaik masa nyata', id:'✓ Harga terbaik real-time' },
  'cat.flight.f2':     { zh:'✓ 退改签协助', en:'✓ Change/refund help', ms:'✓ Bantuan tukar/bayar balik', id:'✓ Bantuan perubahan/pengembalian' },
  'cat.flight.f3':     { zh:'✓ 中文客服支持', en:'✓ Chinese customer support', ms:'✓ Sokongan pelanggan Cina', id:'✓ Dukungan pelanggan Mandarin' },

  'cat.hotel.title':   { zh:'酒店住宿', en:'Hotels', ms:'Hotel', id:'Hotel' },
  'cat.hotel.sub':     { zh:'短租·长租·服务公寓', en:'Short·Long·Serviced Apt', ms:'Pendek·Panjang·Apatmen Servis', id:'Pendek·Panjang·Apartemen Servis' },
  'cat.hotel.f1':      { zh:'✓ 精选华人聚集区', en:'✓ Chinese community areas', ms:'✓ Kawasan komuniti Cina', id:'✓ Kawasan komunitas Tionghoa' },
  'cat.hotel.f2':      { zh:'✓ 接送机服务', en:'✓ Airport transfer', ms:'✓ Perkhidmatan jemput lapangan terbang', id:'✓ Layanan antar-jemput bandara' },
  'cat.hotel.f3':      { zh:'✓ 中文房东优先', en:'✓ Chinese-speaking hosts', ms:'✓ Tuan rumah berbahasa Cina', id:'✓ Pemilik berbahasa Mandarin' },

  'cat.rent.title':    { zh:'租房租车', en:'Rent & Cars', ms:'Sewa Rumah & Kereta', id:'Sewa Rumah & Mobil' },
  'cat.rent.sub':      { zh:'整租·合租·公寓·别墅·汽车租赁', en:'Entire·Shared·Apt·Villa·Car Rental', ms:'Penuh·Dikongsi·Apatmen·Villa·Sewa Kereta', id:'Penuh·Berbagi·Apartemen·Vila·Sewa Mobil' },
  'cat.rent.f1':       { zh:'✓ 免中介费选项', en:'✓ No-agent-fee options', ms:'✓ Pilihan tanpa caj ejen', id:'✓ Pilihan tanpa biaya agen' },
  'cat.rent.f2':       { zh:'✓ 合同法律把关', en:'✓ Contract legal review', ms:'✓ Semakan undang-undang kontrak', id:'✓ Tinjauan hukum kontrak' },
  'cat.rent.f3':       { zh:'✓ 押金安全保障', en:'✓ Deposit protection', ms:'✓ Perlindungan deposit', id:'✓ Perlindungan deposit' },

  'cat.work.title':    { zh:'工作就业', en:'Jobs & Employment', ms:'Kerja & Pekerjaan', id:'Kerja & Pekerjaan' },
  'cat.work.sub':      { zh:'工签办理·求职招聘·创业指南', en:'Work Visa·Recruitment·Business Guide', ms:'Visa Kerja·Pengambilan·Panduan Perniagaan', id:'Visa Kerja·Rekrutmen·Panduan Bisnis' },
  'cat.work.f1':       { zh:'✓ EP/DP/VP全程代办', en:'✓ EP/DP/VP full service', ms:'✓ Perkhidmatan penuh EP/DP/VP', id:'✓ Layanan penuh EP/DP/VP' },
  'cat.work.f2':       { zh:'✓ 正规企业招聘', en:'✓ Legitimate companies', ms:'✓ Syarikat yang sah', id:'✓ Perusahaan resmi' },
  'cat.work.f3':       { zh:'✓ 防骗预警提示', en:'✓ Anti-scam alerts', ms:'✓ Amaran anti-penipuan', id:'✓ Peringatan anti-penipuan' },

  'cat.study.title':   { zh:'留学教育', en:'Study Abroad', ms:'Pengajian Luar Negara', id:'Studi Luar Negeri' },
  'cat.study.sub':     { zh:'院校推荐·申请代办·学签·住宿', en:'School Matching·Application·Student Visa·Housing', ms:'Padanan Sekolah·Permohonan·Visa Pelajar·Penginapan', id:'Rekomendasi Sekolah·Aplikasi·Visa Pelajar·Hunian' },
  'cat.study.f1':      { zh:'✓ 官方认证院校', en:'✓ Accredited institutions', ms:'✓ Institusi bertauliah', id:'✓ Institusi terakreditasi' },
  'cat.study.f2':      { zh:'✓ 奖学金申请', en:'✓ Scholarship assistance', ms:'✓ Bantuan biasiswa', id:'✓ Bantuan beasiswa' },
  'cat.study.f3':      { zh:'✓ 学生公寓匹配', en:'✓ Student housing match', ms:'✓ Padanan penginapan pelajar', id:'✓ Pencocokan hunian pelajar' },

  'cat.bank.title':    { zh:'金融银行', en:'Banking & Finance', ms:'Perbankan & Kewangan', id:'Perbankan & Keuangan' },
  'cat.bank.sub':      { zh:'开户·汇款·保险·理财·税务', en:'Account·Remittance·Insurance·Finance·Tax', ms:'Akaun·Remitans·Insurans·Kewangan·Cukai', id:'Rekening·Remitansi·Asuransi·Keuangan·Pajak' },
  'cat.bank.f1':       { zh:'✓ 银行开户陪同', en:'✓ Bank account escort', ms:'✓ Iringan buka akaun bank', id:'✓ Pendampingan buka rekening bank' },
  'cat.bank.f2':       { zh:'✓ 人民币换汇', en:'✓ RMB exchange service', ms:'✓ Pertukaran RMB', id:'✓ Layanan tukar RMB' },
  'cat.bank.f3':       { zh:'✓ 当地保险推荐', en:'✓ Local insurance advice', ms:'✓ Nasihat insurans tempatan', id:'✓ Rekomendasi asuransi lokal' },

  'cat.services.title':{ zh:'生活服务', en:'Life Services', ms:'Perkhidmatan Kehidupan', id:'Layanan Kehidupan' },
  'cat.services.sub':  { zh:'翻译·律师·医疗·搬家·快递', en:'Translation·Legal·Medical·Moving·Courier', ms:'Terjemahan·Undang-undang·Perubatan·Berpindah·Kurier', id:'Terjemahan·Hukum·Medis·Pindahan·Kurir' },
  'cat.services.f1':   { zh:'✓ 中文医院导诊', en:'✓ Chinese hospital guide', ms:'✓ Panduan hospital Cina', id:'✓ Panduan rumah sakit Mandarin' },
  'cat.services.f2':   { zh:'✓ 中英马来翻译', en:'✓ CN/EN/Malay translation', ms:'✓ Terjemahan CN/EN/BM', id:'✓ Terjemahan CN/EN/Melayu' },
  'cat.services.f3':   { zh:'✓ 合法律师推荐', en:'✓ Licensed lawyers', ms:'✓ Peguam berlesen', id:'✓ Pengacara berlisensi' },

  'cat.medical.title': { zh:'医疗就医', en:'Medical Guide', ms:'Panduan Perubatan', id:'Panduan Medis' },
  'cat.medical.sub':   { zh:'医院推荐·就医流程·费用参考·急救', en:'Hospitals·Process·Costs·Emergency', ms:'Hospital·Proses·Kos·Kecemasan', id:'RS·Proses·Biaya·Darurat' },
  'cat.medical.f1':    { zh:'✓ 马来西亚私立医院指南', en:'✓ Malaysia private hospital guide', ms:'✓ Panduan hospital swasta Malaysia', id:'✓ Panduan RS swasta Malaysia' },
  'cat.medical.f2':    { zh:'✓ 印尼国际医院推荐', en:'✓ Indonesia intl hospital guide', ms:'✓ Panduan hospital antarabangsa Indonesia', id:'✓ Panduan RS internasional Indonesia' },
  'cat.medical.f3':    { zh:'✓ 中文全程陪同就医', en:'✓ Chinese medical accompaniment', ms:'✓ Pendampingan perubatan bahasa Cina', id:'✓ Pendampingan medis berbahasa Mandarin' },

  'home.safety.title': { zh:'⚠️ 防骗预警中心', en:'⚠️ Anti-Scam Warning Center', ms:'⚠️ Pusat Amaran Anti-Penipuan', id:'⚠️ Pusat Peringatan Anti-Penipuan' },
  'home.safety.desc':  { zh:'在东南亚生活，防骗是头等大事。我们整理了最新诈骗手段，帮你保护财产安全', en:'Living in Southeast Asia, staying scam-free is a top priority. We compile the latest fraud tactics to protect your assets.', ms:'Hidup di Asia Tenggara, mengelak penipuan adalah keutamaan. Kami mengumpul taktik penipuan terkini untuk melindungi aset anda.', id:'Hidup di Asia Tenggara, mencegah penipuan adalah prioritas. Kami mengumpulkan taktik penipuan terbaru untuk melindungi aset Anda.' },
  'home.safety.t1':    { zh:'假工签中介', en:'Fake Work Visa Agents', ms:'Ejen Visa Kerja Palsu', id:'Agen Visa Kerja Palsu' },
  'home.safety.t2':    { zh:'租房押金骗局', en:'Rental Deposit Scam', ms:'Penipuan Deposit Sewa', id:'Penipuan Deposit Sewa' },
  'home.safety.t3':    { zh:'杀猪盘防范', en:'Romance/Pig Butchering Scam', ms:'Penipuan Penyembelihan Babi', id:'Penipuan Pig Butchering' },
  'home.safety.t4':    { zh:'假冒政府部门', en:'Fake Government Officials', ms:'Pegawai Kerajaan Palsu', id:'Pejabat Pemerintah Palsu' },
  'home.safety.btn':   { zh:'查看防骗指南 →', en:'View Anti-Scam Guide →', ms:'Lihat Panduan Anti-Penipuan →', id:'Lihat Panduan Anti-Penipuan →' },

  'home.guides.title': { zh:'热门攻略', en:'Popular Guides', ms:'Panduan Popular', id:'Panduan Populer' },
  'home.guides.sub':   { zh:'真实经验分享，让你少走弯路', en:'Real experiences shared to save your time and trouble', ms:'Pengalaman nyata dikongsi untuk menjimatkan masa dan masalah anda', id:'Pengalaman nyata dibagikan untuk menghemat waktu dan masalah Anda' },
  'home.guides.all':   { zh:'查看全部 →', en:'View All →', ms:'Lihat Semua →', id:'Lihat Semua →' },

  'home.providers.title': { zh:'认证本地服务商', en:'Certified Local Providers', ms:'Pembekal Tempatan Bertauliah', id:'Penyedia Lokal Tersertifikasi' },
  'home.providers.sub':   { zh:'严格审核，只推荐真实可靠的本地华人服务机构', en:'Strictly vetted — only recommending genuine, reliable Chinese-run local service providers', ms:'Disemak dengan ketat — hanya mengesyorkan pembekal perkhidmatan tempatan Cina yang tulen dan boleh dipercayai', id:'Diverifikasi ketat — hanya merekomendasikan penyedia layanan lokal Tionghoa yang asli dan terpercaya' },

  'prov.tab.visa':    { zh:'签证代办', en:'Visa Agency', ms:'Agensi Visa', id:'Agen Visa' },
  'prov.tab.realty':  { zh:'房产中介', en:'Real Estate', ms:'Harta Tanah', id:'Properti' },
  'prov.tab.study':   { zh:'留学顾问', en:'Study Adviser', ms:'Penasihat Pengajian', id:'Konsultan Studi' },
  'prov.tab.bank':    { zh:'银行开户', en:'Bank Account', ms:'Buka Akaun', id:'Buka Rekening' },
  'prov.tab.legal':   { zh:'律师翻译', en:'Legal & Translation', ms:'Undang-undang & Terjemahan', id:'Hukum & Terjemahan' },

  'prov.badge.certified': { zh:'官方认证', en:'Certified', ms:'Bertauliah', id:'Tersertifikasi' },
  'prov.badge.partner':   { zh:'合作机构', en:'Partner', ms:'Rakan Kongsi', id:'Mitra' },
  'prov.contact':          { zh:'立即联系', en:'Contact Now', ms:'Hubungi Sekarang', id:'Hubungi Sekarang' },
  'prov.join.text':        { zh:'您是本地服务商？', en:'Are you a local service provider?', ms:'Adakah anda pembekal perkhidmatan tempatan?', id:'Apakah Anda penyedia layanan lokal?' },
  'prov.join.link':        { zh:'申请入驻 →', en:'List Your Business →', ms:'Senaraikan Perniagaan Anda →', id:'Daftarkan Bisnis Anda →' },

  'stats.users':     { zh:'注册用户', en:'Registered Users', ms:'Pengguna Berdaftar', id:'Pengguna Terdaftar' },
  'stats.providers': { zh:'认证服务商', en:'Certified Providers', ms:'Pembekal Bertauliah', id:'Penyedia Tersertifikasi' },
  'stats.satisfaction': { zh:'用户满意度%', en:'Satisfaction Rate %', ms:'Kadar Kepuasan %', id:'Tingkat Kepuasan %' },
  'stats.cases':     { zh:'成功案例', en:'Success Cases', ms:'Kes Berjaya', id:'Kasus Sukses' },

  'app.title':   { zh:'📱 下载南洋通 APP', en:'📱 Download NanYangTong APP', ms:'📱 Muat Turun App NanYangTong', id:'📱 Unduh Aplikasi NanYangTong' },
  'app.sub':     { zh:'随时随地查询攻略，一键联系服务商<br/>海外生活，从未如此简单', en:'Check guides anytime, contact providers with one tap<br/>Overseas life, made simple', ms:'Semak panduan bila-bila masa, hubungi pembekal dengan satu ketik<br/>Kehidupan luar negara, dipermudah', id:'Cek panduan kapan saja, hubungi penyedia dengan satu klik<br/>Kehidupan luar negeri, jadi mudah' },
  'app.f1':      { zh:'✓ 离线查看攻略', en:'✓ Offline guide access', ms:'✓ Akses panduan luar talian', id:'✓ Akses panduan offline' },
  'app.f2':      { zh:'✓ 实时消息推送', en:'✓ Real-time push notifications', ms:'✓ Pemberitahuan tolak masa nyata', id:'✓ Notifikasi push real-time' },
  'app.f3':      { zh:'✓ 中文客服', en:'✓ Chinese customer service', ms:'✓ Perkhidmatan pelanggan Cina', id:'✓ Layanan pelanggan Mandarin' },

  'partners.title': { zh:'合作伙伴', en:'Partners', ms:'Rakan Kongsi', id:'Mitra' },

  /* ────────────────────────────────────────────────
     VISA PAGE
  ──────────────────────────────────────────────── */
  'visa.page.title':    { zh:'签证办理中心', en:'Visa Processing Center', ms:'Pusat Pemprosesan Visa', id:'Pusat Pemrosesan Visa' },
  'visa.page.sub':      { zh:'专业代办马来西亚/印尼各类签证，中文服务，快速安全', en:'Professional visa processing for Malaysia/Indonesia, Chinese service, fast & safe', ms:'Pemprosesan visa profesional untuk Malaysia/Indonesia, perkhidmatan Cina, cepat & selamat', id:'Pemrosesan visa profesional untuk Malaysia/Indonesia, layanan Mandarin, cepat & aman' },
  'visa.filter.all':    { zh:'全部签证', en:'All Visas', ms:'Semua Visa', id:'Semua Visa' },
  'visa.filter.my':     { zh:'马来西亚', en:'Malaysia', ms:'Malaysia', id:'Malaysia' },
  'visa.filter.id':     { zh:'印尼', en:'Indonesia', ms:'Indonesia', id:'Indonesia' },
  'visa.apply':         { zh:'立即申请', en:'Apply Now', ms:'Mohon Sekarang', id:'Ajukan Sekarang' },
  'visa.consult':       { zh:'免费咨询', en:'Free Consultation', ms:'Perundingan Percuma', id:'Konsultasi Gratis' },

  /* ────────────────────────────────────────────────
     FLIGHT PAGE
  ──────────────────────────────────────────────── */
  'flight.page.title':  { zh:'机票预订', en:'Flight Booking', ms:'Tempahan Penerbangan', id:'Pesan Tiket Pesawat' },
  'flight.page.sub':    { zh:'中国直飞马来西亚·印尼 · 特价机票实时比价 · 退改签协助', en:'Direct flights from China to Malaysia/Indonesia · Real-time price comparison · Change/refund assistance', ms:'Penerbangan terus dari China ke Malaysia/Indonesia · Perbandingan harga masa nyata · Bantuan tukar/bayar balik', id:'Penerbangan langsung dari China ke Malaysia/Indonesia · Perbandingan harga real-time · Bantuan ubah/pengembalian' },
  'flight.search.from': { zh:'出发城市', en:'From', ms:'Dari', id:'Dari' },
  'flight.search.to':   { zh:'目的城市', en:'To', ms:'Ke', id:'Ke' },
  'flight.search.date': { zh:'出发日期', en:'Departure Date', ms:'Tarikh Berlepas', id:'Tanggal Berangkat' },
  'flight.search.btn':  { zh:'搜索机票', en:'Search Flights', ms:'Cari Penerbangan', id:'Cari Penerbangan' },
  'flight.popular':     { zh:'热门航线', en:'Popular Routes', ms:'Laluan Popular', id:'Rute Populer' },
  'flight.book':        { zh:'立即预订', en:'Book Now', ms:'Tempah Sekarang', id:'Pesan Sekarang' },

  'flight.oneway':      { zh:'单程', en:'One-way', ms:'Sehala', id:'Sekali Jalan' },
  'flight.roundtrip':   { zh:'往返', en:'Round-trip', ms:'Pergi-balik', id:'Pulang-pergi' },
  'flight.multicity':   { zh:'多程', en:'Multi-city', ms:'Pelbagai Destinasi', id:'Banyak Kota' },
  'flight.passenger':   { zh:'乘客', en:'Passengers', ms:'Penumpang', id:'Penumpang' },
  'flight.1adult':      { zh:'1位成人', en:'1 Adult', ms:'1 Dewasa', id:'1 Dewasa' },

  'flight.hotroutes':   { zh:'热门航线特价', en:'Popular Route Deals', ms:'Tawaran Laluan Popular', id:'Promo Rute Populer' },
  'flight.airline.compare': { zh:'中国飞马来西亚主要航空公司对比', en:'Airlines Comparison: China to Malaysia', ms:'Perbandingan Syarikat Penerbangan: China ke Malaysia', id:'Perbandingan Maskapai: China ke Malaysia' },
  'flight.airline.name':  { zh:'航空公司', en:'Airline', ms:'Syarikat Penerbangan', id:'Maskapai' },
  'flight.airline.type':  { zh:'类型', en:'Type', ms:'Jenis', id:'Jenis' },
  'flight.airline.route': { zh:'主要航线', en:'Main Routes', ms:'Laluan Utama', id:'Rute Utama' },
  'flight.airline.baggage':{ zh:'行李政策', en:'Baggage Policy', ms:'Dasar Bagasi', id:'Kebijakan Bagasi' },
  'flight.airline.pros':  { zh:'优缺点', en:'Pros & Cons', ms:'Kelebihan & Kekurangan', id:'Kelebihan & Kekurangan' },
  'flight.airline.book':  { zh:'官网订票', en:'Book Official', ms:'Tempah Rasmi', id:'Pesan Resmi' },
  'flight.airline.fullservice': { zh:'全服务', en:'Full Service', ms:'Perkhidmatan Penuh', id:'Layanan Penuh' },
  'flight.airline.lcc':   { zh:'低成本', en:'Low Cost', ms:'Kos Rendah', id:'Biaya Rendah' },
  'flight.airline.midrange':{ zh:'中端', en:'Mid-range', ms:'Pertengahan', id:'Menengah' },

  'flight.platforms':    { zh:'推荐订票平台（中国用户适用）', en:'Recommended Booking Platforms (China users)', ms:'Platform Tempahan Disyorkan (Pengguna China)', id:'Platform Pemesanan Direkomendasikan (Pengguna China)' },
  'flight.platform.view': { zh:'访问', en:'Visit', ms:'Lawati', id:'Kunjungi' },

  'flight.baggage.title':  { zh:'行李攻略：带什么最划算', en:'Baggage Guide: What to Pack', ms:'Panduan Bagasi: Apa yang Perlu Dibawa', id:'Panduan Bagasi: Apa yang Perlu Dibawa' },
  'flight.baggage.must':   { zh:'必带清单', en:'Must-Bring List', ms:'Senarai Wajib Bawa', id:'Daftar Wajib Bawa' },
  'flight.baggage.banned': { zh:'禁止/限制携带', en:'Prohibited/Restricted Items', ms:'Barang Dilarang/Dihadkan', id:'Barang Dilarang/Dibatasi' },
  'flight.baggage.policy': { zh:'退改签须知', en:'Change & Refund Policy', ms:'Dasar Tukar & Bayar Balik', id:'Kebijakan Ubah & Pengembalian' },
  'flight.baggage.tips':   { zh:'省钱小技巧', en:'Money-Saving Tips', ms:'Petua Jimat Wang', id:'Tips Hemat Uang' },

  'flight.share.title':    { zh:'网友飞马来西亚真实经验分享', en:'Real Experiences Flying to Malaysia', ms:'Pengalaman Sebenar Terbang ke Malaysia', id:'Pengalaman Nyata Terbang ke Malaysia' },

  'flight.sidebar.compare': { zh:'快速比价', en:'Quick Price Compare', ms:'Bandingkan Harga Cepat', id:'Bandingkan Harga Cepat' },
  'flight.sidebar.compare.desc': { zh:'推荐平台，一键比最低价', en:'Recommended platforms for best price', ms:'Platform disyorkan untuk harga terbaik', id:'Platform direkomendasikan untuk harga terbaik' },
  'flight.sidebar.arrival': { zh:'抵达吉隆坡后', en:'After Arriving in KL', ms:'Selepas Tiba di KL', id:'Setelah Tiba di KL' },
  'flight.sidebar.checklist': { zh:'落地必做3件事', en:'3 Things to Do Upon Landing', ms:'3 Perkara Perlu Dilakukan Selepas Mendarat', id:'3 Hal yang Harus Dilakukan Setelah Mendarat' },
  'flight.sidebar.emergency': { zh:'紧急联系', en:'Emergency Contacts', ms:'Kenalan Kecemasan', id:'Kontak Darurat' },

  'flight.viewflight':    { zh:'查看航班', en:'View Flight', ms:'Lihat Penerbangan', id:'Lihat Penerbangan' },
  'flight.buynow':        { zh:'立即抢票', en:'Grab Now', ms:'Rebut Sekarang', id:'Ambil Sekarang' },
  'flight.lowprice.alert': { zh:'低价提醒', en:'Price Alert', ms:'Amaran Harga Rendah', id:'Peringatan Harga Rendah' },

  /* ────────────────────────────────────────────────
     HOTEL PAGE
  ──────────────────────────────────────────────── */
  'hotel.page.title':   { zh:'酒店住宿', en:'Hotel & Accommodation', ms:'Hotel & Penginapan', id:'Hotel & Akomodasi' },
  'hotel.page.sub':     { zh:'精选华人友好型酒店，中文入住更安心', en:'Curated Chinese-friendly hotels for a comfortable stay', ms:'Hotel mesra Cina yang terpilih untuk penginapan yang selesa', id:'Hotel ramah Tionghoa pilihan untuk menginap yang nyaman' },
  'hotel.search.where': { zh:'城市或酒店名', en:'City or Hotel Name', ms:'Bandar atau Nama Hotel', id:'Kota atau Nama Hotel' },
  'hotel.search.checkin':{ zh:'入住日期', en:'Check-in', ms:'Daftar Masuk', id:'Check-in' },
  'hotel.search.checkout':{ zh:'退房日期', en:'Check-out', ms:'Daftar Keluar', id:'Check-out' },
  'hotel.search.btn':   { zh:'搜索酒店', en:'Search Hotels', ms:'Cari Hotel', id:'Cari Hotel' },
  'hotel.book':         { zh:'立即预订', en:'Book Now', ms:'Tempah Sekarang', id:'Pesan Sekarang' },

  'hotel.room.guests':  { zh:'房间/人数', en:'Rooms / Guests', ms:'Bilik / Tetamu', id:'Kamar / Tamu' },
  'hotel.1room.2guest': { zh:'1间 · 2位成人', en:'1 Room · 2 Adults', ms:'1 Bilik · 2 Dewasa', id:'1 Kamar · 2 Dewasa' },
  'hotel.search2':      { zh:'搜索', en:'Search', ms:'Cari', id:'Cari' },

  'hotel.kl.region.title':    { zh:'吉隆坡住宿区域选择指南', en:'KL Accommodation Area Guide', ms:'Panduan Kawasan Penginapan KL', id:'Panduan Area Penginapan KL' },
  'hotel.kl.region.tip':      { zh:'新手建议：首次来KL，推荐住在', en:'Tip for first-timers: We recommend staying in', ms:'Petua untuk pendatang baru: Kami mengesyorkan menginap di', id:'Tips untuk pemula: Kami merekomendasikan menginap di' },
  'hotel.kl.region.tip2':     { zh:'交通方便，华人多，中餐丰富，Grab打车也容易叫到', en:'— great transport links, large Chinese community, plenty of Chinese food, easy to get Grab rides', ms:'— sambungan pengangkutan yang baik, komuniti Cina yang besar, banyak makanan Cina, mudah mendapat Grab', id:'— akses transportasi bagus, komunitas Tionghoa besar, banyak makanan Cina, mudah mendapat Grab' },

  'hotel.kl.recommended':     { zh:'精选吉隆坡酒店推荐', en:'Recommended KL Hotels', ms:'Hotel KL yang Disyorkan', id:'Hotel KL yang Direkomendasikan' },
  'hotel.sort.recommended':   { zh:'综合推荐', en:'Recommended', ms:'Disyorkan', id:'Direkomendasikan' },
  'hotel.sort.price':         { zh:'价格低→高', en:'Price: Low→High', ms:'Harga: Rendah→Tinggi', id:'Harga: Rendah→Tinggi' },
  'hotel.sort.rating':        { zh:'好评优先', en:'Top Rated', ms:'Penilaian Terbaik', id:'Nilai Terbaik' },

  'hotel.bali.title':         { zh:'巴厘岛精选酒店', en:'Recommended Bali Hotels', ms:'Hotel Bali yang Disyorkan', id:'Hotel Bali yang Direkomendasikan' },
  'hotel.platforms.title':    { zh:'推荐订房平台对比', en:'Hotel Booking Platform Comparison', ms:'Perbandingan Platform Tempahan Hotel', id:'Perbandingan Platform Pemesanan Hotel' },
  'hotel.share.title':        { zh:'网友住宿真实经验分享', en:'Real Guest Experiences', ms:'Pengalaman Penginap Sebenar', id:'Pengalaman Tamu Nyata' },

  'hotel.sidebar.rules':      { zh:'订房须知', en:'Booking Notes', ms:'Nota Tempahan', id:'Catatan Pemesanan' },
  'hotel.sidebar.price':      { zh:'价格参考', en:'Price Reference', ms:'Rujukan Harga', id:'Referensi Harga' },
  'hotel.sidebar.transfer':   { zh:'机场接送服务', en:'Airport Transfer Service', ms:'Perkhidmatan Jemputan Lapangan Terbang', id:'Layanan Jemput Bandara' },
  'hotel.sidebar.bali.area':  { zh:'巴厘岛区域', en:'Bali Areas', ms:'Kawasan Bali', id:'Area Bali' },
  'hotel.sidebar.book.transfer': { zh:'预约接送机', en:'Book Airport Transfer', ms:'Tempah Jemputan Lapangan Terbang', id:'Pesan Jemput Bandara' },
  'hotel.consult.monthly':    { zh:'咨询月租', en:'Enquire Monthly Rate', ms:'Tanya Sewa Bulanan', id:'Tanya Sewa Bulanan' },

  /* ────────────────────────────────────────────────
     RENT PAGE
  ──────────────────────────────────────────────── */
  'rent.page.title':    { zh:'租房租车', en:'Rent & Car Hire', ms:'Sewa Rumah & Kereta', id:'Sewa Rumah & Mobil' },
  'rent.page.sub':      { zh:'海量房源，透明价格，中文服务', en:'Thousands of listings, transparent pricing, Chinese service', ms:'Ribuan senarai, harga telus, perkhidmatan Cina', id:'Ribuan listing, harga transparan, layanan Mandarin' },
  'rent.tab.house':     { zh:'租房', en:'Rental', ms:'Sewa Rumah', id:'Sewa Rumah' },
  'rent.tab.car':       { zh:'租车', en:'Car Hire', ms:'Sewa Kereta', id:'Sewa Mobil' },
  'rent.filter.all':    { zh:'全部', en:'All', ms:'Semua', id:'Semua' },
  'rent.filter.whole':  { zh:'整租', en:'Entire Unit', ms:'Sewa Penuh', id:'Unit Penuh' },
  'rent.filter.share':  { zh:'合租', en:'Shared Room', ms:'Bilik Dikongsi', id:'Kamar Bersama' },
  'rent.filter.service':{ zh:'服务公寓', en:'Serviced Apt', ms:'Apartmen Servis', id:'Apartemen Servis' },
  'rent.contact':       { zh:'联系房东', en:'Contact Owner', ms:'Hubungi Pemilik', id:'Hubungi Pemilik' },

  /* ────────────────────────────────────────────────
     WORK PAGE
  ──────────────────────────────────────────────── */
  'work.page.title':    { zh:'工作就业', en:'Jobs & Employment', ms:'Kerja & Pekerjaan', id:'Kerja & Pekerjaan' },
  'work.page.sub':      { zh:'正规招聘，工签代办，防骗预警', en:'Legitimate recruitment, work visa support, scam alerts', ms:'Pengambilan yang sah, sokongan visa kerja, amaran penipuan', id:'Rekrutmen resmi, dukungan visa kerja, peringatan penipuan' },
  'work.search.keyword':{ zh:'职位/公司', en:'Job/Company', ms:'Jawatan/Syarikat', id:'Posisi/Perusahaan' },
  'work.search.city':   { zh:'城市', en:'City', ms:'Bandar', id:'Kota' },
  'work.search.btn':    { zh:'找工作', en:'Find Jobs', ms:'Cari Kerja', id:'Cari Kerja' },
  'work.apply':         { zh:'立即申请', en:'Apply Now', ms:'Mohon Sekarang', id:'Lamar Sekarang' },
  'work.visa.apply':    { zh:'办理工签', en:'Get Work Visa', ms:'Dapatkan Visa Kerja', id:'Ajukan Visa Kerja' },
  'work.safety.title':  { zh:'⚠️ 防骗提醒', en:'⚠️ Scam Warning', ms:'⚠️ Amaran Penipuan', id:'⚠️ Peringatan Penipuan' },

  /* ────────────────────────────────────────────────
     STUDY PAGE
  ──────────────────────────────────────────────── */
  'study.page.title':   { zh:'留学教育', en:'Study Abroad', ms:'Pengajian Luar Negara', id:'Studi Luar Negeri' },
  'study.page.sub':     { zh:'马来西亚/印尼名校推荐，全程申请协助', en:'Top universities in Malaysia/Indonesia, full application assistance', ms:'Universiti terkemuka di Malaysia/Indonesia, bantuan permohonan penuh', id:'Universitas terkemuka di Malaysia/Indonesia, bantuan aplikasi penuh' },
  'study.filter.all':   { zh:'全部院校', en:'All Schools', ms:'Semua Sekolah', id:'Semua Sekolah' },
  'study.filter.my':    { zh:'马来西亚', en:'Malaysia', ms:'Malaysia', id:'Malaysia' },
  'study.filter.id':    { zh:'印尼', en:'Indonesia', ms:'Indonesia', id:'Indonesia' },
  'study.tab.uni':      { zh:'综合大学', en:'Universities', ms:'Universiti', id:'Universitas' },
  'study.tab.tech':     { zh:'理工院校', en:'Tech Colleges', ms:'Kolej Teknik', id:'Politeknik' },
  'study.tab.biz':      { zh:'商学院', en:'Business Schools', ms:'Sekolah Perniagaan', id:'Sekolah Bisnis' },
  'study.tab.art':      { zh:'艺术/设计', en:'Arts & Design', ms:'Seni & Reka Bentuk', id:'Seni & Desain' },
  'study.tab.id':       { zh:'印尼院校', en:'Indonesian Schools', ms:'Institusi Indonesia', id:'Institusi Indonesia' },
  'study.req':          { zh:'申请要求速查', en:'Requirements', ms:'Keperluan Permohonan', id:'Persyaratan Pendaftaran' },
  'study.apply':        { zh:'申请咨询', en:'Apply & Consult', ms:'Mohon & Berunding', id:'Ajukan & Konsultasi' },
  'study.scholarship':  { zh:'奖学金信息', en:'Scholarship Info', ms:'Maklumat Biasiswa', id:'Info Beasiswa' },

  'study.advantage.cost':     { zh:'费用低', en:'Low Cost', ms:'Kos Rendah', id:'Biaya Rendah' },
  'study.advantage.cost.sub': { zh:'比欧美节省60-80%', en:'Save 60-80% vs Europe/USA', ms:'Jimat 60-80% berbanding Eropah/Amerika', id:'Hemat 60-80% dibanding Eropa/AS' },
  'study.advantage.english':     { zh:'英语教学', en:'English Medium', ms:'Pengajian Bahasa Inggeris', id:'Pengajaran Bahasa Inggris' },
  'study.advantage.english.sub': { zh:'国际认可文凭', en:'Internationally recognised degree', ms:'Ijazah diiktiraf antarabangsa', id:'Gelar yang diakui internasional' },
  'study.advantage.chinese':     { zh:'华人聚集', en:'Chinese Community', ms:'Komuniti Cina', id:'Komunitas Tionghoa' },
  'study.advantage.chinese.sub': { zh:'中文环境适应快', en:'Chinese-friendly environment', ms:'Persekitaran mesra Cina', id:'Lingkungan ramah Tionghoa' },
  'study.advantage.transport':     { zh:'交通便利', en:'Convenient Travel', ms:'Perjalanan Mudah', id:'Perjalanan Mudah' },
  'study.advantage.transport.sub': { zh:'3-5小时直飞', en:'3-5 hour direct flight', ms:'Penerbangan terus 3-5 jam', id:'Penerbangan langsung 3-5 jam' },

  'study.apply.flow.title': { zh:'马来西亚留学申请全流程', en:'Malaysia Study Application Process', ms:'Proses Permohonan Pengajian di Malaysia', id:'Proses Pendaftaran Studi di Malaysia' },
  'study.compare.title':    { zh:'马来西亚 vs 其他国家留学费用对比', en:'Malaysia vs Other Countries: Study Cost Comparison', ms:'Malaysia vs Negara Lain: Perbandingan Kos Pengajian', id:'Malaysia vs Negara Lain: Perbandingan Biaya Studi' },
  'study.compare.item':     { zh:'对比项', en:'Category', ms:'Kategori', id:'Kategori' },
  'study.compare.tuition':  { zh:'学费（本科/年）', en:'Tuition (Undergrad/year)', ms:'Yuran (Sarjana Muda/tahun)', id:'Biaya Kuliah (S1/tahun)' },
  'study.compare.living':   { zh:'生活费（月）', en:'Living Cost (monthly)', ms:'Kos Sara Hidup (sebulan)', id:'Biaya Hidup (bulanan)' },
  'study.compare.language': { zh:'语言要求', en:'Language Requirement', ms:'Keperluan Bahasa', id:'Persyaratan Bahasa' },
  'study.compare.chinese':  { zh:'华人友好度', en:'Chinese-Friendly Rating', ms:'Penilaian Mesra Cina', id:'Penilaian Ramah Tionghoa' },
  'study.compare.degree':   { zh:'文凭国际认可', en:'Degree Recognition', ms:'Pengiktirafan Ijazah', id:'Pengakuan Gelar' },
  'study.share.title':      { zh:'网友马来西亚留学真实经验', en:'Real Malaysia Study Experiences', ms:'Pengalaman Pengajian Malaysia yang Sebenar', id:'Pengalaman Studi Malaysia yang Nyata' },

  'study.sidebar.consult.desc': { zh:'填写成绩和意向，顾问1小时内给出专属方案', en:'Share your grades and goals — our advisor responds within 1 hour', ms:'Kongsi gred dan matlamat anda — penasihat kami akan bertindak balas dalam 1 jam', id:'Bagikan nilai dan tujuan Anda — konsultan kami merespons dalam 1 jam' },
  'study.freeevaluate':     { zh:'免费评估', en:'Free Evaluation', ms:'Penilaian Percuma', id:'Evaluasi Gratis' },
  'study.wechat.consult':   { zh:'微信咨询', en:'WeChat Consult', ms:'Perundingan WeChat', id:'Konsultasi WeChat' },

  /* ────────────────────────────────────────────────
     BANK PAGE
  ──────────────────────────────────────────────── */
  'bank.page.title':    { zh:'金融银行服务', en:'Banking & Financial Services', ms:'Perkhidmatan Perbankan & Kewangan', id:'Layanan Perbankan & Keuangan' },
  'bank.page.sub':      { zh:'开户、汇款、换汇、保险，一站搞定', en:'Open accounts, remittance, exchange, insurance — all in one place', ms:'Buka akaun, remitans, pertukaran, insurans — semua di satu tempat', id:'Buka rekening, remitansi, tukar valuta, asuransi — semua di satu tempat' },
  'bank.tab.account':   { zh:'开银行卡', en:'Open Account', ms:'Buka Akaun', id:'Buka Rekening' },
  'bank.tab.remit':     { zh:'汇款换汇', en:'Remittance', ms:'Remitans', id:'Remitansi' },
  'bank.tab.insurance': { zh:'保险理财', en:'Insurance', ms:'Insurans', id:'Asuransi' },
  'bank.tab.tax':       { zh:'税务指南', en:'Tax Guide', ms:'Panduan Cukai', id:'Panduan Pajak' },
  'bank.open':          { zh:'预约开户', en:'Book Appointment', ms:'Buat Temujanji', id:'Buat Janji' },

  /* ────────────────────────────────────────────────
     SERVICES PAGE
  ──────────────────────────────────────────────── */
  'services.page.title':{ zh:'本地生活服务', en:'Local Life Services', ms:'Perkhidmatan Hidup Tempatan', id:'Layanan Kehidupan Lokal' },
  'services.page.sub':  { zh:'翻译、律师、医疗、搬家……本地华人服务商一站直连', en:'Translation, legal, medical, moving … one-stop access to local Chinese service providers', ms:'Terjemahan, undang-undang, perubatan, berpindah … akses satu henti kepada pembekal perkhidmatan Cina tempatan', id:'Terjemahan, hukum, medis, pindahan … akses satu atap ke penyedia layanan Tionghoa lokal' },
  'services.filter.all':{ zh:'全部', en:'All', ms:'Semua', id:'Semua' },
  'services.contact':   { zh:'立即联系', en:'Contact Now', ms:'Hubungi Sekarang', id:'Hubungi Sekarang' },

  /* ────────────────────────────────────────────────
     COMMUNITY PAGE
  ──────────────────────────────────────────────── */
  'community.page.title':{ zh:'华人社区', en:'Chinese Community', ms:'Komuniti Cina', id:'Komunitas Tionghoa' },
  'community.page.sub': { zh:'在海外，你不孤单。经验分享，互助交流', en:'You are not alone abroad. Share experiences, help each other', ms:'Anda tidak bersendirian di luar negara. Kongsi pengalaman, bantu antara satu sama lain', id:'Anda tidak sendirian di luar negeri. Bagikan pengalaman, saling membantu' },
  'community.tab.exp':  { zh:'经验分享', en:'Experiences', ms:'Perkongsian Pengalaman', id:'Berbagi Pengalaman' },
  'community.tab.qa':   { zh:'问答', en:'Q&A', ms:'Soal Jawab', id:'Tanya Jawab' },
  'community.tab.safety':{ zh:'防骗预警', en:'Scam Alerts', ms:'Amaran Penipuan', id:'Peringatan Penipuan' },
  'community.tab.event':{ zh:'活动聚会', en:'Events', ms:'Acara', id:'Acara' },
  'community.post':     { zh:'发帖', en:'Post', ms:'Hantar', id:'Posting' },
  'community.reply':    { zh:'回复', en:'Reply', ms:'Balas', id:'Balas' },
  'community.like':     { zh:'点赞', en:'Like', ms:'Suka', id:'Suka' },

  /* ────────────────────────────────────────────────
     MEDICAL PAGE
  ──────────────────────────────────────────────── */
  'medical.topbar':          { zh:'🏥 新增：吉隆坡中文医院导诊服务上线，外籍人士看病全程中文陪同', en:'🏥 New: Chinese-assisted medical guide service launched in KL', ms:'🏥 Baharu: Perkhidmatan panduan perubatan bahasa Cina kini tersedia di KL', id:'🏥 Baru: Layanan panduan medis berbahasa Mandarin tersedia di KL' },
  'medical.page.title':      { zh:'外国人就医指南', en:'Medical Guide for Foreigners', ms:'Panduan Perubatan untuk Orang Asing', id:'Panduan Medis untuk Orang Asing' },
  'medical.page.sub':        { zh:'马来西亚 · 印尼 | 医院推荐 · 就医流程 · 费用参考 · 紧急求助', en:'Malaysia · Indonesia | Hospital Guide · Process · Costs · Emergency', ms:'Malaysia · Indonesia | Panduan Hospital · Proses · Kos · Kecemasan', id:'Malaysia · Indonesia | Panduan Rumah Sakit · Proses · Biaya · Darurat' },
  'medical.search.placeholder': { zh:'搜索医院、科室、常见病...', en:'Search hospitals, departments, symptoms...', ms:'Cari hospital, jabatan, simptom...', id:'Cari rumah sakit, departemen, gejala...' },
  'medical.consult.btn':     { zh:'预约导诊', en:'Book Guide', ms:'Tempah Panduan', id:'Pesan Panduan' },

  'medical.tab.my':          { zh:'🇲🇾 马来西亚', en:'🇲🇾 Malaysia', ms:'🇲🇾 Malaysia', id:'🇲🇾 Malaysia' },
  'medical.tab.id':          { zh:'🇮🇩 印度尼西亚', en:'🇮🇩 Indonesia', ms:'🇮🇩 Indonesia', id:'🇮🇩 Indonesia' },
  'medical.tab.tips':        { zh:'💬 就医实用短语', en:'💬 Useful Phrases', ms:'💬 Frasa Berguna', id:'💬 Frasa Berguna' },
  'medical.tab.insurance':   { zh:'🛡️ 医疗保险', en:'🛡️ Medical Insurance', ms:'🛡️ Insurans Perubatan', id:'🛡️ Asuransi Kesehatan' },

  'medical.my.intro.title':  { zh:'马来西亚医疗体系概述：', en:'Malaysia Healthcare Overview:', ms:'Gambaran Sistem Penjagaan Kesihatan Malaysia:', id:'Gambaran Sistem Layanan Kesehatan Malaysia:' },
  'medical.my.intro.desc':   { zh:'马来西亚分公立和私立两套体系。公立医院面向本国公民收费极低，外国人需按全价支付；强烈建议外国人选择私立医院，服务好、英文流利、等待时间短，部分私立医院有中文服务台。', en:'Malaysia has public and private healthcare systems. Public hospitals charge foreigners full price with long waiting times; private hospitals are strongly recommended for foreigners — better service, English-fluent staff, shorter waits, some with Chinese-speaking staff.', ms:'Malaysia mempunyai sistem awam dan swasta. Hospital awam mengenakan bayaran penuh kepada orang asing; hospital swasta amat disyorkan — perkhidmatan lebih baik, staf berbahasa Inggeris, masa tunggu lebih singkat.', id:'Malaysia memiliki sistem publik dan swasta. Rumah sakit umum mengenakan tarif penuh kepada orang asing; rumah sakit swasta sangat direkomendasikan — layanan lebih baik, staf berbahasa Inggris, waktu tunggu lebih singkat.' },
  'medical.my.flow.title':   { zh:'📋 马来西亚就医流程', en:'📋 How to See a Doctor in Malaysia', ms:'📋 Cara Mendapatkan Rawatan di Malaysia', id:'📋 Cara Berobat di Malaysia' },
  'medical.my.hosp.title':   { zh:'🏥 推荐私立医院（马来西亚）', en:'🏥 Recommended Private Hospitals (Malaysia)', ms:'🏥 Hospital Swasta yang Disyorkan (Malaysia)', id:'🏥 Rumah Sakit Swasta yang Direkomendasikan (Malaysia)' },
  'medical.my.cost.title':   { zh:'💰 马来西亚就医费用参考（私立医院）', en:'💰 Malaysia Medical Cost Reference (Private Hospitals)', ms:'💰 Rujukan Kos Perubatan Malaysia (Hospital Swasta)', id:'💰 Referensi Biaya Medis Malaysia (RS Swasta)' },
  'medical.my.emergency.title': { zh:'🚨 马来西亚紧急联系', en:'🚨 Malaysia Emergency Contacts', ms:'🚨 Kenalan Kecemasan Malaysia', id:'🚨 Kontak Darurat Malaysia' },

  'medical.id.intro.title':  { zh:'印尼医疗体系概述：', en:'Indonesia Healthcare Overview:', ms:'Gambaran Sistem Penjagaan Kesihatan Indonesia:', id:'Gambaran Sistem Layanan Kesehatan Indonesia:' },
  'medical.id.intro.desc':   { zh:'印尼外国人建议直接选择大城市的私立医院或国际医院，雅加达和巴厘岛有多家专门服务外籍人士的国际医院。', en:'Foreigners in Indonesia are advised to choose large-city private or international hospitals. Jakarta and Bali have several international hospitals serving expatriates.', ms:'Orang asing di Indonesia dinasihatkan memilih hospital swasta atau antarabangsa di bandar besar. Jakarta dan Bali mempunyai beberapa hospital antarabangsa.', id:'Orang asing di Indonesia disarankan memilih rumah sakit swasta atau internasional di kota besar. Jakarta dan Bali memiliki beberapa rumah sakit internasional.' },
  'medical.id.flow.title':   { zh:'📋 印尼就医流程', en:'📋 How to See a Doctor in Indonesia', ms:'📋 Cara Mendapatkan Rawatan di Indonesia', id:'📋 Cara Berobat di Indonesia' },
  'medical.id.hosp.title':   { zh:'🏥 推荐医院（印尼）', en:'🏥 Recommended Hospitals (Indonesia)', ms:'🏥 Hospital yang Disyorkan (Indonesia)', id:'🏥 Rumah Sakit yang Direkomendasikan (Indonesia)' },
  'medical.id.cost.title':   { zh:'💰 印尼就医费用参考（私立/国际医院）', en:'💰 Indonesia Medical Cost Reference (Private/International)', ms:'💰 Rujukan Kos Perubatan Indonesia (Swasta/Antarabangsa)', id:'💰 Referensi Biaya Medis Indonesia (RS Swasta/Internasional)' },
  'medical.id.emergency.title': { zh:'🚨 印尼紧急联系', en:'🚨 Indonesia Emergency Contacts', ms:'🚨 Kenalan Kecemasan Indonesia', id:'🚨 Kontak Darurat Indonesia' },

  'medical.step1.title':     { zh:'选择医院', en:'Choose Hospital', ms:'Pilih Hospital', id:'Pilih Rumah Sakit' },
  'medical.step1.desc':      { zh:'私立医院为首选，急症直接去A&E（急诊）', en:'Private hospitals recommended; emergencies go to A&E', ms:'Hospital swasta disyorkan; kecemasan ke A&E', id:'RS swasta direkomendasikan; darurat langsung ke UGD' },
  'medical.step2.title':     { zh:'挂号登记', en:'Register', ms:'Daftar', id:'Daftar' },
  'medical.step2.desc':      { zh:'带护照到前台登记，填写基本信息', en:'Bring passport to reception desk and fill in basic info', ms:'Bawa pasport ke kaunter dan isi maklumat asas', id:'Bawa paspor ke resepsionis dan isi informasi dasar' },
  'medical.step3.title':     { zh:'候诊就诊', en:'Wait & Consult', ms:'Tunggu & Berunding', id:'Tunggu & Konsultasi' },
  'medical.step3.desc':      { zh:'等待叫号，医生问诊，简单英语即可沟通', en:'Wait for your number, basic English is sufficient', ms:'Tunggu nombor anda, Bahasa Inggeris asas mencukupi', id:'Tunggu nomor Anda, Bahasa Inggris dasar sudah cukup' },
  'medical.step4.title':     { zh:'检查/取药', en:'Tests / Medication', ms:'Ujian / Ubat', id:'Pemeriksaan / Obat' },
  'medical.step4.desc':      { zh:'化验、影像检查或直接在医院药房取药', en:'Lab tests, imaging or collect medicine from hospital pharmacy', ms:'Ujian makmal, pengimejan atau ambil ubat di farmasi hospital', id:'Pemeriksaan lab, pencitraan atau ambil obat di apotek rumah sakit' },
  'medical.step5.title':     { zh:'结算缴费', en:'Payment', ms:'Pembayaran', id:'Pembayaran' },
  'medical.step5.desc':      { zh:'现金/信用卡/电子钱包均可，要保留收据', en:'Cash/credit card/e-wallet accepted; keep your receipt', ms:'Tunai/kad kredit/e-dompet diterima; simpan resit anda', id:'Tunai/kartu kredit/dompet digital; simpan kuitansi Anda' },

  'medical.hosp.recommend':  { zh:'强烈推荐，华人首选，有普通话/粤语医护人员', en:'Highly recommended, popular with Chinese, Mandarin/Cantonese staff available', ms:'Amat disyorkan, popular dengan orang Cina, ada staf berbahasa Mandarin/Kantonis', id:'Sangat direkomendasikan, populer di kalangan Tionghoa, ada staf berbahasa Mandarin/Kanton' },
  'medical.hosp.intl':       { zh:'国际化程度高，英文沟通无障碍', en:'Highly international, English communication is seamless', ms:'Sangat antarabangsa, komunikasi Bahasa Inggeris lancar', id:'Sangat internasional, komunikasi bahasa Inggris lancar' },
  'medical.hosp.cost':       { zh:'收费合理，华人社区口碑佳', en:'Reasonable pricing, well-regarded by Chinese community', ms:'Harga berpatutan, sangat dihormati oleh komuniti Cina', id:'Harga terjangkau, sangat dihormati oleh komunitas Tionghoa' },

  'medical.cost.type':       { zh:'就诊类型', en:'Service Type', ms:'Jenis Perkhidmatan', id:'Jenis Layanan' },
  'medical.cost.fee':        { zh:'参考费用', en:'Est. Cost', ms:'Anggaran Kos', id:'Estimasi Biaya' },
  'medical.cost.note':       { zh:'备注', en:'Notes', ms:'Nota', id:'Catatan' },

  'medical.emergency.ambulance': { zh:'救护车 / 急救', en:'Ambulance / Emergency', ms:'Ambulans / Kecemasan', id:'Ambulans / Darurat' },
  'medical.emergency.police':    { zh:'警察', en:'Police', ms:'Polis', id:'Polisi' },
  'medical.emergency.hotline':   { zh:'南洋通中文协助', en:'NYT Chinese Assistance', ms:'Bantuan Bahasa Cina NYT', id:'Bantuan Bahasa Mandarin NYT' },
  'medical.emergency.embassy':   { zh:'中国驻马大使馆', en:'Chinese Embassy (Malaysia)', ms:'Kedutaan China (Malaysia)', id:'Kedutaan China (Malaysia)' },

  'medical.sidebar.consult':      { zh:'预约中文导诊', en:'Book Chinese Medical Guide', ms:'Tempah Panduan Perubatan Cina', id:'Pesan Panduan Medis Mandarin' },
  'medical.sidebar.consult.desc': { zh:'我们提供全程中文陪同就医服务：预约医生、翻译病情、协助缴费，让你在异乡看病不再迷茫。', en:'We provide full Chinese-language medical accompaniment: doctor booking, symptom translation, payment assistance.', ms:'Kami menyediakan pendampingan perubatan penuh dalam bahasa Cina: tempahan doktor, terjemahan simptom, bantuan pembayaran.', id:'Kami menyediakan pendampingan medis penuh berbahasa Mandarin: pemesanan dokter, penerjemahan gejala, bantuan pembayaran.' },
  'medical.sidebar.consult.btn':  { zh:'立即预约导诊', en:'Book Now', ms:'Tempah Sekarang', id:'Pesan Sekarang' },
  'medical.sidebar.fee':          { zh:'服务费：RM 150 / IDR 600,000', en:'Service fee: RM 150 / IDR 600,000', ms:'Yuran perkhidmatan: RM 150 / IDR 600,000', id:'Biaya layanan: RM 150 / IDR 600.000' },
  'medical.sidebar.emergency':    { zh:'紧急求助', en:'Emergency Help', ms:'Bantuan Kecemasan', id:'Bantuan Darurat' },
  'medical.sidebar.tips':         { zh:'就医小贴士', en:'Medical Tips', ms:'Petua Perubatan', id:'Tips Medis' },
  'medical.sidebar.related':      { zh:'相关页面', en:'Related Pages', ms:'Halaman Berkaitan', id:'Halaman Terkait' },

  /* ────────────────────────────────────────────────
     SAFETY PAGE
  ──────────────────────────────────────────────── */
  'safety.page.title':  { zh:'防骗安全指南', en:'Anti-Scam Safety Guide', ms:'Panduan Keselamatan Anti-Penipuan', id:'Panduan Keamanan Anti-Penipuan' },
  'safety.page.sub':    { zh:'保护自己，远离诈骗，安全生活在东南亚', en:'Protect yourself, avoid scams, live safely in Southeast Asia', ms:'Lindungi diri anda, elak penipuan, hidup selamat di Asia Tenggara', id:'Lindungi diri Anda, hindari penipuan, hidup aman di Asia Tenggara' },
  'safety.report':      { zh:'举报诈骗', en:'Report a Scam', ms:'Laporkan Penipuan', id:'Laporkan Penipuan' },
  'safety.hotline':     { zh:'紧急求助热线', en:'Emergency Hotline', ms:'Talian Kecemasan', id:'Hotline Darurat' },

  'safety.topbar.notice': { zh:'安全提示：已在东南亚被骗？立即拨打110报警或联系中国驻当地使馆！', en:'Safety notice: Scammed in Southeast Asia? Call 110 or contact the Chinese Embassy immediately!', ms:'Notis keselamatan: Ditipu di Asia Tenggara? Hubungi 110 atau Kedutaan China segera!', id:'Pemberitahuan keamanan: Ditipu di Asia Tenggara? Hubungi 110 atau Kedutaan China segera!' },
  'safety.emergency.contacts.title': { zh:'紧急求助热线', en:'Emergency Hotline Numbers', ms:'Nombor Talian Kecemasan', id:'Nomor Hotline Darurat' },
  'safety.scam.types.title': { zh:'常见诈骗类型详解', en:'Common Scam Types Explained', ms:'Jenis Penipuan Lazim yang Dijelaskan', id:'Jenis Penipuan Umum yang Dijelaskan' },
  'safety.scam.type7.title': { zh:'电话/网购诈骗', en:'Phone / Online Shopping Scam', ms:'Penipuan Telefon / Beli-belah Dalam Talian', id:'Penipuan Telepon / Belanja Online' },
  'safety.scam.type7.desc':  { zh:'冒充快递、海关或电商平台客服，谎称包裹被扣或账户异常，要求转账"解冻"', en:'Impersonating courier, customs or e-commerce customer service, claiming a parcel is held or account is frozen, requesting a transfer to "unfreeze"', ms:'Menyamar sebagai kurier, kastam atau khidmat pelanggan e-dagang, mendakwa bungkusan ditahan atau akaun dibekukan, meminta pindahan untuk "nyahbekukan"', id:'Menyamar sebagai kurir, bea cukai, atau layanan pelanggan e-commerce, mengklaim paket tertahan atau akun dibekukan, meminta transfer untuk "mencairkan"' },
  'safety.scam.type8.title': { zh:'非法换汇', en:'Illegal Currency Exchange', ms:'Pertukaran Wang Haram', id:'Penukaran Valuta Ilegal' },
  'safety.scam.type8.desc':  { zh:'街头声称汇率极好，实际以假币或短斤缺两的方式行骗，换汇必须去正规银行或持牌钱庄', en:'Street offers of great exchange rates, but use counterfeit notes or give less than promised. Only exchange at licensed banks or money changers.', ms:'Tawaran kadar pertukaran yang baik di jalanan, tetapi menggunakan wang palsu atau memberi kurang dari yang dijanjikan. Tukar wang hanya di bank berlesen atau kedai wang berlesen.', id:'Penawaran nilai tukar bagus di jalan, tapi menggunakan uang palsu atau memberikan lebih sedikit. Tukar mata uang hanya di bank atau money changer berlisensi.' },
  'safety.scam.type9.title': { zh:'出租车/Grab宰客', en:'Taxi / Grab Overcharging', ms:'Teksi / Grab Mengenakan Tambang Berlebihan', id:'Taksi / Grab Selangit' },
  'safety.scam.type9.desc':  { zh:'机场外无牌出租车报价极高，或Grab司机绕路。建议始终使用Grab/Maxim等正规打车App，出发前确认路线', en:"Unlicensed taxis outside airports charge exorbitant fares, or Grab drivers take detours. Always use official ride-hailing apps (Grab/Maxim) and confirm the route before departing.", ms:'Teksi tanpa lesen di luar lapangan terbang mengenakan tambang melampau, atau pemandu Grab mengambil jalan pusing. Sentiasa gunakan aplikasi perkhidmatan e-hailing rasmi dan sahkan laluan sebelum berlepas.', id:'Taksi tidak berlisensi di luar bandara mengenakan tarif selangit, atau pengemudi Grab memutar jalan. Selalu gunakan aplikasi ride-hailing resmi dan konfirmasi rute sebelum berangkat.' },
  'safety.scam.type10.title': { zh:'微信/社媒投资骗局', en:'WeChat / Social Media Investment Scam', ms:'Penipuan Pelaburan WeChat / Media Sosial', id:'Penipuan Investasi WeChat / Media Sosial' },
  'safety.scam.type10.desc':  { zh:'通过微信添加"朋友"介绍所谓高收益投资，起初有小额回报建立信任，最终骗取大额资金，即"杀猪盘"变种', en:'Added on WeChat by a "friend" who introduces high-yield investments. Small early returns build trust, then a large sum is taken — a variant of "pig butchering" scams.', ms:'Ditambah di WeChat oleh "rakan" yang memperkenalkan pelaburan hasil tinggi. Pulangan kecil awal membina kepercayaan, kemudian jumlah besar diambil — variasi penipuan "sembelih babi".', id:'Ditambah di WeChat oleh "teman" yang memperkenalkan investasi hasil tinggi. Pengembalian kecil di awal membangun kepercayaan, kemudian sejumlah besar diambil — varian penipuan "pig butchering".' },

  'safety.cases.title':  { zh:'真实受骗案例（已脱敏）', en:'Real Scam Cases (Anonymised)', ms:'Kes Penipuan Sebenar (Dikaburkan)', id:'Kasus Penipuan Nyata (Dianonimkan)' },
  'safety.cases.warning': { zh:'⚠️ 以下案例均为真实事件，已进行脱敏处理。刻骨铭心的教训，希望对你有所帮助', en:'⚠️ The following cases are real events with identifying details removed. Hard lessons — shared so you can stay safe.', ms:'⚠️ Kes berikut adalah kejadian sebenar dengan butiran pengenalan dikeluarkan. Pengajaran pahit — dikongsi agar anda kekal selamat.', id:'⚠️ Kasus berikut adalah kejadian nyata dengan detail identifikasi yang dihapus. Pelajaran pahit — dibagikan agar Anda tetap aman.' },

  'safety.selfcheck.title': { zh:'防骗自查清单', en:'Anti-Scam Self-Check List', ms:'Senarai Semak Diri Anti-Penipuan', id:'Daftar Periksa Mandiri Anti-Penipuan' },
  'safety.guides.title':    { zh:'防骗安全攻略', en:'Anti-Scam Safety Guides', ms:'Panduan Keselamatan Anti-Penipuan', id:'Panduan Keamanan Anti-Penipuan' },
  'safety.report.title':    { zh:'遭遇诈骗怎么办', en:'What to Do If Scammed', ms:'Apa yang Perlu Dilakukan Jika Ditipu', id:'Apa yang Harus Dilakukan Jika Ditipu' },

  /* ────────────────────────────────────────────────
     LANGUAGE SWITCHER UI
  ──────────────────────────────────────────────── */
  'lang.zh': { zh:'中文', en:'中文', ms:'中文', id:'中文' },
  'lang.en': { zh:'English', en:'English', ms:'English', id:'English' },
  'lang.ms': { zh:'Melayu', en:'Melayu', ms:'Melayu', id:'Melayu' },
  'lang.id': { zh:'Indonesia', en:'Indonesia', ms:'Indonesia', id:'Indonesia' },
};

/* ───────────────────────────────────────────────────
   i18n Engine
─────────────────────────────────────────────────── */
(function () {
  const STORAGE_KEY        = 'nyt_lang';
  const SESSION_CHOSEN_KEY = 'nyt_lang_chosen'; // set only when user actively picks a language
  const SUPPORTED          = ['zh', 'en', 'ms', 'id'];
  const DEFAULT_LANG       = 'zh';

  function getLang() {
    // Only respect saved language if user has actively chosen it in THIS session
    // Using sessionStorage only: clears when browser tab/window is closed
    // This ensures new visitors always see Chinese first
    if (sessionStorage.getItem(SESSION_CHOSEN_KEY)) {
      return sessionStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
    }
    // New session or no explicit choice: always Chinese
    return DEFAULT_LANG;
  }

  function setLang(lang) {
    console.log('[i18n] setLang called with:', lang);
    if (!SUPPORTED.includes(lang)) {
      console.warn('[i18n] Unsupported language:', lang, 'falling back to', DEFAULT_LANG);
      lang = DEFAULT_LANG;
    }
    // Store choice only in sessionStorage (not localStorage)
    // So new browser sessions always start in Chinese
    sessionStorage.setItem(SESSION_CHOSEN_KEY, '1');
    sessionStorage.setItem(STORAGE_KEY, lang);
    console.log('[i18n] Saved to sessionStorage:', STORAGE_KEY, '=', lang);
    applyLang(lang);
  }

  function applyLang(lang) {
    console.log('[i18n] Applying language:', lang);
    const T = window.NYT_I18N;
    let updatedCount = 0;
    
    // Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (T[key] && T[key][lang] !== undefined) {
        el.innerHTML = T[key][lang];
        updatedCount++;
      } else {
        console.warn('[i18n] Missing translation for key:', key, 'lang:', lang);
      }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (T[key] && T[key][lang] !== undefined) {
        el.placeholder = T[key][lang];
      }
    });
    
    // Update html lang attribute
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;
    
    // Highlight active lang button
    document.querySelectorAll('.lang-btn').forEach(btn => {
      const isActive = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('active', isActive);
    });
    
    console.log('[i18n] Updated', updatedCount, 'elements');
    
    // Dispatch event so other scripts can react
    window.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
    
    // Show visual feedback
    showLangChangeFeedback(lang);
  }
  
  function showLangChangeFeedback(lang) {
    const langNames = { zh: '中文', en: 'English', ms: 'Melayu', id: 'Indonesia' };
    const feedback = document.createElement('div');
    feedback.style.cssText = `
      position: fixed;
      top: 80px;
      right: 20px;
      background: #2d9b5c;
      color: #fff;
      padding: 12px 20px;
      border-radius: 8px;
      font-size: 14px;
      z-index: 10000;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      animation: langFeedbackIn 0.3s ease;
    `;
    feedback.textContent = '✓ 已切换到 ' + langNames[lang];
    document.body.appendChild(feedback);
    
    setTimeout(() => {
      feedback.style.animation = 'langFeedbackOut 0.3s ease';
      setTimeout(() => feedback.remove(), 300);
    }, 2000);
  }

  function injectLangSwitcher() {
    // 防重复：如果已存在则先移除
    const existing = document.querySelector('.lang-switcher');
    if (existing) existing.remove();

    // Build the switcher HTML
    const switcher = document.createElement('div');
    switcher.className = 'lang-switcher';
    switcher.innerHTML = `
      <button class="lang-toggle" aria-label="Language / 语言">
        <i class="fas fa-globe"></i>
        <span class="lang-current"></span>
        <i class="fas fa-chevron-down lang-arrow"></i>
      </button>
      <div class="lang-dropdown">
        <div class="lang-dropdown-label">选择语言 / Language</div>
        <button class="lang-btn" data-lang="zh">
          <span class="lang-flag">🇨🇳</span>
          <span class="lang-name">中文</span>
          <span class="lang-native">简体中文</span>
        </button>
        <button class="lang-btn" data-lang="en">
          <span class="lang-flag">🇬🇧</span>
          <span class="lang-name">English</span>
          <span class="lang-native">English</span>
        </button>
        <button class="lang-btn" data-lang="ms">
          <span class="lang-flag">🇲🇾</span>
          <span class="lang-name">Melayu</span>
          <span class="lang-native">Bahasa Malaysia</span>
        </button>
        <button class="lang-btn" data-lang="id">
          <span class="lang-flag">🇮🇩</span>
          <span class="lang-name">Indonesia</span>
          <span class="lang-native">Bahasa Indonesia</span>
        </button>
      </div>
    `;

    // Insert into top-bar-right if it exists, else into header
    const topBarRight = document.querySelector('.top-bar-right');
    const mainHeader  = document.querySelector('.main-header .container');
    if (topBarRight) {
      topBarRight.insertBefore(switcher, topBarRight.firstChild);
    } else if (mainHeader) {
      mainHeader.appendChild(switcher);
    } else {
      document.body.appendChild(switcher);
    }

    // Toggle dropdown
    const toggle = switcher.querySelector('.lang-toggle');
    const dropdown = switcher.querySelector('.lang-dropdown');
    
    if (!toggle || !dropdown) {
      console.error('[i18n] Language switcher elements not found!');
      return;
    }
    
    toggle.addEventListener('click', e => {
      e.stopPropagation();
      const isOpen = switcher.classList.toggle('open');
      console.log('[i18n] Dropdown toggled:', isOpen ? 'open' : 'closed');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!switcher.contains(e.target)) {
        switcher.classList.remove('open');
      }
    });
    
    // Close dropdown on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        switcher.classList.remove('open');
      }
    });

    // Lang buttons
    switcher.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        e.stopPropagation();
        const lang = btn.getAttribute('data-lang');
        console.log('[i18n] Language button clicked:', lang);
        setLang(lang);
        switcher.classList.remove('open');
        updateCurrentLabel(lang);
      });
    });

    function updateCurrentLabel(lang) {
      const labels = { zh:'🇨🇳 中文', en:'🇬🇧 EN', ms:'🇲🇾 MY', id:'🇮🇩 ID' };
      const el = switcher.querySelector('.lang-current');
      if (el) el.textContent = labels[lang] || lang.toUpperCase();
    }

    const currentLang = getLang();
    updateCurrentLabel(currentLang);
  }

  // Init on DOM ready
  function init() {
    injectLangSwitcher();
    applyLang(getLang());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Get translation for a key (used by other modules like user.js)
  function t(key) {
    const entry = window.NYT_I18N && window.NYT_I18N[key];
    if (!entry) return '';
    const lang = getLang();
    return entry[lang] || entry.zh || '';
  }

  // Expose API globally
  window.NYT_Lang = { setLang, getLang, applyLang, t, injectLangSwitcher };
})();
