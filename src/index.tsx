import * as React from "react";
import * as ReactDOM from "react-dom";
import { ThemeProvider } from "./utils/styled-components";
import { theme } from "./utils/theme";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <div>test</div>
  </ThemeProvider>,
  document.getElementById("root")
);
