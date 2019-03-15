import * as React from 'react';
import Navigations from 'src/components/Navigations';
import Logo from 'src/components/Logo';
import { MenuWrapper } from 'src/layout/MenuWrapper';
import AvatarContainer from 'src/containers/AvatarContainer';

const Menu: React.FunctionComponent<{}> = () => {
  return (
    <MenuWrapper>
      <AvatarContainer />
      <Navigations />
      <Logo name='Expense Assistant 2.0' />
    </MenuWrapper>
  );
};

export default Menu;
