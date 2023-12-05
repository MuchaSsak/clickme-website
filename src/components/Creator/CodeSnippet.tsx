import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ClickMe } from "react-clickme";

import { useCreatorContext } from "../../hooks/useCreatorContext";

const syntaxHighlighterProps = {
  language: "javascript",
  customStyle: {
    boxShadow: "0 0 1rem rgba(0,0,0,0.25)",
    backgroundColor: "rgba(5,5,5,0.25)",
  },
  style: vs2015,
  wrapLines: true,
};

const defaultClickMeProps = {
  hoverType: "invert",
  clickType: "rubberBand",
  style: {
    width: "fit-content",
    padding: "0.75rem",
    position: "absolute",
    right: "-1rem",
    top: "-0.5rem",
    margin: "clamp(1rem,5vw,4rem)",
  } as React.CSSProperties,
};

export default function CodeSnippet() {
  const { changedProps } = useCreatorContext();

  const codeSnippet = `const clickmeProps = ${JSON.stringify(changedProps)};

<ClickMe {...clickmeProps}>Example text</ClickMe>`;
  const clickmeBtnProps = {
    ...defaultClickMeProps,
    onClick: () => navigator.clipboard.writeText(codeSnippet),
  };

  return (
    <div className="flex flex-col justify-center col-span-2 gap-4 px-[clamp(1rem,5vw,4rem)] py-8 rounded-md xl:col-span-1 bg-slate-800 relative">
      <ClickMe {...clickmeBtnProps}>
        <CopyIcon />
      </ClickMe>
      <SyntaxHighlighter {...syntaxHighlighterProps}>
        {codeSnippet}
      </SyntaxHighlighter>
    </div>
  );
}

function CopyIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="16">
      <path d="M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z" />
    </svg>
  );
}
