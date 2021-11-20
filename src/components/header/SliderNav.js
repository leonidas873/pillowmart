import { useState, useEffect } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import NavBar from "./NavBar";
import logo from "../../images/download.webp";
import "./header.css"

const SliderNav = ({showNav,handleClose}) => {
    
  
    return (
      <>
      <Offcanvas className="offcanvas-nav" show={showNav} onHide={handleClose}>
        <Offcanvas.Header closeButton>
        <div className="logo">
        <img src={logo} alt="logo" />
      </div>
        </Offcanvas.Header>
        <Offcanvas.Body>
         <NavBar/>
        </Offcanvas.Body>
      </Offcanvas>
      </>
    );
  }
  


  export default SliderNav;