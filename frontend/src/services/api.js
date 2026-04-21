import axios from 'axios';

// Get the API URL from environment variables or fallback to localhost
let API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

// Ensure the URL starts with http/https
if (API_URL && !API_URL.startsWith("http")) {
    API_URL = `https://${API_URL}`;
}

// Ensure the URL ends with /api
if (API_URL && !API_URL.endsWith("/api")) {
    API_URL = `${API_URL}/api`;
}

console.log("Connecting to API at:", API_URL);

export const registerStudent = async (studentData) => {
    return await axios.post(`${API_URL}/register`, studentData);
};

export const loginStudent = async (loginData) => {
    return await axios.post(`${API_URL}/login`, loginData);
};
