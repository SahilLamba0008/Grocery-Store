import React from "react";
import styled from "styled-components";
import Cart from "./Cart";

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--primary-color);
  padding: 0px 20px;
  height: 102px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  .logo {
    font-family: "Mortise";
    font-size: 30px;
    font-weight: 700;
  }
  @media (max-width: 960px) {
    background-color: var(--text-tertiary);
    box-shadow: none;
  }
`;

const Nav = () => {
  return (
    <Wrapper>
      <div className="left cur-po">
        <h1 className="logo">E-Commerce</h1>
      </div>
      <div className="right">
        <Cart />
      </div>
    </Wrapper>
  );
};

export default Nav;
