import React, { useState } from "react";
import "../styles/reportPage.css";
import { createDisasterReport, createShelterReport, createResourceReport } from "../services/api";

const ReportPage = () => {
    const [formData, setFormData] = useState({
        disaster: { type: "", city: "", state: "", severity: 1 },
        shelter: { type: "", address: "", city: "", state: "", image: null },
        resource: { type: "", address: "", city: "", state: "" },
    });

    const [loading, setLoading] = useState({
        disaster: false,
        shelter: false,
        resource: false
    });

    const [success, setSuccess] = useState({
        disaster: false,
        shelter: false,
        resource: false
    });

    const [error, setError] = useState(""); // Error state for handling errors

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
        
        setLoading(prev => ({ ...prev, [formType]: true }));
        setError("");  // Reset any previous errors

        const formDataToSend = formData[formType];

        try {
            // Validate if all necessary fields are filled
            if (!formDataToSend.type || !formDataToSend.city || !formDataToSend.state) {
                setError("All fields are required.");
                return;
            }

            let response;

            // Create Disaster Report
            if (formType === "disaster") {
                console.log("Submitting disaster report with data:", formDataToSend);  // Debugging line to check data
                response = await createDisasterReport({
                    type: formDataToSend.type,
                    city: formDataToSend.city,
                    state: formDataToSend.state,
                    severity: formDataToSend.severity
                });
            } else if (formType === "shelter") {
                if (formDataToSend.image) {
                    const shelterFormData = new FormData();
                    shelterFormData.append("shelterType", formDataToSend.type);
                    shelterFormData.append("address", formDataToSend.address);
                    shelterFormData.append("city", formDataToSend.city);
                    shelterFormData.append("state", formDataToSend.state);
                    shelterFormData.append("image", formDataToSend.image);

                    response = await createShelterReport(shelterFormData);
                } else {
                    response = await createShelterReport({
                        shelterType: formDataToSend.type,
                        address: formDataToSend.address,
                        city: formDataToSend.city,
                        state: formDataToSend.state
                    });
                }
            } else if (formType === "resource") {
                response = await createResourceReport({
                    resourceType: formDataToSend.type,
                    address: formDataToSend.address,
                    city: formDataToSend.city,
                    state: formDataToSend.state
                });
            }

            // If successful, show success message
            setSuccess(prev => ({ ...prev, [formType]: true }));

            // Reset form data
            setFormData(prev => ({
                ...prev,
                [formType]: formType === "disaster"
                    ? { type: "", city: "", state: "", severity: 1 }
                    : formType === "shelter"
                        ? { type: "", address: "", city: "", state: "", image: null }
                        : { type: "", address: "", city: "", state: "" }
            }));

            // Clear success message after 3 seconds
            setTimeout(() => {
                setSuccess(prev => ({ ...prev, [formType]: false }));
            }, 3000);

        } catch (error) {
            console.error(`Error submitting ${formType} report:`, error);
            setError("An error occurred. Please try again.");
        } finally {
            setLoading(prev => ({ ...prev, [formType]: false }));
        }
    };

    return (
        <div className="report-page">
            {/* Disaster Form */}
            <div className="disaster-form">
                <h2>Report Disaster</h2>
                <form onSubmit={(e) => handleSubmit(e, "disaster")}>
                    <label>Disaster Type:</label>
                    <input
                        type="text"
                        name="type"
                        value={formData.disaster.type}
                        placeholder="Enter Disaster Type"
                        required
                        onChange={(e) => handleInputChange(e, "disaster")}
                    />

                    <label>City:</label>
                    <input
                        type="text"
                        name="city"
                        value={formData.disaster.city}
                        placeholder="Enter City"
                        required
                        onChange={(e) => handleInputChange(e, "disaster")}
                    />

                    <label>State:</label>
                    <input
                        type="text"
                        name="state"
                        value={formData.disaster.state}
                        placeholder="Enter State"
                        required
                        onChange={(e) => handleInputChange(e, "disaster")}
                    />

                    <div className="slider-container">
                        <label>Severity:</label>
                        <input
                            type="range"
                            name="severity"
                            min="1"
                            max="5"
                            step="1"
                            value={formData.disaster.severity}
                            onChange={(e) => handleInputChange(e, "disaster")}
                        />
                        <div className="slider-labels">
                            <span>1</span>
                            <span>2</span>
                            <span>3</span>
                            <span>4</span>
                            <span>5</span>
                        </div>
                    </div>

                    <button
                        className="submit"
                        type="submit"
                        disabled={loading.disaster}
                    >
                        {loading.disaster ? 'Submitting...' : 'Submit'}
                    </button>

                    {success.disaster && (
                        <div className="success-message">Disaster report submitted successfully!</div>
                    )}
                    {error && <div className="error-message">{error}</div>} {/* Error message */}
                </form>
            </div>

            {/* Shelter Form */}
            <div className="shelter-form">
                <h2>Report Shelter</h2>
                <form onSubmit={(e) => handleSubmit(e, "shelter")}>
                    <label>Shelter Type:</label>
                    <input
                        type="text"
                        name="type"
                        value={formData.shelter.type}
                        placeholder="Enter Shelter Type"
                        required
                        onChange={(e) => handleInputChange(e, "shelter")}
                    />

                    <label>Address (Landmark):</label>
                    <input
                        type="text"
                        name="address"
                        value={formData.shelter.address}
                        placeholder="Enter Address"
                        required
                        onChange={(e) => handleInputChange(e, "shelter")}
                    />

                    <label>City:</label>
                    <input
                        type="text"
                        name="city"
                        value={formData.shelter.city}
                        placeholder="Enter City"
                        required
                        onChange={(e) => handleInputChange(e, "shelter")}
                    />

                    <label>State:</label>
                    <input
                        type="text"
                        name="state"
                        value={formData.shelter.state}
                        placeholder="Enter State"
                        required
                        onChange={(e) => handleInputChange(e, "shelter")}
                    />

                    <button
                        className="submit"
                        type="submit"
                        disabled={loading.shelter}
                    >
                        {loading.shelter ? 'Submitting...' : 'Submit'}
                    </button>

                    {success.shelter && (
                        <div className="success-message">Shelter report submitted successfully!</div>
                    )}
                </form>
            </div>

            {/* Resource Form */}
            <div className="resource-form">
                <h2>Report Resources</h2>
                <form onSubmit={(e) => handleSubmit(e, "resource")}>
                    <label>Resource Type:</label>
                    <input
                        type="text"
                        name="type"
                        value={formData.resource.type}
                        placeholder="Enter Resource Type"
                        required
                        onChange={(e) => handleInputChange(e, "resource")}
                    />

                    <label>Address:</label>
                    <input
                        type="text"
                        name="address"
                        value={formData.resource.address}
                        placeholder="Enter Address"
                        required
                        onChange={(e) => handleInputChange(e, "resource")}
                    />

                    <label>City:</label>
                    <input
                        type="text"
                        name="city"
                        value={formData.resource.city}
                        placeholder="Enter City"
                        required
                        onChange={(e) => handleInputChange(e, "resource")}
                    />

                    <label>State:</label>
                    <input
                        type="text"
                        name="state"
                        value={formData.resource.state}
                        placeholder="Enter State"
                        required
                        onChange={(e) => handleInputChange(e, "resource")}
                    />

                    <button
                        className="submit"
                        type="submit"
                        disabled={loading.resource}
                    >
                        {loading.resource ? 'Submitting...' : 'Submit'}
                    </button>

                    {success.resource && (
                        <div className="success-message">Resource report submitted successfully!</div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default ReportPage;
