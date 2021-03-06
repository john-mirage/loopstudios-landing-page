import deepEarthMobile from "@images/mobile/image-deep-earth.jpg";
import nightArcadeMobile from "@images/mobile/image-night-arcade.jpg";
import soccerTeamMobile from "@images/mobile/image-soccer-team.jpg";
import gridMobile from "@images/mobile/image-grid.jpg";
import fromAboveMobile from "@images/mobile/image-from-above.jpg";
import pocketBorealisMobile from "@images/mobile/image-pocket-borealis.jpg";
import curiosityMobile from "@images/mobile/image-curiosity.jpg";
import fisheyeMobile from "@images/mobile/image-fisheye.jpg";
import deepEarthDesktop from "@images/desktop/image-deep-earth.jpg";
import nightArcadeDesktop from "@images/desktop/image-night-arcade.jpg";
import soccerTeamDesktop from "@images/desktop/image-soccer-team.jpg";
import gridDesktop from "@images/desktop/image-grid.jpg";
import fromAboveDesktop from "@images/desktop/image-from-above.jpg";
import pocketBorealisDesktop from "@images/desktop/image-pocket-borealis.jpg";
import curiosityDesktop from "@images/desktop/image-curiosity.jpg";
import fisheyeDesktop from "@images/desktop/image-fisheye.jpg";
import Project from "@components/project";

const projects = [
  {
    imageMobile: deepEarthMobile,
    imageDesktop: deepEarthDesktop,
    text: "deep earth",
  },
  {
    imageMobile: nightArcadeMobile,
    imageDesktop: nightArcadeDesktop,
    text: "night arcade",
  },
  {
    imageMobile: soccerTeamMobile,
    imageDesktop: soccerTeamDesktop,
    text: "soccer team vr",
  },
  {
    imageMobile: gridMobile,
    imageDesktop: gridDesktop,
    text: "the grid",
  },
  {
    imageMobile: fromAboveMobile,
    imageDesktop: fromAboveDesktop,
    text: "from up above vr",
  },
  {
    imageMobile: pocketBorealisMobile,
    imageDesktop: pocketBorealisDesktop,
    text: "pocket borealis",
  },
  {
    imageMobile: curiosityMobile,
    imageDesktop: curiosityDesktop,
    text: "the curiosity",
  },
  {
    imageMobile: fisheyeMobile,
    imageDesktop: fisheyeDesktop,
    text: "make it fisheye",
  },
];

function Projects() {
  return (
    <section className="text-center pb-96 lg:flex lg:flex-row lg:justify-between lg:items-center lg:flex-wrap lg:text-left lg:pb-180">
      <h3 className="font-josefin text-32 font-light text-black uppercase mb-48 lg:order-1 lg:flex-1 lg:mb-0 lg:text-48">our creations</h3>
      <div className="space-y-24 mb-32 md:grid md:grid-cols-2 md:gap-28 md:space-y-0 lg:grid-cols-4 lg:order-3 lg:w-full lg:mb-0 lg:mt-80">
        {projects.map((project, index) => (
          <Project project={project} key={String(index)} />
        ))}
      </div>
      <button className="block w-156 mx-auto h-40 border-2 border-black font-alata text-16 tracking-05 text-black uppercase lg:order-2 transition-colors hover:text-white hover:bg-black lg:mx-0">see all</button>
    </section>
  );
}

export default Projects;