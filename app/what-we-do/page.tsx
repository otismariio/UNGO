import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SectionTabs from "@/components/SectionTabs";
import ContentSection from "@/components/ContentSection";
import StackedSection from "@/components/StackedSection";
import WhoWeServe from "@/components/WhoWeServe";
import { whatWeDoNav } from "@/lib/nav-data";

const tabs = whatWeDoNav.items.map((item) => ({
  label: item.title,
  anchor: item.anchor,
}));

export default function WhatWeDoPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Education · Agriculture · Healthcare"
        title="Digital foundations for rural participation."
        description="Affordable ICT centres, practical digital skills, and institution-level capacity building help unlock education, market access, and economic opportunity."
        image="https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=1600&auto=format&fit=crop"
      />
      <SectionTabs pageLabel="What We Do" tabs={tabs} />

      <StackedSection
        id="where-we-work"
        title="Where We Work"
        paragraphs={[
          "Commonwell Trust works in some of the most underserved communities. Our programs are currently being delivered in rural and peri-urban areas, focusing on areas with limited infrastructure, high poverty levels, and strong local partners ready to maximize digital access for community benefit.",
        ]}
        image="https://images.unsplash.com/photo-1517022812141-23620dba5c23?q=80&w=1600&auto=format&fit=crop"
        imageAlt="Community members in front of a program site"
      />

      <WhoWeServe
        id="who-we-serve"
        eyebrow="Students, Families, And Health Workers"
        title="Who We Serve"
        description="We work through rural institutions that are ready to turn infrastructure access into practical community benefit."
        groups={[
          {
            icon: "students",
            title: "Students",
            description:
              "Rural students in under-resourced schools. Our work helps the most underserved youth in rural communities gain hands-on skills aligned with national curriculum, prepare for exams, and access higher education and employment.",
          },
          {
            icon: "farmers",
            title: "Farmer Cooperatives",
            description:
              "Commonwell Trust equips cooperatives with infrastructure and market access tools that enable price transparency, contract negotiation, and crop management.",
          },
          {
            icon: "health",
            title: "Health Workers",
            description:
              "Rural clinics and other health establishments receive the equipment and training to digitize patient records, streamline operations, and improve quality of care.",
          },
        ]}
        ctaLabel="Support Our Work"
        ctaHref="/support"
      />

      <ContentSection
        id="programs"
        eyebrow="Water, Education, And Healthcare"
        title="Programs"
        paragraphs={[
          "Water Access: drilling and rehabilitating wells, and training local technicians to maintain them.",
          "School Infrastructure: building classrooms and supplying learning materials in underserved districts.",
          "Community Health: equipping rural clinics and training community health workers.",
        ]}
        image="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=900&auto=format&fit=crop"
      />

      <ContentSection
        id="what-we-prioritize"
        eyebrow="Access That Actually Gets Used"
        title="What We Prioritize"
        paragraphs={[
          "We fund the training and maintenance plans behind a project as heavily as the construction itself — because a well nobody can repair doesn't stay a well for long.",
          "Every project must have a named local operator and a maintenance budget before it's approved.",
        ]}
        image="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=900&auto=format&fit=crop"
        reverse
      />

      <Footer />
    </main>
  );
}