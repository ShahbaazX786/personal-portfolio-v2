import { locations } from "@/lib/constants/constants";
import useLocationStore from "@/store/location.store";
import useWindowStore from "@/store/window.store";
import clsx from "clsx";
import { Search } from "lucide-react";
import Image from "next/image";
import WindowWrapper from "../wrappers/WindowWrapper";
import WindowControls from "./WindowControls";

const Finder = () => {
  const { activeLocation, setActiveLocation } = useLocationStore();
  const { openWindow } = useWindowStore();
  const Locations = Object.values(locations);
  const ProjectWork = locations.work.children;

  const openItem = (item: any) => {
    if (item.fileType === "pdf") return openWindow("resume");
    if (item.kind === "folder") return setActiveLocation(item);
    if (["fig", "url"].includes(item.fileType) && item.href)
      return window.open(item.href, "_blank");

    openWindow(`${item.fileType}${item.kind}` as any, item);
  };

  const renderList = (
    title: string,
    items: typeof Locations | typeof ProjectWork
  ) => {
    return (
      <div>
        <h3>{title}</h3>
        <ul>
          {items.map((item: any) => (
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
    );
  };

  return (
    <>
      <div id="window-header">
        <WindowControls target="finder" />
        <Search className="icon" />
      </div>

      <div className="bg-white flex h-full">
        <div className="sidebar">
          {renderList("Favorites", Locations)}
          {renderList("My Projects", ProjectWork)}
        </div>
        <ul className="content">
          {activeLocation?.children?.map((item: any) => (
            <li
              key={item.id}
              className={item?.position}
              onClick={() => openItem(item)}
            >
              <Image
                src={item.icon}
                alt={item.name}
                width={100}
                height={100}
                className="w-auto"
              />
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;
