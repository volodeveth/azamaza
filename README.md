# Azamaza — Marketplace of Verified Services

Adaptive website header with search functionality built on Next.js as a frontend developer test assignment.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Fonts:** Inter (body), Onest (buttons/labels), Helvetica Neue (logo)

## Architecture

```
src/
├── app/
│   ├── layout.tsx          — Root layout with fonts setup
│   ├── page.tsx            — Main page composition
│   ├── globals.css         — Design tokens & global styles
│   └── api/search/
│       └── route.ts        — POST endpoint for search
├── components/
│   ├── Header/             — Logo, navigation, burger menu
│   ├── Hero/               — Hero section with background image
│   ├── Categories/         — Dynamic category buttons from mock data
│   ├── SearchForm/         — Form with Destination, Service type, Date picker
│   │   ├── SearchForm.tsx          — Form container, validation, submit logic
│   │   ├── DestinationInput.tsx    — Text input with clear button
│   │   ├── ServiceTypeDropdown.tsx — Custom dropdown with keyboard nav
│   │   └── DatePicker.tsx          — Native date picker with custom UI
│   ├── SearchResults/      — Results display after successful search
│   └── ui/                 — Reusable UI components (Icons, ImageOverlay)
├── hooks/
│   ├── useClickOutside.ts  — Detects clicks outside a ref element
│   └── useSearch.ts        — Search state management (loading/error/success)
├── data/
│   ├── categories.ts       — Mock categories & service types
│   └── searchResults.ts    — Mock search results
└── types/
    └── index.ts            — TypeScript interfaces
```

## Key Decisions

- **Component separation:** Each UI block is an isolated component with its own responsibility (Header, Hero, Categories, SearchForm). Form inputs are further separated into individual components for reusability.

- **Custom hooks:** `useSearch` encapsulates API call logic and state management (loading/error/success). `useClickOutside` handles dropdown/modal dismissal — extracted as a reusable hook.

- **Controlled form:** All form fields are managed via React state with per-field validation. Form data flows top-down from SearchForm to child input components.

- **API route:** `/api/search` is a Next.js Route Handler that accepts POST requests, validates fields, simulates network delay, and returns filtered mock data.

- **Image overlays:** Menu, popup, and categories page are displayed as image overlays (as per requirements — these blocks don't need to be coded). Each overlay supports click-outside dismissal and keyboard Escape.

- **Mobile-first approach:** The layout is built for 400px mobile screens and scales up to 768px (tablet). Desktop version is optional and noted separately.

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Responsive Breakpoints

| Breakpoint | Description |
|---|---|
| 400px | Mobile — vertical form, burger menu |
| 768px | Tablet — adjusted spacing |
| 1280px+ | Desktop (optional) |
