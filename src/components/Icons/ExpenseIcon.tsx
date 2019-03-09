import * as React from 'react';
import { TiClipboard } from 'react-icons/ti';
import { theme } from 'src/utils/theme';
import { IconProps } from 'src/models/icon-props';

const ExpenseIcon: React.FunctionComponent<IconProps> = ({
  className,
  color,
  size,
  style,
}) => {
  return (
    <TiClipboard
      className={className}
      color={color}
      size={size}
      style={style}
    />
  );
};

ExpenseIcon.defaultProps = {
  color: theme.color.black,
  size: theme.fontSize.lg,
};

export default ExpenseIcon;
