import React from "react";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
// import { Increase, Decrease } from "../State/Action_Creators/Main"; An Another Way Without bindActionCreators
import * as Everything from "../State/Action_Creators/Main";
function Counter() {
  let Dispatch_Hook = useDispatch();
  let { Increase, Decrease } = bindActionCreators(Everything, Dispatch_Hook);
  return (
    <>
      <div className="d-flex justify-content-center align-items-center custom-div">
        <div>
          <button
            type="button"
            className="btn btn-primary btn-lg btn-circle mr-3"
            // onClick={() => {
            //   Dispatch_Hook(Increase());
            // }} ---->A Different Approach Without bindActionCreators
            onClick={() => {
              Increase();
            }}
          >
            +
          </button>
          <button
            type="button"
            className="btn btn-primary btn-lg btn-circle ml-3"
            onClick={() => {
              Decrease();
            }}
            // onClick={() => {
            //   Dispatch_Hook(Decrease());
            // }} ---->A Different Approach Without bindActionCreators
          >
            -
          </button>
        </div>
      </div>
    </>
  );
}

export default Counter;
