"use client";

import React from "react";

const curveline1 = () => (
  <svg
    width="591"
    height="120"
    viewBox="0 0 591 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ position: "absolute", top: 0, left: 0 }}
  >
    <path d="M591 119.18L471.5 -0.320068H0" stroke="black" />
  </svg>
);

const curveline2 = () => {
  return (
    <svg
      width="591"
      height="120"
      viewBox="0 0 591 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute", top: 0, left: 0 }}
    >
      <path d="M0 119.18L119.5 -0.320068H591" stroke="black" />
    </svg>
  );
};

const curveline3 = () => {
  return (
    <svg
      width="591"
      height="120"
      viewBox="0 0 591 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute", top: 0, left: 0 }}
    >
      <path d="M591 0.339844L471.5 119.84H0" stroke="black" />
    </svg>
  );
};

const curveline4 = () => {
  return (
    <svg
      width="591"
      height="120"
      viewBox="0 0 591 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute", top: 0, left: 0, transform: "scaleX(-1)" }}
    >
      <path d="M591 0.339844L471.5 119.84H0" stroke="black" />
    </svg>
  );
};

const features = [
  {
    id: 1,
    text: ["COMPLIANT BY DEFAULT (KYC/AML,", "GDPR, FATF)"],
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
  display: "flex" as const,
  flexDirection: "column" as const,
  alignItems: "center" as const,
  justifyContent: "center" as const,
  fontFamily: "sans-serif",
  gap: "60px",
  padding: "60px 10px",
  overflow: "hidden" as const,
};

const responsiveTitle = {
  fontSize: "48px",
  fontWeight: 500,
  marginTop: "36px",
  color: "#000",

  marginBottom: "48px",
  textAlign: "center" as const,
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
  position: "relative" as const,
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
  position: "absolute" as const,
  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
};

const textStyleBase = {
  position: "absolute" as const,
  width: "84vw",
  maxWidth: "600px",
  textAlign: "center" as const,
  fontFamily: "Switzer",
  fontStyle: "medium",
  display: "flex" as const,
  flexDirection: "column" as const,
  justifyContent: "center" as const,
  fontSize: "16px",
  fontWeight: 600,
  color: "#000",
  letterSpacing: "0.5px",
  lineHeight: 1.4,
  textTransform: "uppercase" as const,
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

  return (
    <div style={responsiveContainer}>
      <h2 style={responsiveTitle}>Built for the Web3 Ethos</h2>
      <div style={gridStyle}>
        {features.map((feature) => {
          const Curve = feature.Curve;
          return (
            <div key={feature.id} style={featureCardBase}>
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  opacity: isLarge ? 1 : 0,
                }}
              >
                <Curve />
              </div>

              <div
                style={{
                  ...circleStyleBase,
                  ...feature.circlePosition,
                  transform: "translate(0, -50%)",
                }}
              >
                {feature.id}
              </div>

              <div
                style={{
                  ...getTextStyle(),
                  ...feature.textPosition,
                }}
              >
                <p style={pStyle}>{feature.text[0]}</p>
                <p style={{ ...pStyle, marginTop: "4px" }}>{feature.text[1]}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Web3Ethos;
