import '../styles/beneficios.scss'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Beneficios = () => {

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
      <div id="mz-beneficios">
        <div className="slider-titulo">Por que comprar na Maeztra?</div>
        <div className="slider-container">
          <Slider {...settings}>
            
              <div className="mz-beneficios-slider01">
                <div className="mz-beneficios-slider-image">
                  <img src="/src/assets/images/icon-beneficios-01.png" alt="Produtos importados" />
                </div>
                <div className="mz-beneficios-slider-container">
                  <h3>Produtos importados</h3>
                  <p>Produto de Alta Qualidade</p>
                </div>
              </div>

              <div className="mz-beneficios-slider02">
                <div className="mz-beneficios-slider-image">
                  <img src="/src/assets/images/icon-beneficios-02.png" alt="Estoque no Brazil" />
                </div>
                <div className="mz-beneficios-slider-container">
                  <h3>Estoque no Brazil</h3>
                  <p>Produtos mais perto de você!</p>
                </div>
              </div>

              <div className="mz-beneficios-slider03">
                <div className="mz-beneficios-slider-image">
                  <img src="/src/assets/images/icon-beneficios-03.png" alt="Trocas Garantidas" />
                </div>
                <div className="mz-beneficios-slider-container">
                  <h3>Trocas Garantidas</h3>
                  <p>Trocas em até 48 horas, vejas as regras</p>
                </div>
              </div>

              <div className="mz-beneficios-slider04">
                <div className="mz-beneficios-slider-image">
                  <img src="/src/assets/images/icon-beneficios-04.png" alt="Ganhe 5% off" />
                </div>
                <div className="mz-beneficios-slider-container">
                  <h3>Ganhe 5% off</h3>
                  <p>Pagando à vista no Cartão</p>
                </div>
              </div>

              <div className="mz-beneficios-slider05">
                <div className="mz-beneficios-slider-image">
                  <img src="/src/assets/images/icon-beneficios-05.png" alt="Produtos importados" />
                </div>
                <div className="mz-beneficios-slider-container">
                  <h3>Frete Grátis</h3>
                  <p>Em compras acima de R$ 499,00</p>
                </div>
              </div>
            
          </Slider>
        </div>
      </div>
    );
  };
  
  export default Beneficios;