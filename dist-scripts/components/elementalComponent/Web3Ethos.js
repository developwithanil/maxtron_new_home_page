"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const curveline1 = () => (_jsx("svg", { width: "591", height: "120", viewBox: "0 0 591 120", fill: "none", xmlns: "http://www.w3.org/2000/svg", style: { position: "absolute", top: 0, left: 0 }, children: _jsx("path", { d: "M591 119.18L471.5 -0.320068H0", stroke: "black" }) }));
const curveline2 = () => {
    return (_jsx("svg", { width: "591", height: "120", viewBox: "0 0 591 120", fill: "none", xmlns: "http://www.w3.org/2000/svg", style: { position: "absolute", top: 0, left: 0 }, children: _jsx("path", { d: "M0 119.18L119.5 -0.320068H591", stroke: "black" }) }));
};
const curveline3 = () => {
    return (_jsx("svg", { width: "591", height: "120", viewBox: "0 0 591 120", fill: "none", xmlns: "http://www.w3.org/2000/svg", style: { position: "absolute", top: 0, left: 0 }, children: _jsx("path", { d: "M591 0.339844L471.5 119.84H0", stroke: "black" }) }));
};
const curveline4 = () => {
    return (_jsx("svg", { width: "591", height: "120", viewBox: "0 0 591 120", fill: "none", xmlns: "http://www.w3.org/2000/svg", style: { position: "absolute", top: 0, left: 0, transform: "scaleX(-1)" }, children: _jsx("path", { d: "M591 0.339844L471.5 119.84H0", stroke: "black" }) }));
};
const features = [
    {
        id: 1,
        text: ["DECENTRALIZED FIRST-ARCHITECTURE"],
        Curve: curveline1,
        circlePosition: { top: -30, right: 110 },
        textPosition: { top: 80, right: 0 },
    },
    {
        id: 2,
        text: ["COMPLIANT BY DEFAULT (KYC/AML, GDPR,", "FATF)"],
        Curve: curveline2,
        circlePosition: { top: -30, left: 150 },
        textPosition: { top: 80, left: 30 },
    },
    {
        id: 3,
        text: ["MODULAR & COMPOSABLE TO FIT ANY", "STACK"],
        Curve: curveline3,
        circlePosition: { bottom: -40, right: 110 },
        textPosition: { bottom: 80, right: 10 },
    },
    {
        id: 4,
        text: ["SECURITY-FIRST WORKFLOWS WITH", "CONSTANT AUDIT TRAILS"],
        Curve: curveline4,
        circlePosition: { bottom: -40, left: 160 },
        textPosition: { bottom: 80, left: -5 },
    },
];
const responsiveContainer = {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "sans-serif",
    gap: "60px",
    padding: "60px 10px",
    overflow: "hidden",
};
const responsiveTitle = {
    fontSize: "48px",
    fontWeight: 500,
    marginTop: "36px",
    color: "#000",
    marginBottom: "48px",
    textAlign: "center",
    padding: "0 6vw",
};
const gridBase = {
    display: "grid",
    backgroundColor: "#FFF",
    gridTemplateColumns: "1fr",
    gap: "56px 0",
    width: "100%",
    maxWidth: "100%",
};
const gridLarge = {
    gridTemplateColumns: "1fr 1fr",
    gap: "80px 40px",
    maxWidth: "1160px",
};
const featureCardBase = {
    position: "relative",
    minHeight: "160px",
    width: "100%",
    maxWidth: "98vw",
    margin: "0 auto",
};
const circleStyleBase = {
    width: "44px",
    height: "44px",
    borderRadius: "50%",
    background: "rgba(122, 53, 193, 1)",
    color: "#fff",
    fontWeight: 700,
    fontSize: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
};
const textStyleBase = {
    position: "absolute",
    width: "84vw",
    maxWidth: "600px",
    textAlign: "center",
    fontFamily: "Switzer",
    fontStyle: "medium",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    fontSize: "16px",
    fontWeight: 600,
    color: "#000",
    letterSpacing: "0.5px",
    lineHeight: 1.4,
    textTransform: "uppercase",
    margin: "0 auto",
};
const pStyle = { margin: 0, padding: 0 };
const Web3Ethos = () => {
    const isLarge = typeof window !== "undefined" && window.innerWidth >= 900;
    const gridStyle = isLarge ? { ...gridBase, ...gridLarge } : gridBase;
    const getTextStyle = () => ({
        ...textStyleBase,
        fontSize: isLarge ? "24px" : "16px",
    });
    return (_jsxs("div", { style: responsiveContainer, children: [_jsx("h2", { style: responsiveTitle, children: "Built for the Web3 Ethos" }), _jsx("div", { style: gridStyle, children: features.map((feature) => {
                    const Curve = feature.Curve;
                    return (_jsxs("div", { style: featureCardBase, children: [_jsx("div", { style: {
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    opacity: isLarge ? 1 : 0,
                                }, children: _jsx(Curve, {}) }), _jsx("div", { style: {
                                    ...circleStyleBase,
                                    ...feature.circlePosition,
                                    transform: "translate(0, -50%)",
                                }, children: feature.id }), _jsxs("div", { style: {
                                    ...getTextStyle(),
                                    ...feature.textPosition,
                                }, children: [_jsx("p", { style: pStyle, children: feature.text[0] }), _jsx("p", { style: { ...pStyle, marginTop: "4px" }, children: feature.text[1] })] })] }, feature.id));
                }) })] }));
};
export default Web3Ethos;
