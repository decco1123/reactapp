import { useRoutes,BrowserRouter } from "react-router-dom"
import { ShoppingCartProvider } from "../../Context"
import Home from "../Home"
import MyAccount from "../MyAccount"
import MyOrder from "../MyOrder"
import MyOrders from "../MyOrders"
import NotFound from "../NotFound"
import SingIn from "../SingIn"
import Navbar from "../../Components/Navbar"
import CheckoutSideMenu from "../../Components/CheckoutSideMenu"
import './App.css'


const AppRoutes=()=>{
  let routes = useRoutes([
    {path: "/", element: <Home /> },
    {path: "/others", element: <Home /> },
    {path: "/toys", element: <Home /> },
    {path: "/furnitures", element: <Home /> },
    {path: "/electronics", element: <Home /> },
    {path: "/clothes", element: <Home /> },
    {path: "/my-account", element: <MyAccount /> },
    {path: "/my-order",element: <MyOrder />},
    {path: "/my-order/last",element: <MyOrder />},
    {path: "/my-orders/:id",element: <MyOrder />},
    {path: "/my-orders",element: <MyOrders />},
    {path: "/sing-in", element: <SingIn />},
    {path: "*",element: <NotFound />}
  ])
  return routes
}

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
          <AppRoutes />
          <Navbar />
          <CheckoutSideMenu/>
      </BrowserRouter>
    </ShoppingCartProvider>
   
  )
}

export default App