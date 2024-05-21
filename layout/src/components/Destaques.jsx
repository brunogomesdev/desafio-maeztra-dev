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
                <div className="mz-destaques-slider-container">
                  <h3>Promoções de Outono</h3>
                  <p>Confiras os melhores looks para combinar<br />com você nesse Outono</p>
                  <button type="submit">Enviar</button>
                </div>
              </div>

              <div className="mz-destaques-slider02">
                <div className="mz-destaques-slider-container">
                  <h3>Promoções de Outono</h3>
                  <p>Confiras os melhores looks para combinar<br />com você nesse Outono</p>
                  <button type="submit">Enviar</button>
                </div>
              </div>

              <div className="mz-destaques-slider03">
                <div className="mz-destaques-slider-container">
                  <h3>Promoções de Outono</h3>
                  <p>Confiras os melhores looks para combinar<br />com você nesse Outono</p>
                  <button type="submit">Enviar</button>
                </div>
              </div>
            
          </Slider>
        </div>
      </div>
    );
  };
  
  export default Destaques;