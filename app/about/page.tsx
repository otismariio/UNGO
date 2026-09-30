import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SectionTabs from "@/components/SectionTabs";
import ContentSection from "@/components/ContentSection";
import MissionVisionValues from "@/components/MissionVisionValues";
import { aboutNav } from "@/lib/nav-data";

const tabs = aboutNav.items.map((item) => ({
  label: item.title,
  anchor: item.anchor,
}));

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Founded in 2011 · Currently operating in 4 countries"
        title="14 years promoting digital and economic inclusion."
        description="We exist so rural schools, farmer cooperatives, and health facilities can access the tools, connectivity, and skills they need to thrive."
        image="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1600&auto=format&fit=crop"
      />
      <SectionTabs pageLabel="About Us" tabs={tabs} />

      <MissionVisionValues
        id="mission-vision-values"
        title="Mission, vision and values"
        mission={{
          heading: "Our mission",
          text: "To empower vulnerable women, single mothers, and youth in Uganda through vocational skills training, education, nutrition, childcare, and psychosocial support, enabling families to achieve self‑reliance and long‑term stability.",
        }}
        vision={{
          heading: "Our vision",
          text: "Communities where women and youth are economically independent, children are safe and educated, and families thrive with dignity and hope.",
        }}
        valuesHeading="Our Values"
        values={[
          {
            icon: "check",
            title: "Human Dignity",
            description: "Every person deserves opportunity, safety, and respect.",
          },
          {
            icon: "check",
            title: "Holistic Care",
            description:
              "Sustainable change addresses economic, emotional, and family needs together.",
          },
          {
            icon: "check",
            title: "Empowerment",
            description: "Skills and knowledge are pathways to independence.",
          },
          {
            icon: "check",
            title: "Compassion",
            description: "We respond to vulnerability with empathy and action.",
          },
          {
            icon: "check",
            title: "Community",
            description: "Strong families build resilient communities.",
          },
        ]}
      />

      <ContentSection
        id="history"
        eyebrow="From 2011 To Today"
        title="History"
        paragraphs={[
          "Commonwell Trust began with a single well, funded by a small group of engineers who'd spent a summer volunteering abroad and came home determined to keep going.",
          "Fourteen years later, that same instinct. Build it, hand it over, keep showing up, still shapes every project we take on.",
        ]}
        image="https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=900&auto=format&fit=crop"
        reverse
      />

      <ContentSection
        id="theory-of-change"
        eyebrow="How Access Becomes Opportunity"
        title="Theory of Change"
        paragraphs={[
          "If CHS provides vulnerable single mothers and youth with daily nutrition, childcare, primary education, sexual education, psychosocial support, and comprehensive vocational skills training aligned with market needs…",
          "AND equips graduates with entrepreneurship training, financial literacy to launch microbusinesses…",
          "THEN women will gain employable skills, start small enterprises, earn income, and care for their children, while children receive consistent nutrition and education in a safe environment…",
          "SO THAT families break cycles of poverty, reduce crisis-driven harm, and build stable, resilient, and empowered futures across generations.",
        ]}
        image="https://images.unsplash.com/photo-1497486751825-1233686d5d80?q=80&w=900&auto=format&fit=crop"
      />

      <ContentSection
        id="team"
        eyebrow="Leadership Across Every Region"
        title="Our Team"
        paragraphs={[
          "Our field teams are hired and led locally in every country we operate in, because lasting infrastructure needs people who already understand the ground it's built on.",
          "Our head office handles funding, reporting, and partnerships so field teams can stay focused on delivery.",
        ]}
        image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=900&auto=format&fit=crop"
        reverse
      />

      <Footer />
    </main>
  );
}