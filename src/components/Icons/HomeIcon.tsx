import * as React from 'react';
import { TiHomeOutline } from 'react-icons/ti';
import { theme } from 'src/utils/theme';
import { IconProps } from 'src/models/icon-props';

const HomeIcon: React.FunctionComponent<IconProps> = ({
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
