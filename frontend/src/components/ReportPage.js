import React , { useState , useEffect }from "react";
import "../styles/reportPage.css";

const ReportPage = () => {
    const [checkedForms, setCheckedForms] = useState(() => {
        const savedCheckedForms = localStorage.getItem("checkedForms");
        return savedCheckedForms ? JSON.parse(savedCheckedForms) : {
            disaster: false,
            shelters: false,
            resources: false,
        };
    });

    const [formData, setFormData] = useState({
            disaster: { type: "", description: "", location: "", state: "", image: null },
            shelters: { address: "", type: "", location: "", state: "", image: null },
            resources: { address: "", type: "", location: "", state: "", image: null },
    });

    useEffect(() => {
        localStorage.setItem("checkedForms", JSON.stringify(checkedForms));
    }, [checkedForms]);

    // useEffect(() => {
    //     localStorage.setItem("formData", JSON.stringify(formData));
    // }, [formData]);

    const handleCheckboxChange = (e) => {
        const {name, checked} = e.target;
        // setCheckedForms({ ...checkedForms, [name]: checked});
        setCheckedForms((prevData) => ({ ...prevData, [name]: checked}));
    };

    const handleInputChange = (formType, field, value) => {
        console.log(`Form: ${formType}, Field: ${field}, Value: ${value}`);
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

    const isAnyFormChecked = Object.values(checkedForms).some((isChecked) => isChecked);

    return (
        <div className="report-page">
            <div className="sidebar">
                <div className="checkbox-wrapper-43">
                    <input
                        id="disaster"
                        type="checkbox"
                        name="disaster"
                        checked={checkedForms.disaster}
                        onChange={handleCheckboxChange}
                        />
                <label htmlFor="disaster" className="check">
                    <svg width="18px" height="18px" viewBox="0 0 18 18">
                        <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                        <polyline points="1 9 7 14 15 4"></polyline>
                    </svg>
                </label>
                <span onClick={() => document.getElementById("disaster").click()}>Disaster</span>
                </div>
                <div className="checkbox-wrapper-43">
                    <input
                        id="shelters"
                        type="checkbox"
                        name="shelters"
                        checked={checkedForms.shelters}
                        onChange={handleCheckboxChange}
                        />
                    <label htmlFor="shelters" className="check">
                        <svg width="18px" height="18px" viewBox="0 0 18 18">
                            <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                            <polyline points="1 9 7 14 15 4"></polyline>
                        </svg>
                    </label>
                    <span onClick={() => document.getElementById("shelters").click()}>Shelters</span>
                </div>
                <div className="checkbox-wrapper-43">
                    <input
                        id="resources"
                        type="checkbox"
                        name="resources"
                        checked={checkedForms.resources}
                        onChange={handleCheckboxChange}
                    />
                    <label htmlFor="resources" className="check">
                        <svg width="18px" height="18px" viewBox="0 0 18 18">
                            <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                            <polyline points="1 9 7 14 15 4"></polyline>
                        </svg>
                    </label>
                    <span onClick={() => document.getElementById("resources").click()}>Resources</span>               
                </div>
            </div>
            {isAnyFormChecked && (
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
            )}         
        </div>
    );

};

export default ReportPage;