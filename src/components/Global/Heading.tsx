import { twMerge } from "tailwind-merge";

interface HeadingProps {
  children: string | JSX.Element | JSX.Element[];
  className?: string;
}

export default function Heading({ children, className = "" }: HeadingProps) {
  return (
    <h1
      className={twMerge(
        "text-4xl font-semibold max-w-[20ch] mx-auto text-center",
        className
      )}
    >
      {children}
    </h1>
  );
}
