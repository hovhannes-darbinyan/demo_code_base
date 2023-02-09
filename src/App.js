import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import AppPages from "@views";
import './index.css'
import './index.scss'

const App = () => {
  return (
    <Provider store={store}>
      <AppPages />
    </Provider>
  );
};

export default App;
