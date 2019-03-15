import * as React from 'react';
import Flex, { FlexProps } from 'src/components/Flex';
import styled from 'src/utils/styled-components';
import { StyledComponentsProps } from 'src/models/styled-components-props';

type TwoColumnRowProps = StyledComponentsProps &
  FlexProps & {
    className?: string;
    flex?: string;
    children?: React.ReactNode;
  };

const _TwoColumnRow: React.FunctionComponent<TwoColumnRowProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <Flex className={className} {...props}>
      {children}
    </Flex>
  );
};

const TwoColumnRow = styled(_TwoColumnRow)`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '60px'};
  padding: ${({ padding }) => padding || '12px 10px'};
  margin: ${({ margin }) => margin};

  justify-content: ${({ justifyContent }) => justifyContent || 'space-between'};

  & > * {
    flex: ${({ flex }) => flex || '1 1 50%'};
  }
`;

export default TwoColumnRow;
