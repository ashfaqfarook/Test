---
layout: default
title: "Knowledge Base"
---

# Knowledge Base

Browse all knowledge base articles below:

<ul>
  {% assign current_dir = 'knowledge_base' %}
  {% for file in site.static_files %}
    {% if file.path contains current_dir and file.extname == '.md' and file.name != 'index.md' %}
      <li>
        <a href="{{ file.path | relative_url }}">{{ file.name | replace: '.md', '' | replace: '_', ' ' | capitalize }}</a>
      </li>
    {% endif %}
  {% endfor %}
</ul>
