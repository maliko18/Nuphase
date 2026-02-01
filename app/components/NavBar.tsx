"use client";
import { ThemeSwitcher } from "../components/ThemeSwitcher";
import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/react";
import { useState } from "react";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const menuItems = [
    "Home",
    "About Us",
    "Services",
    "Products",
    "Technology & Innovation",
    "Contact Us",
  ];

  return (
    <>
      <Navbar
        height="7rem"
        isBlurred
        isMenuOpen={isMenuOpen}
        shouldHideOnScroll
        onMenuOpenChange={setIsMenuOpen}
        className="dark:shadow-blue-500/20" // 👈 Fixed position avec z-index élevé
        classNames={{
          wrapper: ["px-1", "max-w-7xl"],

          item: [
            "flex",
            "relative",
            "h-full",
            "items-center",
            // Pseudo-element de base (toujours présent)
            "after:content-['']",
            "after:absolute",
            "after:bottom-0",
            "after:left-0",
            "after:right-0",
            "after:h-[2px]",
            "after:rounded-[2px]",
            "after:bg-primary",
            // Animation
            "after:scale-x-0",
            "data-[active=true]:after:scale-x-100",
            "after:transition-transform",
            "after:duration-300",
            "after:ease-in-out",
          ],
        }}
      >
        <NavbarContent justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden"
          />
          <NavbarBrand>
            <AcmeLogo />
            <div className="flex flex-col leading-tight">
              <p className="font-bold text-inherit text-lg">NuPhase</p>
              <p className="text-xs text-primary font-medium">Measurements</p>
            </div>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="hidden lg:flex gap-10" justify="center">
          {menuItems.map((item, index) => (
            <NavbarItem key={index} isActive={index === activeIndex}>
              <Link
                color={index === activeIndex ? "primary" : "foreground"}
                href="#"
                onClick={() => setActiveIndex(index)}
                className="relative z-10 transition-colors duration-200 font-bold"
              >
                {item}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <ThemeToggle />
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                color={
                  index === menuItems.length - 1
                    ? "danger"
                    : index === activeIndex
                      ? "primary"
                      : "foreground"
                }
                href="#"
                size="lg"
                onClick={() => setActiveIndex(index)}
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  );
}
