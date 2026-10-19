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

  function switchTab(targetId) {
    // 1. Hide all pages
    tabPages.forEach(page => page.classList.remove('active'));

    // 2. Deactivate all navbar links
    navItems.forEach(item => item.classList.remove('active'));

    // 3. Show target page
    const targetPage = document.getElementById(targetId);
    if (targetPage) {
      targetPage.classList.add('active');
    }

    // 4. Highlight clicked navbar link
    const activeLink = document.querySelector(`.nav-item[data-tab="${targetId}"]`);
    if (activeLink) {
      activeLink.classList.add('active');
    }
  }

  // Attach click listener to each nav link
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault(); // Prevents jumping or breaking
      const targetId = item.getAttribute('data-tab');
      if (targetId) {
        switchTab(targetId);
        window.location.hash = targetId;
      }
    });
  });

  // Load correct tab on page refresh if URL contains a hash
  const initialHash = window.location.hash.replace('#', '');
  if (initialHash && document.getElementById(initialHash)) {
    switchTab(initialHash);
  } else {
    switchTab('tab-home');
  }
  
  // ==========================================
  // 3. ORGANISATIONAL CHART DATABASE
  // ==========================================
  const newscampData = {
  advisor: {
    name: "Puan Azlinawati binti Ngainon",
    role: "Penasihat"
  },
  executives: [
    { name: "Nur Iman Jasmyn binti Mohd Zamri", role: "Project Director" },
    { name: "Putri Nur Gustawina binti Hermes", role: "Project Director" },
    { name: "Media Putra", role: "Deputy Director" },
    { name: "Madelin Suraya binti Mohd Asri", role: "Secretary" },
    { name: "Syazwani Athirah binti Hasnan", role: "Assistant Secretary" },
    { name: "Noor Alya Nisa binti Md Yusri", role: "Treasurer" },
    { name: "Muhammad Farhan bin Ramlan", role: "Assistant Treasurer" }
  ],
  departments: [
    {
      id: "prog-proto",
      label: "Program & Protocol",
      departmentName: "Program & Protocol // Corp Comm",
      head1: { name: "Umi Rabiatul Adawiah binti Muhamad", role: "Head of Department 1" },
      head2: { name: "Nurul Sakinah binti Sofli", role: "Head of Department 2" },
      members: [
        "Siti Humairah binti Abdul Rahim",
        "Ain Nur Melissa binti Ibrahim",
        "Kamelia Shaira binti Kamarudin",
        "Nur Ameena binti Azman",
        "Sarah Hanis Wadhibah binti Zabidi",
        "Nurul Farisha binti Ahmad Faisal",
        "Nurul Rusydina binti Mohd Riduwan"
      ]
    },
    {
      id: "creative",
      label: "Creative Team",
      departmentName: "Creative Team",
      head1: { name: "Aslina", role: "Head of Department 1" },
      head2: { name: "Nur Ain Dayana binti Mohd Fadil", role: "Head of Department 2" },
      members: [
        "Qurratu Aini binti Che Mohd Shahril",
        "Nurul Syahira binti Afzanizam",
        "Nik Nur Alyaa binti Nik Mohamed",
        "Nur Atiqah Natasya binti Abd Samad",
        "Nurr Edrinna binti Junaidi",
        "Nur Fazlina binti Amil Hasli"
      ]
    },
    {
      id: "media-pub",
      label: "Media & Publicity",
      departmentName: "Media and Publicity",
      head1: { name: "Nursyaziyah Syazana binti Ahmad", role: "Head of Department 1" },
      head2: { name: "Nureen Batrisyia Irdina binti Sham Mohd", role: "Head of Department 2" },
      members: [
        "Auni Syafiah binti Mohd Azmizan",
        "Arissa binti Ahmad Khairul",
        "Ain Zulfa binti Zainizam",
        "Muhammad Danish Aiman bin Mohd Zuki",
        "Naufal Muammar bin Zaiful Hizam"
      ]
    },
    {
      id: "logistics",
      label: "Logistics",
      departmentName: "Logistics",
      head1: { name: "Ahmad Firdaus bin Abdul Rahman", role: "Head of Department 1" },
      head2: { name: "Nurfarahin binti Mohamad Zaidi", role: "Head of Department 2" },
      members: [
        "Muhammad Naim bin Azizul Rahman",
        "Aiman Danish Iskandar bin Mohd Zul Iskandar",
        "Siti Nadiah binti Mazlan"
      ]
    },
    {
      id: "sponsorship",
      label: "Sponsorship & Partnership",
      departmentName: "Sponsorship and Partnership",
      head1: { name: "Nur Anis Liyana binti Mat Aris", role: "Head of Department 1" },
      head2: { name: "Ain Najihah binti Khabil", role: "Head of Department 2" },
      members: [
        "Syasya Qistina binti Mohd Hairul Nizam",
        "Akmal Nabilah binti Sarafuddin",
        "Fatin Najiha binti Ali Sharifuddin",
        "Nurin Isabella binti Zulkapli",
        "Muhammad Haikal bin Yuri Azhar",
        "Nur Alia Maisarah binti Ahmad Kamal",
        "Ahmad Haziq bin Rosely"
      ]
    },
    {
      id: "technical",
      label: "Technical",
      departmentName: "Technical",
      head1: { name: "Fatin Hana Solehah binti Shuhardi", role: "Head of Department 1" },
      head2: { name: "Muhammad Haziq bin Khairul Anuar", role: "Head of Department 2" },
      members: [
        "Nur Zulaika binti Mohd Kamarul Azlan",
        "Abdul Bassit bin Sashim@Hashim",
        "Nur Aina Fatini binti Nasruddin",
        "Nur Nadia binti Mohd Roslan"
      ]
    },
    {
      id: "hospitality",
      label: "Special Task & Hospitality",
      departmentName: "Special Task and Hospitality",
      head1: null,
      head2: null,
      members: [
        "Ammar A'fif bin Md A'fifullah",
        "Arieq Shafi bin Nor Adnan"
      ]
    }
  ]
};
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
