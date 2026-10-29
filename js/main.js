// Ankush Classes - Core JavaScript
// Mobile Menu, Formspree AJAX Submission, Dynamic Copyright, Accessibility

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const closeDrawer = document.getElementById('close-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  function openMenu() {
    if (mobileDrawer) {
      mobileDrawer.classList.add('open');
      mobileDrawer.setAttribute('aria-hidden', 'false');
      if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeMenu() {
    if (mobileDrawer) {
      mobileDrawer.classList.remove('open');
      mobileDrawer.setAttribute('aria-hidden', 'true');
      if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  }

  if (mobileToggle) {
    mobileToggle.addEventListener('click', openMenu);
  }

  if (closeDrawer) {
    closeDrawer.addEventListener('click', closeMenu);
  }

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer && mobileDrawer.classList.contains('open')) {
      closeMenu();
    }
  });

  // 2. Dynamic Copyright Year
  const yearSpans = document.querySelectorAll('.current-year');
  const currentYear = new Date().getFullYear();
  yearSpans.forEach(span => {
    span.textContent = currentYear;
  });

  // 3. Formspree AJAX Handler (No Redirect Flow)
  const contactForm = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');
  const alertSuccess = document.getElementById('alert-success');
  const alertError = document.getElementById('alert-error');

  if (contactForm && submitBtn) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Clear previous alerts
      if (alertSuccess) alertSuccess.style.display = 'none';
      if (alertError) alertError.style.display = 'none';

      const originalBtnText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Sending...</span>';

      const formData = new FormData(contactForm);

      try {
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          if (alertSuccess) {
            alertSuccess.style.display = 'block';
            alertSuccess.innerHTML = '<strong>Message sent successfully.</strong><p style="margin-top:0.25rem;">Thank you for contacting Ankush Classes. Your message has been received.</p>';
          }
          contactForm.reset();
        } else {
          throw new Error('Form submission failed');
        }
      } catch (err) {
        if (alertError) {
          alertError.style.display = 'block';
          alertError.innerHTML = '<strong>Unable to send your message.</strong><p style="margin-top:0.25rem;">Please check your connection and try again, or email us directly at <a href="mailto:ankushchowrasiabusiness@gmail.com" style="text-decoration:underline;">ankushchowrasiabusiness@gmail.com</a>.</p>';
        }
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
      }
    });
  }
});
