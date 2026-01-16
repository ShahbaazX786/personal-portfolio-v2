"use client";

import HomeIcons from "@/components/HomeIcons";
import BottomDock from "@/components/layout/BottomDock";
import Navbar from "@/components/layout/Navbar";
import Welcome from "@/components/Welcome";
import CommandCLI from "@/components/windows/cmd";
import ContactWindow from "@/components/windows/Contact";
import FinderWindow from "@/components/windows/Finder";
import ImageWindow from "@/components/windows/Image";
import SafariWindow from "@/components/windows/SafariBrowser";
import TextWindow from "@/components/windows/Text";
import gsap from "gsap";
import { Draggable } from "gsap/all";
import dynamic from "next/dynamic";

const ResumeWindow = dynamic(() => import("@/components/windows/Resume"), {
  ssr: false,
});

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
      <HomeIcons />
    </main>
  );
}
