# Files — sign-in preview

**ENGLISH** | [ESPAÑOL](README.es.md)

Maintained by Criptonautas. Not affiliated with or endorsed by Filestash.

The page you see when you open Files, the Criptonautas collective library, without
a session. Files runs [Filestash](https://github.com/mickael-kerjean/filestash)
behind an identity provider; this page stands in front of it.

## What it does

- Shows the Criptonautas symbol, the name, one line saying who the library is for,
  and a button that starts the sign-in and comes back to the exact page you opened.
- Picks the language from the browser: Spanish for Spanish, English for anything
  else. Spanish is in the markup, so the page still reads with JavaScript off.
- Follows the system light or dark scheme, with the brand kit palette and Inter Tight.
- Holds no data and calls nothing: no cookies, no requests beyond its own font and
  script. It asks search engines not to index it.

## Why a page and not a redirect

Without a session the proxy answers 401. Sending that straight to the login leaves
a blank hop with nothing to read, so a shared link shows no preview and a visitor
does not see where they landed. Served with status 200, this page says what Files
is and who can get in before asking anyone to sign in.

## Files

| File | What it is |
|---|---|
| `public/preview.html` | the page |
| `public/lang.js` | switches the text to English when the browser is not in Spanish, and points the button back at the current URL |
| `public/inter-tight.woff2` | Inter Tight, taken as-is from the Criptonautas brand kit |
| `OFL-inter-tight.txt` | the font's licence |

## Serving it

Static files, no build. Serve `public/` under `/_preview/` outside the login, and
answer unauthenticated requests with `public/preview.html` and status 200. The page
uses absolute `/_preview/` URLs because it can be served on any path.

Under a Content-Security-Policy it needs:

```
script-src 'self'; style-src 'self' 'unsafe-inline'; font-src 'self'
```

## Licence

Code under [MIT](LICENSE). Inter Tight under the SIL OFL 1.1, in
[`OFL-inter-tight.txt`](OFL-inter-tight.txt). The Criptonautas symbol is the
community's mark, open to use under the rules at <https://criptonautas.co/kit>.

Text of this README under [CC BY-NC-SA 4.0](CC-BY-NC-SA-4.0.txt).
