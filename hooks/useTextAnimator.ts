import { AnimationConfig } from "@/lib/types/types.hooks";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const useTextAnimator = (
  ref: React.RefObject<HTMLElement> | null,
  config: AnimationConfig
) => {
  useGSAP(() => {
    const container = ref?.current;
    if (!container) return;

    const letters = container.querySelectorAll<HTMLSpanElement>("span");

    const animateLetter = (
      letter: HTMLSpanElement,
      value: number | string,
      duration = 0.25
    ) => {
      if (config.type === "weight") {
        gsap.to(letter, {
          duration,
          ease: "power2.out",
          fontVariationSettings: `'wght' ${value}`,
        });
      } else {
        gsap.to(letter, {
          duration,
          ease: "power2.out",
          color: value,
        });
      }
    };
    const handleMouseMove = (e: MouseEvent) => {
      const { left } = container.getBoundingClientRect();
      const mouseX = e.clientX - left;

      letters.forEach((letter) => {
        const { left: l, width: w } = letter.getBoundingClientRect();
        const distance = Math.abs(mouseX - (l - left + w / 2));

        const intensity = Math.exp(-(distance ** 2) / config.intensity);

        if (config.type === "weight") {
          const { min, max } = config;
          animateLetter(letter, min + (max - min) * intensity);
        } else {
          const { from, to } = config;
          const color = gsap.utils.interpolate(from, to, intensity);
          animateLetter(letter, color);
        }
      });
    };

    const handleMouseLeave = () => {
      letters.forEach((letter) => {
        if (config.type === "weight") {
          animateLetter(letter, config.base ?? 400, 0.3);
        } else {
          animateLetter(letter, config.base ?? config.from, 0.3);
        }
      });
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
};

export default useTextAnimator;
