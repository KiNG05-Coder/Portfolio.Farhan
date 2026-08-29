# branding/

## Site logo (optional)

Add **`logo.svg`** (preferred) or **`logo.png`** here and the navigation bar will
use it automatically instead of the "FS / FARHAN SAIF" text wordmark. Keep it
around 28px tall visually; an SVG scales best. No code change needed — the nav
checks for the file at build time.

To remove a logo again, just delete the file.

## ARGUS-6 logo

Farhan is generating the ARGUS-6 logo separately. When it is ready, save it as:

```
branding/argus-6-logo.png
```

It is **not** hard-coded anywhere yet, so nothing breaks while it is missing.
To display it, add an `<img src="/assets/branding/argus-6-logo.png" ... />` where
you want it (for example in the ARGUS-6 hero in `src/pages/argus-6.astro`).
