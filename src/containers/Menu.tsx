import * as React from 'react';
import Avatar from 'src/components/Avatar';
import Navigations from 'src/components/Navigations';
import Logo from 'src/components/Logo';
import { MenuWrapper } from 'src/components/MenuWrapper';

interface MenuProps {
  className?: string;
}

const Menu: React.FunctionComponent<MenuProps> = ({ className }) => {
  return (
    <MenuWrapper className={className}>
      <Avatar name='william' />
      <Navigations />
      <Logo name='Expense Assistant 2.0' />
    </MenuWrapper>
  );
};

export default Menu;
