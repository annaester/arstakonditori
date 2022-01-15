import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styled from "styled-components";
import MobileBuBr from "./Mobilecomponents/MobileBuBr";
import { useMediaQuery } from "react-responsive";

const BildSlider = styled.img`
  width: 500px;
  height: 300px;
  object-fit: contain;
`;

const AliceBox = styled.div`
  width: 500px;
`;

const BrodGallery = () => (
  <AliceBox>
    <AliceCarousel autoPlay autoPlayInterval="2000">
      <BildSlider src="./pictures/bullar.jpeg" alt="brod" />
      <BildSlider src="./pictures/bullar2.jpeg" alt="brod" />
      <BildSlider src="./pictures/foccacia.jpeg" alt="brod" />
      <BildSlider src="./pictures/frallor.jpeg" alt="brod" />
      <BildSlider src="./pictures/kavring.jpeg" alt="brod" />
      <BildSlider src="./pictures/semlor.jpeg" alt="brod" />
      <BildSlider src="./pictures/brod.jpg" alt="brod" />
      <BildSlider src="./pictures/wienersemla.jpg" alt="brod" />
      <BildSlider src="./pictures/lussekatt.jpg" alt="brod" />
      <BildSlider src="./pictures/brodhylla.jpg" alt="brod" />
    </AliceCarousel>
  </AliceBox>
);

const BakBox = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px 0;
`;

const BullarBrod = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 775px)" });
  const isTabletOrBigger = useMediaQuery({ query: "(min-width: 776px)" });

  return (
    <>
      {isMobile && <MobileBuBr />}
      {isTabletOrBigger && (
        <BakBox>
          <div>
            <p>Dagsfärsktbröd varje dag. Ett urval av vårt sortiment:</p>
            <ul>
              <li>Limpor</li>
              <li>Frallor</li>
              <li>Bullar</li>
              <li>Semlor</li>
              <li>Släta bullar</li>
              <li>Kransar</li>
            </ul>
          </div>

          <BrodGallery />
        </BakBox>
      )}
    </>
  );
};

export default BullarBrod;
