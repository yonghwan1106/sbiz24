import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-noto-sans-kr)', 'sans-serif'],
      },
      colors: {
        lacquer: {
          black: '#1a0f0a',      // 흑칠 (깊은 검정)
          brown: '#4a2c1f',      // 옻칠 갈색
          red: '#8b3a3a',        // 주칠 (붉은 옻칠)
          gold: '#d4af37',       // 금박
          'mother-pearl': '#e8f4f8', // 자개 (진주빛)
          warm: '#2d1810',       // 따뜻한 어두운 갈색
        },
        traditional: {
          amber: '#d97706',      // 호박색
          'deep-brown': '#78350f', // 깊은 갈색
          cream: '#fef3c7',      // 크림색
        },
      },
    },
  },
  plugins: [],
};

export default config;
