interface Props {
  absolute: boolean;
  drawerIsOpen: boolean;
  setDrawerIsOpen: (drawerIsOpen: boolean) => void;
}

function Header({ absolute, drawerIsOpen, setDrawerIsOpen }: Props) {

  function toggleDrawer() {
    setDrawerIsOpen(!drawerIsOpen);
  }

  return (
    <header className="absolute z-50 top-0 left-0 container mx-auto pt-32 px-24 flex flex-row justify-between items-center w-full h-auto">
      <h1 className="font-alata text-h1 font-normal text-white">loopstudios</h1>
      <button className="flex w-40 h-40 -mr-8 text-white" onClick={toggleDrawer}>
        {drawerIsOpen ? (
          <svg className="w-24 h-auto m-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path fill="currentColor" fillRule="evenodd" d="M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z"/>
          </svg>
        ) : (
          <svg className="w-24 h-auto m-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16">
            <g fill="#FFF" fillRule="evenodd">
              <path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z"/>
            </g>
          </svg>
        )}
      </button>
    </header>
  );
}

export default Header;