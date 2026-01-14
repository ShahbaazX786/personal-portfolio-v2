import { NavbarMenu, NavIcons } from "@/lib/constants/constants";
import { WindowKey } from "@/store/types/window.store.type";
import useWindowStore from "@/store/window.store";
import dayjs from "dayjs";
import Image from "next/image";

const Navbar = () => {
  const { openWindow } = useWindowStore();

  return (
    <nav>
      <div>
        <Image
          src={"/icons/logo.svg"}
          alt="Apple Logo"
          width={100}
          height={100}
          className="size-4"
        />
        <p className="font-bold">Shahbaaz&apos;s Portfolio</p>
        <ul>
          {NavbarMenu.map(({ id, name, type }) => (
            <li key={id} onClick={() => openWindow(type as WindowKey)}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {NavIcons.map(({ id, img }) => (
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
