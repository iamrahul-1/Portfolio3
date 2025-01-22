import { BrowserRouter } from "react-router-dom";
import App from "../App.jsx";

export const AppWrapper = () => (
  <BrowserRouter future={{ v7_startTransition: true }}>
    <App />
  </BrowserRouter>
);
