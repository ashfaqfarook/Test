// Modern Portfolio JavaScript with Enhanced Features
document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme
    initializeTheme();
    
    // Mobile menu functionality
    initializeMobileMenu();
    
    // Enhanced scroll effects
    initializeScrollEffects();
    
    // Copy code functionality
    initializeCopyCode();
    
    // Smooth scrolling for anchor links
    initializeSmoothScrolling();
    
    // Search functionality (if implemented)
    initializeSearch();
    
    // Auto-generate table of contents
    generateTableOfContents();
    
    // Initialize animations
    initializeAnimations();
});

// Theme Management
function initializeTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Set initial theme
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
            
            // Add a smooth transition effect
            document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
            setTimeout(() => {
                document.body.style.transition = '';
            }, 300);
        });
    }
}

function updateThemeIcon(theme) {
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        const icon = themeToggle.querySelector('i');
        if (theme === 'dark') {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }
    }
}

// Mobile Menu Management
function initializeMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    const mobileMenuClose = document.getElementById('mobileMenuClose');
    
    if (mobileMenuToggle && mobileMenuOverlay) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        // Close menu when clicking overlay
        mobileMenuOverlay.addEventListener('click', (e) => {
            if (e.target === mobileMenuOverlay) {
                closeMobileMenu();
            }
        });
        
        // Close button
        if (mobileMenuClose) {
            mobileMenuClose.addEventListener('click', () => {
                closeMobileMenu();
            });
        }
        
        // Close menu when clicking on a link
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                closeMobileMenu();
            });
        });
        
        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileMenuOverlay.classList.contains('active')) {
                closeMobileMenu();
            }
        });
    }
}

function closeMobileMenu() {
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    if (mobileMenuOverlay) {
        mobileMenuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Enhanced Scroll Effects
function initializeScrollEffects() {
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    
    if (header) {
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            // Header shadow based on scroll
            if (currentScrollY > 10) {
                header.style.boxShadow = 'var(--shadow-lg)';
                header.style.backdropFilter = 'blur(10px)';
            } else {
                header.style.boxShadow = 'var(--shadow-sm)';
                header.style.backdropFilter = 'blur(5px)';
            }
            
            // Hide/show header on scroll direction (optional)
            if (currentScrollY > 100) {
                if (currentScrollY > lastScrollY) {
                    header.style.transform = 'translateY(-100%)';
                } else {
                    header.style.transform = 'translateY(0)';
                }
            }
            
            lastScrollY = currentScrollY;
        });
    }
    
    // Highlight active navigation based on scroll position
    highlightActiveNavigation();
}

function highlightActiveNavigation() {
    const sections = document.querySelectorAll('section[id], .content h2[id], .content h3[id]');
    const navLinks = document.querySelectorAll('.nav-link, .toc-link');
    
    if (sections.length === 0 || navLinks.length === 0) return;
    
    window.addEventListener('scroll', () => {
        let currentActiveId = '';
        
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
                currentActiveId = section.id;
            }
        });
        
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href && href.includes('#' + currentActiveId)) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    });
}

// Copy Code Functionality
function initializeCopyCode() {
    const codeBlocks = document.querySelectorAll('pre code');
    
    codeBlocks.forEach(codeBlock => {
        const pre = codeBlock.parentElement;
        const button = document.createElement('button');
        button.className = 'copy-code-btn';
        button.innerHTML = '<i class="fas fa-copy"></i> Copy';
        button.title = 'Copy code to clipboard';
        
        button.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(codeBlock.textContent);
                
                // Visual feedback
                button.innerHTML = '<i class="fas fa-check"></i> Copied!';
                button.style.background = 'var(--success-color)';
                button.style.color = 'white';
                button.style.borderColor = 'var(--success-color)';
                
                setTimeout(() => {
                    button.innerHTML = '<i class="fas fa-copy"></i> Copy';
                    button.style.background = '';
                    button.style.color = '';
                    button.style.borderColor = '';
                }, 2000);
            } catch (err) {
                console.error('Failed to copy code:', err);
                
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = codeBlock.textContent;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                
                button.innerHTML = '<i class="fas fa-check"></i> Copied!';
                setTimeout(() => {
                    button.innerHTML = '<i class="fas fa-copy"></i> Copy';
                }, 2000);
            }
        });
        
        pre.style.position = 'relative';
        pre.appendChild(button);
    });
}

// Smooth Scrolling
function initializeSmoothScrolling() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Search Functionality
function initializeSearch() {
    const searchInput = document.querySelector('.search-input');
    
    if (searchInput) {
        let searchTimeout;
        
        searchInput.addEventListener('input', function(e) {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                performSearch(e.target.value);
            }, 300);
        });
    }
}

function performSearch(searchTerm) {
    const searchableItems = document.querySelectorAll('.portfolio-item, .nav-card, .skill-tag');
    const term = searchTerm.toLowerCase();
    
    searchableItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        const parent = item.closest('.portfolio-item, .nav-card');
        
        if (text.includes(term) || term === '') {
            if (parent) parent.style.display = '';
            item.style.display = '';
        } else {
            if (parent) parent.style.display = 'none';
        }
    });
}

// Table of Contents Generation
function generateTableOfContents() {
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
        const level = parseInt(heading.tagName.substring(1));
        link.style.paddingLeft = `${(level - 2) * 1}rem`;
        
        listItem.appendChild(link);
        tocList.appendChild(listItem);
    });
    
    tocContainer.appendChild(tocList);
}

// Animation Initialization
function initializeAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.portfolio-item, .nav-card, .skill-category, .contact-cta');
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        .portfolio-item,
        .nav-card,
        .skill-category,
        .contact-cta {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        @media (prefers-reduced-motion: reduce) {
            .portfolio-item,
            .nav-card,
            .skill-category,
            .contact-cta {
                opacity: 1;
                transform: none;
                transition: none;
            }
        }
    `;
    document.head.appendChild(style);
}

// Lazy Loading for Images
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for browsers without IntersectionObserver
        images.forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    }
}

// Enhanced Portfolio Interactions
function initializePortfolioInteractions() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
        // Add hover sound effect (optional)
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-8px) scale(1.02)';
            item.style.boxShadow = 'var(--shadow-xl)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = '';
            item.style.boxShadow = '';
        });
        
        // Add click analytics (optional)
        item.addEventListener('click', (e) => {
            const link = item.querySelector('a');
            if (link) {
                // Track click event
                console.log('Portfolio item clicked:', link.textContent);
            }
        });
    });
}

// Skill Tag Interactions
function initializeSkillTagInteractions() {
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach(tag => {
        tag.addEventListener('click', () => {
            // Toggle active state
            tag.classList.toggle('active');
            
            // Optional: Filter content based on selected skills
            const activeSkills = Array.from(document.querySelectorAll('.skill-tag.active'))
                .map(tag => tag.textContent.toLowerCase());
            
            if (activeSkills.length > 0) {
                filterContentBySkills(activeSkills);
            } else {
                showAllContent();
            }
        });
    });
}

function filterContentBySkills(skills) {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
        const itemText = item.textContent.toLowerCase();
        const hasMatchingSkill = skills.some(skill => itemText.includes(skill));
        
        if (hasMatchingSkill) {
            item.style.display = '';
            item.style.opacity = '1';
        } else {
            item.style.opacity = '0.3';
        }
    });
}

function showAllContent() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        item.style.display = '';
        item.style.opacity = '1';
    });
}

// Keyboard Navigation
function initializeKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // Toggle theme with Ctrl/Cmd + Shift + T
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'T') {
            e.preventDefault();
            const themeToggle = document.getElementById('themeToggle');
            if (themeToggle) {
                themeToggle.click();
            }
        }
        
        // Open mobile menu with Alt + M
        if (e.altKey && e.key === 'm') {
            e.preventDefault();
            const mobileMenuToggle = document.getElementById('mobileMenuToggle');
            if (mobileMenuToggle && window.innerWidth <= 768) {
                mobileMenuToggle.click();
            }
        }
        
        // Navigate sections with arrow keys (when focus is on main content)
        if (document.activeElement === document.querySelector('.main-content')) {
            const sections = document.querySelectorAll('.portfolio-item, .nav-card');
            const currentIndex = Array.from(sections).findIndex(section => 
                section.classList.contains('keyboard-focus')
            );
            
            let newIndex = currentIndex;
            
            if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
                e.preventDefault();
                newIndex = Math.min(currentIndex + 1, sections.length - 1);
            } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
                e.preventDefault();
                newIndex = Math.max(currentIndex - 1, 0);
            } else if (e.key === 'Enter' && currentIndex >= 0) {
                e.preventDefault();
                const link = sections[currentIndex].querySelector('a');
                if (link) link.click();
            }
            
            if (newIndex !== currentIndex && newIndex >= 0) {
                sections.forEach(section => section.classList.remove('keyboard-focus'));
                sections[newIndex].classList.add('keyboard-focus');
                sections[newIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    });
}

// Performance Monitoring
function initializePerformanceMonitoring() {
    // Monitor page load performance
    window.addEventListener('load', () => {
        const perfData = performance.getEntriesByType('navigation')[0];
        const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
        
        console.log(`Page loaded in ${loadTime}ms`);
        
        // Optional: Send performance data to analytics
        if (loadTime > 3000) {
            console.warn('Page load time is high, consider optimization');
        }
    });
    
    // Monitor long tasks
    if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
                if (entry.duration > 50) {
                    console.warn('Long task detected:', entry);
                }
            }
        });
        
        observer.observe({ entryTypes: ['longtask'] });
    }
}

// Error Handling
function initializeErrorHandling() {
    window.addEventListener('error', (e) => {
        console.error('JavaScript error:', e.error);
        // Optional: Send error to logging service
    });
    
    window.addEventListener('unhandledrejection', (e) => {
        console.error('Unhandled promise rejection:', e.reason);
        // Optional: Send error to logging service
    });
}

// Accessibility Enhancements
function initializeAccessibility() {
    // Add skip link functionality
    const skipLink = document.querySelector('.skip-link');
    if (skipLink) {
        skipLink.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(skipLink.getAttribute('href'));
            if (target) {
                target.focus();
                target.scrollIntoView();
            }
        });
    }
    
    // Improve focus management
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
    });
    
    // Add focus indicators for keyboard navigation
    const style = document.createElement('style');
    style.textContent = `
        .keyboard-navigation *:focus {
            outline: 2px solid var(--primary-color) !important;
            outline-offset: 2px !important;
        }
        
        .keyboard-focus {
            outline: 2px solid var(--primary-color);
            outline-offset: 2px;
        }
    `;
    document.head.appendChild(style);
}

// Initialize all features when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initializeLazyLoading();
    initializePortfolioInteractions();
    initializeSkillTagInteractions();
    initializeKeyboardNavigation();
    initializePerformanceMonitoring();
    initializeErrorHandling();
    initializeAccessibility();
});

// Service Worker Registration (for PWA functionality)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/Portfolio/sw.js')
            .then((registration) => {
                console.log('SW registered: ', registration);
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}// Mobile menu functionality
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
