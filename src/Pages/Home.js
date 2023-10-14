import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";

const Wrapper = styled.section`
  background-color: var(--primary-color);
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  .hero-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    .heading {
      font-family: "Mortise";
      font-weight: 900;
      font-size: 60px;
      margin: 20px 0;
      text-align: center;
      padding: 0 15px;
    }
    .heading-paragraph {
      text-align: center;
      padding: 0 15px;
      margin-bottom: 50px;
    }

    .button-cta {
      padding: 20px 45px;
      border-radius: 40px;
      font-size: 20px;
      display: flex;
      transition: gap 0.3s;
      gap: 10px;
      .arrow {
        font-size: 25px;
      }
    }
    .button-cta:hover {
      gap: 18px;
      background-color: rgba(0, 0, 0, 0.2);
      color: var(--text-tertiary);
    }
  }
`;

const Home = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/products");
  }

  return (
    <Wrapper>
      <div className="hero-section">
        <h1 className="heading">Welcome to E-commerce</h1>
        <p className="heading-paragraph">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam non,
          nesciunt libero itaque doloremque mollitia ipsam? Facilis, esse
          assumenda veritatis earum fugit ab maxime ipsam autem voluptatem ex.
        </p>
        <button className="button-cta cur-po" onClick={handleClick}>
          Start Shopping <i className="arrow fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </Wrapper>
  );
};

export default Home;
