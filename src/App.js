import React from "react";
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import Header from "components/Header";
import MainSite from "components/MainSite";
import BullarBrod from "components/BullarBrod";
import Konditori from "components/Konditori";
import Kontakt from "components/Kontakt";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <main>
          <Header />
          {/* <MainSite /> */}
          <Routes>
            <Route path="/" element={<MainSite />} />
            <Route path="/bullar" element={<BullarBrod />} />
            <Route path="/konditori" element={<Konditori />} />
            <Route path="/kontakt" element={<Kontakt />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
};
