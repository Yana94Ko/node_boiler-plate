import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";

//ant.design 사용을 위한 임포트
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
//2)
import { applyMiddleware, createStore } from "redux";
import promiseMiddleware from "redux-promise";
import ReduxThunk from "redux-thunk";
import Reducer from "./_reducers";

//redux-promise, resux-thunk를 사용하기 위한과정
//1)
const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware,
  ReduxThunk
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider
    store={createStoreWithMiddleware(
      Reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
