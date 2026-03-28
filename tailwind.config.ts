import type { Config } from 'tailwindcss'

export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'tb-forest-ink': '#1C2E25',
                'tb-deep-forest': '#1E3A2F',
                'tb-jade': '#2E6B4F',
                'tb-sienna': '#E05C2A',
                'tb-ember': '#F07840',
                'tb-sage-mist': '#C4D4C8',
                'tb-sand': '#F5EDE0',
                'tb-warm-linen': '#FAF6F0',
            },
            fontFamily: {
                syne: ['Syne', 'sans-serif'],
                sans: ['DM Sans', 'sans-serif'],
                mono: ['DM Mono', 'monospace'],
                outfit: ['Outfit', 'sans-serif'],
                zain: ['Zain', 'sans-serif'],
            },
            boxShadow: {
                'neo': '4px 4px 0px 0px rgba(28, 46, 37, 1)',
                'neo-hover': '8px 8px 0px 0px rgba(28, 46, 37, 1)',
                'neo-light': '4px 4px 0px 0px rgba(245, 237, 224, 1)',
                'neo-light-hover': '8px 8px 0px 0px rgba(245, 237, 224, 1)',
            },
            borderWidth: {
                '3': '3px',
                '4': '4px',
            }
        },
    },
    plugins: [],
} satisfies Config
