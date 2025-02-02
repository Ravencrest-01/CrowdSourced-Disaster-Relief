import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api"; // Adjust based on backend URL

// Fetch all reported disasters
export const fetchDisasters = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/disasters`);
        return response.data;
    } catch (error) {
        console.error("Error fetching disasters:", error);
        return [];
    }
};

// Fetch all available resources
export const fetchResources = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/resources`);
        return response.data;
    } catch (error) {
        console.error("Error fetching resources:", error);
        return [];
    }
};

// Post a new disaster report
export const createDisasterReport = async (data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/disasters`, data);
        return response.data;
    } catch (error) {
        console.error("Error creating disaster report:", error);
        throw error;
    }
};

// ✅ Function to fetch disaster reports
export const getDisasterReports = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/disasters`);
        return response.data; // Return the fetched data
    } catch (error) {
        console.error("Error fetching disaster reports:", error);
        return [];
    }
};
