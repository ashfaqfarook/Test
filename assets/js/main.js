// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    
    if (mobileMenuToggle && mobileMenuOverlay) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenuOverlay.classList.add('active');
        });
        
        mobileMenuOverlay.addEventListener('click', function(e) {
            if (e.target === mobileMenuOverlay) {
                mobileMenuOverlay.classList.remove('active');
            }
        });
        
        // Close mobile menu when clicking on a link
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuOverlay.classList.remove('active');
            });
        });
    }
    
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add scroll-based header shadow
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 10) {
                header.style.boxShadow = 'var(--shadow-md)';
            } else {
                header.style.boxShadow = 'var(--shadow-sm)';
            }
        });
    }
    
    // Auto-generate table of contents for long content
    function generateTOC() {
        const content = document.querySelector('.content');
        const tocContainer = document.querySelector('.auto-toc');
        
        if (!content || !tocContainer) return;
        
        const headings = content.querySelectorAll('h2, h3, h4');
        if (headings.length === 0) return;
        
        const tocList = document.createElement('ul');
        tocList.className = 'toc-list';
        
        headings.forEach((heading, index) => {
            // Add ID to heading if it doesn't have one
            if (!heading.id) {
                heading.id = `heading-${index}`;
            }
            
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = `#${heading.id}`;
            link.textContent = heading.textContent;
            link.className = 'toc-link';
            
            // Add indentation based on heading level
            if (heading.tagName === 'H3') {
                link.style.paddingLeft = '1.5rem';
            } else if (heading.tagName === 'H4') {
                link.style.paddingLeft = '2rem';
            }
            
            listItem.appendChild(link);
            tocList.appendChild(listItem);
        });
        
        tocContainer.appendChild(tocList);
    }
    
    // Generate TOC if container exists
    generateTOC();
    
    // Highlight active TOC item based on scroll position
    function highlightActiveTOCItem() {
        const tocLinks = document.querySelectorAll('.toc-link');
        const headings = document.querySelectorAll('.content h2, .content h3, .content h4');
        
        if (tocLinks.length === 0 || headings.length === 0) return;
        
        let currentActive = null;
        
        headings.forEach((heading, index) => {
            const rect = heading.getBoundingClientRect();
            if (rect.top <= 100) {
                currentActive = index;
            }
        });
        
        tocLinks.forEach((link, index) => {
            if (index === currentActive) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
