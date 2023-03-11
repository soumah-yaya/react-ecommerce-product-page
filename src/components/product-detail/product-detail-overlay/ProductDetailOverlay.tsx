import React from 'react'
import ProductImage from '../product-image/ProductImage'
import { useOverlay } from '../../../hooks/useOverlay';
import { useProductDetail } from '../../../hooks/useProductDetail';
// icons
import { IoCloseSharp } from 'react-icons/io5'
import next_btn from '../../../assets/images/icon-next.svg'
import prev_btn from '../../../assets/images/icon-previous.svg'
// style
import './ProductDetailOverlay.css'
export default function ProductDetailOverlay() {
  const { currentId, setCurrentId, setShowGalery }= useOverlay();
  const {product} = useProductDetail();
  const totalImages = product.big_images.length;
  return (
      <div className='product-detail-overlay'>
        <div className="overlay-wrapper">
        <div onClick={() => setShowGalery(false)} className="close-btn">
                  <IoCloseSharp/>
          </div>
        {
          currentId < totalImages && <button onClick={() => setCurrentId(v => { if (v >= totalImages) return totalImages; return v + 1 })} className="next-btn">
            <img src={next_btn} alt="" />
          </button>
        }
        {
          currentId > 1 && <button onClick={() => setCurrentId(v => { if (v <= 1) return 1; return v - 1 })} className="prev-btn">
            <img src={prev_btn} alt="" />
          </button>
        }
          {/* product image */}
          <ProductImage width={556} height={556}/>
        </div>
      </div>
  )
}
