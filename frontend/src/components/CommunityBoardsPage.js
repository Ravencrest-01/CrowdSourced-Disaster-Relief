import React, { useState, useEffect } from 'react';
import { fetchDisasters } from '../services/api';  // Use fetchDisasters to get data
import '../styles/communityBoard.css';  // Import the isolated CSS

function CommunityBoardsPage() {
  const [disasters, setDisasters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch disaster data when the component mounts
    const fetchData = async () => {
      try {
        const disasterData = await fetchDisasters();
        setDisasters(disasterData);
      } catch (error) {
        console.error('Error fetching disaster data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="community-board">
        <div className="community-board-container">
            <h1 className="community-board-title">Reported Disasters</h1>

            {loading ? (
            <div className="community-board-loading">Loading disaster data...</div>
            ) : (
            <div className="community-board-grid">
                {/* Disaster Column */}
                <div className="community-board-column community-board-disaster-column">
                <h2 className="community-board-column-title">Disasters</h2>
                {disasters.length === 0 ? (
                    <p className="community-board-no-data-message">No disasters reported yet</p>
                ) : (
                    disasters.map((disaster) => (
                    <div key={disaster._id} className="community-board-disaster-card">
                        <h3>{disaster.type || 'Disaster'}</h3>
                        <div className="community-board-resource-details">
                        <p><strong>City:</strong> {disaster.city}</p>
                        <p><strong>State:</strong> {disaster.state}</p>
                        <p><strong>Severity:</strong> {disaster.severity}</p>
                        </div>
                        <div className="community-board-resource-location">
                        <span>Reported on: {new Date(disaster.createdAt).toLocaleDateString()}</span>
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

export default CommunityBoardsPage;
