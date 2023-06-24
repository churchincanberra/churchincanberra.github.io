---
title: Church Announcements
layout: default
description: Recent announcements and updates

---

<div class="container">
  <iframe id="last-post" src="" seamless="seamless" allowtransparency="true"></iframe>
</div>

<script language="javascript"
  src="//outlook.us10.list-manage.com/generate-js/?u=12a6ecea8fbc1ad37a233cac1&fid=17501&show=1"
  type="text/javascript"></script>

<script>
  let placeholder = document.getElementById("last-post");
  var last_url = document.links[document.links.length - 1].href;
  last_url = last_url.replace("http", "https").replace("httpss", "https")
  placeholder.src = last_url;

  var content_height = window.innerHeight;
  var weight = .80;
  placeholder.height = content_height * weight;

</script>

<div class="container pt-6 pb-6 pb-md-10">
    <div class="row justify-content-center">
        <a href="{{ '/subscribe/' | absolute_url | replace: 'http:', '' | replace: 'https:', '' }}">Subscribe to this announcements</a>
    </div>
</div>
