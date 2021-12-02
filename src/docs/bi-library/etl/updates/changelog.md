---
title: Atlas BI Library Docs » ETL » Changelog
tags: BI Library
description: Atlas Docs
layout: docs_library.njk
eleventyNavigation:
  key: BIL Changelog
  title: Changelog
  parent: BIL ETL Setup
  order: 4
---

# Changelog

## Version 2021.11.1

::: content
- Added SSAS cubes, measures, and dimensions
- Added hierarchy for workbench reports
- Updated creation scripts
- Added certification tag table
- Added EpicID to users
- Modified UserGroup Memberships
- Added column to ReportObjectType table (must be a Y to be searchable)
:::

## Version 2021.07.1

::: content
- Added SlicerDicer session info to ETL
- Updated certification tags to include self-service
- Fixed Tableau rundata
- Updated hierarchies for sessions
- Added Clarity tags and tag memberships
:::

## Version 2021.06.1

::: content
- Modularized ETL
- Fixed a bug in the run data for SlicerDicer
- Updated SlicerDicer column mapping to Clarity-ETL
- Added in run time for SlicerDicer run data
- Added LPP and PAF to Clarity
- Added HGR to HRX relationships
- Removed personal dashboards (IDN)
- Added private report column
:::

## Version 2021.05.1

::: content
- Added step to import repository information
- Updated run data ETL connections
- Fixed a bug in ReportObjectQuery where queries were not being removed
:::

## Version 2021.03.1

::: content
- Updated database names
- Fixed a bug in ReportObject merge where nulls were not being updated
- Removed custom tables
- Removed dev connection from ETL
- Added Tableau and SlicerDicer
:::