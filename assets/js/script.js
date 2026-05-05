// 1. Fetch and load the header
fetch("/header.html")
  .then(response => {
    if (!response.ok) throw new Error("Network response was not ok");
    return response.text();
  })
  .then(data => {
    // Inject the header HTML into the page
    document.getElementById("header").innerHTML = data;
    
    // 2. Initialize the menu logic ONLY AFTER the header is loaded
    initializeMobileMenu();
  })
  .catch(error => console.error("Error loading the header:", error));

// 3. Function to handle all navigation logic
function initializeMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    
    // Safety check
    if (!menuToggle || !navLinks) {
        console.warn("Menu toggle or Nav links not found.");
        return;
    }

    // Handle the main mobile menu hamburger toggle
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Handle the mobile dropdown accordion logic
    const dropdownLinks = document.querySelectorAll('.dropdown > a, .sub-dropdown > a');
    
    dropdownLinks.forEach(link => {
        link.addEventListener('click', function(e) {
        
        // Only apply accordion behavior on mobile screens
        if (window.innerWidth <= 768) {
            
            // Find the parent list item (<li>)
            const parentLi = this.parentElement;
            
            // Check if this list item actually contains a <ul> inside it
            const hasSubMenu = parentLi.querySelector('ul');
            
            if (hasSubMenu) {
            e.preventDefault(); // Stop the link from navigating to a new page
            parentLi.classList.toggle('open'); // Open or close the sub-menu
            }
        }
        });
    });
}

// =====================================

const cards = document.querySelectorAll(".service-card");

cards.forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("active");
  });
});

// =====================================

document.addEventListener('DOMContentLoaded', () => {
    const quoteBtn = document.getElementById('quoteBtn');

    quoteBtn.addEventListener('click', () => {
        // You can replace this with a modal trigger or a redirect
        alert('Thank you for your interest! Our team will contact you shortly.');
    });
});

// =====================================
document.addEventListener('DOMContentLoaded', () => {
    // Select all the list items we want to animate
    const fadeItems = document.querySelectorAll('.fade-item');

    // Create an intersection observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add a staggered delay based on the item's index
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100); // 100ms delay between each item
                
                // Stop observing once it has faded in
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2 // Trigger when 20% of the item is visible
    });

    // Observe each item
    fadeItems.forEach(item => {
        observer.observe(item);
    });
});

// =====================================

// ===== Contact Page ===========
document.addEventListener('DOMContentLoaded', () => {
    
    // Select the caption element
    const caption = document.querySelector('.caption');
    
    // Add the 'visible' class slightly after the page loads 
    // to trigger the CSS transition
    if (caption) {
        setTimeout(() => {
            caption.classList.add('visible');
        }, 150); // 150ms delay
    }

    // Optional: Add a subtle parallax effect on scroll
    const banner = document.getElementById('contactBanner');
    
    window.addEventListener('scroll', () => {
        let scrollPosition = window.pageYOffset;
        // Moves the background image slightly slower than the scroll speed
        if (banner) {
            banner.style.backgroundPosition = `center ${scrollPosition * 0.4}px`;
        }
    });
});

// =====================================
// Load Footer
fetch("/footer.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  });

  document.addEventListener('DOMContentLoaded', () => {
    // Automatically set the copyright year to the current year
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

// =====================================
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Fade-in and slide-up animation for the caption text
    const caption = document.querySelector('.landing-banner .caption');
    
    if (caption) {
        setTimeout(() => {
            caption.classList.add('visible');
        }, 150); // slight delay so it feels smooth
    }

    // 2. Parallax effect for the image tag
    const bannerImg = document.querySelector('.banner-img');
    
    window.addEventListener('scroll', () => {
        let scrollPos = window.pageYOffset;
        
        // Only run the effect if we are near the top of the page to save performance
        if (bannerImg && scrollPos < 600) {
            // Pushes the image down slightly as you scroll down the page
            bannerImg.style.transform = `translateY(${scrollPos * 0.3}px) scale(1.05)`;
        }
    });
    
});

// ======================================
document.addEventListener('DOMContentLoaded', () => {
    
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    // Select all product cards that currently have the 'hidden-item' class
    const hiddenItems = document.querySelectorAll('.hidden-item');

    // If the button exists and there are hidden items to show
    if (loadMoreBtn && hiddenItems.length > 0) {
        
        loadMoreBtn.addEventListener('click', () => {
            // Loop through all hidden items and remove the class to reveal them
            hiddenItems.forEach(item => {
                item.classList.remove('hidden-item');
            });
            
            // Hide the button after all items have been loaded
            loadMoreBtn.style.display = 'none';
        });
        
    } else if (loadMoreBtn) {
        // If there are exactly 6 or fewer items total, hide the button initially
        loadMoreBtn.style.display = 'none';
    }
    
});
// =======================================
// From this About JS starts
// =======================================
document.addEventListener('DOMContentLoaded', () => {
    // Select the hero content container
    const heroContent = document.querySelector('.hero-content');
    
    // Add a slight delay (100ms) before triggering the animation
    // This ensures the browser has rendered the page before starting the movement
    if (heroContent) {
        setTimeout(() => {
            heroContent.classList.add('fade-in');
        }, 100);
    }
});

// =======================================
document.addEventListener('DOMContentLoaded', () => {
    // Select all elements with the 'reveal-on-scroll' class
    const reveals = document.querySelectorAll('.reveal-on-scroll');

    // Create a new Intersection Observer
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // If the element is visible in the viewport
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once it has been revealed
                observer.unobserve(entry.target);
            }
        });
    }, {
        // Trigger the animation when the element is 15% visible from the bottom
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    // Attach the observer to each reveal element
    reveals.forEach(reveal => {
        revealObserver.observe(reveal);
    });
});
