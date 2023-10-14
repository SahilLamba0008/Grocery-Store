import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  .image-container {
    display: none;
  }
  .list-item {
    color: var(--text-secondary);
    font-weight: 800;
    padding: 10px 40px 10px 20px;
    font-size: 16px;
    border-radius: 10px;
    margin-bottom: 10px;
  }
  .list-item:hover {
    background-color: var(--secondary-color);
    color: var(--text-tertiary);
  }
  @media (max-width: 960px) {
    .list-wrapper {
      width: 100px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .image-container {
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--text-secondary);
        height: 48px;
        width: 48px;
        background-color: var(--scrollbar-bg);
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
        border-radius: 5px;
        padding: 12px;
        & i {
          font-size: 24px;
        }
      }
      .list-item {
        padding-right: 20px;
        white-space: pre-wrap;
      }
      .list-item:hover {
        background-color: transparent;
        color: var(--text-secondary);
      }
    }
    .list-wrapper.active {
      .image-container {
        background-color: var(--secondary-color);
        color: var(--text-tertiary);
      }
      .list-item {
        color: var(--secondary-color);
      }
    }
  }
`;

const CategoryListItem = ({ name, id, icon, activeItem, setActiveItem}) => {
  function filterName(str) {
    let ans = "";
    let arr = str.split(" ");
    ans = arr[0];
    if (ans === "Prepared") ans = "Sweets";
    return ans;
  }
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 960);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 960);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let filteredName = isMobile ? filterName(name) : name;
  console.log(filteredName, isMobile);

  function handleCLick(e) {
    e.preventDefault();
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setActiveItem(id);
  }
  const isActive = activeItem === id;

  return (
    <Wrapper onClick={handleCLick}>
      <div className={`list-wrapper ${isActive ? "active" : ""}`}>
        <div className="image-container cur-po">{icon}</div>
        <div className="list-item cur-po">{filteredName}</div>
      </div>
    </Wrapper>
  );
};

export default CategoryListItem;
