import { locations, WINDOW_CONFIG } from "@/lib/constants/constants";
import useLocationStore from "@/store/location.store";
import useWindowStore from "@/store/window.store";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import gsap from "gsap";
import { Draggable } from "gsap/all";
import Image from "next/image";

const HomeIcons = () => {
  const { openWindow } = useWindowStore();
  const { setActiveLocation } = useLocationStore();

  const projects = locations?.work?.children ?? [];

  useGSAP(() => {
    const folders = gsap.utils.toArray<HTMLElement>(".folder");

    folders.forEach((item) => {
      Draggable.create(item, {
        type: "x,y",

        onDrag() {
          folders.forEach((other) => {
            if (other === item) return;

            if (Draggable.hitTest(item, other, "5%")) {
              this.endDrag();
              gsap.to(item, {
                x: this.startX,
                y: this.startY,
                duration: 0.2,
              });
            }
          });
        },
      });
    });
  });

  const handleOpenProjectFinder = (
    project: keyof typeof WINDOW_CONFIG | any
  ) => {
    setActiveLocation(project);
    openWindow("finder");
  };

  return (
    <section id="desktop-icon">
      <ul>
        {projects.map((project) => (
          <li
            key={project.id}
            className={clsx("group folder w-fit", project.windowPosition)}
            onClick={() => handleOpenProjectFinder(project)}
          >
            <Image
              src={"/images/folder.png"}
              alt={project.name}
              width={100}
              height={100}
              className="w-14"
            />
            <p className="dark:text-white text-black text-sm">{project.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HomeIcons;
