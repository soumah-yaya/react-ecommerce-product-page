import React from 'react'

// style
import './thumbnailItem.css'
type ThumbnailItemProps ={  
    src:string;
    alt?:string;
    isActive?:boolean;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function ThumbnailItem({ src, alt = "", isActive = false, onClick }: ThumbnailItemProps) {
    
  return (
      <button onClick={onClick}  className={isActive ? "thumbnail-item active-thumbnail" :"thumbnail-item"}>
          <img src={src} alt="" />
          <div className="thumbnail-overlay"></div>
      </button>
  )
}
