import { twMerge } from "tailwind-merge";

interface SectionProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

export default function Section({ children, className = "" }: SectionProps) {
  return (
    <section
      className={twMerge(
        "flex flex-col flex-grow gap-24 pt-8 px-primary",
        className
      )}
    >
      {children}
    </section>
  );
}
