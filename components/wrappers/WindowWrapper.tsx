import { WindowKey } from "@/store/types/window.store.type";
import useWindowStore from "@/store/window.store";
import React, { useRef } from "react";

const WindowWrapper = <P extends object>(
  Component: React.ComponentType<P>,
  windowKey: WindowKey
) => {
  const Wrapped = (props: P) => {
    const { windows } = useWindowStore();
    const windowRef = useRef<HTMLDivElement | null>(null);

    const win = windows[windowKey];
    if (!win) return null;

    const { zIndex } = windows[windowKey];

    return (
      <section
        id={windowKey}
        ref={windowRef}
        style={{ zIndex }}
        className="absolute"
      >
        <Component {...props} />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${
    Component.displayName || Component.name || "Component"
  })`;
  return Wrapped;
};

export default WindowWrapper;
