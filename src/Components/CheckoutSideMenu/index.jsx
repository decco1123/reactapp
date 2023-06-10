
import { useContext } from "react"
import { Link } from "react-router-dom";
import {XMarkIcon} from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context" 
import OrderCart from "../../Components/OrderCart";
import {totalPrice} from "../../utils";
import  './styles.css';
const CheckoutSideMenu=()=>{
    const context = useContext(ShoppingCartContext)
    const fechaActual = new Date().toLocaleString();
    const handleDelete=(id)=>{
        const filteredProducts= context.cartItems.filter(product=>product.id != id)
        context.setCartItems(filteredProducts)
    }
    const handleCheckout=()=>{
        context.closeCheckoutSide()
        const orderToadd={
            date: fechaActual,
            products:context.cartItems,
            totalProducts:context.cartItems.length,
            totalPrice:totalPrice(context.cartItems)
        }
        context.setSearch(null)
        context.setOrder([...context.order,orderToadd])
        context.setCartItems([])
    }

    return(
        <aside className={`${context.isCheckoutMenuOpen ? 'flex':'hidden'} checkout-side-menu flex-col right-0 fixed  border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div>
                    <XMarkIcon className="h-6 w-6 text-black cursor-pointer" 
                    onClick={()=>context.closeCheckoutSide()}></XMarkIcon>
                </div>
            </div>
            <div className="px-6 overflow-y-scroll flex-1">
            {
                context.cartItems.map(product=>(
                    <OrderCart 
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    imageUrl={product.images[0]}
                    price={product.price}
                    handleDelete={handleDelete}
                    />
                ))
            }
            </div>
            <div className="px-6 mb-12">
                <p className="flex justify-between items-center mb-2">
                    <span className="font-light ">Total:</span>
                    <span className="font-medium text-2xl ">${totalPrice(context.cartItems)}</span>
                </p>
                <Link to='/my-order/last'>
                    <button onClick={()=> handleCheckout() } className="h-full w-full bg-yellow-500 py-1 rounded-lg ">Checkout</button>
                </Link>
                
            </div>
        </aside>
    )
}

export default CheckoutSideMenu 