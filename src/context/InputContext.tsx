import {
  createContext,
  useState,
  type ReactElement,
  type ReactPortal,
} from "react";
type ReactText = string | number;
type ReactChild = ReactElement | ReactText;
export type ContextType = {
  value: number | undefined;
  setValues: React.Dispatch<React.SetStateAction<number | undefined>>;
  value1: number | undefined;
  value2: number | undefined;
  value3: number | undefined;
  setValue1: React.Dispatch<React.SetStateAction<number | undefined>>;
  setValue2: React.Dispatch<React.SetStateAction<number | undefined>>;
  setValue3: React.Dispatch<React.SetStateAction<number | undefined>>;
};
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

// eslint-disable-next-line react-refresh/only-export-components
export const InputContext = createContext<ContextType | undefined>(undefined);

export const InputProvider = ({ children }: { children: React.ReactNode }) => {
  const [value, setValues] = useState<number | undefined>(undefined);
  const [value1, setValue1] = useState<number | undefined>(undefined);
  const [value2, setValue2] = useState<number | undefined>(undefined);
  const [value3, setValue3] = useState<number | undefined>(undefined);
  const contextValue = {
    value,
    setValues,
    value1,
    value2,
    value3,
    setValue1,
    setValue2,
    setValue3,
  };
  return (
    <InputContext.Provider value={contextValue}>
      {children}
    </InputContext.Provider>
  );
};
