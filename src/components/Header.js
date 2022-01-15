import React from "react";
import NavBar from "./NavBar";
import styled from "styled-components";

const HeaderBox = styled.section`
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

const BackgroundImage = styled.img`
  background-image: url("./pictures/bakery front.jpeg");
  width: 100%;
  height: 500px;
  object-fit: cover;
  z-index: -1;
`;
const Logo = styled.img`
  background-image: url("./pictures/loga.jpg");
  position: absolute;
  border-radius: 50%;
  border: 7px solid white;
  margin-bottom: -90px;
  width: 320px;
  height: 320px;
`;

const Header = () => {
  return (
    <div>
      <HeaderBox>
        <BackgroundImage />
        <Logo alt="logo" />
      </HeaderBox>
      <NavBar />
    </div>
  );
};

export default Header;
