import MyInput from "./MyInput";
import { problem1 } from "../utils/mathProblems";
import { useInput } from "../context/useArrayProv";
const ProblemForm = () => {
  const input = useInput();
  if (!input) {
    throw new Error("ProblemForm must be used within its input provider");
  }
  const { value1, value2, value3, setValue1, setValue2, setValue3 } = input;
  const boxes = problem1.getXNum();
  const count = problem1.getCountNum();
  const sum = problem1.getSum();
  console.log(value1);
  console.log(boxes === value1 ? "blue" : "#ff0000ff");
  return (
    <section className="pFSection">
      <section className="pFBeforeEqual">
        <article>
          <MyInput
            values={value1}
            setValue={setValue1}
            border={
              boxes === value1
                ? "lightgreen"
                : value1 !== undefined
                  ? "#ff0000ff"
                  : "blue"
            }
            name={"boxes"}
          />
          <p className="pFX">x</p>
        </article>
        <p className="importantOp">+</p>
        <MyInput
          values={value2}
          setValue={setValue2}
          border={
            count === value2
              ? "lightgreen"
              : value2 !== undefined
                ? "#ff0000ff"
                : "blue"
          }
          name={"count"}
        />
      </section>
      <p className="importantOp">=</p>
      <MyInput
        values={value3}
        setValue={setValue3}
        border={
          sum === value3
            ? "lightgreen"
            : value3 !== undefined
              ? "#ff0000ff"
              : "blue"
        }
        name="sum"
      />
    </section>
  );
};

export default ProblemForm;
