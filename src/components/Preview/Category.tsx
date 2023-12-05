import { useSearchParams } from "react-router-dom";

import CLICKME_BUTTONS from "../../../data/clickmeButtons";
import Search from "./Search";
import CategoryBtn from "./CategoryBtn";

interface CategoryProps {
  buttons: { category: string; name: string; id: string }[];
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function Category({
  buttons,
  search,
  setSearch,
}: CategoryProps) {
  const [searchParams] = useSearchParams();
  const urlCategory = searchParams.get("category");
  const numTotalCategoryButtons = CLICKME_BUTTONS.filter(
    (btn) => btn.category === urlCategory
  ).length;

  return (
    <div className="flex flex-col justify-between gap-4 xl:flex-row align-center">
      <div className="flex items-center gap-2 text-2xl">
        <Search search={search} setSearch={setSearch} />

        <h4 className="pl-2 text-base opacity-50">
          {buttons.length}/{numTotalCategoryButtons}
        </h4>
      </div>

      <div className="flex items-center gap-2">
        <CategoryBtn category="hoverType">Hover</CategoryBtn>
        <CategoryBtn category="idleType">Idle</CategoryBtn>
        <CategoryBtn category="clickType">Click</CategoryBtn>
      </div>
    </div>
  );
}
