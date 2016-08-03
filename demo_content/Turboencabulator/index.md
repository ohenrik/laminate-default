{% extends 'index.html' %}
{% block content %}
    {% include 'cover.md' %}
    
    {% include 'toc.html' %}

    {% include 'history.md' %}
    {% include 'typical_technical_descriptions.md' %}
{% endblock %}
