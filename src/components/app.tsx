import Header from "@components/header";
import Hero from "@components/hero";
import Presentation from "@components/presentation";
import Projects from "@components/projects";
import Footer from "@components/footer";
import {useState} from "react";
import Drawer from "@components/drawer";
import { AnimatePresence } from "framer-motion";

function App() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  return (
    <>
      <Header
        absolute={true}
        drawerIsOpen={drawerIsOpen}
        setDrawerIsOpen={setDrawerIsOpen}
      />
      <main>
        <Hero />
        <div className="container mx-auto px-24">
          <Presentation />
          <Projects />
        </div>
      </main>
      <Footer />
      <AnimatePresence>
        {drawerIsOpen && (
          <Drawer
            key="drawer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default App;