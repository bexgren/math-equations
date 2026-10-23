import type { JSX } from "react";
import Single from "../components/Single";
import { useArrayProv } from "../context/useArrayProv";

const SinglesPositions = (shape: string, sum: number) => {
  const sectionArray: JSX.Element[][] = [];
  const { addToArray } = useArrayProv();
  for (let i = 0; i < sum; i++) {
    let row = i === 0 ? -1 : 0;
    const keys = i + 1;
    let myBool = true;
    const consoleMsg = (index: number, action: string) => {
      console.log(`${index}: ${action}`);
    };

    while (myBool) {
      const row1Length = sectionArray[row] ? sectionArray[row].length : null;
      const row2Length = sectionArray[row + 1]
        ? sectionArray[row + 1].length
        : null;
      if (row1Length) {
        const widthLength = sectionArray[0].length;
        const heightLength = sectionArray.length;
        consoleMsg(i + 1, "Rad 1 finns...");

        if (widthLength === heightLength) {
          addToArray(
            "addToRow",
            sectionArray,
            <Single
              key={i + 1}
              keys={keys}
              classname={`1.${widthLength + 1} ${shape}`}
            />,
            0
          );
          // pushFunc(0, i + 1, `1.${widthLength + 1}`);
          myBool = false;
          consoleMsg(
            i + 1,
            `Triangel - Lägger till i Första raden, bool=false: ${myBool}`
          );
        } else if (widthLength !== heightLength) {
          consoleMsg(i + 1, `Inte triangel`);

          if (row2Length) {
            consoleMsg(i + 1, "Rad 2 finns...");

            if (row1Length === row2Length + 1) {
              row += 1;
              // myBool = false;
              consoleMsg(
                i + 1,
                `1 mellan row1: ${row1Length} och row2: ${row2Length} OCH row++: ${row}, bool=true: ${myBool}`
              );
            } else {
              consoleMsg(
                i + 1,
                `INTE 1 mellan row1: ${row1Length} och row2: ${row2Length}`
              );
              addToArray(
                "addToRow",
                sectionArray,

                <Single
                  key={i + 1}
                  keys={keys}
                  classname={`${row + 2}.${row2Length + 1} ${shape}`}
                />,
                row + 1
              );
              // pushFunc(
              //   row + 1,
              //   i + 1,
              //   `${row + 1}.${sectionArray[row2Length - 1].length + 1}`
              // );
              myBool = false;
              consoleMsg(
                i + 1,
                `Lägger till i rad2, bool=false: ${myBool}, ${row2Length}`
              );
            }
          } else {
            consoleMsg(i + 1, `kommer inte in i row2-if- ${row2Length}`);
            addToArray(
              "newRow",
              sectionArray,
              <Single
                key={i + 1}
                keys={keys}
                classname={`${sectionArray.length + 1}.1 ${shape}`}
              />
            );
            // sectionArray.push([
            //   <Single key={i + 1} classname={`${sectionArray.length + 1}.1`} />,
            // ]);
            myBool = false;
            consoleMsg(
              i + 1,
              `row2 finns inte: ${row2Length}, bool=false: ${myBool} - LÄGGER till ny rad`
            );
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
            keys={keys}
            classname={`${sectionArray.length + 1}.1 ${shape}`}
          />
        );
        // sectionArray.push([
        //   <Single key={i + 1} classname={`${sectionArray.length + 1}.1`} />,
        // ]);
        myBool = false;
        consoleMsg(
          i + 1,
          `row1 finns inte: ${row1Length} ELLER row2 finns inte: ${row2Length}, bool=false: ${myBool} - LÄGGER till ny rad`
        );
        console.log(keys, sectionArray.length);
      } else {
        myBool = false;
      }
    }
  }

  return (
    <div className="sumSinglesDiv">
      {sectionArray.map((item, index) => {
        const side = 16 * (index + 1);
        const down = 5 * index;
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
