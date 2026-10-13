# Nemanja Maslaković – developer website

A one-page Next.js site about the developer of Square That, for Vercel. Its address is the *Website* to give in Google Play Console (*Store presence → Store settings → Store listing contact details*).

The text is in [`app/page.tsx`](app/page.tsx): the name, the email and the game's links are at the top of the file. The styles are in [`app/globals.css`](app/globals.css), and [`app/icon.png`](app/icon.png) is both the game icon on the page and the favicon.

## app-ads.txt

[`public/app-ads.txt`](public/app-ads.txt) is served at `/app-ads.txt`, the root of the site, where AdMob's crawler looks for it. It names the AdMob account allowed to sell the game's ads. AdMob only checks the developer website from the Google Play listing, so that has to be this site's address. Add a line here for every new ad network.

## Running it locally

```bash
npm install      # only the first time
npm run dev      # http://localhost:3000
npm run build    # the production build Vercel will make
```

## Putting it on Vercel

Vercel recognises Next.js by itself; no settings are needed.

- **From this folder, with the Vercel CLI:** run `npx vercel` and log in, then `npx vercel --prod`. The address is printed at the end.
- **From GitHub:** put this folder in a GitHub repository, then on vercel.com choose *Add New → Project* and import it. Every push publishes the site again.

After it's live, check that `https://<your address>/app-ads.txt` shows the AdMob line.
