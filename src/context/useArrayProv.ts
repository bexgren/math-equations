import { useContext } from "react";
import { ArrayContext } from "./ArrayContext";
import { InputContext } from "./InputContext";

const useArrayProv = () => {
  return useContext(ArrayContext);
};

const useInput = () => {
  return useContext(InputContext);
};

export { useArrayProv, useInput };
