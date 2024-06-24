"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

export const NavBar = () => {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x:'100vw',
    },
    opened: {
      x: 0,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1,
      }
    }
  }

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    }
  }

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* DSK MENU */}
      <div className="hidden md:flex gap-4 flex-1 text-xl">
        {links.map((link) => (
          <Link
            href={link.url}
            key={link.title}
            className={`rounded p-1 ${
              pathName === link.url && "bg-black text-white"
            }`}>
            {link.title}
          </Link>
        ))}
      </div>
      {/* LOGO */}
      <div className="md:hidden lg:flex lg:flex-1 lg:justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center">
          <span className="text-white mr-1">Lama</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            .dev
          </span>
        </Link>
      </div>
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">
          <Image src="/github.png" alt="github" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/dribbble.png" alt="dribbble" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/linkedin.png" alt="linkedin" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/pinterest.png" alt="pinterest" width={24} height={24} />
        </Link>
      </div>
      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen(!open)}>
          <motion.div
          animate={open ? "opened" : "closed"}
            variants={topVariants}
            className="w-10 h-1 bg-black rounded origin-left"></motion.div>
          <motion.div
          animate={open ? "opened" : "closed"}
            variants={centerVariants}
            className="w-10 h-1 bg-black rounded"></motion.div>
          <motion.div
          animate={open ? "opened" : "closed"}
            variants={bottomVariants}
            className="w-10 h-1 bg-black rounded origin-left"></motion.div>
        </button>
        {/* MENU LIST */}
        {open && (
          <motion.div initial="closed" animate="opened" variants={listVariants} className="text-4xl absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 z-40">
            {links.map((link) => (
              <motion.div variants={listItemVariants} key={link.title}>
                <Link href={link.url} >
                  {link.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};
