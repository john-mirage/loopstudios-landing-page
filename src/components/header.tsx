import {motion, AnimatePresence} from "framer-motion";
import MainNavigation from "@components/main-navigation";

interface Props {
  absolute: boolean;
  drawerIsOpen: boolean;
  setDrawerIsOpen: (drawerIsOpen: boolean) => void;
}

function Header({ drawerIsOpen, setDrawerIsOpen }: Props) {

  function toggleDrawer() {
    setDrawerIsOpen(!drawerIsOpen);
  }

  return (
    <header className="absolute z-50 top-0 left-0 pt-32 w-full h-auto">
      <div className="container flex flex-row justify-between items-center mx-auto px-24">
        <h1 className="font-alata text-28 font-normal text-white lg:text-36">loopstudios</h1>
        <button className="relative w-40 h-40 -mr-8 text-white lg:hidden" onClick={toggleDrawer}>
          <AnimatePresence>
            {drawerIsOpen ? (
              <motion.svg
                key="close-icon"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-auto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path fill="currentColor" fillRule="evenodd" d="M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z"/>
              </motion.svg>
            ) : (
              <motion.svg
                key="hamburger-icon"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-auto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 16"
              >
                <g fill="currentColor" fillRule="evenodd">
                  <path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z"/>
                </g>
              </motion.svg>
            )}
          </AnimatePresence>
        </button>
        <div className="hidden lg:block">
          <MainNavigation drawer={false} />
        </div>
      </div>
    </header>
  );
}

export default Header;