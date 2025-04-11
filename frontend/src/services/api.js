import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api"; // Adjust based on backend URL

/** Fetch All Reported Disasters
 * @returns {Promise<Array>} - List of disasters
 */
export const fetchDisasters = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/disasters`);
        return response.data;  // Return the list of disasters
    } catch (error) {
        console.error("Error Fetching Data from Disasters:", error);
        return [];  // Return an empty array in case of error
    }
};

/** Create a new disaster report
 * @param {Object} data - disaster report details
 * @returns {Promise<Object>} - Created Disaster Report
 */
export const createDisasterReport = async (data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/disasters`, data);  // Post the disaster data to backend
        return response.data;  // Return the newly created disaster report
    } catch (error) {
        console.error("Error Creating Disaster Report:", error);
        throw error;  // Throw the error so that it can be handled on the calling side
    }
};

/** Get All Disaster Reports
 * @returns {Promise<Array>} - List of disaster Reports
 */
export const getDisasterReports = async () => {
    return fetchDisasters();  // Simply return the fetchDisasters function, as it already handles the data fetching
};

/** Fetch All Available Resources
 * @returns {Promise<Array>} - List of resources
 */
export const fetchResources = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/resources`);
        return response.data;  // Return the list of resources
    } catch (error) {
        console.error("Error Fetching Resources", error);
        return [];  // Return an empty array in case of error
    }
};

/** Create a new resource report
 * @param {Object} data - resource report details
 * @returns {Promise<Object>} - Created Resource Report
 */
export const createResourceReport = async (data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/resources`, data);
        return response.data;  // Return the newly created resource report
    } catch (error) {
        console.error("Error Creating Resource Report:", error);
        throw error;
    }
};

/** Fetch All Shelters
 * @returns {Promise<Array>} - List of shelters
 */
export const fetchShelters = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/shelters`);
        return response.data;  // Return the list of shelters
    } catch (error) {
        console.error("Error Fetching Shelters:", error);
        return [];  // Return an empty array in case of error
    }
};

/** Create a new shelter report
 * @param {Object} data - shelter report details
 * @returns {Promise<Object>} - Created Shelter Report
 */
export const createShelterReport = async (data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/shelters`, data);
        return response.data;  // Return the newly created shelter report
    } catch (error) {
        console.error("Error Creating Shelter Report:", error);
        throw error;
    }
};

/** Get All Resource Reports
 * @returns {Promise<Array>} - List of resource reports
 */
export const getResourceReports = async () => {
    return fetchResources();  // Return the fetchResources function
};

/** Get All Shelter Reports
 * @returns {Promise<Array>} - List of shelter reports
 */
export const getShelterReports = async () => {
    return fetchShelters();  // Return the fetchShelters function
};

/** Create a new Disaster Report with Enhanced Error Handling and Response Validation
 * @param {Object} data - disaster report details
 * @returns {Promise<Object>} - Created Disaster Report
 */
export const createDisasterReportWithEnhancedErrorHandling = async (data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/disasters`, data);  // Post the disaster data to backend
        if (response.status === 201) {
            return response.data;  // Return the newly created disaster report if success
        } else {
            throw new Error('Failed to create disaster report');
        }
    } catch (error) {
        console.error("Error Creating Disaster Report with Enhanced Handling:", error);
        throw error;  // Throw the error so that it can be handled on the calling side
    }
};

export const createDonor = async (data) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/donors`, data);
      return response.data;
    } catch (error) {
      console.error("Error creating donor:", error);
      throw error;
    }
  };
  
  export const fetchDonors = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/donors`);
      return response.data;
    } catch (error) {
      console.error("Error fetching donors:", error);
      return [];
    }
  };
