import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";

interface Props {
  project: {
    imageMobile: string;
    imageDesktop: string;
    text: string;
  }
}

function Project({ project }: Props) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });

  return (
    <div className="relative w-full pb-[40%] lg:pb-0 lg:h-450">
      <picture className="absolute z-10 top-0 left-0 w-full h-full">
        <source srcSet={project.imageDesktop} media="(min-width: 1114px)" />
        <img className="w-full h-full object-cover" src={project.imageMobile} alt={project.text} />
      </picture>
      <div className="absolute z-20 top-0 left-0 flex items-end w-full h-full bg-gradient-to-r from-overlay to-transparent px-20 py-24 text-left lg:bg-gradient-to-t">
        <motion.p
          ref={ref}
          className="w-132 font-josefin text-h4 font-light text-white uppercase"
          animate={inView ? {opacity: 1, translateY: 0} : {opacity: 0, translateY: "100%"}}
          transition={{ duration: 1 }}
        >{project.text}</motion.p>
      </div>
    </div>
  );
}

export default Project;