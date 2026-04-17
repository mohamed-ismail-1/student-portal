import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080/api";

export const registerStudent = async (studentData) => {
    return await axios.post(`${API_URL}/register`, studentData);
};

export const loginStudent = async (loginData) => {
    return await axios.post(`${API_URL}/login`, loginData);
};
