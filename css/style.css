/* =========================================================
   1. DESIGN TOKENS (change colors, fonts and spacing here)
   Dark, high-contrast theme with violet + cyan accents.
   ========================================================= */
:root {
  color-scheme: dark; /* dark scrollbars and form controls */

  /* Surfaces */
  --bg: #030409;       /* near-black, like a true dark UI */
  --bg-soft: #090b13;
  --surface: #0f121c;
  --surface-2: #151a28;

  /* Lines */
  --border: rgba(255, 255, 255, 0.09);
  --border-strong: rgba(255, 255, 255, 0.18);
  --grid-line: rgba(255, 255, 255, 0.05);

  /* Text */
  --heading: #ffffff;
  --text: #e8eaf2;
  --muted: #a3a9bc;

  /* Brand */
  --primary: #7c3aed;       /* white text on this passes AA */
  --primary-light: #a78bfa; /* links and highlights on dark */
  --blue: #2563eb;
  --accent: #22d3ee;

  /* Feedback */
  --error: #fca5a5;
  --error-border: #f87171;
  --success: #4ade80;

  /* Gradients and effects */
  --gradient: linear-gradient(135deg, var(--primary), var(--blue));
  --gradient-text: linear-gradient(90deg, #c4b5fd, var(--accent));
  --shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.8);
  --glow: 0 0 0 1px rgba(167, 139, 250, 0.35), 0 16px 40px -12px rgba(124, 58, 237, 0.55);

  /* Type */
  --font-body: "Inter", "Segoe UI", system-ui, -apple-system, Roboto, Arial, sans-serif;
  --font-mono: ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace;

  /* Spacing and shape */
  --space-sm: 0.75rem;
  --space-md: 1.5rem;
  --space-lg: 3rem;
  --space-xl: 5.5rem;
  --radius: 16px;
  --transition: 0.3s ease;
  --header-height: 72px;
}

/* =========================================================
   2. RESET & BASE
   ========================================================= */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; scroll-padding-top: var(--header-height); }

body {
  font-family: var(--font-body);
  color: var(--text);
  background: var(--bg);
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
}

img { max-width: 100%; display: block; }
ul, ol { list-style: none; }
a { color: var(--primary-light); text-decoration: none; transition: color var(--transition); }

h1, h2, h3 { color: var(--heading); line-height: 1.15; letter-spacing: -0.02em; }
h1 { font-size: clamp(2.5rem, 6.5vw, 4.8rem); font-weight: 800; letter-spacing: -0.04em; line-height: 1.05; }
h2 { font-size: clamp(1.7rem, 3.6vw, 2.4rem); font-weight: 800; }
h3 { font-size: 1.15rem; font-weight: 700; }

::selection { background: rgba(124, 58, 237, 0.55); color: #fff; }

/* Visible keyboard focus everywhere */
:focus-visible { outline: 3px solid var(--accent); outline-offset: 3px; }

/* =========================================================
   3. LAYOUT HELPERS
   ========================================================= */
.container { width: min(1120px, 92%); margin-inline: auto; }
.narrow { max-width: 780px; }
.text-center { text-align: center; }

.section { padding: var(--space-xl) 0; }
.section-alt {
  background: var(--bg-soft);
  border-block: 1px solid var(--border);
}
.section-title { margin-bottom: var(--space-md); }
.section-lead { color: var(--muted); font-size: 1.1rem; margin-bottom: var(--space-md); }

.grid { display: grid; gap: var(--space-md); margin-top: 2.5rem; }
.grid-3 { grid-template-columns: repeat(3, 1fr); }
.grid-4 { grid-template-columns: repeat(4, 1fr); }

.skip-link {
  position: absolute; left: -999px; top: 0; z-index: 200;
  background: var(--primary); color: #fff; padding: 0.7rem 1.1rem;
}
.skip-link:focus { left: 0; }

/* =========================================================
   4. HEADER & NAVIGATION
   ========================================================= */
.site-header {
  position: sticky; top: 0; z-index: 100;
  background: rgba(3, 4, 9, 0.8);
  -webkit-backdrop-filter: blur(14px);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--border);
}
.navbar {
  display: flex; align-items: center; justify-content: space-between;
  height: var(--header-height);
}
.logo { font-size: 1.45rem; font-weight: 800; letter-spacing: -0.03em; color: var(--heading); }
.logo span { color: var(--accent); }

.nav-menu { display: flex; gap: 0.35rem; }
.nav-link {
  display: block; padding: 0.5rem 1.1rem; border-radius: 999px;
  color: var(--muted); font-weight: 500; font-size: 0.97rem;
  transition: background var(--transition), color var(--transition), box-shadow var(--transition);
}
.nav-link:hover { color: #fff; background: rgba(255, 255, 255, 0.07); }
.nav-link.active {
  color: #fff; background: rgba(124, 58, 237, 0.2);
  box-shadow: inset 0 0 0 1px rgba(167, 139, 250, 0.45);
}

/* Hamburger button (hidden on desktop) */
.nav-toggle {
  display: none; background: none; border: 1px solid var(--border-strong);
  border-radius: 10px; cursor: pointer; padding: 0.55rem 0.6rem;
  transition: border-color var(--transition);
}
.nav-toggle:hover { border-color: var(--primary-light); }
.bar {
  display: block; width: 22px; height: 2px; margin: 5px 0;
  background: #fff; border-radius: 2px;
  transition: transform var(--transition), opacity var(--transition);
}
.nav-toggle[aria-expanded="true"] .bar:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.nav-toggle[aria-expanded="true"] .bar:nth-child(2) { opacity: 0; }
.nav-toggle[aria-expanded="true"] .bar:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* =========================================================
   5. BUTTONS
   ========================================================= */
.btn {
  position: relative; overflow: hidden;
  display: inline-flex; align-items: center; justify-content: center;
  padding: 0.85rem 1.9rem; border-radius: 999px;
  font: inherit; font-weight: 600; cursor: pointer; text-decoration: none;
  border: 1px solid transparent;
  transition: transform var(--transition), box-shadow var(--transition),
              background var(--transition), border-color var(--transition), color var(--transition);
}
/* Subtle light sweep on hover */
.btn::before {
  content: ""; position: absolute; inset: 0; pointer-events: none;
  background: linear-gradient(110deg, transparent 30%, rgba(255, 255, 255, 0.28) 50%, transparent 70%);
  transform: translateX(-120%); transition: transform 0.6s ease;
}
.btn:hover { transform: translateY(-3px); }
.btn:hover::before { transform: translateX(120%); }
.btn:active { transform: translateY(0) scale(0.98); }

.btn-primary { background: var(--gradient); color: #fff; box-shadow: 0 10px 26px -10px rgba(124, 58, 237, 0.8); }
.btn-primary:hover { box-shadow: var(--glow); }
.btn-secondary { background: transparent; color: #c4b5fd; border-color: rgba(167, 139, 250, 0.6); }
.btn-secondary:hover { background: rgba(124, 58, 237, 0.2); color: #fff; border-color: var(--primary-light); }
.btn-outline { background: rgba(255, 255, 255, 0.04); color: #fff; border-color: var(--border-strong); }
.btn-outline:hover { background: rgba(255, 255, 255, 0.1); border-color: var(--accent); }
.btn-light { background: #fff; color: #0b0d14; }
.btn-light:hover { box-shadow: 0 12px 30px -10px rgba(255, 255, 255, 0.5); }
.btn-group { display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 2.25rem; }

.text-link { font-weight: 600; color: var(--primary-light); }
.text-link:hover { color: var(--accent); text-decoration: underline; text-underline-offset: 4px; }

/* =========================================================
   6. HERO & PAGE BANNER (shared dark background effects)
   ========================================================= */
.hero, .page-banner {
  position: relative; isolation: isolate; overflow: hidden; background: var(--bg);
}
/* Faded grid pattern */
.hero::before, .page-banner::before {
  content: ""; position: absolute; inset: 0; z-index: -1;
  background-image:
    linear-gradient(var(--grid-line) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid-line) 1px, transparent 1px);
  background-size: 52px 52px;
  -webkit-mask-image: radial-gradient(ellipse at 50% 30%, #000 15%, transparent 72%);
  mask-image: radial-gradient(ellipse at 50% 30%, #000 15%, transparent 72%);
}
/* Soft violet glow (top right) */
.hero::after, .page-banner::after {
  content: ""; position: absolute; z-index: -1; pointer-events: none;
  width: 620px; height: 620px; top: -280px; right: -160px; border-radius: 50%;
  background: radial-gradient(circle, rgba(124, 58, 237, 0.5), transparent 65%);
  filter: blur(20px);
}
.hero::after { animation: drift 14s ease-in-out infinite alternate; }

.hero {
  padding: 7rem 0 0;
  /* second, cyan glow bottom-left */
  background: radial-gradient(520px 320px at 8% 100%, rgba(34, 211, 238, 0.12), transparent 70%), var(--bg);
}
.hero-inner { display: flex; align-items: center; justify-content: space-between; gap: var(--space-lg); }
.hero-text { max-width: 640px; }
.hero-lead { margin-top: 1.5rem; color: var(--muted); font-size: 1.15rem; max-width: 52ch; }

/* Small pill label above the headline */
.eyebrow {
  display: inline-flex; align-items: center; gap: 0.6rem;
  margin-bottom: 1.5rem; padding: 0.35rem 1rem;
  font-family: var(--font-mono); font-size: 0.85rem; color: var(--accent);
  background: rgba(34, 211, 238, 0.07); border: 1px solid rgba(34, 211, 238, 0.3);
  border-radius: 999px;
}
.eyebrow::before {
  content: ""; width: 8px; height: 8px; border-radius: 50%;
  background: var(--accent); animation: pulse 2s ease-in-out infinite;
}

/* Gradient text (falls back to a solid color) */
.highlight { color: var(--accent); }
@supports (-webkit-background-clip: text) or (background-clip: text) {
  .highlight {
    background: var(--gradient-text);
    -webkit-background-clip: text; background-clip: text;
    color: transparent;
  }
}

.page-banner { padding: 5rem 0 4.5rem; text-align: center; border-bottom: 1px solid var(--border); }
.page-banner h1 { margin-bottom: 0.75rem; }
.page-banner p { color: var(--muted); font-size: 1.1rem; }

/* Technology chips (hero, projects, about) */
.tag-list { display: flex; flex-wrap: wrap; gap: 0.5rem; }
.tag-list li {
  padding: 0.2rem 0.75rem; border-radius: 999px;
  font-family: var(--font-mono); font-size: 0.8rem; color: #c4b5fd;
  background: rgba(124, 58, 237, 0.14); border: 1px solid rgba(167, 139, 250, 0.3);
}
.hero-tags { margin-top: 2rem; }

/* At-a-glance strip along the bottom of the hero */
.stats {
  display: grid; grid-template-columns: repeat(3, 1fr);
  margin-top: 5rem; border-top: 1px solid var(--border);
}
.stats li { padding: 1.75rem 1rem 2rem; text-align: center; }
.stats li + li { border-left: 1px solid var(--border); }
.stats strong {
  display: block; font-size: clamp(1.8rem, 4vw, 2.6rem); font-weight: 800;
  line-height: 1.1; letter-spacing: -0.03em; color: var(--heading);
}
.stats span { color: var(--muted); font-size: 0.92rem; }

/* Avatar: initials by default, or an <img> using the same classes */
.avatar {
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
  border-radius: 50%; object-fit: cover;
  background: var(--gradient); color: #fff; font-weight: 800;
  border: 5px solid var(--bg);
  box-shadow: 0 0 0 2px rgba(167, 139, 250, 0.55), 0 0 0 16px rgba(124, 58, 237, 0.1),
              0 0 90px rgba(124, 58, 237, 0.5);
}
.avatar-large { width: 260px; height: 260px; font-size: 4.2rem; animation: float 6s ease-in-out infinite; }
img.avatar { object-position: center 20%; background: var(--surface); } /* profile photo: keep the face centred */

/* =========================================================
   7. CARDS & PROJECTS
   ========================================================= */
.card {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.045), rgba(255, 255, 255, 0.015)), var(--surface);
  border: 1px solid var(--border); border-radius: var(--radius);
  padding: 1.75rem; box-shadow: var(--shadow);
  transition: transform var(--transition), box-shadow var(--transition), border-color var(--transition);
}
.card:hover { transform: translateY(-6px); border-color: rgba(167, 139, 250, 0.55); box-shadow: var(--glow); }
/* Small symbol badge on skill cards */
.card-icon {
  display: inline-flex; align-items: center; justify-content: center;
  width: 44px; height: 44px; margin-bottom: 1rem; border-radius: 12px;
  font-family: var(--font-mono); font-weight: 700; font-size: 0.95rem; color: var(--accent);
  background: rgba(34, 211, 238, 0.08); border: 1px solid rgba(34, 211, 238, 0.28);
}
.card h3 { margin-bottom: 0.5rem; }
.card p { color: var(--muted); }

.project-card { padding: 0; overflow: hidden; }
.project-thumb { position: relative; height: 190px; border-bottom: 1px solid var(--border); transition: transform 0.5s ease; }
.project-thumb::after { /* soft highlight over the gradient */
  content: ""; position: absolute; inset: 0;
  background: radial-gradient(circle at 25% 20%, rgba(255, 255, 255, 0.22), transparent 55%);
}
.project-card:hover .project-thumb { transform: scale(1.06); }
.project-body { position: relative; padding: 1.5rem; background: var(--surface); }
.project-body .tag-list { margin-bottom: 0.9rem; }
.project-body p { margin-bottom: 1rem; }
/* Replace with: background: url("../assets/images/your-image.jpg") center / cover; */
.thumb-one   { background: linear-gradient(135deg, #5b21b6, #2563eb); }
.thumb-two   { background: linear-gradient(135deg, #0e7490, #1d4ed8); }
.thumb-three { background: linear-gradient(135deg, #a21caf, #6d28d9); }

/* =========================================================
   8. ABOUT PAGE
   ========================================================= */
.about-grid { display: grid; grid-template-columns: auto 1fr; gap: var(--space-lg); align-items: center; }
.about-text p { margin-bottom: 1rem; color: var(--muted); }
.about-text .tag-list { margin: 1.5rem 0; }

.skill-list { display: grid; gap: 1.4rem; }
.skill-label { display: flex; justify-content: space-between; font-weight: 600; color: var(--heading); margin-bottom: 0.5rem; }
.skill-bar { height: 10px; background: rgba(255, 255, 255, 0.08); border-radius: 999px; overflow: hidden; }
.skill-fill {
  height: 100%; border-radius: 999px; transform-origin: left;
  background: linear-gradient(90deg, var(--primary), var(--accent));
  box-shadow: 0 0 14px rgba(34, 211, 238, 0.45);
}
.skill-list li.visible .skill-fill { animation: fill-grow 1.1s ease-out both; }

.timeline { border-left: 2px solid rgba(167, 139, 250, 0.4); margin-top: 2.5rem; padding-left: 2rem; }
.timeline-item { position: relative; margin-bottom: 2.25rem; }
.timeline-item:last-child { margin-bottom: 0; }
.timeline-item::before {
  content: ""; position: absolute; left: -2.6rem; top: 0.4rem;
  width: 16px; height: 16px; border-radius: 50%;
  background: var(--accent); border: 3px solid var(--bg);
  box-shadow: 0 0 0 2px rgba(34, 211, 238, 0.4), 0 0 16px rgba(34, 211, 238, 0.6);
}
.timeline-date { color: var(--accent); font-family: var(--font-mono); font-weight: 600; font-size: 0.9rem; }
.timeline-item p { color: var(--muted); }

/* =========================================================
   9. CONTACT PAGE & FORM
   ========================================================= */
.contact-grid { display: grid; grid-template-columns: 1fr 1.25fr; gap: var(--space-lg); align-items: start; }
.contact-info p { color: var(--muted); margin-bottom: 1.25rem; }
.info-list { display: grid; gap: 0.7rem; margin-bottom: 1.75rem; color: var(--muted); }
.info-list strong { color: var(--heading); }

/* Two columns: name + email share a row, everything else is full width */
.contact-form { display: grid; grid-template-columns: 1fr 1fr; column-gap: 1.25rem; padding: 2.25rem; }
.contact-form > :nth-child(n+3) { grid-column: 1 / -1; }
.contact-form:hover { transform: none; border-color: var(--border); box-shadow: var(--shadow); }
.contact-form .btn { justify-self: start; }
.form-note { margin-top: 1rem; font-size: 0.88rem; color: var(--muted); }

.form-group { margin-bottom: 0.6rem; }
label { display: block; font-weight: 600; color: var(--heading); margin-bottom: 0.45rem; font-size: 0.95rem; }
input, textarea {
  width: 100%; padding: 0.85rem 1rem; font: inherit; color: var(--text);
  background: var(--surface-2); border: 1px solid var(--border-strong); border-radius: 10px;
  transition: border-color var(--transition), box-shadow var(--transition), background var(--transition);
}
input::placeholder, textarea::placeholder { color: #8b92a6; }
input:hover, textarea:hover { border-color: rgba(167, 139, 250, 0.55); }
input:focus, textarea:focus {
  outline: 2px solid transparent; /* stays visible in forced-colors mode */
  border-color: var(--primary-light); background: #1a2033;
  box-shadow: 0 0 0 4px rgba(124, 58, 237, 0.3);
}
input.invalid, textarea.invalid { border-color: var(--error-border); }
input.valid, textarea.valid { border-color: var(--success); }
/* Keep browser autofill from turning fields white */
input:-webkit-autofill {
  -webkit-text-fill-color: var(--text);
  box-shadow: 0 0 0 1000px var(--surface-2) inset;
}
textarea { resize: vertical; min-height: 130px; }
.error-message { display: block; min-height: 1.3rem; margin-top: 0.3rem; color: var(--error); font-size: 0.9rem; }

/* =========================================================
   10. CTA, FOOTER, SOCIAL LINKS, TOAST, BACK-TO-TOP
   ========================================================= */
.cta { position: relative; isolation: isolate; overflow: hidden; background: var(--bg-soft); border-top: 1px solid var(--border); }
.cta::before {
  content: ""; position: absolute; inset: 0; z-index: -1;
  background:
    radial-gradient(60% 130% at 50% 110%, rgba(124, 58, 237, 0.4), transparent 70%),
    radial-gradient(40% 80% at 92% 0%, rgba(34, 211, 238, 0.15), transparent 70%);
}
.cta h2 { margin-bottom: 0.6rem; }
.cta p { margin-bottom: 1.75rem; color: var(--muted); font-size: 1.1rem; }

.site-footer { background: var(--bg-soft); border-top: 1px solid var(--border); color: var(--muted); padding: 2rem 0; }
.footer-inner { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 1rem; }
.social-links { display: flex; flex-wrap: wrap; gap: 1.25rem; }
.social-links a { color: var(--text); font-weight: 500; }
.social-links a:hover { color: var(--accent); }
/* Pill-style links used on the contact page */
.social-links-dark { gap: 0.75rem; }
.social-links-dark a {
  display: inline-block; padding: 0.4rem 1rem; border-radius: 999px;
  border: 1px solid var(--border-strong); background: rgba(255, 255, 255, 0.04);
  transition: border-color var(--transition), background var(--transition), color var(--transition), transform var(--transition);
}
.social-links-dark a:hover { border-color: var(--accent); background: rgba(34, 211, 238, 0.08); transform: translateY(-2px); }

.toast {
  position: fixed; left: 50%; bottom: 2rem; z-index: 300;
  width: max-content; max-width: 90vw;
  transform: translate(-50%, 150%); opacity: 0; pointer-events: none;
  background: var(--surface-2); color: var(--text);
  border: 1px solid var(--success); border-left-width: 5px;
  padding: 1rem 1.5rem; border-radius: 12px; box-shadow: var(--shadow);
  transition: transform 0.4s ease, opacity 0.4s ease;
}
.toast.show { transform: translate(-50%, 0); opacity: 1; }

.back-to-top {
  position: fixed; right: 1.5rem; bottom: 1.5rem; z-index: 150;
  width: 48px; height: 48px; border: 0; border-radius: 50%;
  background: var(--gradient); color: #fff; font-size: 1.3rem; cursor: pointer;
  box-shadow: 0 10px 24px -8px rgba(124, 58, 237, 0.8);
  opacity: 0; visibility: hidden; transform: translateY(15px);
  transition: opacity var(--transition), transform var(--transition), visibility var(--transition), box-shadow var(--transition);
}
.back-to-top.show { opacity: 1; visibility: visible; transform: translateY(0); }
.back-to-top:hover { box-shadow: var(--glow); transform: translateY(-3px); }

/* =========================================================
   10b. DROPDOWN MENU ("More"), EXTRA PAGE COMPONENTS
   ========================================================= */
.has-dropdown { position: relative; }
.dropdown-toggle {
  display: flex; align-items: center; gap: 0.45rem; padding: 0.5rem 1.1rem;
  font: inherit; font-size: 0.97rem; font-weight: 500; color: var(--muted);
  background: none; border: 0; border-radius: 999px; cursor: pointer;
  transition: background var(--transition), color var(--transition), box-shadow var(--transition);
}
.dropdown-toggle::after { /* little arrow */
  content: ""; width: 7px; height: 7px; margin-top: -3px;
  border-right: 2px solid currentColor; border-bottom: 2px solid currentColor;
  transform: rotate(45deg); transition: transform var(--transition);
}
.dropdown-toggle:hover, .has-dropdown.open > .dropdown-toggle { color: #fff; background: rgba(255, 255, 255, 0.07); }
.has-dropdown.open > .dropdown-toggle::after { margin-top: 3px; transform: rotate(-135deg); }
.dropdown-toggle.active { color: #fff; background: rgba(124, 58, 237, 0.2); box-shadow: inset 0 0 0 1px rgba(167, 139, 250, 0.45); }

.dropdown {
  position: absolute; top: calc(100% + 0.6rem); right: 0; z-index: 110;
  min-width: 230px; padding: 0.5rem;
  background: #090b13; border: 1px solid var(--border-strong); border-radius: 14px; box-shadow: var(--shadow);
  opacity: 0; visibility: hidden; transform: translateY(-6px);
  transition: opacity var(--transition), transform var(--transition), visibility var(--transition);
}
.has-dropdown.open > .dropdown { opacity: 1; visibility: visible; transform: translateY(0); }
.dropdown .nav-link { border-radius: 10px; }

.grid-2 { grid-template-columns: repeat(2, 1fr); }
.meta { font-family: var(--font-mono); font-size: 0.85rem; color: var(--accent); }
.sr-only { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; }
.badge {
  display: inline-block; margin-bottom: 0.9rem; padding: 0.15rem 0.75rem; border-radius: 999px;
  font-size: 0.8rem; font-weight: 600; color: var(--success);
  background: rgba(74, 222, 128, 0.1); border: 1px solid rgba(74, 222, 128, 0.35);
}

.check-list { display: grid; gap: 0.6rem; margin-top: 1rem; }
.check-list li { position: relative; padding-left: 1.75rem; color: var(--muted); }
.check-list li::before { content: "\2713"; position: absolute; left: 0; color: var(--accent); font-weight: 700; }
.card code { font-family: var(--font-mono); font-size: 0.88em; color: #c4b5fd; }
.card a:not(.btn) { text-decoration: underline; text-underline-offset: 3px; }

.callout { padding: 1.75rem; border-radius: var(--radius); background: rgba(34, 211, 238, 0.06); border: 1px solid rgba(34, 211, 238, 0.3); }
.callout h3 { margin-bottom: 0.5rem; }
.callout p { color: var(--muted); }
.quote {
  padding: 1.5rem 1.75rem; font-size: 1.25rem; font-weight: 600; color: var(--heading);
  border-left: 4px solid var(--primary-light); background: rgba(124, 58, 237, 0.08); border-radius: 0 var(--radius) var(--radius) 0;
}

/* Numbered process steps and problem-solving case studies */
.steps { list-style: none; }
.step-number {
  display: inline-flex; align-items: center; justify-content: center; width: 38px; height: 38px; margin-bottom: 0.9rem;
  border-radius: 50%; font-family: var(--font-mono); font-weight: 700; color: #fff; background: var(--gradient);
}
.case p { margin-bottom: 0.75rem; }
.case-label { display: block; font-family: var(--font-mono); font-size: 0.78rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--accent); }

/* AI log table */
.table-wrap { overflow-x: auto; border: 1px solid var(--border); border-radius: var(--radius); }
.data-table { width: 100%; border-collapse: collapse; min-width: 620px; }
.data-table th, .data-table td { padding: 1rem 1.25rem; text-align: left; border-bottom: 1px solid var(--border); vertical-align: top; }
.data-table th { color: var(--heading); font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.06em; background: var(--surface-2); }
.data-table td { color: var(--muted); }
.data-table tbody tr:last-child td { border-bottom: 0; }
.data-table tbody tr:hover td { background: rgba(255, 255, 255, 0.03); }

/* Resume */
.resume { padding: 2.5rem; }
.resume:hover { transform: none; border-color: var(--border); box-shadow: var(--shadow); }
.resume-header { padding-bottom: 1.5rem; margin-bottom: 1.5rem; border-bottom: 1px solid var(--border); }
.resume-header p { color: var(--muted); }
.resume-grid { display: grid; grid-template-columns: 1fr 2fr; gap: 2.5rem; }
.resume h3 { margin: 1.5rem 0 0.5rem; color: var(--accent); font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.08em; }
.resume h3:first-child { margin-top: 0; }
.resume p { margin-bottom: 0.75rem; }
.cert-card .meta { margin-top: 0.25rem; }
.thumb-four { background: linear-gradient(135deg, #1d4ed8, #0e7490); }
.thumb-five { background: linear-gradient(135deg, #6d28d9, #be185d); }
.thumb-six  { background: linear-gradient(135deg, #0f766e, #4338ca); }

/* =========================================================
   11. ANIMATIONS
   .reveal / .visible are added by JavaScript (scroll reveal).
   Its transition list also includes the card hover properties,
   so hovering stays fast after the reveal finishes.
   ========================================================= */
.reveal {
  opacity: 0; translate: 0 30px;
  transition: opacity 0.7s ease, translate 0.7s ease,
              transform var(--transition), box-shadow var(--transition), border-color var(--transition);
}
.reveal.visible { opacity: 1; translate: 0 0; }

@keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
@keyframes drift { from { transform: translate(0, 0); } to { transform: translate(-60px, 40px); } }
@keyframes pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.4; transform: scale(0.7); } }
@keyframes fill-grow { from { transform: scaleX(0); } to { transform: scaleX(1); } }

/* Respect users who prefer less motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation: none !important; transition: none !important; scroll-behavior: auto !important;
  }
  .reveal { opacity: 1; translate: none; }
}

/* =========================================================
   12. RESPONSIVE BREAKPOINTS
   ========================================================= */
/* Tablet */
@media (max-width: 992px) {
  .grid-4, .grid-3 { grid-template-columns: repeat(2, 1fr); }
  .contact-grid { grid-template-columns: 1fr; }
  .avatar-large { width: 220px; height: 220px; font-size: 3.5rem; }
}

/* Mobile */
@media (max-width: 768px) {
  :root { --space-xl: 3.75rem; --header-height: 66px; }

  .nav-toggle { display: block; }
  .nav-menu {
    position: absolute; top: var(--header-height); left: 0; right: 0;
    flex-direction: column; gap: 0.25rem; padding: 1rem 4%;
    background: #090b13; border-bottom: 1px solid var(--border);
    box-shadow: var(--shadow);
    transform: translateY(-12px); opacity: 0; visibility: hidden;
    transition: transform var(--transition), opacity var(--transition), visibility var(--transition);
  }
  .nav-menu.open { transform: translateY(0); opacity: 1; visibility: visible; }
  .nav-link { padding: 0.8rem 1rem; }

  .hero { padding: 4.5rem 0 0; }
  .stats { margin-top: 3.5rem; }
  .hero-inner { flex-direction: column-reverse; text-align: center; }
  .hero-lead { margin-inline: auto; }
  .btn-group { justify-content: center; }
  .avatar-large { width: 180px; height: 180px; font-size: 3rem; }

  .about-grid { grid-template-columns: 1fr; text-align: center; }
  .about-text .tag-list { justify-content: center; }
  .hero-tags { justify-content: center; }
  .about-grid .avatar { margin-inline: auto; }
  .footer-inner { justify-content: center; text-align: center; }
  .site-footer .social-links { justify-content: center; }
}

/* Small phones */
@media (max-width: 520px) {
  .grid-3, .grid-4 { grid-template-columns: 1fr; }
  .contact-form { grid-template-columns: 1fr; padding: 1.5rem; }
  .btn-group .btn, .contact-form .btn { width: 100%; }
  .stats li { padding: 1.25rem 0.5rem 1.5rem; }
  .stats span { font-size: 0.8rem; }
  .back-to-top { right: 1rem; bottom: 1rem; }
}

/* =========================================================
   13. RESPONSIVE RULES FOR THE MENU DROPDOWN AND EXTRA PAGES
   ========================================================= */
@media (max-width: 992px) {
  .resume-grid { grid-template-columns: 1fr; gap: 0; }
}
@media (max-width: 768px) {
  .grid-2 { grid-template-columns: 1fr; }

  /* Long menu: let it scroll inside the screen instead of running off it */
  .nav-menu { max-height: calc(100vh - var(--header-height)); overflow-y: auto; }

  /* The dropdown becomes an indented accordion inside the mobile menu */
  .dropdown-toggle { width: 100%; justify-content: space-between; padding: 0.8rem 1rem; }
  .dropdown {
    position: static; min-width: 0; display: none; padding: 0 0 0 0.75rem; margin: 0 0 0.25rem 1rem;
    background: transparent; border: 0; border-left: 2px solid var(--border-strong); border-radius: 0;
    box-shadow: none; opacity: 1; visibility: visible; transform: none;
  }
  .has-dropdown.open > .dropdown { display: block; }
  .resume { padding: 1.5rem; }
}

/* =========================================================
   13b. PROJECT PAGES (cards with images, galleries, code, bars)
   ========================================================= */
/* Let grid children shrink, so wide code blocks scroll inside their card instead of stretching the page */
.grid > *, .gallery > * { min-width: 0; }

.project-thumb-img {
  display: block; width: 100%; height: 190px; object-fit: cover; object-position: top;
  border-bottom: 1px solid var(--border); transition: transform 0.5s ease;
}
.project-card:hover .project-thumb-img { transform: scale(1.06); }

.project-intro { padding-bottom: 1rem; }
.back-link { display: inline-block; margin-bottom: 1.25rem; font-weight: 600; }
.back-link:hover { color: var(--accent); }
.project-status { margin: 1.5rem 0 0; }
.link-row { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 1.25rem; }

/* "On this page" jump links */
.page-toc { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 1.5rem; }
.page-toc a {
  padding: 0.35rem 1rem; border-radius: 999px; font-size: 0.92rem; color: var(--text);
  border: 1px solid var(--border-strong); background: rgba(255, 255, 255, 0.04);
  transition: border-color var(--transition), background var(--transition);
}
.page-toc a:hover { border-color: var(--accent); background: rgba(34, 211, 238, 0.08); }

.sub-title { margin: 2.5rem 0 1rem; font-size: 1.3rem; }
.small-note { margin-top: 1rem; font-size: 0.9rem; color: var(--muted); }
.text-center .tag-list { justify-content: center; }
.bullet-list { display: grid; gap: 0.5rem; padding-left: 1.2rem; list-style: disc; color: var(--muted); }
.num-list { display: grid; gap: 0.6rem; padding-left: 1.3rem; list-style: decimal; color: var(--muted); }
.num-list strong { color: var(--heading); }
.card .tag-list { margin-top: 1rem; }
.card .tag-list + p { margin-top: 1rem; }

/* Highlighted prompt for text you still need to write yourself */
.fill { padding: 1rem; border: 1px dashed var(--accent); border-radius: 10px; background: rgba(34, 211, 238, 0.06); color: var(--accent) !important; }

/* Image galleries */
.gallery { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; margin-top: 1.25rem; }
.gallery-3 { grid-template-columns: repeat(3, 1fr); }
.gallery-1 { grid-template-columns: 1fr; }
.gallery figure { margin: 0; overflow: hidden; background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); }
.gallery img { display: block; width: 100%; height: auto; background: #0a0c14; }
.gallery-photos img { aspect-ratio: 4 / 3; object-fit: cover; }
.gallery figcaption { padding: 0.85rem 1rem 1rem; font-size: 0.92rem; color: var(--muted); }
.gallery figcaption strong { display: block; margin-bottom: 0.15rem; color: var(--heading); }

/* Code blocks */
.code-block {
  overflow-x: auto; margin-top: 0.75rem; padding: 1.25rem; tab-size: 2;
  background: #05060d; border: 1px solid var(--border); border-radius: 12px;
  font-family: var(--font-mono); font-size: 0.85rem; line-height: 1.6; color: #d1d5e6;
}

/* Dashboard numbers and bar charts (pure CSS, no chart library) */
.kpi-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin: 1.25rem 0 1.5rem; }
.kpi { padding: 1.25rem; text-align: center; }
.kpi strong { display: block; font-size: 2rem; font-weight: 800; line-height: 1.2; color: var(--heading); }
.kpi span { font-size: 0.9rem; color: var(--muted); }
.bars { display: grid; gap: 0.65rem; margin-top: 1rem; }
.bar-row { display: grid; grid-template-columns: 5rem 1fr 3rem; gap: 0.6rem; align-items: center; font-size: 0.88rem; color: var(--muted); }
.bar-row b { text-align: right; font-weight: 600; color: var(--heading); }
.bar-track { height: 10px; border-radius: 999px; overflow: hidden; background: rgba(255, 255, 255, 0.08); }
.bar-fill { display: block; height: 100%; border-radius: 999px; background: linear-gradient(90deg, var(--primary), var(--accent)); }

@media (max-width: 992px) {
  .gallery-3 { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 768px) {
  .kpi-grid { grid-template-columns: repeat(2, 1fr); }
  .gallery { gap: 1rem; }
}
@media (max-width: 520px) {
  .gallery, .gallery-3 { grid-template-columns: 1fr; }
  .link-row .btn { width: 100%; }
}

/* =========================================================
   13c. VIDEO BOX (interview page)
   Holds a YouTube video, a video file, or a "coming soon" panel.
   ========================================================= */
.video-wrap { max-width: 960px; }
.video-box {
  position: relative; width: 100%; aspect-ratio: 16 / 9; overflow: hidden;
  border: 1px solid var(--border-strong); border-radius: var(--radius); box-shadow: var(--glow);
  background: radial-gradient(60% 80% at 50% 0%, rgba(124, 58, 237, 0.28), transparent 70%), #05060d;
}
.video-box iframe, .video-box video { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; background: #000; }
.video-placeholder {
  position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: 0.35rem; padding: 1.5rem; text-align: center;
}
.video-play { position: relative; width: 72px; height: 72px; margin-bottom: 0.75rem; border-radius: 50%; background: var(--gradient); box-shadow: var(--glow); }
.video-play::after { /* play triangle */
  content: ""; position: absolute; top: 50%; left: 50%; transform: translate(-35%, -50%);
  border-style: solid; border-width: 12px 0 12px 20px; border-color: transparent transparent transparent #fff;
}
.video-title { font-size: 1.2rem; font-weight: 700; color: var(--heading); }
.video-hint { font-size: 0.95rem; color: var(--muted); }
@media (max-width: 520px) {
  .video-play { width: 56px; height: 56px; margin-bottom: 0.5rem; }
  .video-play::after { border-width: 9px 0 9px 15px; }
  .video-title { font-size: 1rem; }
}

/* =========================================================
   14. PRINT (used by the "Print / Save as PDF" button on the resume page)
   ========================================================= */
@media print {
  .site-header, .site-footer, .back-to-top, .skip-link, .no-print, .page-banner, .cta { display: none !important; }
  body { background: #fff; }
  .section { padding: 0; }
  .resume, .resume * { color: #111 !important; background: none !important; box-shadow: none !important; border-color: #bbb !important; }
  .resume .meta { color: #444 !important; }
  .reveal { opacity: 1 !important; translate: none !important; }
}
