import apiUrl from "../apiConfig";
import axios from "axios";

// get all user
const getAllUsers = () => {
    return axios.get(`${apiUrl}/users`);
};
//post New User 
const createNewUser =(user)=>{
    return axios.post(`${apiUrl}/users`,{user})
}

// Delete user By ID
const deleteUserById =(id)=>{
     return axios.delete(`${apiUrl}/users/${id}`)
};

// Login User
const loginUser = (user) => {
    return axios.post(`${apiUrl}/users/login`, {user})
};
  
export { getAllUsers ,createNewUser, deleteUserById, loginUser };
