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
    {% assign developer_guides = site.pages | where_exp: "page", "page.path contains 'developer_guides'" %}
    {% if developer_guides.size == 0 %}
        {% comment %} If no collection items, create manual cards {% endcomment %}
        <div class="portfolio-card">
            <div class="card-icon" style="color: #e74c3c;">
                <i class="fas fa-store"></i>
            </div>
            <h3 class="card-title">Pet Store API</h3>
            <p class="card-description">
                Complete guide for working with the Pet Store API, including endpoint documentation, 
                authentication, and practical examples for creating and managing pet purchase orders.
            </p>
            <div style="margin: 1rem 0;">
                <span style="background: #e8f4fd; color: #2980b9; padding: 0.3rem 0.8rem; border-radius: 20px; font-size: 0.8rem; margin-right: 0.5rem;">REST API</span>
                <span style="background: #e8f6f3; color: #27ae60; padding: 0.3rem 0.8rem; border-radius: 20px; font-size: 0.8rem; margin-right: 0.5rem;">Swagger</span>
                <span style="background: #fef9e7; color: #f39c12; padding: 0.3rem 0.8rem; border-radius: 20px; font-size: 0.8rem;">Endpoints</span>
            </div>
            <a href="{{ '/developer_guides/rest_api_pet_store/' | relative_url }}" class="btn btn-primary">
                <i class="fas fa-eye"></i> View Guide
            </a>
        </div>
        
        <div class="portfolio-card">
            <div class="card-icon" style="color: #9b59b6;">
                <i class="fas fa-credit-card"></i>
            </div>
            <h3 class="card-title">Zeta Card Ordering API</h3>
            <p class="card-description">
                Detailed documentation for the Zeta platform's card ordering system, including API endpoints 
                for creating new cards for account holders with step-by-step integration examples.
            </p>
            <div style="margin: 1rem 0;">
                <span style="background: #e8f4fd; color: #2980b9; padding: 0.3rem 0.8rem; border-radius: 20px; font-size: 0.8rem; margin-right: 0.5rem;">REST API</span>
                <span style="background: #f4e8fd; color: #8e44ad; padding: 0.3rem 0.8rem; border-radius: 20px; font-size: 0.8rem; margin-right: 0.5rem;">Zeta Platform</span>
                <span style="background: #e8f6f3; color: #27ae60; padding: 0.3rem 0.8rem; border-radius: 20px; font-size: 0.8rem;">Financial Services</span>
            </div>
            <a href="{{ '/developer_guides/rest_api_ordering_a_new_card_zeta/' | relative_url }}" class="btn btn-primary">
                <i class="fas fa-eye"></i> View Guide
            </a>
        </div>
        
        <div class="portfolio-card">
            <div class="card-icon" style="color: #e67e22;">
                <i class="fas fa-filter"></i>
            </div>
            <h3 class="card-title">GraphQL Content Filter</h3>
            <p class="card-description">
                Implementation guide for GraphQL-based content filtering systems, including query examples, 
                schema definitions, and best practices for content moderation APIs.
            </p>
            <div style="margin: 1rem 0;">
                <span style="background: #fef2e8; color: #e67e22; padding: 0.3rem 0.8rem; border-radius: 20px; font-size: 0.8rem; margin-right: 0.5rem;">GraphQL</span>
                <span style="background: #e8f4fd; color: #2980b9; padding: 0.3rem 0.8rem; border-radius: 20px; font-size: 0.8rem; margin-right: 0.5rem;">Content Filter</span>
                <span style="background: #fadbd8; color: #c0392b; padding: 0.3rem 0.8rem; border-radius: 20px; font-size: 0.8rem;">Moderation</span>
            </div>
            <a href="{{ '/developer_guides/graphql_api_content_filter/' | relative_url }}" class="btn btn-primary">
                <i class="fas fa-eye"></i> View Guide
            </a>
        </div>
        
        <div class="portfolio-card">
            <div class="card-icon" style="color: #34495e;">
                <i class="fas fa-archive"></i>
            </div>
            <h3 class="card-title">GraphQL Content Archive</h3>
            <p class="card-description">
                Comprehensive guide for implementing content archival systems using GraphQL, including 
                data retention policies, archive queries, and content lifecycle management.
            </p>
            <div style="margin: 1rem 0;">
                <span style="background: #fef2e8; color: #e67e22; padding: 0.3rem 0.8rem; border-radius: 20px; font-size: 0.8rem; margin-right: 0.5rem;">GraphQL</span>
                <span style="background: #eaecee; color: #34495e; padding: 0.3rem 0.8rem; border-radius: 20px; font-size: 0.8rem; margin-right: 0.5rem;">Archive</span>
                <span style="background: #e8f6f3; color: #27ae60; padding: 0.3rem 0.8rem; border-radius: 20px; font-size: 0.8rem;">Data Management</span>
            </div>
            <a href="{{ '/developer_guides/graphql_api_content_archive/' | relative_url }}" class="btn btn-primary">
                <i class="fas fa-eye"></i> View Guide
            </a>
        </div>
        
        <div class="portfolio-card">
            <div class="card-icon" style="color: #16a085;">
                <i class="fas fa-shield-alt"></i>
            </div>
            <h3 class="card-title">GraphQL Media Moderation Bypass</h3>
            <p class="card-description">
                Technical documentation for implementing bypass mechanisms in GraphQL-based media moderation 
                systems, including security considerations and implementation patterns.
            </p>
            <div style="margin: 1rem 0;">
                <span style="background: #fef2e8; color: #e67e22; padding: 0.3rem 0.8rem; border-radius: 20px; font-size: 0.8rem; margin-right: 0.5rem;">GraphQL</span>
                <span style="background: #e8f8f5; color: #16a085; padding: 0.3rem 0.8rem; border-radius: 20px; font-size: 0.8rem; margin-right: 0.5rem;">Media</span>
                <span style="background: #fadbd8; color: #c0392b; padding: 0.3rem 0.8rem; border-radius: 20px; font-size: 0.8rem;">Security</span>
            </div>
            <a href="{{ '/developer_guides/graphql_api_bypass_media_moderation/' | relative_url }}" class="btn btn-primary">
                <i class="fas fa-eye"></i> View Guide
            </a>
        </div>
    {% else %}
        {% for guide in developer_guides %}
            <div class="portfolio-card">
                <div class="card-icon">
                    <i class="fas fa-code"></i>
                </div>
                <h3 class="card-title">{{ guide.title }}</h3>
                <p class="card-description">
                    {{ guide.description | default: "Developer guide and technical documentation." }}
                </p>
                <a href="{{ guide.url | relative_url }}" class="btn btn-primary">
                    <i class="fas fa-eye"></i> View Guide
                </a>
            </div>
        {% endfor %}
    {% endif %}
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
