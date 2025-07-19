import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Section5 = () => {

    const [blogData, setblogdata] = useState([])

    const showServiceData = () => {
        axios.get("http://localhost:4000/blogPosts")
            .then((response) => {
                console.log(response.data, 'This is get data')
                setblogdata(response.data)
            })
    }

    useEffect(() => {
        showServiceData();
    }, [])

    return (
        < >
            <div className="container section5">
                {/* first row */}
                <div className="row mt-5 py-5 mb-5">
                    <div className="col-lg-12 text-center">
                        <img src="https://preview.colorlib.com/theme/nova/images/karate-divider.png.webp" alt="" className='img-fluid ms-0 mb-2' />
                        <h2 className='text-center ourTeacher'>Blog Posts</h2>
                    </div>
                </div>
                {/* second row */}
                <div className="container mb-5 ">
                    <div className="row mb-5   ">

                        {blogData.length >= 0 && (blogData.map((items, index) => {
                            // console.log(items, 'map');
                            return (
                                <div className="col-lg-4 mb-5 py-3" key={index}>
                                    <div className="card  h-100 w-100" >
                                        <img src={items.Image} className="card-img-top" alt="..." />
                                        {/* <img src="https://preview.colorlib.com/theme/nova/images/post_3.jpg" className="card-img-top" alt="..." /> */}
                                        <div className="card-body">
                                            <p className='mb-0 text-secondary'>{items.Blogdate} by <span className='text-danger'>Admin</span></p>
                                            <h5 className="card-title fw-bold mb-3">{items.BlogTitle}</h5>
                                            <p className="card-text">{items.Blogdescription}</p>
                                            <button className='btn text-danger'>Read more</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section5