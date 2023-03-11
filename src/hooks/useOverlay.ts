import { OverlayContext } from "../components/product-detail/ProductDetail";
import {  useContext } from 'react'

export const useOverlay = ()=>{
    const data = useContext(OverlayContext);
    if(!data) {
        throw new Error("useOverlay has to be used within <OverlayContext.Provider>")
    }
    return {...data};
}