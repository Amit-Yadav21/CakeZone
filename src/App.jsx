import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css'

import UperNavBar from './components/UperNavBar/UperNavBar'
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import WelcomCakezone from './components/WelcomCakeZone/WelcomCakezone';
import Number from './components/Number/Number';
import SuperCrispyCakes from './components/SuperCrispyCakes/SuperCrispyCakes'
import OurMasterChafes from './components/OurMasterChefs/OurMasterChefs'

function App() {
  return (
    <>
      <UperNavBar />
      <NavBar />
      <Banner />
      <WelcomCakezone />
      <Number />
      <OurMasterChafes />
      <SuperCrispyCakes />

    </>
  );
}

export default App;