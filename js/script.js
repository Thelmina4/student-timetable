// Wait for the HTML to be fully loaded before running any code
document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. SCROLL TO TOP LOGIC ---
    const topBtn = document.getElementById("myBtn");

    window.onscroll = function () {
        if (topBtn) {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                topBtn.style.display = "block";
            } else {
                topBtn.style.display = "none";
            }
        }
    };

    // Make sure your "Scroll to Top" button has: onclick="topFunction()" 
    // or add the listener here:
    if (topBtn) {
        topBtn.addEventListener('click', () => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });
    }

    // --- 2. MODAL LOGIC ---
    const updateModalEl = document.getElementById('updatesModal');
    if (updateModalEl) {
        const myModal = new bootstrap.Modal(updateModalEl);
        myModal.show();
    }

    // --- 3. COUNTER LOGIC ---
    const countBtn = document.getElementById('clickButton');
    const counterSpan = document.getElementById('counter');
    let count = 0;

    if (countBtn && counterSpan) {
        countBtn.addEventListener('click', () => {
            count++;
            counterSpan.textContent = count;
        });
    }

    // --- 4. YEAR UPDATE ---
    const yearElement = document.getElementById("year");
    if (yearElement) {
        yearElement.innerHTML = new Date().getFullYear();
    }

    // --- 5. PARTY CONFETTI LOGIC ---
    const partyBtn = document.getElementById('partyButton');
    if (partyBtn) {
        partyBtn.addEventListener('click', () => {
            confetti({
                particleCount: 150,
                spread: 100,
                origin: { y: 0.6 },
                colors: ['#ff4757', '#2ed573', '#1e90ff', '#ffa502']
            });
        });
    }

    console.log("All scripts loaded successfully!");
});
