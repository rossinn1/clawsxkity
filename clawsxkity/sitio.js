/* =====================================================
   CLAWS x KITY · ARCHIVO COMPARTIDO POR TODAS LAS PÁGINAS
   Aquí cambias el menú, el WhatsApp y el Instagram UNA SOLA VEZ
   y se actualiza en las 6 páginas.
   ===================================================== */

/* ===== EDITA SOLO ESTO ===== */
const NUMERO    = "56920885285";   // tu número con código de país, sin + ni espacios
const INSTAGRAM = "clawsXkity";     // tu usuario de Instagram, sin @
const LOGO      = "logo.png";      // nombre del archivo de tu logo

// Orden del menú: ["Texto que se ve", "archivo.html"]
const MENU = [
  ["Inicio",             "index.html"],
  ["Servicios",          "servicios.html"],
  ["Acrílico",           "acrilico.html"],
  ["Técnicas y efectos", "tecnicas.html"],
  ["Nail art",           "nailart.html"],
  ["Retiros",            "retiros.html"]
];
/* ===== FIN ===== */


/* ---------- Menú de arriba (igual en todas las páginas) ---------- */
(function () {
  const css = `
  .sh{position:sticky;top:0;z-index:50;padding-top:env(safe-area-inset-top,0px);background:linear-gradient(90deg,#b02a73,#e0338f);font-family:Poppins,system-ui,sans-serif}
  .sh-bar{max-width:520px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;padding:8px 14px}
  .sh-burger,.sh-ig{background:none;border:0;padding:4px;cursor:pointer;display:flex;width:36px;height:36px;align-items:center;justify-content:center}
  .sh svg{width:28px;height:28px;fill:none;stroke:#fff;stroke-width:2.5;stroke-linecap:round;flex:none}
  .sh-logo{display:block;text-decoration:none}
  .sh-logo img{height:40px;display:block}
  .sh-txt{display:none;font-family:'Titan One',sans-serif;color:#fff;font-size:20px}
  .sh-menu{display:none;max-width:520px;margin:0 auto;background:#14000b;border-top:2px solid #ff8cc6;padding:6px 0;text-align:left}
  .sh-menu.open{display:block}
  .sh-menu a{display:block;padding:13px 22px;color:#ffd3ea;text-decoration:none;font-weight:600;font-size:15px}
  .sh-menu a.on{color:#fff;background:#e0338f44;border-left:4px solid #ff8cc6}
  `;
  const page = (decodeURIComponent(location.pathname).split('/').pop() || 'index.html').toLowerCase();
  const links = MENU.map(([t, f]) =>
    `<a href="${f}"${page === f ? ' class="on"' : ''}>${t}</a>`).join('');

  const html = `
  <style>${css}</style>
  <div class="sh">
    <div class="sh-bar">
      <button class="sh-burger" aria-label="Menú" aria-expanded="false">
        <svg viewBox="0 0 28 28"><path d="M4 8h20M4 14h20M4 20h20"/></svg>
      </button>
      <a class="sh-logo" href="index.html">
        <img src="${LOGO}" alt="Claws x Kity" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
        <span class="sh-txt">CLAWS ✕ KITY</span>
      </a>
      <a class="sh-ig" href="https://instagram.com/${INSTAGRAM}" aria-label="Instagram">
        <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="#fff"/></svg>
      </a>
    </div>
    <div class="sh-menu">${links}</div>
  </div>`;

  document.currentScript.insertAdjacentHTML('beforebegin', html);

  const burger = document.querySelector('.sh-burger'), menu = document.querySelector('.sh-menu');
  burger.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
  });
})();


/* ---------- Botones de WhatsApp (todos los que tengan class="wa") ---------- */
document.addEventListener('DOMContentLoaded', () => {
  const msg = document.body.dataset.msg || "Hola! Quiero agendar unas uñas 💅";
  document.querySelectorAll('.wa').forEach(a => {
    a.href = "https://wa.me/" + NUMERO + "?text=" + encodeURIComponent(msg);
  });
});
