import React, { useEffect, useState } from 'react';
import './App.css';
import { createOwner, deleteOwner, getAllOwners, updateOwner } from './services/owner-service';

// Use effect
// Создать в src папку services 3 функции 

const initialValues = {
  name: '',
  surname: '',
  email: '',
  phone: ''
}

function App() {
  const [ownerData, setOwnerData] = useState(initialValues);
  const [owners, setOwners] = useState([]); // Запрос с БД
  const [editableOwnerData, setEditableOwnerData] = useState({
    isEdit: false,
    ownerIndex: null
  })

  useEffect(() => {
    getAllOwners()
    .then (
      (res) => setOwners(res.data)
    )
  }, [owners]) 

  const handleRemoveClick = async (id) => {
    const responce = await deleteOwner(id)
    if(responce.status === 200){
      setOwners(owners.filter((ownerId) => ownerId !== id))
    }
  }

  const isFilledFields = ownerData.name && ownerData.surname && ownerData.email && ownerData.phone;

  const handleSubmitOwner = async (e) => {
    e.preventDefault();

    if (isFilledFields) {
      if(editableOwnerData.isEdit) {
        const editedData = async (data) => {
          const edition = await updateOwner(ownerData)
          if (edition.status === 200) {
            console.log ('SUCCESS')
          }
        }

        setOwners(editedData);

        setEditableOwnerData({
          isEdit: false,
          ownerIndex: null
        })
      } else {
        const owner = await createOwner(ownerData)
        setOwners((prevState) => [...prevState, owner]);
      }
      setOwnerData(initialValues);
    }
  }

  const handleCleanClick = () => setOwnerData(initialValues);
  
  const handleEditClick = (data, index) => {
    setOwnerData(data);
    setEditableOwnerData({
      isEdit: true,
      ownerId: index
    })
  }

  return (
    <div className="wrapper">
      <div className="wrapper-content">
        <div className="table-data">
          <table>
            <th>№</th>
            <th>Owner's Name</th>
            <th>Owner's Surname</th>
            <th>email</th>
            <th>phone</th>
            <th>Actions</th>

            <tbody>
              {owners.map((owner) => (
                <tr key={owner.id}>
                  <td>{owner.id}</td>
                  <td>{owner.name}</td>
                  <td>{owner.surname}</td>
                  <td>{owner.email}</td>
                  <td>{owner.phone}</td>
                  <td>
                    <div>
                      <button className="edit-action" onClick={() => handleEditClick(owner, owner.id)}>edit</button>
                      <button className="remove-action" onClick={() => handleRemoveClick(owner.id)}>remove</button>
                    </div>
                  </td> 
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
          <form onSubmit={handleSubmitOwner} onReset={handleCleanClick}>
            <input placeholder='Write your name' onChange={(e) => setOwnerData((prevState) => ({
              ...prevState,
              name: e.target.value
            }))}
            value={ownerData.name}
            />
            <input placeholder='Write your surname' onChange={(e) => setOwnerData((prevState) => ({
              ...prevState,
              surname: e.target.value
            }))}
            value={ownerData.surname}
            />
            <input placeholder='Write your email' onChange={(e) => setOwnerData((prevState) => ({
              ...prevState,
              email: e.target.value
            }))}
            value={ownerData.email}
            />
            <input placeholder='Write your phone' onChange={(e) => setOwnerData((prevState) => ({
              ...prevState,
              phone: e.target.value
            }))}
            value={ownerData.phone}
            />

            <div className="buttons-wrapper">
              <button type = "reset">Clean</button>
              <button disabled={!isFilledFields} type = "submit">{editableOwnerData.isEdit ? 'Edit' : 'Add'}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
