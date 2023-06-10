import { useContext } from "react"
import { Link } from "react-router-dom";
import Layout from "../../Components/Layout"
import OrdersCart from "../../Components/OrdersCart"
import { ShoppingCartContext } from "../../Context"



function MyOrders() {
  const context = useContext(ShoppingCartContext)

    return (
      <Layout>
        <div className="flex items-center justify-center w-80 relative mb-4">
          
          <h1 className="font-medium text-xl ">My Orders</h1>
          
        </div>
        <div >
          {
            context.order.map((order,index) => (
              <Link key={index} to={`/my-orders/${index}`}>
              <OrdersCart 
              date={order.date}
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts}/>
              </Link>
            ))
          }
          </div>
          
      </Layout>
    )
  }
  
  export default MyOrders