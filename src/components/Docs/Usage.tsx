import { Link } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ClickMe } from "react-clickme";

import USAGES from "../../../data/docsUsages";

const syntaxHighlighterProps = {
  language: "javascript",
  customStyle: {
    boxShadow: "0 0 1rem rgba(0,0,0,0.25)",
    backgroundColor: "rgb(29,29,29)",
    width: "100%",
  },
  style: vs2015,
  wrapLines: true,
};

export default function Usage() {
  return (
    <div className="flex-grow">
      <h1 className="text-[clamp(1.75rem,5vw,2.25rem)] font-medium">
        Usage/Examples
      </h1>

      {USAGES.map((usage) => (
        <>
          <h3 className="pt-6 pb-2 text-2xl">{usage.name}</h3>
          <SyntaxHighlighter {...syntaxHighlighterProps}>
            {usage.code}
          </SyntaxHighlighter>
        </>
      ))}

      <div className="flex justify-end pt-8">
        <Link to="/docs/installation">
          <ClickMe hoverType="changeColor">&larr; See installation</ClickMe>
        </Link>
      </div>
    </div>
  );
}
