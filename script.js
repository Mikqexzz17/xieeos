const progress = document.querySelector(".scroll-progress");
const updateProgress = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${scrollable ? (window.scrollY / scrollable) * 100 : 0}%`;
};
window.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
});
nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

const componentContent = {
  desktop: ["01", "Xiee Desktop", "Czyste środowisko graficzne z tapetą, taskbarem i launcherem. Wszystko pod ręką, nic nie stoi na drodze.", "xiee-desktop", "--start"],
  xiac: ["02", "XIAC", "Centrum aplikacji, które pozostaje lekkie i proste. Instaluj tylko to, czego potrzebujesz — bez paczek, których nie używasz.", "xiac", "--browse"],
  xiarr: ["03", "XIARR", "Szybka przeglądarka internetowa zbudowana jako osobny moduł Tauri + WebKit. Web, który nie wymaga nowej maszyny.", "xiarr", "--open"],
  xihh: ["04", "XIHH Key", "Manager klastra urządzeń dla Xiee OS. Połącz starsze komputery i wykorzystaj ich wspólną moc.", "xihh-key", "--status"],
  xfm: ["05", "XFM + WINYY", "Menedżer plików i ustawienia systemowe. Dwa narzędzia, które dają ci czytelny dostęp do danych i konfiguracji.", "xfm", "--launch"],
};
const componentEnglish = {
  desktop: ["01", "Xiee Desktop", "A clean desktop environment with wallpaper, taskbar and launcher. Everything is close at hand, nothing gets in the way.", "xiee-desktop", "--start"],
  xiac: ["02", "XIAC", "An app center that stays light and simple. Install only what you need — without packages you never use.", "xiac", "--browse"],
  xiarr: ["03", "XIARR", "A fast web browser built as a separate Tauri + WebKit module. The web without requiring a new machine.", "xiarr", "--open"],
  xihh: ["04", "XIHH Key", "A device cluster manager for Xiee OS. Connect older computers and put their combined power to work.", "xihh-key", "--status"],
  xfm: ["05", "XFM + WINYY", "A file manager and system settings. Two tools that give you clear access to your data and configuration.", "xfm", "--launch"],
};
let activeLanguage = "pl";
const updateComponentDetail = (key) => {
  const [number, title, copy, command, flag] = (activeLanguage === "en" ? componentEnglish : componentContent)[key];
  document.querySelector("#detailNo").textContent = number;
  document.querySelector("#detailTitle").textContent = title;
  document.querySelector("#detailCopy").textContent = copy;
  document.querySelector(".detail-code").innerHTML = `<span>$</span> ${command} <i>${flag}</i>`;
};
const tabs = document.querySelectorAll(".component-tab");
tabs.forEach((tab) => tab.addEventListener("click", () => {
  tabs.forEach((item) => item.classList.remove("active"));
  tab.classList.add("active");
  updateComponentDetail(tab.dataset.component);
}));

const translations = {
  en: {
    "nav.why": "Why Xiee", "nav.arch": "Architecture", "nav.components": "Components", "nav.roadmap": "Roadmap",
    "header.github": "View code <span class=\"arrow\">↗</span>",
    "hero.eyebrow": "<span class=\"pulse-dot\"></span> OPEN SOURCE / RUST / LINUX",
    "hero.title": "Small system.<br /><span>Big</span> freedom.",
    "hero.lead": "Xiee OS is a lightweight, modular operating system for older devices. Built in Rust, designed without unnecessary baggage.",
    "hero.primary": "Explore the system <span>↓</span>", "hero.github": "Go to GitHub <span>↗</span>",
    "meta.1": "Minimal<br />overhead", "meta.2": "Modular<br />architecture", "meta.3": "Full user<br />control",
    "why.title": "Why another<br /><em>operating system?</em>", "why.copy": "Because old devices still have potential. Xiee OS removes the layers you do not need and keeps what truly matters.",
    "feature.1.label": "A / PERFORMANCE", "feature.1.title": "Fast from the first boot", "feature.1.copy": "A minimal userspace and optimized binaries make the system start quickly, even on hardware that stopped being supported long ago.", "feature.1.metric": "typical RAM usage<br />after boot",
    "feature.2.label": "B / CLARITY", "feature.2.title": "Modules, not a monolith", "feature.2.copy": "Every element has one job. Replace, disable or extend it without rebuilding the entire system.",
    "feature.3.label": "C / OWNERSHIP", "feature.3.title": "Your hardware, your rules", "feature.3.copy": "No telemetry services running in the background. Open code and simple tools give you full visibility into what the system does.", "feature.3.link": "See inside <span>→</span>",
    "arch.title": "Simple <em>architecture.</em><br />The right foundation.", "arch.copy": "Xiee OS combines the power of Linux with the safety of Rust, assembling everything from small, understandable building blocks.", "layers": "SYSTEM LAYERS",
    "components.title": "Everything<br /><em>you need.</em>", "components.copy": "Choose a component to see how Xiee OS turns complexity into clear, focused tools.",
    "tab.desktop": "<b>Xiee Desktop</b><small>Desktop environment</small>", "tab.xiac": "<b>XIAC</b><small>App center</small>", "tab.xiarr": "<b>XIARR</b><small>Web browser</small>", "tab.xihh": "<b>XIHH Key</b><small>Cluster manager</small>", "tab.xfm": "<b>XFM + WINYY</b><small>Files and settings</small>",
    "terminal.title": "See what is<br /><em>under the hood.</em>", "terminal.copy": "Simple commands. Clear answers. A system that does not hide behind magic.", "terminal.link": "Browse the repository <span>↗</span>",
    "roadmap.title": "Building<br /><em>step by step.</em>", "roadmap.copy": "Xiee OS grows with its community. The foundation works — now it is time for the next layers.",
    "roadmap.1": "CLI and foundation", "roadmap.1copy": "init, shell, coreutils and the shared system library.", "roadmap.2": "Desktop and apps", "roadmap.2copy": "Desktop environment, XIAC, XIARR, XFM and WINYY.", "roadmap.3": "ISO image and rootfs", "roadmap.3copy": "A simple installation on real hardware.", "roadmap.4": "More devices", "roadmap.4copy": "Support for more configurations and clusters of older computers.",
    "cta.eyebrow": "<span class=\"pulse-dot\"></span> READY TO START?", "cta.title": "You do not need<br /><em>new hardware.</em>", "cta.copy": "You need a system that respects the one you already have.", "cta.button": "See Xiee OS on GitHub <span>↗</span>",
    "faq.title": "Questions?<br /><em>We have answers.</em>", "faq.1": "What exactly is Xiee OS?<span>+</span>", "faq.1copy": "Xiee OS is a lightweight operating system based on Linux, with components and tools written in Rust. It is built for older devices and for people who want control over their system.", "faq.2": "Why Rust?<span>+</span>", "faq.2copy": "Rust provides memory safety without a garbage collector. This makes it possible to build small, fast system programs while keeping the code readable and reliable.", "faq.3": "Can I run Xiee OS today?<span>+</span>", "faq.3copy": "The project is actively developed. The foundation and individual components are ready, while the ISO/rootfs image is on the roadmap. You can follow and build the code locally from the repository.",
    "footer.copy": "© 2025 Xiee OS · MIT License", "footer.about": "Project overview ↗", "footer.code": "Source code ↗"
  },
  pl: {
    "nav.why": "Dlaczego Xiee", "nav.arch": "Architektura", "nav.components": "Komponenty", "nav.roadmap": "Roadmapa",
    "header.github": "Zobacz kod <span class=\"arrow\">↗</span>", "hero.eyebrow": "<span class=\"pulse-dot\"></span> OPEN SOURCE / RUST / LINUX", "hero.title": "Mały system.<br /><span>Wielka</span> swoboda.", "hero.lead": "Xiee OS to lekki, modułowy system operacyjny dla starszych urządzeń. Zbudowany w Rust, zaprojektowany bez zbędnego balastu.", "hero.primary": "Poznaj system <span>↓</span>", "hero.github": "Przejdź do GitHub <span>↗</span>", "meta.1": "Minimalny<br />narzut", "meta.2": "Modułowa<br />architektura", "meta.3": "Pełna kontrola<br />użytkownika",
    "why.title": "Po co kolejny<br /><em>system operacyjny?</em>", "why.copy": "Bo stare urządzenia wciąż mają potencjał. Xiee OS usuwa warstwy, których nie potrzebujesz, i zostawia to, co naprawdę ważne.", "feature.1.label": "A / PERFORMANCE", "feature.1.title": "Szybki od pierwszego uruchomienia", "feature.1.copy": "Minimalny userspace i zoptymalizowane binaria sprawiają, że system startuje szybko nawet na sprzęcie, który dawno przestał być wspierany.", "feature.1.metric": "typowe zużycie RAM<br />po starcie", "feature.2.label": "B / CLARITY", "feature.2.title": "Moduły, nie monolit", "feature.2.copy": "Każdy element ma jedno zadanie. Wymień, wyłącz lub rozbuduj go bez przebudowywania całego systemu.", "feature.3.label": "C / OWNERSHIP", "feature.3.title": "Twój sprzęt, twoje zasady", "feature.3.copy": "Bez telemetrycznych usług w tle. Otwarty kod i proste narzędzia dają pełną widoczność nad tym, co robi system.", "feature.3.link": "Zobacz wnętrze <span>→</span>",
    "arch.title": "Prosta <em>architektura.</em><br />Właściwy fundament.", "arch.copy": "Xiee OS wykorzystuje moc Linuksa i bezpieczeństwo Rusta, a całość składa z małych, zrozumiałych klocków.", "layers": "WARSTWY SYSTEMU", "components.title": "Wszystko, czego<br /><em>potrzebujesz.</em>", "components.copy": "Wybierz komponent, żeby zobaczyć, jak Xiee OS zamienia złożoność w przejrzyste narzędzia.", "tab.desktop": "<b>Xiee Desktop</b><small>Środowisko graficzne</small>", "tab.xiac": "<b>XIAC</b><small>Centrum aplikacji</small>", "tab.xiarr": "<b>XIARR</b><small>Przeglądarka internetowa</small>", "tab.xihh": "<b>XIHH Key</b><small>Manager klastra</small>", "tab.xfm": "<b>XFM + WINYY</b><small>Pliki i ustawienia</small>",
    "terminal.title": "Zobacz, co<br /><em>jest pod spodem.</em>", "terminal.copy": "Proste komendy. Czytelne odpowiedzi. System, który nie ukrywa się za magią.", "terminal.link": "Przeglądaj repozytorium <span>↗</span>", "roadmap.title": "Budujemy<br /><em>krok po kroku.</em>", "roadmap.copy": "Xiee OS rośnie razem ze społecznością. Fundament już działa — teraz czas na kolejne warstwy.", "roadmap.1": "CLI i fundament", "roadmap.1copy": "init, shell, coreutils oraz wspólna biblioteka systemowa.", "roadmap.2": "Desktop i aplikacje", "roadmap.2copy": "Środowisko graficzne, XIAC, XIARR, XFM i WINYY.", "roadmap.3": "Obraz ISO i rootfs", "roadmap.3copy": "Prosta instalacja systemu na prawdziwym sprzęcie.", "roadmap.4": "Więcej urządzeń", "roadmap.4copy": "Wsparcie dla kolejnych konfiguracji i klastrów starszych komputerów.", "cta.eyebrow": "<span class=\"pulse-dot\"></span> GOTOWY, ŻEBY ZACZĄĆ?", "cta.title": "Nie potrzebujesz<br /><em>nowego sprzętu.</em>", "cta.copy": "Potrzebujesz systemu, który szanuje ten, który już masz.", "cta.button": "Zobacz Xiee OS na GitHub <span>↗</span>",     "faq.title": "Masz pytania?<br /><em>Mamy odpowiedzi.</em>", "faq.1": "Czym dokładnie jest Xiee OS?<span>+</span>", "faq.1copy": "Xiee OS to lekki system operacyjny oparty na Linuksie, którego komponenty i narzędzia są pisane w Rust. Jest tworzony z myślą o starszych urządzeniach oraz o użytkownikach, którzy chcą mieć kontrolę nad swoim systemem.", "faq.2": "Dlaczego Rust?<span>+</span>", "faq.2copy": "Rust daje bezpieczeństwo pamięci bez garbage collectora. To pozwala tworzyć małe i szybkie programy systemowe, zachowując czytelność oraz niezawodność kodu.", "faq.3": "Czy mogę uruchomić Xiee OS już dziś?<span>+</span>", "faq.3copy": "Projekt jest w aktywnym rozwoju. Fundament i poszczególne komponenty są gotowe, a obraz ISO/rootfs znajduje się na roadmapie. Kod możesz śledzić i budować lokalnie z repozytorium.", "footer.copy": "© 2025 Xiee OS · MIT License", "footer.about": "Opis projektu ↗", "footer.code": "Kod źródłowy ↗"
  }
};

const languageElements = {
  "nav.why": ".main-nav a:nth-child(1)", "nav.arch": ".main-nav a:nth-child(2)", "nav.components": ".main-nav a:nth-child(3)", "nav.roadmap": ".main-nav a:nth-child(4)",
  "header.github": ".header-cta", "hero.eyebrow": ".hero-copy .eyebrow", "hero.title": ".hero h1", "hero.lead": ".hero-lead", "hero.primary": ".hero-actions .button-primary", "hero.github": ".hero-actions .text-link",
  "meta.1": ".hero-meta div:nth-child(1) span", "meta.2": ".hero-meta div:nth-child(2) span", "meta.3": ".hero-meta div:nth-child(3) span", "why.title": "#dlaczego .section-intro h2", "why.copy": "#dlaczego .section-intro p",
  "feature.1.label": ".feature-main .card-index", "feature.1.title": ".feature-main h3", "feature.1.copy": ".feature-main p", "feature.1.metric": ".metric small", "feature.2.label": ".feature-card:nth-child(2) .card-index", "feature.2.title": ".feature-card:nth-child(2) h3", "feature.2.copy": ".feature-card:nth-child(2) p", "feature.3.label": ".feature-card:nth-child(3) .card-index", "feature.3.title": ".feature-card:nth-child(3) h3", "feature.3.copy": ".feature-card:nth-child(3) p", "feature.3.link": ".card-link",
  "arch.title": "#architektura .centered h2", "arch.copy": "#architektura .centered p", "layers": ".stack-label", "components.title": "#komponenty .section-intro h2", "components.copy": "#komponenty .section-intro p", "tab.desktop": "[data-component=desktop] span:nth-child(2)", "tab.xiac": "[data-component=xiac] span:nth-child(2)", "tab.xiarr": "[data-component=xiarr] span:nth-child(2)", "tab.xihh": "[data-component=xihh] span:nth-child(2)", "tab.xfm": "[data-component=xfm] span:nth-child(2)",
  "terminal.title": ".terminal-copy h2", "terminal.copy": ".terminal-copy p", "terminal.link": ".terminal-copy .text-link", "roadmap.title": ".roadmap-heading h2", "roadmap.copy": ".roadmap-heading p", "roadmap.1": ".timeline-item:nth-child(2) h3", "roadmap.1copy": ".timeline-item:nth-child(2) p", "roadmap.2": ".timeline-item:nth-child(3) h3", "roadmap.2copy": ".timeline-item:nth-child(3) p", "roadmap.3": ".timeline-item:nth-child(4) h3", "roadmap.3copy": ".timeline-item:nth-child(4) p", "roadmap.4": ".timeline-item:nth-child(5) h3", "roadmap.4copy": ".timeline-item:nth-child(5) p",
  "cta.eyebrow": ".cta-section .eyebrow", "cta.title": ".cta-section h2", "cta.copy": ".cta-section p", "cta.button": ".cta-section .button-primary", "faq.title": ".faq .centered h2", "faq.1": ".faq-list details:nth-child(1) summary", "faq.1copy": ".faq-list details:nth-child(1) p", "faq.2": ".faq-list details:nth-child(2) summary", "faq.2copy": ".faq-list details:nth-child(2) p", "faq.3": ".faq-list details:nth-child(3) summary", "faq.3copy": ".faq-list details:nth-child(3) p", "footer.copy": ".site-footer>span", "footer.about": ".site-footer>div a:nth-child(1)", "footer.code": ".site-footer>div a:nth-child(2)"
};

const languageToggle = document.querySelector(".language-toggle");
const setLanguage = (language) => {
  activeLanguage = language;
  Object.entries(languageElements).forEach(([key, selector]) => {
    const element = document.querySelector(selector);
    if (element) element.innerHTML = translations[language][key];
  });
  document.documentElement.lang = language === "en" ? "en" : "pl";
  document.title = language === "en" ? "Xiee OS — lightweight system. great possibilities." : "Xiee OS — lekki system. wielkie możliwości.";
  document.querySelector(".language-pl").style.color = language === "pl" ? "var(--lime)" : "var(--muted)";
  document.querySelector(".language-en").style.color = language === "en" ? "var(--lime)" : "var(--muted)";
  languageToggle.setAttribute("aria-label", language === "en" ? "Przełącz na polski" : "Switch to English");
  document.querySelector(".detail-kicker").firstChild.textContent = language === "en" ? "COMPONENT / " : "KOMPONENT / ";
  document.querySelector(".timeline-item:nth-child(2) small").textContent = language === "en" ? "STAGE 01 / COMPLETE" : "ETAP 01 / GOTOWE";
  document.querySelector(".timeline-item:nth-child(3) small").textContent = language === "en" ? "STAGE 02 / COMPLETE" : "ETAP 02 / GOTOWE";
  document.querySelector(".timeline-item:nth-child(4) small").textContent = language === "en" ? "STAGE 03 / IN PROGRESS" : "ETAP 03 / W TOKU";
  document.querySelector(".timeline-item:nth-child(5) small").textContent = language === "en" ? "STAGE 04 / NEXT" : "ETAP 04 / NASTĘPNIE";
  document.querySelector(".kernel-copy small").textContent = language === "en" ? "drivers · processes · filesystem" : "sterowniki · procesy · system plików";
  updateComponentDetail(document.querySelector(".component-tab.active").dataset.component);
  localStorage.setItem("xiee-language", language);
};
languageToggle.addEventListener("click", () => setLanguage(document.documentElement.lang === "pl" ? "en" : "pl"));
setLanguage(localStorage.getItem("xiee-language") === "en" ? "en" : "pl");
