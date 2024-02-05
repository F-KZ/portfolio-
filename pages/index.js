import dynamic from "next/dynamic";
import Head from "next/head";
//import { CommentSection } from "../src/components/comment";
import { DrawSection } from "../src/components/draw";
import { Footer } from "../src/components/Footer";
import { Header } from "../src/components/Header";
import { HeroSection } from "../src/components/hero";
import { ProjectSection } from "../src/components/project";
import { Skills } from "../src/components/skills";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// dynamic import Memory Section
const DynamicMemorySection = dynamic(() => import("../src/components/memory"), {
  ssr: false,
});

const Home = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
     
        <Header />
        <HeroSection />
        <div className="flex flex-col sm:gap-16 md:gap-40 pt-32">
        <Skills/>
        <ProjectSection />
        <DynamicMemorySection />
        <Footer />
      </div>
    </>
  );
};

export default Home;
