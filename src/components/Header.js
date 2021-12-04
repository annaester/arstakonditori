import React from "react";
import NavBar from "./NavBar";
import "./header.css";

// const Background = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
// `;

const Header = () => {
  return (
    <div>
      <section className="header-box">
        <img
          className="backgroundImg"
          src="./pictures/bakery front.jpeg"
          alt="backgroundimg"
        />
        <img
          className="logo"
          src="./pictures/loga.jpg"
          alt="logo"
          width="300px"
        />
      </section>
      <NavBar />
    </div>
  );
};

export default Header;
