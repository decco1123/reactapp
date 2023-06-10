//suma precios de los productos del array de productos 
export const totalPrice= (cartItems)=>{
    let sum = 0
    cartItems.forEach(item=>{
        sum+=item.price
        })
        return sum
}