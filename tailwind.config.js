// Tailwind theme: fonts + brand colors (red, yellow, black)
tailwind.config = {
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
      colors: {
        brand: { DEFAULT: '#C1121F', dark: '#8F0D17', deeper: '#640A11' },
        flame: { DEFAULT: '#FF7A00', ember: '#FF4500', glow: '#FFB000' },
        ink: { DEFAULT: '#0A0A0A', soft: '#161616', line: '#2A2A2A' },
        sun: { DEFAULT: '#FFC933', soft: '#FFE9A8', pale: '#FFF6D6' }
      }
    }
  }
}
