import { RouteObject } from "react-router-dom";
import Home from "./routes/Home";
import CartPage from "./components/CartPage";


const router: RouteObject[] = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/cart",
      element: <CartPage cartItems={[]} onRemoveFromCart={function (productId: string | undefined): void {
        throw new Error("Function not implemented.");
      } } />,
    },
];

export default router;