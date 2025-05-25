"use client";
import React, {  useState } from "react";
import { HoveredLink, Menu, MenuItem } from '@/components/ui/text-hover-effect';
import { cn }  from '@/lib/utils/utils'
import Link from "next/link";


export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
   <Menu setActive={setActive}> 
    <Link href={"/"}>
    <MenuItem setActive={setActive} active={active}
    item="Home">
  
    </MenuItem>
    </Link>


    {/* second menuitem */}
    <MenuItem setActive={setActive} active={active}
    item="Our Courses">
    <div className="flex flex-col space-y-4"> 
    <HoveredLink href="/courses">All Courses</HoveredLink>
    <HoveredLink href="/music-theory">Basic Music Theory</HoveredLink>
    <HoveredLink href="/advanced">Advanced Composition</HoveredLink>
    <HoveredLink href="/songwrite">Songwriting</HoveredLink>
    <HoveredLink href="/music-production">Music Production</HoveredLink>
    </div>
    </MenuItem>


<Link href={"/contact"}>
<MenuItem setActive={setActive} active={active} item="Contact Us"></MenuItem>

</Link>

     </Menu>
    </div>
  );
}