import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./Card";

const Wrapper = styled.section`
  .loading-animation {
    width: 75vw;
    height: 220px;
    background: linear-gradient(-90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
  }

  @keyframes loading {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
  .products-list {
    display: flex;
    flex-direction: column;
    gap: 5px;

    overflow-x: scroll;
    &::-webkit-scrollbar {
      height: 0px;
    }
    .products-list-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left-text {
        box-sizing: border-box;

        .title-text {
          font-size: 30px;
          font-weight: 700;
          font-family: "Mortise";
          transition: 0.3s;
        }
        .title-text:hover {
          margin-right: 8px;
        }
        .right-arrow {
          font-size: 20px;
          font-weight: 700;
          margin-top: 10px;
          margin-left: 8px;
        }
      }
      .right-text {
        display: none;
        font-weight: 700;
        font-size: 12px;
        color: var(--secondary-color);
        padding-right: 20px;
      }
      @media (max-width: 960px) {
        .right-text {
          display: inline-block;
        }
      }
    }
    .products-list-content {
      display: flex;
    }
  }
`;
const ProductsMenu = ({ name, products }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Wrapper>
      {loading ? (
        <div>
          <div className="loading-animation"></div>
        </div>
      ) : (
        <div className="products-list">
          <div className="products-list-title">
            <div className="left-text">
              <span className="title-text cur-po">{name}</span>
              <i className="right-arrow fa-solid fa-chevron-right"></i>
            </div>
            <div className="right-text">View all</div>
          </div>
          <div className="products-list-content">
            {products.map((product, index) => (
              <Card
                key={`${product.name} ${index}`}
                image={product.image}
                price={product.price}
                name={product.name}
                quantity={product.quantity}
              />
            ))}
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default ProductsMenu;
