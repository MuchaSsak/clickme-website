import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import CLICKME_BUTTONS from "../../data/clickmeButtons";
import Buttons from "../components/Preview/Buttons";
import Category from "../components/Preview/Category";
import Section from "../components/Global/Section";
import Heading from "../components/Global/Heading";
import Footer from "../components/Global/Footer";
import Page from "../components/Global/Page";
import NavBar from "../components/Global/NavBar";

export default function Preview() {
  const [search, setSearch] = useState("");
  const [searchParams] = useSearchParams();

  const urlCategory = searchParams.get("category");
  const matchedCategoryButtons = CLICKME_BUTTONS.filter(
    (btn) => btn.category === urlCategory
  );
  const matchedSearchButtons = matchedCategoryButtons.filter((btn) =>
    btn.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Page>
      <NavBar />

      <Section className="gap-8">
        <Heading>Preview of the available button animations 🏃‍♂️</Heading>
        <Category
          buttons={
            search === "" ? matchedCategoryButtons : matchedSearchButtons
          }
          search={search}
          setSearch={setSearch}
        />
        <Buttons
          buttons={
            search === "" ? matchedCategoryButtons : matchedSearchButtons
          }
        />
      </Section>

      <Footer />
    </Page>
  );
}
