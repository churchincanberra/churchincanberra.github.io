---
title: Church Calendar
layout: page-full
description: Upcoming events
nofollow: true
---

{% include calendar_categories.html %}

{% include calendar.html %}

<div class="container pt-6 pb-6 pb-md-10">
  <div class="row justify-content-center">
    <div class="subscribe">
      <a href="webcal:{{ '/e4b1ffcb4ee645488a4729bd77e0b3d89bc0a70d/calendar.ics' | absolute_url | replace: 'http:', '' | replace: 'https:', '' }}" class="w-auto px-1">Subscribe to this calendar</a>&VerticalLine;<a href="https://mcusercontent.com/12a6ecea8fbc1ad37a233cac1/files/69a41739-1456-dcdf-4b30-45870dd9e049/Church_Planner_2025_version_1_4__4146108f_06fb_421f_b5ff_e7065bba4ed1.pdf" target="_blank" class="w-auto px-1">Sydney's 2025 Calendar (PDF)</a>
    </div>
  </div>
</div>

<script src="{{ '/assets/js/calendar/calendarbase.esm.js' | relative_url }}"></script>
<script src="{{ '/assets/js/calendar/calendar-entries.js' | relative_url }}"></script>
<script defer src="{{ '/assets/js/calendar/calendar-shell.js' | relative_url }}"></script>
<script defer src="{{ '/assets/js/calendar/calendar-init.js' | relative_url }}"></script>
