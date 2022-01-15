import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import MobileKonditori from "./Mobilecomponents/MobileKonditori";

const BildSlider = styled.img`
  width: 500px;
  height: 300px;
  object-fit: contain;
`;

const AliceBox = styled.div`
  width: 500px;
`;

const KonditoriGallery = () => (
  <AliceBox>
    <AliceCarousel autoPlay autoPlayInterval="2000">
      <BildSlider src="./pictures/bakverk.jpeg" alt="kondisbit" />
      <BildSlider src="./pictures/budapest.jpeg" alt="kondisbit" />
      <BildSlider src="./pictures/GIIA.jpeg" alt="kondisbit" />
      <BildSlider src="./pictures/halloween.jpeg" alt="kondisbit" />
      <BildSlider src="./pictures/hjärtan.jpeg" alt="kondisbit" />
      <BildSlider src="./pictures/dammsugare.jpg" alt="kondisbit" />
      <BildSlider src="./pictures/kakor.jpg" alt="kondisbit" />
      <BildSlider src="./pictures/morotskaka.jpg" alt="kondisbit" />
      <BildSlider src="./pictures/prinsesstårta.jpg" alt="kondisbit" />
      <BildSlider src="./pictures/påsktema.jpg" alt="kondisbit" />
      <BildSlider src="./pictures/jultema.jpg" alt="kondisbit" />
      <BildSlider src="./pictures/studenttårta.jpg" alt="kondisbit" />
    </AliceCarousel>
  </AliceBox>
);

const BakBox = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px 0;
`;

const Konditori = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 775px)" });
  const isTabletOrBigger = useMediaQuery({ query: "(min-width: 776px)" });

  return (
    <>
      {isMobile && <MobileKonditori />}

      {isTabletOrBigger && (
        <BakBox>
          <div>
            <p>Vi bakar svenska klassiker bla:</p>
            <ul>
              <li>Dammsugare</li>
              <li>Mazariner</li>
              <li>Klenäter</li>
              <li>Biskvier</li>
              <li>Småkakor</li>
              <li>Budapestrulle</li>
            </ul>
            <p>Även tårtor, bakelser och säsongsbaserade bakverk.</p>
          </div>

          <KonditoriGallery />
        </BakBox>
      )}
    </>
  );
};

export default Konditori;
