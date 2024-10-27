// Get references to important elements
const sections = document.querySelectorAll('section');
const navList = document.getElementById('navbar__list');
const navbar = document.querySelector('.header');  // Reference to the navbar
const scrollToTopButton = document.getElementById('scrollToTop');

// Dynamically build the navigation menu
sections.forEach(section => {
    const navItem = document.createElement('li');
    const navLink = document.createElement('a');
    navLink.textContent = section.getAttribute('data-nav');
    navLink.href = `#${section.id}`;
    navItem.appendChild(navLink);
    
    // Smooth scroll with offset when clicking nav links
    navLink.addEventListener('click', (e) => {
        e.preventDefault();
        
        const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = sectionPosition - navbar.offsetHeight; // Adjust for navbar height
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });

    navList.appendChild(navItem);
});

// Add 'active' class to section in viewport
window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const navLink = document.querySelector(`a[href="#${section.id}"]`).parentElement;

        if (rect.top >= 0 && rect.top < 300) {
            section.classList.add('active');
            navLink.classList.add('active');
        } else {
            section.classList.remove('active');
            navLink.classList.remove('active');
        }
    });

    // Toggle visibility of Scroll-to-Top button
    if (window.scrollY > 500) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Scroll to top when button is clicked
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
