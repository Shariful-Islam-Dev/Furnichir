
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Discover from './components/Discover';
import Service from './components/Service';
import Shop from './components/Shop';
import Testimonial from './components/Testimonial';
import NewsLetter from './components/NewsLetter';
import Footer from './components/Footer';



function App() {
  return (
    <div className=''>
      <Header />
      <Banner />  
      <Service />    
      <About />
      <Shop/>
      <Discover />
      <Testimonial />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
