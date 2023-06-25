import React, { useEffect, useRef } from "react";
import About from "./components/About";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import PlanAndPrice from "./components/PlanAndPrice";
import Testmony from "./components/Testmony";
import Aos from "aos";
import "aos/dist/aos.css";
import ScrollUp from "./components/ScrollUp";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const about = useRef();
  const plan = useRef();
  const features = useRef();
  const body = useRef(null);
  return (
    <div className="bg-primary relative" ref={body}>
      <Hero about={about} plan={plan} features={features} />
      <Features ref={features} />
      <About ref={about} />
      <Testmony />
      <PlanAndPrice ref={plan} />
      <Footer />
      <ScrollUp bodyRef={body} />
    </div>
  );
}

export default App;
