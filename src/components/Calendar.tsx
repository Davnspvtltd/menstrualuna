import React, { useState, useEffect } from "react";
import Popup from "./Popup"; // Import Popup component
import "./Calendar.css";

interface CalendarProps {
  lastPeriodStart: Date | null;
  cycleLength: number;
  periodDuration: number;
  setLastPeriodStart: React.Dispatch<React.SetStateAction<Date | null>>;
  setCycleLength: React.Dispatch<React.SetStateAction<number>>;
  setPeriodDuration: React.Dispatch<React.SetStateAction<number>>;
}

const Calendar: React.FC<CalendarProps> = ({
  lastPeriodStart,
  cycleLength,
  periodDuration,
  setLastPeriodStart,
  setCycleLength,
  setPeriodDuration,
}) => {
  const [selectedDates, setSelectedDates] = useState<number[]>([]); // dates for the period
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth()); // Track current month
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear()); // Track current year

  const today = new Date(); // Current date for comparison

  useEffect(() => {
    const calculatePeriodDates = () => {
      if (lastPeriodStart) {
        const periodDates: number[] = [];

        // Calculate upcoming period dates
        let nextPeriodStart = new Date(lastPeriodStart);
        nextPeriodStart.setDate(lastPeriodStart.getDate() + cycleLength);

        for (let i = 0; i < periodDuration; i++) {
          const periodDate = new Date(nextPeriodStart);
          periodDate.setDate(nextPeriodStart.getDate() + i);
          // Check if the period date is in the current month
          if (periodDate.getMonth() === currentMonth && periodDate.getFullYear() === currentYear) {
            periodDates.push(periodDate.getDate());
          }
        }

        // Calculate past period dates
        let prevPeriodStart = new Date(lastPeriodStart);
        for (let i = 0; i < periodDuration; i++) {
          const prevDate = new Date(prevPeriodStart);
          prevDate.setDate(prevPeriodStart.getDate() - i);
          // Check if the past period date is in the current month
          if (prevDate.getMonth() === currentMonth && prevDate.getFullYear() === currentYear) {
            periodDates.push(prevDate.getDate());
          }
        }

        setSelectedDates(periodDates);
      }
    };

    calculatePeriodDates();
  }, [lastPeriodStart, cycleLength, periodDuration, currentMonth, currentYear]);

  const handlePrevMonth = () => {
    setCurrentMonth((prevMonth) => {
      if (prevMonth === 0) {
        setCurrentYear(currentYear - 1); // Decrease year if it's January
        return 11; // Go to December
      }
      return prevMonth - 1;
    });
  };

  const handleNextMonth = () => {
    setCurrentMonth((prevMonth) => {
      if (prevMonth === 11) {
        setCurrentYear(currentYear + 1); // Increase year if it's December
        return 0; // Go to January
      }
      return prevMonth + 1;
    });
  };

  const calendarDays = [];
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const isSelected = selectedDates.includes(day);
    const isCurrentDate =
      today.getFullYear() === currentYear && today.getMonth() === currentMonth && today.getDate() === day;

    calendarDays.push(
      <div
        key={`day-${day}`}
        className={`calendar-day ${isCurrentDate ? "current-date" : isSelected ? "selected" : ""}`}
      >
        {day}
      </div>
    );
  }

  const handleSaveChanges = () => {
    setIsPopupOpen(false);
  };

  return (
    <section className="calendar-section">
      <div className="calendar-header">
        <h3>
          {new Date(currentYear, currentMonth).toLocaleString("default", {
            month: "long",
          })}{" "}
          {currentYear}
        </h3>
        <div className="calendar-controls">
          <button onClick={handlePrevMonth}>{"<"}</button>
          <button onClick={handleNextMonth}>{">"}</button>
        </div>
      </div>
      <div className="calendar">{calendarDays}</div>

      <button className="mark-btn" onClick={() => setIsPopupOpen(true)}>
        EDIT
      </button>

      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
        <h3>Edit Period Details</h3>
        <label>
          Last Period Start Date:
          <input
            type="date"
            value={lastPeriodStart ? lastPeriodStart.toISOString().split("T")[0] : ""}
            onChange={(e) => setLastPeriodStart(new Date(e.target.value))}
          />
        </label>
        <label>
          Cycle Length (days):
          <input
            type="number"
            value={cycleLength}
            onChange={(e) => setCycleLength(parseInt(e.target.value))}
          />
        </label>
        <label>
          Period Duration (days):
          <input
            type="number"
            value={periodDuration}
            onChange={(e) => setPeriodDuration(parseInt(e.target.value))}
          />
        </label>
        <button onClick={handleSaveChanges}>Save</button>
      </Popup>
    </section>
  );
};

export default Calendar;
