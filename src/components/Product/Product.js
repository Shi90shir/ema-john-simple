import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    // console.log(props);
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className='product-name'>{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>$ {price}</p>
                <p><small>Only {stock} left - order soon</small></p>
                <button className='main-button' onClick={() => {
                    props.handleAddProduct(props.product)
                }}> <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
        </div>
    );
};

export default Product;