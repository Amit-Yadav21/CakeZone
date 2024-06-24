import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css'

import UperNavBar from './components/UperNavBar/UperNavBar'
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import WelcomCakezone from './components/WelcomCakeZone/WelcomCakezone';
import Number from './components/Number/Number';
import MenuPricing from './components/MenuPricing/MenuPricing'
import DiscountSummer from './components/DiscountSummer/DiscountSummer';
import OurMasterChafes from './components/OurMasterChefs/OurMasterChefs'
import SuperCrispyCakes from './components/SuperCrispyCakes/SuperCrispyCakes'
import Testimonial from './components/Testimonial/Testimonial'

function App() {
  return (
    <>
      <UperNavBar />
      <NavBar />
      <Banner />
      <WelcomCakezone />
      <Number />
      <MenuPricing/>
      <DiscountSummer/>
      <OurMasterChafes />
      <SuperCrispyCakes />
      <Testimonial/>
    </>
  );
}

export default App;