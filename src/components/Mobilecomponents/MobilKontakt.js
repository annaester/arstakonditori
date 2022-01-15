import React from "react";
import styled from "styled-components";
import NavBarMobile from "./NavBarMobile";

const KontaktBox = styled.section`
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
  }

  a {
    color: black;
    text-decoration: none;
  }

  p {
    margin: 2px;
  }

  h4 {
    margin-bottom: 10px;
  }
`;

const MobileKontakt = () => {
  return (
    <>
      <NavBarMobile />
      <KontaktBox>
        <img
          src="../pictures/171001-årsta-konditori-sthlm.jpeg"
          alt="heartpic"
        />
        <section>
          <div>
            <h4>Öppettider:</h4>
            <p>Mån-fre: 07.00-18:00</p>
            <p>Lör: 08:00-16:00</p>
            <p>Sön: 10:00-16:00</p>
          </div>
          <div>
            <h4>Hitta hit:</h4>

            <p>Årstavägen 51</p>
            <p>120 54 Årsta</p>

            <h4>Kontakt:</h4>
            <a href="tel:+468-918050">08-91 80 50</a>
          </div>
        </section>
      </KontaktBox>
    </>
  );
};

export default MobileKontakt;
