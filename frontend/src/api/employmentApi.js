

import axios from "./axiosCofig"


 const addEmploymentnDetail = async (data) => {
    try {
        const response = await axios.post(`/user/employment`,data)
        return response.data
    } catch (error) {
        return error

    }
}
const updateEmploymentDetail = async (data,id) => {
    try {
        const response = await axios.put(`/user/employment/${id}`,data)
        return response.data
    } catch (error) {
        return error

    }
}

export  {
    addEmploymentnDetail,
    updateEmploymentDetail
}