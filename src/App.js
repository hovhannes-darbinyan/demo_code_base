import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import AppPages from "./pages";
import './index.css'
const App = () => {
  return (
    <Provider store={store}>
      <AppPages />
    </Provider>
  );
};

export default App;
