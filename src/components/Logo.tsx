import * as React from 'react';
import styled from 'src/utils/styled-components';
import { StyledComponentsProps } from 'src/models/styled-components-props';

type LogoProps = StyledComponentsProps & {
  className?: string;
  logoImg?: React.ReactNode;
  name: string;
};

const _Logo: React.FunctionComponent<LogoProps> = ({
  className,
  logoImg,
  name,
}) => {
  return (
    <div className={className}>
      <h1>{name}</h1>
      {logoImg && logoImg}
    </div>
  );
};

const Logo = styled(_Logo)`
  display: flex;
  flex-flow: column;
  align-items: center;

  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};

  color: ${({ theme }) => theme.color.lightWhite};
  font-family: ${({ theme }) => theme.font.title};

  h1 {
    font-size: ${({ theme }) => theme.fontSize.lg};
  }
`;

export default Logo;
