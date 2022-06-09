import Header from "@components/header";
import Hero from "@components/hero";
import Presentation from "@components/presentation";
import Projects from "@components/projects";
import Footer from "@components/footer";
import {useState} from "react";
import Drawer from "@components/drawer";

function App() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  return (
    <>
      <Header
        absolute={true}
        drawerIsOpen={drawerIsOpen}
        setDrawerIsOpen={setDrawerIsOpen}
      />
      <Hero />
      <div className="container mx-auto px-24">
        <Presentation />
        <Projects />
      </div>
      <Footer />
      {drawerIsOpen && (
        <Drawer />
      )}
    </>
  );
}

export default App;