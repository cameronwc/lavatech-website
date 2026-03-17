# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Jekyll-based GitHub Pages website for LavaTech Solutions, a local tech services business in Lava Hot Springs, Idaho. Services include 3D printing, Starlink installation, computer repair, WiFi troubleshooting, and general IT support.

## Development Commands

```bash
bundle install                        # Install Ruby dependencies
bundle exec jekyll serve              # Run local dev server at http://localhost:4000
bundle exec jekyll build              # Build static site to _site/
bundle exec htmlproofer _site \       # Validate HTML links, images, scripts
  --ignore-urls "/facebook.com/,/instagram.com/,/linkedin.com/,/formspree.io/,/maps.google.com/,/googletagmanager.com/,/fonts.googleapis.com/,/fonts.gstatic.com/" \
  --ignore-status-codes "999,403,429" \
  --no-enforce-https --allow-missing-href \
  --swap-urls "^https\://lavatech\.solutions:" \
  --checks Links,Images,Scripts
```

## CI/CD

Two GitHub Actions workflows in `.github/workflows/`:

- **`ci.yml`** — Runs on pull requests to `main`. Builds the site and validates HTML with html-proofer. Uploads the build as an artifact.
- **`deploy.yml`** — Runs on push to `main`. Builds, validates, then deploys to GitHub Pages using the `actions/deploy-pages` action (requires Pages to be configured for GitHub Actions as the source in repo settings).

## Architecture

- **Jekyll** static site generator with GitHub Pages-compatible plugins (`jekyll-seo-tag`, `jekyll-sitemap`, `jekyll-feed`)
- **No CSS framework** — single `assets/css/main.css` file with CSS custom properties for theming
- **No JS framework** — minimal vanilla JS in `assets/js/main.js` (mobile nav toggle, form helpers)
- **Google Fonts** — Inter (body) + Poppins (headings) loaded via `_includes/head.html`

### Content Model

- **Blog posts:** Markdown files in `_posts/` using `YYYY-MM-DD-title.md` naming, `post` layout
- **Case studies:** Markdown files in `_case_studies/` collection with `output: true`, `case-study` layout. Front matter fields: `title`, `industry`, `summary`, `challenge`, `solution`, `results`
- **Services:** Defined in `_data/services.yml` (not individual pages). Rendered by service card includes on the homepage and services page
- **Navigation:** Driven by `_data/navigation.yml`, rendered by `_includes/nav.html`

### Layout Hierarchy

`default.html` → base HTML shell (head, header, footer, scripts)
  - `page.html` → standard page with hero banner (About, Case Studies listing, Blog listing)
  - `post.html` → blog post with metadata header and prev/next navigation
  - `case-study.html` → case study with challenge/solution/results sections

### Key Patterns

- Service icons are inline SVGs switched via `{% case service.icon %}` in `_includes/services-card.html`
- Contact form uses Formspree (`pages/contact.html`) — endpoint placeholder needs real ID
- Service links pass `?service=` URL param to the contact page; JS pre-selects the dropdown
- All placeholder content is marked with `PLACEHOLDER` comments for easy search-and-replace
- Brand colors: primary blue `#1565C0`, accent green `#2ECC71`, dark `#0F1923`

## Content Updates

To add a service: add an entry to `_data/services.yml` with `title`, `icon`, `description`, `features`. If using a new icon value, add a corresponding SVG case in both `_includes/services-card.html` and `pages/services.html`.

To add a blog post: create `_posts/YYYY-MM-DD-slug.md` with front matter (`title`, `date`, `author`, `categories`, `description`).

To add a case study: create `_case_studies/slug.md` with front matter (`title`, `industry`, `summary`, `challenge`, `solution`, `results`).
