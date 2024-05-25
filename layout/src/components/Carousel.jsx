import { useEffect, useState, useRef } from 'react';
import '../styles/carousel.scss'

const Carousel = () => {
  const [data, setData] = useState([]);
  const carouselProdutos = useRef(null);

  useEffect(() => {
    fetch('http://localhost:5173/src/assets/produtos.json')
    .then((response)=> response.json())
    .then(setData)
}, [])

const handleLeftClick = (e) => {
  e.preventDefault();
  carouselProdutos.current.scrollLeft -= carouselProdutos.current.offsetWidth;
}

const handleRightClick = (e) => {
  e.preventDefault();
  carouselProdutos.current.scrollLeft += carouselProdutos.current.offsetWidth;
}


if (!data || !data.length) return null;

    return (
      <div id="mz-carousel">
        <div className="mz-carousel-titulo">As Mais Pedidas</div>
        <div className="mz-carousel-produtos" ref={carouselProdutos}>

          {data.map((item) => {
            const {id, sku, name, price, description, image} = item;
            return (
              <div className="mz-carousel-item" key={id}>
                <div className="mz-carousel-image">
                  <img src={image} alt={name} />
                </div>
                <div className="mz-carousel-info">
                  <span className="mz-carousel-sku">
                  <ul>
                    {sku.map((skuValue, index) => (
                    <li key={index}>
                        <span className={skuValue}></span>
                    </li>
                    ))}
                  </ul>
                  </span>
                  <span className="mz-carousel-price">{price}</span>
                  <span className="mz-carousel-name">{name}</span>
                  <span className="mz-carousel-description">{description}</span>
                  <span className="mz-carousel-button">Adicionar</span>
                </div>
              </div>
            );
          })}

        </div>
        <div className="mz-carousel-buttons">
          <button onClick={handleLeftClick}><img src="/src/assets/images/next.png" alt="Arrow Left" /></button>
          <button onClick={handleRightClick}><img src="/src/assets/images/next.png" alt="Arrow Right" /></button>
        </div>
      </div>
    );
  };
  
  export default Carousel;