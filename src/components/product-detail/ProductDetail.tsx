import React, { useState, createContext } from 'react'
import DetailHeader from './detail-header/DetailHeader';

// style

import './product-detail.css';
import ProductImage from './product-image/ProductImage';
import ProductDescription from './product-description/ProductDescription';
import ProductDetailOverlay from './product-detail-overlay/ProductDetailOverlay';


type ProductType = {
    title: string,
    brand: string,
    description: string,
    price: number,
    previous_price: number,
    promo: number,
    cart_quantity: number,
    stock_quantity: number,
    big_images: {
        id: number,
        src: string
    }[],
    small_images: {
        id: number,
        src: string
    }[],

}

const products: ProductType = {
    title: "Fall Limited Edition Sneakers",
    brand: "SNEAKER COMPANY",
    description: "These low-profile sneakers are your perfec casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    price: 125,
    previous_price: 250,
    promo: 50,
    cart_quantity: 2,
    stock_quantity: 10,
    big_images: [
        {
            id: 1,
            src: "product-1"
        },
        {
            id: 2,
            src: "product-2"
        },
        {
            id: 3,
            src: "product-3"
        },
        {
            id: 4,
            src: "product-4"
        },
    ],
    small_images: [
        {
            id: 1,
            src: "product-1-thumbnail"
        },
        {
            id: 2,
            src: "product-2-thumbnail"
        },
        {
            id: 3,
            src: "product-3-thumbnail"
        },
        {
            id: 4,
            src: "product-4-thumbnail"
        },
    ],

}
export type ProductProps = {
    product: ProductType,
    setProduct: React.Dispatch<React.SetStateAction<typeof products>>
}
export type OverlayProps = {
    showGalery: boolean,
    currentId: number,
    setShowGalery: React.Dispatch<React.SetStateAction<boolean>>,
    setCurrentId: React.Dispatch<React.SetStateAction<number>>
}

// export const ProductDetailContext = createContext < { product: typeof products, setProduct: React.Dispatch < React.SetStateAction<typeof products> >} | null>(null);
export const ProductDetailContext = createContext<ProductProps | null>(null);
export const OverlayContext = createContext<OverlayProps | null>(null);

export default function ProductDetail() {
    const [product, setProduct] = useState<ProductType>(products);
    const [showGalery, setShowGalery] = useState(false);
    const [currentId, setCurrentId] = useState(1);

    return (
        <ProductDetailContext.Provider value={{ product, setProduct }}>
            <div className='product-detail-wrapper'>
                {/* header */}
                <DetailHeader />
                {/* main body */}
                <OverlayContext.Provider value={{ showGalery, currentId, setCurrentId, setShowGalery }} >
                    <main className='product-detail-main'>
                        {/* product image */}
                        <ProductImage />
                        {/* product detail */}
                        <ProductDescription />
                    </main>
                    {/* overlay */}
                    {showGalery && <ProductDetailOverlay />}
                </OverlayContext.Provider>
            </div>
        </ProductDetailContext.Provider>
    )
}
