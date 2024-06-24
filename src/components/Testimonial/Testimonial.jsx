import React from 'react';
import './Testimonial.css';
import HorizontalLine from '/src/components/Horizontalline/HorizontalLine'


// Importing images directly
import img1 from '../../assets/testimonial-1.jpg';
import img2 from '../../assets/testimonial-2.jpg';
import img3 from '../../assets/testimonial-3.jpg';

const testimonials = [
    {
        image: img1,
        name: 'CLIENT NAME',
        profession: 'Profession',
        testimonial: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam',
        active: false
    },
    {
        image: img2,
        name: 'CLIENT NAME',
        profession: 'Profession',
        testimonial: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam',
        active: true
    },
    {
        image: img3,
        name: 'CLIENT NAME',
        profession: 'Profession',
        testimonial: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam',
        active: false
    }
];

function Testimonial() {
    return (
        <div className="container my-5">
            <h2 className="text-center testimonal-faimily">Testimonial</h2>
            <h1 className="text-center">OUR CLIENTS SAY!!!</h1>
            <div className='mb-4 d-flex align-items-center justify-content-center'>
                <HorizontalLine />
            </div>
            <div className="row">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                        <div className={`card testimonial-card ${testimonial.active ? 'active' : 'inactive'}`}>
                            <div className='d-flex'>
                                <img src={testimonial.image} alt={testimonial.name} className="testimonial-card-img-top" />
                                <div className="card-body">
                                    <h5 className={`testimonial-card-title testimonial-title-name ${testimonial.active ? '' : 'text-muted'}`}>{testimonial.name}</h5>
                                    <p className={`card-text ${testimonial.active ? '' : 'text-muted'}`}>{testimonial.profession}</p>
                                </div>
                            </div>
                            <p className={`card-text ${testimonial.active ? '' : 'text-muted'}`}>{testimonial.testimonial}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center graph-icon">
                <i class="fa-solid fa-chart-simple"></i>
            </div>
        </div>
    );
}

export default Testimonial;
