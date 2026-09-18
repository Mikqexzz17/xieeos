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
const tabs = document.querySelectorAll(".component-tab");
tabs.forEach((tab) => tab.addEventListener("click", () => {
  tabs.forEach((item) => item.classList.remove("active"));
  tab.classList.add("active");
  const [number, title, copy, command, flag] = componentContent[tab.dataset.component];
  document.querySelector("#detailNo").textContent = number;
  document.querySelector("#detailTitle").textContent = title;
  document.querySelector("#detailCopy").textContent = copy;
  document.querySelector(".detail-code").innerHTML = `<span>$</span> ${command} <i>${flag}</i>`;
}));
