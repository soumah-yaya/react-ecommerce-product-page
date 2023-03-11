import React from 'react'
import { useOverlay } from '../../../hooks/useOverlay';
// style
import './current-product.css';

interface CurrentProductProps  {
    
    imageList:{
        id:number;
        src:string;
    }[];
    width?: number;
    height?: number;
}
export default function CurrentProduct({ imageList, width = 446, height =446 }: CurrentProductProps) {
   const {currentId} = useOverlay()
    
  return (
      <div className="product-big-imag" style={{maxWidth:width +'px', maxHeight: height+'px'}}>
        {
              imageList.map((item) => <img key={item.id} className={currentId !== item.id ? "hide" : ""} src={item.src} alt="product" />)
        }         
          
      </div>
  )
}
