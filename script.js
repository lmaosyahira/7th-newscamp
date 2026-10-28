 // Global Tab Switching Function (Accessible from HTML and Nav)
window.switchTab = function(targetId) {
  if (!targetId) return;

  const cleanId = targetId.replace(/^#/, '');
  const tabPages = document.querySelectorAll('.tab-page');
  const navItems = document.querySelectorAll('.nav-item');
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  // 1. Hide all tab pages
  tabPages.forEach(page => {
    page.classList.remove('active');
    page.style.cssText = 'display: none !important; opacity: 0;';
  });

  // 2. Remove active underline from navbar links
  navItems.forEach(item => item.classList.remove('active'));

  // 3. Display the target tab
  const targetPage = document.getElementById(cleanId);
  if (targetPage) {
    targetPage.classList.add('active');
    targetPage.style.cssText = 'display: block !important; opacity: 1;';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // 4. Highlight matching navbar link
  const matchingLink = document.querySelector(`.nav-item[data-tab="${cleanId}"]`) || 
                       document.querySelector(`.nav-item[href="#${cleanId}"]`);
  if (matchingLink) {
    matchingLink.classList.add('active');
  }

  // 5. Close mobile navigation drawer
  if (navLinks && menuToggle) {
    navLinks.classList.remove('open');
    menuToggle.classList.remove('is-active');
  }
};

document.addEventListener('DOMContentLoaded', () => {
  
  // ==========================================
  // 1. MOBILE NAVBAR TOGGLE
  // ==========================================
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      menuToggle.classList.toggle('is-active');
      navLinks.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        menuToggle.classList.remove('is-active');
        navLinks.classList.remove('open');
      }
    });
  }

  // ==========================================
  // 2. TAB PAGE ROUTING (SWITCH TABS ON CLICK)
  // ==========================================
  const navItems = document.querySelectorAll('.nav-item');
  const tabPages = document.querySelectorAll('.tab-page');

  window.switchTab = function(targetId) {
    if (!targetId) return;

    // Normalise ID: remove any leading #
    const cleanId = targetId.replace(/^#/, '');

    // 1. Hide all tab sections
    tabPages.forEach(page => {
      page.classList.remove('active');
      page.removeAttribute('style'); // Clear any stuck inline styles
    });

    // 2. Remove active underline from all navbar links
    navItems.forEach(item => item.classList.remove('active'));

    // 3. Find and activate target section
    const targetPage = document.getElementById(cleanId);
    if (targetPage) {
      targetPage.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // 4. Highlight matching navbar link
    const matchingLink = document.querySelector(`.nav-item[data-tab="${cleanId}"]`) || 
                         document.querySelector(`.nav-item[href="#${cleanId}"]`);
    if (matchingLink) {
      matchingLink.classList.add('active');
    }

    // 5. Close mobile drawer if open
    if (navLinks && menuToggle) {
      navLinks.classList.remove('open');
      menuToggle.classList.remove('is-active');
    }
  };

  // Nav item click handler
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const href = item.getAttribute('href') || '';
      const dataTab = item.getAttribute('data-tab') || '';
      const targetId = dataTab || href.replace('#', '');

      if (targetId) {
        window.switchTab(targetId);
        history.pushState(null, null, `#${targetId}`);
      }
    });
  });

  // Handle direct loads or browser refresh with hash
  window.addEventListener('load', () => {
    const initialHash = window.location.hash.replace('#', '');
    if (initialHash && document.getElementById(initialHash)) {
      window.switchTab(initialHash);
    } else {
      window.switchTab('tab-home');
    }
  });

  // Handle browser back/forward buttons
  window.addEventListener('popstate', () => {
    const currentHash = window.location.hash.replace('#', '');
    if (currentHash && document.getElementById(currentHash)) {
      window.switchTab(currentHash);
    } else {
      window.switchTab('tab-home');
    }
  });
  // ==========================================
  // 3. ORGANISATIONAL CHART DATABASE
  // ==========================================
  const orgData = {
    newscamp: {
      advisor: {
        role: "Penasihat",
        name: "PUAN AZLINAWATI BINTI NGAINON",
        image: "assets/advisor.jpg"
      },
      subtabs: [
        { id: "all", label: "All Committee" },
        { id: "high-comm", label: "High Committee" },
        { id: "prog-proto", label: "Program & Protocol" },
        { id: "creative", label: "Creative Team" },
        { id: "media-pub", label: "Media & Publicity" },
        { id: "logistics", label: "Logistics" },
        { id: "sponsorship", label: "Sponsorship & Partnership" },
        { id: "technical", label: "Technical" },
        { id: "hospitality", label: "Special Task & Hospitality" }
      ],
      members: [
        { name: "NUR IMAN JASMYN BINTI MOHD ZAMRI", role: "Project Director", category: "high-comm", classGroup: "5B" },
        { name: "PUTRI NUR GUSTAWINA BINTI HERMES MEDIA PUTRA", role: "Project Director", category: "high-comm", classGroup: "5C" },
        { name: "MADELIN SURAYA BINTI MOHD ASRI", role: "Secretary", category: "high-comm", classGroup: "5A" },
        { name: "SYAZWANI ATHIRAH BINTI HASNAN", role: "Assistant Secretary", category: "high-comm", classGroup: "5C" },
        { name: "NOOR ALYA NISA BINTI MD YUSRI", role: "Treasurer", category: "high-comm", classGroup: "5C" },
        { name: "MUHAMMAD FARHAN BIN RAMLAN", role: "Assistant Treasurer", category: "high-comm", classGroup: "5B" },

        { name: "UMI RABIATUL ADAWIAH BINTI MUHAMAD", role: "Head of Department 1", category: "prog-proto", classGroup: "5A" },
        { name: "NURUL SAKINAH BINTI SOFLI", role: "Head of Department 2", category: "prog-proto", classGroup: "5B" },
        { name: "SITI HUMAIRAH BINTI ABDUL RAHIM", role: "Committee Member", category: "prog-proto", classGroup: "5B" },
        { name: "AIN NUR MELISSA BINTI IBRAHIM", role: "Committee Member", category: "prog-proto", classGroup: "5C" },
        { name: "KAMELIA SHAIRA BINTI KAMARUDIN", role: "Committee Member", category: "prog-proto", classGroup: "5C" },
        { name: "NUR AMEENA BINTI AZMAN", role: "Committee Member", category: "prog-proto", classGroup: "5A" },
        { name: "SARAH HANIS WADHIHAH BINTI ZABIDI", role: "Committee Member", category: "prog-proto", classGroup: "5A" },
        { name: "NURUL FARISHA BINTI AHMAD FAISAL", role: "Committee Member", category: "prog-proto", classGroup: "5C" },
        { name: "NURUL RUSYDINA BINTI MOHD RIDUWAN", role: "Committee Member", category: "prog-proto", classGroup: "5B" },

        { name: "ASLINA", role: "Head of Department 1", category: "creative", classGroup: "5B" },
        { name: "NUR AIN DAYANA BINTI MOHD FADIL", role: "Head of Department 2", category: "creative", classGroup: "5A" },
        { name: "QURRATU AINI BINTI CHE MOHD SHAHRIL", role: "Committee Member", category: "creative", classGroup: "5A" },
        { name: "NURUL SYAHIRA BINTI AFZANIZAM", role: "Committee Member", category: "creative", classGroup: "5A" },
        { name: "NIK NUR ALYAA BINTI NIK MOHAMED", role: "Committee Member", category: "creative", classGroup: "5B" },
        { name: "NUR ATIQAH NATASYA BINTI ABD SAMAD", role: "Committee Member", category: "creative", classGroup: "5A" },
        { name: "NURR EDRINNA BINTI JUNAIDI", role: "Committee Member", category: "creative", classGroup: "5C" },
        { name: "NUR FAZLINA BINTI AMIL HASLI", role: "Committee Member", category: "creative", classGroup: "5A" },

        { name: "NURSYAZIYAH SYAZANA BINTI AHMAD", role: "Head of Department 1", category: "media-pub", classGroup: "5B" },
        { name: "NUREEN BATRISYIA IRDINA BINTI MOHD SHAM", role: "Head of Department 2", category: "media-pub", classGroup: "5C" },
        { name: "AUNI SYAFIAH BINTI MOHD AZMIZAN", role: "Committee Member", category: "media-pub", classGroup: "5A" },
        { name: "ARISSA BINTI AHMAD KHAIRUL", role: "Committee Member", category: "media-pub", classGroup: "5C" },
        { name: "AIN ZULFA BINTI ZAINIZAM", role: "Committee Member", category: "media-pub", classGroup: "5B" },
        { name: "MUHAMMAD DANISH AIMAN BIN MOHD ZUKI", role: "Committee Member", category: "media-pub", classGroup: "5B" },
        { name: "NAUFAL MUAMMAR BIN ZAIFUL HIZAM", role: "Committee Member", category: "media-pub", classGroup: "5C" },

        { name: "AHMAD FIRDAUS BIN ABDUL RAHMAN", role: "Head of Department 1", category: "logistics", classGroup: "5A" },
        { name: "NURFARAHIN BINTI MOHAMAD ZAIDI", role: "Head of Department 2", category: "logistics", classGroup: "5C" },
        { name: "MUHAMMAD NAIM BIN AZIZUL RAHMAN", role: "Committee Member", category: "logistics", classGroup: "5A" },
        { name: "AIMAN DANISH ISKANDAR BIN MOHD ZUL ISKANDAR", role: "Committee Member", category: "logistics", classGroup: "5C" },
        { name: "SITI NADIAH BINTI MAZLAN", role: "Committee Member", category: "logistics", classGroup: "5B" },

        { name: "NUR ANIS LIYANA BINTI MAT ARIS", role: "Head of Department 1", category: "sponsorship", classGroup: "5A" },
        { name: "AIN NAJIHAH BINTI KHABIL", role: "Head of Department 2", category: "sponsorship", classGroup: "5C" },
        { name: "SYASYA QISTINA BINTI MOHD HAIRUL NIZAM", role: "Committee Member", category: "sponsorship", classGroup: "5A" },
        { name: "AKMAL NABILAH BINTI SARAFUDDIN", role: "Committee Member", category: "sponsorship", classGroup: "5B" },
        { name: "FATIN NAJIHA BINTI ALI SHARIFUDDIN", role: "Committee Member", category: "sponsorship", classGroup: "5B" },
        { name: "NURIN ISABELLA BINTI ZULKAPLI", role: "Committee Member", category: "sponsorship", classGroup: "5C" },
        { name: "MUHAMMAD HAIKAL BIN YURI AZHAR", role: "Committee Member", category: "sponsorship", classGroup: "5C" },
        { name: "NUR ALIA MAISARAH BINTI AHMAD KAMAL", role: "Committee Member", category: "sponsorship", classGroup: "5C" },
        { name: "AHMAD HAZIQ BIN ROSELY", role: "Committee Member", category: "sponsorship", classGroup: "5C" },

        { name: "FATIN HANA SOLEHAH BINTI SHUHARDI", role: "Head of Department 1", category: "technical", classGroup: "5B" },
        { name: "MUHAMMAD HAZIQ BIN KHAIRUL ANUAR", role: "Head of Department 2", category: "technical", classGroup: "5B" },
        { name: "NUR ZULAIKA BINTI MOHD KAMARUL AZLAN", role: "Committee Member", category: "technical", classGroup: "5C" },
        { name: "ABDUL BASSIT BIN SASHIM@HASHIM", role: "Committee Member", category: "technical", classGroup: "5A" },
        { name: "NUR AINA FATINI BINTI NASRUDDIN", role: "Committee Member", category: "technical", classGroup: "5C" },
        { name: "NUR NADIA BINTI MOHD ROSLAN", role: "Committee Member", category: "technical", classGroup: "5C" },

        { name: "AMMAR A'FIF BIN MD A'FIFULLAH", role: "Special Task Member", category: "hospitality", classGroup: "5C" },
        { name: "ARIEQ SHAFI BIN NOR ADNAN", role: "Special Task Member", category: "hospitality", classGroup: "5B" }
      ]
    },
    editorial: {
      advisor: {
        role: "Editorial Advisor",
        name: "PUAN AZLINAWATI BINTI NGAINON",
        image: "assets/advisor.jpg"
      },
      subtabs: [
        { id: "all", label: "All Editorial" },
        { id: "editorial-exec", label: "Editorial High Committee" },
        { id: "website-team", label: "Website Team" },
        { id: "bm-desk", label: "Bahasa Melayu Section" },
        { id: "english-desk", label: "English Section" },
        { id: "infographics-social", label: "Infographics and Social Media" },
        { id: "creative-multimedia-dept", label: "Creative and Multimedia" },
        { id: "podcast-team", label: "Podcast Team" }
      ],
      members: [
        { name: "MUHAMMAD HAIKAL BIN YURI AZHAR", role: "Editor-in-Chief", category: "editorial-exec", classGroup: "5C" },
        { name: "NURFARAHIN BINTI MOHAMAD ZAIDI", role: "Deputy Editor-in-Chief", category: "editorial-exec", classGroup: "5C" },
        { name: "SITI NADIAH BINTI MAZLAN", role: "Publication Secretary", category: "editorial-exec", classGroup: "5B" },
        { name: "ABDUL BASSIT BIN SASHIM@HASHIM", role: "Managing Editor", category: "editorial-exec", classGroup: "5A" },

        { name: "NURUL SYAHIRA BINTI AFZANIZAM", role: "Website Editor (HOD)", category: "website-team", classGroup: "5A" },
        { name: "NAUFAL MUAMMAR BIN ZAIFUL HIZAM", role: "Content Editor", category: "website-team", classGroup: "5C" },
        { name: "MUHAMMAD FARHAN BIN RAMLAN", role: "Multimedia Editor", category: "website-team", classGroup: "5B" },
        { name: "SYAZWANI ATHIRAH BINTI HASNAN", role: "Multimedia Editor", category: "website-team", classGroup: "5C" },

        { name: "AIN NUR MELISSA BINTI IBRAHIM", role: "Bahasa Melayu Editor (HOD)", category: "bm-desk", classGroup: "5C" },
        { name: "AIN ZULFA BINTI ZAINIZAM", role: "Assistant Bahasa Melayu Editor", category: "bm-desk", classGroup: "5B" },
        { name: "UMI RABIATUL ADAWIAH BINTI MUHAMAD", role: "Bahasa Melayu Proofreader", category: "bm-desk", classGroup: "5A" },
        { name: "NUR FAZLINA BINTI AMIL HASLI", role: "Bahasa Melayu Journalist", category: "bm-desk", classGroup: "5A" },
        { name: "NUR AIN DAYANA BINTI MOHD FADIL", role: "Bahasa Melayu Journalist", category: "bm-desk", classGroup: "5A" },
        { name: "ARIEQ SHAFI BIN NOR ADNAN", role: "Bahasa Melayu Journalist", category: "bm-desk", classGroup: "5B" },
        { name: "NURUL RUSYDINA BINTI MOHD RIDUWAN", role: "Bahasa Melayu Journalist", category: "bm-desk", classGroup: "5B" },
        { name: "AHMAD HAZIQ BIN ROSELY", role: "Bahasa Melayu Journalist", category: "bm-desk", classGroup: "5C" },
        { name: "AMMAR A'FIF BIN MD A'FIFULLAH", role: "Bahasa Melayu Journalist", category: "bm-desk", classGroup: "5C" },
        { name: "MUHAMMAD HAZIQ BIN KHAIRUL ANUAR", role: "Bahasa Melayu Journalist", category: "bm-desk", classGroup: "5B" },
        { name: "NURR EDRINNA BINTI JUNAIDI", role: "Bahasa Melayu Journalist", category: "bm-desk", classGroup: "5C" },
        { name: "NURUL FARISHA BINTI AHMAD FAISAL", role: "Bahasa Melayu Journalist", category: "bm-desk", classGroup: "5C" },

        { name: "NUR AMEENA BINTI AZMAN", role: "English Editor (HOD)", category: "english-desk", classGroup: "5A" },
        { name: "SARAH HANIS WADHIHAH BINTI ZABIDI", role: "Assistant English Editor", category: "english-desk", classGroup: "5A" },
        { name: "SITI HUMAIRAH BINTI ABDUL RAHIM", role: "English Proofreader", category: "english-desk", classGroup: "5B" },
        { name: "AUNI SYAFIAH BINTI MOHD AZMIZAN", role: "English Journalist", category: "english-desk", classGroup: "5A" },
        { name: "MADELIN SURAYA BINTI MOHD ASRI", role: "English Journalist", category: "english-desk", classGroup: "5A" },
        { name: "NUR ANIS LIYANA BINTI MAT ARIS", role: "English Journalist", category: "english-desk", classGroup: "5A" },
        { name: "NUR ATIQAH NATASYA BINTI ABD SAMAD", role: "English Journalist", category: "english-desk", classGroup: "5A" },
        { name: "SYASYA QISTINA BINTI MOHD HAIRUL NIZAM", role: "English Journalist", category: "english-desk", classGroup: "5A" },
        { name: "FATIN HANA SOLEHAH BINTI SHUHARDI", role: "English Journalist", category: "english-desk", classGroup: "5B" },
        { name: "NUR IMAN JASMYN BINTI MOHD ZAMRI", role: "English Journalist", category: "english-desk", classGroup: "5B" },
        { name: "NUR AINA FATINI BINTI NASRUDDIN", role: "English Journalist", category: "english-desk", classGroup: "5C" },

        { name: "NURSYAZIYAH SYAZANA BINTI AHMAD", role: "Social Media Editor (HOD)", category: "infographics-social", classGroup: "5B" },
        { name: "QURRATU AINI BINTI CHE MOHD SHAHRIL", role: "Social Media Team", category: "infographics-social", classGroup: "5A" },
        { name: "MUHAMMAD DANISH AIMAN BIN MOHD ZUKI", role: "Social Media Team", category: "infographics-social", classGroup: "5B" },
        { name: "ARISSA BINTI AHMAD KHAIRUL", role: "Social Media Team", category: "infographics-social", classGroup: "5C" },
        { name: "NUR ZULAIKA BINTI MOHD KAMARUL AZLAN", role: "Infographic Editor (HOD)", category: "infographics-social", classGroup: "5C" },
        { name: "NUREEN BATRISYIA IRDINA BINTI MOHD SHAM", role: "Assistant Infographic Editor", category: "infographics-social", classGroup: "5C" },
        { name: "FATIN NAJIHA BINTI ALI SHARIFUDDIN", role: "Infographic Sub-Editor (BM)", category: "infographics-social", classGroup: "5B" },
        { name: "KAMELIA SHAIRA BINTI KAMARUDIN", role: "Infographic Sub-Editor (ENG)", category: "infographics-social", classGroup: "5C" },

        { name: "AIMAN DANISH ISKANDAR BIN MOHD ZUL ISKANDAR", role: "Creative Editor (HOD)", category: "creative-multimedia-dept", classGroup: "5C" },
        { name: "ASLINA", role: "Creative Team", category: "creative-multimedia-dept", classGroup: "5B" },
        { name: "NIK NUR ALYAA BINTI NIK MOHAMED", role: "Creative Team", category: "creative-multimedia-dept", classGroup: "5B" },
        { name: "PUTRI NUR GUSTAWINA BINTI HERMES MEDIA PUTRA", role: "Creative Team", category: "creative-multimedia-dept", classGroup: "5C" },
        { name: "NUR NADIA BINTI MOHD ROSLAN", role: "Photo Editor (HOD)", category: "creative-multimedia-dept", classGroup: "5C" },
        { name: "MUHAMMAD NAIM BIN AZIZUL RAHMAN", role: "Assistant Photo Editor", category: "creative-multimedia-dept", classGroup: "5A" },
        { name: "NOOR ALYA NISA BINTI MD YUSRI", role: "Video Editor (HOD)", category: "creative-multimedia-dept", classGroup: "5C" },
        { name: "NURUL SAKINAH BINTI SOFLI", role: "Assistant Video Editor", category: "creative-multimedia-dept", classGroup: "5B" },

        { name: "NUR ALIA MAISARAH BINTI AHMAD KAMAL", role: "Podcast Editor (HOD)", category: "podcast-team", classGroup: "5C" },
        { name: "NURIN ISABELLA BINTI ZULKAPLI", role: "Assistant Podcast Editor", category: "podcast-team", classGroup: "5C" },
        { name: "AHMAD FIRDAUS BIN ABDUL RAHMAN", role: "Podcast Team", category: "podcast-team", classGroup: "5A" },
        { name: "AKMAL NABILAH BINTI SARAFUDDIN", role: "Podcast Team", category: "podcast-team", classGroup: "5B" },
        { name: "AIN NAJIHAH BINTI KHABIL", role: "Podcast Team", category: "podcast-team", classGroup: "5C" }
      ]
    }
  };

  // ==========================================
  // 4. DIRECTORY RENDERING
  // ==========================================
  let currentMainTab = 'newscamp';
  let currentSubTab = 'all';

  const subtabsBar = document.getElementById('subtabs-bar');
  const advisorShowcase = document.getElementById('advisor-showcase');
  const dividerLabel = document.getElementById('divider-label');
  const membersGrid = document.getElementById('members-grid');
  const mainTabBtns = document.querySelectorAll('.main-tab-btn');

  function renderView() {
    const currentData = orgData[currentMainTab];
    if (!currentData) return;

    if (advisorShowcase) {
      advisorShowcase.innerHTML = `
        <div class="advisor-avatar-wrap">
          <img src="${currentData.advisor.image}" alt="${currentData.advisor.name}" class="advisor-avatar" onerror="this.src='https://via.placeholder.com/200/79040A/CCE6F7?text=Advisor'">
        </div>
        <h2 class="advisor-role">${currentData.advisor.role}</h2>
        <p class="advisor-name">${currentData.advisor.name}</p>
      `;
    }

    if (subtabsBar) {
      subtabsBar.innerHTML = currentData.subtabs.map(sub => `
        <button class="subtab-btn ${sub.id === currentSubTab ? 'active' : ''}" data-sub="${sub.id}">
          ${sub.label}
        </button>
      `).join('');

      document.querySelectorAll('.subtab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          currentSubTab = btn.dataset.sub;
          document.querySelectorAll('.subtab-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          renderMembers();
        });
      });
    }

    renderMembers();
  }

  function renderMembers() {
    const currentData = orgData[currentMainTab];
    if (!currentData || !membersGrid) return;

    if (dividerLabel) {
      const activeSubObj = currentData.subtabs.find(s => s.id === currentSubTab);
      dividerLabel.textContent = (activeSubObj && activeSubObj.id !== 'all') 
        ? activeSubObj.label.toUpperCase() 
        : (currentMainTab === 'newscamp' ? 'EXECUTIVE HIGH COMMITTEE & DEPARTMENTS' : 'EDITORIAL HIGH COMMITTEE & DESKS');
    }

    const filteredMembers = currentSubTab === 'all'
      ? currentData.members
      : currentData.members.filter(m => m.category === currentSubTab);

    membersGrid.innerHTML = filteredMembers.map(member => {
      const initial = member.name.charAt(0);
      return `
        <div class="profile-card">
          <div class="profile-avatar-wrap">
            <img src="assets/${member.name.toLowerCase().replace(/[^a-z0-9]/g, '_')}.jpg" 
                 alt="${member.name}" 
                 class="profile-avatar" 
                 onerror="this.src='https://via.placeholder.com/150/79040A/CCE6F7?text=${encodeURIComponent(initial)}'">
          </div>
          <h3 class="profile-role">${member.role}</h3>
          <p class="profile-name">${member.name}</p>
          <span class="profile-class">${member.classGroup}</span>
        </div>
      `;
    }).join('');
  }

  mainTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      mainTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentMainTab = btn.dataset.main;
      currentSubTab = 'all';
      renderView();
    });
  });

  renderView();

  // ==========================================
  // 5. EVENT MODAL POPUPS
  // ==========================================
  const eventDetails = {
    colloquium: {
      title: "The 54th Journalism e-Colloquium",
      date: "Oktober 2026",
      summary: "Acara kemuncak perkongsian hasil laporan bilik berita mahasiswa bersama panel jemputan profesional media tempatan dengan tema 'Stories That Solve'.",
      newsLink: "tab-news"
    },
    workshop: {
      title: "NewsCamp Media Workshop",
      date: "Oktober 2026",
      summary: "Sesi bengkel praktikal intensif melatih wartawan muda dalam kemahiran pelaporan berasaskan penyelesaian, etika digital, dan visualisasi data.",
      newsLink: "tab-news"
    }
  };

  window.openEventModal = function(type) {
    const data = eventDetails[type];
    if (!data) return;

    const modal = document.getElementById('event-modal');
    const modalBody = document.getElementById('modal-body');

    modalBody.innerHTML = `
      <span class="feature-badge">${data.date}</span>
      <h2 style="font-family: var(--font-display); color: var(--ci-burgundy); font-size: 1.8rem; margin: 0.5rem 0 1rem;">${data.title}</h2>
      <p style="color: #475569; font-size: 0.95rem; line-height: 1.6; margin-bottom: 1.5rem;">${data.summary}</p>
      
      <div style="background: var(--ci-light-blue); padding: 2.5rem 1rem; border-radius: 8px; text-align: center; color: var(--ci-burgundy); font-weight: 700; font-size: 0.85rem; margin-bottom: 1.5rem;">
        [ Ruang Galeri / Slideshow Foto Acara ]
      </div>

      <button onclick="closeEventModal(); switchTab('${data.newsLink}');" class="pub-link-btn" style="width: 100%; justify-content: center; background: var(--ci-burgundy); color: #fff; padding: 0.8rem; border: none;">
        Baca Liputan Berita Penuh Acara Ini &rarr;
      </button>
    `;

    modal.classList.add('active');
  };

  window.closeEventModal = function() {
    const modal = document.getElementById('event-modal');
    if (modal) modal.classList.remove('active');
  };
});
