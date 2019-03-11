import * as React from 'react';
import styled from 'src/utils/styled-components';
import { StyledComponentsProps } from 'src/models/styled-components-props';

type TextInputProps = StyledComponentsProps & {
  className?: string;
  label?: string;
  labelFor?: string;
  defaultValue?: string;
  onChange: (value: string) => void;
};

const _TextInput: React.FunctionComponent<TextInputProps> = ({
  className,
  label,
  labelFor,
  defaultValue,
  onChange,
}) => {
  return (
    <label htmlFor={labelFor} className={className}>
      {label && <span>{label}</span>}
      <input
        name={labelFor}
        type='text'
        value={defaultValue}
        onChange={e => onChange(e.target.value)}
      />
    </label>
  );
};

const TextInput = styled(_TextInput)`
  display: block;
  font-family: ${({ theme }) => theme.font.body};

  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};

  input {
    font-size: ${({ theme }) => theme.font.sm};
    padding: 5px 10px;
    width: ${({ width }) => width || '200px'};
    height: ${({ height }) => height || '20px'};
    border: none;
    background: none;
    border-bottom: 1px solid grey;
    border-left: 3px solid ${({ theme }) => theme.color.orange};
    outline-width: 0;
    transition: all 0.3s ease-in;

    &:focus {
      transition: all 0.3s ease-in;
      border-bottom: 1px solid ${({ theme }) => theme.color.orange};
    }
  }
`;

export default TextInput;
