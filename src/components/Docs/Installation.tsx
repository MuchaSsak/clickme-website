import { Link } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ClickMe } from "react-clickme";

import Code from "../Global/Code";

const syntaxHighlighterProps = {
  language: "zsh",
  customStyle: {
    boxShadow: "0 0 1rem rgba(0,0,0,0.25)",
    backgroundColor: "rgb(29,29,29)",
  },
  style: vs2015,
  wrapLines: true,
};

export default function Installation() {
  return (
    <div className="flex-grow">
      <h1 className="text-[clamp(1.75rem,5vw,2.25rem)] font-medium">
        Installation
      </h1>

      <p className="py-2 text-xl">
        You can install the ClickMe library using all of your favourite package
        managers, e.g.:
      </p>

      <ul className="flex flex-col gap-6 pt-4 text-xl">
        <li className="flex flex-col gap-2">
          <span>
            - Using <Code>npm</Code>
          </span>
          <SyntaxHighlighter {...syntaxHighlighterProps}>
            npm i react-clickme
          </SyntaxHighlighter>
        </li>
        <li className="flex flex-col gap-2">
          <span>
            - Using <Code>yarn</Code>
          </span>
          <SyntaxHighlighter {...syntaxHighlighterProps}>
            yarn add react-clickme
          </SyntaxHighlighter>
        </li>
        <li className="flex flex-col gap-2">
          <span>
            - Using <Code>bun</Code>
          </span>
          <SyntaxHighlighter {...syntaxHighlighterProps}>
            bun add react-clickme
          </SyntaxHighlighter>
        </li>
      </ul>

      <div className="flex justify-end pt-8">
        <Link to="/docs/usage">
          <ClickMe hoverType="changeColor">See Usage/Examples &rarr;</ClickMe>
        </Link>
      </div>
    </div>
  );
}
