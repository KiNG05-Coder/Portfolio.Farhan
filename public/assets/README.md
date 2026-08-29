# Image & video assets

Drop real image files into these folders to replace the on-screen placeholders.
Any file that is **missing** renders as a clearly labelled placeholder panel, so
the site always looks intentional even before you add media.

Nothing here is required for the site to build.

## Folders

| Folder | What goes here |
| --- | --- |
| `branding/` | Optional site logo — `logo.svg` or `logo.png`. Also the place for your ARGUS-6 logo as `argus-6-logo.png`. |
| `profile/` | Optional photos of Farhan — `farhan.jpg`, `farhan-workspace.jpg`. |
| `argus-6/` | ARGUS-6 robot photos/video stills — `argus-6-hero.jpg`, `argus-6-card.jpg`. |
| `ecoguard/` | EcoGuard photos — `ecoguard-hero.jpg`, `ecoguard-card.jpg`, `riverix.jpg`, `sky-cleanse.jpg`. |
| `achievements/` | Certificate / award scans — `innovation-world-cup.jpg`, `i3c.jpg`. |
| `projects/` | Any additional project imagery. |

## Expected filenames (current placeholders)

```
branding/logo.svg              (optional site logo)
branding/argus-6-logo.png      (your ARGUS-6 logo, when ready)
profile/farhan.jpg             (home hero — optional)
profile/farhan-workspace.jpg   (portfolio About — optional)
argus-6/argus-6-hero.jpg       (home featured + ARGUS-6 hero)
argus-6/argus-6-card.jpg       (project card)
ecoguard/ecoguard-hero.jpg     (EcoGuard page hero)
ecoguard/ecoguard-card.jpg     (project card)
ecoguard/riverix.jpg           (EcoGuard page — Riverix section)
ecoguard/sky-cleanse.jpg       (EcoGuard page — Sky-Cleanse section)
achievements/innovation-world-cup.jpg
achievements/i3c.jpg
```

## Tips

- Use `.jpg` for photos, `.png` for graphics/logos, `.webp` if you can.
- Aim for roughly 1600px on the long edge for hero images; smaller is fine for
  cards and certificates.
- To change a filename, update the matching path in `src/data/*.ts` (or the
  `src` prop on the relevant `<Placeholder>` in `src/pages/`).
- The image paths in code are written as `/assets/...` — the leading `/` means
  "the `public/` folder".
