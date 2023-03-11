import React from 'react'
// images

import ThumbnailItem from '../thumbnail-item/ThumbnailItem'

// style
import './product-image.thumbnail.css'
import { useOverlay } from '../../../hooks/useOverlay'

// type
interface ProductImageThumbnailProps {
    thumbnailImageList: {
        id: number;
        src: string;
    }[];
    onClick: (id: number) => any;
}

export default function ProductImageThumbnail({ thumbnailImageList, onClick }: ProductImageThumbnailProps) {
    const {currentId} = useOverlay()
    return (
        <div className="thumbnail">
            {
                thumbnailImageList.map((item) => <ThumbnailItem onClick={() => onClick(item.id)} key={item.id} isActive={currentId === item.id} src={item.src} alt={`product ${currentId}`} />)
            }
        </div>
    )
}


