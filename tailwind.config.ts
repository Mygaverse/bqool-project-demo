import type { Config } from 'tailwindcss';

// Colors/spacing/radius below are read from CSS custom properties emitted by
// Style Dictionary (src/styles/tokens.css), generated from tokens/*.json.
// Run `npm run tokens:build` after changing tokens to regenerate that file.
const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './.storybook/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          500: 'var(--color-brand-500)',
          600: 'var(--color-brand-600)',
        },
        grey: {
          50: 'var(--color-grey-50)',
          200: 'var(--color-grey-200)',
          500: 'var(--color-grey-500)',
          900: 'var(--color-grey-900)',
        },
        success: { 500: 'var(--color-success-500)' },
        warning: { 500: 'var(--color-warning-500)' },
        danger: { 500: 'var(--color-danger-500)' },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          inverse: 'var(--text-inverse)',
        },
        surface: {
          default: 'var(--surface-default)',
          muted: 'var(--surface-muted)',
          border: 'var(--surface-border)',
          selected: 'var(--surface-selected)',
        },
        action: {
          primary: 'var(--action-primary)',
          'primary-hover': 'var(--action-primary-hover)',
        },
        feedback: {
          success: 'var(--feedback-success)',
          warning: 'var(--feedback-warning)',
          danger: 'var(--feedback-danger)',
        },
        toggle: {
          'track-on': 'var(--toggle-track-on)',
          'track-off': 'var(--toggle-track-off)',
          knob: 'var(--toggle-knob)',
        },
        'trend-pill': {
          'positive-bg': 'var(--trend-pill-positive-bg)',
          'positive-fg': 'var(--trend-pill-positive-fg)',
          'negative-bg': 'var(--trend-pill-negative-bg)',
          'negative-fg': 'var(--trend-pill-negative-fg)',
        },
        'delivery-status': {
          delivering: 'var(--delivery-status-delivering)',
          limited: 'var(--delivery-status-limited)',
          'not-delivering': 'var(--delivery-status-not-delivering)',
        },
      },
      spacing: {
        'token-1': 'var(--space-1)',
        'token-2': 'var(--space-2)',
        'token-3': 'var(--space-3)',
        'token-4': 'var(--space-4)',
        'token-6': 'var(--space-6)',
        'token-8': 'var(--space-8)',
      },
      borderRadius: {
        'token-sm': 'var(--radius-sm)',
        'token-md': 'var(--radius-md)',
        'token-lg': 'var(--radius-lg)',
        'token-full': 'var(--radius-full)',
      },
      boxShadow: {
        resting: 'var(--elevation-resting)',
        raised: 'var(--elevation-raised)',
      },
      fontFamily: {
        sans: 'var(--font-family-sans)',
      },
    },
  },
  plugins: [],
};

export default config;
