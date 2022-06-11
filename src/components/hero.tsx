function Hero() {
  return (
    <section className="relative flex w-full h-650">
      <picture className="absolute z-10 top-0 left-0 w-full h-full">
        <source srcSet="/src/images/desktop/image-hero.jpg" media="(min-width: 1114px)" />
        <img className="w-full h-full object-cover" src="/src/images/mobile/image-hero.jpg" alt="" />
      </picture>
      <div className="relative z-30 container m-auto px-24">
        <div className="w-full px-28 py-24 border-white border-2 lg:w-650">
          <h2 className="font-light text-white uppercase text-title xs:text-40 sm:text-72">immersive experiences that deliver</h2>
        </div>
      </div>
      <div className="hidden lg:block lg:absolute lg:z-20 lg:top-0 lg:left-0 lg:w-full lg:h-full lg:bg-hero"></div>
    </section>
  );
}

export default Hero;