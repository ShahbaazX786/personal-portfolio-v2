import useWindowStore from "@/store/window.store";
import Image from "next/image";
import WindowWrapper from "../wrappers/WindowWrapper";
import WindowControls from "./WindowControls";

const ImageComponent = () => {
  const { windows } = useWindowStore();
  const data = windows.imgfile?.data;

  if (!data) return null;

  const { name, imageUrl } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <h2>{name}</h2>
      </div>

      <div className="p-5 bg-white">
        {imageUrl ? (
          <div className="w-full">
            <Image
              src={imageUrl}
              alt={name}
              width={100}
              height={100}
              unoptimized
              className="w-full h-auto object-contain max-h-[70vh] rounded"
            />
          </div>
        ) : null}
      </div>
    </>
  );
};

const ImageWindow = WindowWrapper(ImageComponent, "imgfile");

export default ImageWindow;
