

// Simple JavaScript for interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle (we'll add this functionality later)
    console.log("Barbara University website loaded!");
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Add floral elements dynamically
    addFloralElements();

    // Make search work on Enter key
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                search();
            }
        });
    }

    // Highlight current page in navigation
    const currentPage = location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-left a, .nav-right a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Form submission handling
    const applicationForm = document.getElementById('applicationForm');
    if (applicationForm) {
        applicationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const program = document.getElementById('program').value;
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            
            // Validate
            if (!program || !firstName || !lastName || !email) {
                alert('Please fill out all fields');
                return;
            }
            
            // In a real app, you would send this data to a server
            alert(`Application submitted successfully!\n\n${firstName} ${lastName}\n${program.toUpperCase()} Program\nWe'll contact you at ${email}`);
            
            // Reset form
            applicationForm.reset();
        });
    }
});

// Function to handle search
function search() {
    const searchTerm = document.getElementById('searchInput').value.trim();
    if (searchTerm !== '') {
        // In a real implementation, this would redirect to search results
        alert(`Searching for "${searchTerm}" across Barbara University...\n\n(For a real website, this would show actual search results)`);

        // Example of what you might do:
        // window.location.href = `search-results.html?query=${encodeURIComponent(searchTerm)}`;
    } else {
        alert('Please enter a search term');
    }
}

// Function to add floral elements dynamically
function addFloralElements() {
    const floralSVG = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100" style="position: absolute; bottom: 20px; right: 20px; z-index: 1;">
            <path d="M50,10 C60,20 70,15 80,25 C90,35 85,45 95,55 C85,65 90,75 80,85 C70,95 60,90 50,100 C40,90 30,95 20,85 C10,75 15,65 5,55 C15,45 10,35 20,25 C30,15 40,20 50,10 Z" 
                  fill="#ff5c8a" opacity="0.2"/>
        </svg>
    `;
    document.body.insertAdjacentHTML('beforeend', floralSVG);
}

// Mobile menu toggle functionality
function toggleMobileMenu() {
    const nav = document.querySelector('.nav-left ul');
    nav.classList.toggle('mobile-visible');
}

document.querySelectorAll('a[href="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
  });
});

  