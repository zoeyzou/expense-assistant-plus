import styled from 'src/utils/styled-components';
import { StyledComponentsProps } from 'src/models/styled-components-props';

export type FlexProps = {
  flexFlow?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justifyContent?: string;
  alignItems?: string;
  maxHeight?: string;
  flex?: string;
  overflowX?: string;
  overflowY?: string;
};

const Flex = styled.div<StyledComponentsProps & FlexProps>`
  display: flex;
  flex-flow: ${({ flexFlow }) => flexFlow || 'row'};
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  max-height: ${({ maxHeight }) => maxHeight};
  flex: ${({ flex }) => flex};
  overflow-x: ${({ overflowX }) => overflowX};
  overflow-y: ${({ overflowY }) => overflowY};

  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
`;

export default Flex;
