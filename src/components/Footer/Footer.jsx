import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <footer class="container py-5 my-5 border-top bg-dark ">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-5">
                <div class="col mb-4 d-flex main-container" style={{ marginLeft: '2rem' }}>
                    <div class="p-1 btn-bg-color-banner container">
                        <div class='d-flex justify-content-center align-items-center mb-3'>
                            <i class="fa-solid fa-cake-candles" style={{ fontSize: '2rem' }}></i>
                            <h3 className='text-white ms-2 mb-0'>CAKEZONE</h3>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam voluptas explicabo molestiae sit dicta alias expedita eveniet laudantium, saepe dolore atque vitae. Animi iure nemo cupiditate nihil odio laudantium aspernatur.</p>
                    </div>
                </div>

                <div className="col mb-3 " style={{ marginLeft: '3rem' }}>
                    <h5 className="icon-color-footer">Get In Touch</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><i className="fa-solid fa-location-dot icon icon-color-footer"></i><span className="ms-2 text-white">123 Street, New York, USA</span></li>
                        <li className="nav-item mb-2"><i className="fa-regular fa-envelope-open icon icon-color-footer"></i><a href="#" className="text-white"><span className="ms-2">info@consult.com</span></a></li>
                        <li className="nav-item mb-2"><i className="fa-solid fa-phone icon icon-color-footer"></i><span className="ms-2 text-white">+013278529</span></li>
                    </ul>
                    <div className="d-flex ">
                        <div className="me-2 text-white icon-box" id="footer-icon"><i className="fab fa-twitter"></i></div>
                        <div className="me-2 text-white icon-box" id="footer-icon"><i className="fab fa-facebook-f"></i></div>
                        <div className="me-2 text-white icon-box" id="footer-icon"><i className="fab fa-linkedin"></i></div>
                    </div>

                </div>

                <div className="col mb-3">
                    <h5 className="icon-color-footer">Quick Links</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2 text-white"><i className="fa-solid fa-arrow-right me-2 icon icon-color-footer"></i>Home</li>
                        <li className="nav-item mb-2 text-white"><i className="fa-solid fa-arrow-right me-2 icon icon-color-footer"></i>About Us</li>
                        <li className="nav-item mb-2 text-white"><i className="fa-solid fa-arrow-right me-2 icon icon-color-footer"></i>Our Services</li>
                        <li className="nav-item mb-2 text-white"><i className="fa-solid fa-arrow-right me-2 icon icon-color-footer"></i>Latest Blog Post</li>
                        <li className="nav-item mb-2 text-white"><i className="fa-solid fa-arrow-right me-2 icon icon-color-footer"></i>Contact Us</li>
                    </ul>
                </div>

                <div class="col mb-4">
                    <div>
                        <h4 className='icon-color-footer'>Newsletter</h4>
                        <p className='text-white'>Lorem ipsum dolor sit ipsum dolor sit .</p>
                        <div class='d-flex justify-content-center input-box'>
                            <input type="text" placeholder='Your Email' />
                            <button type="button" class="btn btn-warning " style={{ borderRadius: '0px' }}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer