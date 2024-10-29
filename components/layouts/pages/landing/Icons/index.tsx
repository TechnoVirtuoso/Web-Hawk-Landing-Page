"use client";
import ICON_CHARTHOP from "@/components/ui/IconsSvg/ICON_CHARTHOP";
import ICON_CYBERHEAVEN from "@/components/ui/IconsSvg/ICON_CYBERHEAVEN";
import ICON_PILOT from "@/components/ui/IconsSvg/ICON_PILOT";
import ICON_VERKADA from "@/components/ui/IconsSvg/ICON_VERKADA";
import "./index.scss";
import ICON_VOUCH from "@/components/ui/IconsSvg/ICON_VOUCH";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect } from "react";

const AllIcons = [
    ICON_CHARTHOP,
    ICON_CYBERHEAVEN,
    ICON_PILOT,
    ICON_CYBERHEAVEN,
    ICON_VERKADA,
    ICON_CYBERHEAVEN,
    ICON_CHARTHOP,
    ICON_VOUCH,
    ICON_CHARTHOP,
    ICON_PILOT,
    ICON_CYBERHEAVEN,
    ICON_PILOT,
    ICON_CYBERHEAVEN,
    ICON_VERKADA,
];

const Icons = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            align: "start",
            loop: true,
        },
        [
            Autoplay({
                delay: 3000,
            }),
        ]
    );

    useEffect(() => {
        if (emblaApi) {
        }
    }, [emblaApi]);

    return (
        <div className="Landing-Icons">
            <div className="padd-wrapper">
                <div className="Landing-Icons-wrapper">
                    <div className="slider" ref={emblaRef}>
                        <div className="slider-container">
                            {AllIcons.map((Icon, i) => (
                                <div className="icon-wrapper" key={i}>
                                    <Icon />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Icons;
