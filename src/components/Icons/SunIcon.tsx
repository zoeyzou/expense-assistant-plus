import * as React from 'react';
import { HomeIconProps } from './HomeIcon';
import { TiWeatherSunny } from 'react-icons/ti';
import { theme } from 'src/utils/theme';

interface SunIconProps extends HomeIconProps {}

const SunIcon: React.FunctionComponent<SunIconProps> = ({
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

SunIcon.defaultProps = {
  color: theme.color.black,
  size: theme.fontSize.lg,
};

export default SunIcon;
