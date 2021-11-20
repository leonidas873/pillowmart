import "./mainSlider.css";
import { Carousel } from "react-bootstrap";
import client1 from "../../../images/client1.webp";
import client2 from "../../../images/client2.png";
import client3 from "../../../images/client3.webp";

const MainSlider = () => {
  return (
    <div className="mainSlider">
<Carousel  interval={5000} indicators={false}>
  <Carousel.Item>
    <div className="mainSlider__card">
    <div className="mainSlider__Card-content">
      <div className="mainSlider__image"> <img src={client1} alt=""/></div>
     
      
      <div className="mainSlider__note">"Working in conjunction with humanitarian aid agencies, we have supported programmes to help alleviate human suffering.</div>
      <div className="mainSlider__name">- Micky Mouse</div>
    </div>
    </div>

  </Carousel.Item>
  <Carousel.Item>
  <div className="mainSlider__card">
    <div className="mainSlider__Card-content">
      <div className="mainSlider__image"><img src={client2} alt=""/></div>
      
      
      <div className="mainSlider__note">"Working in conjunction with humanitarian aid agencies, we have supported programmes to help alleviate human suffering.</div>
      <div className="mainSlider__name">- Micky Mouse</div>
    </div>
    </div>
  </Carousel.Item>
  <Carousel.Item>
  <div className="mainSlider__card">
    <div className="mainSlider__Card-content">
      <div className="mainSlider__image"> <img src={client3} alt=""/></div>
     
      
      <div className="mainSlider__note">"Working in conjunction with humanitarian aid agencies, we have supported programmes to help alleviate human suffering.</div>
      <div className="mainSlider__name">- Micky Mouse</div>
    </div>
    </div>
  </Carousel.Item>
</Carousel>
</div>
  );
};

export default MainSlider;
