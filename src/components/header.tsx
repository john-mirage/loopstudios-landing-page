function Header() {
  return (
    <header className="absolute z-50 top-0 left-0 flex flex-row items-end w-full h-20 px-6">
      <div className="container mx-auto flex flex-row justify-between items-center w-full h-auto">
        <h1 className="font-alata text-header font-normal text-white">Loopstudio</h1>
        <button className="flex w-10 h-10 -mr-2 text-white">
          <svg className="w-6 h-auto m-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16">
            <g fill="#FFF" fillRule="evenodd">
              <path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z"/>
            </g>
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;