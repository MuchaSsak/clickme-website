import { useNavigate } from "react-router-dom";
import { ClickMe } from "react-clickme";

import Heading from "../Global/Heading";

const getStartedBtnProps = {
  style: {
    fontSize: "1.5rem",
    animationDuration: "5s",
  },
  primaryBgColor: "#f51abb",
  primaryTextColor: "#fff",
  secondaryBgColor: "#fff",
  secondaryTextColor: "#000",
  hoverType: "rectangleOut",
};

const showPresetsBtnProps = {
  style: {
    fontSize: "1.5rem",
    animationDuration: "5s",
    border: "#fff 1px solid",
  },
  primaryBgColor: "transparent",
  primaryTextColor: "#fff",
  secondaryBgColor: "#fff",
  secondaryTextColor: "#000",
  hoverType: "rectangleOut",
};

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center flex-grow gap-6 py-12 text-center">
      <Heading className="text-5xl w-max">🎈 ClickMe 🎈</Heading>
      <p className="text-2xl font-medium">
        A react library full of highly customizable and animated buttons out of
        the box
      </p>

      <div className="flex flex-col gap-4 md:flex-row">
        <ClickMe onClick={() => navigate("/docs")} {...getStartedBtnProps}>
          Get started
        </ClickMe>
        <ClickMe onClick={() => navigate("/")} {...showPresetsBtnProps}>
          Show presets
        </ClickMe>
      </div>
    </div>
  );
}
