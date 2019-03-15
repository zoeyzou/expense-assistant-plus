import * as React from 'react';
import styled from 'src/utils/styled-components';
import { StyledComponentsProps } from 'src/models/styled-components-props';
import Flex, { FlexProps } from 'src/components/Flex';

type TableWrapperProps = StyledComponentsProps &
  FlexProps & {
    className?: string;
  };

const _TableWrapper: React.FunctionComponent<TableWrapperProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <Flex {...props} padding='10px 0' margin='10px auto' className={className}>
      {children}
    </Flex>
  );
};

const TableWrapper = styled(_TableWrapper)`
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
  max-height: calc(300px + 10vh);
  overflow-y: auto;

  & > :nth-of-type(odd) {
    background-color: ${({ theme }) => theme.color.lightWhite};
  }
`;

export default TableWrapper;
