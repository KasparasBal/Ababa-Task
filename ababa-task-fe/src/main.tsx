import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ProfileProvider } from "./providers/ProfileProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ProfileProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ProfileProvider>
);
