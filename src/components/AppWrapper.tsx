import styled from 'src/utils/styled-components';
import { StyledComponentsProps } from 'src/models/styled-components-props';

const AppWrapper = styled.div<StyledComponentsProps>`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

export default AppWrapper;
