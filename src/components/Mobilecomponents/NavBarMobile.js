import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CgMenu } from "react-icons/cg";
import { VscClose } from "react-icons/vsc";

const MobileNavBox = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  position: absolute;
  padding: 10px;
`;

// const NavTextBox = styled.div`
//   display: flex;
//   flex-direction: column;
//   background: rgba(0, 0, 0, 0.5);
// `;

const NavText = styled(NavLink)`
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
  color: white;
  padding: 10px 0;
`;

const NavBarMobile = () => {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = <CgMenu size="40px" onClick={() => setOpen(!open)} />;

  const closeIcon = <VscClose size="40px" onClick={() => setOpen(!open)} />;

  // const closemobnav = () => setOpen(false);

  return (
    <MobileNavBox>
      {open ? closeIcon : hamburgerIcon}
      {open && (
        <>
          <NavText to="/" closemobnav="closemobnav">
            HEM
          </NavText>
          <NavText to="/bullar">BRÖD &amp; BULLAR</NavText>
          <NavText to="/konditori">KONDITORI</NavText>
          <NavText to="/kontakt">KONTAKT</NavText>
        </>
      )}
    </MobileNavBox>
  );
};

export default NavBarMobile;
