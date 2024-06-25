import React from 'react';
import './DiscountSummer.css';

function DiscountSummer() {
    // Define an array of objects to store cake data
    const cakes = [
        {
            title: 'BIRTHDAY CAKE',
            description: 'Ipsum ipsum dita erat amet dolor sit justo sea eirmod diam stet sit justo amet tempor amet kasd lorem dolor ipsum',
            link: '#'
        },
        {
            title: 'WEDDING CAKE',
            description: 'Ipsum ipsum dita erat amet dolor sit justo sea eirmod diam stet sit justo amet tempor amet kasd lorem dolor ipsum',
            link: '#'
        },
        {
            title: 'CUSTOM CAKE',
            description: 'Ipsum ipsum dita erat amet dolor sit justo sea eirmod diam stet sit justo amet tempor amet kasd lorem dolor ipsum',
            link: '#'
        }
    ];

    return (
        <div className="container-fluid py-5 discount-bg-image">
            <div className="container row row-cols-1 row-cols-md-3 text-center">
                {/* Map through the cakes array to render each cake */}
                {cakes.map((cake, index) => (
                    <div className="col p-3" key={index}>
                        <div className="card p-2 discount-card-bg-color">
                            <div className='border'>
                                <h1>{cake.title}</h1>
                                <p>{cake.description}</p>
                                <a href={cake.link} className="text-black">READ MORE→</a>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <h1 className='text-white font-family-discount'>30% DISCOUNT FOR THIS SUMMER</h1>
            <span className="p-2 mr-2 btn-order-bg-color-banner mt-2 mb-5">
                <button className="border btn">Order Now</button>
            </span>
        </div>
    );
}

export default DiscountSummer;
