import { useContext } from "react";
import { FormFactorContext } from "../contexts/formFactor";
export const useFormFactor = () => {
    return useContext(FormFactorContext);
  };