import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./style/app.css";

const root = createRoot(document.getElementById("root")!);
root.render(<App />);