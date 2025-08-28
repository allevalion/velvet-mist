import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import Hero from './components/Hero';
import Cocktails from './components/Cocktails';
import About from './components/About';
import Art from './components/Art';
import Menu from './components/Menu';
import './Home.css';

gsap.registerPlugin(ScrollTrigger, SplitText);

const Home = () => {
  return (
    <>
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Menu />
    </>
  );
};
export default Home;
