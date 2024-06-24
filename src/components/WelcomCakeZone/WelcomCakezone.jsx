import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import img_cake from '/src/assets/about.jpg';
import HorizontalLine from '/src/components/Horizontalline/HorizontalLine'

function WelcomeCakezone() {
    return (
        <div className='container text-center'>
            <h3 className='m-0'>About Us</h3>
            <h1>WELCOME TO CAKEZONE</h1>
            <div className='mb-4 d-flex align-items-center justify-content-center'>
                <HorizontalLine/>
            </div>
            <div className='d-flex gap-4'>
                <div className='col-12 col-md-6 mb-3'>
                    <img src={img_cake} alt="Cake" className='img-fluid'  style={{width:'600px' ,height:'450px'}}/>
                </div>
                <div className='col-12 col-md-6'>
                    <h4 className='mb-4'>Time was elitr rebum clita. Diam dolor diam ipsum erat lorem sed stet labore lorem sit clita duo</h4>
                    <p>Tempor erat elitr at rebum at clita. Diam dolor diam ipsum et tempor sit. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet magna</p>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='d-flex align-items-center justify-content-center mt-3 mb-3' style={{ width: '80px', height: '80px', margin: '0 auto', backgroundColor: '#FFA500' }}>
                                <div className='border' style={{ backgroundColor: '#FFA500' }}>
                                    <i className="fas fa-heart-pulse fa-3x text-white p-1" style={{ border: '2px solid #fff' }}></i>
                                </div>
                            </div>
                            <h4>100% HEALTHY</h4>
                            <p>Labore justo vero ipsum sit clita erat lorem magna clita nonumy dolor magna dolor vero</p>
                        </div>
                        <div className='col-6'>
                            <div className='d-flex align-items-center justify-content-center mt-3 mb-3' style={{ width: '80px', height: '80px', margin: '0 auto', backgroundColor: '#FFA500' }}>
                                <div className='border' style={{ backgroundColor: '#FFA500' }}>
                                    <i class="fa-solid fa-award fa-3x text-white p-1" style={{ border: '2px solid #fff' }}></i>
                                </div>
                            </div>
                            <h4>AWARD WINING</h4>
                            <p>Labore justo vero ipsum sit clita erat lorem magna clita nonumy dolor magna dolor vero</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WelcomeCakezone;
