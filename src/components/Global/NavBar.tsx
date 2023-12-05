import { useState } from "react";

import Logo from "./Logo";
import HamburgerBtn from "./HamburgerBtn";
import NavigationLinks from "./NavigationLinks";
import SideBar from "./SideBar";

export default function NavBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <nav className="sticky inset-0 z-50 flex items-center justify-between py-8 bg-opacity-50 bg-slate-900">
      <Logo />
      <NavigationLinks />

      <HamburgerBtn
        isOpen={isSidebarOpen}
        onClick={() => setIsSidebarOpen((cur) => !cur)}
      />
      <SideBar isOpen={isSidebarOpen} />
    </nav>
  );
}
