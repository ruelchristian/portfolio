document.addEventListener('DOMContentLoaded', () => {
    /* ==========================================================================
       THEME MANAGEMENT (LIGHT/DARK AUTO & MANUAL TOGGLE)
       ========================================================================== */
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Apply stored theme or default to auto
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.className = savedTheme + '-theme';
    } else {
        body.className = 'auto-theme';
    }

    themeToggleBtn.addEventListener('click', () => {
        if (body.classList.contains('light-theme')) {
            body.className = 'dark-theme';
            localStorage.setItem('theme', 'dark');
        } else if (body.classList.contains('dark-theme')) {
            body.className = 'light-theme';
            localStorage.setItem('theme', 'light');
        } else {
            // Currently auto. Determine current system state and toggle opposite
            const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
            if (systemPrefersLight) {
                body.className = 'dark-theme';
                localStorage.setItem('theme', 'dark');
            } else {
                body.className = 'light-theme';
                localStorage.setItem('theme', 'light');
            }
        }
    });

    /* ==========================================================================
       MOBILE MENU CONTROLLER
       ========================================================================== */
    const mobileMenuBtn = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    const toggleMenu = () => {
        mobileMenuBtn.classList.toggle('active');
        navMenu.classList.toggle('active');
        // Prevent body scroll when menu open
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    };

    mobileMenuBtn.addEventListener('click', toggleMenu);

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    /* ==========================================================================
       DYNAMIC TYPING EFFECT
       ========================================================================== */
    const typedTextSpan = document.getElementById('typed-text');
    const textArray = [
        "Backend Developer",
        "C# & .NET Core Specialist",
        "Incoming 4th Year BSIT Student",
        "AI-Assisted Backend Engineer"
    ];
    const typingSpeed = 100;
    const erasingSpeed = 60;
    const newTextDelay = 2000;
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingSpeed);
        } else {
            textArrayIndex = (textArrayIndex + 1) % textArray.length;
            setTimeout(type, typingSpeed + 500);
        }
    }

    // Initialize typing
    if (textArray.length) setTimeout(type, newTextDelay);

    /* ==========================================================================
       SCROLL INTERSECTION OBSERVER (REVEAL & HEADER SYNC)
       ========================================================================== */
    const sections = document.querySelectorAll('section');
    const revealElements = document.querySelectorAll('.scroll-reveal');

    // Section reveal on scroll
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                
                // Trigger Anime.js skill bars build if skills section comes in
                if (entry.target.id === 'skills') {
                    animateSkills();
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // Active nav link highlight sync
    const activeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, {
        threshold: 0.35,
        rootMargin: "-10% 0px -40% 0px"
    });

    sections.forEach(sec => activeObserver.observe(sec));

    /* ==========================================================================
       ANIME.JS SKILL CHIPS STAGGER ANIMATION
       ========================================================================== */
    let skillsAnimated = false;
    function animateSkills() {
        if (skillsAnimated) return;
        skillsAnimated = true;

        anime({
            targets: '.tech-card',
            translateY: [15, 0],
            opacity: [0, 1],
            easing: 'easeOutBack',
            duration: 600,
            delay: anime.stagger(30)
        });
    }

    /* ==========================================================================
       PROJECT DETAIL MODAL (ARCHITECTURE DRAWER)
       ========================================================================== */
    const featuresBtn = document.getElementById('btn-project-features');
    const archModal = document.getElementById('architecture-modal');
    const modalCloseBtn = document.getElementById('btn-modal-close');
    const modalBackdrop = document.querySelector('.modal-backdrop');

    const openModal = () => {
        archModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Anime.js entrance for modal body parts
        anime({
            targets: '.modal-content > *',
            translateY: [20, 0],
            opacity: [0, 1],
            delay: anime.stagger(100),
            easing: 'spring(1, 80, 10, 0)'
        });
    };

    const closeModal = () => {
        archModal.classList.remove('active');
        document.body.style.overflow = '';
    };

    featuresBtn.addEventListener('click', openModal);
    modalCloseBtn.addEventListener('click', closeModal);
    modalBackdrop.addEventListener('click', closeModal);

    /* ==========================================================================
       CONTACT FORM SUBMITTER & TOAST NOTIFIER
       ========================================================================== */
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('btn-submit-form');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnIcon = submitBtn.querySelector('.btn-icon');
    const toast = document.getElementById('toast-notification');

    // Helper to display toast notifications dynamically
    function showToast(title, desc, type = 'success') {
        if (!toast) return;

        const toastTitle = toast.querySelector('.toast-title');
        const toastDesc = toast.querySelector('.toast-desc');
        const toastIcon = toast.querySelector('.toast-icon');

        if (toastTitle) toastTitle.textContent = title;
        if (toastDesc) toastDesc.textContent = desc;

        if (toastIcon) {
            toastIcon.className = 'toast-icon fa-solid';
            if (type === 'success') {
                toastIcon.classList.add('fa-circle-check');
                toastIcon.style.color = '#10b981'; // Green
            } else if (type === 'error') {
                toastIcon.classList.add('fa-circle-xmark');
                toastIcon.style.color = '#f43f5e'; // Red
            } else {
                toastIcon.classList.add('fa-circle-info');
                toastIcon.style.color = '#38bdf8'; // Blue
            }
        }

        // Show Toast Notification
        toast.classList.add('show');
        
        // Animate toast entry
        anime({
            targets: '#toast-notification',
            translateY: ['120%', '0%'],
            opacity: [0, 1],
            duration: 500,
            easing: 'easeOutQuart'
        });

        // Auto-hide toast after 4 seconds
        setTimeout(() => {
            anime({
                targets: '#toast-notification',
                translateY: ['0%', '120%'],
                opacity: [1, 0],
                duration: 500,
                easing: 'easeInQuart',
                complete: () => {
                    toast.classList.remove('show');
                }
            });
        }, 4000);
    }

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Disable button & animate to sending state
        submitBtn.disabled = true;
        btnText.textContent = "Sending...";
        btnIcon.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i>';

        const name = document.getElementById('form-name').value;
        const email = document.getElementById('form-email').value;
        const subject = document.getElementById('form-subject').value;
        const message = document.getElementById('form-message').value;

        // Replace this with your Web3Forms access key (register free at https://web3forms.com)
        const accessKey = "43ea2721-580d-43dc-b858-4e41a7651830"; 

        // Get hCaptcha token
        const hCaptcha = contactForm.querySelector('textarea[name=h-captcha-response]');
        const hCaptchaResponse = hCaptcha ? hCaptcha.value : "";

        if (accessKey === "YOUR_WEB3FORMS_ACCESS_KEY_HERE") {
            // Simulation fallback
            setTimeout(() => {
                showToast("Simulation Successful!", "Recruiter form input validated. Add access key to index.js to receive real emails.", "info");
                submitBtn.disabled = false;
                btnText.textContent = "Send Message";
                btnIcon.innerHTML = '<i class="fa-solid fa-paper-plane"></i>';
                contactForm.reset();
                if (typeof hcaptcha !== "undefined") hcaptcha.reset();
            }, 1200);
            return;
        }

        // Validate hCaptcha response on frontend
        if (!hCaptchaResponse) {
            showToast("Captcha Required", "Please check the hCaptcha box to verify you are human.", "error");
            submitBtn.disabled = false;
            btnText.textContent = "Send Message";
            btnIcon.innerHTML = '<i class="fa-solid fa-paper-plane"></i>';
            return;
        }

        // Real fetch request to Web3Forms API (Free tier form submitter)
        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                access_key: accessKey,
                name: name,
                email: email,
                subject: `[Portfolio] ${subject}`,
                from_name: name,
                message: message,
                "h-captcha-response": hCaptchaResponse
            })
        })
        .then(async (response) => {
            const json = await response.json();
            if (response.status === 200) {
                showToast("Message Sent!", "Thank you. Ruel will get back to you shortly.", "success");
                contactForm.reset();
            } else {
                showToast("Submission Failed", json.message || "Something went wrong. Please try again.", "error");
            }
        })
        .catch((error) => {
            showToast("Network Error", "Could not connect to the form server. Please try again.", "error");
        })
        .finally(() => {
            submitBtn.disabled = false;
            btnText.textContent = "Send Message";
            btnIcon.innerHTML = '<i class="fa-solid fa-paper-plane"></i>';
            if (typeof hcaptcha !== "undefined") hcaptcha.reset();
        });
    });

    /* ==========================================================================
       HERO ORBIT SVG HOVER micro-interactions
       ========================================================================== */
    const orbitItems = document.querySelectorAll('.orbit-item');
    orbitItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            anime({
                targets: item,
                scale: 1.25,
                duration: 300,
                easing: 'easeOutBack'
            });
        });
        
        item.addEventListener('mouseleave', () => {
            anime({
                targets: item,
                scale: 1.0,
                duration: 300,
                easing: 'easeOutBack'
            });
        });
    });

    /* ==========================================================================
       FULLSCREEN LIGHTBOX FOR DASHBOARD SCREENSHOT
       ========================================================================== */
    const lightbox = document.getElementById("lightbox-modal");
    const lightboxImg = document.getElementById("lightbox-img");
    const browserImg = document.querySelector(".browser-image");
    const lightboxClose = document.querySelector(".lightbox-close");

    if (browserImg && lightbox && lightboxImg) {
        browserImg.addEventListener("click", () => {
            lightboxImg.src = browserImg.src;
            lightbox.classList.add("active");
            document.body.style.overflow = "hidden"; // Disable background scrolling
            
            // Subtle pop entry for full size image
            anime({
                targets: '.lightbox-content',
                scale: [0.95, 1],
                opacity: [0, 1],
                duration: 400,
                easing: 'easeOutCubic'
            });
        });

        const closeLightbox = () => {
            // Smooth fade exit
            anime({
                targets: '.lightbox-content',
                scale: [1, 0.95],
                opacity: [1, 0],
                duration: 350,
                easing: 'easeInCubic',
                complete: () => {
                    lightbox.classList.remove("active");
                    document.body.style.overflow = ""; // Re-enable background scrolling
                }
            });
        };

        lightboxClose.addEventListener("click", closeLightbox);
        
        // Close if click is on the dark background overlay
        lightbox.addEventListener("click", (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });

        // ESC key to close
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && lightbox.classList.contains("active")) {
                closeLightbox();
            }
        });
    }

    /* ==========================================================================
       INTERACTIVE MOUSE-FOLLOW PARALLAX FOR TECH ATOM
       ========================================================================== */
    const hero = document.getElementById('hero');
    const techSvg = document.querySelector('.tech-svg');
    const parallaxNodes = document.querySelectorAll('.parallax-node');

    if (hero && techSvg) {
        hero.addEventListener('mousemove', (e) => {
            const rect = hero.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2; // Offset from center X
            const y = e.clientY - rect.top - rect.height / 2;  // Offset from center Y
            // Normalize offsets (increased to 90 for much stronger parallax movement range)
            const moveX = (x / rect.width) * 90;
            const moveY = (y / rect.height) * 90;

            // Apply stronger 3D rotation tilt on the overall SVG
            techSvg.style.transform = `rotateX(${-moveY * 0.55}deg) rotateY(${moveX * 0.55}deg)`;
            
            // Parallax shift the inner wrapper nodes (decoupled from the keyframe float loops!)
            parallaxNodes.forEach((node) => {
                const depth = parseFloat(node.getAttribute('data-depth')) || 0.3;
                node.style.transform = `translate(${moveX * depth}px, ${moveY * depth}px)`;
                node.style.transition = 'transform 0.08s ease-out';
            });
        });

        // Reset positions smoothly on mouse leave
        hero.addEventListener('mouseleave', () => {
            techSvg.style.transform = '';
            techSvg.style.transition = 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)';
            
            parallaxNodes.forEach(node => {
                node.style.transform = '';
                node.style.transition = 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)';
            });
        });
    }
});
