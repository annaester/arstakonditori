import React from "react";
import styled from "styled-components";
import NavBarMobile from "./NavBarMobile";

const BrBuBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 300px;
    width: 100vw;
    object-fit: cover;
  }

  div {
    text-align: center;
    width: 300px;
  }

  ul {
    text-align: left;
  }
`;

const MobileBuBr = () => {
  return (
    <>
      <NavBarMobile />
      <BrBuBox>
        <img src="../pictures/frallor.jpeg" alt="bröd" />
        <div>
          <h4>Dagsfärsktbröd varje dag.</h4>
          <h4>Ett urval av vårt sortiment:</h4>
          <ul>
            <li>Limpor</li>
            <li>Frallor</li>
            <li>Bullar</li>
            <li>Semlor</li>
            <li>Släta bullar</li>
            <li>Kransar</li>
          </ul>
        </div>
      </BrBuBox>
    </>
  );
};

export default MobileBuBr;
