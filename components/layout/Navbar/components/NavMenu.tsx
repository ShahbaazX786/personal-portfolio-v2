"use client";

import useTextAnimator from "@/hooks/useTextAnimator";
import { NavbarMenu } from "@/lib/constants/constants";
import { socials } from "@/lib/constants/SocialConstants";
import { renderText } from "@/lib/helpers/component-helpers";
import { WindowKey } from "@/store/types/window.store.type";
import useWindowStore from "@/store/window.store";
import Link from "next/link";
import { useRef } from "react";

const NavMenu = () => {
  const { openWindow } = useWindowStore();
  const BrandNameRef = useRef<HTMLParagraphElement | null>(null);

  useTextAnimator(BrandNameRef as any, {
    type: "color",
    from: "#000000",
    to: "#FFFFFF",
    base: "#000000",
    intensity: 1000,
  });

  return (
    <div>
      <Link href={socials[3].link} target="_blank" rel="noopener noreferrer">
        <p className="font-bold" ref={BrandNameRef}>
          {renderText("Shaik Shahbaaz Alam", "text-lg font-georama", 500)}
        </p>
      </Link>
      <ul>
        {NavbarMenu.map(({ id, name, type }) => (
          <li
            key={id}
            className="hover:scale-110 transition-all ease-in-out font-semibold"
            onClick={() => openWindow(type as WindowKey)}
          >
            <p>{name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavMenu;
