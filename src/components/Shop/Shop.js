import React, { useState, useEffect } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const product = products.slice(20 , 30);
    const [cart , setCart] = useState([]);
    const handleAddProduct = (product) => {
        // console.log("Product Clicked" , product);
        const newCart = [...cart , product];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                    {
                        product.map(product => <Product product={product} handleAddProduct={handleAddProduct}></Product>)
                    }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;