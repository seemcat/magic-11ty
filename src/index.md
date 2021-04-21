---
title: "My Cool Blog"
layout: "base.njk"
templateEngineOverride: njk,md
---

<!-- 0. HTML -->

## Articles

<div id="content">
</div>

<!-- 1. Only share articles with logged in users -->
<script>
// Assumes user is already logged in
  let contentElement = document.getElementById('content');
  const articles = `<ul>
  {% for article in collections.articles %}
  <li><a href="{{ article.url }}">{{ article.data.title }}</li>
  {% endfor %}
  </ul>`;
  const loginMessage = `Please log in to see my blog!`;

  try {
    magic.user.getMetadata();
    contentElement.innerHTML = articles;
    } catch {
      // Handle errors if required!
      contentElement.innerHTML = loginMessage;
      }
</script>
