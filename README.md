# Hero

A landing page hero for a **fictional** firefighter seminar nonprofit, "Ember Ridge Fire Seminar".

This project is just a **test run of my styling with Tailwind CSS**. I built it to practice responsive layout, accessibility and a custom color theme using only Tailwind utility classes.

## Built with

- **HTML**
- **Tailwind CSS**

No JavaScript and no hand-written CSS files. All styling is done with Tailwind classes in the HTML.

## Features

- Split headline layout with a 2x2 stats grid
- Responsive layout that adapts to the screen size: one column on phones, a 2x2 grid on tablets, and a split layout on desktop
- Toggleable navigation menu that works at every screen size, built with the native `<details>` element and Tailwind's `group-open:` variant
- Hover and focus states on all interactive elements, with fire-themed (flame) hover effects on the logo and stat icons
- Red, yellow and black color theme, with flame orange accents
- Respects reduced-motion settings

## Project structure

```
Hero/
├── index.html            # Page markup and Tailwind classes
├── tailwind.config.js    # Custom colors and font (brand, sun, flame, ink)
└── README.md
```

## Run it locally

1. Download or clone the repo.
2. Keep `index.html` and `tailwind.config.js` in the same folder.
3. Open `index.html` in your browser.

The page loads Tailwind from its CDN script, so you need an internet connection.

## Notes

The nonprofit, its numbers and the charity registration number are all made up for this practice project.
