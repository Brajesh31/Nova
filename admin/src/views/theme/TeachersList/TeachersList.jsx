import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

const TeachersList = () => {
  const [teachers, setTeachers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from the API
    axios.get("http://localhost:4000/teachers")
      .then((response) => {
        setTeachers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching teachers:', error);
      });
  }, []);

  const handleDelete = (id) => {
    console.log(`Deleting teacher with id ${id}`);

  };

  return (
    <div className="container my-5">
      <h2>Teachers List</h2>
      <ul className="list-group mt-4">
        {teachers.map((teacher) => (
          <li className="list-group-item" key={teacher.id}>
            <div className="d-flex align-items-center">
              <div className="flex-grow-1">
                <h5 className="mb-1">{teacher.TeacherName}</h5>
                <p className="mb-1">{teacher.Department}</p>
                <p className="mb-1">{teacher.description}</p>
              </div>
              <div>
                <img src={teacher.TeacherProfilePic} alt={teacher.TeacherName} className="rounded-circle" style={{ width: '80px', height: '80px' }} />
              </div>
              <div>
                <i className="fa-solid d-block fa-trash ms-3 me-2" onClick={() => handleDelete(teacher.id)}></i>
                <i className="fa-solid fa-pen-to-square d-block me-5 ms-3 mt-3" onClick={() => (navigate(`/EditPages/EditTeahcerList/${teacher.id}`))}></i>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeachersList;
