import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "modern-normalize/modern-normalize.css";
import { store } from "./redux/store";
import "./index.css";
import { App } from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter basename="/car-rental-service-in-Ukraine">
      <App />
    </BrowserRouter>
  </Provider>
);
