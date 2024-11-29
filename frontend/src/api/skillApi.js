import axios from "./axiosCofig";

const addUserSkill = async (data) => {
    try {
        const response = await axios.post(`/user/addUserSkill`, data)
        console.log("response: ",response);
        
        return response.data;
    } catch (error) {
        return error
    }
}

const getUserSkill = async () => {
    try {
        const response = await axios.get(`/user/getUserSkill`)
        // console.log('getUserSkill: ',response);
        return response.data
    } catch (error) {
        return error
    }
} 
export { addUserSkill, getUserSkill}