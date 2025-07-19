import React from 'react'

const Footer = () => {
    return (
        < >
            <div className="container mt-5 mb-5">
                <div className="row justify-content-evenly ">
                    <div className="col-lg-4">
                        <h6 className="card-title fw-bold mb-3">About Foundation</h6>
                        <p className="card-text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <h6 className="card-title fw-bold mb-3">Connect</h6>

                    </div>
                    <div className="col-lg-2 ">
                        <h6 className="card-title fw-bold mb-4 ">Links</h6>
                        <ul className="list-unstyled ">
                            <li className='mb-2'>About us</li>
                            <li className='mb-2'>Services</li>
                            <li className='mb-2'>News</li>
                            <li className='mb-2'>Carrers</li>
                            <li className='mb-2'>Contact</li>
                        </ul>
                    </div>
                    <div className="col-lg-1">
                        <h6 className="card-title fw-bold mb-4">Company</h6>
                        <ul className="list-unstyled ">
                            <li className='mb-2'>About us</li>
                            <li className='mb-2'>Services</li>
                            <li className='mb-2'>News</li>
                            <li className='mb-2'>Carrers</li>
                            <li className='mb-2'>Contact</li>
                        </ul>
                    </div>
                    <div className="col-lg-3">
                        <h6 className="card-title fw-bold mb-4 ">Contact</h6>
                        <ul className="list-unstyled ">
                            <li className='mb-2'>
                                <address>
                                    43 Raymouth Rd. Baltemoer, London
                                    3910
                                </address>
                            </li>
                            <li className='mb-2'>Services</li>
                            <li className='mb-2'>News</li>
                            <li className='mb-2'>Carrers</li>
                            <li className='mb-2'>Contact</li>
                        </ul>
                    </div>
                </div>
                <h2 className='mt-5 text-center shadow py-5'> This website is made with ❤️ by Brajesh</h2>
            </div>
        </>
    )
}

export default Footer