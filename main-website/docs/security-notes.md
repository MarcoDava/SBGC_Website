# Security notes (user-exploitable)

Summary of what was checked and fixed so normal users cannot exploit the site.

## What was fixed

### 1. Tab-nabbing / `target="_blank"` (Register + DynamicCard)

- **Registerpage:** `target` and `rel` were set to the form URL by mistake. A link with `rel="https://..."` is invalid and can behave oddly; the link also did not open in a new tab.  
  **Fix:** `target="_blank"` and `rel="noopener noreferrer"` so the form opens in a new tab and the opener page cannot be replaced.

- **DynamicCard:** Used `target="__blank"` (typo) and had no `rel`. External “Learn more” links could be used for tab-nabbing.  
  **Fix:** Use `target="_blank"` and `rel="noopener noreferrer"` only when `eventPage` is an absolute `http(s)` URL; internal paths (e.g. `/register`) stay same-window.

### 2. Safe dynamic `href`s (DynamicCard + EventCards)

- **Risk:** If `eventPage` or `ctaLink` ever come from user input or a CMS, a value like `javascript:...` or `data:text/html,...` could run script in the user’s context.  
- **Fix:** Added `safeHref()` in `src/lib/utils.ts` and use it for these links. It blocks `javascript:`, `data:`, and `vbscript:` and returns `"#"` for them. EventCards and DynamicCard now use `safeHref()` for their links.

---

## What was checked and is fine

- **XSS:** No `dangerouslySetInnerHTML`, `eval`, or unescaped user content rendered as HTML. React’s default escaping is in use.
- **Open redirects:** No redirect logic driven by URL parameters or user-controlled URLs.
- **Secrets in client:** Only `VITE_*` env vars (e.g. Formspree ID) are used; these are meant to be public. No API keys or secrets that must stay server-only are in the frontend.
- **Forms:** Contact form posts to Formspree; no sensitive actions or redirects are controlled by the client in an exploitable way. Formspree handles server-side validation and rate limiting.
- **Links:** Footer/nav links are hardcoded or from static content. Event/CTA links now go through `safeHref()`.

---

## If you add user or CMS-driven content later

- Run any **URLs** (e.g. event links, CTA links) through `safeHref()` before using them in `<a href={...}>`.
- Do not render **HTML** from users or a CMS with `dangerouslySetInnerHTML` unless you sanitize it (e.g. with a library like DOMPurify).
- Keep **sensitive config** (e.g. real API secrets) out of `VITE_*` and only in server-side env.

---

## Dependency vulnerabilities

Run periodically:

```bash
npm audit
```

Fix reported issues (e.g. `npm audit fix` or upgrading specific packages) so known dependency vulnerabilities are not exploitable by normal users.
