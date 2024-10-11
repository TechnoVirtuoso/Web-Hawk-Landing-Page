"use client"
import React, { useEffect, useState } from 'react'




const Typewriter = ({ texts, period }: any) => {
  const [text, setText] = useState("Leads");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(200);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % texts.length;
      const fullText = texts[i];

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
        setTypingSpeed((prevSpeed) => prevSpeed / 2);
      } else {
        setText(fullText.substring(0, text.length + 1));
      }

      if (!isDeleting && text === fullText) {
        setTypingSpeed(period);
        setIsDeleting(true);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer); 
  }, [text, isDeleting, typingSpeed, loopNum, texts, period]);

  return (
    <h1>
      <span className="text-pink-500 min-h-32 border-r-4 pr-2 border-r-pink-500">{text || "\u00A0"}</span>
    </h1>
  );
};


export default Typewriter;