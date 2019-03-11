import * as React from 'react';
import Flex from './Flex';
import Text from './Text';

interface ErrorIndicatorProps {
  icon?: React.ReactNode;
  message?: string;
}

const ErrorIndicator: React.FunctionComponent<ErrorIndicatorProps> = ({
  icon,
  message,
}) => {
  return (
    <Flex flexFlow='column'>
      {icon && icon}
      <Text>{message && message}</Text>
    </Flex>
  );
};

ErrorIndicator.defaultProps = {
  message: 'Oops, seems like something went wrong. Why not refresh?',
};

export default ErrorIndicator;
