import { useState } from "react";
import AddPeriod from "../components/AddPeriod";
import PortalPopup from "../components/PortalPopup";
import Header from "../components/Header";
import FrameComponent3 from "../components/FrameComponent3";
import Component3 from "../components/Component3";
import "./PlanningWeeklyPlanningM.css";
import "../components/PortalPopup.css";

const PlanningWeeklyPlanningM = () => {
  const [isAddPeriodOpen, setAddPeriodOpen] = useState(false);

  const openAddPeriod = () => {
    setAddPeriodOpen(true);
  };

  const closeAddPeriod = () => {
    setAddPeriodOpen(false);
  };

  return (
    <>
      <div className="planning-weekly-planning-m">
        <Header editSquare="/edit-square.svg" paper="/paper.svg" />
        <FrameComponent3
          
        />
        <div
          className="planning-weekly-planning-m-inner"
          onClick={openAddPeriod}
        >
          <div className="plus-parent">
            <img className="plus-icon" alt="" src="/plus.svg" />
            <div className="add-period">Add Period</div>
          </div>
        </div>
        <b className="april-10-17">April 10-17</b>
        <div className="arrow-right-2-parent">
          <img className="arrow-right-2" alt="" src="/arrow--right-2.svg" />
          <img className="arrow-right-3" alt="" src="/arrow--right-3.svg" />
          <div className="today">Today</div>
        </div>
        <div className="time-parent">
          <div className="time">
            <div className="div">08:00</div>
            <div className="div1">09:00</div>
            <div className="div2">10:00</div>
            <div className="div3">11:00</div>
            <div className="div4">12:00</div>
            <div className="div5">13:00</div>
            <div className="div6">14:00</div>
            <div className="div7">15:00</div>
            <div className="div8">16:00</div>
            <div className="div9">17:00</div>
            <div className="div10">18:00</div>
            <div className="div11">19:00</div>
            <div className="div12">20:00</div>
            <div className="div13">21:00</div>
            <div className="div14">22:00</div>
          </div>
          <img className="lines-icon" alt="" src="/lines.svg" />
          <div className="dates">
            <div className="mon">MON</div>
            <div className="tue">TUE</div>
            <div className="wed">WED</div>
            <div className="thu">THU</div>
            <div className="fri">FRI</div>
            <div className="sat">SAT</div>
            <div className="sun">SUN</div>
            <div className="dates-child" />
            <b className="b">10</b>
            <b className="b1">11</b>
            <b className="b2">12</b>
            <b className="b3">13</b>
            <b className="b4">14</b>
            <b className="b5">15</b>
            <b className="b6">16</b>
          </div>
        </div>
        <div className="component-2">
          <div className="component-2-child" />
          <div className="period-1">Period 1</div>
          <div className="div15">9:00 - 10:00</div>
          <div className="activity-1-wrapper">
            <div className="activity-1">Activity 1</div>
          </div>
        </div>
        <Component3 />
      </div>
      {isAddPeriodOpen && (
        
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAddPeriod}
        >
          <AddPeriod onClose={closeAddPeriod} />
        </PortalPopup> 
      )}
    </>
  );
};

export default PlanningWeeklyPlanningM;
