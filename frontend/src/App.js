import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import ReportPage from "./components/ReportPage";
import ResourcePage from "./components/ResourcePage";
import VolunteerPage from "./components/VolunteerPage";
import CommunityBoards from "./components/CommunityBoardsPage";

const App = () => {
    return (
        <Router>
            <div className="app-container">
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/report" element={<ReportPage />} />
                    <Route path="/resources" element={<ResourcePage />} />
                    <Route path="/volunteer" element={<VolunteerPage />} />
                    <Route path="/community-boards" element={<CommunityBoards />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;