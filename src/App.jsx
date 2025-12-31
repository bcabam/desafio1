import Head from './components/Header';
import { Card } from './components/Card';
import Footer from './components/Footer';
function App() {
  return (
    <>
    <Head title= 'Galería de Imágenes con React' />
    <Card url_img="//robohash.org/1" title="Robot" desc="Un robot aleatorio"/>
    <Card url_img="//robohash.org/2" title="Robot" desc="Otro robot aleatorio"/>
    <Card url_img="//robohash.org/3" title="Robot" desc="Otro robot aleatorio"/>
    <Card url_img="//robohash.org/4" title="Robot" desc="Otro robot aleatorio"/>
    <Footer />
    </>
  )
}

export default App
