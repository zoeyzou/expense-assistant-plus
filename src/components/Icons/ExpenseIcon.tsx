import * as React from 'react';
import { HomeIconProps } from './HomeIcon';
import { TiClipboard } from 'react-icons/ti';
import { theme } from 'src/utils/theme';

interface ExpenseIconProps extends HomeIconProps {}

const ExpenseIcon: React.FunctionComponent<ExpenseIconProps> = ({
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
