import axios from "axios"

const apiEndPoint = "http://localhost:5000/api/owner"

export async function createOwner(ownerData) {
    const response = await axios.post(apiEndPoint, ownerData)
    return response.data
}

export async function getAllOwners() {
    return axios.get(apiEndPoint)
}

export async function getOwnerById (id) {
    return axios.get(apiEndPoint + '/' + id)
}

export async function updateOwner(data) {
    return axios.put(apiEndPoint, data)
}

export async function deleteOwner(id) {
    return axios.delete(apiEndPoint + '/' + id)
}