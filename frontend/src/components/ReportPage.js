import React, { useState } from "react";
import "../styles/reportPage.css";
import { createDisasterReport } from "../services/api";

const ReportPage = () => {
    const [formData, setFormData] = useState({
        disaster: { type: "", city: "", state: "", severity: 1 },
        shelter: { type: "", address: "", city: "", state: "", image: null },
        resource: { type: "", address: "", city: "", state: "" },
    });

    // Handle input changes
    const handleInputChange = (e, formType) => {
        const { name, value, type, files } = e.target;

        setFormData((prev) => ({
            ...prev,
            [formType]: {
                ...prev[formType],
                [name]: type === "file" ? files[0] : type === "range" ? Number(value) : value,
            },
        }));
    };

    // Handle form submission
    const handleSubmit = async (e, formType) => {
        e.preventDefault();
        const formDataToSend = formData[formType];

        try {
            await createDisasterReport(formDataToSend);
            alert(`${formType} report submitted successfully!`);
        } catch (error) {
            alert(`Error submitting ${formType} report.`);
            console.error("Error:", error);
        }
    };

    return (
        <div className="report-page">
            {/* Disaster Form */}
            <div className="disaster-form">
                <h2>Report Disaster</h2>
                <form onSubmit={(e) => handleSubmit(e, "disaster")}>
                    <label>Disaster Type:</label>
                    <input type="text" name="type" placeholder="Enter Disaster Type" required onChange={(e) => handleInputChange(e, "disaster")} />
                    <label>City:</label>
                    <input type="text" name="city" placeholder="Enter City" required onChange={(e) => handleInputChange(e, "disaster")} />
                    <label>State:</label>
                    <input type="text" name="state" placeholder="Enter State" required onChange={(e) => handleInputChange(e, "disaster")} />
                    
                    <div className="slider-container">
                        <label>Severity:</label>
                        <input type="range" name="severity" min="1" max="5" step="1" value={formData.disaster.severity} onChange={(e) => handleInputChange(e, "disaster")} />
                        <div className="slider-labels">
                            <span>1</span>
                            <span>2</span>
                            <span>3</span>
                            <span>4</span>
                            <span>5</span>
                        </div>
                    </div>
                    <button className="submit">Submit</button>
                </form>
            </div>

            {/* Shelter Form */}
            <div className="shelter-form">
                <h2>Report Shelter</h2>
                <form onSubmit={(e) => handleSubmit(e, "shelter")}>
                    <label>Shelter Type:</label>
                    <input type="text" name="type" placeholder="Enter Shelter Type" required onChange={(e) => handleInputChange(e, "shelter")} />
                    <label>Address (Landmark):</label>
                    <input type="text" name="address" placeholder="Enter Address" required onChange={(e) => handleInputChange(e, "shelter")} />
                    <label>City:</label>
                    <input type="text" name="city" placeholder="Enter City" required onChange={(e) => handleInputChange(e, "shelter")} />
                    <label>State:</label>
                    <input type="text" name="state" placeholder="Enter State" required onChange={(e) => handleInputChange(e, "shelter")} />

                    {/* File Upload with Custom Icon */}
                    <label>Images:</label>
                    <div className="file-input-container">
                        <input type="file" id="shelter-image" name="image" onChange={(e) => handleInputChange(e, "shelter")} />
                        <label htmlFor="shelter-image" className="custom-file-button">
                            <img src="/images/upload-solid.svg" alt="Upload Icon" />
                        </label>
                    </div>
                    <button className="submit">Submit</button>
                </form>
            </div>

            {/* Resource Form */}
            <div className="resource-form">
                <h2>Report Resources</h2>
                <form onSubmit={(e) => handleSubmit(e, "resource")}>
                    <label>Resource Type:</label>
                    <input type="text" name="type" placeholder="Enter Resource Type" required onChange={(e) => handleInputChange(e, "resource")} />
                    <label>Address:</label>
                    <input type="text" name="address" placeholder="Enter Address" required onChange={(e) => handleInputChange(e, "resource")} />
                    <label>City:</label>
                    <input type="text" name="city" placeholder="Enter City" required onChange={(e) => handleInputChange(e, "resource")} />
                    <label>State:</label>
                    <input type="text" name="state" placeholder="Enter State" required onChange={(e) => handleInputChange(e, "resource")} />
                    <button className="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ReportPage;
