import React from 'react';
import './SuperCrispy.css'
import HorizontalLine from '/src/components/Horizontalline/HorizontalLine'

function SuperCrispyCakes() {
    return (
        <>
            <div className="col-lg-6 col-md-8 mx-auto text-center container-fuild" id='Super-bg-image'>
                <h2 className="fw-light super_h1">Special Kombo Pack</h2>
                <h1 className='text-white'>SUPER CRISPY CAKES</h1>
                <div className='mb-4 d-flex align-items-center justify-content-center'>
                    <HorizontalLine />
                </div>
                <p className="lead text-white container">
                    Eirmod sed tempor lorem ut dolores sit kasd ipsum. Dolor ea et dolore et at sea ea at dolor justo ipsum duo rebum sea.
                    Eos vero eos vero ea et dolore eirmod et. Dolores diam duo lorem. Elit ut dolores magna sit. Sea dolore sat et.
                </p>
                <div>
                    <span className="p-2 btn bg-color">
                        <button className=" border btn bg-color">Shop Now</button>
                    </span>
                    <span className="p-2 border btn">
                        <button className="border btn">Read More</button>
                    </span>
                </div>
            </div>
        </>
    );
}

export default SuperCrispyCakes;
