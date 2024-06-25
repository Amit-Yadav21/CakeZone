import React from 'react';
import './DiscountSummer.css';

function DiscountSummer() {
    return (
        <div className="container-fluid py-5 discount-bg-image">
            <div className="container row row-cols-1 row-cols-md-3 mt-3 text-center">
                <div className="col">
                    <div className="card p-3 discount-card-bg-color">
                        <h1>BIRTHDAY CAKE</h1>
                        <p>Ipsum ipsum dita erat amet dolor sit justo sea eirmod diam stet sit justo amet tempor amet kasd lorem dolor ipsum</p>
                        <a href="#" className='text-black'>READ MORE→</a>
                    </div>
                </div>
                <div className="col">
                    <div className="card p-3 discount-card-bg-color">
                        <h1>WEDDING CAKE</h1>
                        <p>Ipsum ipsum dita erat amet dolor sit justo sea eirmod diam stet sit justo amet tempor amet kasd lorem dolor ipsum</p>
                        <a href="#" className='text-black'>READ MORE→</a>
                    </div>
                </div>
                <div className="col">
                    <div className="card p-3 discount-card-bg-color">
                        <h1>CUSTOM CAKE</h1>
                        <p>Ipsum ipsum dita erat amet dolor sit justo sea eirmod diam stet sit justo amet tempor amet kasd lorem dolor ipsum</p>
                        <a href="#" className='text-black'>READ MORE→</a>
                    </div>
                </div>
            </div>
            <h1 className='text-white font-family-discount mt-4'>30% DISCOUNT FOR THIS SUMMER</h1>
            <span className="p-2 mr-2 btn-order-bg-color-banner mt-2 mb-5">
                <button className="border btn">Order Now</button>
            </span>
        </div>
    );
}

export default DiscountSummer;
