/**
 * BINTANG CELL - MIKO MALL KOPO BANDUNG
 * Searchable Phone Combobox, Multi-Select Issues, Dynamic WhatsApp Generator
 */

document.addEventListener('DOMContentLoaded', () => {
  const WA_PHONE = '6282321251622'; // 0823-2125-1622

  // ==========================================================================
  // 1. COMPREHENSIVE PHONE MODEL DATABASE
  // ==========================================================================
  const PHONE_DATABASE = [
    // Apple iPhone
    { brand: 'Apple iPhone', model: 'iPhone 16 Pro Max' },
    { brand: 'Apple iPhone', model: 'iPhone 16 Pro' },
    { brand: 'Apple iPhone', model: 'iPhone 16 Plus' },
    { brand: 'Apple iPhone', model: 'iPhone 16' },
    { brand: 'Apple iPhone', model: 'iPhone 15 Pro Max' },
    { brand: 'Apple iPhone', model: 'iPhone 15 Pro' },
    { brand: 'Apple iPhone', model: 'iPhone 15 Plus' },
    { brand: 'Apple iPhone', model: 'iPhone 15' },
    { brand: 'Apple iPhone', model: 'iPhone 14 Pro Max' },
    { brand: 'Apple iPhone', model: 'iPhone 14 Pro' },
    { brand: 'Apple iPhone', model: 'iPhone 14 Plus' },
    { brand: 'Apple iPhone', model: 'iPhone 14' },
    { brand: 'Apple iPhone', model: 'iPhone 13 Pro Max' },
    { brand: 'Apple iPhone', model: 'iPhone 13 Pro' },
    { brand: 'Apple iPhone', model: 'iPhone 13' },
    { brand: 'Apple iPhone', model: 'iPhone 13 Mini' },
    { brand: 'Apple iPhone', model: 'iPhone 12 Pro Max' },
    { brand: 'Apple iPhone', model: 'iPhone 12 Pro' },
    { brand: 'Apple iPhone', model: 'iPhone 12' },
    { brand: 'Apple iPhone', model: 'iPhone 12 Mini' },
    { brand: 'Apple iPhone', model: 'iPhone 11 Pro Max' },
    { brand: 'Apple iPhone', model: 'iPhone 11 Pro' },
    { brand: 'Apple iPhone', model: 'iPhone 11' },
    { brand: 'Apple iPhone', model: 'iPhone XS Max' },
    { brand: 'Apple iPhone', model: 'iPhone XS' },
    { brand: 'Apple iPhone', model: 'iPhone XR' },
    { brand: 'Apple iPhone', model: 'iPhone X' },
    { brand: 'Apple iPhone', model: 'iPhone SE (2022)' },
    { brand: 'Apple iPhone', model: 'iPhone SE (2020)' },
    { brand: 'Apple iPhone', model: 'iPhone 8 Plus' },
    { brand: 'Apple iPhone', model: 'iPhone 8' },
    { brand: 'Apple iPhone', model: 'iPhone 7 Plus' },

    // Samsung Galaxy
    { brand: 'Samsung Galaxy', model: 'Galaxy S24 Ultra' },
    { brand: 'Samsung Galaxy', model: 'Galaxy S24+' },
    { brand: 'Samsung Galaxy', model: 'Galaxy S24' },
    { brand: 'Samsung Galaxy', model: 'Galaxy S23 Ultra' },
    { brand: 'Samsung Galaxy', model: 'Galaxy S23+' },
    { brand: 'Samsung Galaxy', model: 'Galaxy S23' },
    { brand: 'Samsung Galaxy', model: 'Galaxy S23 FE' },
    { brand: 'Samsung Galaxy', model: 'Galaxy S22 Ultra' },
    { brand: 'Samsung Galaxy', model: 'Galaxy S22+' },
    { brand: 'Samsung Galaxy', model: 'Galaxy S22' },
    { brand: 'Samsung Galaxy', model: 'Galaxy S21 Ultra' },
    { brand: 'Samsung Galaxy', model: 'Galaxy S21 FE' },
    { brand: 'Samsung Galaxy', model: 'Galaxy S21+' },
    { brand: 'Samsung Galaxy', model: 'Galaxy S20 FE' },
    { brand: 'Samsung Galaxy', model: 'Galaxy Z Fold 6' },
    { brand: 'Samsung Galaxy', model: 'Galaxy Z Fold 5' },
    { brand: 'Samsung Galaxy', model: 'Galaxy Z Fold 4' },
    { brand: 'Samsung Galaxy', model: 'Galaxy Z Flip 6' },
    { brand: 'Samsung Galaxy', model: 'Galaxy Z Flip 5' },
    { brand: 'Samsung Galaxy', model: 'Galaxy Z Flip 4' },
    { brand: 'Samsung Galaxy', model: 'Galaxy Note 20 Ultra' },
    { brand: 'Samsung Galaxy', model: 'Galaxy Note 10+' },
    { brand: 'Samsung Galaxy', model: 'Galaxy A55 5G' },
    { brand: 'Samsung Galaxy', model: 'Galaxy A54 5G' },
    { brand: 'Samsung Galaxy', model: 'Galaxy A53 5G' },
    { brand: 'Samsung Galaxy', model: 'Galaxy A52s 5G' },
    { brand: 'Samsung Galaxy', model: 'Galaxy A35 5G' },
    { brand: 'Samsung Galaxy', model: 'Galaxy A34 5G' },
    { brand: 'Samsung Galaxy', model: 'Galaxy A25 5G' },
    { brand: 'Samsung Galaxy', model: 'Galaxy A24' },
    { brand: 'Samsung Galaxy', model: 'Galaxy A15 5G' },
    { brand: 'Samsung Galaxy', model: 'Galaxy A15' },
    { brand: 'Samsung Galaxy', model: 'Galaxy A14 5G' },
    { brand: 'Samsung Galaxy', model: 'Galaxy A14' },
    { brand: 'Samsung Galaxy', model: 'Galaxy A05s' },
    { brand: 'Samsung Galaxy', model: 'Galaxy A05' },
    { brand: 'Samsung Galaxy', model: 'Galaxy A04s' },
    { brand: 'Samsung Galaxy', model: 'Galaxy M54 5G' },

    // Oppo
    { brand: 'Oppo', model: 'Oppo Find N3' },
    { brand: 'Oppo', model: 'Oppo Find N3 Flip' },
    { brand: 'Oppo', model: 'Oppo Find X5 Pro' },
    { brand: 'Oppo', model: 'Oppo Reno 12 Pro 5G' },
    { brand: 'Oppo', model: 'Oppo Reno 12 5G' },
    { brand: 'Oppo', model: 'Oppo Reno 12 F 5G' },
    { brand: 'Oppo', model: 'Oppo Reno 11 Pro 5G' },
    { brand: 'Oppo', model: 'Oppo Reno 11 5G' },
    { brand: 'Oppo', model: 'Oppo Reno 11 F 5G' },
    { brand: 'Oppo', model: 'Oppo Reno 10 Pro+ 5G' },
    { brand: 'Oppo', model: 'Oppo Reno 10 Pro 5G' },
    { brand: 'Oppo', model: 'Oppo Reno 10 5G' },
    { brand: 'Oppo', model: 'Oppo Reno 8 Pro 5G' },
    { brand: 'Oppo', model: 'Oppo Reno 8 5G' },
    { brand: 'Oppo', model: 'Oppo Reno 8T 5G' },
    { brand: 'Oppo', model: 'Oppo Reno 8T 4G' },
    { brand: 'Oppo', model: 'Oppo Reno 7 5G' },
    { brand: 'Oppo', model: 'Oppo A98 5G' },
    { brand: 'Oppo', model: 'Oppo A79 5G' },
    { brand: 'Oppo', model: 'Oppo A78 5G' },
    { brand: 'Oppo', model: 'Oppo A78 4G' },
    { brand: 'Oppo', model: 'Oppo A58' },
    { brand: 'Oppo', model: 'Oppo A38' },
    { brand: 'Oppo', model: 'Oppo A18' },
    { brand: 'Oppo', model: 'Oppo A17' },
    { brand: 'Oppo', model: 'Oppo A16' },

    // Vivo
    { brand: 'Vivo', model: 'Vivo X100 Pro' },
    { brand: 'Vivo', model: 'Vivo X100' },
    { brand: 'Vivo', model: 'Vivo X90 Pro' },
    { brand: 'Vivo', model: 'Vivo X80 Pro' },
    { brand: 'Vivo', model: 'Vivo V40 5G' },
    { brand: 'Vivo', model: 'Vivo V30 Pro 5G' },
    { brand: 'Vivo', model: 'Vivo V30 5G' },
    { brand: 'Vivo', model: 'Vivo V30e' },
    { brand: 'Vivo', model: 'Vivo V29 5G' },
    { brand: 'Vivo', model: 'Vivo V29e' },
    { brand: 'Vivo', model: 'Vivo V27 5G' },
    { brand: 'Vivo', model: 'Vivo V27e' },
    { brand: 'Vivo', model: 'Vivo V25 Pro' },
    { brand: 'Vivo', model: 'Vivo V25 5G' },
    { brand: 'Vivo', model: 'Vivo Y100 5G' },
    { brand: 'Vivo', model: 'Vivo Y100 4G' },
    { brand: 'Vivo', model: 'Vivo Y28' },
    { brand: 'Vivo', model: 'Vivo Y27 5G' },
    { brand: 'Vivo', model: 'Vivo Y27 4G' },
    { brand: 'Vivo', model: 'Vivo Y17s' },
    { brand: 'Vivo', model: 'Vivo Y03' },
    { brand: 'Vivo', model: 'Vivo Y02t' },
    { brand: 'Vivo', model: 'Vivo Y36' },
    { brand: 'Vivo', model: 'iQOO 12' },
    { brand: 'Vivo', model: 'iQOO Z9 5G' },
    { brand: 'Vivo', model: 'iQOO Z9x' },
    { brand: 'Vivo', model: 'iQOO Z7 5G' },

    // Xiaomi / Redmi / POCO
    { brand: 'Xiaomi / Redmi / POCO', model: 'Xiaomi 14 Ultra' },
    { brand: 'Xiaomi / Redmi / POCO', model: 'Xiaomi 14' },
    { brand: 'Xiaomi / Redmi / POCO', model: 'Xiaomi 13T' },
    { brand: 'Xiaomi / Redmi / POCO', model: 'Xiaomi 12 Pro' },
    { brand: 'Xiaomi / Redmi / POCO', model: 'Xiaomi 12' },
    { brand: 'Xiaomi / Redmi / POCO', model: 'Redmi Note 13 Pro+ 5G' },
    { brand: 'Xiaomi / Redmi / POCO', model: 'Redmi Note 13 Pro 5G' },
    { brand: 'Xiaomi / Redmi / POCO', model: 'Redmi Note 13 Pro 4G' },
    { brand: 'Xiaomi / Redmi / POCO', model: 'Redmi Note 13 5G' },
    { brand: 'Xiaomi / Redmi / POCO', model: 'Redmi Note 13 4G' },
    { brand: 'Xiaomi / Redmi / POCO', model: 'Redmi Note 12 Pro 5G' },
    { brand: 'Xiaomi / Redmi / POCO', model: 'Redmi Note 12 Pro 4G' },
    { brand: 'Xiaomi / Redmi / POCO', model: 'Redmi Note 12' },
    { brand: 'Xiaomi / Redmi / POCO', model: 'Redmi Note 11' },
    { brand: 'Xiaomi / Redmi / POCO', model: 'Redmi 13' },
    { brand: 'Xiaomi / Redmi / POCO', model: 'Redmi 13C' },
    { brand: 'Xiaomi / Redmi / POCO', model: 'Redmi 12' },
    { brand: 'Xiaomi / Redmi / POCO', model: 'Redmi 10C' },
    { brand: 'Xiaomi / Redmi / POCO', model: 'POCO F6' },
    { brand: 'Xiaomi / Redmi / POCO', model: 'POCO F5' },
    { brand: 'Xiaomi / Redmi / POCO', model: 'POCO X6 Pro 5G' },
    { brand: 'Xiaomi / Redmi / POCO', model: 'POCO X6 5G' },
    { brand: 'Xiaomi / Redmi / POCO', model: 'POCO X5 Pro 5G' },
    { brand: 'Xiaomi / Redmi / POCO', model: 'POCO M6 Pro' },
    { brand: 'Xiaomi / Redmi / POCO', model: 'POCO C65' },

    // Infinix
    { brand: 'Infinix', model: 'Infinix GT 20 Pro' },
    { brand: 'Infinix', model: 'Infinix GT 10 Pro' },
    { brand: 'Infinix', model: 'Infinix Zero 30 5G' },
    { brand: 'Infinix', model: 'Infinix Zero 30 4G' },
    { brand: 'Infinix', model: 'Infinix Zero Ultra' },
    { brand: 'Infinix', model: 'Infinix Note 40 Pro+ 5G' },
    { brand: 'Infinix', model: 'Infinix Note 40 Pro 5G' },
    { brand: 'Infinix', model: 'Infinix Note 40' },
    { brand: 'Infinix', model: 'Infinix Note 30 Pro' },
    { brand: 'Infinix', model: 'Infinix Note 30' },
    { brand: 'Infinix', model: 'Infinix Hot 40 Pro' },
    { brand: 'Infinix', model: 'Infinix Hot 40i' },
    { brand: 'Infinix', model: 'Infinix Hot 30' },
    { brand: 'Infinix', model: 'Infinix Smart 8' },
    { brand: 'Infinix', model: 'Infinix Smart 7' },

    // Tecno
    { brand: 'Tecno', model: 'Tecno Phantom V Fold' },
    { brand: 'Tecno', model: 'Tecno Phantom V Flip' },
    { brand: 'Tecno', model: 'Tecno Camon 30 Premier' },
    { brand: 'Tecno', model: 'Tecno Camon 30 Pro 5G' },
    { brand: 'Tecno', model: 'Tecno Camon 30' },
    { brand: 'Tecno', model: 'Tecno Camon 20 Pro 5G' },
    { brand: 'Tecno', model: 'Tecno Pova 6 Pro 5G' },
    { brand: 'Tecno', model: 'Tecno Pova 6' },
    { brand: 'Tecno', model: 'Tecno Pova 5 Pro 5G' },
    { brand: 'Tecno', model: 'Tecno Pova 5' },
    { brand: 'Tecno', model: 'Tecno Pova 4 Pro' },
    { brand: 'Tecno', model: 'Tecno Spark 20 Pro+' },
    { brand: 'Tecno', model: 'Tecno Spark 20 Pro' },
    { brand: 'Tecno', model: 'Tecno Spark 20' },
    { brand: 'Tecno', model: 'Tecno Spark 20C' },
    { brand: 'Tecno', model: 'Tecno Spark Go 2024' },

    // Realme
    { brand: 'Realme', model: 'Realme GT 6' },
    { brand: 'Realme', model: 'Realme GT 5 Pro' },
    { brand: 'Realme', model: 'Realme GT Neo 5' },
    { brand: 'Realme', model: 'Realme 12 Pro+ 5G' },
    { brand: 'Realme', model: 'Realme 12+ 5G' },
    { brand: 'Realme', model: 'Realme 12 5G' },
    { brand: 'Realme', model: 'Realme 11 Pro+ 5G' },
    { brand: 'Realme', model: 'Realme 11 Pro 5G' },
    { brand: 'Realme', model: 'Realme 11' },
    { brand: 'Realme', model: 'Realme 10 Pro+ 5G' },
    { brand: 'Realme', model: 'Realme 10' },
    { brand: 'Realme', model: 'Realme C67' },
    { brand: 'Realme', model: 'Realme C65' },
    { brand: 'Realme', model: 'Realme C55' },
    { brand: 'Realme', model: 'Realme C53' },
    { brand: 'Realme', model: 'Realme C51' },
    { brand: 'Realme', model: 'Realme Note 50' },

    // Itel & Advan
    { brand: 'Itel', model: 'Itel S23+' },
    { brand: 'Itel', model: 'Itel S23' },
    { brand: 'Itel', model: 'Itel P55 5G' },
    { brand: 'Itel', model: 'Itel P55' },
    { brand: 'Itel', model: 'Itel A70' },
    { brand: 'Advan', model: 'Advan GX' },
    { brand: 'Advan', model: 'Advan G9 Pro' },
    { brand: 'Advan', model: 'Advan Nasa Plus' }
  ];

  // ==========================================================================
  // 2. NAVBAR & NAVIGATION
  // ==========================================================================
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', navMenu.classList.contains('open'));
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  const navbar = document.getElementById('mainNavbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  });

  // Store Open Status (10:00 - 21:30 WIB)
  function checkStoreStatus() {
    const statusDot = document.getElementById('storeStatusDot');
    const statusText = document.getElementById('storeStatusText');
    if (!statusText) return;

    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const bandungTime = new Date(utc + (3600000 * 7));
    const hours = bandungTime.getHours();
    const minutes = bandungTime.getMinutes();
    const currentTimeInMinutes = hours * 60 + minutes;

    const openTime = 10 * 60;
    const closeTime = 21 * 60 + 30;

    if (currentTimeInMinutes >= openTime && currentTimeInMinutes < closeTime) {
      statusText.innerHTML = `<strong>Buka Sekarang</strong> \u2022 Miko Mall Kopo (Tutup 21.30 WIB)`;
      if (statusDot) statusDot.style.background = '#10b981';
    } else {
      statusText.innerHTML = `<strong>Tutup Sementara</strong> \u2022 Buka Setiap Hari (10.00 - 21.30 WIB)`;
      if (statusDot) statusDot.style.background = '#f59e0b';
    }
  }
  checkStoreStatus();

  // ==========================================================================
  // 3. SEARCHABLE MODEL COMBOBOX LOGIC
  // ==========================================================================
  const brandSelect = document.getElementById('phoneBrand');
  const modelSearchInput = document.getElementById('modelSearchInput');
  const modelDropdown = document.getElementById('modelDropdown');
  const searchableWrap = document.getElementById('searchableModelWrap');

  function populateDropdown(brandFilter = '', query = '') {
    if (!modelDropdown) return;
    modelDropdown.innerHTML = '';

    const q = query.toLowerCase().trim();
    const b = brandFilter.trim();

    let filtered = PHONE_DATABASE.filter(item => {
      const matchBrand = !b || item.brand.toLowerCase() === b.toLowerCase();
      const matchQuery = !q || item.model.toLowerCase().includes(q) || item.brand.toLowerCase().includes(q);
      return matchBrand && matchQuery;
    });

    if (filtered.length === 0) {
      const emptyEl = document.createElement('div');
      emptyEl.className = 'dropdown-empty';
      emptyEl.innerHTML = `
        <i class="fa-solid fa-circle-info"></i> Tipe "<strong>${query}</strong>" belum ada di list cepat.<br>
        <span style="color: #38bdf8;">Anda tetap bisa gunakan ketikan nama ini!</span>
      `;
      modelDropdown.appendChild(emptyEl);
      return;
    }

    // Group by Brand
    let currentGroup = '';
    filtered.slice(0, 45).forEach(item => {
      if (item.brand !== currentGroup) {
        currentGroup = item.brand;
        const groupEl = document.createElement('div');
        groupEl.className = 'dropdown-brand-header';
        groupEl.textContent = currentGroup;
        modelDropdown.appendChild(groupEl);
      }

      const optEl = document.createElement('div');
      optEl.className = 'dropdown-option';
      if (modelSearchInput && modelSearchInput.value.trim() === item.model) {
        optEl.classList.add('selected');
      }
      optEl.innerHTML = `
        <span>${item.model}</span>
        <span class="opt-sub">${item.brand.split(' ')[0]}</span>
      `;

      optEl.addEventListener('click', (e) => {
        e.stopPropagation();
        if (modelSearchInput) {
          modelSearchInput.value = item.model;
        }
        // Auto match brand dropdown if empty
        if (brandSelect && (!brandSelect.value || brandSelect.value === 'Lainnya')) {
          for (let i = 0; i < brandSelect.options.length; i++) {
            if (brandSelect.options[i].value === item.brand) {
              brandSelect.selectedIndex = i;
              break;
            }
          }
        }
        searchableWrap?.classList.remove('open');
        updateLivePreview();
      });

      modelDropdown.appendChild(optEl);
    });
  }

  // Open & filter on input focus / typing
  if (modelSearchInput) {
    modelSearchInput.addEventListener('focus', () => {
      searchableWrap?.classList.add('open');
      populateDropdown(brandSelect?.value || '', modelSearchInput.value);
    });

    modelSearchInput.addEventListener('input', () => {
      searchableWrap?.classList.add('open');
      populateDropdown(brandSelect?.value || '', modelSearchInput.value);
      updateLivePreview();
    });
  }

  if (brandSelect) {
    brandSelect.addEventListener('change', () => {
      const selectedBrand = brandSelect.value;
      if (selectedBrand) {
        populateDropdown(selectedBrand, modelSearchInput?.value || '');
      }
      updateLivePreview();
    });
  }

  // Close dropdown on click outside
  document.addEventListener('click', (e) => {
    if (searchableWrap && !searchableWrap.contains(e.target)) {
      searchableWrap.classList.remove('open');
    }
  });

  // ==========================================================================
  // 4. STORAGE / MEMORY CHIPS SELECTOR
  // ==========================================================================
  let selectedStorage = '128 GB';
  const memoryChips = document.querySelectorAll('.memory-chip');
  memoryChips.forEach(chip => {
    chip.addEventListener('click', () => {
      memoryChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      selectedStorage = chip.getAttribute('data-value') || chip.textContent.trim();
      updateLivePreview();
    });
  });

  // ==========================================================================
  // 5. MULTI-SELECT ISSUE CHIPS (KENDALA HP)
  // ==========================================================================
  const issueChips = document.querySelectorAll('.issue-chip');
  let selectedIssues = [];

  issueChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const issueVal = chip.getAttribute('data-issue');
      const isNormal = chip.classList.contains('normal-chip');

      if (isNormal) {
        // If clicking "Tanpa Minus", uncheck all other issues
        issueChips.forEach(c => c.classList.remove('checked'));
        chip.classList.add('checked');
        selectedIssues = ['Tanpa Minus (Mulus Normal 100%)'];
      } else {
        // If clicking a negative issue, uncheck "Tanpa Minus"
        document.querySelector('.issue-chip.normal-chip')?.classList.remove('checked');
        chip.classList.toggle('checked');

        // Re-gather active issues
        selectedIssues = [];
        document.querySelectorAll('.issue-chip.checked:not(.normal-chip)').forEach(activeChip => {
          selectedIssues.push(activeChip.getAttribute('data-issue'));
        });

        // If nothing is checked, default back to no minus
        if (selectedIssues.length === 0) {
          const normalChip = document.querySelector('.issue-chip.normal-chip');
          if (normalChip) {
            normalChip.classList.add('checked');
            selectedIssues = ['Tanpa Minus (Mulus Normal 100%)'];
          }
        }
      }

      updateLivePreview();
    });
  });

  // Initialize with "Tanpa Minus" checked
  const defaultNormal = document.querySelector('.issue-chip.normal-chip');
  if (defaultNormal) {
    defaultNormal.classList.add('checked');
    selectedIssues = ['Tanpa Minus (Mulus Normal 100%)'];
  }

  // ==========================================================================
  // 6. FORM JUAL & TUKAR TAMBAH / WHATSAPP PREVIEW LOGIC
  // ==========================================================================
  const tradeinForm = document.getElementById('tradeinForm');
  const modeButtons = document.querySelectorAll('.mode-btn');
  const targetPhoneGroup = document.getElementById('targetPhoneGroup');
  let currentTradeMode = 'jual'; // 'jual' or 'tukar'

  modeButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modeButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentTradeMode = btn.getAttribute('data-mode');

      if (targetPhoneGroup) {
        if (currentTradeMode === 'tukar') {
          targetPhoneGroup.style.display = 'flex';
          const targetInput = document.getElementById('targetHp');
          if (targetInput) targetInput.required = true;
        } else {
          targetPhoneGroup.style.display = 'none';
          const targetInput = document.getElementById('targetHp');
          if (targetInput) targetInput.required = false;
        }
      }
      updateLivePreview();
    });
  });

  // Dynamic Live Preview Builder
  function updateLivePreview() {
    const previewEl = document.getElementById('waPreviewContent');
    if (!previewEl) return;

    const brand = brandSelect?.value || 'Pilih Merk';
    const model = modelSearchInput?.value.trim() || 'Ketik Model HP';
    const condition = document.getElementById('phoneCondition')?.value || 'Pilih Kondisi';
    const issuesText = selectedIssues.length > 0 ? selectedIssues.join(', ') : 'Tanpa Minus (Normal)';

    let modeText = currentTradeMode === 'tukar' ? '\u{1F504} TUKAR TAMBAH' : '\u{1F4B0} JUAL HP BEKAS';
    let previewHtml = `<strong>[${modeText}]</strong> ${brand} - <strong>${model}</strong> (${selectedStorage})<br>`;
    previewHtml += `<span style="color: #94a3b8;">Kondisi:</span> ${condition}<br>`;
    previewHtml += `<span style="color: #fca5a5;">Kendala:</span> ${issuesText}`;

    previewEl.innerHTML = previewHtml;
  }

  // Listen to form inputs for live preview
  ['ownerName', 'ownerWa', 'phoneCondition', 'phonePackage', 'phoneWarranty', 'priceExpectation', 'targetHp', 'extraNotes'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', updateLivePreview);
      el.addEventListener('change', updateLivePreview);
    }
  });

  // Submit Handler
  if (tradeinForm) {
    tradeinForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nama = document.getElementById('ownerName')?.value.trim() || '-';
      const noHp = document.getElementById('ownerWa')?.value.trim() || '-';
      const brand = brandSelect?.value || '-';
      const model = modelSearchInput?.value.trim() || '-';
      const condition = document.getElementById('phoneCondition')?.value || '-';
      const packageType = document.getElementById('phonePackage')?.value || '-';
      const warranty = document.getElementById('phoneWarranty')?.value || '-';
      const priceExpectation = document.getElementById('priceExpectation')?.value.trim() || '-';
      const targetHp = document.getElementById('targetHp')?.value.trim() || '-';
      const notes = document.getElementById('extraNotes')?.value.trim() || '-';

      const modeTitle = currentTradeMode === 'tukar' ? '\u{1F504} TUKAR TAMBAH (TRADE-IN) HP' : '\u{1F4B0} JUAL HP BEKAS (LANGSUNG CAIR UANG)';

      let msg = `Halo Admin Bintang Cell Miko Mall Kopo! \u{1F44B}\n`;
      msg += `Saya mau menawarkan HP bekas untuk *${modeTitle}*:\n\n`;
      msg += `\u{1F464} *DATA PEMILIK*\n`;
      msg += `\u2022 Nama: ${nama}\n`;
      msg += `\u2022 No. WhatsApp: ${noHp}\n\n`;
      msg += `\u{1F4F1} *DETAIL HP LAMA*\n`;
      msg += `\u2022 Merk: *${brand}*\n`;
      msg += `\u2022 Tipe / Seri: *${model}*\n`;
      msg += `\u2022 Memori Internal: *${selectedStorage}*\n`;
      msg += `\u2022 Kondisi Fisik: *${condition}*\n`;
      msg += `\u2022 Kelengkapan: *${packageType}*\n`;
      msg += `\u2022 Status Garansi: *${warranty}*\n\n`;

      msg += `\u26A0\uFE0F *KENDALA / KERUSAKAN HP:*\n`;
      if (selectedIssues.length > 0) {
        selectedIssues.forEach(iss => {
          msg += `\u2022 ${iss}\n`;
        });
      } else {
        msg += `\u2022 Tanpa Minus (Normal 100%)\n`;
      }

      if (priceExpectation && priceExpectation !== '-') {
        msg += `\n\u{1F4B0} *Ekspektasi Harga Jual:* Rp ${priceExpectation}\n`;
      }

      if (currentTradeMode === 'tukar') {
        msg += `\n\u{1F3AF} *TARGET HP INGIN DITUKAR KE:*\n`;
        msg += `\u2022 Mau Tukar Tambah ke: *${targetHp}*\n`;
      }

      if (notes && notes !== '-') {
        msg += `\n\u{1F4DD} *CATATAN TAMBAHAN:*\n`;
        msg += `"${notes}"\n`;
      }

      msg += `\nMohon info taksiran harga tertinggi dari Bintang Cell ya min. Jika penawaran cocok, saya bisa langsung datang ke toko di Miko Mall Kopo Bandung. Terima kasih! \u{1F64F}\u2728`;

      // Open WhatsApp Redirect
      window.open(`https://wa.me/${WA_PHONE}?text=${encodeURIComponent(msg)}`, '_blank');

      // Show Success Modal
      showSuccessModal(nama, currentTradeMode);
    });
  }

  // ==========================================================================
  // 7. SERVICE FORM LOGIC
  // ==========================================================================
  const serviceForm = document.getElementById('serviceForm');
  if (serviceForm) {
    serviceForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const sBrand = document.getElementById('serviceBrand')?.value || '-';
      const sModel = document.getElementById('serviceModel')?.value.trim() || '-';
      const sIssue = document.getElementById('serviceIssue')?.value || '-';
      const sNotes = document.getElementById('serviceNotes')?.value.trim() || '';

      let sMsg = `Halo Teknisi Bintang Cell Miko Mall Kopo! \u{1F527}\n\n`;
      sMsg += `Saya mau konsultasi service HP *Bisa Ditunggu*:\n`;
      sMsg += `\u2022 Merk & Tipe: *${sBrand} ${sModel}*\n`;
      sMsg += `\u2022 Masalah / Kerusakan: *${sIssue}*\n`;
      if (sNotes) {
        sMsg += `\u2022 Gejala Tambahan: "${sNotes}"\n`;
      }
      sMsg += `\nBerapa estimasi biaya perbaikan dan apakah sparepartnya ready bisa ditunggu hari ini di Miko Mall? Terima kasih! \u{1F64F}`;

      window.open(`https://wa.me/${WA_PHONE}?text=${encodeURIComponent(sMsg)}`, '_blank');
    });
  }

  // ==========================================================================
  // 8. SUCCESS MODAL & FAQ ACCORDION
  // ==========================================================================
  function showSuccessModal(name, mode) {
    const modal = document.getElementById('successModal');
    const modalDesc = document.getElementById('modalDesc');
    if (!modal) return;

    if (modalDesc) {
      modalDesc.innerHTML = `Terima kasih <strong>${name}</strong>! Data HP Anda telah tersusun rapi dan dialihkan langsung ke WhatsApp Admin Bintang Cell.`;
    }

    modal.classList.add('active');
  }

  window.closeModal = function() {
    const modal = document.getElementById('successModal');
    if (modal) modal.classList.remove('active');
  };

  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn?.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // Scroll Spy for Nav
  const mobNavItems = document.querySelectorAll('.mob-nav-item:not(.mob-wa)');
  mobNavItems.forEach(item => {
    item.addEventListener('click', () => {
      mobNavItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });

  const scrollSections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollPos = window.pageYOffset + 140;
    scrollSections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        mobNavItems.forEach(item => {
          if (item.getAttribute('href') === '#' + id) {
            mobNavItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
          }
        });

        document.querySelectorAll('.nav-link').forEach(link => {
          if (link.getAttribute('href') === '#' + id) {
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
          }
        });
      }
    });
  });

  // 9. Store Photo Switcher in Hero
  const heroStoreImg = document.getElementById('heroStoreImg');
  const heroStoreBadge = document.getElementById('heroStoreBadge');
  const storeThumbBtns = document.querySelectorAll('.store-thumb-btn');

  storeThumbBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const imgPath = btn.getAttribute('data-img');
      const badgeText = btn.getAttribute('data-badge');
      const iconClass = btn.getAttribute('data-icon') || 'fa-store';

      if (heroStoreImg && imgPath) {
        heroStoreImg.src = imgPath;
      }
      if (heroStoreBadge && badgeText) {
        heroStoreBadge.innerHTML = `<span class="pulse-dot"></span> <i class="fa-solid ${iconClass}"></i> ${badgeText}`;
      }

      storeThumbBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Initial preview update
  updateLivePreview();
});
