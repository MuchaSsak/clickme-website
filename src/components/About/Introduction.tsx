import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";

import Heading from "../Global/Heading";

const codeSnippet = `import ClickMe from "react-clickme";

export default function App() {
   return (
      <div className="buttons-preview">
         <ClickMe hoverType="slideToRight">Hover me!</ClickMe>
         <ClickMe hoverType="shutterOutHorizontal">Hover me!</ClickMe>
         <ClickMe hoverType="sweepToTop">Hover me!</ClickMe>
         <ClickMe hoverType="rectangleOut">Hover me!</ClickMe>
      </div>
   );
}
`;

const syntaxHighlighterProps = {
  language: "javascript",
  customStyle: {
    boxShadow: "0 0 1rem rgba(0,0,0,0.25)",
    backgroundColor: "rgba(5,5,5,0.25)",
    width: "100%",
  },
  style: vs2015,
  wrapLines: true,
};

export default function Introduction() {
  return (
    <div>
      <Heading className="pb-4">All you need is a simple component</Heading>
      <p className="text-2xl text-center">
        Simply import the component in your file and you are ready to go!
      </p>

      <div className="flex flex-col items-center justify-between gap-4 pt-12 xl:flex-row">
        <SyntaxHighlighter {...syntaxHighlighterProps}>
          {codeSnippet}
        </SyntaxHighlighter>
        <img src="/preview.gif" alt="Buttons animations preview GIF" />
      </div>
    </div>
  );
}
