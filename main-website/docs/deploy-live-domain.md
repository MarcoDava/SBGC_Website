# Deploy SBGC website to a .live domain

---

## Replacing the existing SBGC.live site (Vercel)

SBGC.live already exists and you have access from the owners. You can replace it with this new site in two ways, depending on where the current site is hosted.

### If the current site is already on Vercel

You only need **access to the Vercel project** that currently serves sbgc.live (owners add you as a team member or give you the project).

1. **Get access**  
   Owners: Vercel dashboard → **Project** → **Settings** → **Team** (or **Members**) → invite you, or transfer the project to your account.

2. **Connect your new code**  
   - **Option A – Same repo, new branch/folder:** If the repo is already connected, update the code (e.g. push your new `main-website` work to the connected repo). Then in the project: **Settings** → **General** → set **Root Directory** to `main-website` (if needed), **Build Command** to `npm run build`, **Output Directory** to `dist`. Save and go to **Deployments** → **Redeploy** (or push a commit to trigger a deploy).  
   - **Option B – New repo:** In the Vercel project go to **Settings** → **Git** → **Disconnect** the current repo, then **Connect Git Repository** and choose the repo that contains this new site. Set **Root Directory** to `main-website`, **Build Command** to `npm run build`, **Output Directory** to `dist`. Deploy.

3. **Domain**  
   sbgc.live is already on this project, so no DNS changes. After the new deployment is live, the domain will show the new site.

4. **Env vars**  
   If the old site had env vars (e.g. Formspree), copy or recreate them in **Settings** → **Environment Variables** and redeploy.

---

### If the current site is on another host (not Vercel)

You’ll deploy this new site to **a (new) Vercel project** and then point sbgc.live to it. Someone must update DNS for sbgc.live (you if you have access, or the owners using your instructions).

1. **Deploy the new site on Vercel**  
   - [vercel.com](https://vercel.com) → **Add New** → **Project** → import the repo that contains this `main-website` code.  
   - Set **Root Directory** to `main-website`, **Build Command** to `npm run build`, **Output Directory** to `dist`.  
   - Deploy and confirm the `*.vercel.app` URL shows the new site.

2. **Add sbgc.live to this Vercel project**  
   In the project: **Settings** → **Domains** → **Add** → enter `sbgc.live` (and `www.sbgc.live` if you want). Vercel will show the DNS records you need.

3. **Point the domain to Vercel (DNS)**  
   - If **you** manage DNS for sbgc.live: at your registrar (or DNS provider), add the A record and/or CNAME that Vercel shows (often `CNAME` for `sbgc.live` → `cname.vercel-dns.com`, or the A record for `76.76.21.21`). Remove or update any old A/CNAME that pointed to the previous host.  
   - If the **owners** manage DNS: send them the exact records from Vercel (Domain → **Verify** / **Configuration**) and ask them to add/update those records and remove the old ones for the previous site.

4. **Wait for DNS**  
   After DNS is updated, Vercel will issue SSL and sbgc.live will serve the new site (usually 5–30 minutes).

**Summary:** Replace = deploy new code to Vercel (either in the existing project or a new one) and make sure sbgc.live’s DNS points to that Vercel project.

---

## 1. Build the site

From the `main-website` folder:

```bash
npm run build
```

Output goes to `main-website/dist/`. You can test it locally with:

```bash
npm run preview
```

---

## 2. Get a .live domain

- **get.live** – register a `.live` domain (e.g. `sbgc.live`, `sbgccanada.live`).
- Or use **Namecheap**, **Cloudflare Registrar**, **Google Domains**, etc. and search for a `.live` domain.

You only need the domain; hosting is separate (step 3).

---

## 3. Choose a host and deploy

All of these support **custom domains** (including `.live`) and **SPA routing** (so `/aboutus`, `/events`, etc. work after refresh).

### Option A: Vercel (recommended)

1. Push your code to **GitHub** (if you haven’t already).
2. Go to [vercel.com](https://vercel.com) → **Add New** → **Project** → import your repo.
3. Set **Root Directory** to `main-website` (if the repo root is the monorepo folder).
4. **Build Command:** `npm run build`  
   **Output Directory:** `dist`  
   **Install Command:** `npm install`
5. Deploy. Vercel will give you a URL like `your-project.vercel.app`.
6. **Add domain:** Project → **Settings** → **Domains** → add your `.live` domain (e.g. `sbgc.live`).
7. In your domain registrar’s DNS, add the records Vercel shows (usually an **A** record or **CNAME**). Save and wait for DNS to propagate (up to 48 hours, often minutes).

### Option B: Netlify

1. Push code to **GitHub**.
2. Go to [netlify.com](https://netlify.com) → **Add new site** → **Import from Git** → choose repo.
3. **Base directory:** `main-website`  
   **Build command:** `npm run build`  
   **Publish directory:** `main-website/dist`
4. Deploy. Then **Domain settings** → **Add custom domain** → enter your `.live` domain.
5. Configure DNS at your registrar as Netlify instructs (e.g. CNAME to your Netlify subdomain or Netlify DNS).

### Option C: Cloudflare Pages

1. Push code to **GitHub**.
2. Go to [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Select repo; set **Build configuration**:  
   **Framework preset:** None  
   **Build command:** `npm run build`  
   **Build output directory:** `dist`  
   **Root directory:** `main-website`
4. Deploy. Then **Custom domains** → **Set up a custom domain** → add your `.live` domain. If your domain is on Cloudflare, it’s automatic; otherwise add the CNAME they give you at your registrar.

---

## 4. SPA / React Router

Your app uses React Router. All hosts above can be set to serve `index.html` for every path so routes like `/aboutus` and `/events` work when opened or refreshed.

- **Vercel:** Handles this by default for Vite/React.
- **Netlify:** Add a file `main-website/public/_redirects` (or `main-website/dist/_redirects` after build) with:
  ```
  /*    /index.html   200
  ```
- **Cloudflare Pages:** Same idea: add a `_redirects` file with `/* /index.html 200`, or use **Functions** if you prefer.

---

## 5. Checklist

| Step | Action |
|------|--------|
| 1 | Run `npm run build` in `main-website` and fix any errors |
| 2 | Push code to GitHub |
| 3 | Sign up for Vercel (or Netlify / Cloudflare Pages) and import the repo |
| 4 | Set root to `main-website`, build command `npm run build`, output `dist` |
| 5 | Deploy and confirm the default URL works |
| 6 | Register a .live domain (e.g. get.live or your registrar) |
| 7 | In the host dashboard, add the .live domain as a custom domain |
| 8 | At the domain registrar, add the A/CNAME records the host provides |
| 9 | Wait for DNS (often 5–30 min), then open https://yourname.live |

---

## Optional: env vars (e.g. Formspree, registration form)

If you use `VITE_*` env vars (e.g. `VITE_FORMSPREE_ID`, `VITE_REGISTRATION_FORM_URL`), set them in the host’s dashboard:

- **Vercel:** Project → **Settings** → **Environment Variables**
- **Netlify:** Site → **Site configuration** → **Environment variables**
- **Cloudflare Pages:** Project → **Settings** → **Environment variables**

Redeploy after changing env vars.
