// src/App.tsx
import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import TrackerInfo from "./components/TrackerInfo";
import Calendar from "./components/Calendar";
import DetailsModal from "./components/DetailsModal";
import ChatBot from "./components/Chatbot"; // Import the ChatBot component
import "./App.css";

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lastPeriodStart, setLastPeriodStart] = useState<Date | null>(null);
  const [cycleLength, setCycleLength] = useState<number>(28);
  const [periodDuration, setPeriodDuration] = useState<number>(5);
  const [isChatBotOpen, setIsChatBotOpen] = useState<boolean>(false); // State for chatbot visibility

  useEffect(() => {
    const storedLastPeriodStart = localStorage.getItem("lastPeriodStart");
    const storedCycleLength = localStorage.getItem("cycleLength");
    const storedPeriodDuration = localStorage.getItem("periodDuration");

    if (storedLastPeriodStart) {
      setLastPeriodStart(new Date(storedLastPeriodStart));
    }
    if (storedCycleLength) {
      setCycleLength(Number(storedCycleLength));
    }
    if (storedPeriodDuration) {
      setPeriodDuration(Number(storedPeriodDuration));
    }
  }, []);


  const closeModal = () => setIsModalOpen(false);

  const toggleChatBot = () => {
    setIsChatBotOpen((prevState) => !prevState); // Toggle chatbot visibility
  };

  return (
    <div className="app">
      <NavBar />
      <main className="content">
        {lastPeriodStart && (
          <TrackerInfo
            lastPeriodStart={lastPeriodStart}
            cycleLength={cycleLength}
            periodDuration={periodDuration}
          />
        )}
        <Calendar
          lastPeriodStart={lastPeriodStart}
          cycleLength={cycleLength}
          periodDuration={periodDuration}
          setLastPeriodStart={setLastPeriodStart}
          setCycleLength={setCycleLength}
          setPeriodDuration={setPeriodDuration}
        />
      </main>

      {/* Only show the modal if it's open */}
      {isModalOpen && (
        <DetailsModal isOpen={isModalOpen} onClose={closeModal} />
      )}

      {/* Chatbot toggle button */}
      <button className="chatbot-toggle-btn" onClick={toggleChatBot}>
        {isChatBotOpen ? "Close Chatbot" : "Open Chatbot"}
      </button>

      {/* Render the chatbot only if isChatBotOpen is true */}
      {isChatBotOpen && <ChatBot />}
    </div>
  );
};

export default App;
