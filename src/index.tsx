import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ThemeProvider } from 'src/utils/styled-components';
import { theme } from 'src/utils/theme';
import App from 'src/containers/App';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
