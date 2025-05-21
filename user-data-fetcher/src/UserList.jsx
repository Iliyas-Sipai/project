import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css';

const UserList = () => {

    const [data,setData] = useState([])
    const [loding,setLoding] = useState(true)
    const [error,setError] = useState('')

     useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            setData(response.data);
            setLoding(false);
        })
        .catch(() => {
        setError('⚠️ Failed to load user data.');
        setLoding(false);
        });
     },[])
    
  if (loding) return <p className="loading">⏳ Loading...</p>;
  if (error) return <p className="error">{error}</p>;


  return (
    <>
    <ul   className="user-container">
  {data.map((i, index) => (
    <li key={i.id} className="user-card">
      <strong>Name:</strong> {i.name} <br />
      <strong>Email:</strong> {i.email} <br />
      <strong>Company:</strong> {i.company.name}
    </li>
  ))}
</ul>

    </>
  )
}

export default UserList
