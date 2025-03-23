---
layout: page
title: About
permalink: /about/
weight: 3
---

# **About Me**

Hi! I'm **{{ site.author.name }}**.<br>


<img src="https://i.imgur.com/wiU48oa.jpeg" alt="Roya and Joon" style="max-width: 40%; height: auto;" />

I’m an experienced researcher based in Baltimore, MD working at the intersection of traditional UX research, customer experience, and quantitative data analysis. I’m currently at the <a href="https://www.uspto.gov/">United States Patent and Trademark Office</a> leading research on our new trademark filing platform, Trademark Center.

Before, I was on contract at <a href="https://www.bloomworks.com" target="_blank">Bloom Works</a>, a public interest design firm, and at <a href="http://lumenlearning.com/">Lumen Learning</a>, an educational technology company. In between, I worked in strategy consulting at <a href="https://www.kaiserassociates.com" target="_blank">Kaiser Associates</a>.


I received most of my research training at MIT while pursuing my master’s degree and working at the <a href="https://tsl.mit.edu/">MIT Teaching Systems Lab</a> as a researcher.

If you'd like a copy of my current resume, you can access it <a href="https://drive.google.com/file/d/1rn7ejIXiw-b7TTsC161X2po1ljSlw5mT/view?usp=sharing" target="_blank">here</a>.


## **Skills**

<div class="row">
{% include about/skills.html title="UX Research" source=site.data.ux-research %}
{% include about/skills.html title="Data Analysis" source=site.data.data-analysis %}
</div>


## **Interests**

I love the work I do, but I also love life outside of work! 

I'm an amateur potter, classical violinist turned fiddler, cookbook enthusiast, and owner of a rescue basset hound, Joon.

{% capture carousel_images %}
https://i.imgur.com/xWSq8V7.jpeg
https://i.imgur.com/GxSEgxc.jpeg
https://i.imgur.com/lF8gvcQ.jpeg
https://i.imgur.com/67G9rqP.jpeg
https://i.imgur.com/LDgUxIK.jpeg
https://i.imgur.com/iwCAgb8.jpeg
{% endcapture %}
{% include elements/carousel.html height="50" unit="%" %}
<!--
<div class="row">
{% include about/timeline.html %}
</div>

-->
