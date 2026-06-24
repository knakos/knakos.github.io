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

    // Call once on page load
    animateOnScroll();
    
    // Then call on scroll
    window.addEventListener('scroll', animateOnScroll);
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
    let isTransitioning = false;

    // Make sure first quote starts as active
    if (quoteContents.length > 0) {
        quoteContents[0].classList.add('active');
    }

    function rotateQuotes() {
        if (isTransitioning || quoteContents.length <= 1) return;
        isTransitioning = true;

        const currentQuote = quoteContents[currentQuoteIndex];
        const nextIndex = (currentQuoteIndex + 1) % quoteContents.length;
        const nextQuote = quoteContents[nextIndex];

        // Start transitions
        currentQuote.style.zIndex = '1';
        nextQuote.style.zIndex = '2';

        // Remove active class from current quote
        currentQuote.classList.remove('active');

        // After current quote fades out, show next quote
        setTimeout(() => {
            nextQuote.classList.add('active');
            currentQuoteIndex = nextIndex;
            isTransitioning = false;
            currentQuote.style.zIndex = '';
            nextQuote.style.zIndex = '';
        }, 600); // Match CSS transition duration
    }

    // Set interval for quote rotation (6 seconds)
    if (quoteContents.length > 1) {
        setInterval(rotateQuotes, 6000);
    }
});