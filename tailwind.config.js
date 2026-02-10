export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#050505', // Deep Space Background
                primary: '#a855f7', // Electric Purple
                secondary: '#f97316', // Neon Orange
                'glass-card': 'rgba(255, 255, 255, 0.03)',
                'glass-border': 'rgba(255, 255, 255, 0.1)',
                'text-primary': '#ffffff',
                'text-secondary': '#cbd5e1', // Slate-300
                'text-muted': '#94a3b8', // Slate-400
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            animation: {
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 6s ease-in-out infinite',
                'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                'glow-pulse': {
                    '0%, 100%': { opacity: 1 },
                    '50%': { opacity: 0.6 },
                }
            },
            boxShadow: {
                'neon-purple': '0 0 20px rgba(168, 85, 247, 0.5)',
                'neon-orange': '0 0 20px rgba(249, 115, 22, 0.5)',
                'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
            }
        },
    },
    plugins: [],
}
