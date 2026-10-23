import {
  createContext,
  type JSX,
  type ReactElement,
  type ReactPortal,
} from "react";
type ReactText = string | number;
type ReactChild = ReactElement | ReactText;

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ReactNodeArray extends Array<ReactNode> {}
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type ReactFragment = {} | ReactNodeArray;
type ReactNode =
  | ReactChild
  | ReactFragment
  | ReactPortal
  | boolean
  | null
  | undefined;

type Props = {
  children: React.ReactNode;
};
type ArrayContextValue = {
  addToArray: (
    action: string,
    array: JSX.Element[][],
    incoming: JSX.Element,
    num: number,
  ) => void;
};

// eslint-disable-next-line react-refresh/only-export-components
export const ArrayContext = createContext<ArrayContextValue>({
  addToArray: () => {},
});

export const ArrayProvider = ({ children }: Props) => {
  const addToArray = (
    action: string,
    array: JSX.Element[][],

    incoming: JSX.Element,
    num: number,
  ) => {
    switch (action) {
      case "addToRow": {
        const existingRow = array[num];
        existingRow.push(incoming);
        array.splice(num, 1, existingRow);
        break;
      }
      case "newRow": {
        array.push([incoming]);
        console.log("inne i newRow " + incoming);
        console.log(array[0][0]);
        break;
      }
    }
  };
  const contextValue = {
    addToArray,
  };
  return (
    <ArrayContext.Provider value={contextValue}>
      {children}
    </ArrayContext.Provider>
  );
};
