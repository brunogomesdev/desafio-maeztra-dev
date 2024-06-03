import '../styles/marcas.scss'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Marcas = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
        }
      }
    ]
  };

    return (
      <div id="mz-marcas">
        <div className="slider-titulo">Marcas Parceiras</div>
        <div className="slider-container">
          <Slider {...settings}>
            
              <div className="mz-marcas-slider">
                <div className="mz-marcas-slider-image">
                  <img src="/desafio-maeztra-dev/layout/src/assets/images/marcas-01.png" alt="Comma" />
                </div>
              </div>

              <div className="mz-marcas-slider">
                <div className="mz-marcas-slider-image">
                  <img src="/desafio-maeztra-dev/layout/src/assets/images/marcas-02.png" alt="Melisa" />
                </div>
              </div>

              <div className="mz-marcas-slider">
                <div className="mz-marcas-slider-image">
                  <img src="/desafio-maeztra-dev/layout/src/assets/images/marcas-03.png" alt="Forever 21" />
                </div>
              </div>

              <div className="mz-marcas-slider">
                <div className="mz-marcas-slider-image">
                  <img src="/desafio-maeztra-dev/layout/src/assets/images/marcas-04.png" alt="Zara" />
                </div>
              </div>

              <div className="mz-marcas-slider">
                <div className="mz-marcas-slider-image">
                  <img src="/desafio-maeztra-dev/layout/src/assets/images/marcas-05.png" alt="Ann Taylor" />
                </div>
              </div>
            
          </Slider>
        </div>
      </div>
    );
  };
  
  export default Marcas;