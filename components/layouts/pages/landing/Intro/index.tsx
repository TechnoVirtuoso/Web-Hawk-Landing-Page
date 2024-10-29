import React, { FC } from "react";
import "./index.scss";

type Props = {
    Title: string | FC;
    sub_title: string;
    font?: "LIGHT";
};
const Intro: FC<Props> = ({ Title, sub_title, font }) => {
    return (
        <div className="Landing-Intro">
            <div className={`title ${font}`}>
                {typeof Title === "string" ? Title : <Title />}
            </div>
            <div className={`sub_title ${font}`}>{sub_title}</div>
        </div>
    );
};

export default Intro;
