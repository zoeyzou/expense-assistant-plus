import * as React from 'react';
import { FiUpload } from 'react-icons/fi';
import { theme } from 'src/utils/theme';
import { IconProps } from 'src/models/icon-props';

const UploadIcon: React.FunctionComponent<IconProps> = ({
  className,
  color,
  size,
  style,
}) => {
  return (
    <FiUpload className={className} color={color} size={size} style={style} />
  );
};

UploadIcon.defaultProps = {
  color: theme.color.black,
  size: theme.fontSize.lg,
};

export default UploadIcon;
