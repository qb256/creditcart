# CreditCart Design Guidelines

## Design Approach
**Reference-Based: Premium Financial Institutions**
Drawing from Chase.com, AmericanExpress.com, and Capital One's visual language. This is a serious financial marketplace requiring institutional credibility with e-commerce efficiency. NOT a fintech startup aesthetic.

## Typography System
**Font Family:** Inter (Google Fonts - Regular 400, Medium 500, Semibold 600, Bold 700)

**Hierarchy:**
- Hero Headlines: text-5xl to text-6xl, font-bold, tracking-tight
- Section Headers: text-4xl, font-semibold
- Product Card Titles: text-xl, font-semibold
- Body Copy: text-base, font-normal, leading-relaxed
- Fine Print/Legal: text-sm, font-normal
- CTAs: text-base, font-semibold, uppercase tracking-wide

## Layout System
**Spacing Primitives:** Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 (e.g., p-4, gap-8, mb-12)

**Container Strategy:**
- Full-width sections with inner max-w-7xl mx-auto px-6
- Content sections: py-16 to py-24 desktop, py-12 mobile
- Product grids: max-w-6xl for optimal card display

**Grid Patterns:**
- Desktop: grid-cols-3 for product cards (credit cards/loans)
- Tablet: grid-cols-2
- Mobile: grid-cols-1
- Comparison tables: grid-cols-4 desktop, stack mobile

## Component Library

### Navigation Header
Fixed top navigation with subtle shadow on scroll. Logo left, main navigation center (Browse Cards | Personal Loans | Mortgages | Resources), utility right (Search icon, Account, Apply Now CTA). Height: 80px desktop, 64px mobile. Minimal, clean with ample whitespace.

### Hero Section
**Full-width hero with large background image** (60-70vh height). Image should depict confident professional or family in modern, bright setting - conveying financial security. Overlay with subtle navy gradient (opacity-60) for text legibility.

Hero content: Left-aligned within max-w-7xl container. Headline (text-6xl font-bold) + supporting text (text-xl) + dual CTAs (primary "Find Your Card" + secondary "Compare Products"). Buttons with backdrop-blur-md bg-white/10 treatment when on image.

### Product Cards (Credit Cards/Loans)
Clean, elevated cards with subtle shadow (shadow-md hover:shadow-lg transition). Card structure:
- Card issuer logo top (60px height)
- Product name (text-xl font-semibold)
- Key offer highlight badge ("0% APR 18 months")
- 3-4 bullet benefits with checkmark icons
- Star rating + review count
- APR range display (text-sm with disclosure asterisk)
- Primary CTA "View Details" full-width button

Cards: bg-white, border border-gray-200, rounded-lg, p-6, gap-4 internal spacing.

### Comparison Tables
Sticky header with product logos/names horizontally. Rows: APR, Annual Fee, Rewards Rate, Welcome Bonus, Credit Score Required. Alternating row backgrounds for readability. "Select to Compare" checkboxes. Maximum 4 products side-by-side desktop.

### Filter Sidebar (Desktop) / Drawer (Mobile)
Left sidebar (desktop w-64) with filter categories:
- Card Type (Cash Back, Travel, Balance Transfer)
- Credit Score Range (slider component)
- Annual Fee (checkboxes: $0, Under $100, etc.)
- Issuer (multi-select)
- Rewards Rate
Each with collapsible sections, clear active state indicators.

### Trust Indicators Section
Full-width section with 4-column grid showcasing:
- "Bank-Level Security" with shield icon
- "Unbiased Comparisons" with scale icon
- "No Hidden Fees" with document icon
- "Expert Guidance" with person icon
Clean icons (line-style, 48px), supporting text below. py-16 section.

### Application Flow Modal
Full-screen modal overlay with multi-step form (bg-white max-w-3xl centered). Progress indicator top, form fields with clear labels, validation states, "Secure Application" badge with lock icon. Footer with "Previous" and "Continue" buttons.

### Footer
Three-column layout: Company (About, Careers, Press), Products (Cards, Loans, Mortgages, Resources), Legal (Terms, Privacy, Licensing). Bottom row: Copyright, compliance badges (FDIC, Equal Housing), social links. Comprehensive yet organized.

## Elevation & Shadows
- Cards: shadow-md default, shadow-lg hover
- Navigation: shadow-sm
- Modals: shadow-2xl
- Dropdowns: shadow-lg
No harsh shadows - subtle, refined elevation only.

## Interactive States
- Buttons: transform scale-105 on hover, active:scale-95
- Cards: border accent on hover, subtle lift
- Links: underline-offset-4 hover:underline
- Form inputs: border-2 focus state, outline-none with ring-2

## Images Required

**Hero Image:** Professional finance imagery - either confident individual reviewing documents in bright modern office OR diverse family planning together with laptop. Natural lighting, authentic (not stock-looking), conveys trust and capability. Place: Full-width hero background spanning 60-70vh.

**Product Card Logos:** Credit card issuer logos (Chase, Amex, Capital One, Discover, etc.) - 60px height, consistent sizing across all cards.

**Trust Section Icons:** Use Heroicons (outline style) for shield-check, scale, document-check, user-group. 48px size, rendered as inline SVG.

**Category Browse Images:** Optional hero images for category pages (credit cards showing cards fanned out, mortgage showing modern home exterior, loans showing small business) - use same treatment as main hero.

## Spacing & Rhythm
- Section vertical padding: py-16 (desktop), py-12 (mobile)
- Card internal spacing: p-6 with gap-4 for elements
- Button padding: px-8 py-3 for primary, px-6 py-2 for secondary
- Form field spacing: mb-6 between fields
- Grid gaps: gap-6 for product cards, gap-8 for sections