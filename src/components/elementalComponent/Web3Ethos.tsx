"use client";

import React from "react";
import {
  curveline1,
  curveline2,
  curveline3,
  curveline4,
} from "../Web3VectorImage";

const features = [
  {
    id: 1,
    text: ["COMPLIANT BY DEFAULT (KYC/AML,", "GDPR, FATF)"],
    Curve: curveline1,
    circlePosition: { top: -10, right: -20 },
    textPosition: { top: 80, right: -80 },
  },
  {
    id: 2,
    text: ["COMPLIANT BY DEFAULT (KYC/AML, GDPR,", "FATF)"],
    Curve: curveline2,
    circlePosition: { top: -10, left: -20 },
    textPosition: { top: 80, left: -80 },
  },
  {
    id: 3,
    text: ["MODULAR & COMPOSABLE TO FIT ANY", "STACK"],
    Curve: curveline3,
    circlePosition: { bottom: -10, right: -20 },
    textPosition: { bottom: 80, right: -80 },
  },
  {
    id: 4,
    text: ["SECURITY-FIRST WORKFLOWS WITH", "CONSTANT AUDIT TRAILS"],
    Curve: curveline4,
    circlePosition: { bottom: -10, left: -20 },
    textPosition: { bottom: 80, left: -80 },
  },
];

const Web3Ethos = () => {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
        padding: "100px 20px",
        overflow: "hidden",
      }}
    >
      <h2
        style={{
          fontSize: "48px",
          fontWeight: 600,
          color: "#000",
          marginBottom: "120px",
          textAlign: "center",
        }}
      >
        Built for the Web3 Ethos
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "100px 200px",
          width: "1000px",
          maxWidth: "90vw",
        }}
      >
        {features.map((feature) => {
          const Curve = feature.Curve;
          return (
            <div
              key={feature.id}
              style={{
                position: "relative",
                height: "180px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              >
                <Curve />
              </div>

              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: "#8B3DFF",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "22px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "absolute",
                  ...feature.circlePosition,
                }}
              >
                {feature.id}
              </div>

              <div
                style={{
                  position: "absolute",
                  ...feature.textPosition,
                  width: "300px",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#000",
                    letterSpacing: "0.5px",
                    lineHeight: 1.4,
                    textTransform: "uppercase",
                  }}
                >
                  {feature.text[0]}
                  <br />
                  {feature.text[1]}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Web3Ethos;
