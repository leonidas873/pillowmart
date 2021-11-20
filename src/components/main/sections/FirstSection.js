import './section.css';
import pillowImage1 from "../../../images/pillow1.webp";
import dots from '../../../images/download (1).webp'

const FirstSection = () => {
    return(
        <div className="firstSection">
            <div className="firstSection-col">
            <div className="firstSection__heading">Best quality pillow</div>
            <p className="firstSection__paragraph">Seamlessly empower fully researched growth strategies and interoperable internal</p>
            <button className="firstSection__btn">Shop Now</button>
            </div>
            <div className="firstSection-col">
                <div className="firstSection-col-wrapper">
                <img className="pillow-image1" src={pillowImage1} alt="pillow-image" />
                <img className="dots" src={dots} alt="dots" />
                </div>
            </div>
            
        </div>
    )
}

export default FirstSection;