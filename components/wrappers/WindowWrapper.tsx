import { WindowKey } from "@/store/types/window.store.type";
import useWindowStore from "@/store/window.store";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/all";
import React, { useLayoutEffect, useRef } from "react";

const WindowWrapper = <P extends object>(
  Component: React.ComponentType<P>,
  windowKey: WindowKey
) => {
  const Wrapped = (props: P) => {
    const windowRef = useRef<HTMLDivElement | null>(null);

    const { windows, focusWindow } = useWindowStore();
    const { zIndex, isOpen } = windows[windowKey];

    // Show Animation
    useGSAP(() => {
      const el = windowRef.current;
      if (!el || !isOpen) return;

      el.style.display = "block";

      gsap.fromTo(
        el,
        { scale: 0.8, opacity: 0, y: 40 },
        { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
      );
    }, [isOpen]);

    // Make window draggable
    useGSAP(() => {
      const el = windowRef.current;
      if (!el) return;

      Draggable.create(el, { onPress: () => focusWindow(windowKey) });
    }, []);

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
