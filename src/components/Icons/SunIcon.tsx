import * as React from 'react';
import { TiWeatherSunny } from 'react-icons/ti';
import { theme } from 'src/utils/theme';
import { IconProps } from 'src/models/icon-props';

const SunIcon: React.FunctionComponent<IconProps> = ({
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
