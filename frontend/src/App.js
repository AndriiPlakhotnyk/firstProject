import React, { useState } from 'react';
import './App.css';

const initialValues = {
  userName: '',
  userSurname: '',
  userEmail: '',
  userAge: ''
}

function App() {
  const [userData, setUserData] = useState(initialValues);
  const [users, setUsers] = useState([]);
  const [editableUserData, setEditableUserData] = useState({
    isEdit: false,
    userIndex: null
  })

  const handleRemoveClick = (index) => {
    setUsers(users.filter((user, userIndex) => userIndex !== index));
  }

  const isFilledFields = userData.userName && userData.userSurname && userData.userEmail && userData.userAge;

  const handleSubmitUser = (e) => {
    e.preventDefault();

    if (isFilledFields) {
      if(editableUserData.isEdit) {
        const editedData = users;
        editedData.splice(editableUserData.userIndex, 1, userData)

        setUsers(editedData);

        setEditableUserData({
          isEdit: false,
          userIndex: null
        })
      } else {
        setUsers((prevState) => [...prevState,userData]);
      }

      

      setUserData(initialValues);
    }
  }

  const handleCleanClick = () => setUserData(initialValues);
  
  const handleEditClick = (data, index) => {
    setUserData(data);
    setEditableUserData({
      isEdit: true,
      userIndex: index
    })
  }


  console.log('users: ', users)

  return (
    <div className="wrapper">
      <div className="wrapper-content">
        <div className="table-data">
          <table>
            <th>№</th>
            <th>User Name</th>
            <th>User Surname</th>
            <th>email</th>
            <th>age</th>
            <th>Actions</th>

            <tbody>
              {users.map((user, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{user.userName}</td>
                  <td>{user.userSurname}</td>
                  <td>{user.userEmail}</td>
                  <td>{user.userAge}</td>
                  <td>
                    <div>
                      <button className="edit-action" onClick={() => handleEditClick(user, index)}>edit</button>
                      <button classNAme="remove-action" onClick={() => handleRemoveClick(index)}>remove</button>
                    </div>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
          <form onSubmit={handleSubmitUser} onReset={handleCleanClick}>
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
              <button disabled={!isFilledFields} type = "submit">{editableUserData.isEdit ? 'Edit' : 'Add'}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
