"use client";

import { DockApps } from "@/lib/constants/constants";
import Image from "next/image";
import { useRef } from "react";

import { Tooltip } from "react-tooltip";

const BottomDock = () => {
  const dockRef = useRef(null);

  const toggleApp = (app) => {
    console.log(app);
  };

  return (
    <section id="dock">
      <div ref={dockRef} className="dock-container">
        {DockApps.map(({ id, name, icon, canOpen }) => (
          <div key={id} className="relative flex justify-center">
            <button
              type="button"
              className="dock-icon"
              aria-label={name}
              data-tooltip-id={"dock-tooltip"}
              data-tooltip-content={name}
              data-tooltip-delay-show={150}
              disabled={!canOpen}
              onClick={() => toggleApp({ id, canOpen })}
            >
              <Image
                src={`/images/${icon}`}
                width={100}
                height={100}
                alt={`name-button`}
                loading="lazy"
                className={canOpen ? "" : "opacity-60"}
              />
            </button>
          </div>
        ))}
        <Tooltip id="dock-tooltip" place="top" className="tooltip" />
      </div>
    </section>
  );
};

export default BottomDock;
