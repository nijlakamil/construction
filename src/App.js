import logo from './logo.svg';
import Navbar from './components/Navbar';
import VideoBackground from './components/VideoBackground';
import Banners from './components/Banners';
import Aboutus from './components/Aboutus';
import Owners from './components/Owners';
import FAQ from './components/FAQ';
import StatsCounter from './components/StatsCounter';
import TestimonialSlider from './components/TestimonialSlider';
import TransparentFooter from './components/TransparentFooter';
function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <VideoBackground></VideoBackground>
     <Banners></Banners>
     <Aboutus></Aboutus>
     <FAQ/>
     <StatsCounter/>
     <Owners/>
     <TestimonialSlider/>
      <TransparentFooter/>
    </div>
  );
}

export default App;
