import {useContext} from 'react';
import { ProductDetailContext } from '../components/product-detail/ProductDetail'


export const useProductDetail = ()=>{
    const detail = useContext(ProductDetailContext);
    if (!detail) {
        throw new Error(
            "useProductDetail has to be used within <ProductDetailContext.Provider>"
        );
    }
    
    return {...detail}
}