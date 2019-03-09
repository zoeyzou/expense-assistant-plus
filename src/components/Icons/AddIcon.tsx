import * as React from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { theme } from 'src/utils/theme';
import { IconProps } from 'src/models/icon-props';

const AddIcon: React.FunctionComponent<IconProps> = ({
  className,
  color,
  size,
  style,
}) => {
  return (
    <IoIosAddCircleOutline
      className={className}
      color={color}
      size={size}
      style={style}
    />
  );
};

AddIcon.defaultProps = {
  color: theme.color.black,
  size: theme.fontSize.lg,
};

export default AddIcon;
