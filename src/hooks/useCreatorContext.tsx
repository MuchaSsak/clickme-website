import { useContext } from "react";

import { CreatorContext } from "../context/CreatorContext";

export function useCreatorContext() {
  const context = useContext(CreatorContext);
  if (!context)
    throw new Error(
      "💥 useCreatorContext was used outside the CreatorContextProvider"
    );
  return context;
}
