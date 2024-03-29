import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./app/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { GroupProvider } from "./context/groupContext";
import { TaskProvider } from "./context/taskContext";
// import Register from "./components/register";

import "./styles/styles.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <GroupProvider>
          <TaskProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </TaskProvider>
        </GroupProvider>
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);
