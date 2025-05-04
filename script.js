/**
 * Main JavaScript file for Konstantinos Nakos GitHub Page
 * Created: May 2025
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Handle contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would typically handle the form submission with an API
            // For GitHub Pages, you'll need a third-party form service like Formspree
            // Example implementation:
            // const formData = new FormData(contactForm);
            // fetch('https://formspree.io/your-formspree-endpoint', {
            //     method: 'POST',
            //     body: formData,
            //     headers: {
            //         'Accept': 'application/json'
            //     }
            // }).then(response => {
            //     if (response.ok) {
            //         // Show success message
            //     } else {
            //         // Show error message
            //     }
            // }).catch(error => {
            //     // Handle error
            // });
            
            // For demonstration purposes:
            alert('Thank you for your message! This is a demo form on a static site. In a production environment, this would send your message to Konstantinos.');
            
            // Reset the form
            contactForm.reset();
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add animation class to elements when they scroll into view
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.timeline-item, .project-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate');
            }
        });
    };

    // Get carousel elements
    const carousel = document.querySelector('#words_of_wisdom .carousel');
    const prevBtn = document.querySelector('#words_of_wisdom .prev');
    const nextBtn = document.querySelector('#words_of_wisdom .next');
    const items = document.querySelectorAll('#words_of_wisdom .carousel-item');
    
    // Calculate item width (including gap)
    const itemWidth = items[0].offsetWidth + 20; // width + gap
    
    // Navigation buttons functionality with immediate response
    prevBtn.addEventListener('click', function() {
        carousel.scrollTo({
            left: carousel.scrollLeft - itemWidth,
            behavior: 'smooth'
        });
    });
    
    nextBtn.addEventListener('click', function() {
        carousel.scrollTo({
            left: carousel.scrollLeft + itemWidth,
            behavior: 'smooth'
        });
    });
    
    // Optional: Auto-scroll functionality
    let autoScrollInterval;
    
    function startAutoScroll() {
        autoScrollInterval = setInterval(() => {
            if (carousel.scrollLeft >= (carousel.scrollWidth - carousel.clientWidth - 10)) {
                carousel.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                carousel.scrollTo({
                    left: carousel.scrollLeft + itemWidth,
                    behavior: 'smooth'
                });
            }
        }, 12000);
    }
    
    function stopAutoScroll() {
        clearInterval(autoScrollInterval);
    }
    
    // Start auto-scroll when page loads
    startAutoScroll();
    
    // Stop auto-scroll when user interacts with carousel
    carousel.addEventListener('mouseenter', stopAutoScroll);
    prevBtn.addEventListener('mouseenter', stopAutoScroll);
    nextBtn.addEventListener('mouseenter', stopAutoScroll);
    
    // Resume auto-scroll when user stops interacting
    carousel.addEventListener('mouseleave', startAutoScroll);
    prevBtn.addEventListener('mouseleave', startAutoScroll);
    nextBtn.addEventListener('mouseleave', startAutoScroll);
    
    // Handle touch devices
    carousel.addEventListener('touchstart', stopAutoScroll);
    carousel.addEventListener('touchend', startAutoScroll);

    // Call once on page load
    animateOnScroll();
    
    // Then call on scroll
    window.addEventListener('scroll', animateOnScroll);
});

document.addEventListener('DOMContentLoaded', () => {
    // Carousel navigation
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.nav-btn.prev');
    const nextBtn = document.querySelector('.nav-btn.next');
    
    let currentIndex = 0;
    const itemWidth = 320; // Width of item + gap
    
    function updateCarousel() {
        carousel.scrollTo({
            left: currentIndex * itemWidth,
            behavior: 'smooth'
        });
    }
    
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        });
        
        nextBtn.addEventListener('click', () => {
            if (currentIndex < items.length - 1) {
                currentIndex++;
                updateCarousel();
            }
        });
    }
    
    // Touch events for mobile swipe
    let touchStartX = 0;
    let touchEndX = 0;
    
    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, false);
    
    carousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0 && currentIndex < items.length - 1) {
                // Swipe left
                currentIndex++;
                updateCarousel();
            } else if (diff < 0 && currentIndex > 0) {
                // Swipe right
                currentIndex--;
                updateCarousel();
            }
        }
    }
});

// Topic switching functionality for Quantitative Methods page
document.addEventListener('DOMContentLoaded', function() {
    const topicButtons = document.querySelectorAll('.topic-button');
    const topicSections = document.querySelectorAll('.topic-content');

    topicButtons.forEach(button => {
        button.addEventListener('click', () => {
            const topic = button.dataset.topic;
            
            // Update active button
            topicButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Update visible content
            topicSections.forEach(section => {
                if (section.id === topic) {
                    section.classList.add('active');
                } else {
                    section.classList.remove('active');
                }
            });
        });
    });
});

// Quote rotation functionality
document.addEventListener('DOMContentLoaded', function() {
    const quoteContents = document.querySelectorAll('.quote-content');
    let currentQuoteIndex = 0;

    function rotateQuotes() {
        quoteContents.forEach(quote => {
            quote.classList.remove('active');
        });

        currentQuoteIndex = (currentQuoteIndex + 1) % quoteContents.length;
        quoteContents[currentQuoteIndex].classList.add('active');
    }

    // Set interval for quote rotation (6 seconds)
    setInterval(rotateQuotes, 6000);
});