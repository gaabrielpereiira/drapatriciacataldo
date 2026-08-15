import { createFileRoute } from "@tanstack/react-router";
import HeroPromessa from "../components/sections/HeroPromessa";
import DorReconhecimento from "../components/sections/DorReconhecimento";
import Oportunidade from "../components/sections/Oportunidade";
import ParaQuemE from "../components/sections/ParaQuemE";
import Autoridade from "../components/sections/Autoridade";
import CTAFinal from "../components/sections/CTAFinal";

import FixedCTABar from "../components/FixedCTABar";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pati Concept Club · Grupo VIP — Dra. Patrícia Cataldo" },
      {
        name: "description",
        content:
          "Entre no Grupo VIP e conheça em primeira mão o Pati Concept Club, o plano anual de toxina botulínica da Dra. Patrícia Cataldo. Condição especial para as primeiras integrantes.",
      },
      { property: "og:title", content: "Pati Concept Club · Grupo VIP — Dra. Patrícia Cataldo" },
      {
        property: "og:description",
        content:
          "Entre no Grupo VIP e conheça em primeira mão o Pati Concept Club, o plano anual de toxina botulínica da Dra. Patrícia Cataldo. Condição especial para as primeiras integrantes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-bg">
      <HeroPromessa />
      <DorReconhecimento />
      <Oportunidade />
      <ParaQuemE />
      <Autoridade />
      <CTAFinal />

      <FixedCTABar />
    </main>
  );
}
