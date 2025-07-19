import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Section2 = () => {

    const [teacherdata, setTeacherdata] = useState([])

    const showServiceData = () => {
        axios.get("http://localhost:4000/teachers")
            .then((response) => {
                // console.log(response.data, 'This is get data')
                setTeacherdata(response.data)
            })
    }

    useEffect(() => {
        showServiceData();
    }, [])

    return (
        < >
            <div className="container main-container ">
                <div className="row mb-5     ">
                    <div className="col-lg-12 text-center">
                        <img src="https://preview.colorlib.com/theme/nova/images/karate-divider.png.webp" alt="" className='img-fluid ' />
                        <h2 className='text-center ourTeacher'>our teachers</h2>
                    </div>
                </div>

                {/* Card Section   */}

                <div className="container   mt-5 mb-5">
                    <div className="row mt-5">

                        {teacherdata.length >= 0 && (teacherdata.map((items, index) => {
                            // console.log(items, 'this is map');
                            return (
                                <div className="col-lg-3 mt-5" key={index}>
                                    <div className="card cardData text-center" style={{ backgroundColor: `#${items.bgColor}` }}>
                                        {/* <img src="https://preview.colorlib.com/theme/nova/images/person_1.jpg.webp" className='img-fluid' alt="" /> */}
                                        <img src={items.TeacherProfilePic} className='img-fluid' alt="" />
                                        <h3 className='font-weight-bold'> {items.TeacherName} </h3>
                                        <span className='d-block mb-5'>{items.Department}</span>
                                        <p> {items.description}</p>
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

export default Section2