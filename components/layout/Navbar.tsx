import { NavbarMenu, navIcons } from "@/lib/constants/constants";
import dayjs from "dayjs";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div>
        <Image
          src={"/images/logo.svg"}
          alt="Apple Logo"
          width={100}
          height={100}
          className="size-4"
        />
        <p className="font-bold">Shahbaaz&apos;s Portfolio</p>
        <ul>
          {NavbarMenu.map(({ id, name }) => (
            <li key={id}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <Image
                src={img}
                className="size-4 icon-hover"
                alt={`icon-${id}`}
                width={100}
                height={100}
              />
            </li>
          ))}
        </ul>
        <time>{dayjs().format("ddd MMM D h:mm A")}</time>
      </div>
    </nav>
  );
};

export default Navbar;
