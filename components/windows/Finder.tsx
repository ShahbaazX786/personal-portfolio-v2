import { Search } from "lucide-react";
import WindowWrapper from "../wrappers/WindowWrapper";
import WindowControls from "./WindowControls";
import { locations } from "@/lib/constants/constants";
import useLocationStore from "@/store/location.store";
import Image from "next/image";
import clsx from "clsx";

const Finder = () => {
  const { activeLocation, setActiveLocation } = useLocationStore();
  return (
    <>
      <div id="window-header">
        <WindowControls target="finder" />
        <Search className="icon" />
      </div>

      <div className="bg-white flex h-full">
        <div className="sidebar">
          <div>
            <h3>Favorites</h3>
            <ul>
              {Object.values(locations).map((item) => (
                <li
                  key={item.id}
                  onClick={() => setActiveLocation(item)}
                  className={clsx(
                    item.id === activeLocation.id ? "active" : "not-active"
                  )}
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="w-4"
                  />
                  <p className="text-sm font-medium truncate">{item.name}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Work</h3>
            <ul>...</ul>
          </div>
        </div>
      </div>
    </>
  );
};

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;
