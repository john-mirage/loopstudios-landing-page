interface Props {
  drawer: boolean;
}

function Navigation({ drawer }: Props) {
  return (
    <nav>
      <ul className={`flex flex-col text-white ${drawer
        ? "items-start font-josefin text-h4 uppercase font-light space-y-20"
        : "items-center font-alata text-p font-normal space-y-16 lg:flex-row lg:space-y-0 lg:space-x-32"
      }`}>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Careers</a>
        </li>
        <li>
          <a href="#">Events</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;