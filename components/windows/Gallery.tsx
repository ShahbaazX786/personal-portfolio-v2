import { gallery, photosLinks } from "@/lib/constants/constants";
import useWindowStore from "@/store/window.store";
import { Mail, Search } from "lucide-react";
import Image from "next/image";
import WindowWrapper from "../wrappers/WindowWrapper";
import WindowControls from "./WindowControls";

const Gallery = () => {
  const { openWindow } = useWindowStore();

  return (
    <>
      <div className="window-header photos-header">
        <WindowControls target="photos" />
        <div className="w-full flex justify-end items-center gap-3 text-gray-500">
          <Mail className="icon" />
          <Search className="icon" />
        </div>
      </div>

      <div className="flex w-full">
        <div className="sidebar">
          <h2>Photos</h2>
          <ul>
            {photosLinks.map((link) => (
              <li key={link.id}>
                <Image
                  src={link.icon}
                  alt={link.title}
                  width={100}
                  height={100}
                />
                <p>{link.title}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="gallery">
          <ul className="flex flex-wrap justify-start items-start">
            {gallery.map(({ id, img }) => (
              <li
                key={id}
                onClick={() =>
                  openWindow("imgfile", {
                    id,
                    name: "Gallery Image",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    imageUrl: img,
                  })
                }
                className="cursor-pointer"
              >
                <Image
                  src={img}
                  alt={`Gallery Image ${id}`}
                  width={100}
                  height={100}
                  className="w-auto h-auto"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

const GalleryWindow = WindowWrapper(Gallery, "photos");

export default GalleryWindow;
