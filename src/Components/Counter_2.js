import React from "react";
import { useDispatch } from "react-redux";
import { Increase, Decrease } from "../State/Action_Creators/Main";
function Counter_2() {
  let Dispatch_Hook = useDispatch();
  return (
    <>
      <div className="d-flex justify-content-center align-items-center custom-div">
        <div>
          <button
            type="button"
            className="btn btn-primary btn-lg btn-circle mr-3"
            onClick={() => {
              Dispatch_Hook(Increase(100));
            }}
          >
            +
          </button>
          <button
            type="button"
            className="btn btn-primary btn-lg btn-circle ml-3"
            onClick={() => {
              Dispatch_Hook(Decrease(100));
            }}
          >
            -
          </button>
        </div>
      </div>
    </>
  );
}

export default Counter_2;
