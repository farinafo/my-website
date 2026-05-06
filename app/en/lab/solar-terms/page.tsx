import type { Metadata } from "next";
import { SolarTermsPageClient } from "@/components/lab/solar-terms/SolarTermsPageClient";
import { getSolarTermsLocalized } from "@/lib/data/solarTerms";

export const metadata: Metadata = {
  title: "Solar Terms",
  description:
    "An AI visual experiment based on the Chinese solar-term calendar, seasonal imagery, and generative image workflows.",
};

export default function EnglishSolarTermsPage() {
  return <SolarTermsPageClient terms={getSolarTermsLocalized("en")} locale="en" />;
}
