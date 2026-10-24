/**
 * TOOTHSCULPT DENTAL CLINIC — CLIENT CONVERSION DEMO WEBSITE
 * Vanilla JavaScript (ES6+)
 * 
 * Includes:
 * 1. Centralized Business Information Configuration
 * 2. Educational Treatment Data & Interactive Modals
 * 3. Mobile Navigation & Sticky Header Behavior
 * 4. FAQ Accordion Interaction
 * 5. Indian Mobile Number & Form Validation with Demo-Safe Submission
 * 6. Developer Sales Presentation Mode (?demo=sales)
 * 7. Intersection Observer Scroll Animations & Accessibility
 */

'use strict';

/* ==========================================================================
   1. CENTRALIZED BUSINESS CONFIGURATION
   Update all clinic information in this single object for easy maintenance.
   ========================================================================== */
const CLINIC_CONFIG = {
  name: 'Toothsculpt Dental Clinic',
  category: 'Dental Clinic',
  address: '1st Floor, Adityaraj Square Building, Office No. 3, A Wing, 82, Janta Market, Kannamwar Nagar II, Vikhroli East, Mumbai, Maharashtra 400083',
  phoneDisplay: '+91 79772 17906',
  phoneTel: '+917977217906',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Toothsculpt+Dental+Clinic+Adityaraj+Square+Vikhroli+East+Mumbai',
  officialWebsiteUrl: 'https://toothsculpt.com/',
  instagramUrl: 'https://www.instagram.com/toothsculptdental/',
  rating: {
    score: '5.0',
    reviewCount: 161,
    source: 'Google Reviews (Supplied by website researcher; verify prior to launch)'
  }
};

/* ==========================================================================
   2. TREATMENT EDUCATIONAL DETAILS (MODAL DATA)
   ========================================================================== */
const TREATMENT_DETAILS = {
  implant: {
    title: 'Dental Implants',
    badge: 'Restorative Care',
    category: 'implant',
    formValue: 'Dental Implants',
    summary: 'A long-term, biocompatible solution designed to replace missing teeth and restore natural biting strength and aesthetics.',
    overview: 'Dental implants consist of a medical-grade titanium or zirconia post placed into the jawbone, acting as an artificial root topped with a custom-crafted porcelain crown. Unlike traditional bridges, implants do not require grinding down adjacent healthy teeth.',
    whoIsItFor: [
      'Individuals with one or multiple missing teeth looking for a permanent solution.',
      'Patients experiencing discomfort or slipping with removable dentures.',
      'Anyone seeking to prevent jawbone deterioration following tooth loss.',
      'Adults with healthy gums and adequate bone density (or candidates for bone augmentation).'
    ],
    consultationSteps: [
      'Comprehensive clinical oral examination and digital X-ray / CBCT evaluation.',
      'Assessment of bone height, gum health, and bite alignment.',
      'Discussion of customized implant options and stepwise timeline.',
      'Clear explanation of the healing phase and restorative crown fitting.'
    ],
    faq: 'How long do dental implants last? With proper oral hygiene and regular clinical checkups, dental implants are engineered to last many years and often a lifetime.'
  },
  rootCanal: {
    title: 'Root Canal Treatment (Endodontics)',
    badge: 'Tooth Preservation',
    category: 'rootCanal',
    formValue: 'Root Canal Treatment',
    summary: 'Gentle therapy designed to relieve severe toothache, eliminate bacterial infection, and save your natural tooth from extraction.',
    overview: 'When deep decay, trauma, or a crack reaches the inner pulp chamber of a tooth, the nerve can become inflamed or infected. Root canal treatment gently removes the infected pulp, thoroughly disinfects the root canals, and seals them with biocompatible filling material.',
    whoIsItFor: [
      'Persistent, throbbing tooth pain, particularly when chewing or applying pressure.',
      'Prolonged sensitivity to hot or cold temperatures even after the source is removed.',
      'Visible swelling, tenderness, or a small pimple-like bump on the gum line.',
      'Deep decay or a cracked tooth where the nerve has been compromised.'
    ],
    consultationSteps: [
      'Digital diagnostic imaging to pinpoint infection depth and root anatomy.',
      'Gentle vitality testing and symptom assessment.',
      'Discussion of pain relief measures and anesthesia options for chairside comfort.',
      'Recommendations for a protective custom crown to restore long-term chewing strength.'
    ],
    faq: 'Is root canal treatment painful? Modern local anesthesia and endodontic techniques make root canal treatment comparable to receiving a routine dental filling.'
  },
  cleaning: {
    title: 'Teeth Cleaning & Preventive Care',
    badge: 'Routine Wellness',
    category: 'cleaning',
    formValue: 'Teeth Cleaning & Preventive',
    summary: 'Professional ultrasonic scaling and polishing to remove stubborn plaque, tartar, and surface stains while protecting your gums.',
    overview: 'Even with diligent daily brushing and flossing, mineralized plaque (calculus or tartar) accumulates in hard-to-reach areas around teeth and below the gumline. Professional prophylaxis keeps oral tissues healthy and prevents early gingivitis from advancing into periodontitis.',
    whoIsItFor: [
      'Recommended every 6 months for adults and teenagers for optimal oral health.',
      'Patients noticing bleeding gums during brushing or flossing.',
      'Individuals with persistent bad breath (halitosis) or mild tooth discoloration from tea, coffee, or spices.',
      'Anyone preparing for orthodontic treatment, cosmetic bonding, or whitening.'
    ],
    consultationSteps: [
      'Thorough screening of teeth surfaces, gum pockets, and soft tissues.',
      'Gentle ultrasonic scaling to remove calculus deposits above and below the gum margin.',
      'Fine polishing with gentle prophylactic paste to smooth enamel surfaces.',
      'Personalized advice on brushing technique, interdental flossing, and home care.'
    ],
    faq: 'Does teeth cleaning weaken enamel? No. Ultrasonic scaling gently vibrates tartar away without eroding your natural enamel.'
  },
  dentures: {
    title: 'Dentures & Dental Bridges',
    badge: 'Smile Reconstruction',
    category: 'dentures',
    formValue: 'Dentures & Dental Bridges',
    summary: 'Custom-crafted prosthetic solutions to replace missing teeth, restore comfortable chewing, and preserve facial muscle tone.',
    overview: 'Missing teeth can cause neighbouring teeth to shift, alter your bite, and affect facial contours. Modern dental bridges fill the gap using sturdy ceramic crowns anchored to adjacent teeth, while precision dentures offer comfortable full or partial removable options.',
    whoIsItFor: [
      'Patients missing multiple consecutive teeth seeking a secure fixed bridge.',
      'Individuals needing partial or complete arch tooth replacement.',
      'Patients seeking an economical, non-surgical restorative option.',
      'Those wanting to improve speech clarity and chewing confidence.'
    ],
    consultationSteps: [
      'Detailed oral impression and digital scan of your dental arches and bite relationship.',
      'Evaluation of supporting teeth and gum ridge contour.',
      'Custom shade and shape selection to harmoniously match your natural smile.',
      'Try-in fitting, meticulous bite adjustment, and ongoing care guidance.'
    ],
    faq: 'How do I care for dentures or bridges? Clean bridges daily with special floss threaders or water flossers; dentures should be cleaned daily with soft brushes and soaked in cleansing solution overnight.'
  },
  consultation: {
    title: 'General Dental Consultations & Checkups',
    badge: 'Comprehensive Diagnosis',
    category: 'consultation',
    formValue: 'General Dental Consultation',
    summary: 'A relaxed, unrushed appointment to discuss any dental concerns, evaluate your oral health, and plan proactive care.',
    overview: 'Your consultation at Toothsculpt Dental Clinic is an open conversation. We believe patients should never feel rushed or pressured. We listen to your concerns, perform a gentle visual and diagnostic examination, and present clear options so you make informed choices.',
    whoIsItFor: [
      'New patients seeking a reliable, friendly dental home in Vikhroli East.',
      'Anyone experiencing mild tooth sensitivity, jaw tension, or cosmetic concerns.',
      'Patients seeking a professional second opinion before undertaking major dental procedures.',
      'Families looking for routine preventive checkups.'
    ],
    consultationSteps: [
      'Review of your medical history, oral health routine, and any immediate symptoms.',
      'Visual examination of teeth, gums, tongue, and bite alignment.',
      'Diagnostic X-rays when clinically indicated.',
      'Transparent discussion of findings, prioritized recommendations, and questions answered.'
    ],
    faq: 'What should I bring? Please bring any recent dental records, X-rays (if available), and a list of current medications.'
  }
};

/* ==========================================================================
   3. DOM READY INITIALIZATION
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileNav();
  initBackToTop();
  initSmoothScroll();
  initTreatmentModals();
  initFaqAccordion();
  initAppointmentForm();
  initScrollAnimations();
  initDeveloperSalesPitch();
  initGoogleMapsPreview();
  initHeroViewSwitcher();
  init3DTooth();
  init3DCardTilt();
});

/* ==========================================================================
   4. STICKY HEADER & SCROLL BEHAVIOR
   ========================================================================== */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* ==========================================================================
   5. MOBILE NAVIGATION DRAWER
   ========================================================================== */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-menu .nav-link, .nav-menu .mobile-cta-btn');

  if (!toggleBtn || !navMenu) return;

  const toggleMenu = (open) => {
    const isOpen = open !== undefined ? open : toggleBtn.getAttribute('aria-expanded') !== 'true';
    toggleBtn.setAttribute('aria-expanded', String(isOpen));
    navMenu.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      toggleMenu(false);
    });
  });

  document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
      toggleMenu(false);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('open')) {
      toggleMenu(false);
      toggleBtn.focus();
    }
  });
}

/* ==========================================================================
   6. BACK TO TOP BUTTON
   ========================================================================== */
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (!backToTopBtn) return;

  const toggleVisibility = () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  };

  window.addEventListener('scroll', toggleVisibility, { passive: true });
  toggleVisibility();

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ==========================================================================
   7. SMOOTH SCROLLING FOR IN-PAGE ANCHORS
   ========================================================================== */
function initSmoothScroll() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');

  anchorLinks.forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerHeight = document.querySelector('.site-header')?.offsetHeight || 76;
        const targetPosition = targetEl.getBoundingClientRect().top + window.scrollY - headerHeight - 16;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // Set focus for accessibility
        targetEl.setAttribute('tabindex', '-1');
        targetEl.focus({ preventScroll: true });
      }
    });
  });
}

/* ==========================================================================
   8. TREATMENT EDUCATIONAL MODALS
   ========================================================================== */
function initTreatmentModals() {
  const modalOverlay = document.getElementById('treatmentModalOverlay');
  const closeBtn = document.getElementById('modalCloseBtn');
  const openButtons = document.querySelectorAll('[data-treatment-key]');
  const enquireActionBtn = document.getElementById('modalEnquireBtn');

  if (!modalOverlay || !closeBtn) return;

  let currentTreatmentKey = null;
  let lastFocusedElement = null;

  const openModal = (key, triggerElement) => {
    const data = TREATMENT_DETAILS[key];
    if (!data) return;

    currentTreatmentKey = key;
    lastFocusedElement = triggerElement;

    // Populate modal contents
    document.getElementById('modalBadge').textContent = data.badge;
    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalOverview').textContent = data.overview;

    const whoList = document.getElementById('modalWhoList');
    whoList.innerHTML = '';
    data.whoIsItFor.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      whoList.appendChild(li);
    });

    const stepsList = document.getElementById('modalStepsList');
    stepsList.innerHTML = '';
    data.consultationSteps.forEach((step) => {
      const li = document.createElement('li');
      li.textContent = step;
      stepsList.appendChild(li);
    });

    document.getElementById('modalFaqText').textContent = data.faq;

    // Show modal
    modalOverlay.classList.add('active');
    modalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    closeBtn.focus();
  };

  const closeModal = () => {
    modalOverlay.classList.remove('active');
    modalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  };

  openButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const key = btn.getAttribute('data-treatment-key');
      openModal(key, btn);
    });
  });

  closeBtn.addEventListener('click', closeModal);

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  // Action button: Enquire about this treatment
  if (enquireActionBtn) {
    enquireActionBtn.addEventListener('click', () => {
      const treatmentData = TREATMENT_DETAILS[currentTreatmentKey];
      closeModal();

      const treatmentSelect = document.getElementById('treatmentSelect');
      if (treatmentSelect && treatmentData) {
        treatmentSelect.value = treatmentData.formValue;
      }

      const bookingSection = document.getElementById('book-appointment');
      if (bookingSection) {
        const headerHeight = document.querySelector('.site-header')?.offsetHeight || 76;
        const targetPosition = bookingSection.getBoundingClientRect().top + window.scrollY - headerHeight - 16;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        setTimeout(() => {
          document.getElementById('patientName')?.focus();
        }, 500);
      }
    });
  }
}

/* ==========================================================================
   9. FAQ ACCORDION INTERACTION
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item) => {
    const btn = item.querySelector('.faq-question-btn');
    const panel = item.querySelector('.faq-answer-panel');

    if (!btn || !panel) return;

    btn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all others for an editorial, tidy look
      faqItems.forEach((other) => {
        if (other !== item) {
          other.classList.remove('active');
          const otherBtn = other.querySelector('.faq-question-btn');
          const otherPanel = other.querySelector('.faq-answer-panel');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          if (otherPanel) otherPanel.style.maxHeight = null;
        }
      });

      // Toggle current
      if (isActive) {
        item.classList.remove('active');
        btn.setAttribute('aria-expanded', 'false');
        panel.style.maxHeight = null;
      } else {
        item.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });
}

/* ==========================================================================
   10. APPOINTMENT FORM VALIDATION & DEMO SUBMISSION
   ========================================================================== */
function initAppointmentForm() {
  const form = document.getElementById('appointmentForm');
  const successModalOverlay = document.getElementById('successModalOverlay');
  const successCloseBtn = document.getElementById('successModalCloseBtn');
  const submitBtn = document.getElementById('submitAppointmentBtn');

  if (!form) return;

  // Set min date to today
  const dateInput = document.getElementById('preferredDate');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }

  // Helper validation functions
  const validateName = (value) => {
    return value.trim().length >= 2;
  };

  const validateIndianPhone = (value) => {
    // Accepts 10 digits or +91 followed by 10 digits (starting with 6,7,8,9)
    const cleaned = value.replace(/[\s\-\(\)]/g, '');
    const indianPhoneRegex = /^(?:\+91|91|0)?[6789]\d{9}$/;
    return indianPhoneRegex.test(cleaned);
  };

  const showFieldError = (fieldId, errorMsg) => {
    const input = document.getElementById(fieldId);
    const errorEl = document.getElementById(`${fieldId}-error`);
    if (input) input.classList.add('has-error');
    if (errorEl) {
      errorEl.textContent = errorMsg;
      errorEl.classList.add('visible');
    }
  };

  const clearFieldError = (fieldId) => {
    const input = document.getElementById(fieldId);
    const errorEl = document.getElementById(`${fieldId}-error`);
    if (input) input.classList.remove('has-error');
    if (errorEl) {
      errorEl.textContent = '';
      errorEl.classList.remove('visible');
    }
  };

  // Real-time error clearing
  ['patientName', 'patientPhone', 'consentCheck'].forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', () => clearFieldError(id));
      el.addEventListener('change', () => clearFieldError(id));
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;
    let firstInvalidField = null;

    // Validate Name
    const nameInput = document.getElementById('patientName');
    if (!nameInput || !validateName(nameInput.value)) {
      showFieldError('patientName', 'Please enter your full name (minimum 2 characters).');
      isValid = false;
      if (!firstInvalidField) firstInvalidField = nameInput;
    } else {
      clearFieldError('patientName');
    }

    // Validate Phone (Indian Mobile)
    const phoneInput = document.getElementById('patientPhone');
    if (!phoneInput || !validateIndianPhone(phoneInput.value)) {
      showFieldError('patientPhone', 'Please enter a valid 10-digit Indian mobile number (e.g. 98765 43210).');
      isValid = false;
      if (!firstInvalidField) firstInvalidField = phoneInput;
    } else {
      clearFieldError('patientPhone');
    }

    // Validate Consent Checkbox
    const consentInput = document.getElementById('consentCheck');
    if (!consentInput || !consentInput.checked) {
      showFieldError('consentCheck', 'Please acknowledge consent for clinic contact.');
      isValid = false;
      if (!firstInvalidField) firstInvalidField = consentInput;
    } else {
      clearFieldError('consentCheck');
    }

    if (!isValid) {
      if (firstInvalidField) {
        firstInvalidField.focus();
      }
      return;
    }

    // Display loading state
    if (submitBtn) {
      submitBtn.classList.add('loading');
      submitBtn.disabled = true;
    }

    // Simulated short delay (600ms) for UI feedback, then show transparent Demo Modal
    setTimeout(() => {
      if (submitBtn) {
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
      }

      form.reset();

      // Show success demo modal
      if (successModalOverlay) {
        successModalOverlay.classList.add('active');
        successModalOverlay.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      }
    }, 600);
  });

  // Close Success Modal
  if (successCloseBtn && successModalOverlay) {
    const closeSuccess = () => {
      successModalOverlay.classList.remove('active');
      successModalOverlay.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    };

    successCloseBtn.addEventListener('click', closeSuccess);
    successModalOverlay.addEventListener('click', (e) => {
      if (e.target === successModalOverlay) closeSuccess();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && successModalOverlay.classList.contains('active')) {
        closeSuccess();
      }
    });
  }
}

/* ==========================================================================
   11. SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
   ========================================================================== */
function initScrollAnimations() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return; // Respect reduced motion
  }

  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if (!('IntersectionObserver' in window)) {
    revealElements.forEach((el) => el.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.1
  });

  revealElements.forEach((el) => observer.observe(el));
}

/* ==========================================================================
   12. DEVELOPER SALES PRESENTATION MODE (?demo=sales)
   ========================================================================== */
function initDeveloperSalesPitch() {
  const urlParams = new URLSearchParams(window.location.search);
  const isSalesDemo = urlParams.get('demo') === 'sales';
  const dock = document.getElementById('devPitchDock');
  const footerTrigger = document.getElementById('footerDemoTrigger');
  const copyLinkBtn = document.getElementById('dockCopyLinkBtn');
  const highlightBtn = document.getElementById('dockHighlightBtn');
  const collapseBtn = document.getElementById('dockCollapseBtn');
  const closeBtn = document.getElementById('dockCloseBtn');
  const dockHeader = document.querySelector('.dock-header');

  if (!dock) return;

  const showDock = () => {
    dock.classList.add('active');
    dock.classList.remove('collapsed');
  };

  const hideDock = () => {
    dock.classList.remove('active');
  };

  const toggleCollapse = () => {
    dock.classList.toggle('collapsed');
  };

  // If URL has ?demo=sales, show immediately
  if (isSalesDemo) {
    showDock();
  }

  // Footer button toggles dock
  if (footerTrigger) {
    footerTrigger.addEventListener('click', (e) => {
      e.preventDefault();
      showDock();
      dock.scrollIntoView({ behavior: 'smooth', block: 'end' });
    });
  }

  if (dockHeader) {
    dockHeader.addEventListener('click', (e) => {
      if (e.target.closest('.dock-controls')) return;
      toggleCollapse();
    });
  }

  if (collapseBtn) {
    collapseBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleCollapse();
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      hideDock();
    });
  }

  // Feature: Highlight conversion triggers on the page
  let isHighlightActive = false;
  if (highlightBtn) {
    highlightBtn.addEventListener('click', () => {
      isHighlightActive = !isHighlightActive;
      const conversionElements = document.querySelectorAll(
        '.btn-primary, .btn-gold, .hero-rating-badge, #appointmentForm, .contact-card, .announcement-phone'
      );

      conversionElements.forEach((el) => {
        el.classList.toggle('highlight-conversion', isHighlightActive);
      });

      highlightBtn.innerHTML = isHighlightActive
        ? '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg> Remove Highlighting'
        : '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z"/></svg> Highlight Key CTAs';

      showToast(isHighlightActive ? 'Conversion points highlighted on page' : 'Highlights removed');
    });
  }

  // Feature: Copy pitch link with fallback
  if (copyLinkBtn) {
    copyLinkBtn.addEventListener('click', () => {
      const url = new URL(window.location.href);
      url.searchParams.set('demo', 'sales');
      const shareUrl = url.toString();

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(() => {
          showToast('Demo link copied to clipboard!');
        }).catch(() => {
          fallbackCopyText(shareUrl);
        });
      } else {
        fallbackCopyText(shareUrl);
      }
    });
  }

  function fallbackCopyText(text) {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    try {
      document.execCommand('copy');
      showToast('Demo link copied to clipboard!');
    } catch (err) {
      window.prompt('Copy this demo presentation link:', text);
    }
    document.body.removeChild(tempInput);
  }
}

/* ==========================================================================
   13. TOAST NOTIFICATION UTILITY
   ========================================================================== */
function showToast(message) {
  let toast = document.getElementById('siteToastNotice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'siteToastNotice';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add('visible');

  setTimeout(() => {
    toast.classList.remove('visible');
  }, 3200);
}

/* ==========================================================================
   14. GOOGLE MAPS PREVIEW & FALLBACK
   ========================================================================== */
function initGoogleMapsPreview() {
  const mapContainer = document.getElementById('mapViewContainer');
  if (!mapContainer) return;

  // An elegant, responsive embedded OpenStreetMap visual showing Kannamwar Nagar II, Vikhroli East
  // without needing any proprietary Google API keys
  mapContainer.innerHTML = `
    <iframe
      title="Toothsculpt Dental Clinic Location Map"
      src="https://www.openstreetmap.org/export/embed.html?bbox=72.9250%2C19.0950%2C72.9420%2C19.1080&amp;layer=mapnik&amp;marker=19.1018%2C72.9335"
      width="100%"
      height="100%"
      style="border:0;"
      loading="lazy">
    </iframe>
  `;
}

/* ==========================================================================
   15. HERO VIEW SWITCHER (3D TOOTH VS CLINIC OPERATORY)
   ========================================================================== */
function initHeroViewSwitcher() {
  const btn3d = document.getElementById('viewSwitch3d');
  const btnClinic = document.getElementById('viewSwitchClinic');
  const pane3d = document.getElementById('hero3dPane');
  const paneClinic = document.getElementById('heroClinicPane');

  if (!btn3d || !btnClinic || !pane3d || !paneClinic) return;

  btn3d.addEventListener('click', () => {
    btn3d.classList.add('active');
    btn3d.setAttribute('aria-selected', 'true');
    btnClinic.classList.remove('active');
    btnClinic.setAttribute('aria-selected', 'false');

    pane3d.classList.add('active');
    paneClinic.classList.remove('active');

    // Trigger window resize so Three.js canvas adjusts buffer size
    window.dispatchEvent(new Event('resize'));
  });

  btnClinic.addEventListener('click', () => {
    btnClinic.classList.add('active');
    btnClinic.setAttribute('aria-selected', 'true');
    btn3d.classList.remove('active');
    btn3d.setAttribute('aria-selected', 'false');

    paneClinic.classList.add('active');
    pane3d.classList.remove('active');
  });
}

/* ==========================================================================
   16. THREE.JS PROCEDURAL 3D TOOTH STUDIO
   ========================================================================== */
function init3DTooth() {
  const container = document.getElementById('hero3dContainer');
  const canvas = document.getElementById('tooth3dCanvas');

  if (!container || !canvas) return;

  // Graceful fallback if Three.js CDN was blocked or failed to load
  if (typeof THREE === 'undefined') {
    console.info('Three.js not detected; displaying clinic operatory view.');
    const btnClinic = document.getElementById('viewSwitchClinic');
    if (btnClinic) btnClinic.click();
    return;
  }

  try {
    const scene = new THREE.Scene();

    const getWidth = () => container.clientWidth || 480;
    const getHeight = () => container.clientHeight || 420;

    const camera = new THREE.PerspectiveCamera(38, getWidth() / getHeight(), 0.1, 100);
    camera.position.set(0, 0.18, 5.0);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(getWidth(), getHeight());
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

    // Dental Porcelain Materials
    const enamelMat = new THREE.MeshPhysicalMaterial({
      color: 0xfefefe,
      roughness: 0.14,
      metalness: 0.04,
      clearcoat: 0.95,
      clearcoatRoughness: 0.08
    });

    const rootMat = new THREE.MeshPhysicalMaterial({
      color: 0xf6f0e2,
      roughness: 0.32,
      metalness: 0.02,
      clearcoat: 0.35,
      clearcoatRoughness: 0.2
    });

    const goldRingMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 0.85,
      roughness: 0.25
    });

    // Main Tooth Container Group
    const toothGroup = new THREE.Group();
    toothGroup.scale.set(0.9, 0.9, 0.9);
    toothGroup.position.set(0.12, 0, 0);
    scene.add(toothGroup);

    // 1. Procedural Crown (Deformed sphere with 4 sculpted cusps)
    const crownGeo = new THREE.SphereGeometry(0.88, 64, 48);
    const cPos = crownGeo.attributes.position;
    for (let i = 0; i < cPos.count; i++) {
      let x = cPos.getX(i);
      let y = cPos.getY(i);
      let z = cPos.getZ(i);

      // Squarish-oval molar profile
      const angle = Math.atan2(z, x);
      const squareFactor = 1.0 + 0.09 * Math.cos(4 * angle);
      x *= squareFactor;
      z *= squareFactor;

      // Bottom waist taper
      if (y < 0) {
        let taper = 1.0 + y * 0.35;
        x *= taper;
        z *= taper;
        y *= 0.65;
      } else {
        // Occlusal table top with 4 cusps and central dip
        y *= 0.85;
        let cusp1 = Math.exp(-((x - 0.36)**2 + (z - 0.36)**2) * 12) * 0.22;
        let cusp2 = Math.exp(-((x + 0.36)**2 + (z - 0.36)**2) * 12) * 0.22;
        let cusp3 = Math.exp(-((x - 0.36)**2 + (z + 0.36)**2) * 12) * 0.20;
        let cusp4 = Math.exp(-((x + 0.36)**2 + (z + 0.36)**2) * 12) * 0.20;
        let centerDip = -Math.exp(-(x**2 + z**2) * 14) * 0.12;
        y += (cusp1 + cusp2 + cusp3 + cusp4 + centerDip);
      }
      cPos.setXYZ(i, x, y, z);
    }
    crownGeo.computeVertexNormals();
    const crownMesh = new THREE.Mesh(crownGeo, enamelMat);
    crownMesh.position.y = 0.45;
    toothGroup.add(crownMesh);

    // 2. Cervical Transition Collar
    const collarGeo = new THREE.CylinderGeometry(0.72, 0.62, 0.3, 48, 8);
    const collarMesh = new THREE.Mesh(collarGeo, rootMat);
    collarMesh.position.y = 0.15;
    toothGroup.add(collarMesh);

    // 3. Mesial & Distal Curved Roots
    function createRoot(xOffset, zOffset, curveX, curveZ, length, taper) {
      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(xOffset * 0.7, 0.05, zOffset * 0.7),
        new THREE.Vector3(xOffset, -0.35, zOffset + curveZ * 0.05),
        new THREE.Vector3(xOffset * 1.15 + curveX * 0.1, -0.8, zOffset + curveZ * 0.15),
        new THREE.Vector3(xOffset + curveX * 0.2, 0.05 - length, zOffset + curveZ * 0.25)
      ]);
      const tubeGeo = new THREE.TubeGeometry(curve, 32, 0.23, 20, false);
      const tPos = tubeGeo.attributes.position;
      for (let i = 0; i < tPos.count; i++) {
        let ty = tPos.getY(i);
        let progress = Math.min(1, Math.max(0, (0.05 - ty) / length));
        let scale = 1.0 - progress * taper;
        let pt = curve.getPoint(progress);
        let dx = tPos.getX(i) - pt.x;
        let dz = tPos.getZ(i) - pt.z;
        tPos.setX(i, pt.x + dx * scale);
        tPos.setZ(i, pt.z + dz * scale);
      }
      tubeGeo.computeVertexNormals();
      return new THREE.Mesh(tubeGeo, rootMat);
    }

    const leftRoot = createRoot(-0.32, 0, -0.25, 0.1, 1.25, 0.7);
    const rightRoot = createRoot(0.32, 0, 0.25, -0.1, 1.3, 0.72);
    toothGroup.add(leftRoot);
    toothGroup.add(rightRoot);

    // Root apex caps
    const apexGeo = new THREE.SphereGeometry(0.07, 16, 16);
    const leftApex = new THREE.Mesh(apexGeo, rootMat);
    leftApex.position.set(-0.32 - 0.2, 0.05 - 1.25, 0.25);
    const rightApex = new THREE.Mesh(apexGeo, rootMat);
    rightApex.position.set(0.32 + 0.2, 0.05 - 1.3, -0.25);
    toothGroup.add(leftApex);
    toothGroup.add(rightApex);

    // 4. Champagne Gold Collar Ring
    const ringGeo = new THREE.TorusGeometry(0.73, 0.016, 16, 64);
    ringGeo.rotateX(Math.PI / 2);
    const ringMesh = new THREE.Mesh(ringGeo, goldRingMat);
    ringMesh.position.y = 0.25;
    toothGroup.add(ringMesh);

    // 5. Floating Champagne Sparkles
    const pCount = 50;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount; i++) {
      let r = 1.3 + Math.random() * 0.9;
      let theta = Math.random() * Math.PI * 2;
      let py = (Math.random() - 0.45) * 2.5;
      pPos[i * 3] = Math.cos(theta) * r;
      pPos[i * 3 + 1] = py;
      pPos[i * 3 + 2] = Math.sin(theta) * r;
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0xD4AF37,
      size: 0.045,
      transparent: true,
      opacity: 0.85
    });
    const sparkles = new THREE.Points(pGeo, pMat);
    scene.add(sparkles);

    // Studio Lights
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.25);
    keyLight.position.set(3, 4, 5);
    scene.add(keyLight);

    const goldLight = new THREE.PointLight(0xc5a059, 1.5, 12);
    goldLight.position.set(-3, -1, 3);
    scene.add(goldLight);

    const rimLight = new THREE.DirectionalLight(0x2dd4bf, 0.85);
    rimLight.position.set(0, 3, -4);
    scene.add(rimLight);

    const ambientLight = new THREE.AmbientLight(0xfff7ec, 0.65);
    scene.add(ambientLight);

    // Interactive Drag Controls (Mouse & Touch)
    let isDragging = false;
    let prevX = 0;
    let prevY = 0;
    let targetRotY = 0.4;
    let targetRotX = 0.1;
    let autoRotate = true;

    const onPointerDown = (clientX, clientY) => {
      isDragging = true;
      autoRotate = false;
      prevX = clientX;
      prevY = clientY;
    };

    const onPointerMove = (clientX, clientY) => {
      if (!isDragging) return;
      const dx = clientX - prevX;
      const dy = clientY - prevY;
      targetRotY += dx * 0.01;
      targetRotX += dy * 0.008;
      targetRotX = Math.max(-0.65, Math.min(0.65, targetRotX));
      prevX = clientX;
      prevY = clientY;
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    canvas.addEventListener('mousedown', (e) => onPointerDown(e.clientX, e.clientY));
    window.addEventListener('mousemove', (e) => onPointerMove(e.clientX, e.clientY));
    window.addEventListener('mouseup', onPointerUp);

    canvas.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) onPointerDown(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (isDragging && e.touches.length === 1) onPointerMove(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });

    window.addEventListener('touchend', onPointerUp);

    // Preset Angle View Buttons
    const presetButtons = container.querySelectorAll('.tooth-preset-btn');
    presetButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        presetButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const view = btn.dataset.view;
        autoRotate = false;

        if (view === 'all') {
          targetRotX = 0.1;
          targetRotY += 0.5;
          autoRotate = true;
        } else if (view === 'crown') {
          targetRotX = 0.55;
          targetRotY = 0;
        } else if (view === 'roots') {
          targetRotX = -0.4;
          targetRotY = Math.PI / 2;
        }
      });
    });

    // Handle Window Resize
    const onResize = () => {
      const w = getWidth();
      const h = getHeight();
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    // Animation Loop
    let clock = new THREE.Clock();
    let animFrameId;

    function renderLoop() {
      animFrameId = requestAnimationFrame(renderLoop);
      const elapsed = clock.getElapsedTime();

      if (autoRotate) {
        targetRotY += 0.006;
      }

      // Smooth inertia damping
      toothGroup.rotation.y += (targetRotY - toothGroup.rotation.y) * 0.08;
      toothGroup.rotation.x += (targetRotX - toothGroup.rotation.x) * 0.08;
      toothGroup.position.y = Math.sin(elapsed * 1.5) * 0.05;

      sparkles.rotation.y += 0.002;
      sparkles.rotation.x = Math.sin(elapsed * 0.5) * 0.05;

      renderer.render(scene, camera);
    }

    renderLoop();
  } catch (err) {
    console.warn('Unable to initialize 3D Tooth Studio:', err);
  }
}

/* ==========================================================================
   17. 3D CARD PERSPECTIVE TILT EFFECTS
   ========================================================================== */
function init3DCardTilt() {
  // Check if device supports hover / not pure touch
  if (window.matchMedia('(hover: none)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const tiltCards = document.querySelectorAll(
    '.treatment-card, .reason-card, .review-card, .booking-split-card'
  );

  tiltCards.forEach(card => {
    let ticking = false;

    card.addEventListener('mousemove', (e) => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -6; // max 6deg
        const rotateY = ((x - centerX) / centerX) * 6;  // max 6deg

        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.015, 1.015, 1.015)`;
        ticking = false;
      });
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  });
}
