interface Props {
  drawer: boolean;
}

const links = [
  "About",
  "Careers",
  "Events",
  "Products",
  "Support",
];

function MainNavigation({ drawer }: Props) {
  return (
    <nav>
      <ul className={`flex flex-col text-white ${drawer
        ? "items-start font-josefin text-24 uppercase font-light space-y-20"
        : "items-center font-alata text-15 font-normal space-y-16 lg:flex-row lg:space-y-0 lg:space-x-32"
      }`}>
        {links.map((link, index) => (
          <li className="relative" key={String(index)}>
            <a className="peer" href="#">{link}</a>
            <div className={`absolute -bottom-8 translate-y-full h-2 bg-white transition-opacity opacity-0 peer-hover:opacity-100 ${drawer ? "w-full left-0" : "w-1/2 left-1/2 -translate-x-1/2"}`}></div>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MainNavigation;