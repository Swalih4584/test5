document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.getElementById('cta-button');

    // 1. Simple CTA Interaction
    ctaButton.addEventListener('click', () => {
        alert('Thank you for your interest! A form would appear here to get your quote.');
        // In a real site, this would trigger a modal or redirect to the contact page.
    });

    // 2. Observer for Fade-In Effect (Subtle Entrance)
    // Makes sections fade in as the user scrolls, which looks great on a dark theme.
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Stop observing after it has appeared once
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the section is visible
    });

    sections.forEach(section => {
        section.classList.add('fade-in'); // Add base class for transition
        observer.observe(section);
    });
});

// Add the corresponding CSS for the fade-in effect:
/*
.fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 1s ease-out, transform 1s ease-out;
}
.fade-in.visible {
    opacity: 1;
    transform: translateY(0);
}
*/