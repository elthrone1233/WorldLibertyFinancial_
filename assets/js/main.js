/* Enabled Chart */
const ctx = document.getElementById('tokenChart');

new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Dex Public sell', 'Burn events', 'Team', 'Cex listing'],
        datasets:
            [
                {
                    data: [15, 55, 10, 10],
                    backgroundColor: ['#34dcbfad', '#34dcbf', '#B6FFB6', '#34dcbf'],
                    borderWidth: 0,
                },
            ],
    },
    options: {
        plugins: {
            legend: {
                display: false,
            }
        }
    }
});

/* Accordion */

let key = "1";

document.querySelectorAll('[data-key]').forEach((el, i) => {
    el.addEventListener('click', function (e) {
        key = el.getAttribute('data-key');

        AccordionCheck();
        if (el.getAttribute('data-key') === key) {
            el.querySelector('[data-acc-title]').classList.add('pt-6', 'sm:pt-12', 'pb-6', 'text-primary');
            el.querySelector('[data-acc-title]').classList.remove('py-4');
            el.querySelector('[data-acc-body]').classList.remove('h-0', 'overflow-hidden');
            if (el.querySelector('[data-acc-open]')) {
                el.querySelector('[data-acc-open]').classList.add('hidden');
                el.querySelector('[data-acc-open]').classList.remove('block');
            }
            if (el.querySelector('[data-acc-close]')) {
                el.querySelector('[data-acc-close]').classList.remove('hidden');
                el.querySelector('[data-acc-close]').classList.add('block');
            }
        }
    });
});

function AccordionCheck() {
    document.querySelectorAll('[data-key]').forEach((el, i) => {
        el.querySelector('[data-acc-title]').classList.remove('pt-6', 'sm:pt-12', 'pb-6', 'text-primary');
        el.querySelector('[data-acc-title]').classList.add('py-4');
        el.querySelector('[data-acc-body]').classList.add('h-0', 'overflow-hidden');
        if (el.querySelector('[data-acc-open]')) {
            el.querySelector('[data-acc-open]').classList.remove('hidden');
            el.querySelector('[data-acc-open]').classList.add('block');
        }
        if (el.querySelector('[data-acc-close]')) {
            el.querySelector('[data-acc-close]').classList.add('hidden');
            el.querySelector('[data-acc-close]').classList.remove('block');
        }

        if (el.getAttribute('data-key') === key) {
            el.querySelector('[data-acc-title]').classList.add('pt-6', 'sm:pt-12', 'pb-6', 'text-primary');
            el.querySelector('[data-acc-title]').classList.remove('py-4');
            el.querySelector('[data-acc-body]').classList.remove('h-0', 'overflow-hidden');
            if (el.querySelector('[data-acc-open]')) {
                el.querySelector('[data-acc-open]').classList.add('hidden');
                el.querySelector('[data-acc-open]').classList.remove('block');
            }
            if (el.querySelector('[data-acc-close]')) {
                el.querySelector('[data-acc-close]').classList.remove('hidden');
                el.querySelector('[data-acc-close]').classList.add('block');
            }
        }
    })
}
AccordionCheck();


/* Nav Toggle */
document.querySelectorAll('[data-sideToggle]').forEach((el, i) => {
    el.addEventListener('click', function (e) {
        document.querySelector('[data-menu="mobile"]').classList.toggle('-translate-x-full');
    });
});

window.addEventListener("scroll", function () {
    if (window.pageYOffset > 50) {
        document.querySelectorAll('[data-desktop-navmenu] li a').forEach(el => {
            el.classList.add('py-8')
        });
        document.querySelector('[data-navbar]').classList.add('backdrop-blur-sm', '!bg-body/80');
    } else {
        document.querySelectorAll('[data-desktop-navmenu] li a').forEach(el => {
            el.classList.remove('py-8')
        });
        document.querySelector('[data-navbar]').classList.remove('backdrop-blur', '!bg-body/80');
    }
});

document.querySelectorAll('[data-offcanvas-menu] li a').forEach(el => {
    el.addEventListener('click', function(e) {
        document.querySelector('[data-menu="mobile"]').classList.toggle('-translate-x-full');
    });
});


// AOS
AOS.init();

// Counter Up
const counterUp = window.counterUp.default

const callback = entries => {
    entries.forEach(entry => {
        const el = entry.target
        if (entry.isIntersecting && !el.classList.contains('is-visible')) {
            counterUp(el, {
                duration: 2000,
                delay: 16,
            })
            el.classList.add('is-visible')
        }
    })
}
const IO = new IntersectionObserver(callback, { threshold: 1 })
const el = document.querySelectorAll('.counter-up').forEach(el => {
    IO.observe(el)
});

// TS Particles
tsParticles.load("tsparticles", {
    fps_limit: 60,
    interactivity: {
        detect_on: "canvas",
        events: {
            onclick: { enable: true, mode: "push" },
            onhover: {
                enable: true,
                mode: "attract",
                parallax: { enable: false, force: 60, smooth: 10 }
            },
            resize: true
        },
        modes: {
            push: { quantity: 4 },
            attract: { distance: 200, duration: 0.4, factor: 5 }
        }
    },
    particles: {
        color: { value: "#34dcbf" },
        line_linked: {
            color: "#34dcbf",
            distance: 150,
            enable: true,
            opacity: 1,
            width: 2
        },
        move: {
            attract: { enable: false, rotateX: 600, rotateY: 1200 },
            bounce: false,
            direction: "none",
            enable: true,
            out_mode: "out",
            random: false,
            speed: 1,
            straight: false
        },
        number: { density: { enable: true, value_area: 800 }, value: 80 },
        opacity: {
            anim: { enable: false, opacity_min: 0.1, speed: 1, sync: false },
            random: false,
            value: 0.5
        },
        shape: {
            character: {
                fill: false,
                font: "Verdana",
                style: "",
                value: "*",
                weight: "400"
            },
            image: {
                height: 150,
                replace_color: true,
                src: "images/github.svg",
                width: 100
            },
            polygon: { nb_sides: 5 },
            stroke: { color: "#47FC28", width: 0 },
            type: "circle"
        },
        size: {
            anim: { enable: false, size_min: 0.1, speed: 100, sync: false },
            random: true,
            value: 5
        }
    },
    polygon: {
        draw: { enable: false, lineColor: "#47FC28", lineWidth: 0.5 },
        move: { radius: 10 },
        scale: 1,
        type: "none",
        url: ""
    },
    retina_detect: true
});


// Code Copy
document.querySelectorAll('[data-smart-code-btn]').forEach(el => {
    el.addEventListener('click', function(e) {
        let btnKey = this.getAttribute('data-smart-code-btn');
        
        document.querySelectorAll('[data-smart-code]').forEach(el => {
            if (el.getAttribute('data-smart-code') === btnKey) {
                navigator.clipboard.writeText(el.innerHTML.trim())
            }
        });
        document.querySelectorAll('[data-smart-code-copy]').forEach(el => {
            if (el.getAttribute('data-smart-code-copy') === btnKey) {
                let textCapture = el.innerText;
                let alertText = el.getAttribute('data-smart-code-copy-text');
                el.innerText =  alertText ? alertText : "Code Copied";

                setTimeout(() =>{
                    el.innerText = "Copy Code";
                }, 500)
            }
        });
    })
})