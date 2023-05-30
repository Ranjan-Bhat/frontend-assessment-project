import { useMemo } from "react";
import "./FrameComponent3.css";
const FrameComponent3 = ({ propLeft, onSecondaryTabContainer1Click }) => {
  const frameDivStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className="group-container">
      <div className="iconlylight-outlinesearch-parent">
        <img
          className="iconlylight-outlinesearch"
          alt=""
          src="/iconlylightoutlinesearch.svg"
        />
        <div className="group-child" />
        <div className="search-for-projects">Search for projects</div>
      </div>
      <div className="secondary-tab-parent" style={frameDivStyle}>
        <div className="secondary-tab">
          <div className="weekly-planning">Project Planning</div>
        </div>
        <div className="secondary-tab1" onClick={onSecondaryTabContainer1Click}>
          <div className="weekly-planning1">Weekly Planning</div>
        </div>
        <div className="secondary-tab">
          <div className="weekly-planning">Planning Insights</div>
        </div>
      </div>
      <img className="frame-item" alt="" src="/vector-2.svg" />
    </div>
  );
};

export default FrameComponent3;
