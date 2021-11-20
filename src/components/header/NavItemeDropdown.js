import "./header.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";
const NavItemDropdown = ({ navItemHeader, navItemOptions }) => {
  const [showNavItemOptions, setShowNavItemOptions] = useState(false);

  return (
    <div className="nav-item__dropDown" 
    onMouseLeave={() => {
        setShowNavItemOptions(false);
        console.log("mouse left")
        }}>
      <h4
        className="nav-item__header"
        onMouseEnter={() => {
            setShowNavItemOptions(true);
          }}
        
      >
        {navItemHeader}
        <IoMdArrowDropdown />
      </h4>
      <ul
       
        className={
          showNavItemOptions ? "nav-item__options active" : "nav-item__options"
        }
      >
        {navItemOptions.map((option) => (
          <li className="nav-item__option" key={option}>{option}</li>
        ))}
      </ul>
    </div>
  );
};

export default NavItemDropdown;
