import * as React from 'react';
import { StyledComponentsProps } from 'src/models/styled-components-props';
import styled from 'src/utils/styled-components';
import UploadIcon from './Icons/UploadIcon';
import { theme } from 'src/utils/theme';

type FileUploaderProps = StyledComponentsProps & {
  label?: string;
  className?: string;
  supportMultiple?: boolean;
  onChange: (files: FileList | null) => void;
};

const _FileUploader: React.FunctionComponent<FileUploaderProps> = ({
  className,
  label,
  supportMultiple,
  onChange,
}) => {
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.currentTarget.files);
  };
  return (
    <>
      <input
        className={className}
        type='file'
        name='file-1'
        id='file-1'
        onChange={changeHandler}
        multiple={supportMultiple}
      />
      <label htmlFor='file-1'>
        <UploadIcon color={theme.color.orange} />{' '}
        <span>{label || 'Choose a file'}</span>
      </label>
    </>
  );
};

const FileUploader = styled(_FileUploader)`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;

  & + label {
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    padding: ${({ padding }) => padding};
    margin: ${({ margin }) => margin};

    display: flex;
    align-items: center;
    font-weight: 700;
    color: ${({ theme }) => theme.color.darkOrange};
    border: 2px dashed ${({ theme }) => theme.color.darkOrange};
    border-radius: 4px;
    padding: 4px 8px;
    transition: all 0.2s ease-in;

    &:focus,
    &:hover {
      background-color: ${({ theme }) => theme.color.darkOrange};
      color: ${({ theme }) => theme.color.lightWhite};
      cursor: pointer;
      transition: all 0.2s ease;
    }
  }
`;

export default FileUploader;
