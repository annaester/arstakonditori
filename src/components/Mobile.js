import React from "react";
import styled from "styled-components";

const HomeScreen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    position: relative;
    object-fit: scale-down;
    z-index: -1;
    height: 100vh;
  }

  p {
    position: absolute;
    width: 150px;
    height: 150px;
    background-image: url("./pictures/loga.jpg");
    background-size: 150px 150px;
    border-radius: 50%;
    border: 1px solid white;
  }
`;

const Mobile = () => {
  return (
    <HomeScreen>
      <p>Hello from mobile</p>
      <img src="./pictures/budapest.jpeg" alt="backgroung" />
    </HomeScreen>
  );
};

export default Mobile;
