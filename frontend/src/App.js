import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import ReportPage from "./components/ReportPage";
import ResourcePage from "./components/ResourcePage";
import VolunteerPage from "./components/VolunteerPage";
import CommunityBoards from "./components/CommunityBoardsPage";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";


const stripePromise = loadStripe("pk_test_51RCVAgGLjppvE8XyRrhfy32fEhDBJN2XVdtCFISwjAjHyTyYefcjh86GTSxmyXSCxqGEbHTQSGHAVV8FHh0B3QbP00jXVgkU9R");

const App = () => {
    return (
        <Router>
            <div className="app-container">
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/report" element={<ReportPage />} />
                    <Route path="/resources" element={<ResourcePage />} />
                    <Route
                        path="/volunteer"
                        element={
                            <Elements stripe={stripePromise}>
                                <VolunteerPage />
                            </Elements>
                        }
                    />
                    <Route path="/community-boards" element={<CommunityBoards />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
