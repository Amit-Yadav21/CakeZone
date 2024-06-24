import React from 'react';
import './MenuPricing.css'
import cakeImage from '../../assets/cake-1.jpg';
import HorizontalLine from '../Horizontalline/HorizontalLine';

const cakes = [
    {
        image: cakeImage,
        name: 'BIRTHDAY CAKE',
        description: 'Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam stet sit justo',
        price: '$99.00'
    },
    {
        image: cakeImage,
        name: 'BIRTHDAY CAKE',
        description: 'Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam stet sit justo',
        price: '$99.00'
    },
    {
        image: cakeImage,
        name: 'BIRTHDAY CAKE',
        description: 'Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam stet sit justo',
        price: '$99.00'
    },
    {
        image: cakeImage,
        name: 'BIRTHDAY CAKE',
        description: 'Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam stet sit justo',
        price: '$99.00'
    },
    {
        image: cakeImage,
        name: 'BIRTHDAY CAKE',
        description: 'Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam stet sit justo',
        price: '$99.00'
    },
    {
        image: cakeImage,
        name: 'BIRTHDAY CAKE',
        description: 'Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam stet sit justo',
        price: '$99.00'
    }
];

function MenuPricing() {
    return (
        <div className="container my-5">
            <h2 className="text-center font-family-menu-price">Menu & Pricing</h2>
            <h1 className="text-center">EXPLORE OUR CAKES</h1>
            <div className='mb-4 d-flex align-items-center justify-content-center'>
                <HorizontalLine />
            </div>
            <div className="text-center mb-4 bg-black p-3">
                <div className="btn-group border btn-dark p-3" role="group">
                    <button type="button" className="btn btn-warning text-white">BIRTHDAY</button>
                    <button type="button" className="btn text-white">WEDDING</button>
                    <button type="button" className="btn text-white">CUSTOM</button>
                </div>
            </div>
            <div className="row">
                {cakes.map((cake, index) => (
                    <div key={index} className="col-lg-6 col-md-12 mb-4 d-flex">
                        <div className="card flex-row w-100">
                            <img src={cake.image} alt={cake.name} className="card-img-left" />
                            <div className="card-body">
                                <h5 className="card-title">{cake.name}</h5>
                                <p className="card-text">{cake.description}</p>
                            </div>
                            <div className="card-price text-center align-self-center px-3 bg-black">
                                <h4 className="text-warning font-weight-bold">{cake.price}</h4>
                            </div>
                        </div>
                    </div>
                ))} 
            </div>
        </div>
    );
}

export default MenuPricing;
