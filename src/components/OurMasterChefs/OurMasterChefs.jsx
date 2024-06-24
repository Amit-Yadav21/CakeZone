import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HorizontalLine from '../Horizontalline/HorizontalLine';
import img_01 from '../../assets/team-1.jpg';
import img_02 from '../../assets/team-2.jpg';
import img_03 from '../../assets/team-3.jpg';
import './OurMasterChefs.css'

function OurMasterChefs() {
    // Array of objects containing team member data
    const teamMembers = [
        {
            id: 1,
            fullName: 'FULL NAME',
            designation: 'Designation',
            image: img_01 // Assuming imported correctly
        },
        {
            id: 2,
            fullName: 'FULL NAME',
            designation: 'Designation',
            image: img_02 // Assuming imported correctly
        },
        {
            id: 3,
            fullName: 'FULL NAME',
            designation: 'Designation',
            image: img_03 // Assuming imported correctly
        }
    ];

    return (
        <div className="p-4 container">
            <h2 className='text-center mt-4 headings-font-family'>Team Members</h2>
            <h1 className="text-center mb-1 mt-0 font-faimily">OUR MASTER CHEFS</h1>
            <div className='mb-4 d-flex align-items-center justify-content-center'>
                <HorizontalLine />
            </div>
            <div className="row">
                {teamMembers.map(member => (
                    <div key={member.id} className="col-lg-4 col-md-6 mb-4">
                        <div className="card">
                            <img src={member.image} className="card-img-top img-fluid" alt={`Team member ${member.id}`} />
                            <div className="card-body text-center bg-color text-white">
                                <div className='border p-2'>
                                    <h5 className="card-title fullname-color font-faimily">{member.fullName}</h5>
                                    <p className="card-text">{member.designation}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OurMasterChefs;
