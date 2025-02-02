import React, { useEffect, useState } from "react";
import { getDisasterReports } from "../services/api";
import "../styles/resourcePage.css";

const ResourcePage = () => {
    const [disasters, setDisasters] = useState([]);

    // Fetch data when the page loads
    useEffect(() => {
        const fetchData = async () => {
            const data = await getDisasterReports();
            setDisasters(data);
        };
        fetchData();
    }, []);

    return (
        <div className="resource-page">
            <h2>Disaster Reports</h2>
            <table className="resource-table">
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Severity</th>
                    </tr>
                </thead>
                <tbody>
                    {disasters.length > 0 ? (
                        disasters.map((disaster, index) => (
                            <tr key={index}>
                                <td>{disaster.type}</td>
                                <td>{disaster.city}</td>
                                <td>{disaster.state}</td>
                                <td>{disaster.severity}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">No disaster reports available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ResourcePage;
