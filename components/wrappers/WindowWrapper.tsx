import { WindowKey } from "@/store/types/window.store.type";
import useWindowStore from "@/store/window.store";
import React, { useLayoutEffect, useRef } from "react";

const WindowWrapper = <P extends object>(
  Component: React.ComponentType<P>,
  windowKey: WindowKey
) => {
  const Wrapped = (props: P) => {
    const windowRef = useRef<HTMLDivElement | null>(null);

    const { windows } = useWindowStore();
    const { zIndex, isOpen } = windows[windowKey];

    useLayoutEffect(() => {
      const el = windowRef.current;
      if (!el) return;
      el.style.display = isOpen ? "block" : "none";
    });

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
