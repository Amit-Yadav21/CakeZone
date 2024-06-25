import React from 'react';
import './Number.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome CSS

function Number() {
    const data = [
        { title: 'OUR EXPERIENCE', value: '12345', icon: 'fa-solid fa-star' },
        { title: 'CAKE SPECIALIST', value: '12345', icon: 'fa-solid fa-users' },
        { title: 'COMPLETE PROJECT', value: '12345', icon: 'fa-solid fa-check' },
        { title: 'HAPPY CLIENTS', value: '12345', icon: 'fa-sharp fa-solid fa-mug-hot' },
    ];

    return (
        <div className="container-fluid py-5 number-bg-image" style={{display:'flex',justifyContent:'space-around'}}>
            <div className="row g-4 row-cols-1 row-cols-lg-4 container ">
                {data.map((item, index) => (
                    <div className="col d-flex align-items-start" key={index}>
                        <div className='d-flex align-items-center justify-content-center icon-main-div'>
                            <div className='border icon--uper-div'>
                                <i className={`${item.icon} fa-2x text-white`}></i>
                            </div>
                        </div>
                        <div className="ms-2">
                            <h3 className="fs-6 title-color-number font-family-number">{item.title}</h3>
                            <p className="value-text-number">{item.value}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Number;
