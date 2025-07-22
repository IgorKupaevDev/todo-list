import 'styled-components'

export const theme = {
  colors: {
    primary: '#4f46e5',
    primaryHover: '#4338ca',
    background: '#f8fafc',
    surface: '#ffffff',
    text: '#1f2937',
    textSecondary: '#6b7280',
    border: '#e5e7eb',
    completed: '#a5b4fc'
  },
  radius: {
    md: '0.5rem',
    lg: '1rem'
  },
  shadow: {
    sm: '0 1px 2px rgba(0,0,0,0.05)',
    md: '0 4px 6px rgba(0,0,0,0.1)'
  },
  spacing: (factor: number) => `${factor * 4}px`
} as const

export type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
