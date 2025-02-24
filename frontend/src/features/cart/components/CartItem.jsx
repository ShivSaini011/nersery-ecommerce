import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteCartItemByIdAsync, updateCartItemByIdAsync } from '../CartSlice';
import { Link } from 'react-router-dom';
import './CartItem.css';

export const CartItem = ({ id, thumbnail, title, category, brand, price, quantity, stockQuantity, productId }) => {
    const dispatch = useDispatch();

    const handleAddQty = () => {
        const update = { _id: id, quantity: quantity + 1 };
        dispatch(updateCartItemByIdAsync(update));
    };

    const handleRemoveQty = () => {
        if (quantity === 1) {
            dispatch(deleteCartItemByIdAsync(id));
        } else {
            const update = { _id: id, quantity: quantity - 1 };
            dispatch(updateCartItemByIdAsync(update));
        }
    };

    const handleProductRemove = () => {
        dispatch(deleteCartItemByIdAsync(id));
    };

    return (
        <div className="cart-item">
            <div className="cart-item-details">
                <Link to={`/product-details/${productId}`} className="cart-item-image">
                    <img src={thumbnail} alt={`${title} image unavailable`} />
                </Link>
                <div className="cart-item-info">
                    <Link to={`/product-details/${productId}`} className="cart-item-title">{title}</Link>
                    <p className="cart-item-brand">{brand}</p>
                    <p className="cart-item-quantity-label">Quantity</p>
                    <div className="cart-item-quantity">
                        <button onClick={handleRemoveQty}>-</button>
                        <span>{quantity}</span>
                        <button onClick={handleAddQty}>+</button>
                    </div>
                </div>
            </div>
            <div className="cart-item-actions">
                <p className="cart-item-price">{price}₹</p>
                <button onClick={handleProductRemove} className="remove-button">Remove</button>
            </div>
        </div>
    );
};