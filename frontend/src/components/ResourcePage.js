// frontend/src/components/ResourcePage.js
import React, { useState, useEffect } from 'react';
// import Navbar from './Navbar';
import { getShelterReports, getResourceReports } from '../services/api';
import '../styles/resourcePage.css';

function ResourcePage() {
  const [shelters, setShelters] = useState([]);
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data when component mounts
    const fetchData = async () => {
      try {
        const shelterData = await getShelterReports();
        const resourceData = await getResourceReports();
        
        setShelters(shelterData);
        setResources(resourceData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="resource-page">
      {/* <Navbar /> */}
      <div className="resource-container">
        <h1 className="page-title">Available Resources</h1>
        
        {loading ? (
          <div className="loading">Loading resources data...</div>
        ) : (
          <div className="resource-grid">
            {/* Shelter Column */}
            <div className="resource-column shelter-column">
              <h2 className="column-title">Shelters</h2>
              {shelters.length === 0 ? (
                <p className="no-data-message">No shelters reported yet</p>
              ) : (
                shelters.map((shelter) => (
                  <div key={shelter._id} className="resource-card shelter-card">
                    <h3>{shelter.shelterType || 'Shelter'}</h3>
                    <div className="resource-details">
                      <p><strong>Address:</strong> {shelter.address}</p>
                      <p><strong>City:</strong> {shelter.city}</p>
                      <p><strong>State:</strong> {shelter.state}</p>
                      {/* You can add more fields here once you've defined your data schema */}
                    </div>
                    <div className="resource-location">
                      <span>Reported on: {new Date(shelter.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
            
            {/* Resources Column */}
            <div className="resource-column resources-column">
              <h2 className="column-title">Available Resources</h2>
              {resources.length === 0 ? (
                <p className="no-data-message">No resources reported yet</p>
              ) : (
                resources.map((resource) => (
                  <div key={resource._id} className="resource-card resource-item">
                    <h3>{resource.resourceType || 'Resource'}</h3>
                    <div className="resource-details">
                      <p><strong>Type:</strong> {resource.resourceType}</p>
                      <p><strong>Address:</strong> {resource.address}</p>
                      <p><strong>City:</strong> {resource.city}</p>
                      <p><strong>State:</strong> {resource.state}</p>
                      {/* You can add more fields here once you've defined your data schema */}
                    </div>
                    <div className="resource-location">
                      <span>Reported on: {new Date(resource.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ResourcePage;