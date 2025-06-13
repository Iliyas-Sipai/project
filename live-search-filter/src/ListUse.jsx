import React, {  useState } from 'react'
import './App.css'


const ListUse = () => {


    const userList = [
  'Iliyas ',
  'Aman',
  'Urvish',
  'Dipak',
  'Imran',
  'Manav',
];
  const [search,setSearch] =useState('');
  const filteredUser = userList.filter(user => 
    user.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );
  return (
    <>
      <div className='app'>
             <input type="text"
             placeholder='Search User' 
             value={search}
             onChange={(e)=>setSearch(e.target.value)}/>
      </div>
      <ul>
          {filteredUser.length > 0 ? (
            filteredUser.map((user,index)=>(
                <li key={index}>{user}</li>
            ))
          ):(
            <li>Not Match Found</li>
          )}
      </ul>
    </>
  )
}

export default ListUse
