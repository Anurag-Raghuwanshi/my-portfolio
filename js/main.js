/**
 * Anurag Raghuwanshi - Portfolio Interactions & Logic
 * High-Contrast Dark UI with Electric Orange Theme
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Current Year in Footer
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 2. Sticky Navbar with Blur Effect on Scroll
  const navbar = document.getElementById('navbar');
  const backToTop = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (navbar) {
      if (scrollY > 30) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    if (backToTop) {
      if (scrollY > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }
  });

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 3. Mobile Navigation Drawer Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.contains('open');
      if (isOpen) {
        mobileDrawer.classList.remove('open');
        mobileToggle.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      } else {
        mobileDrawer.classList.add('open');
        mobileToggle.classList.add('open');
        mobileToggle.setAttribute('aria-expanded', 'true');
      }
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileToggle.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 4. Interactive EV Scooter Telemetry Mode Switcher
  const modeButtons = document.querySelectorAll('.mode-btn');
  const evBatteryVal = document.getElementById('evBatteryVal');
  const evHealthVal = document.getElementById('evHealthVal');
  const evRangeVal = document.getElementById('evRangeVal');

  const modeData = {
    eco: {
      battery: '97%',
      health: '94%',
      range: '78KM'
    },
    ride: {
      battery: '97%',
      health: '89%',
      range: '60KM'
    },
    sport: {
      battery: '97%',
      health: '86%',
      range: '45KM'
    }
  };

  modeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      modeButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const mode = btn.dataset.mode;
      const data = modeData[mode];

      if (data && evBatteryVal && evHealthVal && evRangeVal) {
        // Animate pulse
        [evBatteryVal, evHealthVal, evRangeVal].forEach(el => {
          el.style.opacity = '0.3';
          el.style.transform = 'scale(0.92)';
          el.style.transition = 'all 0.15s ease';
        });

        setTimeout(() => {
          evBatteryVal.textContent = data.battery;
          evHealthVal.textContent = data.health;
          evRangeVal.textContent = data.range;

          [evBatteryVal, evHealthVal, evRangeVal].forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'scale(1)';
          });
        }, 150);
      }
    });
  });

  // 5. Project Filtering (All, UI/UX, Frontend, Mobile)
  const filterTabs = document.querySelectorAll('.filter-tab');
  const projectCards = document.querySelectorAll('.project-card');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.dataset.filter;

      projectCards.forEach(card => {
        const categories = card.dataset.category ? card.dataset.category.split(' ') : [];
        if (filter === 'all' || categories.includes(filter)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // 6. Project Modal Details
  const projectModal = document.getElementById('projectModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalBody = document.getElementById('modalBody');
  const openModalBtns = document.querySelectorAll('.open-modal');

  const modalDetails = {
    'modal-task': {
      tag: 'Full-Stack MERN Application',
      title: 'Smart Task Management System',
      description: 'A full-stack MERN application featuring secure authentication, comprehensive CRUD operations, and personalized task dashboards. Integrated MongoDB to manage 500+ task records with optimized backend queries, and engineered responsive, accessible UI components.',
      specs: [
        { key: 'Tech Stack', val: 'React.js, Node.js, Express.js, MongoDB' },
        { key: 'Database Scale', val: '500+ Task Records Managed' },
        { key: 'Key Features', val: 'Secure Auth, Personal Dashboards, CRUD' },
        { key: 'Architecture', val: 'RESTful API & Responsive UI' }
      ],
      links: [
        { text: 'View on GitHub', href: 'https://github.com/Anurag-Raghuwanshi', isPrimary: true },
        { text: 'Connect on LinkedIn', href: 'https://www.linkedin.com/in/anurag-raghuwanshi-b587ba33b', isPrimary: false }
      ]
    },
    'modal-event': {
      tag: 'MERN Platform • REST APIs',
      title: 'Campus Event Booking Platform',
      description: 'A digital MERN-based platform enabling students to discover, register for, and manage university events digitally. Developed a dedicated administrative dashboard for real-time participant tracking and booking management using robust REST APIs and reusable React components.',
      specs: [
        { key: 'Tech Stack', val: 'MERN Stack, REST APIs, CSS3' },
        { key: 'Modules', val: 'Student Portal + Admin Dashboard' },
        { key: 'Functionality', val: 'Event Discovery, Digital Booking, Tracking' },
        { key: 'Frontend', val: 'Reusable Component Architecture' }
      ],
      links: [
        { text: 'View on GitHub', href: 'https://github.com/Anurag-Raghuwanshi', isPrimary: true },
        { text: 'Connect on LinkedIn', href: 'https://www.linkedin.com/in/anurag-raghuwanshi-b587ba33b', isPrimary: false }
      ]
    },
    'modal-restaurant': {
      tag: 'Full-Stack Web App • MERN',
      title: 'Restaurant Finder & Review System',
      description: 'A comprehensive restaurant discovery platform equipped with advanced search filters, star ratings, and community review functionality. Uses MongoDB to manage restaurant details, customer reviews, and user activity data efficiently with an intuitive, responsive UI.',
      specs: [
        { key: 'Tech Stack', val: 'React.js, Node.js, Express.js, MongoDB' },
        { key: 'Core Features', val: 'Dynamic Search Filters, Ratings & Reviews' },
        { key: 'Database', val: 'MongoDB Aggregations & Query Indexing' },
        { key: 'User Experience', val: 'Mobile-Optimized Responsive Views' }
      ],
      links: [
        { text: 'View on GitHub', href: 'https://github.com/Anurag-Raghuwanshi', isPrimary: true },
        { text: 'Connect on LinkedIn', href: 'https://www.linkedin.com/in/anurag-raghuwanshi-b587ba33b', isPrimary: false }
      ]
    },
    'modal-ev': {
      tag: 'UI/UX Case Study • Connected IoT',
      title: 'VIDA V1 Pro Connected EV Mobility App',
      description: 'An advanced mobile telemetry application created for modern electric two-wheelers. The design centers on instant rider situational awareness, low-light legibility with an obsidian-and-orange high-contrast system, and real-time Bluetooth diagnostics.',
      specs: [
        { key: 'Role', val: 'Lead UI/UX & Interaction Design' },
        { key: 'Target Platform', val: 'iOS & Android (Design System)' },
        { key: 'Key Metric', val: 'Sub-300ms Telemetry Recognition' },
        { key: 'Aesthetic Focus', val: 'Dark Obsidian & Electric Orange (#FF5500)' }
      ],
      links: [
        { text: 'Scroll to Interactive Simulator', href: '#case-study', isPrimary: true },
        { text: 'Connect on LinkedIn', href: 'https://www.linkedin.com/in/anurag-raghuwanshi-b587ba33b', isPrimary: false }
      ]
    }
  };

  function openModal(modalId) {
    const data = modalDetails[modalId];
    if (!data || !modalBody || !projectModal) return;

    let specsHtml = data.specs.map(s => `
      <div class="spec-item">
        <span class="spec-key">${s.key}</span>
        <span class="spec-val">${s.val}</span>
      </div>
    `).join('');

    let linksHtml = data.links.map(l => `
      <a href="${l.href}" ${l.href.startsWith('http') ? 'target="_blank" rel="noopener noreferrer"' : ''} class="btn ${l.isPrimary ? 'btn-primary' : 'btn-secondary'}">
        <span>${l.text}</span>
      </a>
    `).join('');

    modalBody.innerHTML = `
      <div class="modal-header-tag">${data.tag}</div>
      <h3 class="modal-title">${data.title}</h3>
      <p class="modal-desc">${data.description}</p>
      <div class="modal-specs-grid">
        ${specsHtml}
      </div>
      <div class="modal-actions">
        ${linksHtml}
      </div>
    `;

    projectModal.classList.add('open');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Hook internal modal links
    modalBody.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', () => {
        closeModal();
      });
    });
  }

  function closeModal() {
    if (!projectModal) return;
    projectModal.classList.remove('open');
    projectModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.dataset.modal;
      openModal(modalId);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) {
        closeModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && projectModal.classList.contains('open')) {
        closeModal();
      }
    });
  }

  // 7. Contact Form Handling & Toast Feedback
  const contactForm = document.getElementById('contactForm');
  const toastNotification = document.getElementById('toastNotification');
  const toastMessage = document.getElementById('toastMessage');

  function showToast(message) {
    if (!toastNotification) return;
    if (toastMessage) toastMessage.textContent = message;
    toastNotification.classList.add('show');

    setTimeout(() => {
      toastNotification.classList.remove('show');
    }, 4500);
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('senderName');
      const emailInput = document.getElementById('senderEmail');
      const messageInput = document.getElementById('senderMessage');

      let isValid = true;

      // Validate Name
      if (!nameInput.value.trim()) {
        nameInput.parentElement.classList.add('has-error');
        isValid = false;
      } else {
        nameInput.parentElement.classList.remove('has-error');
      }

      // Validate Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        emailInput.parentElement.classList.add('has-error');
        isValid = false;
      } else {
        emailInput.parentElement.classList.remove('has-error');
      }

      // Validate Message
      if (!messageInput.value.trim()) {
        messageInput.parentElement.classList.add('has-error');
        isValid = false;
      } else {
        messageInput.parentElement.classList.remove('has-error');
      }

      if (isValid) {
        const senderName = nameInput.value.trim();
        showToast(`Thank you, ${senderName}! Your message has been received.`);
        contactForm.reset();
      }
    });

    // Clear errors on input
    ['senderName', 'senderEmail', 'senderMessage'].forEach(id => {
      const input = document.getElementById(id);
      if (input) {
        input.addEventListener('input', () => {
          input.parentElement.classList.remove('has-error');
        });
      }
    });
  }

  // 8. Active Nav Link on Scroll Spy
  const sections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('.desktop-nav .nav-link');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 200;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = section.getAttribute('id');
      }
    });

    desktopNavLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  });
});
