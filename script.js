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
     
     // Navigation buttons functionality
     prevBtn.addEventListener('click', function() {
         smoothScroll(carousel.scrollLeft - itemWidth);
     });
     
     nextBtn.addEventListener('click', function() {
         smoothScroll(carousel.scrollLeft + itemWidth);
     });
     
     // Optional: Auto-scroll functionality
     let autoScrollInterval;
     
     function startAutoScroll() {
         autoScrollInterval = setInterval(() => {
             if (carousel.scrollLeft >= (carousel.scrollWidth - carousel.clientWidth - 10)) {
                 // Reset to beginning if reached the end
                 smoothScroll(0);
             } else {
                 smoothScroll(carousel.scrollLeft + itemWidth);
             }
         }, 12000); // Changed to 12 seconds as requested
     }
     
     // Add smooth scrolling behavior
     let isScrolling = false;
     function smoothScroll(target) {
         if (isScrolling) return;
         isScrolling = true;
         const start = carousel.scrollLeft;
         const distance = target - start;
         const duration = 800; // Increased duration for smoother transitions
         let startTime = null;

         function animation(currentTime) {
             if (startTime === null) startTime = currentTime;
             const timeElapsed = currentTime - startTime;
             const progress = Math.min(timeElapsed / duration, 1);
             const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2; // Smooth easing function
             carousel.scrollLeft = start + (distance * easeProgress);

             if (timeElapsed < duration) {
                 requestAnimationFrame(animation);
             } else {
                 isScrolling = false;
             }
         }

         requestAnimationFrame(animation);
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