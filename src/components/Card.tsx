import styled from 'src/utils/styled-components';
import { StyledComponentsProps } from 'src/models/styled-components-props';

const Card = styled.div<StyledComponentsProps>`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '100%'};
  padding: ${({ padding }) => padding || 'calc(20px + 2vh) calc(20px + 2vw)'};
  margin: ${({ margin }) => margin || 'calc(20px + 5vh) auto'};

  background: ${({ theme }) => theme.color.semiTransparent};
  border-color: ${({ theme }) => theme.color.lightWhite};
  border-width: 11px;
  -moz-border-image: url(http://tobias-reinhardt.de/img/frame.png) 11 stretch;
  border-image: url(http://tobias-reinhardt.de/img/frame.png) 11 stretch;
  border-style: solid;

  max-width: 90vh;
  overflow-y: auto;

  font-family: ${({ theme }) => theme.font.body};
  font-size: ${({ theme }) => theme.fontSize.lg};
`;

export default Card;
