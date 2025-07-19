"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
const Web3SpeedShort = () => {
    const [screenSize, setScreenSize] = useState("desktop");
    useEffect(() => {
        const checkScreen = () => {
            const width = window.innerWidth;
            if (width < 768) {
                setScreenSize("mobile");
            }
            else if (width < 1024) {
                setScreenSize("tablet");
            }
            else {
                setScreenSize("desktop");
            }
        };
        checkScreen();
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, []);
    const isMobile = screenSize === "mobile";
    const isTablet = screenSize === "tablet";
    const getResponsiveStyles = () => {
        const baseStyles = {
            container: {
                position: "relative",
                width: "100%",
                padding: isMobile ? "40px 16px" : isTablet ? "60px 24px" : "80px 20px",
                boxSizing: "border-box",
                fontFamily: "sans-serif",
                minHeight: isMobile ? "400px" : isTablet ? "500px" : "600px",
            },
            heading: {
                fontSize: isMobile ? "20px" : isTablet ? "40px" : "48px",
                fontWeight: 500,
                marginTop: isMobile ? "20px" : "36px",
                color: "#000",
                marginBottom: isMobile ? "60px" : isTablet ? "80px" : "120px",
                textAlign: "center",
                padding: isMobile ? "0 16px" : isTablet ? "0 24px" : "0 6vw",
                lineHeight: 1.2,
            },
            dot: {
                width: isMobile ? 28 : isTablet ? 32 : 36,
                height: isMobile ? 28 : isTablet ? 32 : 36,
                backgroundColor: "#7A35C1",
                color: "#fff",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "bold",
                fontSize: isMobile ? 14 : isTablet ? 16 : 18,
                position: "absolute",
                zIndex: 2,
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            },
            text: {
                position: "absolute",
                fontSize: isMobile ? 12 : isTablet ? 14 : 18,
                fontWeight: 500,
                color: "#000",
                fontFamily: "switzer",
                maxWidth: isMobile ? 180 : isTablet ? 250 : 300,
                lineHeight: 1.4,
                textTransform: "uppercase",
            },
            section: {
                position: "absolute",
                width: "100%",
                padding: isMobile ? "20px 0" : "40px 0",
            },
        };
        return baseStyles;
    };
    const styles = getResponsiveStyles();
    const getLineDimensions = () => {
        if (isMobile) {
            return { width: "100%", height: "80", viewBox: "0 0 400 80" };
        }
        else if (isTablet) {
            return { width: "100%", height: "100", viewBox: "0 0 500 100" };
        }
        return { width: "591", height: "120", viewBox: "0 0 591 120" };
    };
    const lineDims = getLineDimensions();
    const Line1 = () => (_jsx("svg", { width: lineDims.width, height: lineDims.height, viewBox: lineDims.viewBox, fill: "none", xmlns: "http://www.w3.org/2000/svg", style: {
            position: "absolute",
            top: 0,
            right: 0,
            maxWidth: "100%",
            height: "auto",
            display: isMobile || isTablet ? "none" : "block",
        }, children: _jsx("path", { d: "M0 119.18L119.5 -0.320068H591", stroke: "black", strokeWidth: isMobile ? "1" : "1" }) }));
    const Line2 = () => (_jsx("svg", { width: lineDims.width, height: lineDims.height, viewBox: lineDims.viewBox, fill: "none", xmlns: "http://www.w3.org/2000/svg", style: {
            position: "absolute",
            top: 0,
            left: 0,
            maxWidth: "100%",
            height: "auto",
            display: isMobile || isTablet ? "none" : "block",
        }, children: _jsx("path", { d: "M591 0.339844L471.5 119.84H0", stroke: "black", strokeWidth: isMobile ? "1" : "1" }) }));
    const Line3 = () => (_jsx("svg", { width: lineDims.width, height: lineDims.height, viewBox: lineDims.viewBox, fill: "none", xmlns: "http://www.w3.org/2000/svg", style: {
            position: "absolute",
            top: 0,
            right: 0,
            transform: "scaleX(-1)",
            maxWidth: "100%",
            height: "auto",
            display: isMobile || isTablet ? "none" : "block",
        }, children: _jsx("path", { d: "M591 0.339844L471.5 119.84H0", stroke: "black", strokeWidth: isMobile ? "1" : "1" }) }));
    const getPositioning = () => {
        if (isMobile) {
            return {
                dot1: { top: -40, right: "20%" },
                text1: { top: 20, right: "5%" },
                dot2: { top: 40, left: "20%" },
                text2: { top: 100, left: "5%" },
                dot3: { top: 40, right: "20%" },
                text3: { top: 80, right: "5%" },
                section2: { top: 120 },
                section3: { top: 240 },
            };
        }
        else if (isTablet) {
            return {
                dot1: { top: -50, right: 300 },
                text1: { top: 25, right: 120 },
                dot2: { top: 50, left: 320 },
                text2: { top: 125, left: 20 },
                dot3: { top: 50, right: 320 },
                text3: { top: 100, right: 100 },
                section2: { top: 160 },
                section3: { top: 320 },
            };
        }
        return {
            dot1: { top: -60, right: 420 },
            text1: { top: 30, right: 180 },
            dot2: { top: 60, left: 420 },
            text2: { top: 150, left: 0 },
            dot3: { top: 60, right: 430 },
            text3: { top: 150, right: 150 },
            section2: { top: 200 },
            section3: { top: 400 },
        };
    };
    const positions = getPositioning();
    return (_jsxs("div", { className: "max-w-[1200px] mx-auto py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-8", children: [_jsx("h2", { style: styles.heading, children: "Built for Web3 Speed" }), _jsxs("div", { style: styles.container, children: [_jsx(Line1, {}), _jsx("div", { style: { ...styles.dot, ...positions.dot1 }, children: "1" }), _jsx("div", { style: {
                            ...styles.text,
                            ...positions.text1,
                            whiteSpace: isMobile ? "normal" : "nowrap",
                        }, children: "DEEP TECHNICAL + CRYPTO FLUENCY" }), _jsxs("div", { style: {
                            ...styles.section,
                            top: positions.section2.top,
                            left: 0,
                        }, children: [_jsx(Line2, {}), _jsx("div", { style: { ...styles.dot, ...positions.dot2 }, children: "2" }), _jsx("div", { style: {
                                    ...styles.text,
                                    ...positions.text2,
                                    whiteSpace: isMobile ? "normal" : "nowrap",
                                }, children: "FAST TURNAROUND, AGILE PLANNING" })] }), _jsxs("div", { style: {
                            ...styles.section,
                            top: positions.section3.top,
                            left: 0,
                        }, children: [_jsx(Line3, {}), _jsx("div", { style: { ...styles.dot, ...positions.dot3 }, children: "3" }), _jsxs("div", { style: {
                                    ...styles.text,
                                    ...positions.text3,
                                    whiteSpace: isMobile ? "normal" : "nowrap",
                                }, children: ["CLEAR KPIs: WALLET GROWTH, TVL, ", _jsx("br", {}), "RETENTION \u2013 NOT VANITY CLICKS"] })] })] })] }));
};
export default Web3SpeedShort;
