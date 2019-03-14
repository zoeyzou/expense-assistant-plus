import * as React from 'react';
import Flex from 'src/components/Flex';
import Text from 'src/components/Text';
import styled from 'src/utils/styled-components';
import { StyledComponentsProps } from 'src/models/styled-components-props';
import { theme } from 'src/utils/theme';

type TitleProps = StyledComponentsProps & {
  className?: string;
  children: React.ReactNode;
};

const _Title: React.FunctionComponent<TitleProps> = ({className, children}) => {
  return (
    <Flex height='auto' margin='15px 0' className={className}>
      <Text
        color={theme.color.darkOrange}
        fontSize={theme.fontSize.lg}
        fontFamily={theme.font.title}
        fontWeight='bold'
      >
        {children}
      </Text>
    </Flex>
  );
};

const Title = styled(_Title)`
  text-transform: uppercase;
`;

export default Title;
