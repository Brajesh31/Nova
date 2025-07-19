import React from 'react';

const Section1 = () => {
    return (
        <div className="section-oneContainer  ">
            <div className="container-fluid">
                <div className="row gap-5 py-5  justify-content-between" >
                    {/* First Column */}
                    <div className="col-lg-3 col-sm-12  mx-auto py-5  ">
                        <div className="ms-5  ms-sm-0">
                            {/* Image */}
                            <img src="https://preview.colorlib.com/theme/nova/images/karate-divider.png.webp" alt="" className='img-fluid ms-0 mb-2' />

                            {/* Content */}
                            <div className='Encourage'>
                                <h2 className='mb-4'>ENCOURAGE YOUR <br />KIDS TO LEARN</h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            </div>

                            <ul className='mt-5'>
                                <li>Teakwondo</li>
                                <li>Brazilian Jiu-Jitsu</li>
                                <li>Muay Thai</li>
                                <li>Basic Defense</li>
                            </ul>

                            <button className='btn btn-danger  mb-0 rounded-pill ps-4 pe-4 mt-3  '>ENROLL NOW</button>
                        </div>
                    </div>

                    {/* Second Column mb-sm-0 */}
                    <div className="col-lg-5 py-5   col-sm-12 ">
                        <div className="image-fancyBorder">
                            {/* Image */}
                            <img src="https://preview.colorlib.com/theme/nova/images/hero_1.jpg.webp" alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section1;
