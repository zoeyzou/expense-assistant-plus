import * as React from 'react';
import { GlobalStyle } from 'src/utils/global-styles';
import Avatar from 'src/components/Avatar';

export interface AppProps {}

export default class App extends React.Component<AppProps, any> {
  public render() {
    return (
      <>
        <GlobalStyle />
        <Avatar name='william' />
      </>
    );
  }
}
