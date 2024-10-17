---
layout: "../../layouts/MarkdownPostLayout.astro" # Corrected path
title: Learning Astro
description: "A blog post about learning Astro"
pubDate: 2024-10-09
author: "John Doe"
image:
  url: "/images/astro.png"
  alt: "Astro Logo"
tags: ["Astro", "Blog", "Web Development", "Test"]
---

# My Astro Learning Blog

This is where I will post about my journey learning Astro.

<ul>
  {allPosts.map(post => (
    <li><a href={post.url}>{post.frontmatter.title}</a></li>
  ))}
</ul>
