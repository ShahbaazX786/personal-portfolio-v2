import { WindowKey } from "@/store/types/window.store.type";
import useWindowStore from "@/store/window.store";
import clsx from "clsx";
import { Minus, Square, X } from "lucide-react";

const WindowControls = ({
  target,
  icons = false,
}: {
  target: WindowKey;
  icons?: boolean;
}) => {
  const { closeWindow } = useWindowStore();

  return (
    <div id="window-controls">
      <button
        className={clsx("close", icons && "flex justify-center items-center")}
        onClick={() => closeWindow(target)}
      >
        {icons && <X className="w-3 text-white" />}
      </button>
      <button
        className={clsx(
          "minimize",
          icons && "flex justify-center items-center"
        )}
      >
        {icons && <Square className="w-2 text-white" />}
      </button>
      <button
        className={clsx(
          "maximize",
          icons && "flex justify-center items-center"
        )}
      >
        {icons && <Minus className="w-2 text-white" />}
      </button>
    </div>
  );
};

export default WindowControls;
