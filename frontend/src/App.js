import React, { useState } from 'react';
import './App.css';

const initialVAlues = {
  userName: '',
  userSurname: '',
  userEmail: '',
  userAge: ''
}

function App() {
  const [userData, setUserData] = useState(initialVAlues);
  const [users, setUsers] = useState([])

  const handleSubmitUser = (e) => {
    e.preventDefault();

    setUsers((prevState) => [...prevState,userData]);

  setUserData(initialVAlues);
  }

  console.log('users: ', users)

  return (
    <div className="wrapper">
      <div className="wrapper-content">
        <div className="table-data">
          <table>
            <th>id</th>
            <th>User Name</th>
            <th>User Surname</th>
            <th>email</th>
            <th>age</th>
            <th>Actions</th>

            <tbody>

            </tbody>
          </table>
        </div>

        <div>
          <form onSubmit={handleSubmitUser}>
            <input placeholder='Write your name' onChange={(e) => setUserData((prevState) => ({
              ...prevState,
              userName: e.target.value
            }))}
            value={userData.userName}
            />
            <input placeholder='Write your surname' onChange={(e) => setUserData((prevState) => ({
              ...prevState,
              userSurname: e.target.value
            }))}
            value={userData.userSurname}
            />
            <input placeholder='Write your email' onChange={(e) => setUserData((prevState) => ({
              ...prevState,
              userEmail: e.target.value
            }))}
            value={userData.userEmail}
            />
            <input placeholder='Write your age' onChange={(e) => setUserData((prevState) => ({
              ...prevState,
              userAge: e.target.value
            }))}
            value={userData.userAge}
            />

            <div className="buttons-wrapper">
              <button type = "reset">Clean</button>
              <button type = "submit">Add</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
