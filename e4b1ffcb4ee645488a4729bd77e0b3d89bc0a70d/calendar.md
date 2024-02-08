---
title: Church Calendar
layout: page-full
description: Upcoming events
---

{% include calendar_categories.html %}

{% include calendar.html %}

<div class="container pt-6 pb-6 pb-md-10">
  <div class="row justify-content-center">
    <div class="subscribe">
      <a href="webcal:{{ '/e4b1ffcb4ee645488a4729bd77e0b3d89bc0a70d/calendar.ics' | absolute_url | replace: 'http:', '' | replace: 'https:', '' }}">Subscribe to this calendar</a>
    </div>
  </div>
</div>

<script src="{{ '/assets/js/calendar/calendarbase.esm.js' | relative_url }}"></script>
<script src="{{ '/assets/js/calendar/calendar-entries.js' | relative_url }}"></script>
<script defer src="{{ '/assets/js/calendar/calendar-shell.js' | relative_url }}"></script>
<script defer src="{{ '/assets/js/calendar/calendar-init.js' | relative_url }}"></script>
