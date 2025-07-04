# HarithaSaviya Website

This is a modern web application built with [Next.js](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/), and [Tailwind CSS](https://tailwindcss.com/).

## Features

- ⚡ Fast, server-rendered React with Next.js
- 🎨 Utility-first styling with Tailwind CSS
- 🛠️ Type safety with TypeScript
- 📦 Managed with pnpm
- 🧩 Modular components and hooks

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [pnpm](https://pnpm.io/) (or use npm/yarn)

### Installation

```sh
pnpm install
```

### Development

```sh
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Build for Production

```sh
pnpm build
pnpm start
```

## Project Structure

- `app/` – Application routes and pages
- `components/` – Reusable UI components
- `hooks/` – Custom React hooks
- `lib/` – Utility functions
- `public/` – Static assets
- `styles/` – Global and component styles

## Configuration

- **Next.js:** [`next.config.mjs`](next.config.mjs)
- **Tailwind CSS:** [`tailwind.config.ts`](tailwind.config.ts)
- **TypeScript:** [`tsconfig.json`](tsconfig.json)
- **PostCSS:** [`postcss.config.mjs`](postcss.config.mjs)

## License

MIT