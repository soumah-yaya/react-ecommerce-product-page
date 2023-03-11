import { useState, useContext } from 'react'
// contexts
import { ProductDetailContext } from '../ProductDetail'
// icons
import { FaTrashAlt, FaBars } from 'react-icons/fa'
import { BsCart3 } from 'react-icons/bs'
import { IoCloseSharp } from 'react-icons/io5'
// images
import avatar from '../../../assets/images/image-avatar.png'
import imageProduct1 from '../../../assets/images/image-product-1-thumbnail.jpg'
// styles
import './detail-header.css'


export default function DetailHeader() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [activeLink, setActiveLink] = useState('home');
    const [showCartModal, setShowCartModal] = useState(false);


    const detail = useContext(ProductDetailContext)
    const product = detail?.product;
    const setProduct = detail?.setProduct;
    console.log(product?.cart_quantity);

    let isEmpty = product?.cart_quantity === 0;

    // handle active link 
    const handleActiveLink = (str: string) => {
        setActiveLink(str);
        setShowCartModal(false)
    }

    // handle hide side menu on lost focus
    const onSideMenuLostFocus = (e: React.MouseEvent) => {
        setShowMobileMenu(false)
    }
    // handle delete item
    const onDelete = () => {
        if (product && setProduct) {

            setProduct({ ...product, cart_quantity: 0 })
        }
    }

    // cart image path

    return (
        <header className="product-detail-header">
            {/* humberger icon */}
            <div onClick={() => setShowMobileMenu(!showMobileMenu)} className="menu-icon">
                <FaBars />
            </div>
            <div className="logo"><h1>sneakers</h1></div>

            <div onClick={onSideMenuLostFocus} className={showMobileMenu ? "menu-overlay responsive" : "menu-overlay"}>
            </div>
            <nav className={showMobileMenu ? "nav responsive" : "nav"}>
                <div onClick={() => setShowMobileMenu(!showMobileMenu)} className={showMobileMenu ? "mobile-menu-close-icon responsive" : "mobile-menu-close-icon"}><IoCloseSharp /></div>
                <ul>
                    <li className={activeLink === 'collection' ? 'active-link' : ''}><a href="#link" onClick={() => handleActiveLink('collection')}>Collections</a></li>
                    <li className={activeLink === 'men' ? 'active-link' : ''}><a href="#link" onClick={() => handleActiveLink('men')}>Men</a></li>
                    <li className={activeLink === 'women' ? 'active-link' : ''}><a href="#link" onClick={() => handleActiveLink('women')}>Women</a></li>
                    <li className={activeLink === 'about' ? 'active-link' : ''}><a href="#link" onClick={() => handleActiveLink('about')}>About</a></li>
                    <li className={activeLink === 'contact' ? 'active-link' : ''}><a href="#link" onClick={() => handleActiveLink('contact')}>Contact</a></li>
                </ul>
            </nav>
            <div className="nav-right">
                {/* cart */}
                <div className="cart">
                    <BsCart3 onClick={() => setShowCartModal(!showCartModal)} className='cart-icon' />
                    {product?.cart_quantity !== 0 && <span className='quantity-badge'>{product?.cart_quantity}</span>}
                    {/* modal box */}
                    {
                        showCartModal &&
                        <div className='cart-modal'>
                            <div className="title">
                                <h3>Card</h3>
                            </div>

                            {
                                isEmpty ?
                                    (<>

                                        < div className="cart-content-empty">
                                            <p>Your cart is empty.</p>
                                        </div>
                                    </>)
                                    : (

                                        <div className="cart-content-filled">
                                            <ul className='cart-list'>
                                                <li>
                                                    <div className="cart-image">

                                                        <img src={imageProduct1} alt="sneakers" />
                                                    </div>
                                                    <div className="cart-desc">
                                                        <p>{product?.title}</p>
                                                        <span className='unit-price'>${product?.price}</span>
                                                        <span className='times'> x </span>
                                                        <span className='unit-quantity'> {product?.cart_quantity} </span>
                                                        <span className='sub-total'>${(product?.price || 0) * (product?.cart_quantity || 0)}</span>
                                                    </div>
                                                    <div className="cart-delete">
                                                            <button onClick={onDelete}> <FaTrashAlt /></button>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div className='checkout'>
                                                <button onClick={() => setShowCartModal(!showCartModal)}>Checkout</button>
                                            </div>
                                        </div>)

                            }


                        </div>
                    }
                    <div className="avatar">
                        <img src={avatar} alt="avatar" />
                    </div>
                </div>
            </div>
        </header>
    )
}
