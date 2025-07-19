import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react'

const BlogList = () => {

    const [showData, setshowData] = useState([])

    const showServicesData = () => {
        console.log("hello");
        axios.get("http://localhost:4000/blogPosts")
            .then((response) => {
                console.log(response.data)
                setshowData(response.data)
            })
    }

    // const handleDelete = async (id) => {
    //     await axios.delete(`http://localhost:4000/blogPosts/${id}`)
    //         .then((response) => {
    //             console.log(response, 'Response of id')
    //             alert("Successfully Deleted")
    //             showServicesData();
    //         })
    // }

    useEffect(() => {
        showServicesData();
    }, [])
    return (
        < >
            <div className="container my-5">
                <h1>Blog List</h1>
                <table className='table table-bordered table-stripped '>
                    <thead className='table-dark' >
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Image</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {showData.map((items, index) => {
                            console.log(items, 'this is items');
                            return (
                                <tr key={index}>
                                    <td>{items.BlogTitle}</td>
                                    <td>{items.Blogdescription}</td>
                                    <td><img src={items.Image} className='rounded-circle' height={80} width={80} alt="" /></td>
                                    <td>
                                        {/* <i className="fa-solid fa-trash ms-3 me-5" onClick={() => handleDelete(items.id)}></i> */}
                                        <i className="fa-solid fa-pen-to-square"></i>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default BlogList