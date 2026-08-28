# ONYX CREATRIX launch site

A lightweight static site built with semantic HTML, CSS, and vanilla JavaScript.

## Preview

Run a static server from this folder, for example:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Cloudflare Pages

Connect the GitHub repository in Cloudflare Pages. Use no framework preset, leave the build command blank, and use `/` as the output directory. The site can also be uploaded directly as static assets.

## Before publishing

- Verify the Formspree endpoint and notification email in the Formspree dashboard.
- Replace the temporary Instagram `#` link with the live profile URL.
- Add `assets/onyx-social-preview.jpg` before sharing publicly, or remove the `og:image` and `twitter:image` tags until it is available.
