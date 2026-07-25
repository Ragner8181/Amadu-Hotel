# Amadu Hotel | Wingate — website concept

A static, dependency-free front end (`index.html`, `style.css`, `script.js`) for **Amadu Hotel | Wingate**, Addis Ababa — built for you to deploy on GitHub Pages or Vercel directly, no build step needed.

## Before you deploy — please check these

1. **Phone & email in `index.html`** (`tel:+251911654340`, the displayed phone number, and `reservations@amaduhotel.example`) are **placeholders based on a single, unverified web listing**. Replace with the hotel's real, current contact info — this is the one thing guests will actually use.
2. **Photos** — there are no real photos of the property in this build (none were provided, and I can't pull hotel photos off the web into the site for copyright/verification reasons). Every image slot is a clearly labeled dashed placeholder (`.photo-placeholder`) — swap in real photos of the exterior, lobby, and rooms before launch.
3. **Coordinates & map** are the real, verified pin from the Google Maps link you shared: `9.0547547, 38.7193205`. The embedded map and "Get directions" link both use this.
4. **Reviews section** is written as an original, paraphrased composite of recurring themes found across public listings (Tripadvisor, Wanderlog) — not verbatim quotes, and not attributed to specific named guests. Swap in real testimonials once you have permission from actual guests, or link out to the live Google/Tripadvisor reviews.
5. **Room categories & counts** ("37+ rooms", Standard/Deluxe/Suite) are approximate, drawn from third-party travel-site listings, not the hotel's own materials — confirm against the hotel's actual room inventory.

## Deploy

**GitHub Pages**
```bash
git init
git add .
git commit -m "Amadu Hotel Wingate site"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```
Then in the repo: Settings → Pages → Deploy from branch → `main` / root.

**Vercel**
```bash
npm i -g vercel
vercel
```
No framework, no build command — it'll deploy as a static site as-is.

## Structure
```
index.html   — all sections/content
style.css    — "Highland Dusk" design system (see comment header in file)
script.js    — nav, hero window/star generation, scroll reveals, mock contact form
```
