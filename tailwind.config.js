/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'bg': 'var(--bg)',
        'fg': 'var(--fg)',
        'muted': 'var(--muted)',
        'card': 'var(--card)',
        'card-border': 'var(--card-border)',
        'ok': 'var(--ok)',
        'ok-ink': 'var(--ok-ink)',
        'bad': 'var(--bad)',
        'bad-ink': 'var(--bad-ink)',
        'accent': 'var(--accent)',
        'accent-contrast': 'var(--accent-contrast)',
        'outline': 'var(--outline)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        base: ['16px', { lineHeight: '1.6' }],
        lg: ['18px', { lineHeight: '1.6' }],
      },
    },
  },
  plugins: [],
}
