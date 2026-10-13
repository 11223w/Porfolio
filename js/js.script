/* =========================================================
   Runs after the HTML is loaded (script uses "defer")
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  setupMobileMenu();      // Recommended
  setupDropdown();        // Recommended (the "More" menu)
  highlightActiveLink();  // Recommended
  setupScrollReveal();    // Optional
  setupBackToTop();       // Optional
  setupPrintButton();     // Optional (only runs on resume.html)
  setupContactForm();     // Recommended (only runs on contact.html)
});

/* ---------- 1. Mobile hamburger menu (RECOMMENDED) ---------- */
function setupMobileMenu() {
  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-menu");
  if (!toggle || !menu) return;

  function setMenu(open) {
    menu.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
  }

  toggle.addEventListener("click", () => {
    setMenu(!menu.classList.contains("open"));
  });

  // Close the menu after clicking a link
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenu(false));
  });

  // Close the menu with the Escape key
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenu(false);
  });
}

/* ---------- 2. "More" dropdown menu (RECOMMENDED) ---------- */
// On desktop it opens as a floating panel. On mobile it opens inside the menu.
function setupDropdown() {
  const dropdown = document.querySelector(".has-dropdown");
  const toggle = document.getElementById("dropdown-toggle");
  if (!dropdown || !toggle) return;

  function setOpen(open) {
    dropdown.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
  }

  toggle.addEventListener("click", () => {
    setOpen(!dropdown.classList.contains("open"));
  });

  // Close when clicking anywhere outside the dropdown
  document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) setOpen(false);
  });

  // Close with Escape and put focus back on the button
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && dropdown.classList.contains("open")) {
      setOpen(false);
      toggle.focus();
    }
  });

  // Close when keyboard focus moves out of the dropdown
  dropdown.addEventListener("focusout", (event) => {
    if (event.relatedTarget && !dropdown.contains(event.relatedTarget)) setOpen(false);
  });
}

/* ---------- 3. Active navigation link (RECOMMENDED) ---------- */
function highlightActiveLink() {
  // Get the current file name, e.g. "about.html" (defaults to index.html)
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".nav-link").forEach((link) => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");

      // If the active link is inside "More", highlight the "More" button too
      const parentDropdown = link.closest(".has-dropdown");
      if (parentDropdown) {
        parentDropdown.querySelector(".dropdown-toggle").classList.add("active");
      }
    }
  });
}

/* ---------- 4. Scroll reveal animations (OPTIONAL) ---------- */
function setupScrollReveal() {
  // Elements listed here fade in as you scroll. Add more selectors if you like.
  const targets = document.querySelectorAll(
    ".section-title, .section-lead, .card, .about-text, .skill-list li, .timeline-item, .contact-info, .table-wrap, .callout, .quote"
  );
  if (!("IntersectionObserver" in window)) return; // Older browsers: just show everything

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target); // Animate only once
        }
      });
    },
    { threshold: 0.15 }
  );

  targets.forEach((el) => {
    el.classList.add("reveal");
    observer.observe(el);
  });
}

/* ---------- 5. Back-to-top button (OPTIONAL) ---------- */
function setupBackToTop() {
  const button = document.getElementById("back-to-top");
  if (!button) return;

  window.addEventListener("scroll", () => {
    button.classList.toggle("show", window.scrollY > 400);
  });

  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ---------- 6. Print / Save as PDF button on the resume (OPTIONAL) ---------- */
function setupPrintButton() {
  const button = document.getElementById("print-resume");
  if (!button) return; // Not on the resume page
  button.addEventListener("click", () => window.print());
}

/* ---------- 7. Contact form validation (RECOMMENDED) ---------- */

// This form has no backend, so it only checks the fields. Once you connect a
// service (Formspree, EmailJS...), change this text to something like
// "Thanks! Your message has been sent."
const FORM_SUCCESS_MESSAGE = "Form validated. This demo form doesn't send messages yet.";

function setupContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return; // Not on the contact page

  const fields = {
    name: {
      input: document.getElementById("name"),
      error: document.getElementById("name-error"),
      check: (v) => (v.length >= 2 ? "" : "Please enter your name (at least 2 characters)."),
    },
    email: {
      input: document.getElementById("email"),
      error: document.getElementById("email-error"),
      check: (v) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? "" : "Please enter a valid email address.",
    },
    subject: {
      input: document.getElementById("subject"),
      error: document.getElementById("subject-error"),
      check: (v) => (v.length >= 3 ? "" : "Please enter a subject (at least 3 characters)."),
    },
    message: {
      input: document.getElementById("message"),
      error: document.getElementById("message-error"),
      check: (v) => (v.length >= 10 ? "" : "Your message should be at least 10 characters."),
    },
  };

  // Skip any field that is missing from the HTML, so the script never crashes
  const activeFields = Object.values(fields).filter((f) => f.input && f.error);

  // Validate one field and show or clear its error. Returns true if valid.
  function validateField(field) {
    const message = field.check(field.input.value.trim());
    field.error.textContent = message;
    field.input.classList.toggle("invalid", message !== "");
    field.input.classList.toggle("valid", message === "");
    field.input.setAttribute("aria-invalid", String(message !== ""));
    return message === "";
  }

  // Check each field when the user leaves it
  activeFields.forEach((field) => {
    field.input.addEventListener("blur", () => validateField(field));
    field.input.addEventListener("input", () => {
      if (field.input.classList.contains("invalid")) validateField(field);
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Stop the page from reloading

    // Validate every field (no short-circuit so all errors show)
    const results = activeFields.map(validateField);
    const allValid = results.every(Boolean);

    if (allValid) {
      // No backend here: this is where you would send the data to a service.
      showToast(FORM_SUCCESS_MESSAGE);
      form.reset();
      activeFields.forEach((f) => f.input.classList.remove("valid", "invalid"));
    } else {
      const firstInvalid = activeFields.find((f) => f.input.classList.contains("invalid"));
      if (firstInvalid) firstInvalid.input.focus();
    }
  });
}

/* ---------- 8. Notification message ---------- */
function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 4500);
}
