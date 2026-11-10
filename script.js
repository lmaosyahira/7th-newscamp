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
        role: "Project Advisor",
        name: "PUAN AZLINAWATI BINTI NGAINON",
        image: "assets/ADVISOR_EVENT_2.jpg"
      },
      subtabs: [
        { id: "all", label: "All Members" },
        { id: "high-comm", label: "High Committee" },
        { id: "protocol", label: "Protocol & Event" },
        { id: "curriculum", label: "Curriculum" },
        { id: "publicity", label: "Publicity & Media" },
        { id: "sponsorship", label: "Sponsorship" },
        { id: "logistics", label: "Logistics & Tech" }
      ],
      members: [
        { name: "NUR IMAN JASMYN BINTI MOHD ZAMRI", role: "Project Director", category: "high-comm", classGroup: "5B" },
        { name: "NURUL SYAHIRA BINTI AFZANIZAM", role: "Deputy Project Director I", category: "high-comm", classGroup: "5A" },
        { name: "SITI NUR MASYITAH BINTI ZAKARIA", role: "Deputy Project Director II", category: "high-comm", classGroup: "5B" },
        { name: "SITI SARAH HANIS BINTI SAIFUL ANUAR", role: "Secretary", category: "high-comm", classGroup: "5A" },
        { name: "NUR ALIA MAISARAH BINTI AZMAN", role: "Treasurer", category: "high-comm", classGroup: "5A" },
        { name: "MUHAMMAD FARHAN BIN RAMLAN", role: "Assistant Treasurer", category: "high-comm", classGroup: "5B" }
      ]
    },
    editorial: {
      advisor: {
        role: "Editorial Advisor",
        name: "PUAN AZLINAWATI BINTI NGAINON",
        image: null
      },
      subtabs: [
        { id: "all", label: "All Editorial" },
        { id: "editor-in-chief", label: "Editor-in-Chief" },
        { id: "news-desk", label: "News Desk" },
        { id: "feature-desk", label: "Feature Desk" },
        { id: "multimedia-desk", label: "Multimedia Desk" }
      ],
      members: [
        { name: "DANISH HAIKAL BIN AZMAN", role: "Editor-in-Chief", category: "editor-in-chief", classGroup: "5A" },
        { name: "SYAZWANI ATHIRAH BINTI HASNAN", role: "News Editor", category: "news-desk", classGroup: "5B" }
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
      const showAdvisorImage = currentMainTab === 'newscamp' && currentData.advisor.image;

      advisorShowcase.innerHTML = `
        <div class="profile-card" style="max-width: 320px; margin: 0 auto;">
          ${showAdvisorImage ? `
            <div class="profile-avatar-wrap">
              <img src="${currentData.advisor.image}" 
                   alt="${currentData.advisor.name}" 
                   class="profile-avatar"
                   onerror="this.src='assets/ADVISOR_EVENT_2.jpg';">
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
      const fileName = member.image || member.name.toLowerCase().replace(/[^a-z0-9]/g, '_') + '.jpg';
      const showMemberImage = currentMainTab === 'newscamp';

      return `
        <div class="profile-card">
          ${showMemberImage ? `
            <div class="profile-avatar-wrap">
              <img src="assets/${fileName}" 
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