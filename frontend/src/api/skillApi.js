import axios from "./axiosCofig";

const addUserSkill = async (data) => {
    try {
        const response = await axios.post(`/user/addUserSkill`, data)
        return response.data;
    } catch (error) {
        return error
    }
}

const getUserSkill = async () => {
    try {
        const response = await axios.get(`/user/getUserSkill`)
        return response.data
    } catch (error) {
        return error
    }
} 

const updateSkills = async (data, id) => {
    try {
        const response = await axios.put(`/user/updateskill/${id}`,data)
        return response.data
    } catch (error) {
        
    }
}
export { addUserSkill, getUserSkill, updateSkills}