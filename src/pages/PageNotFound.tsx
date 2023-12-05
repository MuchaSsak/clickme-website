import { useNavigate } from "react-router-dom";
import { ClickMe } from "react-clickme";

import Heading from "../components/Global/Heading";
import Navbar from "../components/Global/NavBar";
import Footer from "../components/Global/Footer";
import Page from "../components/Global/Page";
import Section from "../components/Global/Section";

export default function PageNotFound() {
  const navigate = useNavigate();

  return (
    <Page>
      <Navbar />

      <Section className="items-center justify-center gap-4">
        <Heading>Page not found 😢</Heading>
        <ClickMe hoverType="slideToRight" onClick={() => navigate(-1)}>
          Go back
        </ClickMe>
      </Section>

      <Footer />
    </Page>
  );
}
