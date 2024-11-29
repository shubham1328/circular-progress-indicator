import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStage, removeStage, toggleStageCompleted } from "../redux/actions";
import { FaPlus, FaCheck, FaTrashAlt } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

const StageButtons = () => {
  const dispatch = useDispatch();
  const stages = useSelector((state) => state.stages);

  const handleAddStage = () => {
    const newStageLabel = `Stage ${stages.length + uuidv4().slice(7, 14)}`;
    dispatch(addStage(newStageLabel));
  };

  const handleRemoveStage = (id) => {
    dispatch(removeStage(id));
  };

  const handleToggleCompleted = (id) => {
    dispatch(toggleStageCompleted(id));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <div className="relative">
        <button
          onClick={handleAddStage}
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all text-sm sm:text-base relative mb-2"
        >
          <div className="flex">
            <span className="pr-1">Add Stage</span>
            <FaPlus className="text-xl sm:text-2xl" />
          </div>
        </button>
      </div>

      <div className="space-y-4">
        {stages.map((stage) => (
          <div
            key={stage.id}
            className="flex flex-col sm:flex-row justify-between items-center bg-white shadow-md rounded-lg p-3 sm:p-4 hover:bg-gray-50 transition-all"
          >
            <span
              className={`text-sm sm:text-lg font-semibold ${
                stage.completed ? "text-green-600" : "text-gray-800"
              }`}
            >
              {stage.label}
            </span>

            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0 mt-2 sm:mt-0">
              <button
                onClick={() => handleToggleCompleted(stage.id)}
                className={`py-1 px-3 sm:py-2 sm:px-4 rounded-full text-white transition-colors ${
                  stage.completed
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-yellow-500 hover:bg-yellow-600"
                } text-xs sm:text-sm`}
              >
                <FaCheck className="inline-block mr-2" />
                {stage.completed ? "Completed" : "Mark as Completed"}
              </button>
              <button
                onClick={() => handleRemoveStage(stage.id)}
                className="py-1 px-3 sm:py-2 sm:px-4 rounded-full bg-red-500 hover:bg-red-600 text-white transition-all text-xs sm:text-sm"
              >
                <FaTrashAlt className="inline-block mr-2" />
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StageButtons;
