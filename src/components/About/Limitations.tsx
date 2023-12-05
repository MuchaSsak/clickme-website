import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ClickMe } from "react-clickme";

import Heading from "../Global/Heading";
import Code from "../Global/Code";

const clickmeProps = {
  className: "btn-primary",
  ariaLabel: "clickme-button",
  style: {
    padding: "1rem 2rem",
    fontSize: "clamp(1.25rem,3vw,2rem)",
    fontWeight: "600",
  },
  hoverType: "radialOut",
  idleType: "pulse",
  clickType: "rubberBand",
};
const codeSnippet = `import ClickMe from "react-clickme";

const clickmeProps = {
   className: "btn-primary",
   ariaLabel: "clickme-button",
   style: {
      padding: "1rem 2rem",
      fontSize: "clamp(1.25rem,1vw,2rem)",
      fontWeight: "600",
   },
   hoverType: "radialOut",
   idleType: "pulse",
   clickType: "rubberBand",
};

export default function App() {
   return <ClickMe {...clickmeProps}>I can do anything!</ClickMe>;
}   
`;

export default function Limitations() {
  return (
    <div>
      <Heading className="pb-4">The only limitation is your creativity</Heading>
      <p className="text-2xl text-center">
        The ClickMe component accepts all of your regular JSX button element
        props, along with custom ones, e.g. <Code>hoverType</Code>,{" "}
        <Code>idleType</Code>, <Code>primaryBgColor</Code>. All of the custom
        props are listed in the Button Creator.
      </p>

      <div className="flex flex-col items-center justify-between gap-4 pt-12 xl:flex-row">
        <SyntaxHighlighter
          language="javascript"
          customStyle={{
            boxShadow: "0 0 1rem rgba(0,0,0,0.25)",
            backgroundColor: "rgba(5,5,5,0.25)",
            width: "100%",
          }}
          style={vs2015}
          wrapLines
        >
          {codeSnippet}
        </SyntaxHighlighter>
        <ClickMe {...clickmeProps}>I can do anything!</ClickMe>
      </div>
    </div>
  );
}
