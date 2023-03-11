import ProductImageThumbnail from '../product-image-thumbnail/ProductImageThumbnail';
import CurrentProduct from '../current-product/CurrentProduct';
import { useOverlay } from '../../../hooks/useOverlay';


// style
import './product-image.css';

// images
// images
import product_1 from '../../../assets/images/image-product-1.jpg'

import product_2 from '../../../assets/images/image-product-2.jpg'

import product_3 from '../../../assets/images/image-product-3.jpg'

import product_4 from '../../../assets/images/image-product-4.jpg'

import product_1_thumbnail from '../../../assets/images/image-product-1-thumbnail.jpg'
import product_2_thumbnail from '../../../assets/images/image-product-2-thumbnail.jpg'
import product_3_thumbnail from '../../../assets/images/image-product-3-thumbnail.jpg'
import product_4_thumbnail from '../../../assets/images/image-product-4-thumbnail.jpg'

let imageList = [
  {
    id: 1,
    src: product_1
  },
  {
    id: 2,
    src: product_2
  },
  {
    id: 3,
    src: product_3
  },
  {
    id: 4,
    src: product_4
  },
]
let thumbnailImageList = [
  {
    id: 1,
    src: product_1_thumbnail
  },
  {
    id: 2,
    src: product_2_thumbnail
  },
  {
    id: 3,
    src: product_3_thumbnail
  },
  {
    id: 4,
    src: product_4_thumbnail
  },
]

type ProductImageProps = {
  width?: number;
  height?: number;
}
export default function ProductImage({ width, height }: ProductImageProps) {
  // const [currentImgId, setCurrentImgId] = useState(1);
  const { setCurrentId, setShowGalery } = useOverlay();
  
  function handleCurrentImage(id: number) {
    setCurrentId(id);
    setShowGalery(true);
  }

  return (
    <div className="product">
      <div className="product-big-imag-wrapper">
        <CurrentProduct width={width} height={height} imageList={imageList} />

        <ProductImageThumbnail onClick={handleCurrentImage} thumbnailImageList={thumbnailImageList} />
      </div>
    </div>
  )
}
