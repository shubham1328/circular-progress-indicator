const initialState = {
  stages: [],
  nextId: 1,
};

const stageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_STAGE":
      return {
        ...state,
        stages: [
          ...state.stages,
          { id: state.nextId, label: action.payload, completed: false },
        ],
        nextId: state.nextId + 1,
      };

    case "REMOVE_STAGE":
      return {
        ...state,
        stages: state.stages.filter((stage) => stage.id !== action.payload),
      };

    case "TOGGLE_STAGE_COMPLETED":
      const clickedStage = state.stages.find(
        (stage) => stage.id === action.payload
      );

      if (!clickedStage) return state;

      return {
        ...state,
        stages: state.stages.map((stage) => {
          if (clickedStage.completed === false && stage.id <= clickedStage.id) {
            return { ...stage, completed: true };
          }
          if (clickedStage.completed === true && stage.id >= clickedStage.id) {
            return { ...stage, completed: false };
          }

          return stage;
        }),
      };

    default:
      return state;
  }
};

export default stageReducer;
