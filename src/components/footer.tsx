import MainNavigation from "@components/main-navigation";
import SocialNavigation from "@components/social-navigation";

function Footer() {
  return (
    <footer className="w-full h-auto bg-black py-48">
      <div className="container mx-auto px-24 text-center text-white lg:h-96 lg:flex lg:flex-row lg:items-center lg:flex-wrap">
        <p className="font-alata text-28 font-normal mb-24 lg:order-1 lg:w-1/2 lg:text-left lg:mb-0">loopstudios</p>
        <div className="mb-40 lg:order-3 lg:w-1/2 lg:mb-0">
          <MainNavigation drawer={false} />
        </div>
        <SocialNavigation />
        <p className="text-15 font-normal text-dark-gray lg:order-4 lg:w-1/2 lg:text-right">&copy; 2021 Loopstudios. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;