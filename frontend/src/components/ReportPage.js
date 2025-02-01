import React, { useState, useEffect } from 'react';
import "../styles/reportPage.css"; 

const ReportPage = () => {
    return(
        <div className="report-page">
            <div className='disaster-form'>
                <h2>Report Disaster</h2>
                <form>
                    <label>Disaster Type:</label>
                    <input type="text" placeholder="Enter Disaster Type" required />
                    <label>City:</label>
                    <input type="text" placeholder="Enter City" required />
                    <label>State:</label>
                    <input type='text' placeholder='Enter State' required />
                    <div className='slider-container'>
                        <label>Severity:</label>
                        <input 
                            type='range' 
                            min='1' 
                            max='5' 
                            step='1'
                            // onChange={(e) => handleInputChange("disaster", "severity", e.target.value)} required  
                        />
                        <div className='slider-labels'>
                            <span>1</span>
                            <span>2</span>
                            <span>3</span>
                            <span>4</span>
                            <span>5</span>
                        </div>
                    </div>
                    <button className='submit'>Submit</button>
                </form>
            </div>

            <div className='shelter-form'>
                <h2>Report Shelter</h2>
                <form>
                    <label>Shelter Type:</label>
                    <input type='text' placeholder='Enter Shelter type' required />
                    <label>Address(landmark):</label>
                    <input type='text' placeholder='Enter Address' required/>
                    <label>City:</label>
                    <input type='text' placeholder='Enter City' required/>
                    <label>State:</label>
                    <input type='text' placeholder='Enter State' required/>
                    <label>Images</label>
                    <input type='file' placeholder='Provide Images'/>
                    <button className='submit'>Submit</button>
                </form>
            </div>

            <div className='resource-form'>
                <h2>Report Resources</h2>
                <form>
                    <label>Resource Type:</label>
                    <input type='text' placeholder='Enter Resource Type' required />
                    <label>Address</label>
                </form>
            </div>
        </div>
    );

};

export default ReportPage;