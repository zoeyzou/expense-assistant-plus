import * as React from 'react';
import { StyledComponentsProps } from 'src/models/styled-components-props';
import styled from 'src/utils/styled-components';

type TextAreaProps = StyledComponentsProps & {
  className?: string;
  maxWidth?: string;
  maxHeight?: string;
  placeholder?: string;
  value: string | number | undefined;
  onChange: (value: string) => void;
};

const _TextArea: React.FunctionComponent<TextAreaProps> = ({
  className,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <textarea
      className={className}
      placeholder={placeholder || 'Leave a comment for this expense'}
      value={value}
      onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
        onChange(event.target.value)
      }
    />
  );
};

const TextArea = styled(_TextArea)`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '80px'};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};

  max-width: ${({ maxWidth }) => maxWidth};
  max-height: ${({ maxHeight }) => maxHeight};
  background-color: ${({ theme }) => theme.color.lightWhite};
  font-family: ${({ theme }) => theme.font.body};
`;

export default TextArea;
