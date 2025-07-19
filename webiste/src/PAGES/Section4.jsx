import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import axios from 'axios';

const Section4 = () => {

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
        <>
            <style>
                {`
                .swiper-pagination-bullet {
                    background-color: #ec0101 !important;
                } 
                `}
            </style>
            <div className="container sectionfour mb-5">
                <div className="row">
                    <div className="row mt-5 py-5">
                        <div className="col-lg-12 text-center">
                            <img src="https://preview.colorlib.com/theme/nova/images/karate-divider.png.webp" alt="" className='img-fluid ms-0 mb-2' />
                            <h2 className='text-center ourTeacher'>our Testimonials</h2>
                        </div>
                    </div>
                </div>
                <Swiper
                    cssMode={true}
                    // navigation={true}
                    pagination={{ clickable: true }}
                    mousewheel={true}
                    keyboard={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
                    className="mySwiper"
                >

                    {teacherdata.length > 0 && (teacherdata.map((items, index) => {
                        // console.log(items, 'map');
                        return (
                            <SwiperSlide key={index}>
                                <div className="container mb-5 mt-5">
                                    <div className="row d-flex justify-content-center mt-5" >
                                        <div className="col-lg-7 mx-auto" >
                                            <div className="teacher mt-5 mx-auto text-center" style={{ backgroundColor: `#${items.bgColor}` }} >
                                                {/* <img src="https://preview.colorlib.com/theme/nova/images/person_1.jpg.webp" className='img-fluid border mx-auto d-block' alt="" /> */}
                                                <img src={items.TeacherProfilePic} className='img-fluid border mx-auto d-block' alt="" />
                                                <h3 className='font-weight-bold mt-0'>{items.TeacherName} </h3>
                                                <span className='d-block mt-0 mb-5'>{items.Department}</span>
                                                <p>{items.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    }))}
                </Swiper>
            </div>
        </>
    );
}

export default Section4;
