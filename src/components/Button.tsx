import * as React from 'react';
import styled from 'src/utils/styled-components';
import { StyledComponentsProps } from 'src/models/styled-components-props';

type ButtonProps = StyledComponentsProps & {
  intent?: 'primary' | 'secondary';
  className?: string;
  label: string;
  isDisabled?: boolean;
  onClick: () => void;
};

const _Button: React.FunctionComponent<ButtonProps> = ({
  className,
  intent,
  label,
  isDisabled,
  onClick,
}) => {
  return (
    <button
      className={`${className} ${intent} ${isDisabled && 'isDisabled'}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {label}
    </button>
  );
};

_Button.defaultProps = {
  intent: 'secondary',
};

const Button = styled(_Button)`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.color.lightWhite};
  font-family: ${({ theme }) => theme.font.title};
  font-size: ${({ theme }) => theme.fontSize.sm};
  border-style: solid;
  border-width: 2px;
  border-color: ${({ theme }) => theme.color.lightOrange};
  border-radius: 5px;
  padding: 5px;
  transition: all 0.2s ease;
  cursor: pointer;

  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '100%'};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};

  &.secondary {
    background: ${({ theme }) => theme.color.lightWhite};
    color: ${({ theme }) => theme.color.orange};

    &:hover {
      transition: all 0.2s ease;
      color: ${({ theme }) => theme.color.darkOrange};

      &.isDisabled {
        background: ${({ theme }) => theme.color.lightGrey};
        color: ${({ theme }) => theme.color.white};
      }
    }
  }

  &.primary {
    background: ${({ theme }) => theme.color.orange};

    &:hover {
      transition: all 0.2s ease;
      background: ${({ theme }) => theme.color.lightWhite};
      color: ${({ theme }) => theme.color.orange};

      &.isDisabled {
        background: ${({ theme }) => theme.color.lightGrey};
        color: ${({ theme }) => theme.color.white};
      }
    }
  }

  &.isDisabled {
    cursor: not-allowed;
    background: ${({ theme }) => theme.color.lightGrey};
    border-color: ${({ theme }) => theme.color.lightGrey};
    color: ${({ theme }) => theme.color.white};
  }
`;

export default Button;
