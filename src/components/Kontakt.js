import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import MobileKontakt from "./Mobilecomponents/MobilKontakt";

const KontaktBox = styled.article`
  margin: 70px auto;
  width: 1100px;
  display: flex;
  /* align-items: center; */
  justify-content: space-around;

  div {
    width: 500px;
  }

  p {
    padding: 0;
  }

  img {
    width: 500px;
    border-radius: 50px;
  }

  a {
    color: black;
    text-decoration: none;
  }
`;

const StorKBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const LillaKBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const Kontakt = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 775px)" });
  const isTabletOrBigger = useMediaQuery({ query: "(min-width: 776px)" });

  return (
    <>
      {isMobile && <MobileKontakt />}
      {isTabletOrBigger && (
        <KontaktBox>
          <StorKBox>
            <h1>Kontakt och öppettider:</h1>

            <LillaKBox>
              <div>
                <p>
                  <b>Adress:</b>
                </p>
                <p>Årstavägen 51</p>
                <p> 120 54 Årsta</p>
                <a href="tel:+468-918050">08-91 80 50</a>
              </div>
              <div>
                <p>
                  <b>Öppettider:</b>
                </p>
                <p>Mån-fre: 07.00-18:00</p>
                <p>Lör: 08:00-16:00</p>
                <p>Sön: 10:00-16:00</p>
              </div>
            </LillaKBox>
          </StorKBox>
          <img src="./pictures/Danny.jpeg" alt="ownerpic" />
        </KontaktBox>
      )}
    </>
  );
};

export default Kontakt;
