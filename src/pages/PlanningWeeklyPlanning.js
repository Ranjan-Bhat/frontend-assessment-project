import { useState } from "react";
import AddPeriod from "../components/AddPeriod";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import FrameComponent3 from "../components/FrameComponent3";
import "./PlanningWeeklyPlanning.css";
const PlanningWeeklyPlanning = () => {
  const [isAddPeriodOpen, setAddPeriodOpen] = useState(false);
  const navigate = useNavigate();

  const openAddPeriod = () => {
    setAddPeriodOpen(true);
  };

  const closeAddPeriod = () => {
    setAddPeriodOpen(false);
  };

  const onSecondaryTabContainer1Click = () => {
    navigate("/planning-weekly-planning");
  };

  return (
    <>
      <div className="planning-weekly-planning">
        <Header editSquare="/edit-square1.svg" paper="/paper1.svg" />
        <FrameComponent3
          propLeft="0px"
          onSecondaryTabContainer1Click={onSecondaryTabContainer1Click}
        />
        <div className="planning-weekly-planning-inner" onClick={openAddPeriod}>
          <div className="plus-group">
            <img className="plus-icon1" alt="" src="/plus.svg" />
            <div className="add-period1">Add Period</div>
          </div>
        </div>
        <b className="april-10-171">April 10-17</b>
        <div className="arrow-right-2-group">
          <img className="arrow-right-21" alt="" src="/arrow--right-2.svg" />
          <img className="arrow-right-31" alt="" src="/arrow--right-3.svg" />
          <div className="today1">Today</div>
        </div>
        <div className="time-group">
          <div className="time1">
            <div className="div16">08:00</div>
            <div className="div17">09:00</div>
            <div className="div18">10:00</div>
            <div className="div19">11:00</div>
            <div className="div20">12:00</div>
            <div className="div21">13:00</div>
            <div className="div22">14:00</div>
            <div className="div23">15:00</div>
            <div className="div24">16:00</div>
            <div className="div25">17:00</div>
            <div className="div26">18:00</div>
            <div className="div27">19:00</div>
            <div className="div28">20:00</div>
            <div className="div29">21:00</div>
            <div className="div30">22:00</div>
          </div>
          <img className="lines-icon1" alt="" src="/lines1.svg" />
          <div className="dates1">
            <div className="mon1">MON</div>
            <div className="tue1">TUE</div>
            <div className="wed1">WED</div>
            <div className="thu1">THU</div>
            <div className="fri1">FRI</div>
            <div className="sat1">SAT</div>
            <div className="sun1">SUN</div>
            <div className="dates-item" />
            <b className="b7">10</b>
            <b className="b8">11</b>
            <b className="b9">12</b>
            <b className="b10">13</b>
            <b className="b11">14</b>
            <b className="b12">15</b>
            <b className="b13">16</b>
          </div>
        </div>
        <div className="component-21">
          <div className="component-2-item" />
          <div className="period-11">Period 1</div>
          <div className="div31">9:00 - 10:00</div>
        </div>
        <div className="component-3">
          <div className="component-3-child" />
          <div className="period-11">Period 2</div>
          <div className="div31">11:00 - 12:00</div>
        </div>
        <div className="component-4">
          <div className="component-4-child" />
          <div className="period-11">Period 3</div>
          <div className="div31">13:00 - 14:00</div>
        </div>
        <div className="component-5">
          <div className="component-5-child" />
          <div className="period-11">Period 4</div>
          <div className="div31">16:00 - 17:00</div>
        </div>
      </div>
      {isAddPeriodOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAddPeriod}
        >
        <AddPeriod />
        </PortalPopup>
      )}
    </>
  );
};

export default PlanningWeeklyPlanning;
