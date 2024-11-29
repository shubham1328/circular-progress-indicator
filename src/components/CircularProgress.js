import React from "react";
import { useSelector } from "react-redux";

const CircularProgress = () => {
  const stages = useSelector((state) => state.stages);

  const getStrokeDashOffset = (index, totalStages) => {
    const circumference = 283;
    const segmentAngle = 360 / totalStages;
    const offsetAngle = segmentAngle * index;
    return (offsetAngle / 360) * circumference;
  };

  const completedStages = stages.filter((stage) => stage.completed).length;
  const totalStages = stages.length;
  const percentage =
    totalStages === 0 ? 0 : Math.round((completedStages / totalStages) * 100);

  return (
    <div className="flex justify-center items-center w-full h-auto bg-gray-100 px-6 py-8">
      <div className="progress-circle relative w-40 h-40 sm:w-48 sm:h-48">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className="absolute inset-0 w-full h-full"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="lightgray"
            strokeWidth="8"
            fill="none"
          />

          {stages.map((stage, index) => (
            <circle
              key={stage.id}
              cx="50"
              cy="50"
              r="45"
              stroke={stage.completed ? "green" : "orange"}
              strokeWidth="8"
              fill="none"
              strokeDasharray="283"
              strokeDashoffset={getStrokeDashOffset(index, stages.length)}
              transform="rotate(-90 50 50)"
              className="transition-all duration-500"
            />
          ))}
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {`${percentage}%`}
          <span className="text-lg font-semibold text-gray-800">
            {stages.filter((s) => s.completed).length}/{stages.length}
          </span>
          <p className="text-xs text-gray-600">Stages Completed</p>
        </div>
      </div>
    </div>
  );
};

export default CircularProgress;
