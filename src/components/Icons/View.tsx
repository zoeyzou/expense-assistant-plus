import * as React from 'react';
import { theme } from 'src/utils/theme';
import { IconProps } from 'src/models/icon-props';
import { FiEye } from 'react-icons/fi';

const HomeIcon: React.FunctionComponent<IconProps> = ({
  className,
  color,
  size,
  style,
}) => {
  return (
    <FiEye className={className} color={color} size={size} style={style} />
  );
};

HomeIcon.defaultProps = {
  color: theme.color.black,
  size: theme.fontSize.lg,
};

export default HomeIcon;
