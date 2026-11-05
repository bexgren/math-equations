import { problem2 } from "../utils/mathProblems";
import SinglesPositions from "../utils/SinglesPositions";
import { translations } from "../utils/translations";

const Scale = () => {
  const sum = problem2.getSum();
  const boxes = problem2.getXNum();
  const count = problem2.getCountNum();

  return (
    <div className="scale">
      <div className="topOfScale">
        <div className="left">
          <div className="topOfBowl">
            <div className="box-div">{SinglesPositions("x", boxes)}</div>
            <div className="countDiv">{SinglesPositions("single", count)}</div>
          </div>
          <img
            className="bowl"
            src="src/assets/scale-cup.svg"
            alt={translations().sv.alt.scaleCup}
          />
        </div>
        <div className="right">
          <div className="topOfBowl">{SinglesPositions("single", sum)}</div>
          <img
            className="bowl"
            src="src/assets/scale-cup.svg"
            alt={translations().sv.alt.scaleCup}
          />
        </div>
      </div>

      <div className="scale-div">
        <img
          className="scaleArm"
          src="src/assets/scale-arm.svg"
          alt={translations("equal").sv.alt.scaleArm}
        />
        <div className="triangle">
          <img
            src="src/assets/scale-foot (3).svg"
            alt={translations().sv.alt.scaleFoot}
          />
        </div>
      </div>
    </div>
  );
};

export default Scale;
