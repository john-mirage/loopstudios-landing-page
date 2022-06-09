function Hero() {
  return (
    <section className="relative flex w-full h-650 min-h-screen">
      <img className="absolute z-10 top-0 left-0 w-full h-full object-cover" src="/src/images/mobile/image-hero.jpg" alt=""/>
      <div className="relative z-30 container m-auto px-24">
        <h2 className="px-28 py-24 border-white border-2 text-h2 font-light text-white uppercase">
          <span className="block">immersive</span>
          <span className="block">experiences</span>
          <span className="block">that</span>
          <span className="block">deliver</span>
        </h2>
      </div>
    </section>
  );
}

export default Hero;