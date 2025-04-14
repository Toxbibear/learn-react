import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import routes from "./router.tsx";
import { CartProvider } from "./context/CartContext";

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")!).render(

    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>

);
