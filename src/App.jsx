import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cocktails from './components/Cocktails';
import About from './components/About';
import Art from './components/Art';
import Menu from './components/Menu';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Cocktails />
        <About />
        <Art />
        <Menu />
      </main>
      <Footer />
    </>
  );
};
export default App;
