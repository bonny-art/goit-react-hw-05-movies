export const theme = Object.freeze({
  colors: {
    background: '#0E253D',
    darkText: '#163A59',
    main: '#517DB9',
    lightText: '#B1D2FF',
    white: '#ffffff',
  },
  fontSizes: {
    xxs: '14px',
    xs: '16px',
    small: '18px',
    medium: '24px',
    large: '32px',
    xl: '36px',
    xxl: '48px',
  },
  spacing: value => `${4 * value}px`,
  animation: {
    cubicBezier: '0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)',
  },
});
