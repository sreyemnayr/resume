/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogSubTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Code2,
  Globe,
  Laptop,
  MailIcon,
  MapPin,
  MessageSquare,
  Phone,
  Smartphone,
  Cuboid,
  LoaderPinwheel,
  BrainCircuit,
  Binary,
  CookingPot,
  UtensilsCrossed,
  CupSoda,
  Egg,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import RyanSVGComponent from "@/public/ryan.svg";
import RyanMonoSVGComponent from "@/public/ryan-head.svg";
import { FC, SVGProps } from "react";

import BashIcon from "react-devicons/bash/plain";

import {
  SiEthereum as EthereumIcon,
  SiBitcoin as BitcoinIcon,
  SiWeb3dotjs as Web3Icon,
  SiOpenai as OpenaiIcon,
  SiPytorch as PytorchIcon,
  SiSpacy as SpacyIcon,
  SiPolygon as PolygonIcon,
  SiHtml5 as Html5Icon,
  SiCss3 as Css3Icon,
  SiReact as ReactIcon,
  SiTypescript as TypescriptIcon,
  SiAngular as AngularIcon,
  SiNextdotjs as NextjsIcon,
  SiTailwindcss as TailwindIcon,
  SiAmazonwebservices as AWSIcon,
  SiReact as ReactNativeIcon,
  SiTensorflow as TensorflowIcon,
  SiMongodb as MongodbIcon,
  SiPostgresql as PostgresqlIcon,
  SiAndroid as AndroidIcon,
  SiIos as IosIcon,
  SiPython as PythonIcon,
  SiPhp as PhpIcon,
  SiNodedotjs as NodejsIcon,
  SiAnthropic as AnthropicIcon,
  SiAdobecreativecloud as AdobeIcon,
  SiDjango as DjangoIcon,
  SiFlask as FlaskIcon,
  SiNginx as NginxIcon,
  SiWalletconnect as WalletConnectIcon,
  SiApple as AppleIcon,
  SiMacos as MacOSIcon,
  SiAppletv as AppletvIcon,
  SiGooglechrome as GoogleChromeIcon,
  SiJavascript as JavascriptIcon,
  SiDocker as DockerIcon,
  SiElectron as ElectronIcon,
  SiHuggingface as HuggingFaceIcon,
  SiWordpress as WordpressIcon,
  SiGreasyfork as ForkIcon,
  SiUnrealengine as UnrealEngineIcon,
  SiUnity as UnityIcon,
  SiRedis as RedisIcon,
  SiIpfs as IpfsIcon,
  SiNumpy as NumpyIcon,
  SiBlender as BlenderIcon,
  SiSolidity as SolidityIcon,
  SiMysql as MysqlIcon,
  SiGrunt as GruntIcon,
  SiGooglemaps as GoogleMapsIcon,
  SiGithub as GithubIcon,
  SiGmail as GmailIcon,
  SiGroupme as GroupmeIcon,
  SiPrisma as PrismaIcon,
} from "@icons-pack/react-simple-icons";

const Icon = ({
  IconElement,
  title,
}: {
  IconElement: React.ComponentType<React.ComponentProps<any>>;
  title: string;
}) => {
  return (
    <span title={title} className="group/icon flex relative">
      <IconElement
        color="fuchsia-400"
        className="text-3xl mb-2 fill-fuchsia-400 hover:fill-fuchsia-500"
      />
      <span
        className="group-hover/icon:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto text-nowrap z-10"
      >
        {title}
      </span>
    </span>
  );
};

const AppIcons = () => {
  return (
    <div className="flex flex-wrap pt-4 px-10 background-slate-800 mx-auto text-center align-center justify-center text-3xl gap-2">
      <Icon IconElement={ReactNativeIcon} title="React Native" />
      <Icon IconElement={AndroidIcon} title="Android" />
      <Icon IconElement={IosIcon} title="iOS" />
      <Icon IconElement={MacOSIcon} title="MacOS" />
      <Icon IconElement={AppletvIcon} title="Apple TV" />
      <Icon IconElement={GoogleChromeIcon} title="Google Chrome" />
      <Icon IconElement={ElectronIcon} title="Electron" />
    </div>
  );
};

const WebDesignIcons = () => {
  return (
    <div className="flex flex-wrap pt-4 px-10 background-slate-800 mx-auto text-center align-center justify-center text-3xl gap-2">
      <Icon IconElement={Html5Icon} title="HTML5" />
      <Icon IconElement={Css3Icon} title="CSS3" />
      <Icon IconElement={ReactIcon} title="React" />
      <Icon IconElement={TypescriptIcon} title="Typescript" />
      <Icon IconElement={AngularIcon} title="Angular" />
      <Icon IconElement={NextjsIcon} title="Next.js" />
      <Icon IconElement={TailwindIcon} title="Tailwind" />
      <Icon IconElement={AdobeIcon} title="Adobe Creative Cloud" />
      <Icon IconElement={JavascriptIcon} title="Javascript" />
    </div>
  );
};

const WebDevIcons = () => {
  return (
    <div className="flex flex-wrap pt-4 px-10 background-slate-800 text-center align-center justify-center text-3xl gap-2">
      <Icon IconElement={PythonIcon} title="Python" />
      <Icon IconElement={NodejsIcon} title="Node.js" />
      <Icon IconElement={PhpIcon} title="PHP" />
      <Icon IconElement={AWSIcon} title="AWS" />
      <Icon IconElement={PostgresqlIcon} title="PostgreSQL" />
      <Icon IconElement={MongodbIcon} title="MongoDB" />
      <Icon IconElement={DjangoIcon} title="Django" />
      <Icon IconElement={FlaskIcon} title="Flask" />
      <Icon IconElement={NginxIcon} title="Nginx" />
      <Icon IconElement={WordpressIcon} title="Wordpress" />
      <Icon IconElement={DockerIcon} title="Docker" />
    </div>
  );
};

const Web3Icons = () => {
  return (
    <div className="flex flex-wrap pt-4 px-10 background-slate-800 mx-auto text-center align-center justify-center text-3xl gap-2">
      <Icon IconElement={EthereumIcon} title="Ethereum" />
      <Icon IconElement={BitcoinIcon} title="Bitcoin" />
      <Icon IconElement={Web3Icon} title="Web3" />
      <Icon IconElement={WalletConnectIcon} title="WalletConnect" />
    </div>
  );
};

const KitchenSinkIcons = () => {
  return (
    <div className="flex flex-wrap pt-4 px-10 background-slate-800 mx-auto text-center align-center justify-center text-3xl gap-2">
      <Icon IconElement={CookingPot} title="Pots and Pans" />
      <Icon IconElement={ForkIcon} title="Forks" />
      <Icon IconElement={CupSoda} title="Cups" />
      <Icon IconElement={Egg} title="Eggs" />
    </div>
  );
};

const AIIcons = () => {
  return (
    <div className="flex flex-wrap pt-4 px-10 background-slate-800 mx-auto text-center align-center justify-center text-3xl gap-2">
      <Icon IconElement={OpenaiIcon} title="OpenAI" />
      <Icon IconElement={TensorflowIcon} title="Tensorflow" />
      <Icon IconElement={PytorchIcon} title="Pytorch" />
      <Icon IconElement={SpacyIcon} title="Spacy" />
      <Icon IconElement={HuggingFaceIcon} title="HuggingFace" />
      <Icon IconElement={AnthropicIcon} title="Anthropic" />
    </div>
  );
};

interface Project {
  // Add actual project properties here
  title: string;
  subtitle: string;
  description: string;
  images: { src: string; caption: string; url?: string }[];
  img_folder: string;
  url: string;
  tools?: React.ReactNode;
}

const projects: Project[] = [
  {
    title: "OhPear!",
    subtitle: "AI-powered family management",
    img_folder: "ohpear",
    description:
      "OhPear! is a family management platform that uses AI to help families manage their lives. It is a web application that is built with React, Next.js, and Tailwind CSS.",
    images: [
      {
        src: "thumbnail.png",
        caption:
          "OhPear! is a family management platform that uses AI to help families manage their lives. E-mail me for a login if you'd like to see it in action.",
      },
    ],
    url: "https://ohpearapp.com",
    tools: (
      <div className="flex flex-wrap pt-4 px-10 background-slate-800 mx-auto text-center align-center justify-center text-3xl gap-2">
        {/* OpenAI, Gmail, React, NextJS, Tailwind, GroupMe, Postgres, ZenStack, Prisma,  */}
        <Icon IconElement={OpenaiIcon} title="OpenAI" />
        <Icon IconElement={GmailIcon} title="Gmail" />
        <Icon IconElement={ReactIcon} title="React" />
        <Icon IconElement={NextjsIcon} title="Next.js" />
        <Icon IconElement={TailwindIcon} title="Tailwind" />
        <Icon IconElement={GroupmeIcon} title="GroupMe" />
        <Icon IconElement={PostgresqlIcon} title="PostgreSQL" />

        <Icon IconElement={PrismaIcon} title="Prisma" />
      </div>
    ),
  },
  {
    title: "Plague Poppets",
    subtitle: "3D Animation on the Ethereum Blockchain",
    img_folder: "poppets",
    description:
      "Blockchain-based collectibles featuring 3D characters procedurally generated from hundreds of swappable attributes, animated with Unreal Engine, and stored on IPFS, with ownership verified on the Ethereum network.",
    images: [
      {
        src: "maker.jpg",
        caption:
          "Built a retro-themed, web-based tool for previewing characters with various accessories, color palettes, and creative choices.",
      },
      {
        src: "orphanarium.jpg",
        caption:
          "Transformed a fully immersive 3D environment into an interactive website.",
      },
      {
        src: "blasted.jpg",
        caption:
          'Oversaw art direction and character design, smart contract development, and generative art software creation for 2D "Popkins" on Blast blockchain.',
      },
      {
        src: "pvp.jpg",
        caption:
          "Created a fully-onchain card game (Cats, Cleavers, and Cockroaches) and web interface to play it.",
      },
    ],
    url: "https://plaguepoppets.com",
    tools: (
      <div className="flex flex-wrap pt-4 px-4 background-slate-800 mx-auto text-center align-center justify-center text-3xl gap-2">
        <Icon IconElement={PythonIcon} title="Python" />
        <Icon IconElement={NumpyIcon} title="Numpy" />
        <Icon IconElement={AWSIcon} title="AWS" />
        <Icon IconElement={DockerIcon} title="Docker" />
        <Icon IconElement={IosIcon} title="iOS" />
        <Icon IconElement={AndroidIcon} title="Android" />
        <Icon IconElement={ReactIcon} title="React" />
        <Icon IconElement={TypescriptIcon} title="Typescript" />
        <Icon IconElement={ReactNativeIcon} title="React Native" />
        <Icon IconElement={UnityIcon} title="Unity" />
        <Icon IconElement={UnrealEngineIcon} title="Unreal Engine" />
        <Icon IconElement={RedisIcon} title="Redis" />
        <Icon IconElement={EthereumIcon} title="Ethereum" />
        <Icon IconElement={Web3Icon} title="Web3.js" />
        <Icon IconElement={IpfsIcon} title="IPFS" />
        <Icon IconElement={BlenderIcon} title="Blender" />
        <Icon IconElement={SolidityIcon} title="Solidity" />
      </div>
    ),
  },
  {
    title: "Trivie",
    subtitle: "AI-assisted quiz generation for professional learning",
    img_folder: "trivie",
    description:
      "With Trivie, I helped build a pre-LLM Natural Language Processing platform that gamifies professional learning by allowing users to compete in trivia challenges and earn prizes. Additionally, I helped to reduce latency in their MySQL queries by over 80% and assisted in development of their administrative interface.",
    images: [
      {
        src: "app.png",
        caption:
          "Trivie gamifies professional learning by allowing users to compete in trivia challenges and earn prizes.",
      },
      {
        src: "aiinterface.jpg",
        caption:
          "Unique questions and meaningful distractors are generated from a client's knowledge base.",
      },
    ],
    url: "https://trivie.com",
    tools: (
      <div className="flex flex-wrap pt-4 px-10 background-slate-800 mx-auto text-center align-center justify-center text-3xl gap-2">
        <Icon IconElement={PythonIcon} title="Python" />
        <Icon IconElement={AWSIcon} title="AWS" />
        <Icon
          IconElement={HuggingFaceIcon}
          title="Natural Language Processing"
        />
        <Icon IconElement={SpacyIcon} title="spaCy" />
        <Icon IconElement={DjangoIcon} title="Django" />
        <Icon IconElement={NginxIcon} title="Nginx" />
        <Icon IconElement={DockerIcon} title="Docker" />
        <Icon IconElement={IosIcon} title="iOS" />
        <Icon IconElement={AndroidIcon} title="Android" />
        <Icon IconElement={MysqlIcon} title="MySQL" />
      </div>
    ),
  },
  {
    title: "Noble Labs",
    subtitle: "Informational website for cannabis-based medicine company",
    img_folder: "noble",
    description:
      "Noble Labs is a locally owned and operated company that aims to provide a well-controlled supply chain of safe and consistent cannabis-based medicine to patients statewide.",
    images: [
      {
        src: "thumbnail.png",
        caption:
          "Creation of a website for a local cannabis-based medicine company.",
      },
    ],
    url: "https://noble-labs.vercel.app/",
    tools: (
      <div className="flex flex-wrap pt-4 px-10 background-slate-800 mx-auto text-center align-center justify-center text-3xl gap-2">
        <Icon IconElement={Html5Icon} title="HTML5" />
        <Icon IconElement={Css3Icon} title="CSS3" />
        <Icon IconElement={JavascriptIcon} title="Javascript" />
        <Icon IconElement={TypescriptIcon} title="Typescript" />
        <Icon IconElement={ReactIcon} title="React" />
        <Icon IconElement={TailwindIcon} title="Tailwind" />
        <Icon IconElement={GruntIcon} title="Grunt" />
        <Icon IconElement={GoogleMapsIcon} title="Google Maps" />
      </div>
    ),
  },

  {
    title: "Alison McCrary",
    subtitle:
      "Informational website for local attorney and social justice advocate",
    img_folder: "alison",
    description:
      "I helped Alison McCrary, a local attorney and social justice advocate, create a website to share her work and connect with her community.",
    images: [
      {
        src: "thumbnail.png",
        caption:
          "Creation of a website for a local attorney and social justice advocate.",
      },
    ],
    url: "https://alisonmccrary.com",
    tools: (
      <div className="flex flex-wrap pt-4 px-10 background-slate-800 mx-auto text-center align-center justify-center text-3xl gap-2">
        <Icon IconElement={Html5Icon} title="HTML5" />
        <Icon IconElement={Css3Icon} title="CSS3" />
        <Icon IconElement={JavascriptIcon} title="Javascript" />
        <Icon IconElement={TypescriptIcon} title="Typescript" />
        <Icon IconElement={ReactIcon} title="React" />
      </div>
    ),
  },

  {
    title: "Google Meet Grid View",
    subtitle: "Acquired and sunsetted by Google",
    img_folder: "gridview",
    description:
      "While working for St. George's Episcopal School during the pandemic, I created a Chrome extension that enhances Google Meet with a customizable grid view, benefiting over 9 million users worldwide and ultimately being acquired by Google.",
    images: [
      {
        src: "staff.webp",
        caption:
          "St. George's Administrative Staff demonstrating the Grid View",
      },
      {
        src: "news.jpg",
        caption:
          "Grid View was featured in local and national news, rocketing from 100 users to over 9 million users in less than a month.",
      },
    ],
    url: "",
    tools: (
      <div className="flex flex-wrap pt-4 px-10 background-slate-800 mx-auto text-center align-center justify-center text-3xl gap-2">
        <Icon IconElement={GoogleChromeIcon} title="Google Chrome" />
        <Icon IconElement={JavascriptIcon} title="Javascript" />
        <Icon IconElement={TypescriptIcon} title="Typescript" />
        <Icon IconElement={ReactIcon} title="React" />
      </div>
    ),
  },
  {
    title: "The Flower Girls by Varvara Alay",
    subtitle: "Beautiful, procedurally generated art on Ethereum",
    img_folder: "flowergirls",
    description:
      'I helped to create a collection of 10,000 uniquely generated flower girl images on the Ethereum blockchain, with generative art created in Python and smart contracts built in Solidity. Additionally, I created an on-chain economy for users to buy, sell, and trade items with unique "Seed" tokens that were generated via a creative "cross-pollination" experience.',
    images: [{ src: "thumbnail.png", caption: "Caption one." }],
    url: "https://flowergirlsnft.com",
    tools: (
      <div className="flex flex-wrap pt-4 px-4 background-slate-800 mx-auto text-center align-center justify-center text-3xl gap-2">
        <Icon IconElement={PythonIcon} title="Python" />
        <Icon IconElement={ReactIcon} title="React" />
        <Icon IconElement={TypescriptIcon} title="Typescript" />
        <Icon IconElement={EthereumIcon} title="Ethereum" />
        <Icon IconElement={PolygonIcon} title="Polygon" />
        <Icon IconElement={Web3Icon} title="Web3.js" />
        <Icon IconElement={IpfsIcon} title="IPFS" />
        <Icon IconElement={SolidityIcon} title="Solidity" />
      </div>
    ),
  },
  {
    title: "The Stoics & FRENS by Gabe Weis",
    subtitle: "Beautiful, procedurally generated art on Ethereum",
    img_folder: "stoics",
    description:
      'I helped to create a collection of 10,000 uniquely generated flower girl images on the Ethereum blockchain, with generative art created in Python and smart contracts built in Solidity. Additionally, I created an on-chain economy for users to buy, sell, and trade items with unique "Seed" tokens that were generated via a creative "cross-pollination" experience.',
    images: [{ src: "thumbnail.png", caption: "Caption one." }],
    url: "https://thestoics.art",
    tools: (
      <div className="flex flex-wrap pt-4 px-4 background-slate-800 mx-auto text-center align-center justify-center text-3xl gap-2">
        <Icon IconElement={PythonIcon} title="Python" />
        <Icon IconElement={ReactIcon} title="React" />
        <Icon IconElement={TypescriptIcon} title="Typescript" />
        <Icon IconElement={EthereumIcon} title="Ethereum" />
        <Icon IconElement={PolygonIcon} title="Polygon" />
        <Icon IconElement={Web3Icon} title="Web3.js" />
        <Icon IconElement={IpfsIcon} title="IPFS" />
        <Icon IconElement={SolidityIcon} title="Solidity" />
      </div>
    ),
  },
  {
    title: "FORK HUNGER",
    subtitle: "Charity NFT Collection for Second Harvest Food Bank",
    img_folder: "forks",
    description:
      "With my daughter, I helped create a collection of 10,000 uniquely generated NFTs for Second Harvest Food Bank, a charity that fights hunger in the greater New Orleans metropolitan area. We raised over $150,000 for the charity and received national attention.",
    images: [{ src: "thumbnail.png", caption: "Caption one." }],
    url: "https://forkhunger.art",
    tools: (
      <div className="flex flex-wrap pt-4 px-4 background-slate-800 mx-auto text-center align-center justify-center text-3xl gap-2">
        <Icon IconElement={Html5Icon} title="HTML5" />
        <Icon IconElement={Css3Icon} title="CSS3" />
        <Icon IconElement={JavascriptIcon} title="Javascript" />
        <Icon IconElement={EthereumIcon} title="Ethereum" />
        <Icon IconElement={SolidityIcon} title="Solidity" />
      </div>
    ),
  },
  {
    title: "Lucky Maneki",
    subtitle: "Gaming NFT Collection",
    img_folder: "maneki",
    description:
      'I helped create a fully playable NFT game on the Ethereum blockchain based on the "Lucky Maneki" theme. I created the smart contracts and helped with the game design.',
    images: [{ src: "thumbnail.png", caption: "Caption one." }],
    url: "https://luckymaneki.org",
    tools: (
      <div className="flex flex-wrap pt-4 px-4 background-slate-800 mx-auto text-center align-center justify-center text-3xl gap-2">
        <Icon IconElement={Html5Icon} title="HTML5" />
        <Icon IconElement={Css3Icon} title="CSS3" />
        <Icon IconElement={JavascriptIcon} title="Javascript" />
        <Icon IconElement={EthereumIcon} title="Ethereum" />
        <Icon IconElement={SolidityIcon} title="Solidity" />
      </div>
    ),
  },
];

const clients = [
  { name: "Google", logo: "/clients/google.svg" },
  { name: "Trivie", logo: "/clients/trivie.png" },
  { name: "MLB: The Show", logo: "/clients/theshow.png" },
];

function ProjectModal({ project }: { project: Project }) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + project.images.length) % project.images.length
    );
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
          <img
            alt={project.title}
            className="object-cover w-full h-60 transition-all duration-300 group-hover:scale-110"
            src={`/portfolio/${project.img_folder}/thumbnail.png`}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-80 opacity-0 transition-opacity group-hover:opacity-100">
            <h2 className="text-white text-3xl text-center">{project.title}</h2>
            {project.tools}
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px] bg-black border-fuchsia-500">
        <DialogHeader>
          <DialogTitle className="text-fuchsia-400">
            {project.title}
          </DialogTitle>
          <DialogSubTitle className="text-fuchsia-300">
            {project.subtitle}
          </DialogSubTitle>
          <DialogDescription className="text-zinc-400">
            {project.description}
          </DialogDescription>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute right-2 top-2 text-fuchsia-200 hover:text-fuchsia-600 text-sm"
              title="visit web"
            >
              <Globe className="h-4 w-4 mb-2 inline" />{" "}
              {project.url.split("://")[1]}
            </a>
          )}
        </DialogHeader>
        <div className="relative">
          <img
            src={`/portfolio/${project.img_folder}/${project.images[currentImage].src}`}
            alt={project.images[currentImage].caption}
            className="w-full h-auto"
          />
          <p className="text-center mt-2 text-fuchsia-300">
            {project.images[currentImage].caption}
          </p>
          <Button
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-fuchsia-600 hover:bg-fuchsia-700"
            onClick={prevImage}
          >
            ←
          </Button>
          <Button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-fuchsia-600 hover:bg-fuchsia-700"
            onClick={nextImage}
          >
            →
          </Button>
        </div>
        <DialogFooter>{project.tools}</DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function ClientCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden h-20">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {clients.map((client, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full flex justify-center items-center"
          >
            <img
              src={client.logo}
              alt={client.name}
              className="max-h-16 w-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function ResumePageComponent() {
  const [rotatingText, setRotatingText] = useState("Web");

  useEffect(() => {
    const interval = setInterval(() => {
      setRotatingText((prevText) => {
        const rotatingWords = [
          "Web",
          "Mobile",
          "Web3",
          "AI",
          "Desktop",
          "Blockchain",
          "What's Next",
        ];
        const currentIndex = rotatingWords.indexOf(prevText);
        return rotatingWords[(currentIndex + 1) % rotatingWords.length];
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // open mail client with per-filled subject/body
    window.location.href = `mailto:ryanmeyersweb@gmail.com?subject=Website Inquiry from ${subject} (${email})&body=${body}`;
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Bevan&family=Monoton&family=Press+Start+2P&display=swap");

        h1,
        h2,
        h3 {
          font-family: "Bevan", cursive;
        }

        .funky-text {
          font-family: "Monoton", cursive;
        }

        .pixel-text {
          font-family: "Press Start 2P", cursive;
        }
      `}</style>
      <header className="px-4 lg:px-6 h-14 flex items-center border-b border-fuchsia-500">
        <Link className="flex items-center justify-center" href="#">
          {/* <Globe className="h-6 w-6 text-fuchsia-500" /> */}
          <RyanMonoSVGComponent className="h-6 w-6 filter text-fuchsia-500" />
          <span className="sr-only">Ryan Meyers</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:text-fuchsia-400 hover:underline underline-offset-4 pixel-text"
            href="#services"
          >
            Services
          </Link>
          <Link
            className="text-sm font-medium hover:text-fuchsia-400 hover:underline underline-offset-4 pixel-text"
            href="#work"
          >
            Work
          </Link>
          <Link
            className="text-sm font-medium hover:text-fuchsia-400 hover:underline underline-offset-4 pixel-text"
            href="#contact"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="flex flex-col align-middle justify-center w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 relative overflow-hidden">
          <div className="absolute left-0 top-0 w-1/2 h-full opacity-10">
            <RyanSVGComponent />
          </div>
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="md:w-1/4">
                <div className="rounded-full relative md:min-w-40 w-32 h-32 md:h-full md:w-full group aspect-square">
                  <RyanSVGComponent className="w-full h-full group-hover:opacity-0 opacity-100 transition-opacity duration-300 " />
                  <img
                    src="/ryan.jpg"
                    alt="Ryan Meyers"
                    className="rounded-full object-cover absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 h-full aspect-square"
                  />
                </div>
              </div>
              <div className="w-full md:w-3/4 space-y-4 text-center">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-7xl lg:text-8xl/none xl:text-9xl/none text-white drop-shadow-lg cursor-wait">
                  <span className="hover:font-['Press_Start_2P'] hover:text-[84%] hover:text-lime-500">
                    R
                  </span>
                  <span className="hover:font-['Press_Start_2P'] hover:text-[68%] hover:text-blue-400">
                    y
                  </span>
                  <span className="hover:font-['Press_Start_2P'] hover:text-[67%] hover:text-red-400">
                    a
                  </span>
                  <span className="hover:font-['Press_Start_2P'] hover:text-[77%] hover:text-yellow-400">
                    n
                  </span>
                  &nbsp;
                  <span className="hover:font-['Press_Start_2P'] hover:text-[84%] hover:text-purple-500 hover:ml-10">
                    M
                  </span>
                  <span className="hover:font-['Press_Start_2P'] hover:text-[60%] hover:text-pink-500">
                    e
                  </span>
                  <span className="hover:font-['Press_Start_2P'] hover:text-[68%] hover:text-yellow-400">
                    y
                  </span>
                  <span className="hover:font-['Press_Start_2P'] hover:text-[59%] hover:text-red-400">
                    e
                  </span>
                  <span className="hover:font-['Press_Start_2P'] hover:text-[54%] hover:text-blue-400">
                    r
                  </span>
                  <span className="hover:font-['Press_Start_2P'] hover:text-[58%] hover:text-lime-500">
                    s
                  </span>
                </h1>
                <div className="h-6 md:h-12 flex flex-row items-end justify-around text-xl md:text-2xl lg:text-3xl xl:text-4xl text-zinc-200 group text-right">
                  {" "}
                  {/* Fixed height container for rotating text */}
                  <span className="flex-grow">Creative solutions for</span>
                  <span className="w-5/12 h-12 relative">
                    <span className="absolute top-1/2 left-3 -translate-y-1/4 md:-translate-y-1/2 pt-1 font-['Monoton'] text-fuchsia-300 group-hover:opacity-0 opacity-100">
                      {rotatingText}
                    </span>
                    <span className="absolute top-1/2 left-3 -translate-y-1/4 md:-translate-y-1/2 pt-1 font-['Press_Start_2P'] text-[70%] md:text-[81%]  text-green-500 group-hover:opacity-100 opacity-0">
                      {rotatingText}
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="space-x-4 text-center mt-4">
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md bg-fuchsia-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-fuchsia-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-fuchsia-300 disabled:pointer-events-none disabled:opacity-50 font-['Press_Start_2P']"
                href="#contact"
              >
                Contact Me
              </Link>
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md border border-fuchsia-300 bg-black px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-fuchsia-100 hover:text-fuchsia-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-fuchsia-300 disabled:pointer-events-none disabled:opacity-50 pixel-text"
                href="#services"
                onClick={() => {
                  alert(
                    "Somehow I've managed to avoid creating a CV this far in life. That may change, but for now, you can check out some of my work below."
                  );
                }}
              >
                My CV
              </Link>
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md bg-fuchsia-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-fuchsia-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-fuchsia-300 disabled:pointer-events-none disabled:opacity-50 font-['Press_Start_2P']"
                href="https://github.com/sreyeMnayR"
                target="_blank"
              >
                <GithubIcon className="h-4 w-4 mr-2" />
                GitHub
              </Link>
            </div>
          </div>
        </section>
        <section
          id="services"
          className="w-full py-12 md:py-24 lg:py-32 bg-black"
        >
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-fuchsia-400">
              What I do...
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-2 border-fuchsia-500 p-4 rounded-lg transition-transform hover:scale-105">
                <Globe className="h-12 w-12 mb-2 text-fuchsia-400" />
                <h3 className="text-xl font-bold text-fuchsia-300 text-center">
                  Web Design
                </h3>
                <p className="text-sm text-zinc-200 text-center">
                  Creative, responsive, and functional web design for your
                  business or personal brand utilizing modern frameworks and
                  technologies.
                </p>
                <WebDesignIcons />
              </div>
              <div className="flex flex-col items-center space-y-2 border-2 border-fuchsia-500 p-4 rounded-lg transition-transform hover:scale-105">
                <Binary className="h-12 w-12 mb-2 text-fuchsia-400" />
                <h3 className="text-xl font-bold text-fuchsia-300 text-center">
                  Web Infra
                </h3>
                <p className="text-sm text-zinc-200 text-center">
                  Designing, implementing, and maintaining robust and scalable
                  server infrastructures using industry-standard tools and best
                  practices.
                </p>

                <WebDevIcons />
              </div>

              <div className="flex flex-col items-center space-y-2 border-2 border-fuchsia-500 p-4 rounded-lg transition-transform hover:scale-105">
                <Smartphone className="h-12 w-12 mb-2 text-fuchsia-400" />
                <h3 className="text-xl font-bold text-fuchsia-300 text-center">
                  App Development
                </h3>
                <p className="text-sm text-zinc-200 text-center">
                  Native and cross-platform mobile applications for iOS and
                  Android; desktop applications for MacOS, ChromeOS, Linux, and
                  Windows; bespoke solutions for on-device and on-premise
                  applications.
                </p>
                <AppIcons />
              </div>
              <div className="flex flex-col items-center space-y-2 border-2 border-fuchsia-500 p-4 rounded-lg transition-transform hover:scale-105">
                <BrainCircuit className="h-12 w-12 mb-2 text-fuchsia-400" />
                <h3 className="text-xl font-bold text-fuchsia-300 text-center">
                  AI Integration
                </h3>
                <p className="text-sm text-zinc-200 text-center">
                  Implementing AI and machine learning solutions for various
                  applications; including but not limited to: Chatbots,
                  Generative AI, and AI Agents.
                </p>
                <AIIcons />
              </div>
              <div className="flex flex-col items-center space-y-2 border-2 border-fuchsia-500 p-4 rounded-lg transition-transform hover:scale-105">
                <Cuboid className="h-12 w-12 mb-2 text-fuchsia-400" />
                <h3 className="text-xl font-bold text-fuchsia-300 text-center">
                  Web3 &amp; Blockchain
                </h3>
                <p className="text-sm text-zinc-200 text-center">
                  Blockchain and decentralized application development using
                  Web3 technologies with special emphasis on Smart Contracts,
                  NFTs, and DeFi.
                </p>
                <Web3Icons />
              </div>
              <div className="flex flex-col items-center space-y-2 border-2 border-fuchsia-500 p-4 rounded-lg transition-transform hover:scale-105">
                <LoaderPinwheel className="h-12 w-12 mb-2 text-fuchsia-400" />
                <h3 className="text-xl font-bold text-fuchsia-300 text-center">
                  Kitchen Sink
                </h3>
                <p className="text-sm text-zinc-200 text-center">
                  I'm not afraid of learning or trying something new; in fact, I
                  thrive on it. I've built everything from applications that
                  render 3D animations, Discord and Telegram bots, Snapchat and
                  Instagram filters, scalable server infrastructures, and
                  everything in between.
                </p>
                <KitchenSinkIcons />
              </div>
            </div>
          </div>
        </section>
        <section
          id="work"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-900 via-fuchsia-900 to-pink-900"
        >
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-fuchsia-300">
              What I've done...
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
              {projects.map((project, index) => (
                <ProjectModal key={index} project={project} />
              ))}
            </div>
          </div>
        </section>
        <section
          id="clients"
          className="w-full py-12 md:py-24 lg:py-32 bg-black"
        >
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-fuchsia-400">
              Notable Clients
            </h2>
            <ClientCarousel />
          </div>
        </section>
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-900 via-fuchsia-900 to-pink-900"
        >
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-fuchsia-300">
              Contact Me
            </h2>
            <div className="grid gap-10 sm:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-fuchsia-300">
                  <MailIcon className="w-6 h-6" />
                  <span>ryanmeyersweb@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2 text-fuchsia-300">
                  <Phone className="w-6 h-6" />
                  <span>601-434-6766</span>
                </div>
                <div className="flex items-center space-x-2 text-fuchsia-300">
                  <MapPin className="w-6 h-6" />
                  <span>2820 Soniat St. New Orleans, LA 70115</span>
                </div>
                <div className="flex items-center space-x-2 text-fuchsia-300">
                  <MessageSquare className="w-6 h-6" />
                  <span>@sreyeMnayR</span>
                </div>
              </div>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <Input
                  placeholder="Your Name"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="bg-fuchsia-900 border-fuchsia-500 text-white placeholder-fuchsia-300"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-fuchsia-900 border-fuchsia-500 text-white placeholder-fuchsia-300"
                />
                <Textarea
                  placeholder="Your Message"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  className="bg-fuchsia-900 border-fuchsia-500 text-white placeholder-fuchsia-300"
                />
                <Button
                  type="submit"
                  disabled={!subject || !body}
                  className="w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white pixel-text"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-fuchsia-500">
        <p className="text-xs text-zinc-400 dark:text-zinc-400">
          © 2024 Ryan Meyers. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4 text-zinc-400 hover:text-fuchsia-400"
            href="#"
          >
            Terms of Service
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4 text-zinc-400 hover:text-fuchsia-400"
            href="#"
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
