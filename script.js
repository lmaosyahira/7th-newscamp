// ==========================================
// 1. GLOBAL TAB SWITCHING FUNCTION
// ==========================================
window.switchTab = function(targetId) {
  if (!targetId) return;

  const cleanId = targetId.replace(/^#/, '');
  const tabPages = document.querySelectorAll('.tab-page');
  const navItems = document.querySelectorAll('.nav-item');
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  // Hide all tab pages
  tabPages.forEach(page => {
    page.classList.remove('active');
    page.style.cssText = 'display: none !important; opacity: 0;';
  });

  // Remove active underline from navbar links
  navItems.forEach(item => item.classList.remove('active'));

  // Display the target tab
  const targetPage = document.getElementById(cleanId);
  if (targetPage) {
    targetPage.classList.add('active');
    targetPage.style.cssText = 'display: block !important; opacity: 1;';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Highlight matching navbar link
  const matchingLink = document.querySelector(`.nav-item[data-tab="${cleanId}"]`) || 
                       document.querySelector(`.nav-item[href="#${cleanId}"]`);
  if (matchingLink) {
    matchingLink.classList.add('active');
  }

  // Close mobile navigation drawer
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
  // 2. TAB PAGE ROUTING (NAV EVENT LISTENERS)
  // ==========================================
  const navItems = document.querySelectorAll('.nav-item');

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
        role: "Advisor",
        name: "PUAN AZLINAWATI BINTI NGAINON",
        image: "assets/ADVISOR_EVENT.gif"
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
        image: "assets/ADVISOR_EVENT.jpg"
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
        { name: "MUHAMMAD DANISH AIMAN BIN MOHD ZUKI", role: "Content Editor", category: "website-team", classGroup: "5C" },
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
        { name: "NAUFAL MUAMMAR BIN ZAIFUL HIZAM", role: "Social Media Team", category: "infographics-social", classGroup: "5B" },
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
      // Show advisor image ONLY on the NewsCamp Committee tab
      const showAdvisorImage = currentMainTab === 'newscamp' && currentData.advisor.image;

      advisorShowcase.innerHTML = `
        <div class="profile-card" style="max-width: 300px; margin: 0 auto;">
          ${showAdvisorImage ? `
            <div class="profile-avatar-wrap">
              <img src="${currentData.advisor.image}" 
                   alt="${currentData.advisor.name}" 
                   class="profile-avatar"
                   onerror="this.parentElement.style.display='none';">
            </div>
          ` : ''}
          <h3 class="profile-role">${currentData.advisor.role}</h3>
          <p class="profile-name">${currentData.advisor.name}</p>
        </div>
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
      const imageName = member.name.toLowerCase().replace(/[^a-z0-9]/g, '_');
      // Render image wrap ONLY for Committee members
      const showMemberImage = currentMainTab === 'newscamp';

      return `
        <div class="profile-card">
          ${showMemberImage ? `
            <div class="profile-avatar-wrap">
              <img src="assets/${imageName}.jpg" 
                   alt="${member.name}" 
                   class="profile-avatar" 
                   onerror="this.parentElement.style.display='none';">
            </div>
          ` : ''}
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
// 5. EVENT MODAL POPUPS (SLIDESHOW DESIGN)
// ==========================================
let currentSlideIndex = 0;

const eventDetails = {
  colloquium: {
    badge: "E-COLLOQUIUM 2026",
    title: "ENOUGH BAD NEWS?",
    subtitle: "Rethinking Journalism Through Solutions & Visual Storytelling",
    description: "Virtual sessions connect industry experts and alumni with audiences locally and internationally, enabling meaningful exchanges of knowledge and experience.",
    posterImg: "assets/ECOLL_POSTER.png",
    overview: {
      date: "3 November 2026",
      time: "10:00 A.M. (MYT)",
      platform: "Streaming Live on YouTube (@Journalism Colloquium)"
    },
    speakers: [
      {
        type: "PANELIST",
        name: "Kyuwon Lee",
        role: "Training & Curriculum Manager, Solutions Journalism Network",
        image: "assets/KYUWON_LEE.png"
      },
      {
        type: "PANELIST",
        name: "Aizuddin Saad",
        role: "Mainstream Media Practitioner",
        image: "assets/AIZUDDIN_SAAD.png"
      },
      {
        type: "PANELIST",
        name: "Shamshahrin Shamsudin",
        role: "Photojournalist",
        image: "assets/SHAMSHAHRIN.png"
      },
      {
        type: "MODERATOR",
        name: "Nur Amira Afrina",
        role: "Journalist",
        image: "assets/AMIRA_AFRINA.png"
      }
    ],
    gallery: Array.from({ length: 17 }, (_, i) => `assets/ECOLLOQUIUM_PHOTOS (${i + 1}).png`),
    newsLink: "tab-news"
  },
  workshop: {
    badge: "MEDIA WORKSHOP 2026",
    title: "NEWSROOM SKILLS WORKSHOP",
    subtitle: "Digital Verification & Data Journalism",
    description: "Hands-on intensive workshop preparing student journalists with modern verification tools, ethics, and visual reporting techniques.",
    posterImg: "assets/dummy_photo.jpg",
    overview: {
      date: "October 2026",
      time: "2:00 P.M. - 5:00 P.M.",
      platform: "Media Lab 1, FCMS UiTM"
    },
    speakers: [],
    gallery: [],
    newsLink: "tab-news"
  }
};

window.openEventModal = function(type) {
  const data = eventDetails[type];
  if (!data) return;

  currentSlideIndex = 0; // Reset slideshow to first image

  const modal = document.getElementById('event-modal');
  const modalBody = document.getElementById('modal-body');

  const speakersHTML = data.speakers.length > 0 ? `
    <div class="modal-speakers-section">
      <div class="modal-section-tag">FEATURED SPEAKERS</div>
      <h3 class="modal-section-title">Meet the Panelists & Moderator</h3>
      <div class="modal-speakers-grid">
        ${data.speakers.map(s => `
          <div class="speaker-card">
            <div class="speaker-img-wrap">
              <img src="${s.image}" alt="${s.name}" class="speaker-img" onerror="this.src='assets/ADVISOR_EVENT_2.jpg'">
            </div>
            <div class="speaker-card-body">
              <span class="speaker-tag">${s.type}</span>
              <h4 class="speaker-name">${s.name}</h4>
              <p class="speaker-role">${s.role}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  ` : '';

  // Photo Gallery Slideshow Markup
  const galleryHTML = data.gallery && data.gallery.length > 0 ? `
    <div class="modal-gallery-section">
      <div class="modal-section-tag">EVENT HIGHLIGHTS</div>
      <h3 class="modal-section-title">Photo Gallery</h3>
      
      <div class="slideshow-container">
        <div class="slideshow-track" id="slideshow-track">
          ${data.gallery.map((imgSrc, index) => `
            <div class="slide ${index === 0 ? 'active' : ''}">
              <img src="${imgSrc}" 
                   alt="Colloquium Slide ${index + 1}" 
                   class="slide-img" 
                   onerror="this.src='assets/ECOLLOQUIUM_PHOTOS (${index + 1}).jpg'; this.onerror=function(){this.src='assets/dummy_photo.jpg';};">
            </div>
          `).join('')}
        </div>

        <!-- Navigation Controls -->
        <button class="slide-prev" onclick="moveSlide(-1)">&#10094;</button>
        <button class="slide-next" onclick="moveSlide(1)">&#10095;</button>

        <!-- Slide Indicators -->
        <div class="slide-dots">
          ${data.gallery.map((_, index) => `
            <span class="dot ${index === 0 ? 'active' : ''}" onclick="goToSlide(${index})"></span>
          `).join('')}
        </div>
      </div>
    </div>
  ` : '';

  modalBody.innerHTML = `
    <!-- Top Dark Hero Header -->
    <div class="modal-hero-banner">
      <span class="modal-hero-badge">${data.badge}</span>
      <h1 class="modal-hero-title">${data.title}</h1>
      <h2 class="modal-hero-subtitle">${data.subtitle}</h2>
      <p class="modal-hero-desc">${data.description}</p>
    </div>

    <!-- Event Overview & Poster Grid -->
    <div class="modal-content-grid">
      <div class="modal-poster-wrap">
        <img src="${data.posterImg}" alt="${data.title}" class="modal-poster-img" onerror="this.src='assets/dummy_photo.jpg'">
      </div>
      <div class="modal-details-card">
        <div class="modal-section-tag">SESSION DETAILS</div>
        <h3 class="modal-section-title">Colloquium Overview</h3>
        <ul class="event-meta-list">
          <li><strong>📅 Date:</strong> ${data.overview.date}</li>
          <li><strong>⏰ Time:</strong> ${data.overview.time}</li>
          <li><strong>📍 Platform:</strong> ${data.overview.platform}</li>
        </ul>
      </div>
    </div>

    <!-- Featured Speakers Grid -->
    ${speakersHTML}

    <!-- Photo Gallery Slideshow -->
    ${galleryHTML}

    <!-- Action Button -->
    <div style="margin-top: 2rem;">
      <button onclick="closeEventModal(); window.switchTab('${data.newsLink}');" class="modal-action-btn">
        Read Full Coverage of This Event &rarr;
      </button>
    </div>
  `;

  modal.classList.add('active');
};

window.closeEventModal = function() {
  const modal = document.getElementById('event-modal');
  if (modal) modal.classList.remove('active');
};

// Slideshow Controls
window.moveSlide = function(direction) {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  if (!slides.length) return;

  slides[currentSlideIndex].classList.remove('active');
  if (dots[currentSlideIndex]) dots[currentSlideIndex].classList.remove('active');

  currentSlideIndex = (currentSlideIndex + direction + slides.length) % slides.length;

  slides[currentSlideIndex].classList.add('active');
  if (dots[currentSlideIndex]) dots[currentSlideIndex].classList.add('active');
};

window.goToSlide = function(index) {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  if (!slides.length) return;

  slides[currentSlideIndex].classList.remove('active');
  if (dots[currentSlideIndex]) dots[currentSlideIndex].classList.remove('active');

  currentSlideIndex = index;

  slides[currentSlideIndex].classList.add('active');
  if (dots[currentSlideIndex]) dots[currentSlideIndex].classList.add('active');
};

// ==========================================
// 6. NEWS ARTICLE SUB-ROUTING
// ==========================================
window.openNewsArticle = function(articleId) {
  const dirView = document.getElementById('news-directory-view');
  const articleView = document.getElementById('news-article-view');

  if (dirView && articleView) {
    dirView.style.display = 'none';
    articleView.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

window.closeNewsArticle = function() {
  const dirView = document.getElementById('news-directory-view');
  const articleView = document.getElementById('news-article-view');

  if (dirView && articleView) {
    articleView.style.display = 'none';
    dirView.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

// ==========================================
// 7. NEWS+ SUB-ROUTING
// ==========================================
window.openNewsPlusArticle = function(id) {
  const dirView = document.getElementById('newsplus-directory-view');
  const articleView = document.getElementById('newsplus-article-view');
  if (dirView && articleView) {
    dirView.style.display = 'none';
    articleView.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

window.closeNewsPlusArticle = function() {
  const dirView = document.getElementById('newsplus-directory-view');
  const articleView = document.getElementById('newsplus-article-view');
  if (dirView && articleView) {
    articleView.style.display = 'none';
    dirView.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

// ==========================================
// 8. PODCAST SUB-ROUTING
// ==========================================
window.openPodcastEpisode = function(id) {
  const dirView = document.getElementById('podcast-directory-view');
  const episodeView = document.getElementById('podcast-episode-view');
  if (dirView && episodeView) {
    dirView.style.display = 'none';
    episodeView.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

window.closePodcastEpisode = function() {
  const dirView = document.getElementById('podcast-directory-view');
  const episodeView = document.getElementById('podcast-episode-view');
  if (dirView && episodeView) {
    episodeView.style.display = 'none';
    dirView.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

// ==========================================
// BACK TO TOP BUTTON LOGIC
// ==========================================

const backToTopBtn = document.getElementById('back-to-top-btn');

// Show/hide button based on scroll position
window.addEventListener('scroll', () => {
  if (backToTopBtn) {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }
});

// Smooth Scroll to Top Function
window.scrollToTop = function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

// ==========================================
// SUBTAB FILTERING FOR NEWS, NEWS+, & PODCAST
// ==========================================

// 1. News Subtab Switcher (BM / English)
document.querySelectorAll('[data-news-lang]').forEach(btn => {
  btn.addEventListener('click', (e) => {
    document.querySelectorAll('[data-news-lang]').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    
    const lang = e.target.getAttribute('data-news-lang');
    filterArticles('news-grid', lang);
  });
});

// 2. News+ Subtab Switcher (BM / English)
document.querySelectorAll('[data-newsplus-lang]').forEach(btn => {
  btn.addEventListener('click', (e) => {
    document.querySelectorAll('[data-newsplus-lang]').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    
    const lang = e.target.getAttribute('data-newsplus-lang');
    filterArticles('newsplus-grid', lang);
  });
});

// 3. Podcast Subtab Switcher (Audio / Video)
document.querySelectorAll('[data-podcast-type]').forEach(btn => {
  btn.addEventListener('click', (e) => {
    document.querySelectorAll('[data-podcast-type]').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    
    const type = e.target.getAttribute('data-podcast-type');
    filterArticles('podcast-grid', type);
  });
});

// Generic Grid Filtering Function
function filterArticles(gridId, filterValue) {
  const grid = document.getElementById(gridId);
  if (!grid) return;

  const cards = grid.querySelectorAll('.article-card, .podcast-card');
  cards.forEach(card => {
    const cardCategory = card.getAttribute('data-category') || '';
    if (filterValue === 'all' || cardCategory === filterValue) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// 1. News Subtab Filtering (BM vs English)
  document.querySelectorAll('[data-news-lang]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('[data-news-lang]').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      filterGrid('news-grid', e.target.getAttribute('data-news-lang'));
    });
  });

  // 2. News+ Subtab Filtering (BM vs English)
  document.querySelectorAll('[data-newsplus-lang]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('[data-newsplus-lang]').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      filterGrid('newsplus-grid', e.target.getAttribute('data-newsplus-lang'));
    });
  });

  // 3. Podcast Subtab Filtering (Audio vs Video)
  document.querySelectorAll('[data-podcast-type]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('[data-podcast-type]').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      filterGrid('podcast-grid', e.target.getAttribute('data-podcast-type'));
    });
  });

  function filterGrid(gridId, filterVal) {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    const cards = grid.querySelectorAll('.article-card');
    cards.forEach(card => {
      const cat = card.getAttribute('data-category');
      if (filterVal === 'all' || cat === filterVal) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  }
});