import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import registerServiceWorker from "./registerServiceWorker";

import { store } from "./_helpers";
import { PegaApp } from "./PegaApp/PegaApp";

import "./_styles/index.css";
import "semantic-ui-css/semantic.min.css";
import "react-dates/lib/css/_datepicker.css";

const render = () => {
  fancyLog();
  return ReactDOM.render(
    <Provider store={store}>
      <PegaApp />
    </Provider>,
    document.getElementById("root")
  );
};

render();
store.subscribe(render);

function fancyLog() {
  // console.log("%c Rendered with ? ??", "background: purple; color: #fff");
  // console.log(store.getState());
}
registerServiceWorker();
