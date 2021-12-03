import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import "./navbar.css";

const NavText = styled(NavLink)`
  padding: 10px;
  :hover {
    color: white;
  }
  :active {
    color: red;
  }
`;

const Navigation = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 0;
  background: grey;
  padding: 20px 40px;
`;

const NavBar = () => {
  return (
    <Navigation>
      <NavText to="/bullar">bröd</NavText>
      <NavText to="/konditori">konditori</NavText>
      <NavText to="/">mat</NavText>
      <NavText to="/kontakt">kontakt</NavText>
    </Navigation>
  );
};

export default NavBar;
