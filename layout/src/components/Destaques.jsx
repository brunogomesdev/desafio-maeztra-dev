import '../styles/destaques.scss'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Destaques = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

    return (
      <div id="mz-destaques">
        <div className="slider-container">
          <Slider {...settings}>
            <div className="mz-destaques-slider01">
              <h3>Promoções de Outono</h3>
              <p>Confiras os melhores looks para combinar com você nesse Outono</p>
            </div>
            <div className="mz-destaques-slider02">
              <h3>Slider 02</h3>
            </div>
            <div className="mz-destaques-slider03">
            < h3>Slider 03</h3>
            </div>
          </Slider>
        </div>
      </div>
    );
  };
  
  export default Destaques;