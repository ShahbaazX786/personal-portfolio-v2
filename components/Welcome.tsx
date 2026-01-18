"use client";

import useTextAnimator from "@/hooks/useTextAnimator";
import { renderText } from "@/lib/helpers/component-helpers";
import { useRef } from "react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

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
          100,
        )}
      </p>

      <h1 ref={titleRef} className="mt-7">
        {renderText("portfolio", "text-9xl italic font-georama", 400)}
      </h1>

      <div className="sm:hidden small-screen w-full h-full flex justify-center items-center z-50">
        <Alert variant="destructive">
          {/* <Terminal /> */}
          <AlertTitle className="font-bold text-lg">Heads up!</AlertTitle>
          <AlertDescription className="text-base">
            <ol className="pl-4">
              <li className="list-disc">
                This portfolio is more enjoyable on{" "}
                <strong>Desktop / Tablet</strong> screens Bruh!
              </li>
              <li className="list-disc">
                So either use <strong>bigger devices</strong> or turn on{" "}
                <strong>desktop view</strong> in your mobile browser.
              </li>
            </ol>
          </AlertDescription>
        </Alert>
      </div>
    </section>
  );
};

export default Welcome;
