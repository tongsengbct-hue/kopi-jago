// Kopi Jago — interaksi ringan tanpa database.
document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const backTop = document.querySelector(".back-top");
  const navbar = document.querySelector(".navbar");
  const updateScroll = () => {
    if (backTop) backTop.classList.toggle("show", window.scrollY > 450);
    if (navbar) navbar.classList.toggle("navbar-scrolled", window.scrollY > 30);
  };
  window.addEventListener("scroll", updateScroll, { passive: true });
  updateScroll();

  // Tutup menu mobile setelah salah satu tautan navigasi dipilih.
  document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {
    link.addEventListener("click", () => {
      const nav = document.getElementById("mainNav");
      if (nav && nav.classList.contains("show") && window.bootstrap) {
        bootstrap.Collapse.getOrCreateInstance(nav).hide();
      }
    });
  });

  // Form demo: menyusun pesan WhatsApp. Ganti nomor di bawah dengan nomor kedai.
  const form = document.getElementById("contactForm");
  const feedback = document.getElementById("formFeedback");
  const whatsappNumber = "6281234567890"; // GANTI dengan nomor WhatsApp resmi Kopi Jago.
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const message = `Halo Kopi Jago!%0A%0ANama: ${encodeURIComponent(data.get("name"))}%0AEmail: ${encodeURIComponent(data.get("email"))}%0APesan: ${encodeURIComponent(data.get("message"))}`;
      if (feedback) feedback.textContent = "Membuka WhatsApp untuk mengirim pesan...";
      window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank", "noopener,noreferrer");
    });
  }
});
