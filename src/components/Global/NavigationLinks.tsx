import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";

interface NavigationLinksProps {
  className?: string;
}

export default function NavigationLinks({
  className = "",
}: NavigationLinksProps) {
  return (
    <ul className={twMerge("hidden gap-4 text-xl md:flex", className)}>
      <NavLink
        className="[&.active]:text-magenta"
        to="/preview?category=hoverType"
      >
        <li>Preview</li>
      </NavLink>
      <NavLink className="[&.active]:text-magenta" to="/about">
        <li>About</li>
      </NavLink>
      <NavLink className="[&.active]:text-magenta" to="/docs">
        <li>Docs</li>
      </NavLink>
      <NavLink className="[&.active]:text-magenta" to="/creator">
        <li>Creator</li>
      </NavLink>
    </ul>
  );
}
