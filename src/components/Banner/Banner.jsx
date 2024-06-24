import React from 'react';
import './Banner.css'

function Banner() {
    return (
        <div className="p-4 p-md-5 mb-4 text-white bg-dark" id='banner-img'>
            <div className="container col-md-11 px-0" >
                <h1 className="display-4 headings-font-family-banner">Super Crispy</h1>
                <h1 className="lead my-3  font-size-cakezone">CAKEZONE</h1>
                <p className='font-faimily'>THE BEST CAKE IN LONDON</p>
                <div className="d-flex gap-5">
                    <span className="p-2 mr-2 btn-bg-color-banner">
                        <button className="border btn">Read More</button>
                    </span>
                    <div className="d-flex align-items-center gap-4">
                        <button className="btn bg-white rounded-circle border play-icon-color">
                            <i className="fa-solid fa-play"></i>
                        </button>
                        <p className="mb-0">Play Video</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
