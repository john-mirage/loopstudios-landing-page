import MainNavigation from "@components/main-navigation";
import {useEffect, forwardRef, ForwardedRef} from "react";
import {motion} from "framer-motion";

const Drawer = forwardRef((props, ref: ForwardedRef<HTMLElement>) => {

  useEffect(() => {
    window.scroll(0, 0);
    document.body.classList.add("fixed", "w-full");
    return () => {
      document.body.classList.remove("fixed", "w-full");
      document.body.removeAttribute("class");
    };
  }, []);

  return (
    <aside ref={ref} className="fixed z-40 top-0 left-0 flex flex-col justify-center items-start w-full h-full bg-black">
      <div className="container mx-auto px-24 pt-96">
        <MainNavigation drawer={true} label="main navigation for the drawer" />
      </div>
    </aside>
  );
});

const MotionDrawer = motion(Drawer);

export default MotionDrawer;