import React from "react";

const CountDown = () => {
  const counter = (startPoint, counterElement, milliSeconds) => {
    setInterval(() => {
      if (startPoint > 0) {
        startPoint--;
      }
      document
        .getElementById(counterElement)
        .style.setProperty("--value", startPoint);
    }, milliSeconds);
  };
  let dayStart = 4;
  const daysMilliSeconds = dayStart * 24 * 3600 * 1000;
  let HrsStart = 14;
  const HrsMilliSeconds = HrsStart * 3600 * 1000;
  let minStart = 54;
  const MinMilliSeconds = minStart * 1000;
  let secStart = 54;
  counter(dayStart, "days", daysMilliSeconds);
  counter(HrsStart, "Hrs", HrsMilliSeconds);
  counter(minStart, "mins", MinMilliSeconds);
  counter(secStart, "secs", 1000);
  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span id="days" style={{ "--value": dayStart }}></span>
        </span>
        days
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span id="hrs" style={{ "--value": HrsStart }}></span>
        </span>
        hours
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span id="mins" style={{ "--value": minStart }}></span>
        </span>
        min
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span id="secs" style={{ "--value": secStart }}></span>
        </span>
        sec
      </div>
    </div>
  );
};

export default CountDown;
