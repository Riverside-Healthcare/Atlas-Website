---
title: Dashboard
tags: Automation Hub
description: Automation Hub Dashboard
layout: docs_hub.njk
eleventyNavigation:
  key: AH Dashboard
  title: Dashboard
  parent: Automation Hub
  order: 3
---

# Dashboard

The dashboard is designed to give an admin a quick overview of the upcoming run schedule, show any failed jobs, and give a listing of what runs are coming up.

The run plan shows the upcoming schedule for the next 24 hours.

## Errored Tasks

Any tasks currently in an "errored" state will be listed in this table. It is possible to run all errored tasks at the same time, or run them individually

## Running Tasks

Any task currently in a "running" state will be listed in this table.

## Scheduled Tasks

Any enabled task will be listed in this table.

## Orphaned Job

Any job that is left behind in the scheduler after a task is disabled will show in this table. They should be removed by clicking ``Delete All``.