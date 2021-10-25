import React, { useState, useEffect } from "react";
import Blogs from "../pages/Blogs";
import { fontSizes, mobileFontSizes } from "../assets/mixer.json";
const Routes = () => {
  const [currentFontSizes, setCurrentFontSizes] = useState(fontSizes);
  const [isMobileView, setMobileViewBoolean] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 500) {
      if (isMobileView === false) {
        setMobileViewBoolean(true);
        setCurrentFontSizes(mobileFontSizes);
      }
    } else if (window.innerWidth > 500) {
      if (isMobileView === true) {
        setMobileViewBoolean(false);
        setCurrentFontSizes(fontSizes);
      }
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Blogs fontSizes={currentFontSizes} isMobileView={isMobileView} />
    </>
  );
};

export default Routes;
