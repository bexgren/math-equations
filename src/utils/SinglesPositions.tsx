import type { JSX } from "react";
import Single from "../components/Single";
import { useArrayProv } from "../context/useArrayProv";

const SinglesPositions = (shape: string, sum: number) => {
  const sectionArray: JSX.Element[][] = [];
  const { addToArray } = useArrayProv();
  for (let i = 0; i < sum; i++) {
    let row = i === 0 ? -1 : 0;
    let myBool = true;

    while (myBool) {
      const row1Length = sectionArray[row] ? sectionArray[row].length : null;
      console.log("row1Length: " + row1Length);
      const row2Length = sectionArray[row + 1]
        ? sectionArray[row + 1].length
        : null;
      if (row1Length) {
        const widthLength = sectionArray[0].length;
        const heightLength = sectionArray.length;

        if (widthLength === heightLength) {
          addToArray(
            "addToRow",
            sectionArray,
            <Single key={i + 1} classname={`1.${widthLength + 1} ${shape}`} />,
            0,
          );

          myBool = false;
        } else if (widthLength !== heightLength) {
          if (row2Length) {
            if (row1Length === row2Length + 1) {
              row += 1;
              // myBool = false;
            } else {
              addToArray(
                "addToRow",
                sectionArray,

                <Single
                  key={i + 1}
                  classname={`${row + 2}.${row2Length + 1} ${shape}`}
                />,
                row + 1,
              );

              myBool = false;
            }
          } else {
            addToArray(
              "newRow",
              sectionArray,
              <Single
                key={i + 1}
                classname={`${sectionArray.length + 1}.1 ${shape}`}
              />,
            );
            myBool = false;
          }
        } else {
          myBool = false;
        }
      } else if (!row1Length || !row2Length) {
        addToArray(
          "newRow",
          sectionArray,
          <Single
            key={i + 1}
            classname={`${sectionArray.length + 1}.1 ${shape}`}
          />,
        );

        myBool = false;
      } else {
        myBool = false;
      }
    }
  }

  return (
    <div className="sumSinglesDiv">
      {sectionArray.map((item, index) => {
        const side = 16 * (index + 1); // 16 is half of the width of the coin to make a diagnoal effect
        const down = 5 * index; // 5 is the gap between the rows so that the coins sit between eachother
        const myStyle = {
          transform: `translate(${side}px, ${down}px)`,
        };
        const firstRow = {
          translate: side,
        };
        const drop = index > 0 ? myStyle : firstRow;
        return (
          <div
            className="smallItem"
            style={drop}
            key={`item${index}`}
            id={`item-${index}`}
          >
            {item.map((smallItem) => smallItem)}
          </div>
        );
      })}
    </div>
  );
};

export default SinglesPositions;
