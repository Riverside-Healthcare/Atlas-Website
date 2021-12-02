---
title: Atlas BI Library Docs » Webserver Setup
tags: BI Library
description: Atlas Docs
layout: docs_library.njk
eleventyNavigation:
  key: BIL Webserver Setup
  title: Webserver Setup
  parent: BI Library
  order: 3
---

# Webserver Setup

Atlas BI Library is designed to run on **Windows Server 2016 or later**. There are a few installs to get the website running.

::: content
- IIS Webserver with [Microsoft .NET SDK 5 (Hosting Bundle)](https://dotnet.microsoft.com/download/dotnet/5.0)
  {% image "./src/static/img/bi-library/requirements/dotnetversion.png", "Extension", "(min-width:400px) 50vw, 100vw", "boxed" %}
- Ensure IIS has server roles needed for [web deploy and web management service](https://docs.microsoft.com/en-us/aspnet/web-forms/overview/deployment/visual-studio-web-deployment/deploying-to-iis) installed and started. Microsoft has a few [examples](https://docs.microsoft.com/en-us/aspnet/web-forms/overview/deployment/visual-studio-web-deployment/deploying-to-iis). 

  - IIS: ASPNET 4.7
  - IIS: .NET Extensibility 4.5

- By default the Web Deploy seems to not install correctly. `Change` the install in `Control Panel > Programs > Programs and Features` and ensure the package is completely installed.
  {% image "./src/static/img/bi-library/requirements/install_web_deploy.png", "Extension", "(min-width:800px) 50vw, 100vw", "boxed" %}
- Java JRE. You can check your current install by running ``java --version`` in command prompt. Java can be downloaded [here](https://www.oracle.com/java/technologies/downloads/#jdk17-windows).
  
  - Add a system environment variable "JAVA_HOME" that points to the install path of java. Most likely something close to `C:\Program Files\Java\jdk-17.0.1`
:::

After installing the server should be rebooted, or the web services restarted (`Web Deployment Agent Service` and `Web Management Service`).

{% admonition
   "hint",
   "Deploy Atlas",
   "We recommend deploying with Visual Studio. See the [`deploy guide`](/docs/bi-library/deploy/). It is also possible to deploy with a ci/cd pipeline if you prefer."
%}

{% admonition
   "alert",
   ".NET 5",
   "While .NET 5 x86 is specified, it is not required. The only *requirement* is that Atlas is *built* and *run* in the same version and bitness."
%}