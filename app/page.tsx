import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Navbar from "./components/Navbar";
import Overview from "./components/Overview";
export default function Home() {
  return (
    <>
    <Navbar />
     <Hero />
     <Overview />
     <Mission />
    </>
  );
}
