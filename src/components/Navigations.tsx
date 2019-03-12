import * as React from 'react';
import NavigationLink from './NavigationLink';
import HomeIcon from './Icons/HomeIcon';
import ExpenseIcon from './Icons/ExpenseIcon';
import AddIcon from './Icons/AddIcon';

type NavigationsProps = {};

const Navigations: React.FunctionComponent<NavigationsProps> = props => {
  return (
    <nav>
      <NavigationLink
        exact
        toPath='/'
        icon={(className: string) => <HomeIcon className={className} />}
        title='home'
      />
      <NavigationLink
        exact
        toPath='/expenses'
        icon={(className: string) => <ExpenseIcon className={className} />}
        title='all expense'
      />
      <NavigationLink
        exact
        toPath='/expenses/add'
        icon={(className: string) => <AddIcon className={className} />}
        title='add expense'
      />
    </nav>
  );
};

export default Navigations;
