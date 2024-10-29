import React, { FC } from "react";
import Intro from "../Intro";
import "./index.scss";
import BludPurple1 from "@/assests/images/BludPurple1.png";
import BludPurple from "@/assests/images/BludPurple.png";

type Props = {
    Title: string | FC;
    sub_title: string;
    font?: "LIGHT";
    bg?: "LIGHT";
};

const Pricing: FC<Props> = ({ Title, sub_title, font, bg }) => {
    return (
        <div className={`Landing-Pricing ${font}`} id="PRICING">
            <div className="Landing-Pricing-wrapper">
                <Intro Title={Title} sub_title={sub_title} font={font} />
                <div className="Pricing-items">
                    <div className="item">
                        <div
                            className="item-capture"
                            style={{
                                backgroundImage: `url(${ bg ? BludPurple.src : BludPurple1.src})`,
                            }}
                        >
                            <div className="item-wrapper">
                                <div className="title">Basic Tier</div>
                                <div className="description">
                                    Simplicity and accessibility for small
                                    businesses.
                                </div>
                                <div className="amount-per-month">
                                    <span className="mod">$399/</span> month
                                </div>
                                <div className="amount-per-year">
                                    $4,309/year (10% discount)
                                </div>
                                <ul className="items">
                                    <li>500 matches per month</li>
                                    <li>$0.10 per match over 500</li>
                                </ul>
                                <button className="simple_dark_btn">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="item mid">
                        <div
                            className="item-capture"
                            style={{
                                backgroundImage: `url(${ bg ? BludPurple.src : BludPurple1.src})`,
                            }}
                        >
                            <div className="item-wrapper">
                                <div className="title">Pro Tier</div>
                                <div className="description">
                                    Designed for growing businesses to scale.
                                </div>
                                <div className="amount-per-month">
                                    <span className="mod">$699/</span> month
                                </div>
                                <div className="amount-per-year">
                                    $7,549/year (10% discount)
                                </div>
                                <ul className="items">
                                    <li>1,500 matches per month</li>
                                    <li>$0.08 per match over 1,500</li>
                                </ul>
                                <button className="simple_dark_btn">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div
                            className="item-capture"
                            style={{
                                backgroundImage: `url(${ bg ? BludPurple.src : BludPurple1.src})`,
                            }}
                        >
                            <div className="item-wrapper">
                                <div className="title">Enterprise Tier</div>
                                <div className="description">
                                    Advanced capabilities for large enterprises.
                                </div>
                                <div className="amount-per-month">
                                    <span className="mod">$1,199/</span> month
                                </div>
                                <div className="amount-per-year">
                                    $12,949/year (10% discount)
                                </div>
                                <ul className="items">
                                    <li>5,000 matches per month</li>
                                    <li>$0.07 per match over 5,000</li>
                                </ul>
                                <button className="simple_dark_btn">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
