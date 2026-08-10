---
name: The Widening Cabinet
description: A reverse-perspective shelf cabinet in deep malachite ink, holding Andrew Doni's practice as an inventory rather than a feature list.
colors:
  malachite: "#12271f"
  malachite-mid: "#1f3a2e"
  malachite-deep: "#081911"
  jade: "#7fae9b"
  jade-deep: "#2f5c46"
  cinnabar: "#c4463a"
  cinnabar-deep: "#9c342b"
  bone: "#f3e9d6"
  bone-dim: "#cbbfa4"
  celadon: "#d9e3d6"
  terra: "#e2a08c"
  ink: "#0a140f"
  ink-dim: "#3f5449"
typography:
  display:
    fontFamily: '"Petrona", Georgia, serif'
    fontWeight: 500
    letterSpacing: normal
  body:
    fontFamily: '"Petrona", Georgia, serif'
    fontWeight: 400
    lineHeight: 1.8
  label:
    fontFamily: '"Fragment Mono", ui-monospace, monospace'
    letterSpacing: "0.1em"
rounded:
  all: "0px"
spacing:
  panel-x: "1.5rem"
  panel-x-md: "2rem"
  section-gap: "3.5rem"
components:
  button-primary:
    backgroundColor: "{colors.cinnabar}"
    textColor: "{colors.bone}"
    rounded: "{rounded.all}"
    padding: "0.75rem 1.5rem"
  button-primary-hover:
    backgroundColor: "{colors.cinnabar-deep}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.bone}"
    rounded: "{rounded.all}"
    padding: "0.75rem 1.5rem"
  shelf-panel:
    backgroundColor: "{colors.bone}"
    textColor: "{colors.ink}"
    rounded: "{rounded.all}"
    padding: "1.75rem 2rem"
---

# Design System: The Widening Cabinet

## Overview

**Creative North Star: "The Widening Cabinet"**

The site is read as a reverse-perspective cabinet of curiosities, a chaekgeori shelf screen, that Andrew opens for the visitor one compartment at a time. Each section is a shelf: a bone-lined compartment set into a deep malachite cabinet body, holding the proven objects of his practice (real projects, real infrastructure, Docalli) rather than marketing claims. The cabinet widens as it's read (later shelves carry more weight and more content than the entry shelf), dramatizing the idea that his practice opens up the deeper you look.

This world replaced an earlier dark-glassmorphism identity (frosted panels, gradient blob background, chromatic-aberration nav) that read as a generic, safe developer-portfolio default. The chaekgeori direction was chosen deliberately over a "safer," better-recognized assigned direction (a topographic-survey world) via the project's decision board, with the explicit risk noted that its lineage might not register instantly with recruiters. The build leans on flat ink-outline illustration, hard architectural geometry, and content-first restraint to keep it credible rather than decorative.

**Key Characteristics:**
- Deep malachite ink as the dominant field at page scale, never a cream or pastel ground
- Zero cast shadows anywhere; depth comes from outline, layering, and the taper geometry itself
- Hard corners everywhere, no border-radius, no exceptions
- Cinnabar red rationed to a single accent role: one primary CTA, active nav state, hover marks
- Bone-lined "shelf compartments" hold every card, form, and content block

## Colors

The palette is a five-color mineral-pigment system: one deep dominant ink, one warm neutral for compartment interiors, one rationed accent, and two supporting tones used sparingly.

### Primary
- **Malachite** (`#12271f`): The dominant field color for the entire page, body background, cabinet structure. Carries roughly 55-65% of the surface.
- **Malachite Mid** (`#1f3a2e`): Structural surfaces on the dark field, the navbar, dark-toned shelf panels (Hero has none; used for any dark compartment).

### Secondary
- **Cinnabar** (`#c4463a`): The single rationed accent. Used only for: the primary Hero CTA, active nav underline, link hover states, the seal mark, form focus rings. Never used for large fields.

### Tertiary
- **Jade** (`#7fae9b`) and **Terra** (`#e2a08c`): Reserved, low-frequency tones from the source palette; not yet load-bearing anywhere in the built page. Available for future signature moments (e.g. a featured-project highlight) without expanding the palette.
- **Jade Deep** (`#2f5c46`): A darker, contrast-safe variant of jade for text/borders on bone (plain jade fails contrast at ~2:1 on bone; jade-deep passes at ~6.4:1). Used for the "In Production" project status tag.

### Neutral
- **Bone** (`#f3e9d6`): Compartment lining, every ShelfPanel's fill, and primary text color on the dark malachite field.
- **Bone Dim** (`#cbbfa4`): Secondary text and hairline borders on the dark field, tinted from bone, never gray.
- **Ink** (`#0a140f`): Primary text on bone compartments.
- **Ink Dim** (`#3f5449`): Secondary text on bone compartments, tinted from malachite, never gray.

### Named Rules
**The One Accent Rule.** Cinnabar appears at most once per viewport as a filled surface (a button or an active mark). Everywhere else it is text or a 1-2px line, or absent.

## Typography

**Display Font:** Petrona (serif), with Georgia as fallback
**Body Font:** Petrona (serif), the same family carries both display and body, editorial-catalog style
**Label/Mono Font:** Fragment Mono, for every piece of secondary/structural text: nav items, tags, form labels, section dividers, item numbers

**Character:** Petrona gives the page a museum-catalog-plate voice, an old-style serif with enough warmth to avoid reading as corporate, set at a deliberately generous line-height (1.8) in body copy. Fragment Mono carries every "index card" moment: it is never decorative, only ever a label, a tag, or a coordinate.

### Hierarchy
- **Display** (500 weight, `text-6xl` to `text-8xl`, tight leading `0.94`): Hero name only.
- **Headline** (Petrona regular, `text-4xl` to `text-5xl`): Section titles (Sobre Mim, Habilidades, Projetos, Contate-me).
- **Title** (Petrona regular, `text-2xl` to `text-3xl`): Compartment/card headings (project titles, domain names).
- **Body** (Petrona regular, `text-[15px]` to `text-[17px]`, leading 1.8, max ~68ch): Paragraph copy.
- **Label** (Fragment Mono, 10-13px, tracked 0.08em to 0.2em, uppercase): Nav items, tags, form labels, dividers, item numbers.

### Named Rules
**The No Kicker Rule.** Section dividers (the hairline rule with a centered label like "HABILIDADES" and small corner ticks) are the only permitted label-above-heading device, and they exist because they're diegetic to the cabinet's own catalog-plate grammar, not a generic marketing eyebrow.

## Layout

Single-column content column, `max-w-6xl`, with generous section padding (`pb-24`, `px-5` mobile, `px-8` desktop). Each major section opens with a `ShelfDivider` (a hairline rule with small corner ticks) naming the shelf, functioning as the cabinet's own index tab. Grids: Skills is a 2-column domain grid (1-column on mobile); Projects is a 4-column item grid at desktop, collapsing through 2 and then 1 column. No sidebar, no sticky decorative chrome beyond the fixed top nav.

## Elevation & Depth

Flat by construction: **zero box-shadow anywhere in the system.** Depth is conveyed entirely by: (1) outline/border weight (hairline `joinery` borders), (2) the reverse-perspective taper on every `ShelfPanel` (a `clip-path` trapezoid, 3.5% narrower at the top than the bottom, so panels visually "open toward the viewer"), and (3) color layering between the malachite field and bone compartments.

### Named Rules
**The No-Shadow Rule.** If a component needs to read as "raised," widen its taper or strengthen its border. Never reach for `box-shadow`.

## Shapes

**The No-Curve Rule.** `border-radius: 0` is enforced globally (`* { border-radius: 0 !important }` in `index.css`); every corner in the system is hard. The only curvature anywhere is in hand-authored SVG icon strokes (`CabinetIcons.jsx`), which use rounded line caps for an inked-brush quality; this is a line-quality choice, not a shape exception.

Every content panel (`ShelfPanel`) carries the reverse-perspective taper by default (`taper` prop, on unless explicitly turned off, as in the Contact form). The taper is a `clip-path: polygon(3.5% 0%, 96.5% 0%, 100% 100%, 0% 100%)`, subtle enough to never clip real text; generous inner padding keeps content clear of the tapered corners.

## Components

### Buttons
- **Shape:** Hard rectangle, no radius.
- **Primary:** Cinnabar fill, bone text, mono uppercase tracked label, `hover:bg-cinnabar-deep`.
- **Secondary:** Transparent with a bone-dim/40 border; on hover, fills bone with ink text (a full color-swap, not a tint).

### Shelf Panels (signature component)
- **Shape:** Reverse-perspective trapezoid via `clip-path`, hard corners, `joinery` hairline border.
- **Tone:** `bone` (light, ink text) is used for nearly every content compartment; `malachite-mid` (dark, bone text) is reserved for structural chrome.
- **Behavior:** No hover lift, no shadow. The panel's presence comes from its taper and fill, not motion.

### Shelf Dividers
- Hairline rule with two small square corner ticks and a centered mono label naming the section, the cabinet's own index tab, appearing once per major section.

### Cards (Projects, Skills domains)
- Built entirely from `ShelfPanel`. Project cards carry an "Item 0N" mono index label (diegetic to the inventory/catalog grammar, not a generic section-number device). Skills domain cards lead with a one-line judgment-oriented description before listing tools as secondary mono tags: tools are evidence, not the headline.

### Navigation
- Fixed top bar, `malachite-deep` fill, hairline bottom border. Nav items are mono, uppercase, tracked; the active item gets a cinnabar underline that animates in on selection. No blur, no glass, no pill background.

### Forms (Contact)
- A single non-tapered `ShelfPanel` (bone) holding transparent-background inputs with an ink border that turns cinnabar on focus. Submit button is solid ink, turning cinnabar on hover.

## Do's and Don'ts

### Do:
- **Do** keep malachite as the dominant page-scale field; cream/bone is a compartment lining, never the page background.
- **Do** ration cinnabar to one live accent per viewport.
- **Do** keep every card's content inset far enough from its taper that text never nears a clipped corner.
- **Do** use Fragment Mono for anything that is a label, tag, or index; never for a heading.
- **Do** write all copy without the em dash character; use a comma, colon, period, or parentheses instead.

### Don't:
- **Don't** add `border-radius`, `box-shadow`, or `backdrop-filter` blur anywhere; these were the identity of the previous glassmorphism world and are explicitly retired.
- **Don't** let the shelf/cabinet motif become decorative wallpaper; every taper and divider should correspond to a real content boundary, not a background texture.
- **Don't** introduce a second display typeface; Petrona carries both display and body by design.
