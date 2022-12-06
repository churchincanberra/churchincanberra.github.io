---
title: Church Calendar
layout: calendar
description: Upcoming events

calendar_timezone_offset: +1000   # required
calendar_csv: assets/events.csv  # required. Path to CSV file from base url
event_date_format: YYYY-MM-DD H:mm A Z
# E.g. Events CSV format
# Title,Start,End,Mark,URL
# Lord's Table Meeting,2022-12-10 10:00 AM,2022-12-10 11:00 AM,Info,http://example.com
#
# The options for different Mark styles are: info, warning, important, success, special, and blank.

calendar_focus_date:      # optional. YYYY-MM-DD. Without it, the default is today
calendar_caption:    # optional
calendar_view: month     # required. Options: year, month, week, day

calendar_css: <link rel="stylesheet" href="!PATH_TO_COMPONENTS!/bootstrap-calendar/css/calendar.css">
calendar_bootstrap_css: <link rel="stylesheet" href="!PATH_TO_COMPONENTS!/bootstrap/css/bootstrap.css">

---

 