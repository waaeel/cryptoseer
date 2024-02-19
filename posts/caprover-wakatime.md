---
title: How to host your own WakaTime Server with CapRover and Wakapi
date: 2022-05-09
---

Wakapi is a self-hosted WakaTime-compatible backend. It is compatible with all wakatime plugins, and you can also make it sync your data with wakatime and have some redundancy. We will use CapRover to deploy the wakapi docker-image and make it reachable via a custom domain over HTTPS.

First, you will need to set up CapRover on your server. There is enough documentation on that topic all over the internet. After CapRover is running and setup, let’s create a new app.

![Create a new app](https://cdn-images-1.medium.com/max/2000/1*YaBk-gJZzJK7AhMpdL9t7w.png)_Create a new app_

IMPORTANT: Wakapi needs persistent data to store user logins and all your settings.

Now, after we created our application, we need to change some settings.

On the “HTTP Settings” Tab, you just need to set “Container HTTP Port” to 3000, as this the default port for the wakapi server. On the same tab, you can also change the domain or force HTTPS.

![HTTP Settings](https://cdn-images-1.medium.com/max/2024/1*tVT6hulN12N3WHI-li-GbA.png)_HTTP Settings_

Now lets go to “App Configs” and create a persistent directory for the wakapi server

![](https://cdn-images-1.medium.com/max/2028/1*XzkzMzlXrDsLZdeZ1YqkQw.png)

And finally deploy the official wakapi docker image. Go to “Deployment” and the scroll down to “Method 6: Deploy via ImageName”. You can find all versions [here](https://hub.docker.com/r/n1try/wakapi). Lets choose **latest** and start deployment.

![](https://cdn-images-1.medium.com/max/2028/1*23O790lb5PdMkk7Yp5epvg.png)

Now access wakapi in your browser and sign up for an account. The first account is automatically the admin account.

That’s it. Have fun tracking your coding time with your self-hosted wakatime server.
