export type Theme = {
  font: Font;
  fontSize: FontSize;
  color: Color;
};

type Font = {
  title: string;
  body: string;
};

type FontSize = {
  sm: string;
  md: string;
  lg: string;
};

type Color = {
  [key: string]: string;
};

export const theme: Theme = {
  font: {
    title: "'Roboto Slab', serif",
    body: "'Montserrat', sans-serif",
  },

  fontSize: {
    sm: '14px',
    md: '18px',
    lg: '24px',
  },

  color: {
    white: '#FFFFFF',
    lightWhite: '#FFEEE4',
    darkOrange: '#CE6D39',
    orange: '#F17F42',
    lightOrange: '#E9A784',
    semiTransparent: 'rgba(255, 255, 255, 0.6)',
    black: '#222222',
    lightGrey: 'lightGrey',
  },
};
