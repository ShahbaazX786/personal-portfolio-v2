"use client";

import BottomDock from "@/components/layout/BottomDock";
import Navbar from "@/components/layout/Navbar";
import Welcome from "@/components/Welcome";
import CommandCLI from "@/components/windows/cmd";
import ContactWindow from "@/components/windows/Contact";
import FinderWindow from "@/components/windows/Finder";
import ImageWindow from "@/components/windows/Image";
import ResumeWindow from "@/components/windows/Resume";
import SafariWindow from "@/components/windows/SafariBrowser";
import TextWindow from "@/components/windows/Text";
import gsap from "gsap";
import { Draggable } from "gsap/all";

gsap.registerPlugin(Draggable);

export default function Home() {
  return (
    <main>
      {/* <h1 className="flex-1 text-center bg-green-500">Bismillah</h1>; */}
      <Navbar />
      <Welcome />
      <BottomDock />

      <CommandCLI />
      <SafariWindow />
      <ResumeWindow />
      <FinderWindow />
      <TextWindow />
      <ImageWindow />
      <ContactWindow />
    </main>
  );
}
