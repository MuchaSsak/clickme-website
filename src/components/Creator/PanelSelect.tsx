import CLICKME_BUTTONS from "../../../data/clickmeButtons";
import { useCreatorContext } from "../../hooks/useCreatorContext";

interface PanelSelectProps {
  children: string;
  newOption: string;
}

export default function PanelSelect({ children, newOption }: PanelSelectProps) {
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

  function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
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

      <select
        className="w-36 bg-slate-900"
        id={inputId}
        onChange={handleSelectChange}
      >
        <option value="">-- None --</option>

        {CLICKME_BUTTONS.map(
          (btn) =>
            btn.category === newOption && (
              <option value={btn.name} key={btn.id}>
                {btn.name}
              </option>
            )
        )}
      </select>
    </div>
  );
}
