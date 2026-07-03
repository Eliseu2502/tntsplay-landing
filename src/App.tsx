import Hero from "./components/Hero/Hero";
import Benefits from "./components/Benefits.tsx";
import HowItWorks from "./components/HowItWorks.tsx";
import Audience from "./components/Audience.tsx";
import Faq from "./components/Faq.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <>
      <div className="background-grid"></div>

      <div className="light-left"></div>

      <div className="light-right"></div>

      <Hero />

      <Benefits />

      <HowItWorks />

      <Audience />

      <Faq />

      <Footer />
    </>
  );
}

export default App;