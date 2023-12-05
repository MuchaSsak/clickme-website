import { createContext, useState } from "react";

import { ButtonProps } from "../typings/clickme";
import { CreatorContextValue } from "../typings/creatorContext";

const CreatorContext = createContext<CreatorContextValue | null>(null);

const initialState: ButtonProps = {
  children: "Click me",
  disabled: false,

  hoverType: "",
  idleType: "",
  primaryBgColor: "#ffffff",
  primaryTextColor: "#000000",
  secondaryBgColor: "#f51abb",
  secondaryTextColor: "#ffffff",
};

const initialProps = {
  disabled: false,
  hoverType: "",
  idleType: "",
  clickType: "",
  primaryBgColor: "#ffffff",
  primaryTextColor: "#000000",
  secondaryBgColor: "#f51abb",
  secondaryTextColor: "#ffffff",
};

interface CreatorContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

function CreatorContextProvider({ children }: CreatorContextProviderProps) {
  const [customizeOptions, setCustomizeOptions] = useState(initialState);
  const [changedProps, setChangedProps] = useState({});

  return (
    <CreatorContext.Provider
      value={{
        initialProps,
        customizeOptions,
        setCustomizeOptions,
        changedProps,
        setChangedProps,
      }}
    >
      {children}
    </CreatorContext.Provider>
  );
}

export { CreatorContext, CreatorContextProvider };
