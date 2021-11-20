import './footer.css';
import logo from '../../../images/download.webp';
import {FaFacebookF, FaInstagram, FaGooglePlusG,FaLinkedinIn} from 'react-icons/fa';

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer__nav">
<div className="footer__nav-content">
    <div className="footer__nav-raw">
    <img src={logo} alt=""/>
    <ul className="footer__nav-items">
        <li className="footer__nav-item">Home</li>
        <li className="footer__nav-item">About</li>
        <li className="footer__nav-item">Products</li>
        <li className="footer__nav-item">Pages</li>
        <li className="footer__nav-item">Blog</li>
        <li className="footer__nav-item">Contact</li>
    </ul>
    </div>                                  
    <div className="footer-logos">
        <FaFacebookF className="footer-logo"/>
        <FaInstagram className="footer-logo"/>
        <FaGooglePlusG className="footer-logo"/>
        <FaLinkedinIn className="footer-logo"/>
    </div>
</div>

            </div>
            <div className="footer__copyright">
                <div className="copyright__content">
            <div className="copyright-section1"><p>Copyright ©2021 All rights reserved | This template is made by Levan Khaburzania</p></div>
            <div className="copyright-section2"><p>Turms & Conditions</p>
            <p>FAQ</p></div>
            </div>
            </div>
        </div>
    )
}

export default Footer;