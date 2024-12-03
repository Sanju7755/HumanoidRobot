'use client';

import React, { useState,useEffect } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import ThemeToggle from "./Theme-provider";



function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    

  return (
    <div
    className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
        <Menu setActive={setActive}>
            <Link href={"/"}>
            <MenuItem setActive={setActive} active={active} item="Home">
            
            </MenuItem>
            </Link>
            <Link href="/functions">
            <MenuItem
            setActive={setActive} active={active} item="Functions"
            >
            </MenuItem>
            </Link>
            <Link href={"/contact"}>
            <MenuItem setActive={setActive} active={active} item="Contact Us">
            </MenuItem>
            </Link>
        </Menu>
        <div className={cn("fixed top-10 right-5   sm:right-0 md:right-0 z-50 p-5", className)}><ThemeToggle/></div>
    </div>
  )
}

export default Navbar