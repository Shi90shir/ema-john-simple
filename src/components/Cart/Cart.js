import React from "react";

const Cart = (props) => {
    const cart = props.cart;
    // console.log(cart);
    // const total = cart.reduce((total , product) => total + product.price , 0);
    let total = 0;
    for(let i = 0; i < cart.length; i++){
        const product = cart[i];
        total = total + product.price;
    }
    let shipping = 0;
    if(total > 35){
        shipping = 0;
    }
    else if(total > 15){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 12.99;
    }

    const tax = (total / 10).toFixed(2);
    const grandTotal = total + shipping + parseFloat(tax);
    // const formatNumber = num => {
    //     const precision = num.toFixed(2);
    //     return Number(precision);
    // }
    return (
        <div>
            <h3>This is Cart</h3>
            <h5>Items Ordered: {cart.length}</h5>
            <h5><small>Shipping Cost: {shipping}</small></h5>
            <h5><small>Tax: {tax}</small></h5>
            <h5>Total Price: {grandTotal}</h5>
        </div>
    );
};

export default Cart;