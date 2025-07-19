import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';

const BlogPost = () => {

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:4000/blogPosts", data)
      .then((response) => {
        console.log(response.data, 'This is data');
        alert("data Successfully added");
        reset();
      })
  };

  return (
    < >
      <div className="container my-5">
        <h1 className='mb-5'>Blog Posts</h1>
        <div className="row">
          <div className="col-lg-12 ">
            <form className='form-control shadow py-5' onSubmit={handleSubmit(onSubmit)}>

              <div className="mb-3 ">
                <label htmlFor="exampleFormControlInput1" className="form-label">  Blog Title </label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Image URL" {...register('Image', { required: true })} />
              </div>

              <div className="mb-3 ">
                <label htmlFor="exampleFormControlInput1" className="form-label">  Blog Title </label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Blog Title" {...register('BlogTitle', { required: true })} />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Blog Description</label>
                <textarea className="form-control" placeholder="Write Blog Description" id="exampleFormControlTextarea1" rows="3" {...register('Blogdescription', { required: true })}></textarea>
              </div>

              <div className="mb-3 col-lg-3 ">
                <label htmlFor="exampleFormControlInput1" className="form-label">  Enter Blog Date </label>
                <input type="date" className="form-control" id="exampleFormControlInput1" placeholder="Enter className name" {...register('Blogdate', { required: true })} />
              </div>
              <button className='btn btn-primary'>Submit</button>

            </form>
          </div>
        </div>
      </div >
    </>
  )
}

export default BlogPost