"use client";

import useTextAnimator from "@/hooks/useTextAnimator";
import { renderText } from "@/lib/helpers/component-helpers";
import { useRef } from "react";

const Welcome = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useTextAnimator(titleRef as any, {
    type: "weight",
    min: 400,
    max: 900,
    base: 400,
    intensity: 2000,
  });

  useTextAnimator(subtitleRef as any, {
    type: "weight",
    min: 100,
    max: 400,
    base: 100,
    intensity: 2000,
  });

  return (
    <section id="welcome">
      <p ref={subtitleRef}>
        {renderText(
          "Hey, I'm Shahbaaz! Welcome to my",
          "text-3xl font-georama",
          100
        )}
      </p>

      <h1 ref={titleRef} className="mt-7">
        {renderText("portfolio", "text-9xl italic font-georama", 400)}
      </h1>

      <div className="small-screen">
        <p>
          This portfolio is more enjoyable for Desktop / Tablet screens Bruh!
        </p>
        <p>Just open it in yo PC man!</p>
      </div>
    </section>
  );
};

export default Welcome;
