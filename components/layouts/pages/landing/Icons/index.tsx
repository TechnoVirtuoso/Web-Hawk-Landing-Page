import ICON_CHARTHOP from "@/components/ui/IconsSvg/ICON_CHARTHOP";
import ICON_CYBERHEAVEN from "@/components/ui/IconsSvg/ICON_CYBERHEAVEN";
import ICON_PILOT from "@/components/ui/IconsSvg/ICON_PILOT";
import ICON_VERKADA from "@/components/ui/IconsSvg/ICON_VERKADA";
import "./index.scss";
import ICON_VOUCH from "@/components/ui/IconsSvg/ICON_VOUCH";
import Marquee from "react-fast-marquee";

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
    return (
        <div className="Landing-Icons">
            <div className="padd-wrapper">
                <Marquee loop={0}>
                    {AllIcons.map((Icon, i) => (
                        <div
                            style={{
                                padding: "0 20px",
                            }}
                            className="icon-wrapper"
                            key={i}
                        >
                            <Icon />
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
};

export default Icons;
