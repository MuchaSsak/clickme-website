interface HamburgerBtnProps {
  onClick?: () => void;
  isOpen: boolean;
}

export default function HamburgerBtn({ onClick, isOpen }: HamburgerBtnProps) {
  return (
    <button
      onClick={onClick}
      className={`p-1 h-3 w-6 block  md:hidden relative z-40 [&::before]:bg-white [&::before]:h-[2px] [&::before]:top-0 [&::before]:right-0 [&::before]:[content:''] [&::before]:block [&::before]:rounded-full [&::before]:transition-all [&::after]:transition-all [&::after]:[content:''] [&::after]:block [&::after]:bg-white [&::after]:h-[2px] [&::after]:bottom-0 [&::after]:right-0 [&::after]:rounded-full [&::after]:absolute [&::before]:absolute ${
        isOpen
          ? "[&::before]:w-4 [&::after]:w-6"
          : "[&::before]:w-6 [&::after]:w-4"
      }`}
    ></button>
  );
}
