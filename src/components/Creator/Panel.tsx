import PanelCheckbox from "./PanelCheckbox";
import PanelColor from "./PanelColor";
import PanelSelect from "./PanelSelect";

export default function Panel() {
  return (
    <div className="flex flex-col items-start col-span-2 row-span-2 gap-2 p-8 px-[clamp(1rem,5vw,4rem)] text-left rounded-md xl:col-span-1 bg-slate-800">
      <h1 className="pb-4 text-3xl font-semibold">Button generator</h1>

      <PanelSelect newOption="hoverType">Hover animation type</PanelSelect>
      <PanelSelect newOption="idleType">Idle animation type</PanelSelect>
      <PanelSelect newOption="clickType">Click animation type</PanelSelect>

      <PanelColor newOption="primaryTextColor">Primary text color</PanelColor>
      <PanelColor newOption="primaryBgColor">
        Primary background color
      </PanelColor>
      <PanelColor newOption="secondaryTextColor">
        Secondary text color
      </PanelColor>
      <PanelColor newOption="secondaryBgColor">
        Secondary background color
      </PanelColor>

      <PanelCheckbox newOption="disabled">Disabled button</PanelCheckbox>
    </div>
  );
}
