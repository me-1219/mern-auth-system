import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import AuthFlow from "../components/AuthFlow";
import SecurityTimeline from "../components/SecurityTimeline";
import TechStack from "../components/TechStack";
import GitHubShowcase from "../components/GitHubShowcase";
import APIDocs from "../components/APIDocs";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import OpenSource from "../components/OpenSource";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function LandingPage() {
return ( <div className="bg-[#070B14] text-white overflow-x-hidden"> <Navbar />

```
  <main>
    <Hero />

    <Features />

    <AuthFlow />

    <SecurityTimeline />

    <TechStack />

    <GitHubShowcase />

    <APIDocs />

    <Testimonials />

    <FAQ />

    <OpenSource />

    <CTA />
  </main>

  <Footer />
</div>


);
}
