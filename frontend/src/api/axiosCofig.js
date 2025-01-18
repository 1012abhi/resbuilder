import axios from "axios"
const token = localStorage.getItem('token')
const axiosInstance = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}/api`,
    headers: {
        Authorization: `Bearer ${token}`
    }
})
// console.log(token)
// console.log('Base URL:', process.env.REACT_APP_BASE_URL); // Add this for debugging
export default axiosInstance