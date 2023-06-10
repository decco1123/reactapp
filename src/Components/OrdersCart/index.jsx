import {ChevronRightIcon} from '@heroicons/react/24/solid'
const OrdersCart= props =>{
    const {date,totalPrice,totalProducts}=props

return(
    
    <div className="flex justify-between items-center mb-3 border border-black rounded-lg div-4  w-80  ">
        <div className='flex justify-between w-full '>
            <p className='flex flex-col mt-4 mb-4 ml-2 mr-2'>
            <span className='font-light'>📅 {date}</span>
            <span className='font-light'>👜{totalProducts}</span>
            </p>
            <p className='flex items-center gap-2 mr-2'>
            <span className="font-medium text-2xl ">${totalPrice}</span>
            <ChevronRightIcon className="h-6 w-6 text-black cursor-pointer"></ChevronRightIcon>
            </p>
            
            

        </div>
    </div>
)
}

export default OrdersCart