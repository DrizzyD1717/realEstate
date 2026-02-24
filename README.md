# LuxePath Estates | Modern Architectural Real Estate

A high-end, multi-page real estate platform built with **Next.js 15**, **TypeScript**, and **Framer Motion**. This project serves as a showcase for modern web development patterns, focusing on minimalist design, dynamic routing, and smooth user interactions.

---

## 🏗 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescript.org/) (Strictly Typed)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (Custom Design System)
- **Animations:** [Framer Motion](https://www.framer.com/motion/) (Scroll-linked & Layout animations)
- **Icons:** [Lucide React](https://lucide.dev/)

---

## 🌟 Key Features

### 1. Dynamic Routing & Data Flow

Utilizes Next.js dynamic segments (`/properties/[id]`) to render individual property pages. Implements the latest **Asynchronous Params** pattern introduced in Next.js 15 to ensure reliable server-side data resolution.

### 2. High-Performance Media

Leverages the `next/image` component for automatic image optimization, lazy loading, and prevention of Layout Shift (CLS), ensuring a "Premium" performance score.

### 3. Centralized Data Architecture

All site content is managed through a single, scalable constants file, demonstrating a data-driven approach that mimics headless CMS integration.

### 4. Advanced UX & UI

- **Interactive Filtering:** Real-time property filtering using Framer Motion's `AnimatePresence` for fluid layout transitions.
- **Bespoke Theme:** A custom monochrome design system defined in `tailwind.config.ts`.
- **Custom Error Handling:** A tailored `not-found.tsx` experience to maintain brand continuity during navigation errors.

---

## 📂 Project Structure

```text
├── app/
│   ├── (root)/              # Shared marketing layout
│   │   ├── properties/      # Listing & Dynamic Detail pages
│   │   ├── services/        # Service-oriented Z-pattern layout
│   │   └── contact/         # Form with state-driven success UI
│   ├── not-found.tsx        # Custom 404 Experience
│   └── globals.css          # Design system foundations
├── components/              # Atomic UI components
├── constants/               # Centralized data repository
└── tailwind.config.ts       # Custom color palette & design tokens
```
