"use client";

import React from "react";

export function HighFiveIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 460 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-w-[400px]"
      >
        <defs>
          <linearGradient id="greenSleeve" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A7F3D0" />
            <stop offset="100%" stopColor="#6EE7B7" />
          </linearGradient>
          <linearGradient id="pinkSleeve" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FECDD3" />
            <stop offset="100%" stopColor="#FDA4AF" />
          </linearGradient>
        </defs>

        {/* --- High-Five Impact Lines & Sparkles --- */}
        {/* Radiating Impact Lines */}
        <line x1="230" y1="60" x2="230" y2="40" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="210" y1="70" x2="195" y2="52" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="250" y1="70" x2="265" y2="52" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="185" y1="95" x2="168" y2="85" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="275" y1="95" x2="292" y2="85" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" />

        {/* Floating Sparkle Stars */}
        {/* Star 1 */}
        <path
          d="M 315 125 Q 318 116 318 112 Q 318 116 321 125 Q 328 125 334 125 Q 328 125 321 128 Q 318 132 318 138 Q 318 132 315 128 Q 306 125 315 125 Z"
          fill="#111827"
          className="animate-pulse"
        />

        {/* Star 2 */}
        <path
          d="M 145 120 Q 147 113 147 110 Q 147 113 149 120 Q 154 120 159 120 Q 154 120 149 122 Q 147 125 147 130 Q 147 125 145 122 Q 138 120 145 120 Z"
          fill="#111827"
        />

        {/* Whimsical Curl Line */}
        <path
          d="M 140 185 C 160 180, 165 200, 150 200 C 135 200, 140 180, 160 185"
          fill="none"
          stroke="#111827"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* --- Left Arm (Green / Sage Sleeve) --- */}
        <g id="left-arm">
          {/* Sleeve Body */}
          <path
            d="M 20 280 C 60 250, 120 200, 180 180 L 195 215 C 145 235, 90 270, 60 280 Z"
            fill="url(#greenSleeve)"
            stroke="#111827"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />

          {/* Sleeve Pattern (Little cross stitches) */}
          <g opacity="0.6">
            <line x1="85" y1="240" x2="89" y2="244" stroke="#111827" strokeWidth="2" strokeLinecap="round" />
            <line x1="89" y1="240" x2="85" y2="244" stroke="#111827" strokeWidth="2" strokeLinecap="round" />
            <line x1="120" y1="218" x2="124" y2="222" stroke="#111827" strokeWidth="2" strokeLinecap="round" />
            <line x1="124" y1="218" x2="120" y2="222" stroke="#111827" strokeWidth="2" strokeLinecap="round" />
            <line x1="148" y1="202" x2="152" y2="206" stroke="#111827" strokeWidth="2" strokeLinecap="round" />
            <line x1="152" y1="202" x2="148" y2="206" stroke="#111827" strokeWidth="2" strokeLinecap="round" />
          </g>

          {/* Cuff */}
          <line x1="180" y1="180" x2="195" y2="215" stroke="#111827" strokeWidth="3.5" strokeLinecap="round" />

          {/* Left Hand & Fingers */}
          {/* Palm & Thumb */}
          <path
            d="M 180 180 C 185 160, 205 130, 222 105 C 224 102, 228 102, 230 105 L 230 145 C 225 155, 215 168, 195 215"
            fill="#FED7AA"
            stroke="#111827"
            strokeWidth="3"
            strokeLinejoin="round"
          />

          {/* Thumb */}
          <path
            d="M 195 165 C 200 155, 205 145, 208 145 C 212 145, 210 158, 205 170"
            fill="#FED7AA"
            stroke="#111827"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Finger divisions */}
          <line x1="214" y1="120" x2="228" y2="108" stroke="#111827" strokeWidth="2" strokeLinecap="round" />
          <line x1="218" y1="130" x2="230" y2="120" stroke="#111827" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* --- Right Arm (Pink Sleeve) --- */}
        <g id="right-arm">
          {/* Sleeve Body */}
          <path
            d="M 440 280 C 400 250, 340 200, 280 180 L 265 215 C 315 235, 370 270, 400 280 Z"
            fill="url(#pinkSleeve)"
            stroke="#111827"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />

          {/* Cuff */}
          <line x1="280" y1="180" x2="265" y2="215" stroke="#111827" strokeWidth="3.5" strokeLinecap="round" />

          {/* Right Hand & Fingers */}
          {/* Palm */}
          <path
            d="M 280 180 C 275 160, 255 130, 238 105 C 236 102, 232 102, 230 105 L 230 145 C 235 155, 245 168, 265 215"
            fill="#FED7AA"
            stroke="#111827"
            strokeWidth="3"
            strokeLinejoin="round"
          />

          {/* Thumb */}
          <path
            d="M 265 165 C 260 155, 255 145, 252 145 C 248 145, 250 158, 255 170"
            fill="#FED7AA"
            stroke="#111827"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Finger divisions */}
          <line x1="246" y1="120" x2="232" y2="108" stroke="#111827" strokeWidth="2" strokeLinecap="round" />
          <line x1="242" y1="130" x2="230" y2="120" stroke="#111827" strokeWidth="2" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

