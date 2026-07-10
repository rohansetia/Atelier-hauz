import { Building2, Compass, Landmark, PencilRuler, Map } from "lucide-react";
import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import Card from "./ui/Card";

const services = [
  {
    icon: Building2,
    title: "Residential Plot Development",
    description:
      "Thoughtfully planned residential layouts designed for modern living and long-term value.",
  },
  {
    icon: Landmark,
    title: "Township Development",
    description:
      "Integrated communities with infrastructure, amenities, and sustainable planning.",
  },
  {
    icon: Map,
    title: "Land Investment",
    description:
      "Strategic land opportunities with a focus on growth, appreciation, and transparency.",
  },
  {
    icon: PencilRuler,
    title: "Project Planning",
    description:
      "Expert planning and consulting from concept to execution for every development.",
  },
  {
    icon: Compass,
    title: "Architecture & Design",
    description:
      "Elegant architectural solutions that combine functionality with timeless aesthetics.",
  },
];

export default function Services() {
  return (
    <section className="bg-[#0B0B0B] py-28">
      <Container>

        <SectionTitle
          eyebrow="Our Services"
          title="Building Value Through Intelligent Development"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Card key={service.title}>
                <Icon
                  size={42}
                  className="mb-6 text-[#C8A56B]"
                />

                <h3 className="mb-4 text-2xl font-semibold text-white">
                  {service.title}
                </h3>

                <p className="leading-8 text-gray-400">
                  {service.description}
                </p>
              </Card>
            );
          })}

        </div>

      </Container>
    </section>
  );
}