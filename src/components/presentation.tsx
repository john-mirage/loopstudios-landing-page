import {useInView} from "react-intersection-observer";
import {motion} from "framer-motion";
import interactiveImageMobile from "@images/mobile/image-interactive.jpg";
import interactiveImageDesktop from "@images/desktop/image-interactive.jpg";

function Presentation() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });

  return (
    <section className="pt-96 pb-92 lg:flex lg:flex-row lg:items-end lg:pt-160 lg:pb-160">
      <motion.picture
        ref={ref}
        initial={{translateX: -80, opacity: 0}}
        animate={inView ? {translateX: 0, opacity: 1} : {translateX: -80, opacity: 0}}
        transition={{duration: 1}}
        className="block mb-40 w-full lg:flex-grow-0 flex-shrink-0 basis-auto lg:w-730 lg:mb-0 lg:mx-0"
      >
        <source srcSet={interactiveImageDesktop} media="(min-width: 768px)" />
        <img src={interactiveImageMobile} alt="" />
      </motion.picture>
      <motion.div
        initial={{translateX: 80, opacity: 0}}
        animate={inView ? {translateX: 0, opacity: 1} : {translateX: 80, opacity: 0}}
        transition={{duration: 1}}
        className="text-center lg:text-left lg:flex-1 lg:bg-white lg:-ml-160 lg:pl-92 lg:pt-92"
      >
        <h3 className="font-josefin text-32 font-light text-black uppercase mb-16 lg:text-48">the leader in interactive vr</h3>
        <p className="font-alata text-15 font-normal text-dark-gray">Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
      </motion.div>
    </section>
  );
}

export default Presentation;