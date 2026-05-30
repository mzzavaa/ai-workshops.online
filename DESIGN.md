# AI Workshops — Design System

## Typefaces

| Role | Family | Weight | Usage |
|------|--------|--------|-------|
| Display / Headlines | **DM Serif Display** | 400 (regular) | H1, H2, section titles, package names, step headings |
| UI / Body | **Inter** | 400 / 500 / 600 / 700 | All paragraphs, nav, buttons, labels, captions |

Both are loaded from Google Fonts:
```
https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@400;500;600;700;800&display=swap
```

---

## Colour Palette

### Accent
| Name | Hex | Use |
|------|-----|-----|
| Cherry Red | `#9b2335` | Primary CTA buttons, highlights, links, numbered accents |
| Cherry Red Hover | `#7a1c2a` | Hover state on accent elements |
| Cherry Dim | `rgba(155,35,53,0.10)` | Subtle accent backgrounds, hover fills |
| Cherry Border | `rgba(155,35,53,0.22)` | Accent-tinted borders |

### Dark Mode (default)
| Name | Hex | Use |
|------|-----|-----|
| Background | `#0e0d0c` | Page base — near-black with warm undertone |
| Background Secondary | `#161513` | Alternate section backgrounds |
| Card | `#1c1a18` | Card surfaces, nav dropdown |
| Border | `#2a2725` | Dividers, card borders |
| Border Strong | `#3d3a36` | Emphasized dividers, input borders |
| Text | `#fafaf9` | Primary text — warm white |
| Text Secondary | `#a1a1aa` | Paragraph copy, descriptions |
| Text Muted | `#52525b` | Labels, captions, placeholders |

### Light Mode
| Name | Hex | Use |
|------|-----|-----|
| Background | `#fafaf9` | Page base — warm off-white |
| Background Secondary | `#f4f4f2` | Alternate sections |
| Card | `#ffffff` | Card surfaces |
| Border | `#e5e5e3` | Dividers |
| Text | `#111110` | Primary text |
| Text Secondary | `#5c5c57` | Paragraph copy |
| Text Muted | `#9b9b96` | Captions, labels |

### Secondary / Link
| Name | Hex | Use |
|------|-----|-----|
| Indigo Blue | `#6b7ef5` | Hyperlinks only (non-primary), tech references |

---

## Type Scale

```
--fs-label: 15px         → section eyebrows, ALL-CAPS labels
--fs-body:  17px         → all prose paragraphs, card descriptions
--fs-lead:  18–21px      → lead/intro paragraphs (fluid)
--fs-sub:   19–23px      → section subtitles (fluid)
--fs-hero:  18–24px      → hero subtitle (fluid)
Headlines:  clamp(28–82px) → DM Serif Display, weight 400
```

---

## Visual Aesthetic

- **Dark-first, warm-toned** — backgrounds lean slightly warm brown-black (`#0e0d0c`), never pure `#000`
- **Cherry red accent** — used sparingly: CTAs, numbered steps, highlighted words
- **Editorial luxury** — DM Serif Display for headlines gives a high-end magazine feel
- **Cinematic photography** — full-bleed images with heavy dark overlays, dramatic lighting, no stock-photo aesthetic
- **Minimal UI chrome** — thin 1px borders, subtle card backgrounds, no heavy shadows or gradients on cards
- **Ken-Burns hero** — slow zoom + crossfade between two background images on the hero

---

## Image Prompt (for Midjourney, DALL-E, Firefly, etc.)

### Hero / Full-bleed backgrounds
```
Cinematic dark photograph, [SUBJECT], dramatic low-key studio lighting,
deep shadows, warm near-black background (#0e0d0c), subtle red-cherry
accent light (#9b2335) from one side, high contrast, editorial luxury
feel, 16:9 aspect ratio, photorealistic, no text, no logos,
ultra-wide shot, anamorphic lens bokeh, muted color grading
```

### Workshop / People scenes
```
Professional enterprise AI workshop setting, small team of 4–6 people
around a dark conference table, laptops and whiteboards, dramatic
overhead directional lighting, warm dark tones, cherry red accent
highlights on screens or walls (#9b2335), cinematic editorial style,
photorealistic, no text, no visible logos, shallow depth of field
```

### Technology / Abstract
```
Abstract enterprise technology visualization, dark near-black background,
glowing data flows or holographic interfaces, deep cherry red (#9b2335)
and warm white light accents, architectural depth, cinematic moody
atmosphere, ultra-high detail, no text, photorealistic render
```

### Architecture / Infrastructure
```
Modern server room or cloud data center corridor, dramatic perspective,
cool blue-white lighting with warm red accent reflections, deep shadows,
near-black background, editorial luxury photography style, no people,
no text, 16:9, cinematic depth of field
```

---

## Existing Image References (in `/static/images/`)

| File | Description |
|------|-------------|
| `shaping-city-vision.webp` | Dark urban skyline — used as hero background A |
| `shaping-hologram.webp` | Holographic display in dark studio — hero B / method card |
| `shaping-server-corridor.webp` | Server room corridor with dramatic lighting |
| `shaping-team-workshop.webp` | Team in workshop setting |
| `intelligent-enterprise-cube.webp` | Abstract enterprise architecture cube |
| `workshop-goal.webp` | Goal/discovery workshop — has embedded text |
| `workshop-concept.webp` | Concept sprint workshop — has embedded text |
| `workshop-decision.webp` | Prototype sprint — has embedded text |

> **Note:** Images used in cropped contexts (method cards, nav mega menu thumbnails)
> should be text-free. Workshop images (`workshop-*.webp`) have embedded text — only
> use them in full-size or contain-fit contexts, not with `object-fit: cover`.

---

## Logo

File: `/static/images/logo.webp`  
Usage: white on dark backgrounds. Nav height: `60px`, footer height: `60px`.

---

## Do / Don't

| ✅ Do | ❌ Don't |
|-------|---------|
| Warm near-black backgrounds | Pure `#000000` or cool greys |
| Single cherry red accent | Multiple accent colors |
| DM Serif Display for headlines | Bold or heavy weight on serif |
| Inter for all body / UI text | Mix in a third typeface |
| Dramatic directional lighting in photos | Flat, bright stock photography |
| Thin 1px borders | Heavy drop shadows or thick borders |
| Text-free images in cropped card slots | Images with text overlays in thumbnails |
