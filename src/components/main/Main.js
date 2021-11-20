import './main.css';
import FirstSection from './sections/FirstSection';
import pillow2 from '../../images/pillow2.webp';
import pillow3 from '../../images/pillow3.webp';
import pillow4 from '../../images/pillow4.webp';
import Section from './sections/Section';
import TrendingItems from './trendingItems/TrendingItems';
import MainSlider from './mainSlider/MainSlider';
import Features from './features/Features';
import Subscribe from './subscribe/Subscribe';
import Footer from './footer/Footer';

const Main = () => {
    return(
        <div class="Main">
            <FirstSection/>
            <Section type="img-left" imgSource={pillow4}/>
            <Section type="img-right" imgSource={pillow2}/>
            <Section type="img-left" imgSource={pillow3}/>
            <Section type="img-right" imgSource={pillow4}/>
            <TrendingItems/>
            <MainSlider />
            <Features/>
            <Subscribe/>
            <Footer/>
             </div>
    )
}

export default Main;