import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Section3 = () => {

    const [data, setdata] = useState([])

    const showServiceData = () => {
        axios.get("http://localhost:4000/services")
            .then((response) => {
                // console.log(response.data, 'This is get data')
                setdata(response.data)
            })
    }

    useEffect(() => {
        showServiceData();
    }, [])

    return (
        <>
            <div className="container section_3Main mt-5">
                {/* first row */}
                <div className="row mt-5 py-5">
                    <div className="col-lg-12 text-center">
                        <img src="https://preview.colorlib.com/theme/nova/images/karate-divider.png.webp" alt="" className='img-fluid ms-0 mb-2' />
                        <h2 className='text-center ourTeacher'>our services</h2>
                    </div>
                </div>
                {/* second row */}
                <div className="row mb-5">
                    {data.length >= 0 && (
                        data.map((items, index) => {
                            // console.log(items);
                            return (
                                <div className="col-lg-4  mb-5" key={index}>
                                    <div className="card ourServicesCard mb-3 bg-transparent border-0">
                                        <div className="row g-0 sm-text-center">
                                            <div className="col-md-3 col-sm-3  ">
                                                <i className={`fa-solid ${items.className} pt-4 me-5 `} style={{ fontSize: '100px' }}></i>
                                            </div>
                                            <div className="col-md-9 col-sm-9">
                                                <div className="card-body">
                                                    <h6 className="card-title fw-bold"> {items.title}</h6>
                                                    <p className="card-text">{items.description}</p>
                                                    <button className='btn text-danger'>Learn more</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    )}
                </div>
            </div>
        </>
    );
};

export default Section3;
