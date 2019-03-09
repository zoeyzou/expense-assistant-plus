import * as React from 'react';
import { TiHomeOutline } from 'react-icons/ti';
import { theme } from 'src/utils/theme';

interface HomeIconProps {
  className?: string;
  color?: string;
  size?: string;
  style?: React.CSSProperties;
}

const HomeIcon: React.FunctionComponent<HomeIconProps> = ({
  className,
  color,
  size,
  style,
}) => {
  return (
    <TiHomeOutline
      className={className}
      color={color}
      size={size}
      style={style}
    />
  );
};

HomeIcon.defaultProps = {
  color: theme.color.black,
  size: theme.fontSize.lg,
};

export default HomeIcon;
