---
title: Church Calendar
layout: page-full
description: Upcoming events

# <a href="webcal:{{ site.url | replace: 'http:', '' | replace: 'https:', '' }}{{site.baseurl}}/calendar.ics">Calendar file</a>

---

{% include calendar_categories.html %}

{% include calendar.html %}

<script src="{{ '/assets/js/calendar/calendarbase.esm.js' | relative_url }}"></script>
<script src="{{ '/assets/js/calendar/calendar-entries.js' | relative_url }}"></script>
<script defer src="{{ '/assets/js/calendar/calendar-shell.js' | relative_url }}"></script>
<script defer src="{{ '/assets/js/calendar/calendar-init.js' | relative_url }}"></script>
