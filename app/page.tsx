import Nav from "../components/Nav";
import Hero from "../components/Hero";
import SocialProof from "../components/SocialProof";
import HowItWorks from "../components/HowItWorks";
import TerritoryPacks from "../components/TerritoryPacks";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import RequestForm from "../components/RequestForm";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1">
        <Hero />
        <SocialProof />
        <HowItWorks />
        <TerritoryPacks />
        <Pricing />
        <FAQ />
        <RequestForm />
      </main>
      <Footer />
    </div>
  );
}