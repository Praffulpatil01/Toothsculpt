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
