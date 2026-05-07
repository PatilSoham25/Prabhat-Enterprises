document.addEventListener('DOMContentLoaded', () => {
    const productCards = document.querySelectorAll('.product-card');

    // Create an intersection observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add a staggered delay based on the item's index
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 150); // 150ms delay between each card
                
                // Stop observing once it has faded in
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15 // Trigger when 15% of the card is visible
    });

    // Set initial state via JS and start observing
    productCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// ====Floater===============

document.addEventListener('DOMContentLoaded', () => {
    
    // Select the Back to Top button
    const backToTopBtn = document.getElementById('backToTop');

    if (backToTopBtn) {
        
        // 1. Listen for scrolling
        window.addEventListener('scroll', () => {
            // If the user scrolls down more than 300 pixels
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('show'); // Pop the button in
            } else {
                backToTopBtn.classList.remove('show'); // Hide the button
            }
        });

        // 2. Listen for the click
        backToTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // Smoothly scroll the window back to the top (0,0)
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});