import { useLocation } from "react-router-dom";

import DocumentationList from "../components/Docs/DocumentationList";
import Installation from "../components/Docs/Installation";
import Usage from "../components/Docs/Usage";
import Footer from "../components/Global/Footer";
import Navbar from "../components/Global/NavBar";
import Page from "../components/Global/Page";
import Section from "../components/Global/Section";

const baseRoute = "/docs";

export default function Docs() {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <Page>
      <Navbar />

      <Section className="flex-row justify-center block xl:flex">
        <DocumentationList />

        <>
          {pathname === `${baseRoute}/installation` && <Installation />}
          {pathname === `${baseRoute}/usage` && <Usage />}
        </>
      </Section>

      <Footer />
    </Page>
  );
}
