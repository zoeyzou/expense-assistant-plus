import * as React from 'react';
import { StyledComponentsProps } from 'src/models/styled-components-props';
import styled from 'src/utils/styled-components';
import UploadIcon from './Icons/UploadIcon';

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
  return (
    <label className={className} htmlFor='file'>
      <UploadIcon /> <span>{label || 'Choose a file'}</span>
      <input
        type='file'
        name='file'
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          onChange(event.currentTarget.files)
        }
        multiple={supportMultiple}
      />
    </label>
  );
};

const FileUploader = styled(_FileUploader)`
  display: block;
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

  input {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
`;

export default FileUploader;
