function Hero() {
  return (
    <section className="relative">
      <img className="w-full h-auto" src="/src/images/mobile/image-hero.jpg" alt=""/>
      <div className="container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6">
        <h2 className="p-6 border-white border-2 text-hero font-light text-white uppercase">
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