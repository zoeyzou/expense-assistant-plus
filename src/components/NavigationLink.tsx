import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'src/utils/styled-components';
import { StyledComponentsProps } from 'src/models/styled-components-props';

type NavLinkProps = StyledComponentsProps & {
  className?: string;
  exact?: boolean;
  toPath: string;
  icon?: (className: string) => React.ReactNode;
  title: string;
};

const _NavLink: React.FunctionComponent<NavLinkProps> = ({
  className,
  exact,
  toPath,
  icon,
  title,
}) => {
  return (
    <NavLink
      className={className}
      activeClassName='isActive'
      exact={exact}
      to={toPath}
    >
      {icon && icon('icon')}
      {title && <span>{title}</span>}
    </NavLink>
  );
};

const NavigationLink = styled(_NavLink).attrs({
  activeClassName: 'isActive',
})`
  display: flex;
  align-items: center;

  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height};
  padding: ${({ padding }) => padding || '10px'};
  margin: ${({ margin }) => margin || '10px 0'};

  background: ${({ theme }) => theme.color.orange};
  color: ${({ theme }) => theme.color.lightWhite};

  box-sizing: border-box;
  border: none;
  text-decoration: none;
  transition: all 0.3s ease-out;

  &.isActive,
  &:hover {
    transition: all 0.3s ease-out;
    background: ${({ theme }) => theme.color.lightOrange};
    color: ${({ theme }) => theme.color.orange};

    .icon {
      fill: ${({ theme }) => theme.color.orange};
    }
  }

  .icon {
    display: inline-block;
    width: 60px;
    height: 30px;
    padding-left: 15px;
    padding-right: 10px;
    fill: ${({ theme }) => theme.color.lightWhite};
  }

  span {
    display: inline-block;
    text-transform: capitalize;
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-family: ${({ theme }) => theme.font.title};
  }
`;

export default NavigationLink;
