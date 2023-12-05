import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";

import Heading from "../Global/Heading";

const syntaxHighlighterProps = {
  language: "zsh",
  customStyle: {
    boxShadow: "0 0 1rem rgba(0,0,0,0.25)",
    backgroundColor: "rgb(29,29,29)",
    fontSize: "clamp(1.25rem,3vw,1.5rem)",
    borderRadius: "0.5rem",
  },
  style: vs2015,
  wrapLines: true,
};

export default function Installation() {
  return (
    <div>
      <Heading className="pb-4">
        Install locally using a package manager
      </Heading>
      <p className="text-2xl text-center">
        It's as easy as pasting in a single command. It may finish installing
        within seconds or minutes, depending on your internet connection. Works
        on all of your favourite managers.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4 pt-12">
        <SyntaxHighlighter {...syntaxHighlighterProps}>
          npm i react-clickme
        </SyntaxHighlighter>
        <SyntaxHighlighter {...syntaxHighlighterProps}>
          yarn add react-clickme
        </SyntaxHighlighter>
        <SyntaxHighlighter {...syntaxHighlighterProps}>
          bun add react-clickme
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
