import "./header.css";
import logo from "../../images/download.webp";

import {GrSearch} from "react-icons/gr";
import {useState} from 'react';
import {ImCart} from "react-icons/im";
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineClose} from 'react-icons/ai';
import SliderNav from "./SliderNav";
import NavBar from "./NavBar";
const Header = () => {

const [header, setHeader] = useState(false);
const [showNav, setShowNav] = useState(false);
const [searchSlider, setSearchSlider] = useState(false)

const handleClose = () => setShowNav(false);
const headerOnScroll = () => {
  if(window.scrollY>=80){
    setHeader(true)
  } else {
    setHeader(false)
  }
}

const toggleSearchSlider = () => {
  setSearchSlider(!searchSlider)
}


window.addEventListener('scroll', headerOnScroll);

  return (
    <div className={`Header ${header ? "active" : ''}`}>
      <div className="Header-content">
        <GiHamburgerMenu className="burger-icon" onClick={()=> setShowNav(true)}/>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <NavBar type="nav-bar" />
      <div className="header-icons">
          <GrSearch onClick={toggleSearchSlider}/>
          <ImCart/>
      </div>
      </div>
      <SliderNav showNav={showNav} handleClose={handleClose}/>
      <div className={"header-searchSlider " + (searchSlider ? "searchSlider-active" : "")}>
        <div className="searchSldier-content">
        <input type="text" placeholder="Search here" />
        <AiOutlineClose className="searchSlider-close" onClick={()=>setSearchSlider(false)}/>
        </div>
      </div>
    </div>
  );
};

export default Header;
