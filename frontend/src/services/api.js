import axios from 'axios';

let API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";
if (!API_URL.endsWith("/api")) {
    API_URL = `${API_URL}/api`;
}

export const registerStudent = async (studentData) => {
    return await axios.post(`${API_URL}/register`, studentData);
};

export const loginStudent = async (loginData) => {
    return await axios.post(`${API_URL}/login`, loginData);
};
