import Image from "next/image";
import Link from "next/link";
import WindowWrapper from "../wrappers/WindowWrapper";
import WindowControls from "./WindowControls";
import { socials } from "@/lib/constants/SocialConstants";

const Contact = () => {
  return (
    <>
      <div className="window-header contact-header">
        <WindowControls target="contact" />
        <h2>Contact Me</h2>
      </div>

      <div className="p-5 space-y-5">
        <Image
          src={"/images/conference-me.gif"}
          alt="Shaik Shahbaaz Alam"
          className="w-80 rounded-full mx-auto"
          width={100}
          height={100}
        />

        <h3>Let&apos;s Connect</h3>
        <p>
          Got an idea? A bug to squash? or just wanna talk tech? I&apos;m in
        </p>

        <ul>
          {socials.map((social) => (
            <li key={social.id} style={{ backgroundColor: social.bg }}>
              <Link
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                title={social.text}
              >
                <Image
                  src={social.icon}
                  alt={social.text}
                  className="size-5"
                  width={100}
                  height={100}
                />
                <p>{social.text}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;
