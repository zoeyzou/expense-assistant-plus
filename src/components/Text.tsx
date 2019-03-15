import styled from 'src/utils/styled-components';
import { StyledComponentsProps } from 'src/models/styled-components-props';

type TextProps = {
  fontSize?: string;
  fontFamily?: string;
  fontWeight?: string;
  fontStyle?: string;
  textAlign?: string;
  display?: string;
  color?: string;
  backgroundColor?: string;
  flex?: string;
};

const Text = styled.div<StyledComponentsProps & TextProps>`
  display: ${({ display }) => display || 'block'};
  font-size: ${({ fontSize, theme }) => fontSize || theme.fontSize.md};
  font-family: ${({ fontFamily, theme }) => fontFamily || theme.font.body};
  font-weight: ${({ fontWeight }) => fontWeight || 'inherit'};
  font-style: ${({ fontStyle }) => fontStyle || 'inherit'};
  text-align: ${({ textAlign }) => textAlign || 'inherit'};
  color: ${({ color, theme }) => color || theme.color.black};
  background-color: ${({ backgroundColor }) => backgroundColor};
  flex: ${({ flex }) => flex};
  word-break: break-all;

  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
`;

export default Text;
