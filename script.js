/* =========================================================
SITE CONFIGURATION — Edit client details here in 2 minutes
========================================================= */
const SITE_CONFIG = {
    // Brand & Theme Colors
    brandName: "IRONCORE FITNESS",
    brandInitial: "IC",
    pageTitle: "IRONCORE FITNESS | Train With Purpose",
    primaryColor: "#C5F04A",
    primaryHover: "#B3DE38",

    // Hero Section
    heroEyebrow: "PREMIUM STRENGTH & PERSONAL COACHING",
    heroTitleStart: "TRAIN WITH",
    heroTitleAccent: "PURPOSE.",
    heroSubtitle:
    "Capped memberships, specialist strength equipment, and coaches who track your individual progress—built for serious training without the crowds.",
    heroCtaText: "BOOK YOUR FREE GYM TOUR",
    heroImage: "images/hero-gym.jpg",

    // Above-the-Fold 3-Pillar Strip
    pillars: [{
            title: "Capped Memberships",
            detail: "Controlled capacity so racks and platforms are never overcrowded."
        }, {
            title: "Specialist Equipment",
            detail: "Pro-grade strength racks, free weights, and functional training zones."
        }, {
            title: "Individual Progress",
            detail: "Structured programmes and real progress tracking with our coaches."
        }
    ],

    // Training Programmes
    programmes: [{
            title: "Open Gym",
            tag: "INDEPENDENT TRAINING",
            description:
            "Train on your schedule with full access to specialist strength racks, free weights, and functional turf—without waiting for equipment."
        }, {
            title: "Personal Training",
            tag: "1-ON-1 COACHING",
            description:
            "Dedicated one-to-one coaching tailored to your goals, whether you're a beginner building confidence or an experienced lifter chasing new numbers."
        }, {
            title: "Group Training",
            tag: "SCHEDULED SESSIONS",
            description:
            "Coach-led strength and conditioning sessions designed for high energy, proper technique, and consistent weekly progression."
        }
    ],

    // Weekly Group Timetable (Easy to edit weekly via WhatsApp requests)
    timetable: [{
            day: "Monday",
            time: "07:00 AM",
            session: "Strength Foundations",
            coach: "Head Coach"
        }, {
            day: "Tuesday",
            time: "06:30 PM",
            session: "Metabolic Conditioning",
            coach: "Coach Name"
        }, {
            day: "Wednesday",
            time: "07:00 AM",
            session: "Lower Body Power",
            coach: "Head Coach"
        }, {
            day: "Thursday",
            time: "06:30 PM",
            session: "Upper Body & Core",
            coach: "Coach Name"
        }, {
            day: "Friday",
            time: "07:00 AM",
            session: "Full-Body Conditioning",
            coach: "Head Coach"
        }, {
            day: "Saturday",
            time: "09:00 AM",
            session: "Weekend Strength Circuit",
            coach: "Coach Name"
        }
    ],

    // Personal Trainers (Swap with real names, bios & local photos)
    trainers: [{
            name: "Coach Name 1",
            role: "Head Trainer • Strength & Conditioning",
            certs: "CSCS • Level 3 PT",
            bio: "Specialises in structured strength programming, barbell mechanics, and long-term progress tracking.",
            image: "images/trainer-1.jpg"
        }, {
            name: "Coach Name 2",
            role: "Personal Trainer • Beginner & Mobility Coach",
            certs: "NASM-CPT • Functional Training",
            bio: "Helps working professionals and beginners build sustainable training habits with confidence and proper form.",
            image: "images/trainer-2.jpg"
        }
    ],

    // Free Gym Tour Breakdown
    tourSteps: [
        "15-minute guided facility walkthrough",
        "Brief fitness goals consultation",
        "Complimentary basic fitness assessment",
        "Optional introductory training session"
    ],

    // Frequently Asked Questions
    faqs: [{
            question: "Is the gym beginner-friendly?",
            answer: "Absolutely. We provide beginner guidance so you never feel left alone on the gym floor."
        }, {
            question: "Is the gym overcrowded?",
            answer: "No. We operate with capped memberships to keep the training floor comfortable and equipment accessible."
        }, {
            question: "Do you have personal trainers?",
            answer: "Yes, structured 1-on-1 personal training is available for all experience levels."
        }, {
            question: "Are showers and lockers available?",
            answer: "Yes, clean showers and secure lockers are available for all members."
        }, {
            question: "Do you offer group classes?",
            answer: "Yes, we offer scheduled group strength and conditioning sessions throughout the week."
        }
    ],

    email: "hello@ironcorefitness.com",
    phone: "+1 (512) 555-0198",
    address: "742 W 2nd Street, Suite 110, Austin, TX 78701",
    hours: "Mon – Fri: 5:30 AM – 10:00 PM | Sat – Sun: 7:00 AM – 7:00 PM",
    whatsapp: {
        number: "15125550198", // Swap with your own number if using this portfolio site for live leads
        message: "Hi IRONCORE FITNESS! I'd like to book my free gym tour in Austin."
    },
    googleMapEmbedUrl: "https://www.google.com/maps?q=W+2nd+Street+Austin+TX+78701&output=embed",
    web3FormsAccessKey: "89124c16-84f1-4f28-8f02-d09518e2d3eb"
};

document.addEventListener("DOMContentLoaded", () => {
    // 1. Mobile Menu Toggle
    const menuToggle = document.getElementById("menu-toggle");
    const mobileNav = document.getElementById("mobile-nav");
    if (menuToggle && mobileNav) {
        menuToggle.addEventListener("click", () => mobileNav.classList.toggle("active"));
        mobileNav.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => mobileNav.classList.remove("active"));
        });
    }

    // 2. FAQ Accordion
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

    // 3. WhatsApp Button & Google Map
    const waBtn = document.getElementById("whatsapp-btn");
    if (waBtn && SITE_CONFIG.whatsapp?.number) {
        const cleanNum = SITE_CONFIG.whatsapp.number.replace(/\D/g, "");
        const msg = encodeURIComponent(SITE_CONFIG.whatsapp.message || "Hi IRONCORE FITNESS!");
        waBtn.href = `https://wa.me/${cleanNum}?text=${msg}`;
        waBtn.style.display = "flex";
    }

    const mapContainer = document.getElementById("map-container");
    const mapFrame = document.getElementById("google-map");
    if (mapContainer && mapFrame && SITE_CONFIG.googleMapEmbedUrl) {
        mapFrame.src = SITE_CONFIG.googleMapEmbedUrl;
        mapContainer.style.display = "block";
    }

    // 4. Tour Booking & Enquiry Form (Web3Forms + Demo Mode)
    const form = document.getElementById("tour-form");
    const statusEl = document.getElementById("form-status");
    const submitBtn = document.getElementById("submit-btn");

    if (form && statusEl && submitBtn) {
        form.addEventListener("submit", async(e) => {
            e.preventDefault();
            const visitorName = document.getElementById("full-name")?.value.trim() || "there";
            const enquiryType = document.getElementById("enquiry-type")?.value || "gym tour";

            submitBtn.disabled = true;
            submitBtn.textContent = "SENDING REQUEST...";
            statusEl.className = "form-status";
            statusEl.textContent = "";

            const confirmMsg = `✓ Request Confirmed, ${visitorName}! We've received your "${enquiryType}" request and our team will reach out within 2 hours to confirm your time.`;

            if (!SITE_CONFIG.web3FormsAccessKey) {
                setTimeout(() => {
                    statusEl.className = "form-status success";
                    statusEl.textContent = `${confirmMsg} (Demo Mode)`;
                    form.reset();
                    submitBtn.disabled = false;
                    submitBtn.textContent = "BOOK YOUR FREE GYM TOUR →";
                }, 500);
                return;
            }

            const formData = new FormData(form);
            formData.append("access_key", SITE_CONFIG.web3FormsAccessKey);
            formData.append("subject", `New Lead (${enquiryType}) — ${SITE_CONFIG.brandName}`);

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
                submitBtn.disabled = false;
                submitBtn.textContent = "BOOK YOUR FREE GYM TOUR →";
            }
        });
    }

    // 5. Auto-Update Footer Year
    const yearEl = document.getElementById("footer-year");
    if (yearEl)
        yearEl.textContent = new Date().getFullYear();
    // 6. Timetable Quick-Select & Dynamic Submit Button
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

    document.querySelectorAll(".tt-link[data-session]").forEach((link) => {
        link.addEventListener("click", () => {
            if (enquirySelect) {
                enquirySelect.value = "Enquire About a Group Session";
                syncButtonLabel();
            }
            if (goalsInput) {
                goalsInput.value = `I'd like to enquire about: ${link.dataset.session}`;
            }
        });
    });

    document.querySelectorAll(".tt-link[data-enquiry]").forEach((link) => {
        link.addEventListener("click", () => {
            if (enquirySelect) {
                enquirySelect.value = link.dataset.enquiry;
                syncButtonLabel();
            }
        });
    });
});
