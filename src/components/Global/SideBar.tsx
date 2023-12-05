import NavbarList from "./NavigationLinks";

interface SideBarProps {
  isOpen: boolean;
}

export default function SideBar({ isOpen }: SideBarProps) {
  return (
    <>
      <div
        className={`w-screen h-screen fixed inset-0 block md:hidden bg-[rgba(0,0,0,0.5)] z-20 transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      ></div>
      <div
        className={`fixed px-[var(--primary-px)] py-32 right-0 top-0 h-screen w-[50vw] block md:hidden bg-slate-900 z-30 transition-transform duration-500 ${
          isOpen ? "" : "translate-x-[100%]"
        }`}
      >
        <NavbarList className="flex flex-col text-right" />
      </div>
    </>
  );
}
