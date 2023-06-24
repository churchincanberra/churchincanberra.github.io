---
title: Subscribe
layout: default
description: Subscribe to Church Newsletter

---

<div class="container">
  <iframe id="last-post" src="https://churchincanberra.us10.list-manage.com/subscribe?u=12a6ecea8fbc1ad37a233cac1&id=d479a108b4" seamless="seamless" allowtransparency="true"></iframe>
</div>

<script>
  let placeholder = document.getElementById("last-post");
  var last_url = document.links[document.links.length - 1].href;
  last_url = last_url.replace("http", "https").replace("httpss", "https")
  placeholder.src = last_url;

  var content_height = window.innerHeight;
  var weight = .80;
  placeholder.height = content_height * weight;

</script>
