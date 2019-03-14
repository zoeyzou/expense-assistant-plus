import * as React from 'react';
import { StyledComponentsProps } from 'src/models/styled-components-props';
import styled from 'src/utils/styled-components';

type TextAreaProps = StyledComponentsProps & {
  maxWidth?: string;
  maxHeight?: string;
};

const _TextArea: React.FunctionComponent<TextAreaProps> = props => {
  return <textarea />;
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
