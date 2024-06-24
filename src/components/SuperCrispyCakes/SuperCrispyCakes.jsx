import React from 'react';
import './SuperCrispy.css'
import HorizontalLine from '/src/components/Horizontalline/HorizontalLine'

function SuperCrispyCakes() {
    return (
        <>
            <div className="col-lg-6 col-md-8 mx-auto text-center container-fuild" id='Super-bg-image'>
                <h2 className="fw-light super_h1 font-weight-bold font-family-h2 z-2">Special Kombo Pack</h2>
                <h1 className='text-white font-faimily-super z-2'>SUPER CRISPY CAKES</h1>
                <div className='mb-4 d-flex align-items-center justify-content-center z-2 w-100'>
                    <HorizontalLine />
                </div>
                <p className="lead text-white container font-faimily-super-p z-2">
                    Eirmod sed tempor lorem ut dolores sit kasd ipsum. Dolor ea et dolore et at sea ea at dolor justo ipsum duo rebum sea.
                    Eos vero eos vero ea et dolore eirmod et. Dolores diam duo lorem. Elit ut dolores magna sit. Sea dolore sat et.
                </p>
                <div className='z-2'>
                    <span className="p-2 btn shop-bg-color">
                        <button className=" border btn">Shop Now</button>
                    </span>
                    <span className="p-2 btn read-bg-color">
                        <button className="border btn text-white">Read More</button>
                    </span>
                </div>
            </div>
        </>
    );
}

export default SuperCrispyCakes;
