import { ClickMe } from "react-clickme";

interface ButtonsProps {
  buttons: { category: string; name: string; id: string }[];
}

export default function Buttons({ buttons }: ButtonsProps) {
  const buttonList = buttons.map((btn) => (
    <div
      className="relative flex items-center justify-center h-32 rounded-md bg-slate-800"
      key={btn.id}
    >
      <label className="absolute font-light opacity-25 top-2">{btn.name}</label>

      {btn.category === "hoverType" && (
        <ClickMe hoverType={btn.name}>Hover me</ClickMe>
      )}
      {btn.category === "idleType" && (
        <ClickMe idleType={btn.name}>Watch me</ClickMe>
      )}
      {btn.category === "clickType" && (
        <ClickMe clickType={btn.name}>Click me</ClickMe>
      )}
    </div>
  ));

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] justify-center gap-8">
      {buttons.length === 0 ? (
        <h2 className="pt-8 text-xl font-medium text-center">
          Try searching for something different 🔍
        </h2>
      ) : (
        buttonList
      )}
    </div>
  );
}
