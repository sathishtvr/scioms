````markdown
# AGENTS.md

> Project coding standards and instructions for AI coding assistants.

---

# Role

You are a Senior Front-End Developer responsible for writing clean, maintainable, accessible, and production-ready code.

Always follow modern web standards and best practices.

---

# Technology Stack

- HTML5
- CSS3
- JavaScript (ES6+)

---

# HTML Standards

## General

- Use HTML5 (`<!DOCTYPE html>`).
- Use semantic HTML elements.
- Use lowercase element and attribute names.
- Use double quotes (`"`).
- Keep HTML properly indented.
- Validate HTML before delivery.

## Semantic Elements

Always prefer:

- `<header>`
- `<nav>`
- `<main>`
- `<section>`
- `<article>`
- `<aside>`
- `<footer>`
- `<figure>`
- `<figcaption>`

Avoid unnecessary `<div>` wrappers.

## Headings

- Only one `<h1>` per page.
- Follow heading hierarchy (`h1 → h2 → h3 → h4`).

## Images

Every image must include:

```html
<img
  src="image.webp"
  alt="Description"
  loading="lazy"
  width="600"
  height="400"
/>
```

## Forms

Every form field must include:

- `<label>`
- `name`
- `id`
- Proper `type`

## Buttons

Use:

```html
<button type="button"></button>
```

or

```html
<button type="submit"></button>
```

Never use:

```html
<div onclick=""></div>
```

---

# CSS Standards

## External CSS Only

Never use:

```html
<style>
```

Never use:

```html
style=""
```

All styles must be stored in external CSS files.

---

## CSS Architecture

Organize CSS in this order:

1. Variables
2. Reset
3. Base
4. Typography
5. Layout
6. Components
7. Utilities
8. Responsive

---

## Naming Convention

Use BEM.

Example:

```css
.card {
}

.card__title {
}

.card__image {
}

.card--active {
}
```

Avoid names like:

- box
- box1
- left
- right
- red

---

## CSS Rules

Prefer:

- Flexbox
- CSS Grid
- CSS Variables

Avoid:

- !important
- ID selectors
- Deep nesting
- Fixed heights

Group properties logically.

Example:

```css
.card {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 1200px;

  margin: 0 auto;
  padding: 20px;

  background: #fff;
  border-radius: 8px;

  transition: 0.3s ease;
}
```

---

# JavaScript Standards

## External JavaScript Only

Never use:

```html
<script>
```

Never use:

```html
onclick=""
```

Never use:

```html
onchange=""
```

Never use:

```html
onload=""
```

Always load JavaScript from external files.

---

## JavaScript Rules

Use:

- const
- let
- Arrow Functions
- addEventListener()
- Modules when appropriate

Never use:

- var
- Inline Events
- document.write()

Example:

```javascript
const button = document.querySelector(".btn");

button.addEventListener("click", handleClick);

function handleClick() {
  console.log("Clicked");
}
```

---

# Accessibility

Always include:

- alt attributes
- Labels
- Keyboard navigation
- Visible focus styles
- Proper heading hierarchy
- ARIA only when necessary

---

# SEO

Every page should include:

- Title
- Meta Description
- Canonical URL
- Open Graph Tags
- Favicon

---

# Performance

Always:

- Optimize images
- Use WebP when possible
- Lazy-load images
- Minify CSS
- Minify JavaScript
- Remove unused CSS
- Remove unused JavaScript
- Reduce DOM depth

---

# Responsive Design

Design Mobile First.

Suggested breakpoints:

- Mobile
- Tablet
- Desktop

Prefer:

- Flexbox
- Grid
- Relative units (`rem`, `%`, `vw`, `vh`)

---

# Project Structure

```
project/
│
├── assets/
│   ├── css/
│   ├── js/
│   ├── images/
│   ├── fonts/
│   └── icons/
│
├── components/
├── layouts/
├── pages/
└── index.html
```

---

# File Naming

Use:

```
about-us.html
contact.html
main.css
responsive.css
main.js
```

Avoid:

```
About.HTML
New File.html
test123.html
```

---

# Class Naming

Good:

```css
.hero

.hero__content

.hero__image

.hero__title

.hero--dark
```

Bad:

```css
.box

.box1

.left

.red
```

---

# Comments

Use comments only for important sections.

Example:

```css
/* Header */
```

```javascript
// Mobile Navigation
```

Avoid unnecessary comments.

---

# Prohibited

Do NOT generate:

- Inline CSS
- Inline JavaScript
- Tables for layout
- Deprecated HTML tags
- Empty href="#"
- Multiple H1 tags
- Duplicate IDs
- Inline event handlers
- Unused code
- Unused CSS
- Unused JavaScript
- Excessive nesting
- !important unless absolutely required

---

# Required

Always generate:

- Semantic HTML
- External CSS
- External JavaScript
- Accessible code
- Responsive layouts
- Mobile-first design
- Optimized images
- Clean formatting
- Reusable components
- Modern JavaScript
- Production-ready code

---

# Validation Checklist

Before completing any task verify:

- HTML validates successfully
- CSS validates successfully
- JavaScript has no console errors
- No inline CSS
- No inline JavaScript
- Semantic HTML used
- Accessibility checked
- Responsive layout verified
- Images optimized
- Lighthouse score ≥ 90
- No unused code

---

# Final Rule

Always generate clean, semantic, accessible, responsive, reusable, and production-ready code following modern HTML5, CSS3, and JavaScript best practices.
````
