import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IconType } from "react-icons";
import { BiLogoTailwindCss, BiMessage, BiSolidUser } from "react-icons/bi";
import { FaNodeJs, FaVuejs } from "react-icons/fa";
import { GrHomeRounded, GrReactjs } from "react-icons/gr";
import { PiGithubLogo, PiUserCircle } from "react-icons/pi";
import { SiAboutdotme, SiNuxtdotjs, SiTypescript } from "react-icons/si";
import { TbBrandNextjs, TbHomeFilled } from "react-icons/tb";
import { FcAbout } from "react-icons/fc";

export const navLinks: { label: string; url: string; icon: IconType }[] = [
  {
    label: "Home",
    url: "/",
    icon: GrHomeRounded,
  },
  {
    label: "About me",
    url: "/about",
    icon: BiSolidUser,
  },
  {
    label: "Contact",
    url: "/contact",
    icon: BiMessage,
  },
];

export const projectsData = [
  {
    key: 2,
    title: "Fleri Admin",
    description: "Admin platform to manage tasks happening on the platform.",
    hosted: "https://www.loom.com/share/91fab83bd0b24621a520a3839d6b4411",
  },
  {
    key: 3,
    title: "Genesix Studio Website",
    description: "Website for design studio",
    hosted: "https://genesixstudiowebsite.vercel.app/",
  },
  {
    key: 4,
    title: "Invoicing App",
    description:
      "This app generates invoice from supplied information at a tap",
    github: "https://github.com/0xlarmideh/invoice-generator",
    hosted: "https://invoice-generator-0xlarmideh.vercel.app",
  },
  {
    key: 5,
    title: "Urekka Web App",
    description: "Web App for an Educational Consulting Firm",
    github: "https://github.com/Urekka/urekka",
    hosted: "https://urekka.vercel.app/",
  },
];

export const contactInfos = [
  {
    Icon: BsGithub,
    label: "Github",
    url: "http://www.github.com/0xlarmideh",
  },
  { Icon: BsTwitter, label: "Twitter", url: "http://www.x.com/0xlarmideh" },
  {
    Icon: BsLinkedin,
    label: "Linkedin",
    url: "http://www.linkedin.com/in/larmideh",
  },
  { Icon: MdEmail, label: "Email", url: "mailto:busarioyewole@gmail.com" },
];

export const skillSet: Record<string, IconType>[] = [
  { icon: SiTypescript },
  { icon: FaNodeJs },
  { icon: GrReactjs },
  { icon: FaVuejs },
  { icon: BiLogoTailwindCss },
  { icon: PiGithubLogo },
  { icon: TbBrandNextjs },
  { icon: SiNuxtdotjs },
];
