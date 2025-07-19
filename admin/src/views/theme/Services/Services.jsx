import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';

const Services = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        axios.post("http://localhost:4000/services", data)
            .then((response) => {
                console.log(response.data, 'This is data');
                alert("data Successfully added");
                reset();
            })
    };

    return (
        < >
            <div className="container my-5">
                <h1 className='mb-5'>Services</h1>
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

                            <button className='btn btn-primary'>Submit</button>
                        </form>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Services