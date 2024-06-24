import React from 'react'

function UperNavBar() {
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
        </>
    )
}

export default UperNavBar