document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. MOBILE NAVIGATION TOGGLE
  // ==========================================
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-item').forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }

  // ==========================================
  // 2. TAB PAGE ROUTING & NAVIGATION
  // ==========================================
  window.switchTab = function(tabId) {
    const targetSection = document.getElementById(tabId);
    if (!targetSection) return;

    document.querySelectorAll('.tab-page').forEach(sec => sec.classList.remove('active'));
    targetSection.classList.add('active');

    document.querySelectorAll('.nav-item').forEach(link => {
      if (link.getAttribute('data-tab') === tabId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  document.querySelectorAll('.nav-item').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetTab = link.getAttribute('data-tab');
      if (targetTab) {
        window.location.hash = targetTab;
        window.switchTab(targetTab);
      }
    });
  });

  window.addEventListener('load', () => {
    const initialHash = window.location.hash.replace('#', '');
    if (initialHash && document.getElementById(initialHash)) {
      window.switchTab(initialHash);
    } else {
      window.switchTab('tab-home');
    }
  });

  window.addEventListener('popstate', () => {
    const currentHash = window.location.hash.replace('#', '');
    if (currentHash && document.getElementById(currentHash)) {
      window.switchTab(currentHash);
    }
  });

  // ==========================================
  // 3. ORGANISATIONAL STRUCTURE DATA
  // ==========================================
  const orgData = {
    newscamp: {
      advisor: {
        role: "PROJECT ADVISOR",
        name: "PUAN AZLINAWATI BINTI NGAINON",
        team: "ADVISORY BOARD",
        isHod: false,
        video: "ADVISOR_EVENT.mp4",
        image: "assets/ADVISOR_EVENT.jpg"
      },
      subtabs: [
        { id: "all", label: "All Members" },
        { id: "high-comm", label: "High Committee" },
        { id: "protocol", label: "Protocol & Event" },
        { id: "curriculum", label: "Creative Team" },
        { id: "publicity", label: "Media & Publicity" },
        { id: "sponsorship", label: "Sponsorship & Partnership" },
        { id: "logistics", label: "Logistics" },
        { id: "technical", label: "Technical" },
        { id: "hospitality", label: "Special Task & Hospitality" }
      ],
      members: [
        // High Committee
        { name: "NUR IMAN JASMYN BINTI MOHD ZAMRI", role: "Project Director", team: "High Committee", isHod: false, category: "high-comm", classGroup: "5B", video: "JASMYN_EVENT.mp4" },
        { name: "PUTRI NUR GUSTAWINA BINTI HERMES MEDIA PUTRA", role: "Deputy Director", team: "High Committee", isHod: false, category: "high-comm", classGroup: "5C", video: "GUS_EVENT.mp4" },
        { name: "MADELIN SURAYA BINTI MOHD ASRI", role: "Secretary", team: "High Committee", isHod: false, category: "high-comm", classGroup: "5A", video: "LIN_EVENT.mp4" },
        { name: "SYAZWANI ATHIRAH BINTI HASNAN", role: "Assistant Secretary", team: "High Committee", isHod: false, category: "high-comm", classGroup: "5C", video: "WANI_EVENT.mp4" },
        { name: "NOOR ALYA NISA BINTI MD YUSRI", role: "Treasurer", team: "High Committee", isHod: false, category: "high-comm", classGroup: "5C", video: "NISA_EVENT.mp4" },
        { name: "MUHAMMAD FARHAN BIN RAMLAN", role: "Assistant Treasurer", team: "High Committee", isHod: false, category: "high-comm", classGroup: "5B", video: "HAN_EVENT.mp4" },

        // Program & Protocol // Corp Comm
        { name: "UMI RABIATUL ADAWIAH BINTI MUHAMAD", role: "Head of Department 1", team: "Program & Protocol", isHod: true, category: "protocol", classGroup: "5A", video: "ADAA_EVENT.mp4" },
        { name: "NURUL SAKINAH BINTI SOFLI", role: "Head of Department 2", team: "Program & Protocol", isHod: true, category: "protocol", classGroup: "5B", video: "KEENA_EVENT.mp4" },
        { name: "SITI HUMAIRAH BINTI ABDUL RAHIM", role: "Team Member", team: "Program & Protocol", isHod: false, category: "protocol", classGroup: "5B", video: "MAIRA_EVENT.mp4" },
        { name: "AIN NUR MELISSA BINTI IBRAHIM", role: "Team Member", team: "Program & Protocol", isHod: false, category: "protocol", classGroup: "5C", video: "MEL_EVENT.mp4" },
        { name: "KAMELIA SHAIRA BINTI KAMARUDIN", role: "Team Member", team: "Program & Protocol", isHod: false, category: "protocol", classGroup: "5C", video: "KAMELIA_EVENT.mp4" },
        { name: "NUR AMEENA BINTI AZMAN", role: "Team Member", team: "Program & Protocol", isHod: false, category: "protocol", classGroup: "5A", video: "AMEENA_EVENT.mp4" },
        { name: "SARAH HANIS WADHIHAH BINTI ZABIDI", role: "Team Member", team: "Program & Protocol", isHod: false, category: "protocol", classGroup: "5A", video: "SARAH_EVENT.mp4" },
        { name: "NURUL FARISHA BINTI AHMAD FAISAL", role: "Team Member", team: "Program & Protocol", isHod: false, category: "protocol", classGroup: "5C", video: "FARISHA_EVENT.mp4" },
        { name: "NURUL RUSYDINA BINTI MOHD RIDUWAN", role: "Team Member", team: "Program & Protocol", isHod: false, category: "protocol", classGroup: "5B", video: "RUSYDINA_EVENT.mp4" },

        // Creative Team
        { name: "ASLINA", role: "Head of Department 1", team: "Creative Team", isHod: true, category: "curriculum", classGroup: "5B", video: "LINA_EVENT.mp4" },
        { name: "NUR AIN DAYANA BINTI MOHD FADIL", role: "Head of Department 2", team: "Creative Team", isHod: true, category: "curriculum", classGroup: "5A", video: "AIND_EVENT.mp4" },
        { name: "QURRATU AINI BINTI CHE MOHD SHAHRIL", role: "Team Member", team: "Creative Team", isHod: false, category: "curriculum", classGroup: "5A", video: "QYU_EVENT.mp4" },
        { name: "NURUL SYAHIRA BINTI AFZANIZAM", role: "Team Member", team: "Creative Team", isHod: false, category: "curriculum", classGroup: "5A", video: "SYAHIRA_EVENT.mp4" },
        { name: "NIK NUR ALYAA BINTI NIK MOHAMED", role: "Team Member", team: "Creative Team", isHod: false, category: "curriculum", classGroup: "5B", video: "NIK_EVENT.mp4" },
        { name: "NUR ATIQAH NATASYA BINTI ABD SAMAD", role: "Team Member", team: "Creative Team", isHod: false, category: "curriculum", classGroup: "5A", video: "TACA_EVENT.mp4" },
        { name: "NURR EDRINNA BINTI JUNAIDI", role: "Team Member", team: "Creative Team", isHod: false, category: "curriculum", classGroup: "5C", video: "ERIN_EVENT.mp4" },
        { name: "NUR FAZLINA BINTI AMIL HASLI", role: "Team Member", team: "Creative Team", isHod: false, category: "curriculum", classGroup: "5A", video: "ELYNA_EVENT.mp4" },

        // Media and Publicity
        { name: "NURSYAZIYAH SYAZANA BINTI AHMAD", role: "Head of Department 1", team: "Media & Publicity", isHod: true, category: "publicity", classGroup: "5B", video: "ZEE_EVENT.mp4" },
        { name: "NUREEN BATRISYIA IRDINA BINTI MOHD SHAM", role: "Head of Department 2", team: "Media & Publicity", isHod: true, category: "publicity", classGroup: "5C", video: "NUREEN_EVENT.mp4" },
        { name: "AUNI SYAFIAH BINTI MOHD AZMIZAN", role: "Team Member", team: "Media & Publicity", isHod: false, category: "publicity", classGroup: "5A", video: "AUNI_EVENT.mp4" },
        { name: "ARISSA BINTI AHMAD KHAIRUL", role: "Team Member", team: "Media & Publicity", isHod: false, category: "publicity", classGroup: "5C", video: "ARISSA_EVENT.mp4" },
        { name: "AIN ZULFA BINTI ZAINIZAM", role: "Team Member", team: "Media & Publicity", isHod: false, category: "publicity", classGroup: "5B", video: "AINZ_EVENT.mp4" },
        { name: "MUHAMMAD DANISH AIMAN BIN MOHD ZUKI", role: "Team Member", team: "Media & Publicity", isHod: false, category: "publicity", classGroup: "5B", video: "DANISH_EVENT.mp4" },
        { name: "NAUFAL MUAMMAR BIN ZAIFUL HIZAM", role: "Team Member", team: "Media & Publicity", isHod: false, category: "publicity", classGroup: "5C", video: "NAUFAL_EVENT.mp4" },

        // Logistics
        { name: "AHMAD FIRDAUS BIN ABDUL RAHMAN", role: "Head of Department 1", team: "Logistics", isHod: true, category: "logistics", classGroup: "5A", video: "DAUS_EVENT.mp4" },
        { name: "NURFARAHIN BINTI MOHAMAD ZAIDI", role: "Head of Department 2", team: "Logistics", isHod: true, category: "logistics", classGroup: "5C", video: "FARAHIN_EVENT.mp4" },
        { name: "MUHAMMAD NAIM BIN AZIZUL RAHMAN", role: "Team Member", team: "Logistics", isHod: false, category: "logistics", classGroup: "5A", video: "NAIM_EVENT.mp4" },
        { name: "AIMAN DANISH ISKANDAR BIN MOHD ZUL ISKANDAR", role: "Team Member", team: "Logistics", isHod: false, category: "logistics", classGroup: "5C", video: "IS_EVENT.mp4" },
        { name: "SITI NADIAH BINTI MAZLAN", role: "Team Member", team: "Logistics", isHod: false, category: "logistics", classGroup: "5B", video: "NADIAHM_EVENT.mp4" },

        // Sponsorship and Partnership
        { name: "NUR ANIS LIYANA BINTI MAT ARIS", role: "Head of Department 1", team: "Sponsorship & Partnership", isHod: true, category: "sponsorship", classGroup: "5A", video: "YANA_EVENT.mp4" },
        { name: "AIN NAJIHAH BINTI KHABIL", role: "Head of Department 2", team: "Sponsorship & Partnership", isHod: true, category: "sponsorship", classGroup: "5C", video: "AINK_EVENT.mp4" },
        { name: "SYASYA QISTINA BINTI MOHD HAIRUL NIZAM", role: "Team Member", team: "Sponsorship & Partnership", isHod: false, category: "sponsorship", classGroup: "5A", video: "SYASYA_EVENT.mp4" },
        { name: "AKMAL NABILAH BINTI SARAFUDDIN", role: "Team Member", team: "Sponsorship & Partnership", isHod: false, category: "sponsorship", classGroup: "5B", video: "NABILAH_EVENT.mp4" },
        { name: "FATIN NAJIHA BINTI ALI SHARIFUDDIN", role: "Team Member", team: "Sponsorship & Partnership", isHod: false, category: "sponsorship", classGroup: "5B", video: "FATIN_EVENT.mp4" },
        { name: "NURIN ISABELLA BINTI ZULKAPLI", role: "Team Member", team: "Sponsorship & Partnership", isHod: false, category: "sponsorship", classGroup: "5C", video: "ISABELLA_EVENT.mp4" },
        { name: "MUHAMMAD HAIKAL BIN YURI AZHAR", role: "Team Member", team: "Sponsorship & Partnership", isHod: false, category: "sponsorship", classGroup: "5C", video: "HAIKAL_EVENT.mp4" },
        { name: "NUR ALIA MAISARAH BINTI AHMAD KAMAL", role: "Team Member", team: "Sponsorship & Partnership", isHod: false, category: "sponsorship", classGroup: "5C", video: "ALIA_EVENT.mp4" },
        { name: "AHMAD HAZIQ BIN ROSELY", role: "Team Member", team: "Sponsorship & Partnership", isHod: false, category: "sponsorship", classGroup: "5C", video: "HAZIQR_EVENT.mp4" },

        // Technical
        { name: "FATIN HANA SOLEHAH BINTI SHUHARDI", role: "Head of Department 1", team: "Technical", isHod: true, category: "technical", classGroup: "5B", video: "HANA_EVENT.mp4" },
        { name: "MUHAMMAD HAZIQ BIN KHAIRUL ANUAR", role: "Head of Department 2", team: "Technical", isHod: true, category: "technical", classGroup: "5B", video: "HAZIQK_EVENT.mp4" },
        { name: "NUR ZULAIKA BINTI MOHD KAMARUL AZLAN", role: "Team Member", team: "Technical", isHod: false, category: "technical", classGroup: "5C", video: "ZULAIKA_EVENT.mp4" },
        { name: "ABDUL BASSIT BIN SASHIM@HASHIM", role: "Team Member", team: "Technical", isHod: false, category: "technical", classGroup: "5A", video: "BASSIT_EVENT.mp4" },
        { name: "NUR AINA FATINI BINTI NASRUDDIN", role: "Team Member", team: "Technical", isHod: false, category: "technical", classGroup: "5C", video: "AINA_EVENT.mp4" },
        { name: "NUR NADIA BINTI MOHD ROSLAN", role: "Team Member", team: "Technical", isHod: false, category: "technical", classGroup: "5C", video: "NADIA_EVENT.mp4" },

        // Special Task and Hospitality
        { name: "AMMAR A'FIF BIN MD A'FIFULLAH", role: "Team Member", team: "Special Task & Hospitality", isHod: false, category: "hospitality", classGroup: "5C", video: "AMMAR_EVENT.mp4" },
        { name: "ARIEQ SHAFI BIN NOR ADNAN", role: "Team Member", team: "Special Task & Hospitality", isHod: false, category: "hospitality", classGroup: "5B", video: "ARIEQ_EVENT.mp4" }
      ]
    },
    editorial: {
      advisor: {
        role: "EDITORIAL ADVISOR",
        name: "AZLINAWATI BINTI NGAINON",
        team: "EDITORIAL ADVISORY BOARD",
        isHod: false,
        image: null
      },
      subtabs: [
        { id: "all", label: "All Editorial" },
        { id: "high-comm", label: "High Committee" },
        { id: "bm-section", label: "Bahasa Melayu Section" },
        { id: "en-section", label: "English Section" },
        { id: "digital-comm", label: "Communication & Digital" },
        { id: "creative-multimedia", label: "Creative & Multimedia" }
      ],
      members: [
        // Editorial High Committee
        { name: "MUHAMMAD HAIKAL BIN YURI AZHAR", role: "Editor-in-Chief", team: "Editorial High Committee", isHod: false, category: "high-comm", classGroup: "5C" },
        { name: "NURFARAHIN BINTI MOHAMAD ZAIDI", role: "Assistant Editor-in-Chief", team: "Editorial High Committee", isHod: false, category: "high-comm", classGroup: "5C" },
        { name: "SITI NADIAH BINTI MAZLAN", role: "Secretary", team: "Editorial High Committee", isHod: false, category: "high-comm", classGroup: "5B" },
        { name: "ABDUL BASSIT BIN SASHIM@HASHIM", role: "Managing Editor", team: "Editorial High Committee", isHod: false, category: "high-comm", classGroup: "5A" },

        // BM Section
        { name: "AIN NUR MELISSA BINTI IBRAHIM", role: "Bahasa Melayu Editor", team: "Bahasa Melayu Section", isHod: true, category: "bm-section", classGroup: "5C" },
        { name: "AIN ZULFA BINTI ZAINIZAM", role: "Bahasa Melayu Sub-Editor", team: "Bahasa Melayu Section", isHod: false, category: "bm-section", classGroup: "5B" },
        { name: "UMI RABIATUL ADAWIAH BINTI MUHAMAD", role: "Bahasa Melayu Proofreader", team: "Bahasa Melayu Section", isHod: false, category: "bm-section", classGroup: "5A" },
        { name: "NUR FAZLINA BINTI AMIL HASLI", role: "BM Journalist", team: "Bahasa Melayu Section", isHod: false, category: "bm-section", classGroup: "5A" },
        { name: "NUR AIN DAYANA BINTI MOHD FADIL", role: "BM Journalist", team: "Bahasa Melayu Section", isHod: false, category: "bm-section", classGroup: "5A" },
        { name: "ARIEQ SHAFI BIN NOR ADNAN", role: "BM Journalist", team: "Bahasa Melayu Section", isHod: false, category: "bm-section", classGroup: "5B" },
        { name: "NURUL RUSYDINA BINTI MOHD RIDUWAN", role: "BM Journalist", team: "Bahasa Melayu Section", isHod: false, category: "bm-section", classGroup: "5B" },
        { name: "AHMAD HAZIQ BIN ROSELY", role: "BM Journalist", team: "Bahasa Melayu Section", isHod: false, category: "bm-section", classGroup: "5C" },
        { name: "AMMAR A'FIF BIN MD A'FIFULLAH", role: "BM Journalist", team: "Bahasa Melayu Section", isHod: false, category: "bm-section", classGroup: "5C" },
        { name: "MUHAMMAD HAZIQ BIN KHAIRUL ANUAR", role: "BM Journalist", team: "Bahasa Melayu Section", isHod: false, category: "bm-section", classGroup: "5B" },
        { name: "NURR EDRINNA BINTI JUNAIDI", role: "BM Journalist", team: "Bahasa Melayu Section", isHod: false, category: "bm-section", classGroup: "5C" },
        { name: "NURUL FARISHA BINTI AHMAD FAISAL", role: "BM Journalist", team: "Bahasa Melayu Section", isHod: false, category: "bm-section", classGroup: "5C" },

        // English Section
        { name: "NUR AMEENA BINTI AZMAN", role: "English Editor", team: "English Section", isHod: true, category: "en-section", classGroup: "5A" },
        { name: "SARAH HANIS WADHIHAH BINTI ZABIDI", role: "English Sub-Editor", team: "English Section", isHod: false, category: "en-section", classGroup: "5A" },
        { name: "SITI HUMAIRAH BINTI ABDUL RAHIM", role: "English Proofreader", team: "English Section", isHod: false, category: "en-section", classGroup: "5B" },
        { name: "AUNI SYAFIAH BINTI MOHD AZMIZAN", role: "English Journalist", team: "English Section", isHod: false, category: "en-section", classGroup: "5A" },
        { name: "MADELIN SURAYA BINTI MOHD ASRI", role: "English Journalist", team: "English Section", isHod: false, category: "en-section", classGroup: "5A" },
        { name: "NUR ANIS LIYANA BINTI MAT ARIS", role: "English Journalist", team: "English Section", isHod: false, category: "en-section", classGroup: "5A" },
        { name: "NUR ATIQAH NATASYA BINTI ABD SAMAD", role: "English Journalist", team: "English Section", isHod: false, category: "en-section", classGroup: "5A" },
        { name: "SYASYA QISTINA BINTI MOHD HAIRUL NIZAM", role: "English Journalist", team: "English Section", isHod: false, category: "en-section", classGroup: "5A" },
        { name: "FATIN HANA SOLEHAH BINTI SHUHARDI", role: "English Journalist", team: "English Section", isHod: false, category: "en-section", classGroup: "5B" },
        { name: "NUR IMAN JASMYN BINTI MOHD ZAMRI", role: "English Journalist", team: "English Section", isHod: false, category: "en-section", classGroup: "5B" },
        { name: "NUR AINA FATINI BINTI NASRUDDIN", role: "English Journalist", team: "English Section", isHod: false, category: "en-section", classGroup: "5C" },

        // Communication & Digital Department
        { name: "NURSYAZIYAH SYAZANA BINTI AHMAD", role: "Social Media Editor", team: "Social Media Team", isHod: true, category: "digital-comm", classGroup: "5B" },
        { name: "QURRATU AINI BINTI CHE MOHD SHAHRIL", role: "Social Media Team", team: "Social Media Team", isHod: false, category: "digital-comm", classGroup: "5A" },
        { name: "NAUFAL MUAMMAR BIN ZAIFUL HIZAM", role: "Social Media Team", team: "Social Media Team", isHod: false, category: "digital-comm", classGroup: "5C" },
        { name: "ARISSA BINTI AHMAD KHAIRUL", role: "Social Media Team", team: "Social Media Team", isHod: false, category: "digital-comm", classGroup: "5C" },
        { name: "NURUL SYAHIRA BINTI AFZANIZAM", role: "Website Editor", team: "Website Team", isHod: true, category: "digital-comm", classGroup: "5A" },
        { name: "MUHAMMAD DANISH AIMAN BIN MOHD ZUKI", role: "Content Editor", team: "Website Team", isHod: false, category: "digital-comm", classGroup: "5B" },
        { name: "MUHAMMAD FARHAN BIN RAMLAN", role: "Multimedia Editor", team: "Website Team", isHod: false, category: "digital-comm", classGroup: "5B" },
        { name: "SYAZWANI ATHIRAH BINTI HASNAN", role: "Infographic Editor", team: "Infographic Team", isHod: true, category: "digital-comm", classGroup: "5C" },
        { name: "NUR ZULAIKA BINTI MOHD KAMARUL AZLAN", role: "Infographic Assistant Editor", team: "Infographic Team", isHod: false, category: "digital-comm", classGroup: "5C" },
        { name: "NUREEN BATRISYIA IRDINA BINTI MOHD SHAM", role: "Infographic Sub-Editor (BM)", team: "Infographic Team", isHod: false, category: "digital-comm", classGroup: "5C" },
        { name: "FATIN NAJIHA BINTI ALI SHARIFUDDIN", role: "Infographic Sub-Editor (BM)", team: "Infographic Team", isHod: false, category: "digital-comm", classGroup: "5B" },
        { name: "KAMELIA SHAIRA BINTI KAMARUDIN", role: "Infographic Sub-Editor (ENG)", team: "Infographic Team", isHod: false, category: "digital-comm", classGroup: "5C" },

        // Creative & Multimedia
        { name: "AIMAN DANISH ISKANDAR BIN MOHD ZUL ISKANDAR", role: "Creative Editor", team: "Creative Team", isHod: true, category: "creative-multimedia", classGroup: "5C" },
        { name: "ASLINA", role: "Creative Team", team: "Creative Team", isHod: false, category: "creative-multimedia", classGroup: "5B" },
        { name: "NIK NUR ALYAA BINTI NIK MOHAMED", role: "Creative Team", team: "Creative Team", isHod: false, category: "creative-multimedia", classGroup: "5B" },
        { name: "PUTRI NUR GUSTAWINA BINTI HERMES MEDIA PUTRA", role: "Creative Team", team: "Creative Team", isHod: false, category: "creative-multimedia", classGroup: "5C" },
        { name: "NUR NADIA BINTI MOHD ROSLAN", role: "Photo Editor", team: "Photo & Video Team", isHod: true, category: "creative-multimedia", classGroup: "5C" },
        { name: "MUHAMMAD NAIM BIN AZIZUL RAHMAN", role: "Photo Sub-Editor", team: "Photo & Video Team", isHod: false, category: "creative-multimedia", classGroup: "5A" },
        { name: "NOOR ALYA NISA BINTI MD YUSRI", role: "Video Editor", team: "Photo & Video Team", isHod: true, category: "creative-multimedia", classGroup: "5C" },
        { name: "NURUL SAKINAH BINTI SOFLI", role: "Video Sub-Editor", team: "Photo & Video Team", isHod: false, category: "creative-multimedia", classGroup: "5B" },
        { name: "NUR ALIA MAISARAH BINTI AHMAD KAMAL", role: "Podcast Editor", team: "Podcast Team", isHod: true, category: "creative-multimedia", classGroup: "5C" },
        { name: "NURIN ISABELLA BINTI ZULKAPLI", role: "Podcast Sub-Editor", team: "Podcast Team", isHod: false, category: "creative-multimedia", classGroup: "5C" },
        { name: "AHMAD FIRDAUS BIN ABDUL RAHMAN", role: "Podcast Team", team: "Podcast Team", isHod: false, category: "creative-multimedia", classGroup: "5A" },
        { name: "AKMAL NABILAH BINTI SARAFUDDIN", role: "Podcast Team", team: "Podcast Team", isHod: false, category: "creative-multimedia", classGroup: "5B" },
        { name: "AIN NAJIHAH BINTI KHABIL", role: "Podcast Team", team: "Podcast Team", isHod: false, category: "creative-multimedia", classGroup: "5C" }
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
      const isNewscamp = currentMainTab === 'newscamp';
      const advisorVideo = currentData.advisor.video;

      advisorShowcase.innerHTML = `
        <div class="profile-card" style="max-width: 320px; margin: 0 auto;">
          ${isNewscamp && advisorVideo ? `
            <div class="profile-avatar-wrap">
              <video autoplay loop muted playsinline class="profile-avatar" poster="assets/ADVISOR_EVENT.jpg">
                <source src="assets/${advisorVideo}" type="video/mp4">
              </video>
            </div>
          ` : ''}
          <div class="profile-team-tag">${currentData.advisor.team}</div>
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

      document.querySelectorAll('#subtabs-bar .subtab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          currentSubTab = btn.dataset.sub;
          document.querySelectorAll('#subtabs-bar .subtab-btn').forEach(b => b.classList.remove('active'));
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
      const isNewscamp = currentMainTab === 'newscamp';
      const videoSrc = member.video ? `assets/${member.video}` : null;
      const fallbackPoster = member.video ? `assets/${member.video.replace('.mp4', '.jpg')}` : 'assets/dummy_photo.jpg';

      return `
        <div class="profile-card">
          ${isNewscamp && videoSrc ? `
            <div class="profile-avatar-wrap">
              <video autoplay loop muted playsinline class="profile-avatar" poster="${fallbackPoster}">
                <source src="${videoSrc}" type="video/mp4">
              </video>
            </div>
          ` : ''}
          
          <!-- Team Name & HOD Badge -->
          <div class="profile-team-tag">
            ${member.team} ${member.isHod ? '<span class="hod-badge">• HOD</span>' : ''}
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
  // 5. EVENT MODAL POPUPS & SLIDESHOW
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
      gallery: Array.from({ length: 17 }, (_, i) => `assets/ECOLLOQUIUM_PHOTOS (${i + 1}).jpg`),
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

    currentSlideIndex = 0;

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

    const galleryHTML = data.gallery && data.gallery.length > 0 ? `
      <div class="modal-gallery-section">
        <div class="modal-section-tag">EVENT HIGHLIGHTS</div>
        <h3 class="modal-section-title">Photo Gallery</h3>
        
        <div class="slideshow-container">
          <div class="slideshow-track" id="slideshow-track">
            ${data.gallery.map((_, index) => {
              const num = index + 1;
              return `
                <div class="slide ${index === 0 ? 'active' : ''}">
                  <img src="assets/ECOLLOQUIUM_PHOTOS (${num}).jpg" 
                       alt="Colloquium Slide ${num}" 
                       class="slide-img" 
                       onerror="this.onerror=function(){ this.onerror=function(){ this.src='assets/dummy_photo.jpg'; }; this.src='assets/ECOLLOQUIUM_PHOTOS (${num}).png'; }; this.src='assets/ECOLLOQUIUM_PHOTOS (${num}).JPG';">
                </div>
              `;
            }).join('')}
          </div>

          <button class="slide-prev" onclick="moveSlide(-1)">&#10094;</button>
          <button class="slide-next" onclick="moveSlide(1)">&#10095;</button>

          <div class="slide-dots">
            ${data.gallery.map((_, index) => `
              <span class="dot ${index === 0 ? 'active' : ''}" onclick="goToSlide(${index})"></span>
            `).join('')}
          </div>
        </div>
      </div>
    ` : '';

    modalBody.innerHTML = `
      <div class="modal-hero-banner">
        <span class="modal-hero-badge">${data.badge}</span>
        <h1 class="modal-hero-title">${data.title}</h1>
        <h2 class="modal-hero-subtitle">${data.subtitle}</h2>
        <p class="modal-hero-desc">${data.description}</p>
      </div>

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

      ${speakersHTML}
      ${galleryHTML}

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
  // 6. PUBLICATION & BROADCAST SUBTAB FILTERS
  // ==========================================
  document.querySelectorAll('[data-news-lang]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('[data-news-lang]').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      filterGrid('news-grid', e.target.getAttribute('data-news-lang'));
    });
  });

  document.querySelectorAll('[data-newsplus-lang]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('[data-newsplus-lang]').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      filterGrid('newsplus-grid', e.target.getAttribute('data-newsplus-lang'));
    });
  });

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

  // ==========================================
  // 7. SINGLE ARTICLE & PODCAST READERS
  // ==========================================
  const newsArticlesData = {
    'news-1': {
      badge: 'LIPUTAN KHAS',
      headline: 'Pelancaran NewsCamp 7.0 Membawa Laporan Penyelesaian Media Baharu',
      meta: 'SHAH ALAM | 28 OKTOBER 2026',
      lead: 'Penganjuran e-Colloquium kali ke-54 memperkasakan etika kewartawanan mahasiswa menerusi fokus Laporan Penyelesaian (Solutions Journalism).',
      body: `
        <p style="line-height: 1.8; color: #334155; margin-top: 1rem;">
          Kandungan penuh artikel berita akan dipaparkan di sini apabila laporan rasmi diterbitkan oleh sidang redaksi.
        </p>
      `
    },
    'news-2': {
      badge: 'E-COLLOQUIUM COVERAGE',
      headline: 'Bridging the Helplessness Gap Through Evidence-Based Solutions Journalism',
      meta: 'SHAH ALAM | 03 NOVEMBER 2026 • By Syahira Afzanizam',
      mainImage: 'assets/eq_news1.jpg',
      mainCaption: 'The organising committee, advisor and moderator pose for a group photo after the 54th Journalism e-Colloquium at UiTM Shah Alam on 3 November 2026.',
      lead: 'The biannual Journalism e-Colloquium organised by final-year Journalism students returned for its 54th edition, discussing solutions journalism and how photojournalism contributes to shaping the future of journalism.',
      body: `
        <p style="line-height: 1.8; color: #334155; margin-top: 1.25rem;">
          The virtual event was held via Google Meet and the official Journalism Colloquium YouTube channel, running live for three hours and drawing over 3,700 views.
        </p>
        
        <p style="line-height: 1.8; color: #334155; margin-top: 1.25rem;">
          With the theme <strong>"Enough Bad News? Rethinking Journalism Through Solutions and Visual Storytelling"</strong>, the 54th Journalism e-Colloquium addressed topics ranging from the importance of solutions journalism to the impact of photos and multimedia in storytelling.
        </p>
        
        <p style="line-height: 1.8; color: #334155; margin-top: 1.25rem;">
          Featured panelists included experienced photojournalists Aizuddin Saad and Shamsharin Shamsudin, alongside Kyuwon Lee, Training and Curriculum Manager at the Solutions Journalism Network. The session was moderated by financial journalist and UiTM alumna Nur Amira Afrina.
        </p>

        <p style="line-height: 1.8; color: #334155; margin-top: 1.25rem;">
          Opening the first session, Kyuwon Lee shared how journalism can no longer stop at highlighting failure; instead, it must apply investigative rigor to response and recovery.
        </p>

        <blockquote style="border-left: 4px solid var(--ci-burgundy, #79040A); padding-left: 1.25rem; margin: 1.75rem 0; font-style: italic; color: #1e293b; font-weight: 500;">
          "Solutions journalism is, in a way, a social anatomy of what went well, what worked better, who made it better, and how," Lee explained.
        </blockquote>

        <p style="line-height: 1.8; color: #334155; margin-top: 1.25rem;">
          He defined solutions journalism as rigorous, evidence-based reporting on responses to social problems, noting that it helps bridge the gap left by problem-heavy news which often leaves audiences feeling powerless and disengaged.
        </p>

        <!-- Inline Article Image (eq_news2.png) -->
        <figure style="margin: 2rem 0; text-align: center;">
          <img src="assets/eq_news2.png" alt="Kyuwon Lee Session" style="width: 100%; border-radius: 10px; box-shadow: 0 4px 15px rgba(0,0,0,0.08);" onerror="this.src='assets/dummy_photo.jpg';">
          <figcaption style="font-size: 0.82rem; color: #64748b; margin-top: 0.75rem; text-align: center; font-style: italic;">
            Solutions Journalism Network’s Training and Curriculum Manager, Kyuwon Lee, discussing shifting media focus from problems to responses.
          </figcaption>
        </figure>

        <p style="line-height: 1.8; color: #334155; margin-top: 1.25rem;">
          In his officiating speech, Faculty of Communication and Media Studies (FCMS) Dean Professor Dr. Abd. Rasid Abd. Rahman expressed that solutions journalism is increasingly vital following constant exposure to negative news. 
        </p>

        <p style="line-height: 1.8; color: #334155; margin-top: 1.25rem;">
         <em>"It investigates, responds to social challenges, examines what works, what does not, and what lessons can be learned,"</em> he stated.
        </p>

        <p style="line-height: 1.8; color: #334155; margin-top: 1.25rem;">
          Project Director Nur Iman Jasmyn Mohd Zamri emphasized that combining solution-focused reporting with visual storytelling creates a powerful platform for public understanding, institutional accountability, and meaningful social change.
        </p>

        <p style="line-height: 1.8; color: #334155; margin-top: 1.25rem;">
          Spearheaded by final-year Journalism students from FCMS, UiTM Shah Alam, the virtual event served as a capstone initiative, offering students a platform to put editorial strategy, project management, and media networking into action while tackling evolving challenges in contemporary journalism.
        </p>
      `
    }
  };

  window.openNewsArticle = function(id) {
    const article = newsArticlesData[id];
    if (!article) return;

    const contentContainer = document.getElementById('news-article-content');
    if (contentContainer) {
      contentContainer.innerHTML = `
        <span class="feature-badge">${article.badge}</span>
        <h1 class="article-headline" style="color: var(--ci-burgundy, #79040A); font-family: 'Montserrat', sans-serif; font-weight: 800; font-size: 1.8rem; margin: 1rem 0 0.5rem;">${article.headline}</h1>
        <p style="color: #64748b; font-size: 0.85rem; font-weight: 600;">${article.meta}</p>
        
        ${article.mainImage ? `
          <figure style="margin: 1.5rem 0 2rem;">
            <img src="${article.mainImage}" alt="${article.headline}" style="width: 100%; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.08);" onerror="this.src='assets/dummy_photo.jpg';">
            <figcaption style="font-size: 0.82rem; color: #64748b; margin-top: 0.75rem; text-align: center; font-style: italic;">
              ${article.mainCaption}
            </figcaption>
          </figure>
        ` : ''}

        <hr style="margin: 1.5rem 0; border: none; border-top: 1px solid #e2e8f0;">
        
        <p class="lead-paragraph" style="font-weight: 600; font-size: 1.1rem; line-height: 1.7; color: #0f172a;">
          ${article.lead}
        </p>

        ${article.body}
      `;
    }

    document.getElementById('news-directory-view').style.display = 'none';
    document.getElementById('news-article-view').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.closeNewsArticle = function() {
    document.getElementById('news-article-view').style.display = 'none';
    document.getElementById('news-directory-view').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.openNewsPlusArticle = function(id) {
    document.getElementById('newsplus-directory-view').style.display = 'none';
    document.getElementById('newsplus-article-view').style.display = 'block';
  };

  window.closeNewsPlusArticle = function() {
    document.getElementById('newsplus-article-view').style.display = 'none';
    document.getElementById('newsplus-directory-view').style.display = 'block';
  };

  window.openPodcastEpisode = function(id) {
    document.getElementById('podcast-directory-view').style.display = 'none';
    document.getElementById('podcast-episode-view').style.display = 'block';
  };

  window.closePodcastEpisode = function() {
    document.getElementById('podcast-episode-view').style.display = 'none';
    document.getElementById('podcast-directory-view').style.display = 'block';
  };

  // ==========================================
  // 8. BACK TO TOP FLOATING BUTTON
  // ==========================================
  const backToTopBtn = document.getElementById('back-to-top-btn');

  window.addEventListener('scroll', () => {
    if (backToTopBtn) {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  });

  window.scrollToTop = function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

});