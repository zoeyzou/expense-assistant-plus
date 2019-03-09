import * as React from 'react';
import { theme } from 'src/utils/theme';
import { IconProps } from 'src/models/icon-props';

const SunIcon: React.FunctionComponent<IconProps> = ({
  className,
  color,
  size,
  style,
}) => {
  return (
    <svg
      className={className}
      fill={color}
      width={size}
      height={size}
      style={style}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 100 100'
    >
      <path d='M34.25 50.75c.182-9.079 4.431-14.511 13.361-16.662 9.491-2.286 18.543 5.953 18.641 15.266.101 9.546-8.259 14.231-16.521 16.299-10.141 2.539-13.656-7.799-15.588-15.201-.976-3.741-6.764-2.153-5.785 1.595 1.295 4.962 2.332 9.52 5.635 13.57 3.694 4.53 10.16 7.051 15.905 6.066 5.506-.943 11.508-3.54 15.775-7.215 4.645-3.999 6.249-9.126 6.579-15.115.665-12.081-10.949-21.821-22.406-21.568C36.568 28.079 28.5 38.218 28.25 50.75c-.077 3.872 5.923 3.864 6 0zM46.357 10.547c.482 2.719.265 5.518.75 8.25.286 1.612 2.226 2.498 3.69 2.095 1.685-.463 2.381-2.082 2.095-3.69-.482-2.719-.265-5.518-.75-8.25-.286-1.612-2.226-2.498-3.69-2.095-1.684.464-2.381 2.082-2.095 3.69zM74.764 29.09c2.19-1.667 4.163-3.525 6.107-5.469 2.739-2.738-1.504-6.98-4.242-4.242-1.565 1.564-3.128 3.187-4.893 4.531-1.299.988-1.979 2.564-1.077 4.104.751 1.282 2.801 2.069 4.105 1.076zM81 53.25c4.017-.072 7.979-.892 12-.5 3.851.375 3.814-5.628 0-6-4.021-.392-7.983.428-12 .5-3.864.069-3.871 6.07 0 6zM70.659 74.264c1.322 2.765 3.908 4.928 6.22 6.857 1.254 1.047 3.009 1.233 4.242 0 1.078-1.078 1.257-3.193 0-4.242-1.991-1.663-4.226-3.437-5.28-5.643-.706-1.475-2.783-1.851-4.104-1.076-1.498.876-1.783 2.629-1.078 4.104zM45.857 83.547c.479 2.49.77 5.01 1.25 7.5.31 1.607 2.208 2.503 3.69 2.095 1.667-.458 2.404-2.086 2.095-3.69-.479-2.49-.77-5.01-1.25-7.5-.31-1.607-2.208-2.503-3.69-2.095-1.667.459-2.404 2.086-2.095 3.69zM23.341 81.764c1.188-2.005 3.486-3.382 5.423-4.674 1.358-.906 1.94-2.63 1.077-4.104-.79-1.347-2.743-1.985-4.104-1.076-2.816 1.878-5.812 3.852-7.577 6.826-1.979 3.336 3.209 6.352 5.181 3.028zM7.5 53c3.113.187 6.164-.46 9.25-.75 1.628-.153 3-1.249 3-3 0-1.52-1.369-3.153-3-3-3.086.29-6.137.937-9.25.75-3.866-.232-3.844 5.769 0 6zM17.986 24.59c3.156 1.798 5.756 4.285 9.216 5.552 1.537.563 3.284-.617 3.69-2.095.461-1.675-.562-3.128-2.095-3.69-2.872-1.052-5.146-3.446-7.784-4.948-3.367-1.917-6.388 3.267-3.027 5.181z' />
    </svg>
  );
};

SunIcon.defaultProps = {
  color: theme.color.black,
  size: theme.fontSize.lg,
};

export default SunIcon;