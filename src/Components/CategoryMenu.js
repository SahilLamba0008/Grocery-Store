import React, { useState } from "react";
import styled from "styled-components";
import CategoryListItem from "./CategoryListItem";

const Wrapper = styled.section`
  width: 250px;
  margin-left: 20px;

  .category-list {
    height: 80vh;
    overflow-y: scroll;
    padding-right: 10px;
    white-space: nowrap;
    /* WebKit scrollbar styling */
    &::-webkit-scrollbar {
      width: 10px;
      background: var(--scrollbar-bg);
    }

    &::-webkit-scrollbar-thumb {
      background: var(--secondary-color);
      border-radius: 20px;
    }
    @media (max-width: 960px) {
      height: 100px;
      display: flex;
      width: 95vw;
      overflow-y: hidden;
      padding-bottom: 15px;
      text-align: center;
      &::-webkit-scrollbar {
        height: 0px;
      }
    }
    @media (max-width: 600px) {
      width: 94vw;
    }
    @media (max-width: 480px) {
      width: 92vw;
    }
  }
`;

const CategoryMenu = ({ categories }) => {
  const [activeItem, setActiveItem] = useState(null);
  return (
    <Wrapper>
      <div className="category-list">
        {categories.map((category, index) => (
          <CategoryListItem
            key={`${category.name} ${index}`}
            name={category.name}
            icon={category.icon}
            id={`${category.name} ${index}`}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default CategoryMenu;
