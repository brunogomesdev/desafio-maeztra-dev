import '../styles/header.scss'
import React, { useState } from 'react';
import logoMaeztra from '../assets/images/logo-maeztra-novo.png';
import minhaConta from '../assets/images/minha-conta.svg';
import meusFavoritos from '../assets/images/meus-favoritos.svg';
import meuCarrinho from '../assets/images/meu-carrinho.svg';
import mobBusca from '../assets/images/mob-busca.svg';
import mobCarrinho from '../assets/images/mob-meu-carrinho.svg';
import menuNovidades from '../assets/images/menu-novidades.svg';

const Header = () => {

  const [isDivVisible, setIsDivVisible] = useState(false);

  const toggleDiv = () => {
    setIsDivVisible(!isDivVisible);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

    return (
      <div id="mz-header">
        <div className="mz-tipbar">
          <p>Acompanhe as melhores promoções disponíveis aqui na Maeztra</p>
        </div>
        <div className="mz-header-container">
          <div className="header-content">
            <div className="hamburger-menu-container">
            <button className={`hamburger-menu-button ${isMenuOpen ? 'open' : 'closed'}`} onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </button>
            <nav className={`hamburger-menu-nav ${isMenuOpen ? 'open' : 'closed'}`}>
              <ul>
                <li><a href="#">Novidades</a></li>
                <li><a href="#">Vestidos</a></li>
                <li><a href="#">Roupas</a></li>
                <li><a href="#">Sapatos</a></li>
                <li><a href="#">Lingerie</a></li>
                <li><a href="#">Acessórios</a></li>
                <li><a href="#">OUTLET</a></li>
              </ul>
            </nav>
            </div>
            <div className="header-logo">
              <a href="#">
                <img className="header-logo-img" src={logoMaeztra} alt="Maeztra"/>
              </a>
            </div>

            {/* Input Busca (Desktop) */}
            <div className="header-search">
              <input type="text" placeholder="O Que Você Busca?" />
              <button>Buscar</button>
            </div>

            {/* Menu Icons (Desktop) */}
            <div className="header-icons">
              <a href="#" className="header-icon-account">
                <img src={minhaConta} alt="Minha Conta" />
                Minha Conta
              </a>
              <a href="#" className="header-icon-fav">
                <img src={meusFavoritos} alt="Meus Favoritos" />
                Meu Favoritos
              </a>
              <a href="#" className="header-icon-cart">
                <img src={meuCarrinho} alt="Meu Carrinho" />
                Meu Carrinho
              </a>
            </div>

            {/* Menu Icons (Mobile) */}
            <div className="header-icons-mob">
              <a href="#" className="header-icon-busca-mob">
                <img src={mobBusca} alt="Busca" onClick={toggleDiv} />
              </a>
              <a href="#" className="header-icon-cart-mob">
                <img src={mobCarrinho} alt="Meu Carrinho" />
              </a>
            </div>
          </div>
          <div class="header-search-input-mob">
              {isDivVisible && (
                  <div className="header-search-mob">
                  <input type="text" placeholder="O Que Você Busca?" />
                  <button>Buscar</button>
                </div>
              )}
          </div>
        </div>
        <div className="mz-menu">
          <div className="mz-menu-container">
            <div className="mz-menu-itens mz-menu-itens-destaque"><a href="#"><img src={menuNovidades} alt="Novidades" />Novidades</a></div>
            <div className="mz-menu-itens"><a href="#">Vestidos</a></div>
            <div className="mz-menu-itens"><a href="#">Roupas</a></div>
            <div className="mz-menu-itens"><a href="#">Sapatos</a></div>
            <div className="mz-menu-itens"><a href="#">Lingerie</a></div>
            <div className="mz-menu-itens"><a href="#">Acessórios</a></div>
            <div className="mz-menu-itens"><a href="#">OUTLET</a></div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Header;