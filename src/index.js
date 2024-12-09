import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// componentNameは最初は大文字にする
const App = () => {
  return <h1>こん^^</h1>;
};

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
