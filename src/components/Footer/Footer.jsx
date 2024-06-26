import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <footer class="container-fuild border-top bg-dark ">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-5 footer-contaoner">
                <div class="col mb-4 d-flex main-container">
                    <div className='border'>
                        <div class=" btn-bg-color-banner container">
                            <div class='d-flex justify-content-center align-items-center mb-3 mt-3'>
                                <i class="fa-solid fa-cake-candles" style={{ fontSize: '2rem' }}></i>
                                <h1 className='text-white ms-2 mb-0 font-family-footer'>CAKEZONE</h1>
                            </div>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam voluptas explicabo molestiae sit dicta alias expedita eveniet laudantium, saepe dolore atque vitae. Animi iure nemo cupiditate nihil odio laudantium aspernatur.</p>
                        </div>

                    </div>
                </div>

                <div className="col mb-5">
                    <h5 className="icon-color-footer font-family-footer">GET IN TOUCH</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><i className="fa-solid fa-location-dot icon icon-color-footer"></i><span className="ms-2 text-white">123 Street, New York, USA</span></li>
                        <li className="nav-item mb-2"><i className="fa-regular fa-envelope-open icon icon-color-footer"></i><a href="#" className="text-white"><span className="ms-2">info@consult.com</span></a></li>
                        <li className="nav-item mb-2"><i className="fa-solid fa-phone icon icon-color-footer"></i><span className="ms-2 text-white">+012 345 67890</span></li>
                    </ul>
                    <div className="d-flex">
                        <div className="me-2 text-white icon-box" id="footer-icon"><i className="fab fa-twitter"></i></div>
                        <div className="me-2 text-white icon-box" id="footer-icon"><i className="fab fa-facebook-f"></i></div>
                        <div className="me-2 text-white icon-box" id="footer-icon"><i className="fab fa-linkedin"></i></div>
                    </div>

                </div>

                <div className="col mb-3">
                    <h5 className="icon-color-footer font-family-footer">QUICK LINKS</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2 text-white"><i className="fa-solid fa-arrow-right me-2 icon icon-color-footer"></i>Home</li>
                        <li className="nav-item mb-2 text-white"><i className="fa-solid fa-arrow-right me-2 icon icon-color-footer"></i>About Us</li>
                        <li className="nav-item mb-2 text-white"><i className="fa-solid fa-arrow-right me-2 icon icon-color-footer"></i>Our Services</li>
                        <li className="nav-item mb-2 text-white"><i className="fa-solid fa-arrow-right me-2 icon icon-color-footer"></i>Meet The Team</li>
                        <li className="nav-item mb-2 text-white"><i className="fa-solid fa-arrow-right me-2 icon icon-color-footer"></i>Latest Blog</li>
                        <li className="nav-item mb-2 text-white"><i className="fa-solid fa-arrow-right me-2 icon icon-color-footer"></i>Contact Us</li>
                    </ul>
                </div>

                <div class="col NEWSLETTER-MARGIN">
                    <div >
                        <h4 className='icon-color-footer font-family-footer'>NEWSLETTER</h4>
                        <p className='text-white'>Amet justo diam dolor lorem sit stet see justo kasd</p>
                        <div class='d-flex justify-content-center input-box'>
                            <input type="text" placeholder='Your Email' />
                            <button type="button" className="btn btn-warning" style={{ width: '150px' }}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>  
            <div className='text-white text-center bg-black p-4 font-family-footer'>© CAKEZONE. All Rights Reserved. Designed by Amit Yadav</div>
        </footer>
    )
}

export default Footer