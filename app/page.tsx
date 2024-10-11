import Docs from "./components/Docs";
import Hero from "./components/Hero";
import Industry from "./components/Industry";
import Mission from "./components/Mission";
import Navbar from "./components/Navbar";
import Overview from "./components/Overview";
import Product from "./components/Product";
import Progress from "./components/Progress";
import Update from "./components/Update";
export default function Home() {
  return (
    <>
    <Navbar />
     <Hero />
     <Overview />
     <Mission />
     <Industry />
     <Product />
     <Progress />
     <Docs />
     <Update />
    </>
  );
}
