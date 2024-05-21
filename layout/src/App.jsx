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
        <Header />
        <Destaques />
        <Beneficios />
        <Marcas />
        <Carousel />
        <Colecao />
        <Newsletter />
        <MapaDoSite />
        <Footer />
    </>
  )
}

export default App
