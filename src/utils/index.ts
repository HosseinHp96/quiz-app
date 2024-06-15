import { useContext } from "react";
import { AppContext } from "../context";
import { IAppContext } from "../interfaces";

export function useAppContext() {
  return useContext(AppContext) as IAppContext;
}
