import { Card } from "../../components/Card/Card";

const card1 = {
  cardIcon: "bi bi-collection",
  title: "Fresh new layout",
  description:
    "With Bootstrap 5, we've created a fresh new layout for this template!",
};

const card2 = {
  cardIcon: "bi bi-cloud-download",
  title: "Free to download",
  description:
    "As always, Start Bootstrap has a powerful collecting of free templates.",
};

const card3 = {
  cardIcon: "bi bi-card-heading",
  title: "Jumbotron hero header",
  description: "The heroic part of this template is the jumbotron hero header!",
};

const card4 = {
  cardIcon: "bi bi-bootstrap",
  title: "Feature boxes",
  description: "We've created some custom feature boxes using Bootstrap icons!",
};

const card5 = {
  cardIcon: "bi bi-code",
  title: "Simple clean code",
  description:
    "We keep our dependencies up to date and squash bugs as they come!",
};

const card6 = {
  cardIcon: "bi bi-patch-check",
  title: "A name you trust",
  description:
    "Start Bootstrap has been the leader in free Bootstrap templates since 2013!",
};

const features = [card1, card2, card3, card4, card5, card6];

export const Features = () => (
  <>
    <section className="pt-4">
      <div className="container px-lg-5">
        <div className="row gx-lg-5">
          {features.map((feature) => (
            <>
              <div className="col-lg-6 col-xxl-4 mb-5">
                <Card {...feature} />
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  </>
);
