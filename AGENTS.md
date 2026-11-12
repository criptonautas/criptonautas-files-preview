# AGENTS.md

A static sign-in preview for Files. No build, no dependencies, no tests.

- Everything served lives in `public/`. Keep URLs absolute under `/_preview/`.
- Spanish text goes in the markup; English goes in a `data-en` attribute on the same element.
- Colours and type come from the Criptonautas brand kit; do not add new ones.
- Server configuration is internal and never belongs in this repo.

Check a change by opening `public/preview.html` with the browser in Spanish and in English,
in light and dark mode.
