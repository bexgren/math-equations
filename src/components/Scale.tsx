// import type {
//   JSXElementConstructor,
//   ReactElement,
//   ReactNode,
//   ReactPortal,
// } from "react";
// import { problem1 } from "../utils/mathProblems";
// // import Single from "./Single";
// import type { JSX } from "react/jsx-runtime";
import { problem1 } from "../utils/mathProblems";
import SinglesPositions from "../utils/SinglesPositions";
// import SinglesPositions from "../utils/SinglesPositions";

const Scale = () => {
  const sum = problem1.getSum();
  const boxes = problem1.getXNum();
  const count = problem1.getCountNum();

  return (
    <div className="scale">
      <div className="topOfScale">
        <div className="left">
          <div className="topOfBowl">
            <div className="box-div" style={{ color: "blue" }}>
              {SinglesPositions("x", boxes)}
            </div>
            <div className="countDiv">{SinglesPositions("single", count)}</div>
          </div>
          <div className="bowl"></div>
        </div>
        <div className="right">
          <div className="topOfBowl">
            {
              // singlesArray.map((item) => item)
              SinglesPositions("single", sum)
            }
          </div>
          <div className="bowl"></div>
        </div>
      </div>

      <div className="scale-div">
        <span className="board"></span>
        <div className="triangle">
          <div className="triangleL"></div>
          <div className="triangleR"></div>
          <div className="triangleB"></div>
        </div>
      </div>
    </div>
  );
};

export default Scale;
