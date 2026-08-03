import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Gallery from './components/Gallery';
import Projects from './components/Projects';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import CallUs from './components/CallUs';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Gallery />
        <Projects />
        <WhyUs />
        <Testimonials />
        <CallUs />
      </main>
      <Footer />
    </>
  );
}

export default App;
