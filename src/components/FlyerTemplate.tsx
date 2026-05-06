import React from "react";
import Image from "next/image";
import Logo from '../../assets/flyer-logo-no-bg.png';
import Background from '../../assets/flyer-bg.png';
import Footer from '../../assets/flyer-footer-no-bg.png';

interface FlyerTemplateProps {
  teamName: string;
  memberName: string;
  profileImage: string | null;
}

export const FlyerTemplate = React.forwardRef<
  HTMLDivElement,
  FlyerTemplateProps
>(({ teamName, memberName, profileImage }, ref) => {
  return (
    <div
      ref={ref}
      style={{
        width: "520px",
        minWidth: "520px",
        maxWidth: "520px",
        height: "580px",
        minHeight: "580px",
        maxHeight: "580px",
        flex: "0 0 520px",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Inter', sans-serif",
        boxSizing: "border-box",
        borderRadius: 0,
      }}
    >
      {/* ── BACKGROUND: Stormy sky image from assets ── */}
      <img
        src={Background.src}
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          zIndex: 0,
        }}
      />
      {/* Subtle dark overlay to ensure text readability */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(4, 10, 18, 0.35)",
          zIndex: 1,
        }}
      />

      {/* ── REGISTERED watermark text ── */}
      <div
        data-flyer-registered
        style={{
          position: "absolute",
          top: "162px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          height: "120px",
          lineHeight: "115px",
          whiteSpace: "nowrap",
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        <svg
          width="700"
          height="115"
          viewBox="0 0 700 115"
          aria-hidden="true"
          style={{
            width: "700px",
            minWidth: "700px",
            maxWidth: "700px",
            height: "115px",
            minHeight: "115px",
            maxHeight: "115px",
            display: "block",
            overflow: "visible",
            filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.5))",
          }}
        >
          <text
            x="350"
            y="70"
            textAnchor="middle"
            textLength="420"
            lengthAdjust="spacingAndGlyphs"
            style={{
              fill: "rgba(140, 160, 180, 0.38)",
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "95px",
              fontWeight: 900,
              letterSpacing: "-2px",
              textTransform: "uppercase",
            }}
          >
            REGISTERED
          </text>
        </svg>
      </div>

      {/* ── TOP BAR ── */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          padding: "22px 24px 0",
        }}
      >
        {/* Top-left: Event title */}
        <div>
          <div
            style={{
              fontSize: "17px",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.2,
              letterSpacing: "0.01em",
              marginTop: "10px",
              fontFamily: "'Inter', sans-serif"
            }}
          >
            Inter University
          </div>
          <div
            style={{
              fontSize: "17px",
              fontWeight: 800,
              color: "#00d4ff",
              lineHeight: 1.2,
              letterSpacing: "0.01em",
            }}
          >
            Cloud Ideathon
          </div>
        </div>

        {/* Top-right: Event logo from assets */}
        <img
          src={Logo.src}
          alt="Beauty of Cloud 2.0"
          style={{
            width: "72px",
            height: "72px",
            objectFit: "contain",
          }}
        />
      </div>

      {/* ── PROFILE IMAGE overlaid on REGISTERED text ── */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -54%)",
          zIndex: 5,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Outer glow halo */}
        <div
          style={{
            position: "absolute",
            width: "230px",
            height: "230px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0,160,255,0.2) 0%, transparent 70%)",
          }}
        />
        {/* Glowing ring */}
        <div
          style={{
            width: "198px",
            height: "198px",
            borderRadius: "50%",
            padding: "3px",
            background:
              "conic-gradient(from 180deg, #00aaff, #0055cc, #00d4ff, #0099ee, #00aaff)",
            boxShadow:
              "0 0 28px rgba(0,170,255,0.7), 0 0 60px rgba(0,120,220,0.35)",
            position: "relative",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              background: "#0a1520",
              overflow: "hidden",
            }}
          >
            {profileImage ? (
              <img
                src={profileImage}
                alt={memberName}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top center",
                }}
              />
            ) : (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background:
                    "linear-gradient(180deg, #112030 0%, #0a1520 100%)",
                }}
              >
                <svg viewBox="0 0 80 80" width="80" height="80" fill="none">
                  <circle
                    cx="40"
                    cy="28"
                    r="18"
                    fill="rgba(0,150,220,0.3)"
                    stroke="rgba(0,180,255,0.4)"
                    strokeWidth="1.5"
                  />
                  <ellipse
                    cx="40"
                    cy="72"
                    rx="28"
                    ry="20"
                    fill="rgba(0,130,200,0.25)"
                    stroke="rgba(0,180,255,0.35)"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── BOTTOM TEXT SECTION ── */}
      <div
        style={{
          position: "absolute",
          bottom: "68px",
          left: 0,
          right: 0,
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2px",
          textAlign: "center",
          padding: "0 24px",
        }}
      >
        {/* Member name */}
        <h2
          style={{
            margin: 0,
            fontSize: "30px",
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: "0.02em",
            textShadow: "0 2px 12px rgba(0,0,0,0.6)",
            lineHeight: 1.15,
            fontFamily: "'Barlow Condensed', sans-serif"
          }}
        >
          {memberName || "Your Name"}
        </h2>

        {/* FROM */}
        <p
          style={{
            margin: "6px 0 2px",
            fontSize: "11px",
            fontWeight: 700,
            color: "#00d4ff",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            fontFamily: "'Inter', sans-serif"
          }}
        >
          FROM
        </p>

        {/* TEAM label */}
        <p
          style={{
            margin: 0,
            fontSize: "13px",
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            opacity: 0.8,
            fontFamily: "'Barlow Condensed', sans-serif"
          }}
        >
          TEAM
        </p>

        {/* Team name */}
        <h3
          style={{
            margin: "2px 0 0",
            fontSize: "26px",
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            fontFamily: "'Barlow Condensed', sans-serif",
            textShadow: "0 2px 12px rgba(0,0,0,0.5)",
            lineHeight: 1.1,
          }}
        >
          {teamName || "Team Name"}
        </h3>
      </div>

      {/* ── FOOTER: Single image from assets ── */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          padding: "10px 24px 14px",
          background:
            "linear-gradient(0deg, rgba(0,0,0,0.55) 0%, transparent 100%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={Footer.src}
          alt="Organized by USJ IEEE Student Branch & IEEE Computer Society"
          style={{
            width: "246px",
            height: "44px",
            objectFit: "contain",
            display: "block",
          }}
        />
      </div>
    </div>
  );
});

FlyerTemplate.displayName = "FlyerTemplate";
