import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import Header from "components/Header";
import BullarBrod from "components/BullarBrod";
import Konditori from "components/Konditori";
import Kontakt from "components/Kontakt";
import Footer from "components/Footer";
import Mobile from "components/Mobile";
import OmOss from "components/OmOss";

export const App = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 775px)" });
  const isTabletOrBigger = useMediaQuery({ query: "(min-width: 776px)" });

  return (
    <>
      {isMobile && (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Mobile />} />
            <Route path="/omoss" element={<OmOss />} />
            <Route path="/bullar" element={<BullarBrod />} />
            <Route path="/konditori" element={<Konditori />} />
            <Route path="/kontakt" element={<Kontakt />} />
          </Routes>
        </BrowserRouter>
      )}
      {isTabletOrBigger && (
        <BrowserRouter>
          <main>
            <Header />
            {/* <MainSite /> */}
            <Routes>
              <Route path="/" element={<OmOss />} />
              <Route path="/bullar" element={<BullarBrod />} />
              <Route path="/konditori" element={<Konditori />} />
              <Route path="/kontakt" element={<Kontakt />} />
            </Routes>
            <Footer />
          </main>
        </BrowserRouter>
      )}
    </>
  );
};
