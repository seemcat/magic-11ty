---
title: "My Cool Blog"
layout: "base.njk"
templateEngineOverride: njk,md
---

<!-- 0. HTML -->

## Articles

<div id="content">
</div>

<!-- 3. Only share articles with logged in users -->
<script>
// Assumes a user is already logged in
  let contentToDisplay = document.getElementById('content');
  const articles = `<ul>
{% for article in collections.articles %}
<li><a href="{{ article.url }}">{{ article.data.title }}</li>
{% endfor %}
</ul>`;
  const loginMessage = `Please log in to see my blog!`;

  try {
    magic.user.getMetadata();
    contentToDisplay.innerHTML = articles;
    } catch {
      // Handle errors if required!
      contentToDisplay.innerHTML = loginMessage;
      }
</script>
