import { Link, useSearchParams } from "react-router-dom";
import { ClickMe } from "react-clickme";

const buttonStyle = { fontSize: "clamp(0.75rem, 2vw, 1rem)" };

interface CategoryBtnProps {
  children: string;
  category: string;
}

export default function CategoryBtn({ children, category }: CategoryBtnProps) {
  const [searchParams] = useSearchParams();
  const urlCategory = searchParams.get("category");

  return (
    <Link to={`/preview?category=${category}`} className="outline-none">
      <ClickMe
        style={buttonStyle}
        hoverType="outline"
        primaryBgColor={urlCategory === category ? "#f51abb" : "#ffffff"}
        primaryTextColor={urlCategory === category ? "#ffffff" : "#000000"}
        key={urlCategory}
      >
        {children}
      </ClickMe>
    </Link>
  );
}
