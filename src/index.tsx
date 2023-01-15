import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import reportWebVitals from "./lib/reportWebVitals";
import { initLang } from "./lib/lang/langManager";
import { router } from "./router/router";

initLang("ja")

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<RouterProvider router={router} />);
reportWebVitals(console.log);
