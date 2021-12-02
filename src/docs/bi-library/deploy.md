---
title: Atlas BI Library Docs » Deploy
tags: BI Library
description: Atlas Docs
layout: docs_library.njk
eleventyNavigation:
  key: BIL Deploy
  title: Deploy
  parent: BI Library
  order: 6
---

# Deploy

{% admonition 
   "alert",
   "Attention",
   "Ensure that the destination server has the same .NET *version* `Hosting Bundle`."
%}

{% admonition 
   "note",
   "Note",
   "This guide assumes you have already created the Atlas Databases, run the ETL to populate the database, and added your database connection as specified in the [`development guide`](/docs/bi-library/development/)"
%}

## Setup IIS

Open the **Internet Information Services (IIS) Manager** on your Windows Server.

First, create a new site by right clicking on **Site** then **Create New Site**.

{% image "./src/static/img/bi-library/deploy/add_website.png", "Add website", "(min-width:800px) 50vw, 100vw", "boxed" %}

Next, fill out the require parameters. If you have setup a DNS you can enter it in the **Host name** box.

{% image "./src/static/img/bi-library/deploy/website_config.png", "Add website configuration", "(min-width:800px) 50vw, 100vw", "boxed" %}

{% admonition 
   "alert",
   "Attention",
   "Ideally you will add another binding for https. There are [many tutorials](https://techexpert.tips/iis/enable-https-iis/) showing how to enable HTTPS."
%}

Finally, verify that **windows** authentication is enabled and **all** other methods are disabled.

{% image "./src/static/img/bi-library/deploy/open_auth.png", "Open authentication settings", "(min-width:800px) 50vw, 100vw", "boxed" %}
{% image "./src/static/img/bi-library/deploy/windows_auth.png", "Verify windows authentication", "(min-width:800px) 50vw, 100vw", "boxed" %}

## Deploy to IIS

<div class="tabs">
   <ul>
    <li class="is-active"><a tab="vs">Deploy With Visual Studio</a></li>
    <li><a tab="manual">Manual or CI/CD Deploy</a></li>
  </ul>
</div>
<div class="tab-container">
   <div class="tab is-active"id="vs">


Deploying with Visual Studio is the preferred method. After opening the ``web.sln`` file -

::: content
- In Visual Studio's menu, click **Build** then **Publish Web**
- Create a new publish profile.
   - Choose **Web Server (IIS)** as the **Target**
   - Choose **Web Deploy** as the **Specific target**
   - Enter your IIS **Server** name
   - Enter your **Site name**. This must match the site name already created on the web server (``atlas-dev``)
   - Enter the web url in **Destination URL**
   - Optionally enter you credentials for the web server
- After the profile is created click **Edit** to change additional settings.
- Change to the **Settings** tab and change the **Target Runtime** to match the web servers .NET bitness.
  {% image "./src/static/img/bi-library/deploy/vs_profile.png", "Edit publish profile", "(min-width:800px) 50vw, 100vw", "boxed" %}
- In order to successfully publish the connection must be validated to allow self-signed certificates.
  {% image "./src/static/img/bi-library/deploy/vs_connection.png", "Validate connection", "(min-width:800px) 50vw, 100vw", "boxed" %}
  {% image "./src/static/img/bi-library/development/ssl_warning.png", "ssl warning", "(min-width:800px) 50vw, 100vw", "boxed" %}
  {% image "./src/static/img/bi-library/development/ssl_confirm.png", "ssl confirm", "(min-width:800px) 50vw, 100vw", "boxed" %}
:::

{% admonition
  "alert",
  "Attention",
  "The connection must be re-verified every time Visual Studio is restarted."
%}

::: content
- Finally publish Atlas by clicking **Publish** button.
  {% image "./src/static/img/bi-library/deploy/vs_publish.png", "Publish Atlas", "(min-width:800px) 50vw, 100vw", "boxed" %}
:::


If Visual Studio still cannot resolve the certificate issue, you can disable the check in the publish settings XML file.
{% image "./src/static/img/bi-library/deploy/cert_error.png", "disable cert", "(min-width:800px) 50vw, 100vw", "boxed" %}

</div>
   <div class="tab" id="manual">

Atlas is also fairly simple to manually deploy.

{% admonition "alert", "Attention", "Ensure the bitness matches the bitness of the .NET version you've installed on the server!" %}

::: content
- Run dotnet publish from the ``web`` folder to build the Atlas runtime.
  ```bash
  dotnet publish -r win-x86 --self-contained false -c Release -o out
  ```
- Copy the contents of the newly created ``out`` directory into the ``c://inetpub/wwwroot/atlas-dev`` folder.
:::

**Navigate to your binding and Atlas should be available!**
</div>
</div>