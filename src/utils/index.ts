import { useContext } from "react";
import { AppContext } from "../context";
import { IAppContext } from "../interfaces";

export function useAppContext() {
  return useContext(AppContext) as IAppContext;
}

export function hasUndefinedValue(obj: Record<string, unknown>): boolean {
  for (const key in obj) {
    if (
      Object.prototype.hasOwnProperty.call(obj, key) &&
      obj[key] === undefined
    ) {
      return true;
    }
  }
  return false;
}
