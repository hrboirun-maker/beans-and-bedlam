# Beans & Bedlam Pet Co. — Next.js homepage prototype

This is a preview of the custom site, built using Next.js App Router. It is not yet connected to Etsy or GoDaddy.

## Quick start (after uploading to GitHub)
- Import the GitHub repository in Vercel; framework preset: **Next.js**.
- Vercel will run `npm install` and `npm run build` automatically.
- Once the preview looks right, follow Vercel's domain instructions for `beansandbedlam.com` in GoDaddy DNS.

## Important before launch
1. Your original wide logo is included in the header and the stacked logo in the footer. They are in `public/images`.
2. Replace each blank product `url` in `app/page.tsx` with the exact published Etsy listing URL. The current contact links are **not** live purchase buttons; they ask for the listing link. After obtaining Etsy URLs, change the card links to `href={p.url}` with the label `Shop on Etsy`.
3. Replace placeholder resource cards with actual articles before claiming they're live.
4. Product photos are styled mockups. Please check they accurately represent the final PDF before publishing.

## Preview locally
`npm install` then `npm run dev`, open http://localhost:3000.

No checkout, email collection, analytics or paid integrations have been added.
