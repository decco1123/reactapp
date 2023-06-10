import { NavLink } from "react-router-dom"
import {ShoppingCartIcon} from '@heroicons/react/24/solid'
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"

    
const Navbar=() => {
    const context = useContext(ShoppingCartContext)
    const activeStyle= 'underline underline-offset-4'
return(
    <nav className='flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0 bg-slate-100'>
        <ul className="flex items-center gap-3">
            <li  className="font-semibold text-lg">
                <NavLink to='/' 
                onClick={()=>context.setSearchByCategory(null)}>
                    Shopi
                </NavLink>
            </li>
            <li>
                <NavLink to='/'
                onClick={()=>context.setSearchByCategory(null)}
                
                className={({isActive})=>
                     isActive ? activeStyle:undefined
                 }>
                    ALL
                </NavLink>
            </li>
            <li>
                <NavLink to='/clothes'
                onClick={()=>context.setSearchByCategory('clothes')}
                className={({isActive})=>
                    isActive ? activeStyle:undefined
                }>
                    Clothes
                </NavLink>
            </li>
            <li>
                <NavLink 
                onClick={()=>context.setSearchByCategory('electronics')}
                to='/electronics'
                className={({isActive})=>
                    isActive ? activeStyle:undefined
                }>
                    Electronics
                </NavLink>
            </li>
            <li>
                <NavLink to='/furnitures'
                onClick={()=>context.setSearchByCategory('furnitures')}
                className={({isActive})=>
                    isActive ? activeStyle:undefined
                }>
                    Furnitures
                </NavLink>
            </li>
            <li>
                <NavLink to='/toys'
                onClick={()=>context.setSearchByCategory('toys')}
                className={({isActive})=>
                 isActive ? activeStyle:undefined
                }>
                    Toys
                </NavLink>
            </li>
            <li>
                <NavLink to='/others'
                onClick={()=>context.setSearchByCategory('others')}

                className={({isActive})=>
                    isActive ? activeStyle:undefined
                }>
                    Others
                </NavLink>
            </li>
        </ul>
        <ul className="flex items-center gap-3">
            <li className="text-black/60">
                correo@correo.com
            </li>
            <li>
                <NavLink to='/my-orders'
                className={({isActive})=>
                    isActive ? activeStyle:undefined
                }>
                    MyOrders
                </NavLink>
            </li>
            <li>
                <NavLink to='/my-account'
                className={({isActive})=>
                isActive ? activeStyle:undefined
            }>
                    Myaccount
                </NavLink>
            </li>
            <li>
                <NavLink to='/sing-in'
                className={({isActive})=>
                isActive ? activeStyle:undefined
            }>
                    Sing In
                </NavLink>
            </li>
            <li className="flex items-center">
                <ShoppingCartIcon className="h-6 w-6 text-black cursor-pointer" onClick={()=>context.openCheckoutSide()}></ShoppingCartIcon>
                <div> {context.cartItems.length }</div>
                
            </li>
           
        </ul>
    </nav>
)

}
export  default Navbar