import "./header.css";
import NavItemDropdown from "./NavItemeDropdown";

const NavBar = ({type}) => {

    const product = ["Product List", "Product Details"];
    const pages = ["Login","Product Checkout"];
    const blog = ["Blog", "Single Blog"];

    return(
        <div className={type}>
        <ul className="nav-bar__items">
          <li className="nav-bar__item">Home</li>
          <li className="nav-bar__item">About</li>
          <NavItemDropdown navItemHeader="Product" navItemOptions={product}/>
          <NavItemDropdown navItemHeader="Pages" navItemOptions={pages}/>
          <NavItemDropdown navItemHeader="Blog" navItemOptions={blog}/>
          <li className="nav-bar__item">Contact</li>
        </ul>
      </div>
    )
}
export default NavBar;