# ONYX CREATRIX launch site

A lightweight static site built with semantic HTML, CSS, and vanilla JavaScript.

## Preview

Run a static server from this folder, for example:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

Current public preview: https://onyx-creatrix.pages.dev/

## Cloudflare Pages

The current Cloudflare Pages project was published with a direct static upload. GitHub changes will not deploy automatically until the repository is connected in Cloudflare Pages. If connecting it later, use no framework preset, leave the build command blank, and use `/` as the output directory.

## Before publishing

- Verify the Formspree endpoint and notification email in the Formspree dashboard.
- Replace the temporary Instagram `#` link with the live profile URL.
- Confirm the public URL and social sharing preview after each production deployment.
