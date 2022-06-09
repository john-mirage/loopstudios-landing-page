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
    <section className="text-center pb-96">
      <h3 className="font-josefin text-h3 font-light text-black uppercase mb-48">our creations</h3>
      <div>
        {projects.map((project, index) => (
          <div className="relative w-full h-120 mb-24 last:mb-0" key={String(index)}>
            <img className="absolute z-10 top-0 left-0 w-full h-full object-cover" src={project.imageMobile} alt={project.text}/>
            <div className="relative z-30 flex items-end w-full h-full bg-gradient-to-r from-overlay to-transparent px-20 py-24 text-left">
              <p className="w-132 font-josefin text-h4 font-light text-white uppercase">{project.text}</p>
            </div>
          </div>
        ))}
        <button className="w-156 h-40 border-2 border-black font-alata text-button tracking-button text-black uppercase">see all</button>
      </div>
    </section>
  );
}

export default Projects;