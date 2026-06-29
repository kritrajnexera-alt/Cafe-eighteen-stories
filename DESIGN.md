---
name: Eighteen Stories
description: Premium Literary Cafe on Tavra Road, Bharuch
colors:
  ink: "#0C0A08"
  gilt: "#D4AF37"
  parchment: "#F5F0E8"
  vellum: "#161310"
  bronze: "#8B7355"
  edge: "#2A2318"
typography:
  display:
    fontFamily: "Cinzel, serif"
    fontSize: "clamp(3rem, 12vw, 6rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.05em"
  headline:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(1.875rem, 4vw, 2.25rem)"
    fontWeight: 600
    lineHeight: 1.2
    fontStyle: "italic"
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.8
  label:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "11px"
    fontWeight: 400
    letterSpacing: "0.3em"
    textTransform: "uppercase"
rounded:
  sm: "0px"
  md: "0px"
  focus: "2px"
spacing:
  section: "128px"
  container: "24px"
  block: "64px"
components:
  button-primary:
    backgroundColor: "transparent"
    textColor: "{colors.gilt}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "12px 28px"
  button-primary-hover:
    backgroundColor: "{colors.gilt}"
    textColor: "{colors.ink}"
  card-default:
    backgroundColor: "{colors.vellum}"
    rounded: "{rounded.sm}"
    padding: "32px"
---

# Design System: Eighteen Stories

## 1. Overview

**Creative North Star: "The Gilded Chapter"**

A literary cafe design that treats every page as a leaf from an antique book bound in gold. The palette lives entirely in the dark-warm register — near-black ink backgrounds, antique gold accents, parchment-white text — conjuring the feeling of a candlelit reading room where the espresso is as carefully crafted as the prose on the shelves.

This system explicitly rejects: generic AI-generated cafe templates with purple gradients and stock imagery, Inter-only font stacks, bright sterile chain aesthetics, template-driven hero-metric layouts, rounded bubbly soft-startup visual language, glassmorphism, gradient text, side-stripe borders, identical card grids, and bounce animations.

**Key Characteristics:**
- Dark-by-default with warm gold thread running through every page
- Editorial chapter-book layout: numbered sections, pull quotes, generous whitespace
- Zero rounded corners — every surface is square
- No drop shadows — depth via tonal layering (vellum on ink)
- Gold borders at low opacity (10-40%) as the only surface delineation
- Typographic contrast: Cinzel display (geometric serif) + Cormorant Garamond italic (editorial) + Space Grotesk label (technical) + Inter body (readable)

## 2. Colors: The Gilt Archive

Four-color storytelling: ink as the room, gilt as the candlelight, parchment as the page, vellum as the tabletop.

### Primary
- **Gilt** (#D4AF37): The single accent — CTAs, active nav, underlines, dividers, decorative chapter numerals. Used at ≤10% of any given screen. Opacity variations (08-60%) create hierarchy without introducing new hues.

### Neutral
- **Ink** (#0C0A08): Body background. A warm near-black that reads as a room, not a void. Never pure #000.
- **Parchment** (#F5F0E8): All body text, nav items at rest (at 40-80% opacity for secondary hierarchy).
- **Vellum** (#161310): Card and container surfaces. One step above ink — enough contrast to delineate surfaces without needing borders or shadows.
- **Bronze** (#8B7355): Secondary accent — used in the gold underline gradient tail, secondary decorative elements.
- **Edge** (#2A2318): Border color at full opacity — used as the base for 10% opacity borders that define surface edges without visual noise.

### Named Rules
**The Gilt Rarity Rule.** Gold (#D4AF37) appears on ≤10% of any given screen. Its rarity gives it weight. If a section has a gold CTA button, the section heading should not also be gold. One accent moment per viewport.

**The Opacity Hierarchy Rule.** Secondary text is always parchment at 30-40% opacity. Tertiary (meta, footnotes) is 20%. This creates a natural typographic hierarchy without a second color.

## 3. Typography

**Display Font:** Cinzel (geometric serif, all-caps)
**Headline Font:** Cormorant Garamond (old-style serif, italic)
**Body Font:** Inter (humanist sans-serif)
**Label Font:** Space Grotesk (geometric sans-serif, uppercase, widely tracked)

**Character:** The pairing spans three centuries of typographic reference — Cinzel evokes engraved book covers, Cormorant Garamond feels like a novel's interior, Space Grotesk reads as modern archival labels, and Inter recedes into readability. The contrast between serif display and sans body is intentional and wide.

### Hierarchy
- **Display** (400, clamp(3rem, 12vw, 6rem), 1, 0.05em): Hero page titles only. Always all-caps. Max 96px. Never used for body or subheadings.
- **Headline** (600 italic, clamp(1.875rem, 4vw, 2.25rem), 1.2): Section titles, pull quotes, chapter headings. Never all-caps.
- **Body** (400, 15px, 1.8): Running text. Max line length 65-75ch via max-width containers.
- **Label** (400, 11px, 1, 0.3em uppercase): Navigation, button text, metadata, section markers. The only all-caps category besides Display.

### Named Rules
**The One Face Rule.** Each typographic role has exactly one font. Cinzel is never used for body text. Inter is never used for headings. Space Grotesk never appears in sentence case.

**The No-Inter-Only Rule.** Inter carries the body but never does hero or headline duty. A site built on Inter alone reads as generic tech; the serif pairing is what makes this feel like a literary cafe.

## 4. Elevation

The system is flat by design. Depth is conveyed entirely through tonal layering — vellum (#161310) surfaces stacked against ink (#0C0A08) backgrounds. The L difference (~7 points in OKLCH) creates enough separation without shadows.

Borders at 10% gold opacity (edge #2A2318 at 10% = #D4AF37/10) provide surface delineation without adding visual weight. On hover, cards shift to 30% gold border opacity for a subtle interactive cue.

There are no box-shadows in the system. Not even on hover. The flatness respects the printed-page metaphor — books do not cast shadows on their own pages.

### Named Rules
**The No-Shadow Rule.** Zero box-shadows anywhere in the system. If a surface needs to lift, it shifts border opacity or background tone. Shadow is never the answer.

## 5. Components

### Buttons
- **Shape:** Square corners (0px radius).
- **Primary (border):** Transparent background, gilt border at 40% opacity, gilt text, label typography. Hover flips: gilt fills the background, text becomes ink. Transition at 500ms with cubic-bezier(0.32, 0.72, 0, 1).
- **Primary (text):** Link-style — gilt text, label typography, no border. Arrow → appears on right. Hover: text shifts to parchment, arrow shifts right 1px.
- **Icon-only:** WhatsApp FAB — gilt circle (48px), ink icon, subtle gilt shadow glow (`rgba(212,175,55,0.20)`). Hover intensifies glow. Scale on hover/tap via Framer Motion.

### Cards / Containers
- **Corner Style:** Square (0px).
- **Background:** Vellum (#161310).
- **Border:** 1px solid gold at 10% opacity. Hover: gold at 30% opacity. Transition at 500ms.
- **Internal Padding:** 32px.
- **Shadow Strategy:** None. Flat by default, tonal layering only.

### Navigation
- **Desktop:** Horizontal bar, fixed top, ink at 95% opacity with 24px backdrop-blur. Bottom border 1px gold at 10%. Links are label typography in parchment at 40% opacity; active page gets gilt. Hover transitions to 80% opacity over 500ms.
- **Mobile:** Slide-down overlay from nav bar. Same typography. Links stagger in at 80ms intervals. Esc key dismisses.
- **Logo:** Vertical gold rule (1px × 20px) beside "Eighteen Stories" wordmark. "Stories" in gilt.

### Footer
- **Layout:** Two-column (brand + links) on large screens. Stacked on mobile. Top border gold at 10%.
- **Links:** Parchment at 30% opacity, hover to gilt. Label typography for headings.
- **Social:** Three uppercase tracked labels (Instagram, Zomato, Facebook) at 20% opacity, hover to gilt.

### Image Gallery
- **Grid:** Masonry-inspired with 2 span variants. Square borders. Aspect ratio maintained.
- **Overlay:** Gradient from ink/90 at bottom to transparent, revealed on group hover. Label appears from below with translate-y transition. Duration 500ms.
- **Hover zoom:** Scale 105% on image, 700ms transition.

### Divider
- **Style:** Full-width 1px line. Gradient from transparent → gilt → transparent. Opacity 25%.

### Gold Underline
- **Style:** Gradient from gilt to bronze. Width 0 at rest, animates to 100% on group hover. Height 1px. Cubic-bezier(0.32, 0.72, 0, 1), 600ms.

### Chapter Numerals
- **Style:** Cinzel, clamp(5rem, 20vw, 14rem), letter-spacing 0.1em, gilt at 12% opacity. Positioned as floating watermarks. Used as: sequential numbering (01, 02, 03...) on sequenced content, initial letters (M, G, S, C) on standalone pages.

## 6. Do's and Don'ts

### Do:
- **Do** use gilt (#D4AF37) sparingly — one accent moment per viewport.
- **Do** use opacity variations of parchment for text hierarchy: 100% → 40% → 20%.
- **Do** keep all corners square (0px radius).
- **Do** convey depth via tonal layering (vellum on ink), never via shadows.
- **Do** use the custom ease curve cubic-bezier(0.32, 0.72, 0, 1) for all motion.
- **Do** respect `prefers-reduced-motion` — all animations degrade gracefully.
- **Do** use the four-font stack: Cinzel for display, Cormorant Garamond italic for headlines, Space Grotesk uppercase for labels, Inter for body.
- **Do** use chapter numerals as floating watermarks — they are a signature identity element.

### Don't:
- **Don't** use pure black (#000) anywhere. Ink (#0C0A08) is the darkest value.
- **Don't** introduce rounded corners, bubbly shapes, or pill buttons.
- **Don't** use box-shadows, glassmorphism, or backdrop-filter blur on surfaces (nav bar backdrop-blur is the only exception).
- **Don't** round any surface corners — the sole exception is focus-visible indicators which use a 2px radius for accessibility.
- **Don't** use gradient text (`background-clip: text`) — emphasis via weight or size.
- **Don't** use side-stripe borders (border-left/right >1px as accent) on cards or callouts.
- **Don't** use bounce, elastic, or spring easing — only the custom cubic-bezier.
- **Don't** create generic 3-column icon grids with identical cards.
- **Don't** nest cards inside cards.
- **Don't** use Inter for headlines or Cinzel for body — each face has exactly one role.
- **Don't** put a small uppercase tracked eyebrow above every section. One or two is voice; every section is template.
- **Don't** use hero-metric layouts (big number + small label + gradient accent).
- **Don't** use the numbered-section-marker pattern (01 · About / 02 · Process) as a default eyebrow. Chapter numbers (01, 02...) are decorative watermarks, not section labels.
- **Don't** let heading text overflow its container at any breakpoint — test clamp scales against copy length.
