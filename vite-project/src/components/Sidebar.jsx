import { useState, useEffect } from "react"; 
import { assets } from "../../src/assets/assets";
import "./Sidebar.css";

const Sidebar = ({ setChatHistory }) => { 
    const [extended, setExtended] = useState(() => {
        const storedState = localStorage.getItem("sidebarExtended");
        return storedState === "true"; 
    });
    const [selectedItem, setSelectedItem] = useState(null); 

    useEffect(() => {
        localStorage.setItem("sidebarExtended", extended);
    }, [extended]);

    const handleItemClick = (item) => {
        setSelectedItem(item); 
        // Call setChatHistory to display the selected chat
        setChatHistory((prevHistory) => {
            // Check if the selected item exists in chat history
            const existingChat = prevHistory.find(chat => chat.prompt === item);
            if (existingChat) {
                return prevHistory; // Return the same history if the chat already exists
            }
            return prevHistory; // Keep current history if chat doesn't exist
        });
    };

    const createNewChat = () => {
        const newChat = { prompt: `Chat ${Math.random().toString(36).substring(2, 7)}` }; 

        setChatHistory((prevHistory) => {
            const updatedHistory = [...prevHistory, newChat];
            localStorage.setItem("chatHistory", JSON.stringify(updatedHistory));
            return updatedHistory;
        });
        
        // Reset selected item for new chat
        setSelectedItem(newChat.prompt);
        // Call the function to switch to the new chat immediately
        handleItemClick(newChat.prompt); 
    };

    const handleNewChatClick = () => {
        createNewChat(); // Call createNewChat function
    };

    return (
        <div className={`sidebar ${extended ? "extended" : ""}`}>
            <div className="top">
                <img
                    src={assets.menu_icon}
                    className="menu"
                    alt="menu-icon"
                    onClick={() => {
                        setExtended((prev) => !prev); 
                    }}
                />
                <div className="new-chat" onClick={handleNewChatClick}> 
                    <img src={assets.plus_icon} alt="New Chat" />
                    {extended ? <p>New Chat</p> : null}
                </div>
                {extended ? (
                    <div className="recent">
                        <p className="recent-title">Recent</p>
                        {/* Dynamic display of recent chats */}
                        {JSON.parse(localStorage.getItem("chatHistory") || "[]").map((item, index) => (
                            <div
                                key={index}
                                onClick={() => handleItemClick(item.prompt)}
                                className={`recent-entry ${selectedItem === item.prompt ? "selected" : ""}`}
                            >
                                <img src={assets.message_icon} alt="" />
                                <p>{item.prompt}</p>
                            </div>
                        ))}
                    </div>
                ) : null}
            </div>
            <div className="bottom">
                <div
                    className={`bottom-item ${selectedItem === 'helpdesk' ? "selected" : ""}`}
                    onClick={() => handleItemClick('helpdesk')}
                >
                    <img src={assets.question_icon} alt="" />
                    {extended ? <p>Help desk</p> : null}
                </div>
                <div
                    className={`bottom-item ${selectedItem === 'history' ? "selected" : ""}`}
                    onClick={() => handleItemClick('history')}
                >
                    <img src={assets.history_icon} alt="" />
                    {extended ? <p>History</p> : null}
                </div>
                <div
                    className={`bottom-item ${selectedItem === 'settings' ? "selected" : ""}`}
                    onClick={() => handleItemClick('settings')}
                >
                    <img src={assets.setting_icon} alt="" />
                    {extended ? <p>Settings</p> : null}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
