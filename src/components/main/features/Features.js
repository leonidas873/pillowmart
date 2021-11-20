import './features.css';
import {AiOutlineCreditCard} from 'react-icons/ai';
import {HiOutlineStatusOnline} from 'react-icons/hi';
import {GrDeliver} from 'react-icons/gr';
import {BsGift} from 'react-icons/bs';


const Features = () => {
    return(
        <div className="features">
            <div className="features-paragraphs">
                <p className="features-p1">Credibly innovate granular internal or organic sources whereas standards.</p>
                <p className="features-p2">Seamlessly empower fully researched growth strategies and interoperable internal or “organic” sources. Credibly innovate granular internal or “organic” sources whereas high standards in web-readiness.</p>
            </div>
            <div className="features-logos">
                <div className="features-logos-row">
                <div className="features-box">
                    <AiOutlineCreditCard className="features-icon"/>
                    <p>Credit Card Support</p>
                </div>
                <div className="features-box">
                    <HiOutlineStatusOnline className="features-icon"/>
                    <p>Online Order</p>
                </div>
                </div>
                <div className="features-logos-row">
                <div className="features-box">
                    <GrDeliver className="features-icon"/>
                    <p>Free Delivery</p>
                </div>
                <div className="features-box">
                    <BsGift className="features-icon"/>
                    <p>Product with Gift</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Features;