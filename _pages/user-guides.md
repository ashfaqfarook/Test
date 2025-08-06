---
layout: page
title: "User Guides"
permalink: /user-guides/
---

<div style="text-align: center; margin-bottom: 3rem;">
    <h1 style="font-size: 2.5rem; color: #2c3e50; margin-bottom: 1rem;">
        <i class="fas fa-users" style="color: #3498db; margin-right: 0.5rem;"></i>
        User Guides
    </h1>
    <p style="font-size: 1.2rem; color: #666; max-width: 800px; margin: 0 auto;">
        Step-by-step guides and tutorials designed to help end-users navigate software features, 
        configure systems, and accomplish their goals with confidence and ease.
    </p>
</div>

<div class="portfolio-grid">
    {% for guide in site.user_guides %}
        <div class="portfolio-card">
            <div class="card-icon">
                <i class="fas fa-users"></i>
            </div>
            <h3 class="card-title">{{ guide.title }}</h3>
            <p class="card-description">
                {{ guide.description | default: "User guide and step-by-step documentation." }}
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

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 3rem 2rem; border-radius: 12px; margin-top: 3rem; text-align: center;">
    <h3 style="margin-bottom: 1rem; font-size: 1.8rem;">
        <i class="fas fa-star" style="color: #f1c40f; margin-right: 0.5rem;"></i>
        User-Centered Documentation
    </h3>
    <p style="margin-bottom: 2rem; opacity: 0.9; max-width: 600px; margin-left: auto; margin-right: auto;">
        My user guides are designed with real users in mind. I focus on clear instructions, practical examples, 
        and anticipated user questions to create documentation that actually helps people succeed.
    </p>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem; margin-top: 2rem;">
        <div style="text-align: center;">
            <div style="font-size: 2rem; margin-bottom: 0.5rem;">📝</div>
            <h4 style="margin-bottom: 0.5rem;">Clear Instructions</h4>
            <p style="opacity: 0.8; font-size: 0.9rem;">Step-by-step guidance that's easy to follow</p>
        </div>
        <div style="text-align: center;">
            <div style="font-size: 2rem; margin-bottom: 0.5rem;">🎯</div>
            <h4 style="margin-bottom: 0.5rem;">Goal-Oriented</h4>
            <p style="opacity: 0.8; font-size: 0.9rem;">Focused on helping users achieve their objectives</p>
        </div>
        <div style="text-align: center;">
            <div style="font-size: 2rem; margin-bottom: 0.5rem;">🔍</div>
            <h4 style="margin-bottom: 0.5rem;">Thoroughly Tested</h4>
            <p style="opacity: 0.8; font-size: 0.9rem;">Validated through real user scenarios</p>
        </div>
    </div>
</div>

<div style="background: #f8f9fa; padding: 2rem; border-radius: 8px; margin-top: 3rem; text-align: center;">
    <h3 style="color: #2c3e50; margin-bottom: 1rem;">
        <i class="fas fa-question-circle" style="color: #3498db; margin-right: 0.5rem;"></i>
        Need Help with Your User Documentation?
    </h3>
    <p style="color: #666; margin-bottom: 1.5rem;">
        Whether you need user guides, tutorials, or help documentation, I can help you create resources 
        that truly serve your users' needs and improve their experience with your product.
    </p>
    <a href="{{ '/contact/' | relative_url }}" class="btn btn-primary">
        <i class="fas fa-envelope"></i> Let's Discuss Your Project
    </a>
</div>
