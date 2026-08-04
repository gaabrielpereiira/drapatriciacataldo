import { createFileRoute } from "@tanstack/react-router";
import HeroPromessa from "../components/sections/HeroPromessa";
import FixedCTABar from "../components/FixedCTABar";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Club do Botox · Grupo VIP — Dra. Patrícia Cataldo" },
      {
        name: "description",
        content:
          "Entre no grupo VIP do Club do Botox da Dra. Patrícia Cataldo e garanta a condição de fundadora dos 7 anos da clínica.",
      },
      { property: "og:title", content: "Club do Botox · Grupo VIP" },
      {
        property: "og:description",
        content:
          "Sua pele descansada o ano inteiro, sem ter que lembrar da sua toxina. Condição de fundadora por tempo limitado.",
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
      <FixedCTABar />
    </main>
  );
}
