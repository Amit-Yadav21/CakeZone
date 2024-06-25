import React from 'react';
import img_cake from '/src/assets/about.jpg';
import HorizontalLine from '/src/components/Horizontalline/HorizontalLine';

function WelcomeCakezone() {
    return (
        <div className='container text-center'>
            <h3 className='m-0 font-family-about'>About Us</h3>
            <h1 className='font-family-welcome'>WELCOME TO CAKEZONE</h1>
            <div className='mb-4 d-flex align-items-center justify-content-center'>
                <HorizontalLine />
            </div>
            <div className='row'>
                <div className='col-12 col-md-6 mb-3'>
                    <img src={img_cake} alt="Cake" className='img-fluid' style={{ maxWidth: '80%', height: 'auto' }} />
                </div>
                <div className='col-12 col-md-6'>
                    <h4 className='mb-4' style={{textAlign:'justify'}}>Tempor erat elitr rebum clita. Diam dolor diam ipsum erat lorem sed stet labore lorem sit clita duo</h4>
                    <p className='font-family-p' style={{textAlign:'justify'}}>Tempor erat elitr at rebum at at clita. Diam dolor diam ipsum et tempor sit. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet magna</p>
                    <div className='row mt-4'>
                        <div className='col-12 col-md-6 mb-4 mb-md-0'>
                            <div className='d-flex align-items-center justify-content-center mb-3' style={{ maxWidth: '80px', margin: '0 auto', backgroundColor: '#FFA500', color: '#fff' }}>
                                <div style={{ backgroundColor: '#FFA500', width: '100px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <i className="fas fa-heart-pulse fa-3x p-2" style={{ border: '1px solid #fff' }}></i>
                                </div>
                            </div>
                            <h4>100% HEALTHY</h4>
                            <p className='font-family-p' style={{textAlign:'justify'}}>Labore justo vero ipsum sit clita erat lorem magna clita nonumy dolor magna dolor vero</p>
                        </div>
                        <div className='col-12 col-md-6'>
                            <div className='d-flex align-items-center justify-content-center mb-3' style={{ maxWidth: '70px', margin: '0 auto', backgroundColor: '#FFA500', color: '#fff' }}>
                                <div style={{ backgroundColor: '#FFA500', width: '100px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <i className="fas fa-award fa-3x p-2" style={{ border: '1px solid #fff' }}></i>
                                </div>
                            </div>
                            <h4>AWARD WINNING</h4>
                            <p className='font-family-p' style={{textAlign:'justify'}}>Labore justo vero ipsum sit clita erat lorem magna clita nonumy dolor magna dolor vero</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WelcomeCakezone;
