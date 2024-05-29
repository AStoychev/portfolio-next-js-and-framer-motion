"use client"
import { useState } from "react";

import { FloatingNav } from "@/components/ui/FloatingNav";
import Popup from "@/components/Popup";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";

import { navItems } from "@/data";

import { FaHome } from "react-icons/fa";

export default function Home() {
    const [popup, setPopup] = useState<boolean>(false);
    const [count, setCount] = useState<number>(0);

    function handleClosePopup() {
        setPopup(false)
    };

    const handleMouseOver = () => {
        if (count <= 0) {
            setPopup(true)
            setCount(1)
        }
    };

    return (
        <main className="
        relative bg-black-100 flex justify-center
        items-center flex-col mx-auto
        sm:px-10 px-5 overflow-clip">
            {popup && <Popup handleClosePopup={handleClosePopup} />}
            <div className="max-w-7xl w-full">
                <FloatingNav navItems={navItems} />
                <Hero />
                <Grid handleMouseOver={handleMouseOver}/>
                <RecentProjects />
                <Clients />
                <Experience />
                <Approach />
                <Footer />
            </div>
        </main>
    );
}
