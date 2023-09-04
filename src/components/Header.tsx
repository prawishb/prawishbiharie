import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useMediaQuery } from "@mantine/hooks";

const navLinks: TLink[] = [
  { caption: "Home", url: "/" },
  { caption: "About", url: "/about" },
  { caption: "Blog", url: "/blog" },
  { caption: "Contact", url: "/contact" },
];

const Header = () => {
  const [isHeaderHidden, setIsHeaderHidden] = useState<boolean>(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previousValue = scrollY.getPrevious();
    if (latest > previousValue && latest > 85) setIsHeaderHidden(true);
    else setIsHeaderHidden(false);
  });

  const desktopView = useMediaQuery("(min-width: 768px)");

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={isHeaderHidden ? "hidden" : "visible"}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="bg-neutral-900/80 backdrop-blur-md text-neutral-100 fixed top-0 inset-x-0 z-[9999]"
    >
      <nav className="max-w-3xl mx-auto p-4 h-20 w-full flex items-center justify-between">
        <h1 className="font-semibold tracking-wider text-lg">prawishbiharie</h1>

        {desktopView && (
          <ul className="flex items-center gap-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url}>{link.caption}</a>
              </li>
            ))}
          </ul>
        )}

        {!desktopView && (
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75H12a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;
