import { NavLink } from "react-router-dom";

export default function DocumentationList() {
  return (
    <ul className="flex-col hidden p-4 pr-16 text-xl border-r border-white xl:flex">
      <NavLink className="[&.active]:text-magenta" to="/docs/installation">
        Installation
      </NavLink>
      <NavLink className="[&.active]:text-magenta" to="/docs/usage">
        Usage/Examples
      </NavLink>
    </ul>
  );
}
