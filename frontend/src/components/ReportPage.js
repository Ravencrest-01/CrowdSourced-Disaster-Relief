import React , { useState }from "react";
import "../styles/reportPage.css";

const ReportPage = () => {
    const [checkedForms, setCheckedForms] = useState({
        disaster: false,
        shelters: false,
        resources: false,
    });

    const [formData, setFormData] = useState({
        disaster:{},
        shelters:{},
        resources:{},
    });

    const handleCheckboxChange = (e) => {
        const {name, checked} = e.target;
        setCheckedForms({ ...checkedForms, [name]: checked});
    };

    const handleInputChange = (formType, field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [formType]: {
                ...prevData[formType],
                [field]: value,
            },
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting Data",formData);
        fetch("/api/report", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })

        .then((response) => {
            if(response.ok){
                console.log("Data submitted successfully");
            }
            else {
                console.error("Failed to submit data");
            }
        })
        .catch((error) => console.error("Error:", error));
    };

    return (
        <div className="report-page">
            <div className="sidebar">
                <label>
                    <input
                        type="checkbox"
                        name="disaster"
                        checked={checkedForms.disaster}
                        onChange={handleCheckboxChange}
                    />
                    Disaster
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="shelters"
                        checked={checkedForms.shelters}
                        onChange={handleCheckboxChange}
                    />
                    Shelters
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="resources"
                        checked={checkedForms.resources}
                        onChange={handleCheckboxChange}
                    />
                    Resources
                </label>
            </div>
            <form className="form-container" onSubmit={handleSubmit}>
                {checkedForms.disaster && (
                    <div className="form-section">
                        <h3>Disaster Form</h3>
                        <label>
                            Type of Disaster:
                            <input
                                type="text"
                                onChange={(e) =>
                                    handleInputChange("disaster", "type", e.target.value)
                                }
                            />
                        </label>
                        <label>
                            Description (Severity):
                            <input
                                type="text"
                                onChange={(e) =>
                                    handleInputChange("disaster", "severity", e.target.value)
                                }
                            />
                        </label>
                        <label>
                            Location (Locality and City):
                            <input
                                type="text"
                                onChange={(e) =>
                                    handleInputChange("disaster", "location", e.target.value)
                                }
                            />
                        </label>
                        <label>
                            State:
                            <input
                                type="text"
                                onChange={(e) =>
                                    handleInputChange("disaster", "state", e.target.value)
                                }
                            />
                        </label>
                        <label>
                            Image (Optional):
                            <input
                                type="file"
                                onChange={(e) =>
                                    handleInputChange("disaster", "image", e.target.files[0])
                                }
                            />
                        </label>
                    </div>
                )}
                {checkedForms.shelters && (
                    <div className="form-section">
                        <h3>Shelters Form</h3>
                        <label>
                            Address of Location:
                            <input
                                type="text"
                                onChange={(e) =>
                                    handleInputChange("shelters", "address", e.target.value)
                                }
                            />
                        </label>
                        <label>
                            Type of Shelter (Tent, Building, Warehouse):
                            <input
                                type="text"
                                onChange={(e) =>
                                    handleInputChange("shelters", "type", e.target.value)
                                }
                            />
                        </label>
                        <label>
                            Location (Locality and City):
                            <input
                                type="text"
                                onChange={(e) =>
                                    handleInputChange("shelters", "location", e.target.value)
                                }
                            />
                        </label>
                        <label>
                            State:
                            <input
                                type="text"
                                onChange={(e) =>
                                    handleInputChange("shelters", "state", e.target.value)
                                }
                            />
                        </label>
                        <label>
                            Image (Optional):
                            <input
                                type="file"
                                onChange={(e) =>
                                    handleInputChange("shelters", "image", e.target.files[0])
                                }
                            />
                        </label>
                    </div>
                )}
                {checkedForms.resources && (
                    <div className="form-section">
                        <h3>Resources Form</h3>
                        <label>
                            Address of Location:
                            <input
                                type="text"
                                onChange={(e) =>
                                    handleInputChange("resources", "address", e.target.value)
                                }
                            />
                        </label>
                        <label>
                            Type of Resource (Food, Water, Blanket, Chargers):
                            <input
                                type="text"
                                onChange={(e) =>
                                    handleInputChange("resources", "type", e.target.value)
                                }
                            />
                        </label>
                        <label>
                            Location (Locality and City):
                            <input
                                type="text"
                                onChange={(e) =>
                                    handleInputChange("resources", "location", e.target.value)
                                }
                            />
                        </label>
                        <label>
                            State:
                            <input
                                type="text"
                                onChange={(e) =>
                                    handleInputChange("resources", "state", e.target.value)
                                }
                            />
                        </label>
                        <label>
                            Image (Optional):
                            <input
                                type="file"
                                onChange={(e) =>
                                    handleInputChange("resources", "image", e.target.files[0])
                                }
                            />
                        </label>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>          
        </div>
    );

};

export default ReportPage;