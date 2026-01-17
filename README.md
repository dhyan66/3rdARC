# Arc Gallery Studio

Minimal editorial photography portfolio built with Next.js App Router, Tailwind CSS, and TypeScript.

## Setup

```bash
npm install
npm run dev
```

## Production

```bash
npm run lint
npm run build
npm run start
```

## Environment variables

Create a `.env.local` with:

```bash
TURNSTILE_SITE_KEY=your_site_key
TURNSTILE_SECRET_KEY=your_secret_key
NEXT_PUBLIC_SITE_URL=https://example.com
```

## Content updates

Local content lives in `src/content`:

- `src/content/galleries.ts`: add galleries with `slug`, `title`, `year`, `location`, `tags`, `cover`, `photos[]`.
- `src/content/filmSetStills.ts`: add productions with `title`, `year`, `role`, `responsibilities[]`, `cover`, `stills[]`.
- `src/content/workshops.ts`: add workshops with `slug`, `title`, `dates`, `location`, `price`, `capacity`, `status`, `depositAmount`, `payInFullUrl`, `depositUrl`, `itinerarySections[]`, `faq[]`.

Place new placeholder art in `public/placeholders` and reference the paths in the content files.

## Contact submissions

The contact form posts to `/api/contact` and writes submissions to `.data/contacts.jsonl` for testing. Turnstile verification is required.
