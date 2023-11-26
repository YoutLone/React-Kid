import React, { useState, useEffect } from 'react';
import './Users.css';

const url = 'https://api.github.com/users';

function Users() {

  async function getUsers () {
    const response = await fetch(url);
    const users = await response.json();
    console.log(users);
    setUsers(users);
  }

  useEffect(() => {
    getUsers();
  },[])

    const [users,setUsers] = useState([]);
  return (
    <div className="container">
    <h1>Github Users</h1>
    <ul className="user-container">
      {users.map((user) => {
        return <li key={user.id}>
          <div>
            <img src={user.avatar_url} alt="user.login" />
          <h4>{user.login}</h4>
          </div>
        </li>
      })}
    </ul> 
    </div>
  )
}

export default Users