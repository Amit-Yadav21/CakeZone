import React from 'react';

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                {/* Visible only on small screens */}
                <div className="d-lg-none">
                    <i className="fas fa-cake-candles fa-3x" style={{ color: '#FFA500', marginRight: '5px' }}></i>
                    <a className="navbar-brand text-white fw-bold mr-2" href="#">CAKEZONE</a>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active fw-bold" aria-current="page" href="#" style={{ color: 'orange' }}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white fw-bold" href="#">ABOUT US</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white fw-bold" href="#">MENU &amp; PRICING</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white fw-bold" href="#">MASTER CHEFS</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-white fw-bold" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                PAGES
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white fw-bold" href="#">CONTACT US</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
