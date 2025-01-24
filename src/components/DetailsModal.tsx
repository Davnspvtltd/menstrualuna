// components/DetailsModal.tsx
import React from "react";
import "./DetailsModal.css";

interface DetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DetailsModal: React.FC<DetailsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Day 1/25</h2>
        <p>
          <b>Menstrual phase</b> is the current phase of the cycle.
        </p>
        <p>
          <b>Ovulation</b> in 10 days.
        </p>
        <p>
          <b>Low chance</b> of getting pregnant.
        </p>
        <h3>Frequent Symptoms</h3>
        <ul>
          <li>Lack of energy and strength</li>
          <li>Pain</li>
          <li>Weakness and irritability</li>
          <li>Increased appetite</li>
        </ul>
        <button onClick={onClose} className="modal-button">
          OK
        </button>
      </div>
    </div>
  );
};

export default DetailsModal;
