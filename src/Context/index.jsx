import { createContext ,useState, useEffect} from "react"

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children})=>{

    //contador del carrito
    const [count,setCount] = useState(0)

    //guardar en el carrito
    const [cartItems,setCartItems] = useState([])

    //abrir o cerrar info del producto
    const [isProductOpen,setIsProductOpen] = useState(false)

    //buscar productos por titulo
    const [search,setSearch] = useState(null)

    //buscar productos por categoría
    const [searchByCategory,setSearchByCategory] = useState(null)

    

    //guardar info del producto
    const [productToShow,setProductToShow] = useState({  
    title: "",
    price: "",
    description: "",
    images: [],})

    
   

    const openProductDetail=()=>setIsProductOpen(true)
    const closeProductDetail=()=>setIsProductOpen(false)

    const [isCheckoutMenuOpen,setIsCheckoutMenuOpen] = useState(false)
    const openCheckoutSide=()=>setIsCheckoutMenuOpen(true)
    const closeCheckoutSide=()=>setIsCheckoutMenuOpen(false)

    //guardar orden

    const [order,setOrder] = useState([])
    //obtener productos

    const [items,setItems]=useState(null);
    
    const [filterItems,setFilterItems]=useState(null);


    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
           .then(response =>response.json())
           .then(data =>setItems(data))
       },[])

       const filterItemsTitle=(items,search)=>{
        return items?.filter(item=>item.title.toLowerCase().includes(search.toLowerCase()))

       }

       const filterItemsCategory=(items,searchByCategory)=>{
        return items?.filter(item=>item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))

       }
       const filterBy=(searchType,items,search,searchByCategory)=>{
            if(searchType==='BY_TITLE'){
                return filterItemsTitle(items , search)
                
            }
            if(searchType==='BY_CATEGORY'){
                return filterItemsCategory(items , searchByCategory)
            }
            if(searchType==='BY_TITLE_AND_CATEGORY'){
                return filterItemsCategory(items, searchByCategory).filter(item=>item.title.toLowerCase().includes(search.toLowerCase()))
            }
            if(!searchType){
               return items    
            }        
       }

       useEffect(()=>{
        if (search && searchByCategory) setFilterItems(filterBy('BY_TITLE_AND_CATEGORY', items, search, searchByCategory))
        if (search && !searchByCategory) setFilterItems(filterBy('BY_TITLE', items, search, searchByCategory))
        if (!search && searchByCategory) setFilterItems(filterBy('BY_CATEGORY', items, search, searchByCategory))
        if (!search && !searchByCategory) setFilterItems(filterBy(null, items, search, searchByCategory))
        
       },[items, search,searchByCategory])
    

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductOpen,
            productToShow,
            setProductToShow,
            cartItems,
            setCartItems,
            openCheckoutSide,
            closeCheckoutSide,
            setIsCheckoutMenuOpen,
            isCheckoutMenuOpen,
            order,
            setOrder,
            items,
            setItems,
            search,
            setSearch,
            filterItems,
            setFilterItems,
            searchByCategory,
            setSearchByCategory,
            
            
        }}>
        {children}
        </ShoppingCartContext.Provider>

    )
}
