````markdown
# CSS Coding Standards

This document defines the CSS coding standards for the project. All CSS must follow these rules to ensure consistency, maintainability, performance, and scalability.

---

# General Rules

- Use external CSS files only.
- Do not use inline CSS.
- Do not use `<style>` tags in HTML unless explicitly required.
- Write clean, readable, and maintainable CSS.
- Remove unused CSS before deployment.
- Avoid duplicate styles.
- Follow the DRY (Don't Repeat Yourself) principle.
- Use CSS3 features where appropriate.
- Organize CSS logically.

---

# File Organization

Example:

```
assets/
└── css/
    ├── reset.css
    ├── variables.css
    ├── typography.css
    ├── layout.css
    ├── components.css
    ├── utilities.css
    ├── responsive.css
    └── style.css
```

---

# CSS File Structure

Organize CSS in this order:

```css
/* ==========================================
   Variables
========================================== */

/* ==========================================
   Reset
========================================== */

/* ==========================================
   Base
========================================== */

/* ==========================================
   Typography
========================================== */

/* ==========================================
   Layout
========================================== */

/* ==========================================
   Components
========================================== */

/* ==========================================
   Utilities
========================================== */

/* ==========================================
   Responsive
========================================== */
```

---

# Naming Convention

Use **kebab-case**.

## Good

```css
.site-header {}

.main-navigation {}

.hero-banner {}

.hero-content {}

.service-card {}

.service-card-title {}

.contact-form {}

.primary-button {}

.footer-links {}

.red-box {}
```

## Bad

```css
.box {}

.box1 {}

.box2 {}

.Div {}

.MainHeader {}

.left {}

.right {}

.red {}

.blue {}

.test {}

.temp {}
```

---

# Class Naming Rules

- Use lowercase letters only.
- Separate words using hyphens (`-`).
- Use meaningful names.
- Name classes by purpose, not appearance.
- Keep names concise and descriptive.

---

# Avoid

- camelCase
- PascalCase
- snake_case
- Numbers in class names
- Random names
- Generic names

Bad examples:

```css
.box1 {}

.item2 {}

.div3 {}

.left-box {}

.red {}

.blue {}

.temp {}
```

---

# Good Examples

```css
.hero-banner {}

.hero-image {}

.hero-content {}

.about-section {}

.team-member {}

.service-list {}

.service-card {}

.contact-form {}

.footer-links {}
```

---

# Selector Rules

Prefer class selectors.

Good

```css
.primary-button {}

.hero-title {}
```

Avoid

```css
#button {}

div {}

section div {}

body main section div {}
```

---

# Selector Nesting

Maximum nesting depth:

```
3 Levels
```

Good

```css
.hero-banner .hero-content {}

.service-card .card-title {}

.footer-links a {}
```

Avoid

```css
body main section .container .wrapper .item .title {}
```

---

# CSS Property Order

Follow this order:

```css
.card {

    /* Position */

    position:
    top:
    right:
    bottom:
    left:
    z-index:

    /* Display */

    display:
    flex:
    grid:

    /* Flex */

    flex-direction:
    justify-content:
    align-items:
    gap:

    /* Size */

    width:
    max-width:
    min-width:

    height:
    max-height:
    min-height:

    /* Spacing */

    margin:
    padding:

    /* Border */

    border:
    border-radius:

    /* Background */

    background:

    /* Typography */

    color:
    font:
    font-size:
    font-weight:
    line-height:
    text-align:

    /* Effects */

    box-shadow:
    opacity:

    /* Animation */

    transition:
    transform:
}
```

---

# Use CSS Variables

Good

```css
:root {
    --primary-color: #0055ff;
    --secondary-color: #222222;
    --text-color: #444444;
    --border-radius: 8px;
}
```

Use

```css
.button {
    background: var(--primary-color);
}
```

Avoid

```css
.button {
    background: #0055ff;
}
```

---

# Colors

Prefer

```css
var(--primary-color)
```

Avoid

```css
#ff0000

rgb()

rgba()
```

unless necessary.

---

# Units

Preferred

```
rem
em
%
vh
vw
```

Avoid

```
px
```

for typography.

---

# Layout

Prefer

- Flexbox
- CSS Grid

Avoid

```css
float
```

unless maintaining legacy code.

---

# Responsive Design

Use Mobile First.

Example

```css
@media (min-width: 768px) {

}

@media (min-width: 1024px) {

}
```

Avoid desktop-first CSS.

---

# Utility Classes

Good

```css
.text-center {}

.text-left {}

.d-flex {}

.justify-center {}

.align-center {}

.hidden {}

.visible {}
```

---

# Comments

Use comments only for sections.

Example

```css
/* Header */

/* Hero */

/* Footer */
```

Avoid unnecessary comments.

---

# Performance

- Remove duplicate rules.
- Remove unused selectors.
- Minimize specificity.
- Reuse utility classes.
- Optimize animations.
- Avoid expensive selectors.

---

# Transitions

Good

```css
transition: all .3s ease;
```

Avoid

```css
transition: all 5s;
```

---

# Z-Index

Use a scale.

```css
100

200

300

400

500
```

Avoid

```css
999999
```

---

# Important

Avoid

```css
!important
```

Only use if absolutely required.

---

# Fonts

Use

```css
font-family: "Roboto", sans-serif;
```

Always provide fallback fonts.

---

# Images

Prefer

```css
background-size: cover;

background-position: center;
```

---

# Animations

Keep animations under

```
0.3s–0.5s
```

unless intentionally longer.

---

# Accessibility

Ensure

- Sufficient color contrast
- Visible focus styles
- Readable font sizes
- Responsive text
- Keyboard accessibility

---

# Validation Checklist

Before committing:

- External CSS only
- No inline styles
- No duplicate rules
- No unused CSS
- Valid CSS
- Responsive
- Mobile-first
- Uses CSS variables
- Meaningful class names
- Kebab-case naming
- Maximum 3 selector levels
- No unnecessary `!important`

---

# Never Generate

- Inline CSS
- `<style>` tags
- ID selectors for styling
- Random class names
- camelCase class names
- snake_case class names
- Numbers in class names
- Deep selector nesting
- Duplicate CSS
- Unused CSS
- Fixed layouts without responsive support

---

# Always Generate

- External CSS
- Kebab-case class names
- Mobile-first layouts
- Semantic, reusable components
- CSS variables
- Flexbox/Grid layouts
- Clean formatting
- Reusable utility classes
- Production-ready CSS
````
