import React from "react";
import styled from "styled-components";

const Footerinfo = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fef8e8;

  h4 {
    margin: 2px;
  }
  p {
    font-size: 15px;
    margin: 2px;
  }

  a {
    color: black;
    text-decoration: none;
    font-size: 15px;
    margin-top: 3px;
  }
`;

const Line = styled.hr`
  margin: 0;
`;

const Footer = () => {
  return (
    <>
      <Line />
      <Footerinfo>
        <h4>Årsta Konditori</h4>
        <p>Årstavägen 51</p>
        <p>120 54 Årsta</p>
        <a href="tel:+468-918050">08-91 80 50</a>
      </Footerinfo>
    </>
  );
};

export default Footer;
