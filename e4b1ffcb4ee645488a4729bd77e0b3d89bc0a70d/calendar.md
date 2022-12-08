---
title: Church Calendar
layout: page-full
description: Upcoming events

---

<a href="webcal:{{ '/e4b1ffcb4ee645488a4729bd77e0b3d89bc0a70d/calendar.ics' | absolute_url | replace: 'http:', '' | replace: 'https:', '' }}">Subscribe to ICS</a>

{% include calendar_categories.html %}

{% include calendar.html %}

<script src="{{ '/assets/js/calendar/calendarbase.esm.js' | relative_url }}"></script>
<script src="{{ '/assets/js/calendar/calendar-entries.js' | relative_url }}"></script>
<script defer src="{{ '/assets/js/calendar/calendar-shell.js' | relative_url }}"></script>
<script defer src="{{ '/assets/js/calendar/calendar-init.js' | relative_url }}"></script>
