// src/components/TrackerInfo.tsx
import React, { useState, useEffect } from "react";
import CycleInfoModal from "../components/CycleInfoModal"; // Import the modal component
import { calculateCycleInfo, calculateDaysUntilNextPeriod } from "../data/CalculationLogics"; // Import the logic functions
import "./TrackerInfo.css";


interface TrackerInfoProps {
  lastPeriodStart: Date;
  cycleLength: number;
  periodDuration: number;
}

const TrackerInfo: React.FC<TrackerInfoProps> = ({
  lastPeriodStart,
  cycleLength,
  
}) => {
  const [daysUntilNextPeriod, setDaysUntilNextPeriod] = useState<number | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  // Calculate the number of days until the next period
  useEffect(() => {
    const days = calculateDaysUntilNextPeriod(lastPeriodStart, cycleLength);
    setDaysUntilNextPeriod(days);
  }, [lastPeriodStart, cycleLength]);

  const handleMarkButtonClick = () => {
    if (daysUntilNextPeriod !== null) {
      setShowModal(true); // Show modal when button is clicked
    }
  };

  const closeModal = () => {
    setShowModal(false); // Close the modal
  };

  // Get the cycle info based on the number of days until the next period
  const cycleInfo = daysUntilNextPeriod !== null ? calculateCycleInfo(daysUntilNextPeriod) : null;

  return (
    <section className="tracker-info">
      <h2 className="period-info">Period in</h2>
      <h1 className="period-days">
        {daysUntilNextPeriod !== null ? `${daysUntilNextPeriod} Days` : "N/A"}
      </h1>
      <p className="chance">
        {daysUntilNextPeriod !== null && daysUntilNextPeriod <= 5
          ? "High - chance of getting pregnant"
          : "Low - chance of getting pregnant"}
      </p>
      <button className="mark-button" onClick={handleMarkButtonClick}>
        View
      </button>

      {/* Show the modal with cycle info when the "MARK" button is clicked */}
      {showModal && cycleInfo && (
        <CycleInfoModal
          phase={cycleInfo.phase}
          ovulationInDays={cycleInfo.ovulationInDays}
          chanceOfPregnancy={cycleInfo.chanceOfPregnancy}
          symptoms={cycleInfo.symptoms}
          closeModal={closeModal}
        />
      )}

    </section>
  );
};

export default TrackerInfo;
