import React, { useState, useEffect } from "react";

const useResponsiveValue = <T,>(bp: number, value1: T, value2: T): T => {
    const [responsiveValue, setResponsiveValue] = useState<T>(() =>
        window.innerWidth > bp ? value1 : value2
    );

    useEffect(() => {
        const handleResize = () => {
            setResponsiveValue(window.innerWidth > bp ? value1 : value2);
        };

        window.addEventListener("resize", handleResize);

        // Run on initial load
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, [bp, value1, value2]);

    return responsiveValue;
};

export default useResponsiveValue;
