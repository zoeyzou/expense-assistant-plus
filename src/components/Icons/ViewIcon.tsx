import * as React from 'react';
import { theme } from 'src/utils/theme';
import { IconProps } from 'src/models/icon-props';
import { FiEye } from 'react-icons/fi';

const ViewIcon: React.FunctionComponent<IconProps> = ({
  className,
  color,
  size,
  style,
}) => {
  return (
    <FiEye className={className} color={color} size={size} style={style} />
  );
};

ViewIcon.defaultProps = {
  color: theme.color.black,
  size: theme.fontSize.lg,
};

export default ViewIcon;
