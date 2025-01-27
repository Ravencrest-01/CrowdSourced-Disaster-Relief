import React, { useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import ReportPage from "./components/ReportPage";
import ResourcePage from "./components/ResourcePage";
import VolunteerPage from "./components/VolunteerPage";
import CommunityBoards from "./components/CommunityBoardsPage";
import Loader from "./components/Loader";

const App = () => {

    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(()=>{
        const images = document.querySelectorAll("img");
        const promises = Array.from(images).map((img) => {
            return new Promise((resolve)=> {
                if(img.complete){
                    resolve();
                } else {
                    img.onload = resolve;
                    img.onerror = resolve;
                }
            });
        });

        Promise.all(promises).then(() => {
            setIsLoading(false);
        });
    }, []);

    if(isLoading){
        return <Loader />;
    }

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