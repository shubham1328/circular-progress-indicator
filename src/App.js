import React from "react";
import CircularProgress from "./components/CircularProgress";
import StageButtons from "./components/StageButtons";
import "./styles/tailwind.css";

const App = () => {
  return (
    <div className="max-w-xl mx-auto p-5">
      <h1 className="text-2xl font-bold text-center mb-4">
        Circular Progress Indicator
      </h1>
      <CircularProgress />
        <StageButtons />
    </div>
  );
};

export default App;
