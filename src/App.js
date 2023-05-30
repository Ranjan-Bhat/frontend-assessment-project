import { Routes, Route } from "react-router-dom";
import PlanningWeeklyPlanningM from "./pages/PlanningWeeklyPlanningM";
import PlanningWeeklyPlanning from "./pages/PlanningWeeklyPlanning";


function App() {
  // const pathname = location.pathname;

  return (
    <Routes>
      <Route
        path="/"
        element={<PlanningWeeklyPlanning />}
      />

      <Route path="/weekly-planning" element={<PlanningWeeklyPlanningM />} />
      
    </Routes>
  );
}
export default App;
