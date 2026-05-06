---
layout: default
title: research
permalink: /research/
---

# Research

These are evolving notes around my research agenda.

{% assign notes = site.notes | sort: "title" %}
<div class="entry-list">
{% for note in notes %}
  <div class="list-entry">
    <span class="faded">note</span>
    <a href="{{ note.url | relative_url }}">{{ note.title }}</a>
    {% if note.summary %}
      <p>{{ note.summary }}</p>
    {% endif %}
  </div>
{% endfor %}
</div>
