import styled from 'src/utils/styled-components';
import { StyledComponentsProps } from 'src/models/styled-components-props';

const HomeWrapper = styled.div<StyledComponentsProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  padding: ${({ margin }) => margin || 'calc(20px + 5vh) calc(20px + 5vw)'};
`;

export default HomeWrapper;
