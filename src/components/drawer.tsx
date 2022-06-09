import Navigation from "@components/navigation";

function Drawer() {
  return (
    <aside className="fixed z-40 top-0 left-0 flex flex-col justify-center items-start w-full h-full bg-black">
      <div className="container mx-auto px-24 pt-96">
        <Navigation drawer={true} />
      </div>
    </aside>
  );
}

export default Drawer;