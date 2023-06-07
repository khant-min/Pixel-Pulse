import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import { DataProvider } from "./context/DataContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <DataProvider>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </DataProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
