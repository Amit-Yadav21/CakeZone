import React from 'react';
import './UperNavBar.css';

function UperNavBar() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4 mb-3 mb-md-0">
                        <div className="text-center d-flex justify-content-center align-items-center p-2 gap-2">
                            <div>
                                <i className="far fa-envelope fa-3x"></i>
                            </div>
                            <div>
                                <div className="mt-2">EMAIL US</div>
                                <div>info@example.com</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 mb-3 mb-md-0 uperNav-bg-color p-2">
                        <div className="text-center d-flex justify-content-center align-items-center border p-2 gap-2">
                            <i className="fas fa-cake-candles fa-3x"></i>
                            <div className="font-size-cakezone-midel">CAKEZONE</div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="text-center d-flex justify-content-center align-items-center p-2 gap-2">
                            <i className="fas fa-mobile-alt fa-3x"></i>
                            <div>
                                <div className="mt-2">CALL US</div>
                                <div>+012 345 6789</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UperNavBar;
