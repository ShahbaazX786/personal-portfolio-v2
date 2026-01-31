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
        <h2 className="text-black">Contact Me</h2>
      </div>

      <div className="p-5 space-y-5">
        <Image
          src={"/animated-images/hello.gif"}
          alt="random"
          className="w-48 rounded-lg mx-auto"
          width={100}
          height={100}
        />

        <h3>Want to talk more?</h3>
        <p>
          I may not be able to talk ASAP but i will be notified if you give me a
          follow!
        </p>

        <h4 className="font-bold text-lg">Socials 👇</h4>
        <ul>
          {socials.map((social) => (
            <li key={social.id} style={{ backgroundColor: social.bg }}>
              <Link
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                title={social.text}
                className="flex flex-col justify-center items-center"
              >
                <Image
                  src={social.icon}
                  alt={social.text}
                  className="size-14"
                  width={100}
                  height={100}
                />
                <p className="text-lg -mt-4">{social.text}</p>
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
