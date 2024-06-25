import React from 'react';
import './SuperCrispy.css';
import HorizontalLine from '/src/components/Horizontalline/HorizontalLine';

function SuperCrispyCakes() {
    return (
        <div className="container-fluid py-5 super-bg-image">
            <div className="row justify-content-center align-items-center text-center">
                <div className="col-lg-6 col-md-8">
                    <h2 className="fw-light super_h1 font-weight-bold font-family-h2">Special Kombo Pack</h2>
                    <h1 className='text-white font-family-super z-2'>SUPER CRISPY CAKES</h1>
                    <div className='mb-4 d-flex align-items-center justify-content-center horizontal-line-super'>
                        <HorizontalLine />
                    </div>
                    <p className="lead text-white container font-family-super-p">
                        Eirmod sed tempor lorem ut dolores sit kasd ipsum. Dolor ea et dolore et at sea ea at dolor justo ipsum duo rebum sea.
                        Eos vero eos vero ea et dolore eirmod et. Dolores diam duo lorem. Elit ut dolores magna sit. Sea dolore sat et.
                    </p>
                    <div>
                        <span className="p-2 btn shop-bg-color">
                            <button className="border btn">Shop Now</button>
                        </span>
                        <span className="p-2 btn read-bg-color">
                            <button className="border btn text-white">Read More</button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SuperCrispyCakes;
