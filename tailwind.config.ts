import type { Config } from "tailwindcss"

/**
 * Tailwind v4 primary config lives in `src/app/globals.css` (@theme).
 * This file exists for tooling / plugins that expect `tailwind.config.*`.
 */
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
}

export default config
