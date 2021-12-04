import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavText = styled(NavLink)`
  padding: 10px;
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
`;

const Navigation = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  margin: 0;
  background: #fef8e8;
  padding: 20px 40px;

  a {
    text-align: center;
  }

  a:visited {
    color: black;
  }

  a:hover {
    color: orange;
  }
`;

const NavBar = () => {
  return (
    <Navigation>
      <NavText to="/">HEM</NavText>
      <NavText to="/bullar">BRÖD &amp; BULLAR</NavText>
      <p></p>
      <NavText to="/konditori">KONDITORI</NavText>
      <NavText to="/kontakt">KONTAKT</NavText>
    </Navigation>
  );
};

export default NavBar;
