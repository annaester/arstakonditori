import React from "react";
import styled from "styled-components";
import NavBarMobile from "./NavBarMobile";

const HomeScreen = styled.div`
  display: flex;
  justify-content: center;
  /* align-content: center; */
  align-items: center;
  height: 100vh;
  background-image: url(./pictures/budapest.jpeg);
  background-size: cover;
  background-position: center;
  /* align-items: center;
  justify-content: center; */

  /* img {
    position: relative;
    object-fit: scale-down;
    z-index: -1;
    height: 100vh;
    background-attachment: fixed;
  } */

  img {
    /* position: absolute; */
    width: 150px;
    height: 150px;
    /* background-image: url("./pictures/loga.jpg"); */
    /* background-size: 150px 150px; */
    border-radius: 50%;
    border: 1px solid white;
  }
`;

const Mobile = () => {
  return (
    <>
      <NavBarMobile />
      <HomeScreen>
        <img src="./pictures/loga.jpg" alt="logo" />
        {/* <img src="./pictures/budapest.jpeg" alt="backgroung" /> */}
      </HomeScreen>
    </>
  );
};

export default Mobile;
