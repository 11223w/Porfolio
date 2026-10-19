
/* =========================================================
   Runs after the HTML is loaded (script uses "defer")
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  setupMobileMenu();
  setupDropdown();
  highlightActiveLink();
  setupScrollReveal();
  setupBackToTop();
  setupPrintButton();
  setupContactForm();
});

/* ---------- 1. Mobile hamburger menu ---------- */
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

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenu(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenu(false);
  });
}

/* ---------- 2. "More" dropdown menu ---------- */
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

  document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) setOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && dropdown.classList.contains("open")) {
      setOpen(false);
      toggle.focus();
    }
  });

  dropdown.addEventListener("focusout", (event) => {
    if (event.relatedTarget && !dropdown.contains(event.relatedTarget)) {
      setOpen(false);
    }
  });
}

/* ---------- 3. Active navigation link ---------- */
function highlightActiveLink() {
  const currentPage =
    document.body.dataset.nav ||
    window.location.pathname.split("/").pop() ||
    "index.html";

  document.querySelectorAll(".nav-link").forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");

      const parentDropdown = link.closest(".has-dropdown");
      if (parentDropdown) {
        parentDropdown
          .querySelector(".dropdown-toggle")
          .classList.add("active");
      }
    }
  });
}

/* ---------- 4. Scroll reveal animations ---------- */
function setupScrollReveal() {
  const targets = document.querySelectorAll(
    ".section-title, .section-lead, .card, .about-text, " +
    ".skill-list li, .timeline-item, .contact-info, " +
    ".table-wrap, .callout, .quote"
  );

  if (!("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  targets.forEach((element) => {
    element.classList.add("reveal");
    observer.observe(element);
  });
}

/* ---------- 5. Back-to-top button ---------- */
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

/* ---------- 6. Print / Save as PDF ---------- */
function setupPrintButton() {
  const button = document.getElementById("print-resume");
  if (!button) return;

  button.addEventListener("click", () => window.print());
}

/* ---------- 7. Contact form + Formspree ---------- */
function setupContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const submitButton = form.querySelector('[type="submit"]');
  if (!submitButton) return;

  // Use our custom validation messages.
  form.noValidate = true;

  const originalButtonText = submitButton.textContent.trim();

  const fields = {
    name: {
      input: document.getElementById("name"),
      error: document.getElementById("name-error"),
      check: (value) =>
        value.length >= 2
          ? ""
          : "Please enter your name (at least 2 characters).",
    },

    email: {
      input: document.getElementById("email"),
      error: document.getElementById("email-error"),
      check: (value) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? ""
          : "Please enter a valid email address.",
    },

    subject: {
      input: document.getElementById("subject"),
      error: document.getElementById("subject-error"),
      check: (value) =>
        value.length >= 3
          ? ""
          : "Please enter a subject (at least 3 characters).",
    },

    message: {
      input: document.getElementById("message"),
      error: document.getElementById("message-error"),
      check: (value) =>
        value.length >= 10
          ? ""
          : "Your message should be at least 10 characters.",
    },
  };

  const activeFields = Object.values(fields).filter(
    (field) => field.input && field.error
  );

  function validateField(field) {
    const value = field.input.value.trim();
    const message = field.check(value);

    field.error.textContent = message;
    field.input.classList.toggle("invalid", message !== "");
    field.input.classList.toggle("valid", message === "");
    field.input.setAttribute("aria-invalid", String(message !== ""));

    return message === "";
  }

  // Validate when leaving a field and while correcting errors.
  activeFields.forEach((field) => {
    field.input.addEventListener("blur", () => {
      validateField(field);
    });

    field.input.addEventListener("input", () => {
      if (field.input.classList.contains("invalid")) {
        validateField(field);
      }
    });
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    // Prevent accidental duplicate submissions.
    if (submitButton.disabled) return;

    const results = activeFields.map(validateField);

    if (!results.every(Boolean)) {
      const firstInvalid = activeFields.find(
        (field) => field.input.classList.contains("invalid")
      );

      if (firstInvalid) firstInvalid.input.focus();

      showToast("Please correct the errors before sending.");
      return;
    }

    // Read the Formspree endpoint from the HTML form.
    const endpoint = form.action;

    if (
      !endpoint ||
      !/^https:\/\/formspree\.io\/f\/[a-zA-Z0-9]+\/?$/.test(endpoint) ||
      endpoint.includes("https://formspree.io/f/mwlvzyno")
    ) {
      showToast("Please configure your Formspree form ID first.");
      return;
    }

    submitButton.disabled = true;
    submitButton.textContent = "Sending...";
    form.setAttribute("aria-busy", "true");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        const detail = Array.isArray(result.errors)
          ? result.errors
              .map((error) => error.message)
              .filter(Boolean)
              .join(" ")
          : "";

        throw new Error(
          detail || "Unable to send your message. Please try again."
        );
      }

      // Only clear the form after Formspree accepts the submission.
      form.reset();

      activeFields.forEach((field) => {
        field.input.classList.remove("valid", "invalid");
        field.input.removeAttribute("aria-invalid");
        field.error.textContent = "";
      });

      showToast("Thank you! Your message has been sent successfully.");
    } catch (error) {
      console.error("Contact form error:", error);

      showToast(
        error.message ||
          "Something went wrong. Please check your connection and try again."
      );
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = originalButtonText;
      form.removeAttribute("aria-busy");
    }
  });
}

/* ---------- 8. Notification message ---------- */
function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 4500);
    }
