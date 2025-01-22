import { createRoot } from "react-dom/client";
import "./index.css";
import { AppWrapper } from "./components/AppWrapper";

const root = createRoot(document.getElementById("root"));
root.render(<AppWrapper />);
