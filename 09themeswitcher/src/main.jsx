import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"; // ✅ Global styles
import "bootstrap/dist/css/bootstrap.min.css"; // ✅ Bootstrap styles

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
