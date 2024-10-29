import React, { FC, useEffect, useState } from "react";

interface SpacerProps {
    paddingTop?: number;
    breakpoints?: { [key: number]: number }; // Object with breakpoint widths as keys and paddingTop values as values
}

const Spacer: FC<SpacerProps> = ({ paddingTop, breakpoints }) => {
    const [currentPaddingTop, setCurrentPaddingTop] = useState(paddingTop);

    useEffect(() => {
        const updatePaddingTop = () => {
            if (breakpoints) {
                // Sort breakpoints in descending order
                const sortedBreakpoints = Object.keys(breakpoints)
                    .map(Number)
                    .sort((a, b) => b - a);

                // Find the first breakpoint that matches the current window width
                const matchedBreakpoint = sortedBreakpoints.find(
                    (bp) => window.innerWidth <= bp
                );

                setCurrentPaddingTop(
                    matchedBreakpoint !== undefined
                        ? breakpoints[matchedBreakpoint]
                        : paddingTop
                );
            } else {
                setCurrentPaddingTop(paddingTop);
            }
        };

        updatePaddingTop();
        window.addEventListener("resize", updatePaddingTop);

        return () => window.removeEventListener("resize", updatePaddingTop);
    }, [paddingTop, breakpoints]);

    const style = {
        paddingTop: currentPaddingTop,
    };

    return <div style={style} />;
};

export default Spacer;
