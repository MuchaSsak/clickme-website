import Code from "../Global/Code";

export default function TipParagraph() {
  return (
    <p className="col-span-2 text-xl text-center opacity-50 max-w-[55ch] mx-auto">
      TIP: Please be mindful that this represents only the configuration with
      custom props of the component. You always have the flexibility to pass in
      props the same as you would in a standard button JSX element (e.g.
      <Code>onClick</Code>, <Code>ariaLabel</Code>, <Code>style</Code>...)
    </p>
  );
}
