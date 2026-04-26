/**
 * BUMDes Suwaluh Mandiri Sejahtera — script.js (FULL & INTEGRATED)
 * - HD images for units (picsum)
 * - Reservasi prefill via reserveId param
 * - Admin Reservasi tab: view, verify, upload tiket (base64)
 * - Keep existing features
 */

/* ================================================
   DATA DEFAULT (Untuk Frontend & Admin)
   ================================================ */
let dataOrg = [
  { id: 1, nama: 'Waloyo', jabatan: 'Dewan Komisaris', icon: '👑', foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0QgUIvdoj2TMjKjdTxU5sMH-g5u0hfvxY3g&s', urutan: 1 },
  { id: 2, nama: 'Sujono', jabatan: 'Direktur Utama', icon: '🏛️', foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0qPH_mUfLZNjF1PHqH3XjcS1kT_20Pnky1A&s', urutan: 2 },
  { id: 3, nama: 'Hartanto', jabatan: 'Komite Audit', icon: '🔍', foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSI1ugkBceId1Ozfbtv0tNGp3EqmfvcyN6ww&s', urutan: 3 },
  { id: 4, nama: 'Mukias', jabatan: 'Komite Nominasi', icon: '📋', foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrOgvWumJFuEXSi6sWKLlMTJ9ljMKQCqWbfw&s', urutan: 4 },
  { id: 5, nama: 'Bidin', jabatan: 'Cleaning Service', icon: '🧹', foto: 'https://media.hitekno.com/thumbs/2022/01/12/30893-hokage-keenam-kakashi-hatake/730x480-img-30893-hokage-keenam-kakashi-hatake.jpg', urutan: 5 }
];

let dataUsaha = [
  {
    id: 1,
    nama: 'Kolam Renang',
    kategori: 'wisata',
    icon: '🏊',
    harga: 'Rp 15.000 / orang',
    jadwal: 'Setiap hari 07.00 - 17.00',
    deskripsi: 'Kolam renang bersih dengan dua ukuran - dewasa dan anak-anak.',
    deskripsiLengkap: 'Kolam renang kami memiliki dua kolam: dewasa & anak. Fasilitas: toilet, mushola, area parkir, warung.',
    lokasi: 'Area Wisata Desa Suwaluh, RT 02',
    kontak: '0812-3456-7890',
    status: 'Aktif',
    galeri: [],
    image: 'https://picsum.photos/seed/kolamrenang/1600/900'
  },
  {
    id: 2,
    nama: 'Flying Fox',
    kategori: 'wisata',
    icon: '🎪',
    harga: 'Rp 25.000 / orang',
    jadwal: 'Sabtu - Minggu 08.00 - 16.00',
    deskripsi: 'Wahana flying fox sepanjang 150 meter melintasi hamparan sawah.',
    deskripsiLengkap: 'Flying fox family-friendly dengan staf terlatih.',
    lokasi: 'Bukit Wisata Suwaluh',
    kontak: '0812-3456-7890',
    status: 'Aktif',
    galeri: [],
    image: 'https://picsum.photos/seed/flyingfox/1600/900'
  },
  {
    id: 3,
    nama: 'Kolam Pancing',
    kategori: 'wisata',
    icon: '🎣',
    harga: 'Rp 20.000 / jam',
    jadwal: 'Setiap hari 06.00 - 17.00',
    deskripsi: 'Kolam pancing luas dengan ikan nila, mas, dan lele.',
    deskripsiLengkap: 'Kolam pancing cocok untuk keluarga dan komunitas memancing.',
    lokasi: 'Area Kolam Desa Suwaluh',
    kontak: '0812-3456-7890',
    status: 'Aktif',
    galeri: [],
    image: 'https://picsum.photos/seed/kolampancing/1600/900'
  },
  {
    id: 4,
    nama: 'ATV Track',
    kategori: 'wisata',
    icon: '🏎️',
    harga: 'Rp 50.000 / 30 menit',
    jadwal: 'Sabtu - Minggu 08.00 - 17.00',
    deskripsi: 'Lintasan ATV menarik sepanjang 500 meter.',
    deskripsiLengkap: 'Lintasan ATV untuk petualang, dilengkapi helm & pengaman.',
    lokasi: 'Track ATV Desa Suwaluh',
    kontak: '0812-3456-7890',
    status: 'Aktif',
    galeri: [],
    image: 'https://picsum.photos/seed/atvtrack/1600/900'
  },
  {
    id: 5,
    nama: 'Camping Ground',
    kategori: 'wisata',
    icon: '🏕️',
    harga: 'Rp 35.000 / malam',
    jadwal: 'Setiap hari (reservasi wajib)',
    deskripsi: 'Area berkemah yang asri dengan fasilitas lengkap.',
    deskripsiLengkap: 'Area camping luas, tersedia lahan datar dan area api unggun.',
    lokasi: 'Camping Ground Desa Suwaluh',
    kontak: '0812-3456-7890',
    status: 'Aktif',
    galeri: [],
    image: 'https://picsum.photos/seed/campingground/1600/900'
  },
  {
    id: 6,
    nama: 'Warung Kuliner Desa',
    kategori: 'kuliner',
    icon: '🍽️',
    harga: 'Mulai Rp 10.000',
    jadwal: 'Setiap hari 07.00 - 20.00',
    deskripsi: 'Nikmati masakan khas Desa Suwaluh yang autentik.',
    deskripsiLengkap: 'Warung menyajikan masakan rumahan khas Suwaluh.',
    lokasi: 'Pasar Desa Suwaluh',
    kontak: '0812-3456-7890',
    status: 'Aktif',
    galeri: [],
    image: 'https://picsum.photos/seed/warungkuliner/1600/900'
  },
  {
    id: 7,
    nama: 'Simpan Pinjam',
    kategori: 'jasa',
    icon: '🏦',
    harga: 'Bunga 1% / bulan',
    jadwal: 'Senin - Jumat 08.00 - 15.00',
    deskripsi: 'Layanan simpan pinjam berbunga rendah untuk warga Desa Suwaluh.',
    deskripsiLengkap: 'Layanan simpan pinjam dengan syarat mudah untuk warga setempat.',
    lokasi: 'Kantor BUMDes Suwaluh',
    kontak: '0812-3456-7890',
    status: 'Aktif',
    galeri: [],
    image: 'https://picsum.photos/seed/simpanpinjam/1600/900'
  }
]; window.dataUsaha = dataUsaha;

let dataInvestor = [
  { id: 1, nama: 'Ahmad Fauzi', alamat: 'Desa Suwaluh RT 01', nominal: 5000000, tanggal: '2024-01-15' },
  { id: 2, nama: 'Siti Aminah', alamat: 'Desa Suwaluh RT 03', nominal: 10000000, tanggal: '2024-02-20' },
  { id: 3, nama: 'Budi Santoso', alamat: 'Kec. Balongbendo', nominal: 25000000, tanggal: '2024-03-10' },
  { id: 4, nama: 'Dewi Rahayu', alamat: 'Desa Suwaluh RT 02', nominal: 15000000, tanggal: '2024-04-05' },
  { id: 5, nama: 'Hendra Wijaya', alamat: 'Sidoarjo Kota', nominal: 50000000, tanggal: '2024-05-12' }
];

let dataBerita = [
  { id: 1, judul: 'Peluncuran Wahana Flying Fox Baru', tanggal: '15 April 2025', kategori: 'wisata', icon: '🎉', deskripsi: 'BUMDes resmi membuka wahana flying fox sepanjang 150 meter.' },
  { id: 2, judul: 'Rapat Penyertaan Modal Semester I', tanggal: '10 Maret 2025', kategori: 'kegiatan', icon: '📢', deskripsi: 'Rapat dihadiri 42 investor aktif.' },
  { id: 3, judul: 'Laporan Keuangan 2024 Dipublikasikan', tanggal: '1 Feb 2025', kategori: 'pengumuman', icon: '📄', deskripsi: 'Laporan keuangan tahunan 2024 tersedia.' }
];

let dataSaran = [];

const dataLaporan = [
  { nama: 'Laporan Laba Rugi 2025', tahun: '2025', jenis: 'Laba Rugi', icon: '📊' },
  { nama: 'Neraca 2025', tahun: '2025', jenis: 'Neraca', icon: '⚖️' },
  { nama: 'Arus Kas 2025', tahun: '2025', jenis: 'Arus Kas', icon: '💧' },
  { nama: 'Laporan Laba Rugi 2024', tahun: '2024', jenis: 'Laba Rugi', icon: '📊' },
  { nama: 'Neraca 2024', tahun: '2024', jenis: 'Neraca', icon: '⚖️' },
  { nama: 'Arus Kas 2024', tahun: '2024', jenis: 'Arus Kas', icon: '💧' }
];

  const dataAnalisis = [
    { label: 'ROA', value: '12.4%', icon: '📊', desc: 'Return on Assets — efisiensi penggunaan aset' },
    { label: 'ROE', value: '18.7%', icon: '💹', desc: 'Return on Equity — pengembalian ekuitas' },
    { label: 'ROI', value: '15.2%', icon: '📈', desc: 'Return on Investment — keuntungan investasi' },
    { label: 'Payback Period', value: '4.2 Thn', icon: '⏳', desc: 'Waktu pengembalian modal' }
  ];

const dataTren = {
  tahun: ['2020', '2021', '2022', '2023', '2024', '2025'],
  pendapatan: [380, 420, 510, 620, 780, 950],
  laba: [55, 70, 95, 120, 160, 210],
  kas: [130, 160, 200, 250, 310, 390],
  profit: [8.5, 9.2, 11.4, 13.2, 15.0, 17.8]
};

const dataTestimoni = [
  { nama: 'Pak Eko', stars: 5, pesan: 'Kolam renangnya bersih banget! Anak-anak senang.' },
  { nama: 'Bu Sari', stars: 4, pesan: 'Flying fox-nya seru, pemandangannya indah.' },
  { nama: 'Mas Doni', stars: 5, pesan: 'Kolam pancingnya asyik banget, banyak ikannya.' },
  { nama: 'Mbak Tina', stars: 4, pesan: 'Fasilitas lengkap dan pengelolanya ramah.' }
];

let ratingWisata = 0;
let ratingPrasarana = 0;

/* ================================================
   INISIALISASI DATA KE LOCALSTORAGE
   ================================================ */
function initData() {
  // Usaha: sinkron adminUsaha <-> dataUsaha (supaya detail-usaha.html dapat memakai 'dataUsaha')
  const savedAdminUsaha = localStorage.getItem('adminUsaha');
  const savedDataUsaha = localStorage.getItem('dataUsaha');

  if (savedAdminUsaha) {
    try {
      dataUsaha = JSON.parse(savedAdminUsaha);
    } catch (e) {
      console.warn('Gagal parse adminUsaha, gunakan default', e);
    }
  } else if (savedDataUsaha) {
    try {
      dataUsaha = JSON.parse(savedDataUsaha);
      localStorage.setItem('adminUsaha', JSON.stringify(dataUsaha));
    } catch (e) {
      console.warn('Gagal parse dataUsaha, gunakan default', e);
    }
  } else {
    // simpan default ke kedua key
    localStorage.setItem('adminUsaha', JSON.stringify(dataUsaha));
    localStorage.setItem('dataUsaha', JSON.stringify(dataUsaha));
  }

  // Investor
  const savedInvestor = localStorage.getItem('adminInvestor');
  if (savedInvestor) {
    try { dataInvestor = JSON.parse(savedInvestor); } catch (e) { console.warn('parse investor', e); }
  } else {
    localStorage.setItem('adminInvestor', JSON.stringify(dataInvestor));
  }

  // Berita
  const savedBerita = localStorage.getItem('adminBerita');
  if (savedBerita) {
    try { dataBerita = JSON.parse(savedBerita); } catch (e) { console.warn('parse berita', e); }
  } else {
    localStorage.setItem('adminBerita', JSON.stringify(dataBerita));
  }

  // Organisasi
  const savedOrganisasi = localStorage.getItem('adminOrganisasi');
  if (savedOrganisasi) {
    try { dataOrg = JSON.parse(savedOrganisasi); } catch (e) { console.warn('parse organisasi', e); }
  } else {
    localStorage.setItem('adminOrganisasi', JSON.stringify(dataOrg));
  }

  // Saran
  const savedSaran = localStorage.getItem('adminSaran');
  if (savedSaran) {
    try { dataSaran = JSON.parse(savedSaran); } catch (e) { console.warn('parse saran', e); }
  } else {
    dataSaran = [
      { id: 1, nama: 'Pak Eko', pesan: 'Kolam renangnya bersih banget! Anak-anak senang.', rating: 5, tanggal: '2025-04-10' },
      { id: 2, nama: 'Bu Sari', pesan: 'Flying fox-nya seru, pemandangannya indah.', rating: 4, tanggal: '2025-04-12' },
      { id: 3, nama: 'Mas Doni', pesan: 'Kolam pancingnya asyik banget, banyak ikannya.', rating: 5, tanggal: '2025-04-14' }
    ];
    localStorage.setItem('adminSaran', JSON.stringify(dataSaran));
  }

  // load saran dari user (opsional)
  const userSaran = localStorage.getItem('saranBumdes');
  if (userSaran) {
    try {
      const userSaranData = JSON.parse(userSaran);
      dataSaran = [...dataSaran, ...userSaranData];
    } catch (e) {
      console.warn('parse saranBumdes', e);
    }
  }

  // expose dataUsaha untuk halaman detail yang mungkin memuat script sebelum localStorage tersedia
  window.dataUsaha = dataUsaha;
}

/* ================================================
   UTILITY FUNCTIONS
   ================================================ */
function formatRupiah(angka) {
  if (typeof angka === 'number') return 'Rp ' + angka.toLocaleString('id-ID');
  return angka;
}

// Sanitasi teks agar aman untuk dimasukkan ke DOM
function escapeHTML(str) {
  if (typeof str !== 'string') return str;
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function showToast(msg, isError = false) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.toggle('error', isError);
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

function validateForm(form) {
  let valid = true;
  form.querySelectorAll('[required]').forEach(field => {
    const err = field.nextElementSibling;
    if (!field.value || !String(field.value).trim()) {
      field.classList.add('error');
      if (err && err.classList && err.classList.contains('err-msg')) {
        err.textContent = 'Field ini wajib diisi.';
      }
      valid = false;
    } else {
      field.classList.remove('error');
      if (err && err.classList && err.classList.contains('err-msg')) {
        err.textContent = '';
      }
    }
  });
  if (!valid) showToast('⚠️ Lengkapi semua field yang wajib diisi.', true);
  return valid;
}

/* ================================================
   HELPER: Convert Image File ke Base64
   ================================================ */
function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

/* ================================================
   RENDER FUNCTIONS (FRONTEND)
   ================================================ */

function renderOrg() {
  const container = document.getElementById('orgGrid');
  if (!container) return;

  const komisaris = dataOrg.find(p => p.urutan === 1);
  const direktur = dataOrg.find(p => p.urutan === 2);
  const staff = dataOrg.filter(p => p.urutan > 2);

  container.innerHTML = `
    <div class="org-tree">
      <div class="org-node">
        ${createOrgCard(komisaris)}
      </div>
      <div class="org-line vertical"></div>
      <div class="org-node">
        ${createOrgCard(direktur)}
      </div>
      <div class="org-line vertical"></div>
      <div class="org-children">
        ${staff.map(p => `
          <div class="org-child">
            <div class="org-line vertical"></div>
            ${createOrgCard(p, true)}
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// safe helper: createOrgCard uses sanitized text dan foto fallback
function createOrgCard(p, small = false) {
  if (!p) return '';
  let foto = (p.foto && String(p.foto).trim()) ? p.foto.trim() : '';
  // jika bukan http(s) atau data: gunakan placeholder
  if (!foto || (!foto.startsWith('http') && !foto.startsWith('data:'))) {
    foto = 'https://via.placeholder.com/150?text=No+Photo';
  }

  const nama = escapeHTML(p.nama || '-');
  const jabatan = escapeHTML(p.jabatan || '-');

  return `
    <div class="${small ? 'org-card-small' : 'org-card'}">
      <div class="${small ? 'org-avatar-small' : 'org-avatar'}">
        <img src="${foto}" alt="${nama}" onerror="this.onerror=null; this.src='https://via.placeholder.com/150?text=No+Photo'">
      </div>
      <div class="${small ? 'org-name-small' : 'org-name'}">${nama}</div>
      <div class="${small ? 'org-jabatan-small' : 'org-jabatan'}">${jabatan}</div>
    </div>
  `;
}

function renderUsaha(cat = 'semua') {
  const grid = document.getElementById('usahaGrid');
  if (!grid) return;
  const filtered = cat === 'semua' ? dataUsaha : dataUsaha.filter(u => u.kategori === cat);
  grid.innerHTML = filtered.map(u => {
    // Validasi gambar & sediakan srcset (1x & 2x)
    let image = u.image && String(u.image).trim() ? u.image : 'https://picsum.photos/seed/noimage/1600/900';
    // create a 1x and 2x url (picsum supports size path)
    const image1x = image.replace(/\/\d+\/\d+$/, '/800/450');
    const image2x = image.replace(/\/\d+\/\d+$/, '/1600/900');
    // price short description
    const shortDesc = escapeHTML((u.deskripsi || '').substring(0, 120)) + ((u.deskripsi && u.deskripsi.length>120)? '...': '');
    
    return `
      <div class="usaha-card">
        <div class="usaha-img">
          <img 
            src="${image1x}" 
            srcset="${image1x} 1x, ${image2x} 2x"
            sizes="(max-width: 600px) 100vw, 300px"
            alt="${escapeHTML(u.nama)}"
            onerror="this.onerror=null; this.src='https://picsum.photos/seed/noimage/800/450'"
            style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <div class="usaha-body">
          <div class="usaha-name">${escapeHTML(u.nama)}</div>
          <div class="usaha-desc">${shortDesc}</div>
          <div class="usaha-harga">💰 ${escapeHTML(u.harga || '-')}</div>
          <div class="usaha-jadwal">⏰ ${escapeHTML(u.jadwal || 'Setiap hari')}</div>
          <div class="usaha-actions">
            <button class="btn btn-outline" onclick="goToDetail(${u.id})">Detail</button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function goToDetail(id) {
  window.location.href = `detail-usaha.html?id=${id}`;
}

function renderLaporan() {
  const tahun = document.getElementById('filterTahun')?.value || '2025';
  const list = document.getElementById('laporanList');
  if (!list) return;
  const filtered = dataLaporan.filter(l => l.tahun === tahun);
  list.innerHTML = filtered.map(l => `
    <div class="laporan-item">
      <div style="display:flex;align-items:center;gap:1rem">
        <span class="laporan-icon">${l.icon}</span>
        <div class="laporan-info">
          <h4>${escapeHTML(l.nama)}</h4>
          <p>Tahun ${escapeHTML(l.tahun)} • ${escapeHTML(l.jenis)}</p>
        </div>
      </div>
      <button class="btn btn-primary" onclick="showToast('📄 Membuka ${escapeHTML(l.nama)}')">Lihat</button>
    </div>
  `).join('');
}

function renderAnalisis() {
  const grid = document.getElementById('analisisGrid');
  if (!grid) return;
  grid.innerHTML = dataAnalisis.map(a => `
    <div class="analisis-card">
      <span class="analisis-icon">${a.icon}</span>
      <div class="analisis-label">${escapeHTML(a.label)}</div>
      <div class="analisis-value">${escapeHTML(a.value)}</div>
      <div class="analisis-desc">${escapeHTML(a.desc)}</div>
    </div>
  `).join('');
}

function renderInvestorFrontend(query = '') {
  const body = document.getElementById('investorBody');
  if (!body) return;
  const filtered = dataInvestor.filter(i => i.nama.toLowerCase().includes(query.toLowerCase()));
  body.innerHTML = filtered.map((i, idx) => `
    <tr>
      <td style="padding:.75rem 1rem">${idx + 1}</td>
      <td style="padding:.75rem 1rem"><strong>${escapeHTML(i.nama)}</strong></td>
      <td style="padding:.75rem 1rem">${escapeHTML(i.alamat)}</td>
      <td class="nominal-cell" style="padding:.75rem 1rem">${formatRupiah(i.nominal)}</td>
    </tr>
  `).join('');
}

function renderTestimoni() {
  const el = document.getElementById('testimoniList');
  if (!el) return;
  el.innerHTML = dataTestimoni.map(t => `
    <div class="testimoni-card">
      <div class="testimoni-header">
        <span class="testimoni-nama">👤 ${escapeHTML(t.nama)}</span>
        <span class="testimoni-stars">${'★'.repeat(t.stars)}${'☆'.repeat(5 - t.stars)}</span>
      </div>
      <p class="testimoni-pesan">"${escapeHTML(t.pesan)}"</p>
    </div>
  `).join('');
}

function renderSaranList() {
  const el = document.getElementById('saranList');
  if (!el) return;
  const saranData = dataSaran.slice(0, 5);
  if (!saranData.length) {
    el.innerHTML = '<p style="font-size:.88rem;color:var(--gray-500);text-align:center;padding:2rem">Belum ada masukan. Jadilah yang pertama!</p>';
    return;
  }
  el.innerHTML = saranData.map(s => `
    <div class="testimoni-card">
      <div class="testimoni-header">
        <span class="testimoni-nama">👤 ${escapeHTML(s.nama)}</span>
        <span style="font-size:.78rem;color:var(--gray-500)">${escapeHTML(s.tanggal || '')}</span>
      </div>
      <p class="testimoni-pesan">"${escapeHTML(s.pesan)}"</p>
      <p style="font-size:.78rem;color:var(--gray-500);margin-top:.5rem">Rating: ${'★'.repeat(s.rating)}${'☆'.repeat(5 - s.rating)}</p>
    </div>
  `).join('');
}

// ====================== HALAMAN DETAIL UNIT USAHA ======================
function renderUsahaDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'), 10);
  const container = document.getElementById('usahaDetail');
  if (!container) return;

  const allUsaha = window.dataUsaha || JSON.parse(localStorage.getItem('adminUsaha') || '[]') || [];
  const u = allUsaha.find(x => x.id === id);
  if (!u) {
    container.innerHTML = `<p style="padding:2rem;text-align:center">Unit usaha tidak ditemukan.</p>`;
    return;
  }

  // fallback image(s)
  const mainImage = (u.image && u.image.trim()) ? u.image : 'https://via.placeholder.com/900x500?text=No+Image';
  const galeri = (u.galeri && u.galeri.length)
    ? u.galeri
    : [
        mainImage,
        'https://picsum.photos/seed/gallery1/400/300',
        'https://picsum.photos/seed/gallery2/400/300'
      ];

  // random tambahan data bila belum tersedia
  const deskripsiLengkap = u.deskripsiLengkap || u.deskripsi || 'Deskripsi lengkap belum tersedia. Ini contoh deskripsi acak untuk mengisi halaman detail unit usaha.';
  const fasilitas = u.fasilitas || ['Toilet', 'Area Parkir', 'Mushola', 'Warung Makanan'];
  const rating = (typeof u.rating === 'number') ? u.rating : (4 + Math.floor(Math.random() * 2)); // 4-5

  // build HTML
  container.innerHTML = `
    <div class="usaha-detail-grid" style="display:grid;grid-template-columns:1fr 380px;gap:1.25rem;align-items:start">
      <div class="usaha-media" style="background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 6px 18px rgba(0,0,0,.06)">
        <div style="width:100%;height:420px;overflow:hidden;background:#f0f0f0">
          <img id="usahaDetailMainImage" src="${mainImage}" alt="${escapeHTML(u.nama)}" style="width:100%;height:100%;object-fit:cover" onerror="this.src='https://via.placeholder.com/900x500?text=No+Image'">
        </div>
        <div class="usaha-gallery" style="display:flex;gap:.5rem;padding:.75rem;flex-wrap:wrap;background:#fff">
          ${galeri.map((g, idx) => `<img class="usaha-thumb" src="${g}" data-src="${g}" alt="galeri-${idx}" style="width:110px;height:82px;object-fit:cover;border-radius:6px;cursor:pointer" onerror="this.src='https://picsum.photos/seed/noimage/110/82'">`).join('')}
        </div>
      </div>

      <aside class="usaha-info" style="background:#fff;padding:1rem;border-radius:8px;box-shadow:0 6px 18px rgba(0,0,0,.06);">
        <h2 style="margin:0 0 .25rem 0">${escapeHTML(u.icon || '')} ${escapeHTML(u.nama)}</h2>
        <div style="color:var(--gray-600);font-size:.95rem;margin-bottom:.6rem">${escapeHTML(u.kategori || '-')}</div>
        <div style="display:flex;gap:.5rem;align-items:center;margin-bottom:.75rem">
          <div style="font-weight:700;font-size:1.05rem">Harga:</div>
          <div style="color:#0b6b4a;font-weight:600">${escapeHTML(u.harga || 'Rp 0')}</div>
        </div>

        <div style="display:flex;flex-direction:column;gap:.5rem;margin-bottom:.75rem">
          <div><strong>Jam Operasional:</strong> ${escapeHTML(u.jadwal || 'Setiap hari')}</div>
          <div><strong>Lokasi:</strong> ${escapeHTML(u.lokasi || '-')}</div>
          <div><strong>Kontak:</strong> <a href="tel:${escapeHTML(u.kontak || '')}" style="color:#0b6b4a;text-decoration:none">${escapeHTML(u.kontak || '-')}</a></div>
          <div><strong>Status:</strong> ${escapeHTML(u.status || 'Aktif')}</div>
        </div>

        <div style="margin:.6rem 0">
          <strong>Rating:</strong>
          <span style="color:#f5a623;margin-left:.4rem">${'★'.repeat(rating)}${'☆'.repeat(5 - rating)}</span>
        </div>

        <div style="display:flex;gap:.5rem;margin-top:1rem">
          <button class="btn btn-primary" id="btnReservasiDetail" style="flex:1">Reservasi</button>
          <button class="btn btn-outline" id="btnHubungiWA" style="flex:1">Hubungi via WA</button>
        </div>
      </aside>
    </div>

    <section class="usaha-desc" style="margin-top:1rem;background:#fff;padding:1rem;border-radius:8px;box-shadow:0 6px 18px rgba(0,0,0,.04)">
      <h3>Deskripsi</h3>
      <p style="white-space:pre-wrap;color:var(--gray-700)">${escapeHTML(deskripsiLengkap)}</p>

      <h4>Fasilitas</h4>
      <ul style="margin-top:.5rem">
        ${fasilitas.map(f => `<li>${escapeHTML(f)}</li>`).join('')}
      </ul>
    </section>
  `;

  // gallery interaction: klik thumbnail -> ganti main image
  const mainImg = document.getElementById('usahaDetailMainImage');
  container.querySelectorAll('.usaha-thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
      const src = thumb.dataset.src;
      if (src) {
        mainImg.src = src;
      }
    });
    // keyboard accessibility
    thumb.tabIndex = 0;
    thumb.addEventListener('keydown', (ev) => {
      if (ev.key === 'Enter' || ev.key === ' ') {
        ev.preventDefault();
        thumb.click();
      }
    });
  });

  // tombol reservasi -> buka halaman unit-wisata dengan param reserveId agar form dapat prefilling
  const btnReservasi = document.getElementById('btnReservasiDetail');
  if (btnReservasi) {
    btnReservasi.addEventListener('click', () => {
      const targetUrl = `unit-wisata.html?reserveId=${u.id}#reservasi`;
      window.location.href = targetUrl;
    });
  }

  // tombol WA
  const btnWA = document.getElementById('btnHubungiWA');
  if (btnWA) {
    btnWA.addEventListener('click', () => {
      const tel = (u.kontak || '').replace(/\D/g,'');
      const text = encodeURIComponent(`Halo, saya ingin reservasi/bertanya tentang ${u.nama}. Apakah tersedia?`);
      const url = tel ? `https://wa.me/${tel}?text=${text}` : `https://wa.me/?text=${text}`;
      window.open(url, '_blank');
    });
  }
}

/* ================================================
   CHART HELPERS
   ================================================ */

function drawBarChart(ctx, labels, values, color) {
  const canvas = ctx.canvas;
  const container = canvas.parentElement;
  const width = container ? container.clientWidth - 32 : 400;
  const height = 250;
  canvas.width = width;
  canvas.height = height;
  ctx.clearRect(0, 0, width, height);
  if (!values.length) return;
  const padding = { top: 40, right: 20, bottom: 50, left: 50 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;
  const maxValue = Math.max(...values) * 1.1;
  const barWidth = (chartWidth / values.length) * 0.6;
  const barSpacing = (chartWidth / values.length) * 0.4;
  ctx.strokeStyle = '#e0e8e2';
  ctx.lineWidth = 1;
  ctx.fillStyle = '#6b7e72';
  ctx.font = '11px "Plus Jakarta Sans", sans-serif';
  ctx.textAlign = 'right';
  for (let i = 0; i <= 4; i++) {
    const y = padding.top + (chartHeight / 4) * i;
    const value = maxValue - (maxValue / 4) * i;
    ctx.beginPath();
    ctx.moveTo(padding.left, y);
    ctx.lineTo(padding.left + chartWidth, y);
    ctx.stroke();
    ctx.fillText(Math.round(value), padding.left - 8, y + 4);
  }
  for (let i = 0; i < values.length; i++) {
    const barHeight = (values[i] / maxValue) * chartHeight;
    const x = padding.left + i * (barWidth + barSpacing);
    const y = padding.top + chartHeight - barHeight;
    ctx.fillStyle = color;
    ctx.fillRect(x, y, barWidth, barHeight);
    ctx.fillStyle = '#1a4731';
    ctx.font = 'bold 11px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(values[i], x + barWidth / 2, y - 5);
    ctx.fillStyle = '#6b7e72';
    ctx.font = '10px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(labels[i], x + barWidth / 2, padding.top + chartHeight + 18);
  }
}

function drawLineChart(ctx, labels, values, color) {
  const canvas = ctx.canvas;
  const container = canvas.parentElement;
  const width = container ? container.clientWidth - 32 : 400;
  const height = 250;
  canvas.width = width;
  canvas.height = height;
  ctx.clearRect(0, 0, width, height);
  if (!values.length) return;
  const padding = { top: 40, right: 20, bottom: 50, left: 50 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;
  const maxValue = Math.max(...values) * 1.1;
  const stepX = chartWidth / (values.length - 1);
  ctx.strokeStyle = '#e0e8e2';
  ctx.lineWidth = 1;
  ctx.fillStyle = '#6b7e72';
  ctx.font = '11px "Plus Jakarta Sans", sans-serif';
  ctx.textAlign = 'right';
  for (let i = 0; i <= 4; i++) {
    const y = padding.top + (chartHeight / 4) * i;
    const value = maxValue - (maxValue / 4) * i;
    ctx.beginPath();
    ctx.moveTo(padding.left, y);
    ctx.lineTo(padding.left + chartWidth, y);
    ctx.stroke();
    ctx.fillText(value.toFixed(1), padding.left - 8, y + 4);
  }
  ctx.beginPath();
  for (let i = 0; i < values.length; i++) {
    const x = padding.left + i * stepX;
    const y = padding.top + chartHeight - (values[i] / maxValue) * chartHeight;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.lineTo(padding.left + (values.length - 1) * stepX, padding.top + chartHeight);
  ctx.lineTo(padding.left, padding.top + chartHeight);
  ctx.closePath();
  ctx.fillStyle = color + '20';
  ctx.fill();
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = 2.5;
  for (let i = 0; i < values.length; i++) {
    const x = padding.left + i * stepX;
    const y = padding.top + chartHeight - (values[i] / maxValue) * chartHeight;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();
  for (let i = 0; i < values.length; i++) {
    const x = padding.left + i * stepX;
    const y = padding.top + chartHeight - (values[i] / maxValue) * chartHeight;
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.fillStyle = '#1a4731';
    ctx.font = 'bold 11px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(values[i], x, y - 8);
    ctx.fillStyle = '#6b7e72';
    ctx.font = '10px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(labels[i], x, padding.top + chartHeight + 18);
  }
}

function renderAllCharts() {
  const ctx1 = document.getElementById('grafikPendapatan')?.getContext('2d');
  const ctx2 = document.getElementById('grafikLaba')?.getContext('2d');
  const ctx3 = document.getElementById('grafikKas')?.getContext('2d');
  const ctx4 = document.getElementById('grafikProfit')?.getContext('2d');
  if (ctx1) drawBarChart(ctx1, dataTren.tahun, dataTren.pendapatan, '#40916c');
  if (ctx2) drawBarChart(ctx2, dataTren.tahun, dataTren.laba, '#2d6a4f');
  if (ctx3) drawLineChart(ctx3, dataTren.tahun, dataTren.kas, '#74c69d');
  if (ctx4) drawLineChart(ctx4, dataTren.tahun, dataTren.profit, '#f4a261');
}

/* ================================================
   ADMIN PANEL FUNCTIONS
   ================================================ */

/* deklarasi global fungsi admin agar bisa dipanggil dari HTML */
window.attemptLogin = attemptLogin;
window.hideAdminPanel = hideAdminPanel;
window.logoutAdmin = logoutAdmin;
window.switchAdminTab = switchAdminTab;
window.openAdminUsahaForm = openAdminUsahaForm;
window.closeAdminUsahaForm = closeAdminUsahaForm;
window.saveAdminUsaha = saveAdminUsaha;
window.editAdminUsaha = editAdminUsaha;
window.deleteAdminUsaha = deleteAdminUsaha;
window.openAdminInvestorForm = openAdminInvestorForm;
window.closeAdminInvestorForm = closeAdminInvestorForm;
window.saveAdminInvestor = saveAdminInvestor;
window.editAdminInvestor = editAdminInvestor;
window.deleteAdminInvestor = deleteAdminInvestor;
window.openAdminBeritaForm = openAdminBeritaForm;
window.closeAdminBeritaForm = closeAdminBeritaForm;
window.saveAdminBerita = saveAdminBerita;
window.editAdminBerita = editAdminBerita;
window.deleteAdminBerita = deleteAdminBerita;
window.deleteAdminSaran = deleteAdminSaran;
window.openAdminOrganisasiForm = openAdminOrganisasiForm;
window.closeAdminOrganisasiForm = closeAdminOrganisasiForm;
window.saveAdminOrganisasi = saveAdminOrganisasi;
window.editAdminOrganisasi = editAdminOrganisasi;
window.deleteAdminOrganisasi = deleteAdminOrganisasi;

// NOTE: We will define/render these functions below, but to keep window.* references valid,
// we will reassign at the end of file as needed (some are already declared earlier).

function checkAdminLogin() {
  return localStorage.getItem('adminLoggedIn') === 'true';
}

function showAdminLogin() {
  const overlay = document.getElementById('adminLoginOverlay');
  if (overlay) overlay.classList.add('active');
}

function hideAdminLogin() {
  const overlay = document.getElementById('adminLoginOverlay');
  if (overlay) overlay.classList.remove('active');
}

function attemptLogin() {
  const username = document.getElementById('adminUsername')?.value;
  const password = document.getElementById('adminPassword')?.value;
  const errorEl = document.getElementById('adminLoginError');

  // NOTE: masih ada cek client-side untuk kemudahan testing.
  // Untuk produksi, pindahkan autentikasi ke server.
  if (username === 'admin' && password === 'unesajelek') {
    localStorage.setItem('adminLoggedIn', 'true');
    hideAdminLogin();
    showAdminPanel();
    showToast('✅ Login berhasil! Selamat datang Admin.');
  } else {
    if (errorEl) errorEl.style.display = 'block';
    setTimeout(() => {
      if (errorEl) errorEl.style.display = 'none';
    }, 3000);
  }
}

function logoutAdmin() {
  localStorage.removeItem('adminLoggedIn');
  hideAdminPanel();
  showToast('✅ Anda telah logout dari panel admin.');
}

function showAdminPanel() {
  if (!checkAdminLogin()) {
    showAdminLogin();
    return;
  }
  const panel = document.getElementById('adminPanelContainer');
  if (panel) {
    panel.classList.add('open');
    refreshAdminTables();
  }
}

function hideAdminPanel() {
  const panel = document.getElementById('adminPanelContainer');
  if (panel) panel.classList.remove('open');
}

function switchAdminTab(tabName) {
  document.querySelectorAll('.admin-tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.admin-tab-content').forEach(content => content.classList.remove('active'));
  const activeBtn = document.querySelector(`.admin-tab-btn[data-tab="${tabName}"]`);
  if (activeBtn) activeBtn.classList.add('active');
  const activeContent = document.getElementById(`admin-tab-${tabName}`);
  if (activeContent) activeContent.classList.add('active');
}

function refreshAdminTables() {
  renderAdminUsahaTable();
  renderAdminInvestorTable();
  renderAdminBeritaTable();
  renderAdminSaranTable();
  renderAdminOrganisasiTable();
  // render reservasi table if exists
  if (typeof renderAdminReservasiTable === 'function') renderAdminReservasiTable();
}

/* ========== ADMIN UNIT USAHA ========== */
function renderAdminUsahaTable() {
  const tbody = document.getElementById('adminUsahaTableBody');
  if (!tbody) return;
  const data = JSON.parse(localStorage.getItem('adminUsaha') || '[]');
  tbody.innerHTML = data.map(u => `
    <tr>
      <td>${u.id}</td>
      <td>${escapeHTML(u.icon || '')} ${escapeHTML(u.nama || '')}</td>
      <td>${escapeHTML(u.kategori || '')}</td>
      <td>${escapeHTML(u.harga || '')}</td>
      <td>
        <button class="admin-btn-edit" onclick="editAdminUsaha(${u.id})">Edit</button>
        <button class="admin-btn-delete" onclick="deleteAdminUsaha(${u.id})">Hapus</button>
      </td>
    </tr>
  `).join('');
}

function openAdminUsahaForm() {
  const form = document.getElementById('adminUsahaForm');
  if (form) {
    form.classList.remove('hidden');
    document.getElementById('adminEditUsahaId').value = '';
    document.getElementById('adminNamaUsaha').value = '';
    document.getElementById('adminKategoriUsaha').value = 'wisata';
    document.getElementById('adminHargaUsaha').value = '';
    document.getElementById('adminJadwalUsaha').value = '';
    document.getElementById('adminDeskripsiUsaha').value = '';
    document.getElementById('adminIconUsaha').value = '🏢';
    const imgInput = document.getElementById('adminImageUsaha');
    if (imgInput) imgInput.value = '';
    const preview = document.getElementById('adminImageUsahaPreview');
    if (preview) preview.innerHTML = '';
  }
}

function closeAdminUsahaForm() {
  const form = document.getElementById('adminUsahaForm');
  if (form) form.classList.add('hidden');
}

function editAdminUsaha(id) {
  const data = JSON.parse(localStorage.getItem('adminUsaha') || '[]');
  const usaha = data.find(u => u.id === id);
  if (usaha) {
    document.getElementById('adminEditUsahaId').value = usaha.id;
    document.getElementById('adminNamaUsaha').value = usaha.nama;
    document.getElementById('adminKategoriUsaha').value = usaha.kategori;
    document.getElementById('adminHargaUsaha').value = usaha.harga;
    document.getElementById('adminJadwalUsaha').value = usaha.jadwal;
    document.getElementById('adminDeskripsiUsaha').value = usaha.deskripsi;
    document.getElementById('adminIconUsaha').value = usaha.icon;
    const imgInput = document.getElementById('adminImageUsaha');
    if (imgInput) imgInput.value = usaha.image || '';
    
    // Preview gambar
    const preview = document.getElementById('adminImageUsahaPreview');
    if (preview && usaha.image) {
      preview.innerHTML = `<img src="${usaha.image}" alt="preview" style="max-width:200px;border-radius:8px;">`;
    }
    openAdminUsahaForm();
  }
}

function saveAdminUsaha() {
  const id = document.getElementById('adminEditUsahaId').value;
  let data = JSON.parse(localStorage.getItem('adminUsaha') || '[]');

  const usahaData = {
    id: id ? parseInt(id) : Date.now(),
    nama: document.getElementById('adminNamaUsaha').value,
    kategori: document.getElementById('adminKategoriUsaha').value,
    harga: document.getElementById('adminHargaUsaha').value,
    jadwal: document.getElementById('adminJadwalUsaha').value,
    deskripsi: document.getElementById('adminDeskripsiUsaha').value,
    icon: document.getElementById('adminIconUsaha').value || '🏢',
    status: 'Aktif',
    image: document.getElementById('adminImageUsaha')?.value || 'https://picsum.photos/seed/noimage/700/400',
    galeri: []
  };

  if (id) {
    const index = data.findIndex(u => u.id === parseInt(id));
    data[index] = usahaData;
    showToast('✅ Unit usaha berhasil diupdate');
  } else {
    data.push(usahaData);
    showToast('✅ Unit usaha berhasil ditambahkan');
  }

  // simpan ke kedua key agar kompatibel dengan halaman detail
  localStorage.setItem('adminUsaha', JSON.stringify(data));
  localStorage.setItem('dataUsaha', JSON.stringify(data));
  dataUsaha = data;
  window.dataUsaha = dataUsaha;
  renderAdminUsahaTable();
  renderUsaha();
  closeAdminUsahaForm();
}

function deleteAdminUsaha(id) {
  if (confirm('Yakin ingin menghapus unit usaha ini?')) {
    let data = JSON.parse(localStorage.getItem('adminUsaha') || '[]');
    data = data.filter(u => u.id !== id);
    localStorage.setItem('adminUsaha', JSON.stringify(data));
    localStorage.setItem('dataUsaha', JSON.stringify(data));
    dataUsaha = data;
    window.dataUsaha = dataUsaha;
    renderAdminUsahaTable();
    renderUsaha();
    showToast('✅ Unit usaha berhasil dihapus');
  }
}

/* ========== ADMIN INVESTOR ========== */
function renderAdminInvestorTable() {
  const tbody = document.getElementById('adminInvestorTableBody');
  if (!tbody) return;
  const data = JSON.parse(localStorage.getItem('adminInvestor') || '[]');
  tbody.innerHTML = data.map(i => `
    <tr>
      <td>${i.id}</td>
      <td>${escapeHTML(i.nama || '')}</td>
      <td>${escapeHTML(i.alamat || '')}</td>
      <td>${formatRupiah(i.nominal)}</td>
      <td>
        <button class="admin-btn-edit" onclick="editAdminInvestor(${i.id})">Edit</button>
        <button class="admin-btn-delete" onclick="deleteAdminInvestor(${i.id})">Hapus</button>
      </td>
    </tr>
  `).join('');
}

function openAdminInvestorForm() {
  const form = document.getElementById('adminInvestorForm');
  if (form) {
    form.classList.remove('hidden');
    document.getElementById('adminEditInvestorId').value = '';
    document.getElementById('adminNamaInvestor').value = '';
    document.getElementById('adminAlamatInvestor').value = '';
    document.getElementById('adminNominalInvestor').value = '';
    document.getElementById('adminTanggalInvestor').value = '';
  }
}

function closeAdminInvestorForm() {
  const form = document.getElementById('adminInvestorForm');
  if (form) form.classList.add('hidden');
}

function editAdminInvestor(id) {
  const data = JSON.parse(localStorage.getItem('adminInvestor') || '[]');
  const investor = data.find(i => i.id === id);
  if (investor) {
    document.getElementById('adminEditInvestorId').value = investor.id;
    document.getElementById('adminNamaInvestor').value = investor.nama;
    document.getElementById('adminAlamatInvestor').value = investor.alamat;
    document.getElementById('adminNominalInvestor').value = investor.nominal;
    document.getElementById('adminTanggalInvestor').value = investor.tanggal;
    openAdminInvestorForm();
  }
}

function saveAdminInvestor() {
  const id = document.getElementById('adminEditInvestorId').value;
  let data = JSON.parse(localStorage.getItem('adminInvestor') || '[]');

  const investorData = {
    id: id ? parseInt(id) : Date.now(),
    nama: document.getElementById('adminNamaInvestor').value,
    alamat: document.getElementById('adminAlamatInvestor').value,
    nominal: parseInt(document.getElementById('adminNominalInvestor').value) || 0,
    tanggal: document.getElementById('adminTanggalInvestor').value || new Date().toISOString().split('T')[0]
  };

  if (id) {
    const index = data.findIndex(i => i.id === parseInt(id));
    data[index] = investorData;
    showToast('✅ Investor berhasil diupdate');
  } else {
    data.push(investorData);
    showToast('✅ Investor berhasil ditambahkan');
  }

  localStorage.setItem('adminInvestor', JSON.stringify(data));
  dataInvestor = data;
  renderAdminInvestorTable();
  renderInvestorFrontend();
  closeAdminInvestorForm();
}

function deleteAdminInvestor(id) {
  if (confirm('Yakin ingin menghapus data investor ini?')) {
    let data = JSON.parse(localStorage.getItem('adminInvestor') || '[]');
    data = data.filter(i => i.id !== id);
    localStorage.setItem('adminInvestor', JSON.stringify(data));
    dataInvestor = data;
    renderAdminInvestorTable();
    renderInvestorFrontend();
    showToast('✅ Investor berhasil dihapus');
  }
}

/* ========== ADMIN BERITA ========== */
function renderAdminBeritaTable() {
  const tbody = document.getElementById('adminBeritaTableBody');
  if (!tbody) return;
  const data = JSON.parse(localStorage.getItem('adminBerita') || '[]');
  tbody.innerHTML = data.map(b => `
    <tr>
      <td>${b.id}</td>
      <td>${escapeHTML(b.icon || '')} ${escapeHTML(b.judul || '')}</td>
      <td>${escapeHTML(b.kategori || '')}</td>
      <td>${escapeHTML(b.tanggal || '')}</td>
      <td>
        <button class="admin-btn-edit" onclick="editAdminBerita(${b.id})">Edit</button>
        <button class="admin-btn-delete" onclick="deleteAdminBerita(${b.id})">Hapus</button>
      </td>
    </tr>
  `).join('');
}

function openAdminBeritaForm() {
  const form = document.getElementById('adminBeritaForm');
  if (form) {
    form.classList.remove('hidden');
    document.getElementById('adminEditBeritaId').value = '';
    document.getElementById('adminJudulBerita').value = '';
    document.getElementById('adminKategoriBerita').value = 'wisata';
    document.getElementById('adminTanggalBerita').value = '';
    document.getElementById('adminDeskripsiBerita').value = '';
    document.getElementById('adminIconBerita').value = '📰';
  }
}

function closeAdminBeritaForm() {
  const form = document.getElementById('adminBeritaForm');
  if (form) form.classList.add('hidden');
}

function editAdminBerita(id) {
  const data = JSON.parse(localStorage.getItem('adminBerita') || '[]');
  const berita = data.find(b => b.id === id);
  if (berita) {
    document.getElementById('adminEditBeritaId').value = berita.id;
    document.getElementById('adminJudulBerita').value = berita.judul;
    document.getElementById('adminKategoriBerita').value = berita.kategori;
    document.getElementById('adminTanggalBerita').value = berita.tanggal;
    document.getElementById('adminDeskripsiBerita').value = berita.deskripsi;
    document.getElementById('adminIconBerita').value = berita.icon;
    openAdminBeritaForm();
  }
}

function saveAdminBerita() {
  const id = document.getElementById('adminEditBeritaId').value;
  let data = JSON.parse(localStorage.getItem('adminBerita') || '[]');

  const beritaData = {
    id: id ? parseInt(id) : Date.now(),
    judul: document.getElementById('adminJudulBerita').value,
    kategori: document.getElementById('adminKategoriBerita').value,
    tanggal: document.getElementById('adminTanggalBerita').value,
    deskripsi: document.getElementById('adminDeskripsiBerita').value,
    icon: document.getElementById('adminIconBerita').value || '📰'
  };

  if (id) {
    const index = data.findIndex(b => b.id === parseInt(id));
    data[index] = beritaData;
    showToast('✅ Berita berhasil diupdate');
  } else {
    data.push(beritaData);
    showToast('✅ Berita berhasil ditambahkan');
  }

  localStorage.setItem('adminBerita', JSON.stringify(data));
  dataBerita = data;
  renderAdminBeritaTable();
  closeAdminBeritaForm();
}

function deleteAdminBerita(id) {
  if (confirm('Yakin ingin menghapus berita ini?')) {
    let data = JSON.parse(localStorage.getItem('adminBerita') || '[]');
    data = data.filter(b => b.id !== id);
    localStorage.setItem('adminBerita', JSON.stringify(data));
    dataBerita = data;
    renderAdminBeritaTable();
    showToast('✅ Berita berhasil dihapus');
  }
}

/* ========== ADMIN SARAN ========== */
function renderAdminSaranTable() {
  const tbody = document.getElementById('adminSaranTableBody');
  if (!tbody) return;
  const data = JSON.parse(localStorage.getItem('adminSaran') || '[]');
  tbody.innerHTML = data.map(s => `
    <tr>
      <td>${s.id}</td>
      <td>${escapeHTML(s.nama || '')}</td>
      <td>${escapeHTML((s.pesan || '').substring(0, 50))}...</td>
      <td>${'★'.repeat(s.rating)}${'☆'.repeat(5 - s.rating)}</td>
      <td>
        <button class="admin-btn-delete" onclick="deleteAdminSaran(${s.id})">Hapus</button>
      </td>
    </tr>
  `).join('');
}

function deleteAdminSaran(id) {
  if (confirm('Yakin ingin menghapus saran ini?')) {
    let data = JSON.parse(localStorage.getItem('adminSaran') || '[]');
    data = data.filter(s => s.id !== id);
    localStorage.setItem('adminSaran', JSON.stringify(data));
    dataSaran = data;
    renderAdminSaranTable();
    renderSaranList();
    showToast('✅ Saran berhasil dihapus');
  }
}

/* ========== ADMIN ORGANISASI ========== */
function renderAdminOrganisasiTable() {
  const tbody = document.getElementById('adminOrganisasiTableBody');
  if (!tbody) return;
  const data = JSON.parse(localStorage.getItem('adminOrganisasi') || '[]');
  tbody.innerHTML = data.sort((a, b) => a.urutan - b.urutan).map(o => `
    <tr>
      <td>${o.urutan}</td>
      <td>${escapeHTML(o.icon || '')} ${escapeHTML(o.nama || '')}</td>
      <td>${escapeHTML(o.jabatan || '')}</td>
      <td>
        <button class="admin-btn-edit" onclick="editAdminOrganisasi(${o.id})">Edit</button>
        <button class="admin-btn-delete" onclick="deleteAdminOrganisasi(${o.id})">Hapus</button>
      </td>
    </tr>
  `).join('');
}

function openAdminOrganisasiForm() {
  const form = document.getElementById('adminOrganisasiForm');
  if (form) {
    form.classList.remove('hidden');
    document.getElementById('adminEditOrganisasiId').value = '';
    document.getElementById('adminNamaOrganisasi').value = '';
    document.getElementById('adminJabatanOrganisasi').value = '';
    document.getElementById('adminIconOrganisasi').value = '👤';
    document.getElementById('adminUrutanOrganisasi').value = '';
    document.getElementById('adminFotoOrganisasi').value = '';
    const preview = document.getElementById('adminFotoOrganisasiPreview');
    if (preview) preview.innerHTML = '';
  }
}

function closeAdminOrganisasiForm() {
  const form = document.getElementById('adminOrganisasiForm');
  if (form) form.classList.add('hidden');
}

function editAdminOrganisasi(id) {
  const data = JSON.parse(localStorage.getItem('adminOrganisasi') || '[]');
  const org = data.find(o => o.id === id);
  if (org) {
    document.getElementById('adminEditOrganisasiId').value = org.id;
    document.getElementById('adminNamaOrganisasi').value = org.nama;
    document.getElementById('adminJabatanOrganisasi').value = org.jabatan;
    document.getElementById('adminIconOrganisasi').value = org.icon;
    document.getElementById('adminUrutanOrganisasi').value = org.urutan;
    document.getElementById('adminFotoOrganisasi').value = org.foto || '';
    
    // Preview foto
    const preview = document.getElementById('adminFotoOrganisasiPreview');
    if (preview && org.foto) {
      preview.innerHTML = `<img src="${org.foto}" alt="preview" style="max-width:150px;border-radius:8px;">`;
    }
    openAdminOrganisasiForm();
  }
}

function saveAdminOrganisasi() {
  const id = document.getElementById('adminEditOrganisasiId').value;
  let data = JSON.parse(localStorage.getItem('adminOrganisasi') || '[]');

  const orgData = {
    id: id ? parseInt(id) : Date.now(),
    nama: document.getElementById('adminNamaOrganisasi').value,
    jabatan: document.getElementById('adminJabatanOrganisasi').value,
    icon: document.getElementById('adminIconOrganisasi').value || '👤',
    urutan: parseInt(document.getElementById('adminUrutanOrganisasi').value) || 999,
    foto: document.getElementById('adminFotoOrganisasi')?.value || ''
  };

  if (id) {
    const index = data.findIndex(o => o.id === parseInt(id));
    data[index] = orgData;
    showToast('✅ Data organisasi berhasil diupdate');
  } else {
    data.push(orgData);
    showToast('✅ Data organisasi berhasil ditambahkan');
  }

  localStorage.setItem('adminOrganisasi', JSON.stringify(data.sort((a, b) => a.urutan - b.urutan)));
  dataOrg = data;
  renderAdminOrganisasiTable();
  renderOrg();
  closeAdminOrganisasiForm();
}

function deleteAdminOrganisasi(id) {
  if (confirm('Yakin ingin menghapus data ini?')) {
    let data = JSON.parse(localStorage.getItem('adminOrganisasi') || '[]');
    data = data.filter(o => o.id !== id);
    localStorage.setItem('adminOrganisasi', JSON.stringify(data));
    dataOrg = data;
    renderAdminOrganisasiTable();
    renderOrg();
    showToast('✅ Data organisasi berhasil dihapus');
  }
}

/* ================================================
   NAVBAR & UI FUNCTIONS
   ================================================ */

function initNavbar() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      if (navLinks) navLinks.classList.toggle('open');
    });
  }

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });
}

function initBackToTop() {
  const backBtn = document.getElementById('backToTop');
  if (!backBtn) return;
  window.addEventListener('scroll', () => {
    backBtn.classList.toggle('show', window.scrollY > 300);
  });
  backBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function initFadeUp() {
  const fadeEls = document.querySelectorAll('.fade-up');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.1 });
  fadeEls.forEach(el => observer.observe(el));
}

function initStarRating(containerId, key) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const stars = container.querySelectorAll('span');
  stars.forEach(star => {
    star.addEventListener('click', () => {
      const val = parseInt(star.dataset.v);
      if (key === 'wisata') ratingWisata = val;
      else ratingPrasarana = val;
      stars.forEach(s => s.classList.toggle('active', parseInt(s.dataset.v) <= val));
    });
  });
}

function animateCounter(el, target) {
  let current = 0;
  const timer = setInterval(() => {
    current += Math.ceil(target / 30);
    if (current >= target) {
      el.textContent = target;
      clearInterval(timer);
    } else {
      el.textContent = current;
    }
  }, 30);
}

/* Secret Trigger: Klik 5x pada logo untuk membuka admin login */
let clickCount = 0;
let clickTimer;

function initSecretTrigger() {
  const logo = document.querySelector('.nav-brand');
  if (logo) {
    logo.addEventListener('click', (e) => {
      e.preventDefault();
      clickCount++;
      clearTimeout(clickTimer);
      clickTimer = setTimeout(() => {
        clickCount = 0;
      }, 1000);
      if (clickCount >= 5) {
        clickCount = 0;
        showAdminLogin();
        showToast('🔐 Admin Login', false);
      }
    });
  }
}

/* ================================================
   IMAGE UPLOAD HANDLERS (BARU)
   ================================================ */

function handleImageUpload(inputId, previewId) {
  const input = document.getElementById(inputId);
  if (!input) return;
  
  input.addEventListener('change', async function() {
    const file = this.files?.[0];
    if (!file) return;
    
    if (!file.type.startsWith('image/')) {
      showToast('File harus berupa gambar (jpg/png/gif).', true);
      this.value = '';
      return;
    }
    
    if (file.size > 5000000) { // 5MB
      showToast('Ukuran file maksimal 5MB.', true);
      this.value = '';
      return;
    }
    
    try {
      const base64 = await fileToBase64(file);
      document.getElementById(inputId).value = base64;
      
      // Tampilkan preview
      const previewEl = document.getElementById(previewId);
      if (previewEl) {
        previewEl.innerHTML = `<img src="${base64}" alt="preview" style="max-width:200px;border-radius:8px;margin-top:1rem;">`;
      }
      showToast('✅ Gambar berhasil diupload');
    } catch (err) {
      showToast('Gagal mengupload gambar', true);
      console.error(err);
    }
  });
}

/* ================================================
   RESERVASI HELPERS (populate + parse price)
   ================================================ */

function parsePriceFromString(harga) {
  if (!harga) return 0;
  // ambil angka dari string
  const cleaned = String(harga).replace(/[^0-9]/g, '');
  return cleaned ? parseInt(cleaned, 10) : 0;
}

function populateReservasiOptions() {
  const resSelect = document.getElementById('res-wisata');
  if (!resSelect) return;
  // kosongkan options kemudian tambahkan default
  resSelect.innerHTML = '<option value="">-- Pilih Unit Wisata --</option>';

  // hanya tampilkan kategori 'wisata'
  const wisataList = (window.dataUsaha || []).filter(u => u.kategori === 'wisata');
  wisataList.forEach(u => {
    const price = parsePriceFromString(u.harga);
    const opt = document.createElement('option');
    opt.value = String(u.id);
    opt.setAttribute('data-price', String(price || 0));
    opt.textContent = `${u.nama} — ${u.harga || '-'}`;
    resSelect.appendChild(opt);
  });

  // jika ada reserveId di URL -> set selection dan scroll ke form
  const params = new URLSearchParams(window.location.search);
  const reserveId = params.get('reserveId');
  if (reserveId) {
    const opt = Array.from(resSelect.options).find(o => o.value === String(reserveId));
    if (opt) {
      resSelect.value = opt.value;
      resSelect.dispatchEvent(new Event('change'));
      const form = document.getElementById('formReservasi');
      if (form) form.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    // hapus param reserveId dari URL agar tidak mengulang prefilling saat reload
    try {
      const cleanUrl = window.location.pathname + window.location.hash;
      history.replaceState({}, '', cleanUrl);
    } catch (e) { /* ignore */ }
  }
}

/* ================================================
   INITIALIZATION (DOMContentLoaded)
   ================================================ */

document.addEventListener('DOMContentLoaded', () => {
  console.log('Website BUMDes Suwaluh siap!');
  initData();
  initNavbar();
  initBackToTop();
  initFadeUp();
  initSecretTrigger();

  // Initialize image upload handlers
  handleImageUpload('adminFotoOrganisasi', 'adminFotoOrganisasiPreview');
  handleImageUpload('adminImageUsaha', 'adminImageUsahaPreview');

  if (document.getElementById('orgGrid')) renderOrg();
  if (document.getElementById('usahaGrid')) renderUsaha();

  // Populate reservasi options if form present (and handle reserveId)
  if (document.getElementById('res-wisata')) {
    populateReservasiOptions();
  }

  if (document.getElementById('laporanList')) renderLaporan();
  if (document.getElementById('analisisGrid')) renderAnalisis();
  if (document.getElementById('investorBody')) renderInvestorFrontend();
  if (document.getElementById('testimoniList')) renderTestimoni();
  if (document.getElementById('saranList')) renderSaranList();

  if (document.querySelectorAll('#usahaFilter .filter-btn').length) {
    document.querySelectorAll('#usahaFilter .filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#usahaFilter .filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderUsaha(btn.dataset.cat);
      });
    });
  }

  const filterTahun = document.getElementById('filterTahun');
  if (filterTahun) filterTahun.addEventListener('change', renderLaporan);

  const searchInvestor = document.getElementById('searchInvestor');
  if (searchInvestor) {
    searchInvestor.addEventListener('input', e => renderInvestorFrontend(e.target.value));
  }

  if (document.querySelectorAll('#tabsTransparansi .tab-btn').length) {
    document.querySelectorAll('#tabsTransparansi .tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#tabsTransparansi .tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        const tabId = document.getElementById(`tab-${btn.dataset.tab}`);
        if (tabId) tabId.classList.add('active');
        if (btn.dataset.tab === 'tren') {
          setTimeout(renderAllCharts, 100);
        }
      });
    });
    const activeTab = document.querySelector('#tabsTransparansi .tab-btn.active');
    if (activeTab && activeTab.dataset.tab === 'tren') {
      setTimeout(renderAllCharts, 200);
    }
  }

  /* ========== FORM RESERVASI ========== */
  const formReservasi = document.getElementById('formReservasi');
  if (formReservasi) {
    const resWisata = document.getElementById('res-wisata');
    const resJumlah = document.getElementById('res-jumlah');
    const resTotalEl = document.getElementById('res-total');
    const resBuktiInput = document.getElementById('res-bukti');
    const resBuktiPreview = document.getElementById('res-bukti-preview');
    const resTanggal = document.getElementById('res-tanggal');

    // batasi tanggal minimal hari ini
    const today = new Date().toISOString().split('T')[0];
    if (resTanggal) resTanggal.min = today;

    function getSelectedPrice() {
      if (!resWisata) return 0;
      const opt = resWisata.selectedOptions && resWisata.selectedOptions[0];
      if (!opt) return 0;
      const p = opt.getAttribute('data-price');
      return p ? parseInt(p, 10) : 0;
    }

    function updateTotalReservation() {
      const price = getSelectedPrice();
      const qty = resJumlah ? parseInt(resJumlah.value || '0', 10) : 0;
      const total = (Number.isFinite(price) ? price : 0) * (Number.isFinite(qty) ? qty : 0);
      if (resTotalEl) {
        resTotalEl.textContent = formatRupiah(total);
        resTotalEl.dataset.amount = total;
      }
    }

    if (resWisata) resWisata.addEventListener('change', updateTotalReservation);
    if (resJumlah) resJumlah.addEventListener('input', updateTotalReservation);

    if (resBuktiInput) {
      resBuktiInput.addEventListener('change', function () {
        if (!resBuktiPreview) return;
        resBuktiPreview.innerHTML = '';
        const file = this.files && this.files[0];
        if (!file) return;
        if (!file.type.startsWith('image/')) {
          showToast('File harus berupa gambar (jpg/png).', true);
          this.value = '';
          return;
        }
        const img = document.createElement('img');
        img.alt = 'Preview bukti';
        img.style.maxWidth = '220px';
        img.style.borderRadius = '8px';
        img.src = URL.createObjectURL(file);
        resBuktiPreview.appendChild(img);
      });
    }

    // inisialisasi total
    updateTotalReservation();

    formReservasi.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!validateForm(this)) return;

      const nama = document.getElementById('res-nama')?.value || '';
      const tel = document.getElementById('res-telp')?.value || '';
      const wisataText = resWisata ? (resWisata.selectedOptions[0]?.textContent || '') : '';
      const wisataValue = resWisata ? (resWisata.value || '') : '';
      const tanggal = resTanggal?.value || '';
      const jumlah = resJumlah ? parseInt(resJumlah.value || '0', 10) : 0;
      const catatan = document.getElementById('res-catatan')?.value || '';
      const total = parseInt(resTotalEl?.dataset?.amount || '0', 10);

      const reservation = {
        id: Date.now(),
        nama, tel,
        wisataText, wisataValue,
        tanggal, jumlah, total,
        catatan,
        buktiName: '',
        buktiDataURL: '',
        status: 'Menunggu'
      };

      const file = resBuktiInput?.files?.[0];
      function saveAndFinish() {
        const existing = localStorage.getItem('reservasiBumdes');
        let arr = existing ? JSON.parse(existing) : [];
        arr.unshift(reservation);
        localStorage.setItem('reservasiBumdes', JSON.stringify(arr));
        showToast(`✅ Reservasi berhasil! Total: ${formatRupiah(total)}. Konfirmasi via WA.`);
        formReservasi.reset();
        if (resBuktiPreview) resBuktiPreview.innerHTML = '';
        updateTotalReservation();
      }

      if (file) {
        const reader = new FileReader();
        reader.onload = function (ev) {
          reservation.buktiName = file.name;
          reservation.buktiDataURL = ev.target.result; // base64
          saveAndFinish();
        };
        reader.onerror = function () {
          showToast('Gagal membaca file bukti pembayaran.', true);
        };
        reader.readAsDataURL(file);
      } else {
        saveAndFinish();
      }
    });
  }
  
  /* ========== FORM SAHAM ========== */
  const formSaham = document.getElementById('formSaham');
  if (formSaham) {
    const lembarInput = document.getElementById('s-lembar');
    if (lembarInput) {
      lembarInput.addEventListener('input', function() {
        const total = parseInt(this.value || 0) * 100000;
        const totalEl = document.getElementById('totalSaham');
        if (totalEl) totalEl.textContent = formatRupiah(total);
      });
    }

    formSaham.addEventListener('submit', function(e) {
      e.preventDefault();
      if (!validateForm(this)) return;
      showToast('✅ Pembelian saham berhasil! Sertifikat akan dikirim.');
      this.reset();
      const totalEl = document.getElementById('totalSaham');
      if (totalEl) totalEl.textContent = 'Rp 0';
    });
  }

  /* ========== FORM SARAN ========== */
  const formSaran = document.getElementById('formSaran');
  if (formSaran) {
    formSaran.addEventListener('submit', function(e) {
      e.preventDefault();
      if (!validateForm(this)) return;

      const newSaran = {
        id: Date.now(),
        nama: document.getElementById('sr-nama').value,
        pesan: document.getElementById('sr-pesan').value,
        rating: Math.max(ratingWisata, ratingPrasarana),
        tanggal: new Date().toLocaleDateString('id-ID')
      };

      dataSaran.unshift(newSaran);
      localStorage.setItem('adminSaran', JSON.stringify(dataSaran));

      const existingUserSaran = localStorage.getItem('saranBumdes');
      let userSaran = existingUserSaran ? JSON.parse(existingUserSaran) : [];
      userSaran.unshift(newSaran);
      localStorage.setItem('saranBumdes', JSON.stringify(userSaran));

      renderSaranList();
      if (document.getElementById('adminSaranTableBody')) renderAdminSaranTable();

      this.reset();
      ratingWisata = 0;
      ratingPrasarana = 0;
      document.querySelectorAll('.star-rating span').forEach(s => s.classList.remove('active'));
      showToast('✅ Terima kasih atas masukannya!');
    });
  }

  initStarRating('ratingWisata', 'wisata');
  initStarRating('ratingPrasarana', 'prasarana');

  if (document.querySelectorAll('.stat-number[data-target]').length) {
    setTimeout(() => {
      document.querySelectorAll('.stat-number[data-target]').forEach(el => {
        animateCounter(el, parseInt(el.dataset.target));
      });
    }, 500);
  }

  let resizeTimeout;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
      const activeTab = document.querySelector('#tabsTransparansi .tab-btn.active');
      if (activeTab && activeTab.dataset.tab === 'tren') {
        renderAllCharts();
      }
    }, 250);
  });

  // Inject admin reservasi tab if admin panel exists
  ensureAdminReservasiTab();

  // If admin panel open, render its tables (including reservasi)
  if (document.getElementById('adminPanelContainer')?.classList.contains('open')) {
    refreshAdminTables();
  }
});

/* ================================================
   ADMIN RESERVASI: Inject Tab, Render, Verify, Upload
   ================================================ */

function ensureAdminReservasiTab() {
  const tabs = document.querySelector('.admin-tabs');
  const panelBody = document.querySelector('.admin-panel-body');
  if (!tabs || !panelBody) return;
  if (tabs.querySelector('[data-tab="reservasi"]')) return; // already injected

  // create tab button
  const btn = document.createElement('button');
  btn.className = 'admin-tab-btn';
  btn.dataset.tab = 'reservasi';
  btn.textContent = '🎫 Reservasi';
  btn.addEventListener('click', () => switchAdminTab('reservasi'));
  const logoutBtn = tabs.querySelector('[data-tab="logout"]');
  if (logoutBtn) tabs.insertBefore(btn, logoutBtn); else tabs.appendChild(btn);

  // create content panel
  const div = document.createElement('div');
  div.id = 'admin-tab-reservasi';
  div.className = 'admin-tab-content';
  div.innerHTML = `
    <button class="admin-btn-add" onclick="renderAdminReservasiTable()">🔄 Refresh Reservasi</button>
    <div style="overflow-x:auto;">
      <table class="admin-table">
        <thead><tr><th>ID</th><th>Nama</th><th>Tel</th><th>Unit</th><th>Tanggal</th><th>Jumlah</th><th>Total</th><th>Status</th><th>Aksi</th></tr></thead>
        <tbody id="adminReservasiTableBody"></tbody>
      </table>
    </div>
    <input type="file" id="adminUploadTicketInput" style="display:none" />
  `;
  panelBody.appendChild(div);

  // file input handler
  const uploadInput = document.getElementById('adminUploadTicketInput');
  if (uploadInput) {
    uploadInput.addEventListener('change', function () {
      const file = this.files && this.files[0];
      const pendingId = this.dataset.forId;
      if (!file || !pendingId) return;
      const reader = new FileReader();
      reader.onload = function (ev) {
        handleTicketFileInput(ev.target.result, pendingId, file.name);
      };
      reader.onerror = function () { showToast('Gagal membaca file tiket.', true); };
      reader.readAsDataURL(file);
      this.value = '';
      delete this.dataset.forId;
    });
  }
}

function renderAdminReservasiTable() {
  const tbody = document.getElementById('adminReservasiTableBody');
  if (!tbody) return;
  const data = JSON.parse(localStorage.getItem('reservasiBumdes') || '[]');
  if (!data || !data.length) {
    tbody.innerHTML = '<tr><td colspan="9" style="text-align:center;color:var(--gray-500)">Belum ada reservasi.</td></tr>';
    return;
  }
  tbody.innerHTML = data.map(r => {
    const status = r.status || (r.tiketDataURL ? 'Tiket Terupload' : 'Menunggu');
    const actions = [];
    actions.push(`<button class="admin-btn-edit" onclick="verifyReservation(${r.id})">Verifikasi</button>`);
    actions.push(`<button class="admin-btn-add" onclick="openUploadTicket(${r.id})">Unggah Tiket</button>`);
    if (r.tiketName && r.tiketDataURL) {
      actions.push(`<a class="admin-btn-edit" href="${r.tiketDataURL}" download="${r.tiketName}" style="margin-left:.3rem">Download Tiket</a>`);
    }
    return `<tr>
      <td>${r.id}</td>
      <td>${escapeHTML(r.nama || '')}</td>
      <td>${escapeHTML(r.tel || '')}</td>
      <td>${escapeHTML(r.wisataText || '')}</td>
      <td>${escapeHTML(r.tanggal || '')}</td>
      <td>${escapeHTML(String(r.jumlah || 0))}</td>
      <td>${formatRupiah(r.total || 0)}</td>
      <td>${escapeHTML(status)}</td>
      <td>${actions.join(' ')}</td>
    </tr>`;
  }).join('');
}

function verifyReservation(id) {
  if (!confirm('Verifikasi reservasi ini?')) return;
  let data = JSON.parse(localStorage.getItem('reservasiBumdes') || '[]');
  const idx = data.findIndex(r => r.id === id);
  if (idx === -1) return showToast('Reservasi tidak ditemukan', true);
  data[idx].status = 'Terverifikasi';
  data[idx].verifiedAt = new Date().toISOString();
  localStorage.setItem('reservasiBumdes', JSON.stringify(data));
  renderAdminReservasiTable();
  showToast('✅ Reservasi terverifikasi');
}

function openUploadTicket(id) {
  const uploadInput = document.getElementById('adminUploadTicketInput');
  if (!uploadInput) return showToast('Upload input tidak tersedia', true);
  uploadInput.dataset.forId = id;
  uploadInput.click();
}

function handleTicketFileInput(dataURL, id, filename = 'tiket.pdf') {
  let data = JSON.parse(localStorage.getItem('reservasiBumdes') || '[]');
  const idx = data.findIndex(r => r.id === parseInt(id, 10));
  if (idx === -1) return showToast('Reservasi tidak ditemukan', true);
  data[idx].tiketDataURL = dataURL; // base64 data URL
  data[idx].tiketName = filename;
  data[idx].status = 'Tiket Diupload';
  data[idx].ticketUploadedAt = new Date().toISOString();
  localStorage.setItem('reservasiBumdes', JSON.stringify(data));
  renderAdminReservasiTable();
  showToast('✅ Tiket berhasil di-upload dan tersedia untuk di-download.');
  // Simpan notifikasi agar pelanggan bisa diberi tahu
  const notifications = JSON.parse(localStorage.getItem('reservasiNotifications') || '[]');
  notifications.unshift({ reservationId: data[idx].id, nama: data[idx].nama, tel: data[idx].tel, message: 'Tiket Anda telah dikirim oleh admin', tiketName: data[idx].tiketName, tiketDataURL: data[idx].tiketDataURL, date: new Date().toISOString() });
  localStorage.setItem('reservasiNotifications', JSON.stringify(notifications));
}

// expose admin reservation functions to window
window.renderAdminReservasiTable = renderAdminReservasiTable;
window.verifyReservation = verifyReservation;
window.openUploadTicket = openUploadTicket;

/* ================================
   ADMIN LAPORAN KEUANGAN (Tambahan)
   Tambahkan / append ke akhir script.js
   ================================ */

function ensureAdminLaporanTab() {
  const tabs = document.querySelector('.admin-tabs');
  const panelBody = document.querySelector('.admin-panel-body');
  if (!tabs || !panelBody) return;
  if (tabs.querySelector('[data-tab="laporan"]')) return; // sudah ada

  // buat tab button
  const btn = document.createElement('button');
  btn.className = 'admin-tab-btn';
  btn.dataset.tab = 'laporan';
  btn.textContent = '📁 Laporan';
  btn.addEventListener('click', () => switchAdminTab('laporan'));
  // Sisipkan sebelum tombol logout bila ada
  const logoutBtn = tabs.querySelector('[data-tab="logout"]');
  if (logoutBtn) tabs.insertBefore(btn, logoutBtn); else tabs.appendChild(btn);

  // buat content panel
  const div = document.createElement('div');
  div.id = 'admin-tab-laporan';
  div.className = 'admin-tab-content';
  div.innerHTML = `
    <button class="admin-btn-add" onclick="openAdminLaporanForm()">+ Tambah Laporan</button>
    <div class="admin-form hidden" id="adminLaporanForm">
      <h4>Form Laporan Keuangan</h4>
      <input type="hidden" id="adminEditLaporanId" />
      <div class="admin-form-row">
        <div class="admin-form-group">
          <label>Nama Laporan</label>
          <input type="text" id="adminLaporanNama" />
        </div>
        <div class="admin-form-group">
          <label>Periode / Tahun</label>
          <select id="adminLaporanPeriode">
            <option value="2025">2025</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
          </select>
        </div>
        <div class="admin-form-group">
          <label>Upload File (PDF / Image)</label>
          <input type="file" id="adminLaporanFile" accept=".pdf,application/pdf,image/*" />
          <div id="adminLaporanPreview" style="margin-top:.6rem;"></div>
        </div>
      </div>
      <div style="margin-top:.6rem;">
        <button class="admin-btn-add" onclick="saveAdminLaporan()">Simpan</button>
        <button class="admin-btn-delete" onclick="closeAdminLaporanForm()">Batal</button>
      </div>
    </div>

    <div style="overflow-x:auto; margin-top:1rem;">
      <table class="admin-table">
        <thead><tr><th>ID</th><th>Nama Laporan</th><th>Periode</th><th>File</th><th>Aksi</th></tr></thead>
        <tbody id="adminLaporanTableBody"></tbody>
      </table>
    </div>
  `;
  panelBody.appendChild(div);

  // file input preview handler
  const fileInput = document.getElementById('adminLaporanFile');
  if (fileInput) {
    fileInput.addEventListener('change', async function () {
      const file = this.files?.[0];
      const preview = document.getElementById('adminLaporanPreview');
      if (!preview) return;
      preview.innerHTML = '';
      if (!file) return;
      const allowed = ['application/pdf', 'image/png', 'image/jpeg', 'image/jpg', 'image/gif'];
      if (!allowed.includes(file.type)) {
        preview.textContent = 'Format file tidak didukung. Gunakan PDF atau gambar.';
        this.value = '';
        return;
      }
      // tampilkan nama & preview kecil bila gambar
      const info = document.createElement('div');
      info.style.fontSize = '.9rem';
      info.style.color = 'var(--gray-700)';
      info.textContent = `${file.name} (${Math.round(file.size/1024)} KB)`;
      preview.appendChild(info);
      if (file.type.startsWith('image/')) {
        const img = document.createElement('img');
        img.style.maxWidth = '180px';
        img.style.marginTop = '6px';
        img.style.borderRadius = '8px';
        img.src = URL.createObjectURL(file);
        preview.appendChild(img);
      }
    });
  }

  // expose handy functions
  window.openAdminLaporanForm = openAdminLaporanForm;
  window.saveAdminLaporan = saveAdminLaporan;
  window.editAdminLaporan = editAdminLaporan;
  window.deleteAdminLaporan = deleteAdminLaporan;
  window.renderAdminLaporanTable = renderAdminLaporanTable;
}

function getAdminLaporanData() {
  try {
    const raw = localStorage.getItem('adminLaporan') || '[]';
    return JSON.parse(raw);
  } catch (e) {
    console.warn('parse adminLaporan', e);
    return [];
  }
}

function renderAdminLaporanTable() {
  const tbody = document.getElementById('adminLaporanTableBody');
  if (!tbody) return;
  const data = getAdminLaporanData();
  if (!data.length) {
    tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;color:var(--gray-500)">Belum ada laporan.</td></tr>';
    return;
  }
  tbody.innerHTML = data.map(l => {
    const fileCell = l.fileName && l.fileDataURL ? `<a class="admin-btn-edit" href="${l.fileDataURL}" download="${l.fileName}">Download</a>` : '<span style="color:var(--gray-500)">Tidak ada file</span>';
    return `<tr>
      <td>${l.id}</td>
      <td>${escapeHTML(l.nama)}</td>
      <td>${escapeHTML(String(l.periode))}</td>
      <td>${fileCell}</td>
      <td>
        <button class="admin-btn-edit" onclick="editAdminLaporan(${l.id})">Edit</button>
        <button class="admin-btn-delete" onclick="deleteAdminLaporan(${l.id})">Hapus</button>
      </td>
    </tr>`;
  }).join('');
}

function openAdminLaporanForm() {
  const form = document.getElementById('adminLaporanForm');
  if (!form) return;
  form.classList.remove('hidden');
  document.getElementById('adminEditLaporanId').value = '';
  document.getElementById('adminLaporanNama').value = '';
  document.getElementById('adminLaporanPeriode').value = new Date().getFullYear();
  document.getElementById('adminLaporanFile').value = '';
  const preview = document.getElementById('adminLaporanPreview');
  if (preview) preview.innerHTML = '';
}

function closeAdminLaporanForm() {
  const form = document.getElementById('adminLaporanForm');
  if (!form) return;
  form.classList.add('hidden');
}

function editAdminLaporan(id) {
  const data = getAdminLaporanData();
  const item = data.find(x => x.id === id);
  if (!item) return showToast('Laporan tidak ditemukan', true);
  document.getElementById('adminEditLaporanId').value = item.id;
  document.getElementById('adminLaporanNama').value = item.nama || '';
  document.getElementById('adminLaporanPeriode').value = item.periode || new Date().getFullYear();
  const preview = document.getElementById('adminLaporanPreview');
  if (preview) {
    preview.innerHTML = '';
    if (item.fileName) {
      const info = document.createElement('div');
      info.textContent = `${item.fileName} (tersimpan)`;
      preview.appendChild(info);
      if (item.fileDataURL && item.fileDataURL.startsWith('data:image/')) {
        const img = document.createElement('img');
        img.src = item.fileDataURL;
        img.style.maxWidth = '180px';
        img.style.marginTop = '6px';
        img.style.borderRadius = '8px';
        preview.appendChild(img);
      }
    }
  }
  const form = document.getElementById('adminLaporanForm');
  if (form) form.classList.remove('hidden');
}

async function saveAdminLaporan() {
  const idField = document.getElementById('adminEditLaporanId');
  const idVal = idField?.value;
  const nama = (document.getElementById('adminLaporanNama')?.value || '').trim();
  const periode = document.getElementById('adminLaporanPeriode')?.value || new Date().getFullYear();
  const fileInput = document.getElementById('adminLaporanFile');
  const file = fileInput?.files?.[0];

  if (!nama) return showToast('Isi nama laporan', true);
  if (!periode) return showToast('Pilih periode laporan', true);

  const data = getAdminLaporanData();

  async function persist(fileDataURL, fileName) {
    const item = {
      id: idVal ? parseInt(idVal, 10) : Date.now(),
      nama,
      periode,
      fileName: fileName || '',
      fileDataURL: fileDataURL || '',
      uploadedAt: new Date().toISOString()
    };
    if (idVal) {
      const idx = data.findIndex(d => d.id === parseInt(idVal, 10));
      if (idx !== -1) data[idx] = item;
      else data.unshift(item);
      showToast('✅ Laporan berhasil diupdate');
    } else {
      data.unshift(item);
      showToast('✅ Laporan berhasil ditambahkan');
    }
    localStorage.setItem('adminLaporan', JSON.stringify(data));
    renderAdminLaporanTable();
    // refresh transparansi view bila ada
    if (typeof renderLaporan === 'function') renderLaporan();
    closeAdminLaporanForm();
  }

  if (file) {
    try {
      const dataURL = await fileToBase64(file);
      await persist(dataURL, file.name);
    } catch (e) {
      console.error(e);
      showToast('Gagal membaca file', true);
    }
  } else {
    // jika edit dan tidak upload file baru, ingin mempertahankan existing file (jika ada)
    if (idVal) {
      const existing = data.find(d => d.id === parseInt(idVal, 10));
      await persist(existing?.fileDataURL || '', existing?.fileName || '');
    } else {
      // tanpa file, masih boleh menyimpan (tapi beri peringatan)
      await persist('', '');
    }
  }
}

function deleteAdminLaporan(id) {
  if (!confirm('Hapus laporan ini?')) return;
  let data = getAdminLaporanData();
  data = data.filter(d => d.id !== id);
  localStorage.setItem('adminLaporan', JSON.stringify(data));
  renderAdminLaporanTable();
  if (typeof renderLaporan === 'function') renderLaporan();
  showToast('✅ Laporan dihapus');
}

/* Override/extend fungsi renderLaporan untuk memasukkan laporan admin */
function renderLaporan() {
  const tahun = document.getElementById('filterTahun')?.value || '2025';
  const list = document.getElementById('laporanList');
  if (!list) return;
  // data default (jika ada) gunakan dataLaporan jika tersedia
  const defaultData = (typeof dataLaporan !== 'undefined' && Array.isArray(dataLaporan)) ? dataLaporan : [];
  const admin = getAdminLaporanData();

  // map admin items ke format mirip dataLaporan (nama, tahun, jenis, icon, file)
  const adminMapped = admin.map(a => ({
    id: a.id,
    nama: a.nama,
    tahun: String(a.periode),
    jenis: 'Laporan',
    icon: '📁',
    fileName: a.fileName,
    fileDataURL: a.fileDataURL
  }));

  const combined = [...adminMapped, ...defaultData];

  const filtered = combined.filter(l => l.tahun === String(tahun));
  if (!filtered.length) {
    list.innerHTML = '<p style="padding:1.5rem;text-align:center;color:var(--gray-500)">Belum ada laporan untuk periode ini.</p>';
    return;
  }

  list.innerHTML = filtered.map(l => `
    <div class="laporan-item">
      <div style="display:flex;align-items:center;gap:1rem">
        <span class="laporan-icon">${l.icon || '📄'}</span>
        <div class="laporan-info">
          <h4>${escapeHTML(l.nama || (l.nama === undefined ? l.nama : 'Laporan'))}</h4>
          <p>Tahun ${escapeHTML(String(l.tahun || ''))} • ${escapeHTML(l.jenis || '')}</p>
        </div>
      </div>
      <div style="display:flex;gap:.6rem;align-items:center">
        ${l.fileDataURL ? `<a class="btn btn-outline" href="${l.fileDataURL}" download="${escapeHTML(l.fileName || l.nama)}">Download</a>` : `<button class="btn" disabled style="opacity:.6">Tidak ada file</button>`}
        <!-- tombol tambahan: buka di tab baru -->
        ${l.fileDataURL ? `<a class="btn btn-primary" href="${l.fileDataURL}" target="_blank">Buka</a>` : ''}
      </div>
    </div>
  `).join('');
}

/* Pastikan tab laporan di-inject & table dirender saat DOM siap (append) */
document.addEventListener('DOMContentLoaded', () => {
  ensureAdminLaporanTab();
  // render tabel bila admin panel terbuka
  if (document.getElementById('adminPanelContainer')?.classList.contains('open')) {
    renderAdminLaporanTable();
  }
});

/* =========================
   ADMIN: Laporan Keuangan
   ========================= */

/* Helper: baca daftar laporan admin dari localStorage */
function getAdminLaporanData() {
  try {
    return JSON.parse(localStorage.getItem('adminLaporan') || '[]');
  } catch (e) {
    console.warn('parse adminLaporan', e);
    return [];
  }
}

function ensureAdminLaporanTab() {
  const tabs = document.querySelector('.admin-tabs');
  const panelBody = document.querySelector('.admin-panel-body');
  if (!tabs || !panelBody) return;
  if (tabs.querySelector('[data-tab="laporan"]')) return; // sudah ada

  // create tab button
  const btn = document.createElement('button');
  btn.className = 'admin-tab-btn';
  btn.dataset.tab = 'laporan';
  btn.textContent = '📁 Laporan';
  btn.addEventListener('click', () => switchAdminTab('laporan'));
  // insert before logout jika ada
  const logoutBtn = tabs.querySelector('[data-tab="logout"]');
  if (logoutBtn) tabs.insertBefore(btn, logoutBtn); else tabs.appendChild(btn);

  // create panel content
  const div = document.createElement('div');
  div.id = 'admin-tab-laporan';
  div.className = 'admin-tab-content';
  div.innerHTML = `
    <button class="admin-btn-add" onclick="openAdminLaporanForm()">+ Tambah Laporan</button>

    <div class="admin-form hidden" id="adminLaporanForm" style="margin-top:1rem;">
      <h4>Form Laporan Keuangan</h4>
      <input type="hidden" id="adminEditLaporanId" />
      <div class="admin-form-row">
        <div class="admin-form-group">
          <label>Nama Laporan</label>
          <input type="text" id="adminLaporanNama" />
        </div>
        <div class="admin-form-group">
          <label>Periode / Tahun</label>
          <select id="adminLaporanPeriode">
            <option value="2025">2025</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
          </select>
        </div>
        <div class="admin-form-group">
          <label>Upload File (PDF / Gambar)</label>
          <input type="file" id="adminLaporanFile" accept=".pdf,application/pdf,image/*" />
          <div id="adminLaporanPreview" style="margin-top:.6rem;"></div>
        </div>
      </div>
      <div style="margin-top:.6rem;">
        <button class="admin-btn-add" onclick="saveAdminLaporan()">Simpan</button>
        <button class="admin-btn-delete" onclick="closeAdminLaporanForm()">Batal</button>
      </div>
    </div>

    <div style="overflow-x:auto; margin-top:1rem;">
      <table class="admin-table">
        <thead><tr><th>ID</th><th>Nama Laporan</th><th>Periode</th><th>File</th><th>Aksi</th></tr></thead>
        <tbody id="adminLaporanTableBody"></tbody>
      </table>
    </div>
  `;
  panelBody.appendChild(div);

  // file preview handler
  const fileInput = document.getElementById('adminLaporanFile');
  if (fileInput) {
    fileInput.addEventListener('change', function () {
      const file = this.files?.[0];
      const preview = document.getElementById('adminLaporanPreview');
      if (!preview) return;
      preview.innerHTML = '';
      if (!file) return;
      const info = document.createElement('div');
      info.style.fontSize = '.9rem';
      info.style.color = 'var(--gray-700)';
      info.textContent = `${file.name} — ${Math.round(file.size/1024)} KB`;
      preview.appendChild(info);
      if (file.type.startsWith('image/')) {
        const img = document.createElement('img');
        img.style.maxWidth = '180px';
        img.style.marginTop = '6px';
        img.style.borderRadius = '8px';
        img.src = URL.createObjectURL(file);
        preview.appendChild(img);
      }
    });
  }

  // render table immediately
  renderAdminLaporanTable();
}

/* Render tabel laporan di admin */
function renderAdminLaporanTable() {
  const tbody = document.getElementById('adminLaporanTableBody');
  if (!tbody) return;
  const data = getAdminLaporanData();
  if (!data.length) {
    tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;color:var(--gray-500)">Belum ada laporan.</td></tr>';
    return;
  }
  tbody.innerHTML = data.map(l => {
    const fileCell = l.fileName && l.fileDataURL
      ? `<a class="admin-btn-edit" href="${l.fileDataURL}" download="${escapeHTML(l.fileName)}">Download</a>`
      : '<span style="color:var(--gray-500)">Tidak ada file</span>';
    return `<tr>
      <td>${l.id}</td>
      <td>${escapeHTML(l.nama || '')}</td>
      <td>${escapeHTML(String(l.periode || ''))}</td>
      <td>${fileCell}</td>
      <td>
        <button class="admin-btn-edit" onclick="editAdminLaporan(${l.id})">Edit</button>
        <button class="admin-btn-delete" onclick="deleteAdminLaporan(${l.id})">Hapus</button>
      </td>
    </tr>`;
  }).join('');
}

/* buka/close form */
function openAdminLaporanForm() {
  const form = document.getElementById('adminLaporanForm');
  if (!form) return;
  form.classList.remove('hidden');
  document.getElementById('adminEditLaporanId').value = '';
  document.getElementById('adminLaporanNama').value = '';
  document.getElementById('adminLaporanPeriode').value = new Date().getFullYear();
  document.getElementById('adminLaporanFile').value = '';
  const preview = document.getElementById('adminLaporanPreview');
  if (preview) preview.innerHTML = '';
}

function closeAdminLaporanForm() {
  const form = document.getElementById('adminLaporanForm');
  if (!form) return;
  form.classList.add('hidden');
}

/* edit existing */
function editAdminLaporan(id) {
  const data = getAdminLaporanData();
  const item = data.find(x => x.id === id);
  if (!item) return showToast('Laporan tidak ditemukan', true);
  document.getElementById('adminEditLaporanId').value = item.id;
  document.getElementById('adminLaporanNama').value = item.nama || '';
  document.getElementById('adminLaporanPeriode').value = item.periode || new Date().getFullYear();
  const preview = document.getElementById('adminLaporanPreview');
  if (preview) {
    preview.innerHTML = '';
    if (item.fileName) {
      const info = document.createElement('div');
      info.textContent = `${item.fileName} (tersimpan)`;
      preview.appendChild(info);
      if (item.fileDataURL && item.fileDataURL.startsWith('data:image/')) {
        const img = document.createElement('img');
        img.src = item.fileDataURL;
        img.style.maxWidth = '180px';
        img.style.marginTop = '6px';
        img.style.borderRadius = '8px';
        preview.appendChild(img);
      }
    }
  }
  const form = document.getElementById('adminLaporanForm');
  if (form) form.classList.remove('hidden');
}

/* save (tambah atau update) */
async function saveAdminLaporan() {
  const idVal = document.getElementById('adminEditLaporanId')?.value;
  const nama = (document.getElementById('adminLaporanNama')?.value || '').trim();
  const periode = document.getElementById('adminLaporanPeriode')?.value || new Date().getFullYear();
  const fileInput = document.getElementById('adminLaporanFile');
  const file = fileInput?.files?.[0];

  if (!nama) return showToast('Isi Nama Laporan', true);
  if (!periode) return showToast('Pilih Periode', true);

  const data = getAdminLaporanData();

  async function persist(fileDataURL, fileName) {
    const item = {
      id: idVal ? parseInt(idVal, 10) : Date.now(),
      nama,
      periode,
      fileName: fileName || '',
      fileDataURL: fileDataURL || '',
      uploadedAt: new Date().toISOString()
    };
    if (idVal) {
      const idx = data.findIndex(d => d.id === parseInt(idVal, 10));
      if (idx !== -1) data[idx] = item;
      else data.unshift(item);
      showToast('✅ Laporan berhasil diupdate');
    } else {
      data.unshift(item);
      showToast('✅ Laporan berhasil ditambahkan');
    }
    localStorage.setItem('adminLaporan', JSON.stringify(data));
    renderAdminLaporanTable();
    // render transparansi (langsung)
    if (typeof renderLaporan === 'function') renderLaporan();
    closeAdminLaporanForm();
  }

  if (file) {
    try {
      const dataURL = await fileToBase64(file);
      await persist(dataURL, file.name);
    } catch (e) {
      console.error(e);
      showToast('Gagal membaca file', true);
    }
  } else {
    // jika edit dan tidak upload file baru -> pertahankan file lama
    if (idVal) {
      const existing = data.find(d => d.id === parseInt(idVal, 10));
      await persist(existing?.fileDataURL || '', existing?.fileName || '');
    } else {
      // baru tanpa file (boleh), simpan tanpa file
      await persist('', '');
    }
  }
}

/* delete */
function deleteAdminLaporan(id) {
  if (!confirm('Hapus laporan ini?')) return;
  let data = getAdminLaporanData();
  data = data.filter(d => d.id !== id);
  localStorage.setItem('adminLaporan', JSON.stringify(data));
  renderAdminLaporanTable();
  if (typeof renderLaporan === 'function') renderLaporan();
  showToast('✅ Laporan dihapus');
}

/* Render laporan di halaman Transparansi — gabungkan admin + default dataLaporan */
function renderLaporanWithAdmin() {
  const tahun = document.getElementById('filterTahun')?.value || '2025';
  const list = document.getElementById('laporanList');
  if (!list) return;
  const defaultData = (typeof dataLaporan !== 'undefined' && Array.isArray(dataLaporan)) ? dataLaporan : [];
  const admin = getAdminLaporanData();

  const adminMapped = admin.map(a => ({
    id: a.id,
    nama: a.nama,
    tahun: String(a.periode),
    jenis: 'Laporan Keuangan',
    icon: '📁',
    fileName: a.fileName,
    fileDataURL: a.fileDataURL
  }));

  const combined = [...adminMapped, ...defaultData.map(d => ({ id: d.nama + d.tahun, nama: d.nama, tahun: String(d.tahun || d.tahun), jenis: d.jenis || 'Laporan', icon: d.icon, fileName: d.fileName || '', fileDataURL: d.fileDataURL || '' }))];

  const filtered = combined.filter(l => String(l.tahun) === String(tahun));
  if (!filtered.length) {
    list.innerHTML = '<p style="padding:1.5rem;text-align:center;color:var(--gray-500)">Belum ada laporan untuk periode ini.</p>';
    return;
  }

  list.innerHTML = filtered.map(l => `
    <div class="laporan-item">
      <div style="display:flex;align-items:center;gap:1rem">
        <span class="laporan-icon">${l.icon || '📄'}</span>
        <div class="laporan-info">
          <h4>${escapeHTML(l.nama || '')}</h4>
          <p>Tahun ${escapeHTML(String(l.tahun || ''))} • ${escapeHTML(l.jenis || '')}</p>
        </div>
      </div>
      <div style="display:flex;gap:.6rem;align-items:center">
        ${l.fileDataURL ? `<a class="btn btn-outline" href="${l.fileDataURL}" download="${escapeHTML(l.fileName || l.nama)}">Download</a><a class="btn btn-primary" href="${l.fileDataURL}" target="_blank">Buka</a>` : `<button class="btn" disabled style="opacity:.6">Tidak ada file</button>`}
      </div>
    </div>
  `).join('');
}

/* expose global name agar halaman lain dapat memanggilnya */
window.renderLaporan = renderLaporanWithAdmin;

/* Re-bind filterTahun change listener to our new render function */
function bindFilterTahunToLaporan() {
  const filterTahun = document.getElementById('filterTahun');
  if (filterTahun) {
    filterTahun.removeEventListener('change', renderLaporan); // safe attempt
    filterTahun.addEventListener('change', renderLaporanWithAdmin);
  }
}

/* Re-render on storage changes (agar tab lain auto update) */
window.addEventListener('storage', (e) => {
  if (e.key === 'adminLaporan' || e.key === 'reservasiBumdes') {
    if (document.getElementById('laporanList')) renderLaporanWithAdmin();
    if (document.getElementById('adminLaporanTableBody')) renderAdminLaporanTable();
  }
});

/* ensure injection + binding when DOM siap */
document.addEventListener('DOMContentLoaded', () => {
  ensureAdminLaporanTab();
  bindFilterTahunToLaporan();
  // saat halaman transparansi terbuka, render segera
  if (document.getElementById('laporanList')) renderLaporanWithAdmin();
});

