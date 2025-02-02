import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api"; // Adjust based on backend URL

// Fetch all reported disasters
// export const fetchDisasters = async () => {
//     try {
//         const response = await axios.get(`${API_BASE_URL}/disasters`);
//         return response.data;
//     } catch (error) {
//         console.error("Error fetching disasters:", error);
//         return [];
//     }
// };

// // Fetch all available resources
// export const fetchResources = async () => {
//     try {
//         const response = await axios.get(`${API_BASE_URL}/resources`);
//         return response.data;
//     } catch (error) {
//         console.error("Error fetching resources:", error);
//         return [];
//     }
// };

// // Post a new disaster report
// export const createDisasterReport = async (data) => {
//     try {
//         const response = await axios.post(`${API_BASE_URL}/disasters`, data);
//         return response.data;
//     } catch (error) {
//         console.error("Error creating disaster report:", error);
//         throw error;
//     }
// };

// // ✅ Function to fetch disaster reports
// export const getDisasterReports = async () => {
//     try {
//         const response = await axios.get(`${API_BASE_URL}/disasters`);
//         return response.data; // Return the fetched data
//     } catch (error) {
//         console.error("Error fetching disaster reports:", error);
//         return [];
//     }
// };

/** Fetch All Reported Disasters
* @returns {Promise<Array>} - List of disasters
*/

export const fetchDisasters = async() => {
    try {
        const response = await axios.get(`${API_BASE_URL}/disasters`);
        return response.data;
    } catch(error) {
        console.error("Error Fetching Data from Disasters:", error);
        return [];
    }
};

/** Create a new disaster report
 * @param {Object} data - disaster report details
 * @returns {Promise<Object>} - Created Disaster Report
 */
export const createDisasterReport = async (data) => {
    try{
        const response = await axios.post(`${API_BASE_URL}/disasters`, data);
        return response.data;
    } catch (error){
        console.log("Error Creating Disaster Report:", error);
        throw error;
    }
};


/** Get All Disaster Report
 * @returns {Promise<Array>} - List of disaster Reports
 */
export const getDisasterReports = async () => {
    return fetchDisasters();
};

/** Fetch All Avialable Resources
 * @returns {Promise<Array>} -List of resources
 */
export const fetchResources = async () => {
    try{
        const response = await axios.get(`${API_BASE_URL}/resources`);
        return response.data;
    } catch(error) {
        console.error("Error Fetching Resources", error);
        return[];
    }
};