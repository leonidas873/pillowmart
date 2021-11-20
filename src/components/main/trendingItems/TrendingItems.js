import "./trendingItems.css";
import itemImg1 from '../../../images/trend1.webp';
import itemImg2 from '../../../images/trend2.webp';
import itemImg3 from '../../../images/trend3.webp';
import itemImg4 from '../../../images/trend4.webp';
import itemImg5 from '../../../images/trend5.webp';
import itemImg6 from '../../../images/trend6.webp';

const TrendingItems = () => {
  return (
    <div className="trendingItems">
      <h2 className="trendingItems__heading">Trending Items</h2>
      <div className="trendingIetms__container">
        <div className="trendingItem">
          <img src={itemImg1} alt="" />
          <h3 >Cervical pillow for airplane car office nap pillow</h3>
          <p>FROM $5</p>
        </div>
        <div className="trendingItem">
          <img src={itemImg2} alt="" />
          <h3 >Cervical pillow for airplane car office nap pillow</h3>
          <p>FROM $5</p>
        </div>
        <div className="trendingItem">
          <img src={itemImg3} alt="" />
          <h3 >Cervical pillow for airplane car office nap pillow</h3>
          <p>FROM $5</p>
        </div>
        <div className="trendingItem">
          <img src={itemImg4} alt="" />
          <h3 >Cervical pillow for airplane car office nap pillow</h3>
          <p>FROM $5</p>
        </div>
        <div className="trendingItem">
          <img src={itemImg5} alt="" />
          <h3 >Cervical pillow for airplane car office nap pillow</h3>
          <p>FROM $5</p>
        </div>
        <div className="trendingItem">
          <img src={itemImg6} alt="" />
          <h3 >Cervical pillow for airplane car office nap pillow</h3>
          <p>FROM $5</p>
        </div>
      </div>
    </div>
  );
};


export default TrendingItems;