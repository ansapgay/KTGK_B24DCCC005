import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // nếu bạn có dùng Tailwind hay CSS global

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
