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

  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();

      const href = item.getAttribute('href');
      if (!href || !href.startsWith('#')) return;

      const targetTabId = href.replace('#', '');
      const targetPage = document.getElementById(targetTabId);

      if (targetPage) {
        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');

        tabPages.forEach(page => page.classList.remove('active'));
        targetPage.classList.add('active');

        if (menuToggle && navLinks) {
          menuToggle.classList.remove('is-active');
          navLinks.classList.remove('open');
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });

  // ==========================================
  // 3. ORGANISATIONAL CHART DATABASE
  // ==========================================
  const orgData = {
    newscamp: {
      advisor: {
        role: "Project Advisor",
        name: "AZLINAWATI NGAINON",
        image: "assets/advisor.jpg"
      },
      subtabs: [
        { id: "all", label: "All Committees" },
        { id: "high-committee", label: "Executive High Committee" },
        { id: "program-protocol", label: "Program and Protocol" },
        { id: "creative-design", label: "Creative and Design" },
        { id: "multimedia-publicity", label: "Multimedia and Publicity" },
        { id: "logistics", label: "Logistics" },
        { id: "technical", label: "Technical" },
        { id: "sponsorship", label: "Sponsorship" }
      ],
      members: [
        // Executive High Committee
        { name: "NUR IMAN JASMYN BINTI MOHD ZAMRI", role: "Project Director", category: "high-committee", classGroup: "5B" },
        { name: "PUTRI NUR GUSTAWINA BINTI HERMES MEDIA PUTRA", role: "Deputy Project Director", category: "high-committee", classGroup: "5C" },
        { name: "MADELIN SURAYA BINTI MOHD ASRI", role: "Secretary", category: "high-committee", classGroup: "5A" },
        { name: "SYAZWANI ATHIRAH BINTI HASNAN", role: "Vice Secretary", category: "high-committee", classGroup: "5C" },
        { name: "NOOR ALYA NISA BINTI MD YUSRI", role: "Treasurer", category: "high-committee", classGroup: "5C" },
        { name: "MUHAMMAD FARHAN BIN RAMLAN", role: "Vice Treasurer", category: "high-committee", classGroup: "5B" },

        // Program and Protocol
        { name: "UMI RABIATUL ADAWIAH BINTI MUHAMAD", role: "Head of Department I", category: "program-protocol", classGroup: "5A" },
        { name: "NURUL SAKINAH BINTI SOFLI", role: "Head of Department II", category: "program-protocol", classGroup: "5B" },
        { name: "SITI HUMAIRAH BINTI ABDUL RAHIM", role: "Program and Protocol Committee", category: "program-protocol", classGroup: "5B" },
        { name: "AIN NUR MELISSA BINTI IBRAHIM", role: "Program and Protocol Committee", category: "program-protocol", classGroup: "5C" },
        { name: "KAMELIA SHAIRA BINTI KAMARUDIN", role: "Program and Protocol Committee", category: "program-protocol", classGroup: "5C" },
        { name: "NUR AMEENA BINTI AZMAN", role: "Program and Protocol Committee", category: "program-protocol", classGroup: "5A" },
        { name: "SARAH HANIS WADHIHAH BT ZABIDI", role: "Program and Protocol Committee", category: "program-protocol", classGroup: "5A" },
        { name: "NURUL FARISHA BINTI AHMAD FAISAL", role: "Program and Protocol Committee", category: "program-protocol", classGroup: "5C" },
        { name: "NURUL RUSYDINA BINTI MOHD RIDUWAN", role: "Program and Protocol Committee", category: "program-protocol", classGroup: "5B" },

        // Creative and Design
        { name: "ASLINA", role: "Head of Department I", category: "creative-design", classGroup: "5B" },
        { name: "NUR AIN DAYANA BINTI MOHD FADIL", role: "Head of Department II", category: "creative-design", classGroup: "5A" },
        { name: "QURRATU AINI BINTI CHE MOHD SHAHRIL", role: "Creative and Design Committee", category: "creative-design", classGroup: "5A" },
        { name: "NURUL SYAHIRA BINTI AFZANIZAM", role: "Creative and Design Committee", category: "creative-design", classGroup: "5A" },
        { name: "NIK NUR ALYAA BINTI NIK MOHAMED", role: "Creative and Design Committee", category: "creative-design", classGroup: "5B" },
        { name: "NUR ATIQAH NATASYA BINTI ABD SAMAD", role: "Creative and Design Committee", category: "creative-design", classGroup: "5A" },
        { name: "NURR EDRINNA BINTI JUNAIDI", role: "Creative and Design Committee", category: "creative-design", classGroup: "5C" },
        { name: "NUR FAZLINA BINTI AMIL HASLI", role: "Creative and Design Committee", category: "creative-design", classGroup: "5A" },

        // Multimedia and Publicity
        { name: "NURSYAZIYAH SYAZANA BINTI AHMAD", role: "Head of Department I", category: "multimedia-publicity", classGroup: "5B" },
        { name: "NUREEN BATRISYIA IRDINA BINTI MOHD SHAM", role: "Head of Department II", category: "multimedia-publicity", classGroup: "5C" },
        { name: "AUNI SYAFIAH BINTI MOHD AZMIZAN", role: "Multimedia and Publicity Committee", category: "multimedia-publicity", classGroup: "5A" },
        { name: "ARISSA BINTI AHMAD KHAIRUL", role: "Multimedia and Publicity Committee", category: "multimedia-publicity", classGroup: "5C" },
        { name: "AIN ZULFA BINTI ZAINIZAM", role: "Multimedia and Publicity Committee", category: "multimedia-publicity", classGroup: "5B" },
        { name: "MUHAMMAD DANISH AIMAN BIN MOHD ZUKI", role: "Multimedia and Publicity Committee", category: "multimedia-publicity", classGroup: "5B" },
        { name: "AIMAN DANISH ISKANDAR BIN MOHD ZUL ISKANDAR", role: "Multimedia and Publicity Committee", category: "multimedia-publicity", classGroup: "5C" },

        // Logistics
        { name: "AMMAR A'FIF BIN MD A'FIFULLAH", role: "Head of Department I", category: "logistics", classGroup: "5C" },
        { name: "NURFARAHIN BINTI MOHAMAD ZAIDI", role: "Head of Department II", category: "logistics", classGroup: "5C" },
        { name: "MUHAMMAD NAIM BIN AZIZUL RAHMAN", role: "Logistics Committee", category: "logistics", classGroup: "5A" },
        { name: "AHMAD FIRDAUS BIN ABDUL RAHMAN", role: "Logistics Committee", category: "logistics", classGroup: "5A" },
        { name: "NAUFAL MUAMMAR BIN ZAIFUL HIZAM", role: "Logistics Committee", category: "logistics", classGroup: "5C" },
        { name: "AHMAD HAZIQ BIN ROSELY", role: "Logistics Committee", category: "logistics", classGroup: "5C" },
        { name: "ARIEQ SHAFI BIN NOR ADNAN", role: "Logistics Committee", category: "logistics", classGroup: "5B" },

        // Technical
        { name: "FATIN HANA SOLEHAH BINTI SHUHARDI", role: "Head of Department I", category: "technical", classGroup: "5B" },
        { name: "MUHAMMAD HAZIQ BIN KHAIRUL ANUAR", role: "Head of Department II", category: "technical", classGroup: "5B" },
        { name: "NUR ZULAIKA BINTI MOHD KAMARUL AZLAN", role: "Technical Committee", category: "technical", classGroup: "5C" },
        { name: "ABDUL BASSIT BIN SASHIM@HASHIM", role: "Technical Committee", category: "technical", classGroup: "5A" },
        { name: "NUR AINA FATINI BINTI NASRUDDIN", role: "Technical Committee", category: "technical", classGroup: "5C" },
        { name: "NUR NADIA BINTI MOHD ROSLAN", role: "Technical Committee", category: "technical", classGroup: "5C" },

        // Sponsorship
        { name: "NUR ANIS LIYANA BINTI MAT ARIS", role: "Head of Department I", category: "sponsorship", classGroup: "5A" },
        { name: "AIN NAJIHAH BINTI KHABIL", role: "Head of Department II", category: "sponsorship", classGroup: "5C" },
        { name: "SYASYA QISTINA BINTI MOHD HAIRUL NIZAM", role: "Sponsorship Committee", category: "sponsorship", classGroup: "5A" },
        { name: "AKMAL NABILAH BINTI SARAFUDDIN", role: "Sponsorship Committee", category: "sponsorship", classGroup: "5B" },
        { name: "FATIN NAJIHA BINTI ALI SHARIFUDDIN", role: "Sponsorship Committee", category: "sponsorship", classGroup: "5B" },
        { name: "NURIN ISABELLA BINTI ZULKAPLI", role: "Sponsorship Committee", category: "sponsorship", classGroup: "5C" },
        { name: "MUHAMMAD HAIKAL BIN YURI AZHAR", role: "Sponsorship Committee", category: "sponsorship", classGroup: "5C" },
        { name: "SITI NADIAH BINTI MAZLAN", role: "Sponsorship Committee", category: "sponsorship", classGroup: "5B" },
        { name: "NUR ALIA MAISARAH BINTI AHMAD KAMAL", role: "Sponsorship Committee", category: "sponsorship", classGroup: "5C" }
      ]
    },
    editorial: {
      advisor: {
        role: "Editorial Advisor",
        name: "AZLINAWATI NGAINON",
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
        { id: "podcast-broadcast", label: "Podcast Team" }
      ],
      members: [
        // Editorial High Committee
        { name: "MUHAMMAD HAIKAL BIN YURI AZHAR", role: "Editor-in-Chief", category: "editorial-exec", classGroup: "5C" },
        { name: "NURFARAHIN BINTI MOHAMAD ZAIDI", role: "Deputy Editor-in-Chief", category: "editorial-exec", classGroup: "5C" },
        { name: "SITI NADIAH BINTI MAZLAN", role: "Publication Secretary", category: "editorial-exec", classGroup: "5B" },
        { name: "ABDUL BASSIT BIN SASHIM@HASHIM", role: "Managing Editor", category: "editorial-exec", classGroup: "5A" },

        // Website Team
        { name: "NURUL SYAHIRA BINTI AFZANIZAM", role: "Website Editor (HOD)", category: "website-team", classGroup: "5A" },
        { name: "NAUFAL MUAMMAR BIN ZAIFUL HIZAM", role: "Content Editor", category: "website-team", classGroup: "5C" },
        { name: "MUHAMMAD FARHAN BIN RAMLAN", role: "Multimedia Editor", category: "website-team", classGroup: "5B" },
        { name: "SYAZWANI ATHIRAH BINTI HASNAN", role: "Multimedia Editor", category: "website-team", classGroup: "5C" },

        // Bahasa Melayu Section
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

        // English Section
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

        // Infographics and Social Media
        { name: "NURSYAZIYAH SYAZANA BINTI AHMAD", role: "Social Media Editor (HOD)", category: "infographics-social", classGroup: "5B" },
        { name: "QURRATU AINI BINTI CHE MOHD SHAHRIL", role: "Social Media Team", category: "infographics-social", classGroup: "5A" },
        { name: "MUHAMMAD DANISH AIMAN BIN MOHD ZUKI", role: "Social Media Team", category: "infographics-social", classGroup: "5B" },
        { name: "ARISSA BINTI AHMAD KHAIRUL", role: "Social Media Team", category: "infographics-social", classGroup: "5C" },
        { name: "NUR ZULAIKA BINTI MOHD KAMARUL AZLAN", role: "Infographic Editor (HOD)", category: "infographics-social", classGroup: "5C" },
        { name: "NUREEN BATRISYIA IRDINA BINTI MOHD SHAM", role: "Assistant Infographic Editor", category: "infographics-social", classGroup: "5C" },
        { name: "FATIN NAJIHA BINTI ALI SHARIFUDDIN", role: "Infographic Sub-Editor (BM)", category: "infographics-social", classGroup: "5B" },
        { name: "KAMELIA SHAIRA BINTI KAMARUDIN", role: "Infographic Sub-Editor (ENG)", category: "infographics-social", classGroup: "5C" },

        // Creative and Multimedia
        { name: "AIMAN DANISH ISKANDAR BIN MOHD ZUL ISKANDAR", role: "Creative Editor (HOD)", category: "creative-multimedia-dept", classGroup: "5C" },
        { name: "ASLINA", role: "Creative Team", category: "creative-multimedia-dept", classGroup: "5B" },
        { name: "NIK NUR ALYAA BINTI NIK MOHAMED", role: "Creative Team", category: "creative-multimedia-dept", classGroup: "5B" },
        { name: "PUTRI NUR GUSTAWINA BINTI HERMES MEDIA PUTRA", role: "Creative Team", category: "creative-multimedia-dept", classGroup: "5C" },
        { name: "NUR NADIA BINTI MOHD ROSLAN", role: "Photo Editor (HOD)", category: "creative-multimedia-dept", classGroup: "5C" },
        { name: "MUHAMMAD NAIM BIN AZIZUL RAHMAN", role: "Assistant Photo Editor", category: "creative-multimedia-dept", classGroup: "5A" },
        { name: "NOOR ALYA NISA BINTI MD YUSRI", role: "Video Editor (HOD)", category: "creative-multimedia-dept", classGroup: "5C" },
        { name: "NURUL SAKINAH BINTI SOFLI", role: "Assistant Video Editor", category: "creative-multimedia-dept", classGroup: "5B" },

        // Podcast Team
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

    // Render Advisor
    if (advisorShowcase) {
      advisorShowcase.innerHTML = `
        <div class="advisor-avatar-wrap">
          <img src="${currentData.advisor.image}" alt="${currentData.advisor.name}" class="advisor-avatar" onerror="this.src='https://via.placeholder.com/200/79040A/CCE6F7?text=Advisor'">
        </div>
        <h2 class="advisor-role">${currentData.advisor.role}</h2>
        <p class="advisor-name">${currentData.advisor.name}</p>
      `;
    }

    // Render Subtabs
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

  // Handle Main Switcher Toggle
  mainTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      mainTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentMainTab = btn.dataset.main;
      currentSubTab = 'all';
      renderView();
    });
  });

  // Run initial render
  renderView();
});
