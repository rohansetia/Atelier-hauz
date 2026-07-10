import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

import ProjectHero from "@/app/components/project/ProjectHero";
import ProjectOverview from "@/app/components/project/ProjectOverview";
import ProjectFacts from "@/app/components/project/ProjectFacts";
import ProjectMasterplan from "@/app/components/project/ProjectMasterplan";
import ProjectAmenities from "@/app/components/project/ProjectAmenities";
import ProjectGallery from "@/app/components/project/ProjectGallery";
import ProjectLocation from "@/app/components/project/ProjectLocation";
import ProjectDownloads from "@/app/components/project/ProjectDownloads";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shri Sai Enclave",

  description:
    "Premium residential township featuring wide roads, transparent documentation and excellent investment potential.",

  alternates: {
    canonical:
      "https://atelierhauz.in/projects/shri-sai-enclave",
  },
};

export default function ShriSaiEnclave() {
  return (
    <>
      <Navbar />

      <main className="bg-[#0B0B0B] text-white">
        <ProjectHero />
        <ProjectOverview />
        <ProjectFacts />
        <ProjectMasterplan />
        <ProjectAmenities />
        <ProjectGallery />
        <ProjectLocation />
        <ProjectDownloads />
      </main>

      <Footer />
    </>
  );
}