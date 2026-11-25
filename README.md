# Kevin Berlandi — Director Portfolio

A cinema-first portfolio redesign for **Kevin Berlandi** (`berlandi.co`), Los Angeles-based director of film, episodic television, and commercials.

## Highlights

- **Darkroom Cinema Aesthetic**: Obsidian (`#09090B`) canvas, warm archival bone typography (`Cormorant Garamond`, `Plus Jakarta Sans`, `JetBrains Mono`), anamorphic amber accents (`#D4A56A`), and subtle 35mm film grain.
- **Screening Room Modal**: Full-frame darkroom viewer with toggleable director's viewfinder frame guides (`2.39:1` / rule-of-thirds / crosshair), director's artistic notes, and drop-in Vimeo/YouTube embed support.
- **Selected Works**: Filterable by *Film*, *Television*, and *Commercials*, with both an asymmetric widescreen **Gallery View** and a contact-sheet **Archive Index View**.
- **The Craft**: Interactive aspect-ratio framing study (`2.39:1`, `1.85:1`, `1.33:1`) and three artistic pillars celebrating the craft of directing.
- **Credits, Bio & Representation**: Full episodic television credits, Cannes-premiered narrative work, commercial brand roster, and IAG (Independent Artist Group) representation.

## Local Development

```bash
npm install
npm run dev
```

## Updating Reels & Video Embeds

Open `src/data/portfolio.ts` and add a `videoEmbedUrl` (e.g., `https://player.vimeo.com/video/YOUR_ID?autoplay=1`) to `DIRECTOR_REEL` or any item in `PROJECTS`. The Screening Room modal will automatically play the embedded video.
