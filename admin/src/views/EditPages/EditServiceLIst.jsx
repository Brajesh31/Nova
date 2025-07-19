import axios from 'axios';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom'

const EditServiceLIst = () => {

    const { register, handleSubmit, reset } = useForm();

    const { id } = useParams()
    // console.log(id, 'this is id')
    const navigate = useNavigate();

    const showServicesData = () => {
        console.log("hello");
        axios.get(`http://localhost:4000/services/${id}`)
            .then((response) => {
                console.log(response.data)
                reset(response.data)
            })
    }

    useEffect(() => {
        showServicesData();
    }, [])

    const onSubmit = async (data) => {
        console.log(data);
        await axios.put(`http://localhost:4000/services/${id}`, data)
            .then((response) => {
                console.log(response.data, 'This is data');
                alert("data Successfully added");
                navigate('/theme/ServicesList')
            })
    };


    return (
        < >
            <div className="container">
                <h1>Service List Edit Page</h1>
                <div className="row">
                    <div className="col-lg-12 ">
                        <form className='form-control shadow py-5' onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3 ">
                                <label htmlFor="exampleFormControlInput1" className="form-label">  className name of Icon</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter className name" {...register('className', { required: true })} />
                            </div>

                            <div className="mb-3 ">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Title"       {...register('title', { required: true })} />
                            </div>


                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" {...register('description', { required: true })}></textarea>
                            </div>

                            <button className='btn btn-primary'>Update</button>
                        </form>

                    </div>
                </div >
            </div>
        </>
    )
}

export default EditServiceLIst