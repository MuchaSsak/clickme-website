export default [
  {
    name: "Importing the component",
    code: `import ClickMe from "react-clickme";

export default function App() {
   return <ClickMe>Example text</ClickMe>;
}`,
  },
  {
    name: "Passing in custom props along with regular ones for JSX button element",
    code: `import ClickMe from "react-clickme";

export default function App() {
   return (
      <ClickMe
         className="btn"
         hoverType="changeColor"
         aria-label="my-btn"
         onClick={() => alert("Hello")}
      >
         hello
      </ClickMe>
   );
}`,
  },

  {
    name: "Destructuring props trick for cleaner JSX",
    code: `import ClickMe from "react-clickme";

const clickmeProps = {
   className: "btn",
   hoverType: "rectangleOut",
   ariaLabel: "my-btn",
   onClick: () => alert("Hello"),
};

export default function App() {
   return <ClickMe {...clickmeProps}>Example text</ClickMe>;
}`,
  },
  {
    name: "Custom inline CSS styles",
    code: `import ClickMe from "react-clickme";

const clickmeStyles = {
   fontSize: "2rem",
   fontWeight: "500",
   padding: "1rem 0.5rem",
};

export default function App() {
   return <ClickMe style={clickmeStyles}>Example text</ClickMe>;
}`,
  },
  {
    name: "You can using multiple animation types!",
    code: `import ClickMe from "react-clickme";

export default function App() {
   const clickmeProps = {
      hoverType: "changeColor",
      idleType: "pulse",
      clickType: "jello",
   };

   return <ClickMe {...clickmeProps}>Example text</ClickMe>;
}`,
  },
  {
    name: "Example of consistant buttons across the entire app",
    code: `
// ----- someFile.js -----
export const CLICKME_PRIMARY = {
   primaryBgColor: "#3D90F6",
   primaryTextColor: "#fff",

   idleType: "doublePulse",
};

export const CLICKME_SECONDARY = {
   primaryBgColor: "#F63D3D",
   primaryTextColor: "#fff",
   secondaryBgColor: "#000",
   // default secondaryTextColor is "#fff"

   hoverType: "changeColor",
   clickType: "rubberBand",

   onClick: () => alert("Cancelled!"),
};

// ----- ComponentFile.js -----
import ClickMe from "react-clickme";

export default function App() {
   const clickmeProps = {
      hoverType: "changeColor",
      idleType: "pulse",
      clickType: "jello",
   };

   return <ClickMe {...clickmeProps}>Example text</ClickMe>;
}`,
  },
];
