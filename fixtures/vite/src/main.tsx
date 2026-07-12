import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Button } from "@/components/ui/atoms/button";
import "./style.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <main>
      <h1>Poyraz UI Vite fixture</h1>
      <Button>Installed button</Button>
    </main>
  </StrictMode>,
);
