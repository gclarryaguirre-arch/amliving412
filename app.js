/**
 * AM LIVING 412 - Apartaestudio Gran América (Calle 31 # 25B-30, Bogotá)
 * Interactive Application Logic & Gallery Controller
 */

// Complete Gallery Dataset (16 Real Photos)
const galleryData = [
  {
    id: 1,
    src: "Fotosapto/03 Sala y cocina.png",
    thumb: "Fotosapto/03 Sala y cocina.png",
    title: "Sala y Cocina Integrada",
    category: "apto",
    tag: "Apartamento",
    desc: "Espacio moderno de concepto abierto con acabados de primera y excelente iluminación natural."
  },
  {
    id: 2,
    src: "Fotosapto/05 Habitación.jpg",
    thumb: "Fotosapto/05 Habitación.jpg",
    title: "Zona de Habitación",
    category: "apto",
    tag: "Apartamento",
    desc: "Espacio diseñado para cama doble, ventanales amplios y ventilación directa."
  },
  {
    id: 3,
    src: "Fotosapto/04 Cocina2 n.jpg",
    thumb: "Fotosapto/04 Cocina2 n.jpg",
    title: "Cocina Integral",
    category: "apto",
    tag: "Apartamento",
    desc: "Mesón funcional, estufa, campana extractora y múltiples gabinetes de almacenamiento."
  },
  {
    id: 4,
    src: "Fotosapto/06 Baño1.jpg",
    thumb: "Fotosapto/06 Baño1.jpg",
    title: "Baño Completo",
    category: "apto",
    tag: "Apartamento",
    desc: "Lavamanos moderno, espejo y sanitario de bajo consumo."
  },
  {
    id: 5,
    src: "Fotosapto/07 Baño2.jpg",
    thumb: "Fotosapto/07 Baño2.jpg",
    title: "Ducha y División en Vidrio",
    category: "apto",
    tag: "Apartamento",
    desc: "División en vidrio templado y grifería contemporánea."
  },
  {
    id: 6,
    src: "Fotosapto/08 Closet.jpg",
    thumb: "Fotosapto/08 Closet.jpg",
    title: "Clóset Empotrado",
    category: "apto",
    tag: "Apartamento",
    desc: "Clóset amplio de piso a techo con cajones, zapatero y barras para colgar."
  },
  {
    id: 7,
    src: "Fotosapto/10 Coworking2.jpg",
    thumb: "Fotosapto/10 Coworking2.jpg",
    title: "Zona de Coworking",
    category: "clubhouse",
    tag: "Club House",
    desc: "Estaciones de trabajo individuales y grupales equipadas con conexión de alta velocidad."
  },
  {
    id: 8,
    src: "Fotosapto/12 Gimnasio1.jpg",
    thumb: "Fotosapto/12 Gimnasio1.jpg",
    title: "Gimnasio en Terraza",
    category: "clubhouse",
    tag: "Club House",
    desc: "Área de fitness al aire libre y techada con vista panorámica de la ciudad."
  },
  {
    id: 9,
    src: "Fotosapto/14 Terraza.jpg",
    thumb: "Fotosapto/14 Terraza.jpg",
    title: "Terraza Lounge Panorámica",
    category: "clubhouse",
    tag: "Club House",
    desc: "Mirador en el último piso para relajarse y contemplar los atardeceres y cerros."
  },
  {
    id: 10,
    src: "Fotosapto/11 Bbq.jpg",
    thumb: "Fotosapto/11 Bbq.jpg",
    title: "Zonas BBQ",
    category: "clubhouse",
    tag: "Club House",
    desc: "Estaciones equipadas para asados y reuniones con familiares y amigos."
  },
  {
    id: 11,
    src: "Fotosapto/09 cinema1 n.jpg",
    thumb: "Fotosapto/09 cinema1 n.jpg",
    title: "Sala de Cine Privada",
    category: "clubhouse",
    tag: "Club House",
    desc: "Cinema equipado con pantalla gigante y sonido envolvente para residentes."
  },
  {
    id: 12,
    src: "Fotosapto/sala de juegos.png",
    thumb: "Fotosapto/sala de juegos.png",
    title: "Sala de Juegos",
    category: "clubhouse",
    tag: "Club House",
    desc: "Mesa de billar, juegos recreativos y espacios para compartir."
  },
  {
    id: 13,
    src: "Fotosapto/recepción.png",
    thumb: "Fotosapto/recepción.png",
    title: "Lobby y Recepción 24/7",
    category: "clubhouse",
    tag: "Club House",
    desc: "Recepción estilo hotel, vigilancia permanente y ascensores de última tecnología."
  },
  {
    id: 14,
    src: "Fotosapto/01 Fachada 1.jpg",
    thumb: "Fotosapto/01 Fachada 1.jpg",
    title: "Fachada del Edificio",
    category: "exterior",
    tag: "Exterior",
    desc: "Edificio moderno de 7 pisos ubicado en la Calle 31 con diseño vanguardista."
  },
  {
    id: 15,
    src: "Fotosapto/02 Fachada 2.jpg",
    thumb: "Fotosapto/02 Fachada 2.jpg",
    title: "Acceso Peatonal y Fachada",
    category: "exterior",
    tag: "Exterior",
    desc: "Entrada principal segura y elegante en una zona residencial tranquila de Teusaquillo."
  },
  {
    id: 16,
    src: "Fotosapto/13 Vista.jpg",
    thumb: "Fotosapto/13 Vista.jpg",
    title: "Vista Panorámica de Bogotá",
    category: "exterior",
    tag: "Exterior",
    desc: "Hermosa panorámica hacia el occidente y los cerros orientales desde las áreas sociales."
  }
];

// State Management
let currentFilter = "all";
let currentLightboxIndex = 0;
let currentFilteredList = [...galleryData];

// DOM Elements
const galleryGrid = document.getElementById("galleryGrid");
const filterButtons = document.querySelectorAll(".filter-btn");
const lightboxModal = document.getElementById("lightboxModal");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxDesc = document.getElementById("lightboxDesc");
const lightboxCounter = document.getElementById("lightboxCounter");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxBackdrop = document.getElementById("lightboxBackdrop");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const toggleTabs = document.querySelectorAll(".toggle-tab");
const offerBodyArriendo = document.getElementById("offerBodyArriendo");
const offerBodyVenta = document.getElementById("offerBodyVenta");

// 1. Initialize Dynamic Gallery
function renderGallery(filter = "all") {
  currentFilter = filter;
  currentFilteredList = filter === "all" 
    ? galleryData 
    : galleryData.filter(item => item.category === filter);

  galleryGrid.innerHTML = "";

  currentFilteredList.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "gallery-item";
    card.setAttribute("data-index", index);
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", `Ver ${item.title}`);

    card.innerHTML = `
      <img src="${item.src}" alt="${item.title}" loading="lazy">
      <div class="gallery-item-overlay">
        <span class="gallery-item-tag">${item.tag}</span>
        <h4 class="gallery-item-title">${item.title}</h4>
      </div>
      <div class="gallery-item-zoom">
        <i class="fa-solid fa-magnifying-glass-plus"></i>
      </div>
    `;

    card.addEventListener("click", () => openLightbox(index));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openLightbox(index);
      }
    });

    galleryGrid.appendChild(card);
  });
}

// 2. Filter Buttons Event Listeners
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderGallery(btn.dataset.filter);
  });
});

// 3. Lightbox Functions
function openLightbox(index) {
  currentLightboxIndex = index;
  updateLightboxContent();
  lightboxModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightboxModal.classList.remove("active");
  document.body.style.overflow = "";
}

function updateLightboxContent() {
  const item = currentFilteredList[currentLightboxIndex];
  if (!item) return;

  lightboxImg.src = item.src;
  lightboxImg.alt = item.title;
  lightboxTitle.textContent = item.title;
  lightboxDesc.textContent = item.desc;
  lightboxCounter.textContent = `${currentLightboxIndex + 1} de ${currentFilteredList.length}`;
}

function showNextImage() {
  currentLightboxIndex = (currentLightboxIndex + 1) % currentFilteredList.length;
  updateLightboxContent();
}

function showPrevImage() {
  currentLightboxIndex = (currentLightboxIndex - 1 + currentFilteredList.length) % currentFilteredList.length;
  updateLightboxContent();
}

// Lightbox Controls
lightboxClose.addEventListener("click", closeLightbox);
lightboxBackdrop.addEventListener("click", closeLightbox);
lightboxNext.addEventListener("click", showNextImage);
lightboxPrev.addEventListener("click", showPrevImage);

// Keyboard Navigation for Lightbox
document.addEventListener("keydown", (e) => {
  if (!lightboxModal.classList.contains("active")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowRight") showNextImage();
  if (e.key === "ArrowLeft") showPrevImage();
});

// 4. Hero Thumbnail Image Previewer
window.changeHeroPreview = function(src) {
  const heroMainImg = document.getElementById("heroMainImg");
  if (heroMainImg) {
    heroMainImg.style.opacity = "0.7";
    setTimeout(() => {
      heroMainImg.src = src;
      heroMainImg.style.opacity = "1";
    }, 150);
  }

  const thumbs = document.querySelectorAll(".hero-thumb");
  thumbs.forEach(thumb => {
    const img = thumb.querySelector("img");
    if (img && img.getAttribute("src") === src) {
      thumb.classList.add("active");
    } else {
      thumb.classList.remove("active");
    }
  });
};

// 5. Offer Tab Switcher (Arriendo vs Venta)
toggleTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    toggleTabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    const target = tab.dataset.target;
    if (target === "arriendo") {
      offerBodyArriendo.classList.remove("hidden");
      offerBodyVenta.classList.add("hidden");
    } else {
      offerBodyArriendo.classList.add("hidden");
      offerBodyVenta.classList.remove("hidden");
    }
  });
});

// 6. Mobile Menu Toggle
menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link, .nav-btn").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

// 7. Lead Contact Form to WhatsApp
const contactForm = document.getElementById("contactLeadForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("leadName").value.trim();
    const phone = document.getElementById("leadPhone").value.trim();
    const interest = document.getElementById("leadInterest").value;
    const msg = document.getElementById("leadMessage").value.trim();

    const targetWhatsApp = "573006598430"; // Número oficial de contacto
    let waText = `¡Hola! Mi nombre es ${name} (Tel: ${phone}).\nEstoy interesado(a) en: *${interest}* para el apartaestudio en Gran América (Calle 31 # 25B-30).`;
    
    if (msg) {
      waText += `\n\nMensaje adicional: ${msg}`;
    }

    const waUrl = `https://wa.me/${targetWhatsApp}?text=${encodeURIComponent(waText)}`;
    window.open(waUrl, "_blank");
  });
}

// 8. Leaflet Interactive Map Initialization
function initPropertyMap() {
  const mapElement = document.getElementById("propertyMap");
  if (!mapElement || typeof L === "undefined") return;

  const lat = 4.6270135677293;
  const lng = -74.082161564242;

  const map = L.map("propertyMap", {
    scrollWheelZoom: false
  }).setView([lat, lng], 16);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Custom Building Icon Marker
  const customIcon = L.divIcon({
    className: "custom-map-pin",
    html: `<div style="background:#102a43;color:#d4af37;padding:10px 14px;border-radius:24px;border:2px solid #d4af37;box-shadow:0 4px 15px rgba(0,0,0,0.3);font-weight:bold;font-size:13px;display:flex;align-items:center;gap:6px;white-space:nowrap;"><i class="fa-solid fa-building-user"></i> AM Living 412</div>`,
    iconSize: [140, 40],
    iconAnchor: [70, 20]
  });

  const marker = L.marker([lat, lng], { icon: customIcon }).addTo(map);
  
  marker.bindPopup(`
    <div style="font-family:sans-serif;padding:6px;">
      <h4 style="margin:0 0 4px 0;color:#102a43;font-size:14px;">Apartaestudio AM Living 412</h4>
      <p style="margin:0;font-size:12px;color:#475569;">Calle 31 No. 25B-30 · Gran América</p>
      <div style="margin-top:6px;font-size:11px;color:#059669;font-weight:bold;">¡A 1 cuadra de Cl 26 y Cra 30!</div>
    </div>
  `).openPopup();
}

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  renderGallery("all");
  initPropertyMap();
});
