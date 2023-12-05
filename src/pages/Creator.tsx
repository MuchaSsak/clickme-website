import { CreatorContextProvider } from "../context/CreatorContext";
import Navbar from "../components/Global/NavBar";
import Section from "../components/Global/Section";
import Heading from "../components/Global/Heading";
import TipParagraph from "../components/Preview/TipParagraph";
import Footer from "../components/Global/Footer";
import Page from "../components/Global/Page";
import Panel from "../components/Creator/Panel";
import CodeSnippet from "../components/Creator/CodeSnippet";
import Result from "../components/Creator/BtnResult";

export default function Creator() {
  return (
    <CreatorContextProvider>
      <Page>
        <Navbar />

        <Heading>Customize your ClickMe button graphically ⚙️</Heading>
        <Section className="grid grid-cols-2 gap-4 px-0">
          <Panel />
          <CodeSnippet />
          <Result />
          <TipParagraph />
        </Section>

        <Footer />
      </Page>
    </CreatorContextProvider>
  );
}
