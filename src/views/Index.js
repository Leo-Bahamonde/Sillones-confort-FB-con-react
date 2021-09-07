import React from "react";

// reactstrap components

// core components
import IndexNavbar from "../components/Navbars/IndexNavbar.js";
import IndexHeader from "../components/Headers/IndexHeader";
import DemoFooter from "../components/Footers/DemoFooter.js";

// index sections

import SectionCarousel from "../views/index-sections/SectionCarousel";
import SectionDark from "../views/index-sections/SectionDark.js";
import SectionReservation from "../views/index-sections/SectionReservation.js";
import Cards from "../components/Cards/Cards";
import WhatsAppIcon from '../components/WhatsAppIcon/WhatsAppIcon'

//css


function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  }); 
  return (
    <>
      
      <IndexNavbar/>
      <IndexHeader />
        <div className="main">
        <SectionDark />
            <SectionCarousel />         
            <Cards/>             
            <SectionReservation/>       
            <DemoFooter /> 
            <WhatsAppIcon/>
        </div>
    </>
  );
}

export default Index;
