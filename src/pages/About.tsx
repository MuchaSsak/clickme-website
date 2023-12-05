import Hero from "../components/About/Hero";
import Installation from "../components/About/Installation";
import Introduction from "../components/About/Introduction";
import Limitations from "../components/About/Limitations";
import Footer from "../components/Global/Footer";
import Navbar from "../components/Global/NavBar";
import Page from "../components/Global/Page";
import Section from "../components/Global/Section";

export default function About() {
  return (
    <Page>
      <Navbar />

      <Section>
        <Hero />
        <Introduction />
        <Limitations />
        <Installation />
      </Section>

      <Footer />
    </Page>
  );
}
