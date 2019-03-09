import * as React from 'react';
import { HomeIconProps } from './HomeIcon';
import { TiWeatherSunny } from 'react-icons/ti';
import { theme } from 'src/utils/theme';

interface AddIconProps extends HomeIconProps {}

const AddIcon: React.FunctionComponent<AddIconProps> = ({
  className,
  color,
  size,
  style,
}) => {
  return (
    <TiWeatherSunny
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
