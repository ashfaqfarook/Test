---
layout: page
title: "Developer Guides"
permalink: /developer-guides/
---

<div style="text-align: center; margin-bottom: 3rem;">
    <h1 style="font-size: 2.5rem; color: #2c3e50; margin-bottom: 1rem;">
        <i class="fas fa-code" style="color: #3498db; margin-right: 0.5rem;"></i>
        Developer Guides
    </h1>
    <p style="font-size: 1.2rem; color: #666; max-width: 800px; margin: 0 auto;">
        Comprehensive API documentation, technical references, and integration guides designed to help developers 
        implement and work with various platforms and services effectively.
    </p>
</div>

<div class="portfolio-grid">
    {% for guide in site.developer_guides %}
        <div class="portfolio-card">
            <div class="card-icon">
                <i class="fas fa-code"></i>
            </div>
            <h3 class="card-title">{{ guide.title }}</h3>
            <p class="card-description">
                {{ guide.description | default: "Developer guide and technical documentation." }}
            </p>
            {% if guide.tags %}
                <div style="margin: 1rem 0;">
                    {% for tag in guide.tags %}
                        <span style="background: #e8f4fd; color: #2980b9; padding: 0.3rem 0.8rem; border-radius: 20px; font-size: 0.8rem; margin-right: 0.5rem;">{{ tag }}</span>
                    {% endfor %}
                </div>
            {% endif %}
            <a href="{{ guide.url | relative_url }}" class="btn btn-primary">
                <i class="fas fa-eye"></i> View Guide
            </a>
        </div>
    {% endfor %}
</div>

<div style="background: #f8f9fa; padding: 2rem; border-radius: 8px; margin-top: 3rem; text-align: center;">
    <h3 style="color: #2c3e50; margin-bottom: 1rem;">
        <i class="fas fa-lightbulb" style="color: #f39c12; margin-right: 0.5rem;"></i>
        Need Custom Documentation?
    </h3>
    <p style="color: #666; margin-bottom: 1.5rem;">
        Looking for API documentation, technical guides, or developer resources tailored to your specific needs? 
        I specialize in creating clear, comprehensive documentation that helps developers succeed.
    </p>
    <a href="{{ '/contact/' | relative_url }}" class="btn btn-primary">
        <i class="fas fa-envelope"></i> Get in Touch
    </a>
</div>
