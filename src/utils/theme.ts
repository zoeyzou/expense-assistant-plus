export type Theme = {
  font: Font;
  color: Color;
};

type Font = {
  title: string;
  body: string;
};

type Color = {
  [key: string]: string;
};

export const theme: Theme = {
  font: {
    title: "'Roboto Slab', serif",
    body: "'Montserrat', sans-serif",
  },
  color: {
    lightWhite: '#FFEEE4',
    darkOrange: '#CE6D39',
    orange: '#F17F42',
    lightOrange: '#CE6D39',
    semiTransparent: 'rgba(255, 255, 255, 0.6)',
  },
};
