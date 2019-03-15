import * as React from 'react';
import styled from 'src/utils/styled-components';
import { StyledComponentsProps } from 'src/models/styled-components-props';
import Flex, { FlexProps } from 'src/components/Flex';

type CardWrapperProps = StyledComponentsProps &
  FlexProps & {
    className?: string;
  };

const _CardWrapper: React.FunctionComponent<CardWrapperProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <Flex padding='calc(20px + 3vh) calc(20px + 5vw)' height='100%'>
      <Flex
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)' }}
        height='100%'
      >
        <Flex flexFlow='column' padding='2% 10%'>
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};

const TableWrapper = styled(_CardWrapper)``;

export default TableWrapper;
