export const ADD_STAGE = "ADD_STAGE";
export const REMOVE_STAGE = "REMOVE_STAGE";
export const TOGGLE_STAGE_COMPLETED = "TOGGLE_STAGE_COMPLETED";

export const addStage = (label) => {
  return {
    type: "ADD_STAGE",
    payload: label,
  };
};

export const removeStage = (id) => {
  return {
    type: "REMOVE_STAGE",
    payload: id,
  };
};

export const toggleStageCompleted = (id) => {
  return {
    type: "TOGGLE_STAGE_COMPLETED",
    payload: id,
  };
};
