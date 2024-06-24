import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css'

import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import WelcomCakezone from './components/WelcomCakeZone/WelcomCakezone';
import Number from './components/Number/Number';
import SuperCrispyCakes from './components/SuperCrispyCakes/SuperCrispyCakes'

function App() {
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4">
            <div className="text-center d-flex justify-content-center">
              <div>
                <i className="far fa-envelope fa-3x"></i>
              </div>
              <div className="ml-2">
                <div className="mt-2">EMAIL US</div>
                <div>info@example.com</div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="text-center d-flex justify-content-center">
              <i className="fas fa-cake-candles fa-3x"></i>
              <div className="mt-2">CAKEZONE</div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="text-center d-flex justify-content-center">
              <div>
                <i className="fas fa-mobile-alt fa-3x"></i>
              </div>
              <div>
                <div className="mt-2">CALL US</div>
                <div>+012 345 6789</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NavBar />
      <Banner/>
      <WelcomCakezone/>
      <Number/>
      <SuperCrispyCakes/>
      
    </>
  );
}

export default App;