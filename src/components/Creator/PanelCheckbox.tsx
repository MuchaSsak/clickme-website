import { useCreatorContext } from "../../hooks/useCreatorContext";

interface PanelCheckboxProps {
  children: string;
  newOption: string;
}

export default function PanelCheckbox({
  children,
  newOption,
}: PanelCheckboxProps) {
  const {
    initialProps,
    changedProps,
    setChangedProps,
    customizeOptions,
    setCustomizeOptions,
  } = useCreatorContext();

  const inputId = `panel-checkbox-${children
    .toLowerCase()
    .split(" ")
    .join("-")}`;

  function handleCheckboxChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCustomizeOptions({
      ...customizeOptions,
      [newOption]: e.target.checked,
    });

    // If changed option === default option, delete it from object. Otherwise append it to object
    let newChangedProps = { ...changedProps };

    if (initialProps[newOption] === e.target.checked)
      delete newChangedProps[newOption];
    if (initialProps[newOption] !== e.target.checked)
      newChangedProps = {
        ...newChangedProps,
        [newOption]: e.target.checked,
      };

    setChangedProps({ ...newChangedProps });
  }

  return (
    <div className="flex items-center gap-2">
      <label htmlFor={inputId}>{children}</label>
      <input
        id={inputId}
        type="checkbox"
        onChange={handleCheckboxChange}
        className="accent-magenta"
      />
    </div>
  );
}
