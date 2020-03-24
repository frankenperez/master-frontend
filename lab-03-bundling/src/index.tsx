import * as React from "react";
import * as ReactDOM from "react-dom";

import { BoxMessage } from "./components/BoxMessage";

ReactDOM.render(
  <BoxMessage message="Hello World from React!" />,
  document.getElementById("app")
);
