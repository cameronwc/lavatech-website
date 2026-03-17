# LavaTech Solutions Website

Business website for LavaTech Solutions — local tech services in Lava Hot Springs, Idaho. Built with Jekyll for GitHub Pages hosting.

**Live site:** [lavatech.solutions](https://lavatech.solutions)

## Local Development

```bash
# Install dependencies (requires Ruby and Bundler)
bundle install

# Run the local dev server
bundle exec jekyll serve

# Site will be available at http://localhost:4000
```

## How to Update Content

### Add a Blog Post

1. Create a new file in `_posts/` with the naming convention: `YYYY-MM-DD-post-title.md`
2. Add front matter at the top:

```yaml
---
title: "Your Post Title"
date: 2026-04-15
author: "LavaTech Solutions"
categories: [category1, category2]
description: "A brief description for SEO."
---
```

3. Write the post content in Markdown below the front matter.
4. Commit and push — GitHub Pages builds automatically.

### Add a Case Study

1. Create a new file in `_case_studies/` named `short-descriptive-name.md`
2. Add front matter:

```yaml
---
title: "Case Study Title"
industry: "Industry Name"
summary: "One-sentence summary for the listing card."
challenge: "Description of the client's problem."
solution: "What LavaTech did to solve it."
results: "The outcome and impact."
---
```

3. Optionally add extra content in Markdown below the front matter.
4. Commit and push.

### Update Services

Edit `_data/services.yml`. Each service has: `title`, `icon`, `description`, and `features` (list). The icon value maps to SVG icons in the service card templates — existing values are: `printer-3d`, `satellite`, `computer`, `wifi`, `tools`.

### Update Navigation

Edit `_data/navigation.yml` to add, remove, or reorder navigation links.

### Update Business Info

Edit `_config.yml` for site-wide settings: business name, description, email, phone, location, and social media URLs.

## Placeholders to Replace

Search for `PLACEHOLDER` across the codebase to find all placeholder content that needs real data:

- **Phone number:** `_config.yml` → `phone`
- **Social media URLs:** `_config.yml` → `social`
- **Contact form:** `pages/contact.html` → Replace `YOUR_FORMSPREE_ID` with your Formspree form ID
- **Google Analytics:** `_includes/head.html` → Replace `UA-XXXXXXXXX-X` with your tracking ID
- **Logo:** `_includes/header.html` → Uncomment the `<img>` tag and add your logo file
- **Testimonials:** `pages/index.html` → Replace placeholder testimonials with real ones
- **About page:** `pages/about.md` → Replace founder story with real content
- **Case studies:** `_case_studies/*.md` → Replace with real client stories
- **Favicon & OG image:** Add files to `assets/images/` and uncomment references in `_includes/head.html`

## Project Structure

```
├── _config.yml          # Site configuration
├── _data/               # Structured data (navigation, services)
├── _includes/           # Reusable HTML partials
├── _layouts/            # Page templates
├── _posts/              # Blog posts (Markdown)
├── _case_studies/       # Case studies (Markdown)
├── pages/               # Site pages
├── assets/
│   ├── css/main.css     # All styles
│   └── js/main.js       # Mobile nav, form helpers
├── CNAME                # Custom domain
├── Gemfile              # Ruby dependencies
└── README.md            # This file
```
