import './App.css'

import Header from './components/Header';
import Destaques from './components/Destaques';
import Beneficios from './components/Beneficios';
import Marcas from './components/Marcas';
import Carousel from './components/Carousel';
import Colecao from './components/Colecao';
import Newsletter from './components/Newsletter';
import MapaDoSite from './components/MapaDoSite';
import Footer from './components/Footer';

function App() {
  return (
    <>
        <Header id="mz_header" />
        <Destaques id="mz_destaques" />
        <Beneficios id="mz_beneficios" />
        <Marcas id="mz_marcas" />
        <Carousel id="mz_carousel" />
        <Colecao id="mz_colecao" />
        <Newsletter id="mz_newsletter" />
        <MapaDoSite id="mz_mapa_do_site" />
        <Footer id="mz_footer" />
    </>
  )
}

export default App
