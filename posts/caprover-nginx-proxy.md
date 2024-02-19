---
title: Proxying Plausible through Nginx on CapRover
date: 2022-05-09
---

Let’s assume you have deployed a static website via CapRover, and the website is using plausible to collect traffic insights. You used a captain-definiton.json to tell CapRover how to deploy your website. It may look like this:

<iframe
  src="https://gist.github.com/waaeel/9f19b4891b2a1c179abfe0dbf80099f4.pibb"
  style="width: 100%; height: 300px; border: 0;"
>
</iframe>

What you most likely, do not have, is the nginx.conf in line 5.

Create your custom nginx.conf and put it in the same directory as your captain-definiton.json. Look into to the [plausible-documentation](https://plausible.io/docs/proxy/guides/nginx) for details about the content of your configuration file. Here is an example of how it could look like:

<iframe
  src="https://gist.github.com/waaeel/575d848e6d73cbaa9678183d5c745eed.pibb"
  style="width: 100%; height: 1000px; border: 0;"
>
</iframe>

That’s it.

Don’t forget to adjust the deployed script in your frontend code.

![](https://cdn-images-1.medium.com/max/9200/1*_OgPW3XkhfApjdKvA_Vcrw.png)
