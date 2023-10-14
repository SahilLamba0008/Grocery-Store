import React from "react";
import { useSelector } from "react-redux";
import { getItemSelector } from "../Redux/Slices/cartSlice";
import styled from "styled-components";

const Wrapper = styled.div`
  .cart-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    height: 34px;
    width: 77px;
    border-radius: 150px;
    background-color: var(--text-tertiary);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    .cart-container-content {
      display: flex;
      align-items: center;
    }
    .cart-value {
      font-weight: 800;
      margin-top: 12px;
    }
  }
  .cart-container:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  }
`;
const Cart = () => {
  const items = useSelector(getItemSelector);
  console.log(items);

  return (
    <Wrapper>
      <div className="cart-container cur-po">
        <div className="cart-container-content">
          <img src="./Assets/cart.svg" alt="cart" />
          <p className="cart-value">{items.length}</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Cart;
