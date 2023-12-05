import { useState } from "react";

import { useCreatorContext } from "../../hooks/useCreatorContext";
import { ButtonProps } from "../../typings/clickme";

interface PanelColorProps {
  children: string;
  newOption: string;
}

export default function PanelColor({ children, newOption }: PanelColorProps) {
  const {
    initialProps,
    changedProps,
    setChangedProps,
    customizeOptions,
    setCustomizeOptions,
  } = useCreatorContext();
  const [color, setColor] = useState(
    customizeOptions[newOption as keyof ButtonProps]
  );

  const inputId = `panel-color-${children.toLowerCase().split(" ").join("-")}`;

  function handleColorChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCustomizeOptions({
      ...customizeOptions,
      [newOption]: e.target.value,
    });

    // If changed option === default option, delete it from object. Otherwise append it to object
    let newChangedProps = { ...changedProps };

    if (initialProps[newOption] === e.target.value)
      delete newChangedProps[newOption];
    if (initialProps[newOption] !== e.target.value)
      newChangedProps = { ...newChangedProps, [newOption]: e.target.value };

    setChangedProps({ ...newChangedProps });
  }

  return (
    <div className="flex items-center gap-2">
      <label htmlFor={inputId}>{children}</label>
      <input
        id={inputId}
        type="color"
        onChange={(e) => {
          setColor(e.target.value);
          handleColorChange(e);
        }}
        value={color}
        className="bg-transparent"
      />
    </div>
  );
}
