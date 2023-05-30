import "./AddPeriod.css";
import { useState } from "react";
import { DatePicker } from 'antd';
const {RangePicker} = DatePicker;
const AddPeriod = () => {
  const [isAddPeriodOpen, setAddPeriodOpen] = useState(true);
  const [periodName, setPeriodName] = useState('');
  const onClose = () => {
    setAddPeriodOpen(false);
  }

  const takeInput = e => setPeriodName(e.target.value);
  
    return (
    isAddPeriodOpen && (
    <div className="add-period2">
      <img className="fi-ss-cross-icon" onClick={onClose} alt="" src="/fisscross.svg" />
      <b className="add-period3">Add Period</b>
      <div className="period-name-parent" >
        <input 
               className="enter-period-name-wrapper"
               type="text" 
               value={periodName}
               placeholder="Enter Period Name"
               onChange={takeInput}/>
      </div>
      <div className="add-period-inner">
        <div className="repeat-on-days-parent">
          <b className="period-name">Repeat on days</b>
          <div className="instance-parent">
            <div className="frame-wrapper">
              <div className="m-wrapper">
                <div className="period-name">S</div>
              </div>
            </div>
            <div className="frame-wrapper">
              <div className="m-wrapper">
                <div className="period-name">M</div>
              </div>
            </div>
            <div className="days">
              <div className="m-frame">
                <div className="period-name">T</div>
              </div>
            </div>
            <div className="frame-wrapper">
              <div className="m-wrapper">
                <div className="period-name">W</div>
              </div>
            </div>
            <div className="frame-wrapper">
              <div className="m-wrapper">
                <div className="period-name">T</div>
              </div>
            </div>
            <div className="days">
              <div className="m-frame">
                <div className="period-name">F</div>
              </div>
            </div>
            <div className="frame-wrapper">
              <div className="m-wrapper">
                <div className="period-name">S</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="period-name-group">
        <b className="period-name">Start Time</b>
        <div className="enter-period-name-parent">
          <div className="enter-period-name1">11:00</div>
          <img
            className="iconlylighttime-circle"
            alt=""
            src="/iconlylighttime-circle2.svg"
          />
        </div>
      </div>
      <div className="period-name-container">
        <b className="period-name">From</b>
        <RangePicker />
      </div>

      <div className="period-name-parent1">
        <b className="period-name">End Time</b>
        <div className="enter-period-name-parent">
          <div className="enter-period-name1">12:00</div>
          <img
            className="iconlylighttime-circle"
            alt=""
            src="/iconlylighttime-circle3.svg"
          />
        </div>
      </div>
      <div className="instance-group">
        <div className="frame-wrapper3">
          <div className="plus-container">
            <img className="plus-icon2" alt="" src="/plus.svg" />
            <div className="period-name">Add Period</div>
          </div>
        </div>
        <img
          className="iconlylightdelete"
          alt=""
          src="/iconlylightdelete1.svg"
        />
      </div>
      <img className="add-period-child" alt="" src="/group-84.svg" />
    </div>
    )
) ;
};

export default AddPeriod;
