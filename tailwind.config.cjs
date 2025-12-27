module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        space: '#0b0f1a',
        neon: '#39ffca',
        electric: '#7c5cff'
      },
      boxShadow: {
        glow: '0 4px 30px rgba(124,92,255,0.25)'
      }
    }
  },
  plugins: []
}
