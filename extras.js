/* ===================================================================
   RONELİ — ek özellikler: mobil menü, randevu formu
   Bu dosya app.js'ten bağımsızdır; kaldırılırsa site çalışmaya devam eder.
   =================================================================== */
(function () {
  "use strict";

  /* ---------- Mobil menü ------------------------------------------- */
  const menuBtn  = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  function setMenu(open) {
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.setAttribute("aria-label", open ? window.octabootT("menu.close") : window.octabootT("menu.open"));
    mobileMenu.classList.toggle("is-open", open);
    mobileMenu.setAttribute("aria-hidden", String(!open));
    document.body.classList.toggle("menu-open", open);
  }

  menuBtn.addEventListener("click", () => {
    setMenu(menuBtn.getAttribute("aria-expanded") !== "true");
  });
  mobileMenu.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => setMenu(false))
  );

  /* ---------- Randevu formu ----------------------------------------
     Gönderim, form etiketindeki action adresine (Formspree) yapılır. */
  const form = document.getElementById("bookingForm");
  const msg  = document.getElementById("bookingMsg");

  // Telefon: yalnızca rakam kabul edilir, en fazla 11 hane
  form.elements.telefon.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/\D/g, "").slice(0, 11);
  });

  // Tarih: bugünden önceki günler seçilemez
  const tarihInput = form.elements.tarih;
  const now = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  tarihInput.min = now.getFullYear() + "-" + pad(now.getMonth() + 1) + "-" + pad(now.getDate());

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const ad = form.elements.ad;
    const eposta = form.elements.eposta;
    const telefon = form.elements.telefon;
    const tarih = form.elements.tarih;
    if (!ad.value.trim() || !eposta.value.trim() || !telefon.value.trim() || !tarih.value || !form.elements.saat.value) {
      msg.textContent = window.octabootT("msg.required");
      msg.classList.add("is-error");
      return;
    }
    if (!eposta.checkValidity()) {
      msg.textContent = window.octabootT("msg.email");
      msg.classList.add("is-error");
      return;
    }
    if (tarih.value < tarih.min) {
      msg.textContent = window.octabootT("msg.date");
      msg.classList.add("is-error");
      return;
    }
    if (!form.elements.kvkk.checked) {
      msg.textContent = window.octabootT("msg.consent");
      msg.classList.add("is-error");
      return;
    }
    msg.classList.remove("is-error");
    msg.textContent = "";
    const btn = form.querySelector("button[type=submit]");
    btn.disabled = true;
    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" }
    })
      .then((res) => {
        if (!res.ok) throw new Error("send failed");
        form.reset();
        msg.textContent = window.octabootT("msg.sent");
      })
      .catch(() => {
        msg.classList.add("is-error");
        msg.textContent = window.octabootT("msg.error");
      })
      .finally(() => {
        btn.disabled = false;
      });
  });

  /* ---------- İletişim bağlantıları ---------------------------------
     Aşağıdaki iki değeri kendi bilgilerinle doldur:
       email:    "ornek@mail.com"
       whatsapp: "905551234567"  (ülke kodu ile, başında + veya boşluk olmadan)
     Boş bırakılırsa ilgili bağlantı pasif kalır. */
  const CONTACT = {
    email: "ronelistudio@gmail.com",
    whatsapp: "905514834403"
  };

  const mailLink = document.getElementById("mailLink");
  const waLink = document.getElementById("whatsappLink");

  if (CONTACT.email) {
    // E-postaya tıklanınca Gmail'deki yeni mail penceresi, adres dolu olarak açılır
    mailLink.href = "https://mail.google.com/mail/?view=cm&fs=1&to=" + encodeURIComponent(CONTACT.email);
  } else {
    mailLink.setAttribute("aria-disabled", "true");
    mailLink.title = "E-posta adresi henüz eklenmedi";
    mailLink.addEventListener("click", (e) => e.preventDefault());
  }


  if (CONTACT.whatsapp) {
    waLink.href = "https://wa.me/" + CONTACT.whatsapp.replace(/\D/g, "");
    document.getElementById("waFloat").href = waLink.href;
  } else {
    waLink.setAttribute("aria-disabled", "true");
    waLink.title = "WhatsApp numarası henüz eklenmedi";
    waLink.addEventListener("click", (e) => e.preventDefault());
  }
})();
