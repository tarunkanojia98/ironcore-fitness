// ============================================================
// CLIENT_CONFIG — Edit all site content from this single block
// ============================================================
const CLIENT_CONFIG = {
    brandName: "IRONCORE FITNESS",

    // 1. Seasonal Promotions (Set enabled to false to hide the banner)
    seasonalPromo: {
        enabled: true,
        badge: "SEASONAL OFFER",
        text: "Complimentary 1-on-1 Strength Assessment with every Free Gym Tour this month.",
        ctaText: "Claim Offer →",
        ctaLink: "#tour"
    },

    // 2. Contact Information
    contact: {
        address: "742 W 2nd Street, Suite 110, Austin, TX 78701",
        hours: "Mon – Fri: 5:30 AM – 10:00 PM | Sat – Sun: 7:00 AM – 7:00 PM",
        phone: "+1 (512) 555-0198",
        email: "hello@ironcorefitness.com"
    },

    whatsapp: {
        number: "15125550198",
        message: "Hi IRONCORE FITNESS! I'd like to book my free gym tour in Austin."
    },

    googleMapEmbedUrl: "https://www.google.com/maps?q=W+2nd+Street+Austin+TX+78701&output=embed",
    web3FormsAccessKey: "89124c16-84f1-4f28-8f02-d09518e2d3eb", // Paste your Web3Forms key here for live emails

    // 3. Training Programmes
    programmes: [{
            tag: "INDEPENDENT TRAINING",
            title: "Open Gym",
            description: "Train on your schedule with full access to specialist strength racks, free weights, and functional turf—without waiting for equipment.",
            ctaText: "Book a Free Tour →",
            ctaLink: "#tour",
            featured: false
        }, {
            tag: "1-ON-1 COACHING",
            title: "Personal Training",
            description: "Dedicated one-to-one coaching tailored to your goals, whether you're a beginner building confidence or an experienced lifter chasing new numbers.",
            ctaText: "Book a Free Tour →",
            ctaLink: "#tour",
            featured: true
        }, {
            tag: "SCHEDULED SESSIONS",
            title: "Group Training",
            description: "Coach-led strength and conditioning sessions designed for high energy, proper technique, and consistent weekly progression.",
            ctaText: "View Weekly Timetable →",
            ctaLink: "#timetable",
            featured: false
        }
    ],

    // 4. Weekly Timetable
    timetable: [{
            day: "Monday",
            time: "07:00 AM",
            session: "Strength Foundations",
            coach: "Daniel M",
            isOpenGymOnly: false
        }, {
            day: "Tuesday",
            time: "06:30 PM",
            session: "Metabolic Conditioning",
            coach: "Vikram S",
            isOpenGymOnly: false
        }, {
            day: "Wednesday",
            time: "07:00 AM",
            session: "Lower Body Power",
            coach: "Daniel M",
            isOpenGymOnly: false
        }, {
            day: "Thursday",
            time: "06:30 PM",
            session: "Upper Body & Core",
            coach: "Vikram S",
            isOpenGymOnly: false
        }, {
            day: "Friday",
            time: "07:00 AM",
            session: "Full-Body Conditioning",
            coach: "Daniel M",
            isOpenGymOnly: false
        }, {
            day: "Saturday",
            time: "09:00 AM",
            session: "Weekend Strength Circuit",
            coach: "Vikram S",
            isOpenGymOnly: false
        }, {
            day: "Sunday",
            time: "07:00 AM – 07:00 PM",
            session: "Open Gym Only — No Group Classes",
            coach: "—",
            isOpenGymOnly: true
        }
    ],

    // 5. Trainers (Names, Credentials, Roles, Biographies & Photos)
    trainers: [{
            name: "Vikram Sethi",
            certs: "CSCS • LEVEL 3 PT",
            role: "Head Trainer • Strength & Conditioning",
            bio: "Specialises in structured strength programming, barbell mechanics, and long-term progress tracking.",
            image: "images/trainer-1.jpg"
        }, {
            name: "Daniel Mercer",
            certs: "NASM-CPT • FUNCTIONAL TRAINING",
            role: "Personal Trainer • Beginner & Mobility Coach",
            bio: "Helps working professionals and beginners build sustainable training habits with confidence and proper form.",
            image: "images/trainer-2.jpg"
        }
    ]
};

// ============================================================
// SITE ENGINE & INTERACTIVITY (No need to edit below)
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
    // 1. Render Seasonal Promotion Banner
    const promoBanner = document.getElementById("promo-banner");
    if (promoBanner && CLIENT_CONFIG.seasonalPromo?.enabled) {
        const { badge, text, ctaText, ctaLink } = CLIENT_CONFIG.seasonalPromo;
        const badgeEl = document.getElementById("promo-badge");
        const textEl = document.getElementById("promo-text");
        const linkEl = document.getElementById("promo-link");

        if (badgeEl)
            badgeEl.textContent = badge;
        if (textEl)
            textEl.textContent = text;
        if (linkEl) {
            linkEl.textContent = ctaText;
            linkEl.href = ctaLink || "#tour";
        }
        promoBanner.style.display = "block";
    }

    // 2. Inject Contact Information
    if (CLIENT_CONFIG.contact) {
        const { address, hours, phone, email } = CLIENT_CONFIG.contact;
        const addressEl = document.getElementById("gym-address");
        const hoursEl = document.getElementById("gym-hours");
        const phoneEl = document.getElementById("gym-phone");
        const emailEl = document.getElementById("gym-email");

        if (addressEl && address)
            addressEl.textContent = address;
        if (hoursEl && hours)
            hoursEl.textContent = hours;
        if (phoneEl && phone) {
            phoneEl.textContent = phone;
            phoneEl.href = `tel:+${phone.replace(/\D/g, "")}`;
        }
        if (emailEl && email) {
            emailEl.textContent = email;
            emailEl.href = `mailto:${email}`;
        }
    }

    // 3. Render Training Programmes
    const programmesGrid = document.getElementById("programmes-grid");
    if (programmesGrid && Array.isArray(CLIENT_CONFIG.programmes)) {
        programmesGrid.innerHTML = CLIENT_CONFIG.programmes
            .map((item) => `
        <article class="programme-card ${item.featured ? "programme-featured" : ""}">
          <span class="programme-tag">${item.tag}</span>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <a href="${item.ctaLink}" class="programme-link">${item.ctaText}</a>
        </article>
      `)
            .join("");
    }

    // 4. Render Weekly Timetable
    const timetableBody = document.getElementById("timetable-body");
    if (timetableBody && Array.isArray(CLIENT_CONFIG.timetable)) {
        timetableBody.innerHTML = CLIENT_CONFIG.timetable
            .map((row) => {
                if (row.isOpenGymOnly) {
                    return `
            <tr class="tt-sunday-row">
              <td class="tt-day">${row.day}</td>
              <td>${row.time}</td>
              <td class="tt-session-muted">${row.session}</td>
              <td>${row.coach}</td>
              <td><a href="#tour" class="tt-link tt-link-muted" data-enquiry="Book a Free Gym Tour">Book Gym Tour &rarr;</a></td>
            </tr>
          `;
                }
                return `
          <tr>
            <td class="tt-day">${row.day}</td>
            <td>${row.time}</td>
            <td class="tt-session">${row.session}</td>
            <td>${row.coach}</td>
            <td><a href="#tour" class="tt-link" data-session="${row.day} ${row.time} — ${row.session}">Enquire About Session &rarr;</a></td>
          </tr>
        `;
            })
            .join("");
    }

    // 5. Render Trainers
    const trainersGrid = document.getElementById("trainers-grid");
    if (trainersGrid && Array.isArray(CLIENT_CONFIG.trainers)) {
        trainersGrid.innerHTML = CLIENT_CONFIG.trainers
            .map((t) => `
        <article class="trainer-card">
          <div class="trainer-img">
            <img src="${t.image}" alt="${t.name}, ${t.role} at ${CLIENT_CONFIG.brandName}" loading="lazy" />
          </div>
          <div class="trainer-body">
            <span class="trainer-certs">${t.certs}</span>
            <h3>${t.name}</h3>
            <p class="trainer-role">${t.role}</p>
            <p class="trainer-bio">${t.bio}</p>
          </div>
        </article>
      `)
            .join("");
    }

    // 6. Mobile Menu Toggle
    const menuToggle = document.getElementById("menu-toggle");
    const mobileNav = document.getElementById("mobile-nav");
    if (menuToggle && mobileNav) {
        menuToggle.addEventListener("click", () => mobileNav.classList.toggle("active"));
        mobileNav.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => mobileNav.classList.remove("active"));
        });
    }

    // 7. FAQ Accordion
    document.querySelectorAll(".faq-question").forEach((btn) => {
        btn.addEventListener("click", () => {
            const item = btn.closest(".faq-item");
            const isOpen = item.classList.contains("active");

            document.querySelectorAll(".faq-item").forEach((el) => {
                el.classList.remove("active");
                el.querySelector(".faq-question").setAttribute("aria-expanded", "false");
            });

            if (!isOpen) {
                item.classList.add("active");
                btn.setAttribute("aria-expanded", "true");
            }
        });
    });

    // 8. WhatsApp Button & Google Map
    const waBtn = document.getElementById("whatsapp-btn");
    if (waBtn && CLIENT_CONFIG.whatsapp?.number) {
        const cleanNum = CLIENT_CONFIG.whatsapp.number.replace(/\D/g, "");
        const msg = encodeURIComponent(CLIENT_CONFIG.whatsapp.message || `Hi ${CLIENT_CONFIG.brandName}!`);
        waBtn.href = `https://wa.me/${cleanNum}?text=${msg}`;
        waBtn.style.display = "flex";
    }

    const mapContainer = document.getElementById("map-container");
    const mapFrame = document.getElementById("google-map");
    if (mapContainer && mapFrame && CLIENT_CONFIG.googleMapEmbedUrl) {
        mapFrame.src = CLIENT_CONFIG.googleMapEmbedUrl;
        mapContainer.style.display = "block";
    }

    // 9. Timetable Quick-Select & Dynamic Submit Button (Event Delegation)
    const enquirySelect = document.getElementById("enquiry-type");
    const goalsInput = document.getElementById("goals");
    const formSubmitBtn = document.getElementById("submit-btn");

    const buttonLabels = {
        "Book a Free Gym Tour": "BOOK YOUR FREE GYM TOUR →",
        "Enquire About Personal Training": "ENQUIRE ABOUT PERSONAL TRAINING →",
        "Enquire About a Group Session": "ENQUIRE ABOUT SESSION →",
        "General Enquiry": "SEND ENQUIRY →"
    };

    const syncButtonLabel = () => {
        if (formSubmitBtn && enquirySelect) {
            formSubmitBtn.textContent = buttonLabels[enquirySelect.value] || "BOOK YOUR FREE GYM TOUR →";
        }
    };

    if (enquirySelect) {
        enquirySelect.addEventListener("change", syncButtonLabel);
    }

    if (timetableBody) {
        timetableBody.addEventListener("click", (e) => {
            const link = e.target.closest(".tt-link");
            if (!link)
                return;

            if (link.dataset.session) {
                if (enquirySelect) {
                    enquirySelect.value = "Enquire About a Group Session";
                    syncButtonLabel();
                }
                if (goalsInput) {
                    goalsInput.value = `I'd like to enquire about: ${link.dataset.session}`;
                }
            } else if (link.dataset.enquiry) {
                if (enquirySelect) {
                    enquirySelect.value = link.dataset.enquiry;
                    syncButtonLabel();
                }
            }
        });
    }

    // 10. Tour Booking & Enquiry Form (Web3Forms + Demo Mode)
    const form = document.getElementById("tour-form");
    const statusEl = document.getElementById("form-status");

    if (form && statusEl && formSubmitBtn) {
        form.addEventListener("submit", async(e) => {
            e.preventDefault();
            const visitorName = document.getElementById("full-name")?.value.trim() || "there";
            const enquiryType = enquirySelect?.value || "gym tour";

            formSubmitBtn.disabled = true;
            formSubmitBtn.textContent = "SENDING REQUEST...";
            statusEl.className = "form-status";
            statusEl.textContent = "";

            const confirmMsg = `✓ Request Confirmed, ${visitorName}! We've received your "${enquiryType}" request and our team will reach out within 2 hours to confirm your time.`;

            if (!CLIENT_CONFIG.web3FormsAccessKey) {
                setTimeout(() => {
                    statusEl.className = "form-status success";
                    statusEl.textContent = `${confirmMsg} (Demo Mode)`;
                    form.reset();
                    formSubmitBtn.disabled = false;
                    syncButtonLabel();
                }, 500);
                return;
            }

            const formData = new FormData(form);
            formData.append("access_key", CLIENT_CONFIG.web3FormsAccessKey);
            formData.append("subject", `New Lead (${enquiryType}) — ${CLIENT_CONFIG.brandName}`);

            try {
                const res = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    body: formData
                });
                const data = await res.json();
                if (data.success) {
                    statusEl.className = "form-status success";
                    statusEl.textContent = confirmMsg;
                    form.reset();
                } else {
                    statusEl.className = "form-status error";
                    statusEl.textContent = "Something went wrong. Please try again or message us on WhatsApp.";
                }
            } catch {
                statusEl.className = "form-status error";
                statusEl.textContent = "Network error. Please reach out directly via WhatsApp.";
            }
            finally {
                formSubmitBtn.disabled = false;
                syncButtonLabel();
            }
        });
    }

    // 11. Auto-Update Footer Year
    const yearEl = document.getElementById("footer-year");
    if (yearEl)
        yearEl.textContent = new Date().getFullYear();
});
