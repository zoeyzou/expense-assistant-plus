import { StyledComponentsProps } from './styled-components-props';

export type IconProps = StyledComponentsProps & {
  className?: string;
  color?: string;
  size?: string;
  style?: React.CSSProperties;
};
