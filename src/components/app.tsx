import Header from "@components/header";
import Hero from "@components/hero";
import Presentation from "@components/presentation";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className="container mx-auto px-6">
        <Presentation />
      </div>
    </>
  );
}

export default App;