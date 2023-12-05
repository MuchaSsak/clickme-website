import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

interface LogoProps {
  className?: string;
  doesRedirect?: boolean;
}

export default function Logo({
  className = "",
  doesRedirect = true,
}: LogoProps) {
  return (
    <>
      {doesRedirect ? (
        <Link to="/">
          <img
            className={twMerge("h-[clamp(2rem,5vw,3rem)]", className)}
            src="/logo.svg"
            alt="ClickMe logo"
          />
        </Link>
      ) : (
        <img
          className={twMerge("h-[clamp(2rem,5vw,3rem)]", className)}
          src="/logo.svg"
          alt="ClickMe logo"
        />
      )}
    </>
  );
}
