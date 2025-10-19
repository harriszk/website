import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import store from "./store.ts";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter basename={import.meta.env.VITE_ROUTER_BASE_URL}>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </StrictMode>,
);
