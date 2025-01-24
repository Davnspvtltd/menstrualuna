// calculationsLogics.ts

export const calculateCycleInfo = (daysUntilNextPeriod: number) => {
    if (daysUntilNextPeriod <= 5) {
      return {
        phase: "Follicular phase",
        ovulationInDays: 6,
        chanceOfPregnancy: "Low",
        symptoms: [
          "Strength and vigor appear",
          "Endurance increases",
          "New ideas and plans appear",
          "Libido increases",
        ],
      };
    } else if (daysUntilNextPeriod > 5 && daysUntilNextPeriod <= 10) {
      return {
        phase: "Luteal phase",
        ovulationInDays: 0,
        chanceOfPregnancy: "Moderate",
        symptoms: [
          "Mood swings",
          "Tiredness",
          "Cravings",
          "Headaches",
        ],
      };
    } else {
      return {
        phase: "Follicular phase",
        ovulationInDays: 6,
        chanceOfPregnancy: "Low",
        symptoms: [
          "Energy is improving",
          "More social",
          "Increased confidence",
          "Less bloating",
        ],
      };
    }
  };
  
  export const calculateDaysUntilNextPeriod = (
    lastPeriodStart: Date,
    cycleLength: number
  ): number => {
    const today = new Date();
    let nextPeriodStart = new Date(lastPeriodStart);
    nextPeriodStart.setDate(lastPeriodStart.getDate() + cycleLength);
  
    const timeDiff = nextPeriodStart.getTime() - today.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  
    if (daysDiff < 0) {
      nextPeriodStart.setDate(nextPeriodStart.getDate() + cycleLength);
      return Math.ceil((nextPeriodStart.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    } else {
      return daysDiff;
    }
  };
  