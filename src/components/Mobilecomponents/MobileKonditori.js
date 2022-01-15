import React from "react";
import styled from "styled-components";
import NavBarMobile from "./NavBarMobile";

const KondisBox = styled.section`
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

  a {
    color: black;
    text-decoration: none;
  }
`;

const MobileKonditori = () => {
  return (
    <>
      <NavBarMobile />
      <KondisBox>
        <img src="../pictures/hjärtan.jpeg" alt="hearts" />
        <div>
          <h4>Vi bakar svenska klassiker bla:</h4>
          <ul>
            <li>Dammsugare</li>
            <li>Mazariner</li>
            <li>Klenäter</li>
            <li>Biskvier</li>
            <li>Småkakor</li>
            <li>Budapestrulle</li>
          </ul>
          <p>
            <i>Även tårtor, bakelser och säsongsbaserade bakverk.</i>
          </p>
          <p>Vid beställning var god ring konditoriet på:</p>
          <a href="tel:+468-918050">08-91 80 50</a>
        </div>
      </KondisBox>
    </>
  );
};

export default MobileKonditori;
