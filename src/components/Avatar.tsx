import * as React from 'react';
import avatar from 'public/avatar.png';
import styled from 'src/utils/styled-components';

interface AvatarProps {
  className?: string;
  avatarUrl?: string;
  name?: string;

  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
}

const _Avatar: React.FunctionComponent<AvatarProps> = ({
  className,
  avatarUrl,
  name,
}) => {
  return (
    <div className={className}>
      <div className='imgWrapper'>
        <img src={avatarUrl ? avatarUrl : avatar} alt='avatar' />
      </div>
      {name && <p className='description'>Hi, {name}!</p>}
    </div>
  );
};

const Avatar = styled(_Avatar)`
  display: flex;
  flex-flow: column;
  align-items: center;

  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  font-family: ${({ theme }) => theme.font.body};

  .imgWrapper {
    width: ${({ width }) => width || '82px'};
    height: ${({ height }) => height || '82px'};

    img {
      border-radius: 50%;
      border: 2px solid ${({ theme }) => theme.color.white};
      width: 100%;
      height: 100%;
      -webkit-clip-path: circle(50.4% at 50% 50%);
      clip-path: circle(50.4% at 50% 50%);
    }
  }

  .description {
    color: ${({ theme }) => theme.color.lightWhite};
    font-size: ${({ width, theme }) =>
      (width && `calc(${theme.fontSize.sm} + ${width} / 10)`) ||
      theme.fontSize.md};
    margin: calc(10px + 2vh) 0;
  }
`;

export default Avatar;
