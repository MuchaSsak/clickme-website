import { ClickMe } from "react-clickme";

import { useCreatorContext } from "../../hooks/useCreatorContext";

export default function Result() {
  const { customizeOptions } = useCreatorContext();

  return (
    <div className="flex items-center justify-center col-span-2  px-[clamp(1rem,5vw,4rem)] py-8 rounded-md xl:col-span-1 bg-slate-800">
      <ClickMe {...customizeOptions} key={crypto.randomUUID()}>
        Example text
      </ClickMe>
    </div>
  );
}
