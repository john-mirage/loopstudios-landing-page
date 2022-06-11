import heroImageMobile from "@images/mobile/image-hero.jpg";
import heroImageDesktop from "@images/desktop/image-hero.jpg";

function Hero() {
  return (
    <section className="relative flex w-full h-650">
      <picture className="absolute z-10 top-0 left-0 w-full h-full">
        <source srcSet={heroImageDesktop} media="(min-width: 768px)" />
        <img className="w-full h-full object-cover" src={heroImageMobile} alt="" />
      </picture>
      <div className="relative z-30 container m-auto px-24">
        <div className="w-full px-28 py-24 border-white border-2 lg:w-650">
          <h2 className="font-light text-white uppercase text-title xs:text-40 sm:text-72">immersive experiences that deliver</h2>
        </div>
      </div>
      <div className="hidden md:block md:absolute md:z-20 md:top-0 md:left-0 md:w-full md:h-full md:bg-hero"></div>
    </section>
  );
}

export default Hero;