import React, { useState } from "react";
// import { data } from "../Data/data";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../Redux/Slices/cartSlice";

const Wrapper = styled.section`
  .card {
    padding: 10px;
    margin-right: 20px;
    .card-top {
      position: relative;

      .toggle-cart-button {
        position: absolute;
        bottom: 0px;
        right: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--button-secondary);
        color: var(--text-tertiary);
        border: none;
        border-radius: 50%;
        text-align: center;
        height: 42px;
        width: 42px;
        .plus-icon {
          font-size: 18px;
          font-weight: 700;
        }
      }
    }
    .card-bottom {
      display: flex;
      flex-direction: column;
      gap: 10px;

      .product-price {
        font-weight: 700;
        font-size: 20px;
        color: var(--text-primary);
      }
      .product-name {
        font-weight: 600;
        font-size: 16px;
        color: var(--text-primary);
      }
      .product-quantity {
        color: var(--text-secondary);
      }
    }
  }
`;

const Card = ({ image, price, name, quantity }) => {
  const [cartButton, setCartButton] = useState(true);

  const dispatch = useDispatch();

  function handleClick(e) {
    cartButton ? setCartButton(false) : setCartButton(true);

    if (cartButton) {
      dispatch(addItem({ name: name, price: price, quantity: quantity }));
      // console.log("add");
    } else {
      dispatch(removeItem({ name: name, price: price, quantity: quantity }));
      // console.log("remove");
    }
  }
  return (
    <Wrapper>
      <div className="card">
        <div className="card-top">
          <img className="product-image" src={image} alt={name} />
          <button className="toggle-cart-button cur-po" onClick={handleClick}>
            {cartButton ? (
              <i className="plus-icon fa-solid fa-plus"></i>
            ) : (
              <i className="minus-icon fa-solid fa-minus"></i>
            )}
          </button>
        </div>
        <div className="card-bottom">
          <div className="product-price">${price}</div>
          <div className="product-name">{name}</div>
          <div className="product-quantity">{quantity}</div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Card;
