import React from "react";
import Nav from "../Components/Nav";
import styled from "styled-components";
import CategoryMenu from "../Components/CategoryMenu";
import { data } from "../Data/data";
import ProductsMenu from "../Components/ProductsMenu";

const categories = data[0].categories;
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;

  .products {
    display: flex;
    margin-top: 20px;
    .header-divider {
      display: none;
    }
    .side-bar {
    }
    .products-menu {
      height: 80vh;
      overflow-y: scroll;

      .products-menu-list {
        margin-left: 38px;
      }
      .styled-line {
        border: none;
        height: 1px;
        background-color: var(--scrollbar-bg);
        margin: 30px 0;
      }
      /* WebKit scrollbar styling */
      &::-webkit-scrollbar {
        width: 0px;
        background: var(--scrollbar-bg);
      }

      &::-webkit-scrollbar-thumb {
        background: var(--secondary-color);
        border-radius: 20px;
      }
    }
    .footer {
      text-align: center;
      background-color: var(--primary-color);
    }

    @media (max-width: 960px) {
      display: block;
      .products-menu {
        height: 69vh;
        .products-menu-list {
          margin-left: 20px;
          margin-top: 25px;
        }
        .styled-line {
          display: none;
        }
      }
    }

    @media (max-width: 960px) {
      display: block;
      margin-top: 0;
      .header-divider {
        display: block;
        border: none;
        height: 1px;
        background-color: var(--scrollbar-bg);
        margin: 0;
      }
    }
  }
`;

const Products = () => {
  return (
    <Wrapper>
      <Nav />
      <div className="products">
        <div className="side-bar">
          <CategoryMenu categories={categories} />
        </div>
        <hr className="header-divider" />
        <div className="products-menu">
          {categories.map((category, index) => {
            return (
              <div key={`${category.name} ${index}`}>
                <div
                  className="products-menu-list"
                  id={`${category.name} ${index}`}
                >
                  <ProductsMenu
                    name={category.name}
                    products={category.products}
                  />
                </div>
                <hr className="styled-line" />
              </div>
            );
          })}
          <div className="footer">Footer or Some other section</div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Products;
