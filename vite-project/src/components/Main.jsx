import { useState } from "react";
import { assets } from "../../src/assets/assets"; 
import ActivityTracker from './ActivityTracker'; 
import RecentActivities from './RecentActivities'; 
import "./Main.css";

const Main = () => {
    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");
    const [showResults, setShowResults] = useState(false);

    const handleCardClick = (promptText) => {
        setRecentPrompt(promptText);
        setInput(promptText);
        setShowResults(true);
        setLoading(true);
       
        setTimeout(() => {
            setLoading(false);
            if (promptText.toLowerCase() === "track my activity") {
                setResultData(<ActivityTracker />); 
            } else if (promptText.toLowerCase() === "recent activities") {
                setResultData(<RecentActivities />); 
            } else {
                setResultData(`Response for: "${promptText}"`); 
            }
        }, 2000);
    };

    const onSent = () => {
        if (input.trim() !== "") {
            setRecentPrompt(input);
            setShowResults(true);
            setLoading(true);

            // Check the input for specific keywords
            setTimeout(() => {
                setLoading(false);
                if (input.toLowerCase().includes("activity")) {
                    setResultData(<ActivityTracker />); 
                } else if (input.toLowerCase().includes("recent activities")) {
                    setResultData(<RecentActivities />); 
                } else {
                    setResultData(`Response for: "${input}"`); 
                }
            }, 2000);

            
            setInput("");
        }
    };

    return (
        <div className="main">
            <div className="nav">
                <p>Chat Wizard</p>
                <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                <button className="browse">Start Browsing</button>
            </a>
            </div>
            <div className="main-container">
                {!showResults ? (
                    <>
                        <div className="greet">
                            <p>
                                <span>🧙‍♂️ Hello, Coding Wizard! </span>
                            </p>
                            <p>Ready to unleash your ideas?</p>
                        </div>
                        <div className="cards">
                            <div
                                className="card"
                                onClick={() => handleCardClick("Track My activity")}
                            >
                                <p>Track My Activity</p>
                                <img src={assets.compass_icon} alt="Compass" />
                            </div>
                            <div
                                className="card"
                                onClick={() => handleCardClick("Recent Activities")}
                            >
                                <p>Recent Activities</p>
                                <img src={assets.message_icon} alt="Message" />
                            </div>
                            <div
                                className="card"
                                onClick={() =>
                                    handleCardClick("How to create a responsive navbar?")
                                }
                            >
                                <p>How to create a responsive navbar?</p>
                                <img src={assets.bulb_icon} alt="Bulb" />
                            </div>
                            <div
                                className="card"
                                onClick={() =>
                                    handleCardClick("Skills required for a front-end developer.")
                                }
                            >
                                <p>Skills for front-end developer</p>
                                <img src={assets.code_icon} alt="Code" />
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="result">
                        <div className="result-title">
                            <img src={assets.user} alt="User" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            {loading ? (
                                <div className="loader">
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                            ) : (
                                <div>{resultData}</div> 
                            )}
                        </div>
                    </div>
                )}
                <div className="main-bottom">
                    <div className="search-box">
                        <input
                            onChange={(e) => setInput(e.target.value)}
                            value={input}
                            type="text"
                            placeholder="Enter your message here"
                        />
                        <div>
                            <img src={assets.gallery_icon} alt="Gallery" />
                            <img src={assets.mic_icon} alt="Mic" />
                            <img src={assets.send_icon} alt="Send" onClick={onSent} />
                        </div>
                    </div>
                    <div className="bottom-info">
                        <p>Information displayed may not be accurate. Double-check results.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
