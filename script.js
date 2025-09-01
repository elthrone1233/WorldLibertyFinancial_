// Animated Background Elements
class BackgroundAnimation {
    constructor() {
        this.cardsContainer = document.querySelector('.falling-cards');
        this.diceContainer = document.querySelector('.falling-dice');
        this.coinsContainer = document.querySelector('.floating-coins');
        
        this.init();
    }
    
    init() {
        this.createFallingCards();
        this.createFallingDice();
        this.createFloatingCoins();
        
        // Smooth scrolling for navigation links
        this.setupSmoothScrolling();
        
        // Header scroll effect
        this.setupHeaderScroll();
    }
    
    createFallingCards() {
        const cardSymbols = ['♠', '♥', '♦', '♣'];
        const cardValues = ['A', 'K', 'Q', 'J', '10', '9', '8', '7'];
        
        setInterval(() => {
            if (document.querySelectorAll('.falling-card').length < 8) {
                const card = document.createElement('div');
                card.className = 'falling-card';
                
                const symbol = cardSymbols[Math.floor(Math.random() * cardSymbols.length)];
                const value = cardValues[Math.floor(Math.random() * cardValues.length)];
                
                card.innerHTML = `
                    <div class="card-face">
                        <span class="card-value">${value}</span>
                        <span class="card-symbol">${symbol}</span>
                    </div>
                `;
                
                card.style.left = Math.random() * 100 + '%';
                card.style.animationDuration = (Math.random() * 3 + 4) + 's';
                card.style.animationDelay = Math.random() * 2 + 's';
                
                this.cardsContainer.appendChild(card);
                
                // Remove card after animation
                setTimeout(() => {
                    if (card.parentNode) {
                        card.parentNode.removeChild(card);
                    }
                }, 7000);
            }
        }, 2000);
    }
    
    createFallingDice() {
        setInterval(() => {
            if (document.querySelectorAll('.falling-dice-item').length < 5) {
                const dice = document.createElement('div');
                dice.className = 'falling-dice-item';
                
                const dots = Math.floor(Math.random() * 6) + 1;
                dice.innerHTML = this.createDiceFace(dots);
                
                dice.style.left = Math.random() * 100 + '%';
                dice.style.animationDuration = (Math.random() * 2 + 3) + 's';
                dice.style.animationDelay = Math.random() * 3 + 's';
                
                this.diceContainer.appendChild(dice);
                
                // Remove dice after animation
                setTimeout(() => {
                    if (dice.parentNode) {
                        dice.parentNode.removeChild(dice);
                    }
                }, 6000);
            }
        }, 3000);
    }
    
    createDiceFace(dots) {
        const dotPositions = {
            1: ['center'],
            2: ['top-left', 'bottom-right'],
            3: ['top-left', 'center', 'bottom-right'],
            4: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
            5: ['top-left', 'top-right', 'center', 'bottom-left', 'bottom-right'],
            6: ['top-left', 'top-right', 'middle-left', 'middle-right', 'bottom-left', 'bottom-right']
        };
        
        let dotsHtml = '';
        dotPositions[dots].forEach(position => {
            dotsHtml += `<div class="dice-dot ${position}"></div>`;
        });
        
        return `<div class="dice-face">${dotsHtml}</div>`;
    }
    
    createFloatingCoins() {
        setInterval(() => {
            if (document.querySelectorAll('.floating-coin').length < 6) {
                const coin = document.createElement('div');
                coin.className = 'floating-coin';
                coin.innerHTML = '$';
                
                coin.style.left = Math.random() * 100 + '%';
                coin.style.top = Math.random() * 100 + '%';
                coin.style.animationDuration = (Math.random() * 2 + 3) + 's';
                coin.style.animationDelay = Math.random() * 2 + 's';
                
                this.coinsContainer.appendChild(coin);
                
                // Remove coin after animation
                setTimeout(() => {
                    if (coin.parentNode) {
                        coin.parentNode.removeChild(coin);
                    }
                }, 5000);
            }
        }, 4000);
    }
    
    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
    
    setupHeaderScroll() {
        const header = document.querySelector('.header');
        let lastScrollY = window.scrollY;
        
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > 100) {
                header.style.background = 'rgba(0, 0, 0, 0.95)';
            } else {
                header.style.background = 'rgba(0, 0, 0, 0.9)';
            }
            
            lastScrollY = currentScrollY;
        });
    }
}

// CSS for animated elements (injected via JavaScript)
const animationStyles = `
    .falling-card {
        position: absolute;
        width: 40px;
        height: 60px;
        animation: fall linear infinite;
        z-index: 1;
    }
    
    .card-face {
        width: 100%;
        height: 100%;
        background: linear-gradient(145deg, #ffffff, #f0f0f0);
        border: 1px solid #ddd;
        border-radius: 6px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 4px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        color: #000;
        font-weight: bold;
        font-size: 10px;
    }
    
    .card-symbol {
        font-size: 16px;
        color: ${Math.random() > 0.5 ? '#ff0000' : '#000000'};
    }
    
    .falling-dice-item {
        position: absolute;
        width: 30px;
        height: 30px;
        animation: fall linear infinite;
        z-index: 1;
    }
    
    .dice-face {
        width: 100%;
        height: 100%;
        background: linear-gradient(145deg, #ffffff, #f0f0f0);
        border: 1px solid #ddd;
        border-radius: 4px;
        position: relative;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
    }
    
    .dice-dot {
        position: absolute;
        width: 4px;
        height: 4px;
        background: #000;
        border-radius: 50%;
    }
    
    .dice-dot.top-left { top: 6px; left: 6px; }
    .dice-dot.top-right { top: 6px; right: 6px; }
    .dice-dot.middle-left { top: 50%; left: 6px; transform: translateY(-50%); }
    .dice-dot.center { top: 50%; left: 50%; transform: translate(-50%, -50%); }
    .dice-dot.middle-right { top: 50%; right: 6px; transform: translateY(-50%); }
    .dice-dot.bottom-left { bottom: 6px; left: 6px; }
    .dice-dot.bottom-right { bottom: 6px; right: 6px; }
    
    .floating-coin {
        position: absolute;
        width: 25px;
        height: 25px;
        background: linear-gradient(45deg, #ffd700, #ffed4e);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 14px;
        color: #000;
        animation: float ease-in-out infinite;
        box-shadow: 0 2px 10px rgba(255, 215, 0, 0.4);
        z-index: 1;
    }
`;

// Inject styles
const styleSheet = document.createElement('style');
styleSheet.textContent = animationStyles;
document.head.appendChild(styleSheet);

// Initialize animation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new BackgroundAnimation();
});

// Add some interactive effects
document.addEventListener('DOMContentLoaded', () => {
    // Add click effect to buttons
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add hover effect to cards
    document.querySelectorAll('.about-card, .tokenomics-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Add ripple effect styles
const rippleStyles = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;

const rippleStyleSheet = document.createElement('style');
rippleStyleSheet.textContent = rippleStyles;
document.head.appendChild(rippleStyleSheet);