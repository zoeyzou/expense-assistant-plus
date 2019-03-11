import styled from 'src/utils/styled-components';
import { StyledComponentsProps } from 'src/models/styled-components-props';

type TextProps = {
  fontSize?: string;
  fontFamily?: string;
  fontWeight?: string;
  fontStyle?: string;
  display?: string;
};

const Text = styled.div<StyledComponentsProps & TextProps>`
  display: ${({ display }) => display || 'block'};
  font-size: ${({ fontSize, theme }) => fontSize || theme.fontSize.md};
  font-family: ${({ fontFamily, theme }) => fontFamily || theme.font.body};
  font-weight: ${({ fontWeight }) => fontWeight || 'inherit'};
  font-style: ${({ fontStyle }) => fontStyle || 'inherit'};

  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
`;

export default Text;
