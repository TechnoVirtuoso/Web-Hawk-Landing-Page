"use client"
import React, { FC, useState } from "react";
import "./index.scss";
import Image from "next/image";
// import LOGO from "@/assests/logos/LOGO1.png";
import { useRouter } from "next/navigation";
import LOGO from "@/components/ui/IconsSvg/logo";
import { usePathname } from 'next/navigation';

const Ham: FC<{ color: string }> = ({ color }) => (
    <svg
        width="35"
        height="35"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect x="10" y="34.4" width="28" height="3.2" fill={color} />
        <rect x="10" y="26.4" width="28" height="3.2" fill={color} />
        <rect x="10" y="18.4" width="28" height="3.2" fill={color} />
        <rect x="10" y="10.4" width="28" height="3.2" fill={color} />
    </svg>
);

const OpenedHam = () => (
    <svg
        width="35"
        height="35"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect x="10" y="32.4" width="28" height="3.2" fill="white" />
        <rect x="18" y="22.4" width="20" height="3.2" fill="white" />
        <rect x="26" y="12.4" width="12" height="3.2" fill="white" />
    </svg>
);

const Header = () => {
    const [MobileMenu, setMobileMenu] = useState(false);

    return (
        <div className="Landing-Header">
            <div className="logo">
               
                <LOGO/>
                {/* <img src={LOGO.src} width="137.127" height="41.045" alt="LOGO"  /> */}

            </div>
            <nav>
                <Nav setMobileMenu={setMobileMenu} />
            </nav>
            <div className="buttons">
                <button className="simple_white_btn">Get Started</button>
                <button
                    className="mobile-ham"
                    onClick={() => setMobileMenu((p) => !p)}
                >
                    {!MobileMenu ? <Ham color={"white"} /> : <OpenedHam />}
                </button>
            </div>
            <div className={`MobileMenu ${MobileMenu ? "open" : ""}`}>
                <Nav setMobileMenu={setMobileMenu} />
            </div>
        </div>
    );
};

const Nav: FC<{ setMobileMenu: (data: boolean) => void }> = ({
    setMobileMenu,
}) => {
    const router = useRouter()
    const pathname = usePathname();
    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        const offset = 300; // Set your offset here
        if (section) {
            const topPos = section.getBoundingClientRect().top + window.scrollY - offset;

            window.scrollTo({
                top: topPos,
                behavior: "smooth",
            });
        }
    };
    return (
        <ul>
            <li
             className={pathname === "/Landing" ? "active" : ""}
                onClick={() => {
                    setMobileMenu(false);
                    router.push("/Landing")
                    // scrollToSection("PRODUCT");
                }}
            >
                Home
            </li>
            <li
            className={pathname === "/how-it-works" ? "active" : ""}
                onClick={() => {
                    setMobileMenu(false);
                    router.push("/how-it-works")
                    // scrollToSection("FEATURES");
                }}
            >
                How it Works
            </li>
            <li
             className={pathname === "/pricing" ? "active" : ""}
                onClick={() => {
                    setMobileMenu(false);
                    router.push("/pricing")
                    // scrollToSection("PRICING");
                }}
            >
                Pricing
            </li>

            <li 
            className="mob_nav"
                onClick={() => {
                    setMobileMenu(false);
                    // router.push("/pricing")
                    // scrollToSection("PRICING");
                }}
            >
                Get Started
            </li>
        </ul>
    );
};

export default Header;
