export type Theme = {
  font: Font;
  color: Color;
};

type Font = {
  logo: string;
  title: string;
  body: string;
};

type Color = {
  [key: string]: string;
};

export const theme: Theme = {
  font: {
    logo: '',
    title: "",
    body: "",
  },
  color: {

  },
};