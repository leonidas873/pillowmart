import './section.css';


const Section = ({type,imgSource}) => {
    return (
        <div className={"section " + type}>
            <div className="section-col-img">
            <img src={imgSource} alt=" " /> 
            </div>
            <div className="section-col-text">
                <h4 className="section__price">Started from $10</h4>
                <h3 className="section__note">Printed memory foam brief modern throw pillow case</h3>
                <button className="section__btn">EXPLORE NOW</button>
            </div>
            
        </div>
    )
}

export default Section;