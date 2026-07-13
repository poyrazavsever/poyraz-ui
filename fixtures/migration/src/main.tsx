import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { V3Consumer } from "./v3-consumer";
import "./style.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <main>
      <h1>Poyraz UI migration fixture</h1>
      <V3Consumer />
    </main>
  </StrictMode>,
);
