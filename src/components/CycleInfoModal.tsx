// CycleInfoModal.tsx
import React from "react";
import "../components/CycleInfoModal.tsx";

interface CycleInfoModalProps {
  phase: string;
  ovulationInDays: number;
  chanceOfPregnancy: string;
  symptoms: string[];
  closeModal: () => void;
}

const CycleInfoModal: React.FC<CycleInfoModalProps> = ({
  phase,
  ovulationInDays,
  symptoms,
  closeModal,
}) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Cycle Info</h3>
        <p><strong>Phase:</strong> {phase}</p>
        <p><strong>Ovulation in:</strong> {ovulationInDays} Days</p>
        
        <h4>Symptoms:</h4>
        <ul>
          {symptoms.map((symptom, index) => (
            <li key={index}>{symptom}</li>
          ))}
        </ul>
        <button onClick={closeModal} className="close-button">Close</button>
      </div>
    </div>
  );
};

export default CycleInfoModal;
