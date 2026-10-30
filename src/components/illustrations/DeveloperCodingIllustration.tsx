"use client";

import React from "react";

export function DeveloperCodingIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 540 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-w-[480px] drop-shadow-md"
      >
        <defs>
          <linearGradient id="hoodieGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#1E40AF" />
          </linearGradient>
          <linearGradient id="laptopLidGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#CBD5E1" />
            <stop offset="100%" stopColor="#94A3B8" />
          </linearGradient>
          <linearGradient id="potGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FB7185" />
            <stop offset="100%" stopColor="#F43F5E" />
          </linearGradient>
        </defs>

        {/* --- Floating Badges (Left `{}` and Right Lightbulb) --- */}
        {/* Floating `{}` badge */}
        <g className="animate-float" style={{ animationDuration: "4.5s" }}>
          <rect
            x="48"
            y="95"
            width="58"
            height="50"
            rx="12"
            fill="#FFFFFF"
            stroke="#111827"
            strokeWidth="2.5"
          />
          <text
            x="77"
            y="128"
            textAnchor="middle"
            fontFamily="monospace"
            fontSize="22"
            fontWeight="bold"
            fill="#111827"
          >
            {`{ }`}
          </text>
        </g>

        {/* Sparkle top left */}
        <path
          d="M 125 90 Q 128 78 128 72 Q 128 78 131 90 Q 138 90 144 90 Q 138 90 131 93 Q 128 98 128 106 Q 128 98 125 93 Q 115 90 125 90 Z"
          fill="#111827"
        />

        {/* Floating Lightbulb Idea Badge */}
        <g className="animate-floatSlow">
          <circle cx="345" cy="115" r="26" fill="#FFFFFF" stroke="#111827" strokeWidth="2.5" />
          {/* Lightbulb icon */}
          <path
            d="M 345 99 C 338 99, 333 104, 333 111 C 333 115, 336 118, 339 122 L 339 126 L 351 126 L 351 122 C 354 118, 357 115, 357 111 C 357 104, 352 99, 345 99 Z"
            fill="#FBBF24"
            stroke="#111827"
            strokeWidth="2"
          />
          <line x1="341" y1="129" x2="349" y2="129" stroke="#111827" strokeWidth="2" strokeLinecap="round" />
          {/* Rays */}
          <line x1="345" y1="93" x2="345" y2="96" stroke="#111827" strokeWidth="2" strokeLinecap="round" />
          <line x1="333" y1="99" x2="331" y2="97" stroke="#111827" strokeWidth="2" strokeLinecap="round" />
          <line x1="357" y1="99" x2="359" y2="97" stroke="#111827" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Sparkle top right */}
        <path
          d="M 378 145 Q 380 137 380 133 Q 380 137 382 145 Q 387 145 392 145 Q 387 145 382 147 Q 380 151 380 157 Q 380 151 378 147 Q 370 145 378 145 Z"
          fill="#111827"
        />

        {/* --- Potted Plant on desk (Left) --- */}
        <g id="about-plant">
          {/* Ceramic Pink Pot */}
          <path
            d="M 72 320 L 126 320 L 118 368 L 80 368 Z"
            fill="url(#potGrad)"
            stroke="#111827"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          {/* Leaves */}
          <path
            d="M 99 320 Q 95 270 99 255 Q 105 270 99 320 Z"
            fill="#34D399"
            stroke="#111827"
            strokeWidth="2.5"
          />
          <path
            d="M 96 318 Q 70 290 60 270 Q 75 285 96 310 Z"
            fill="#10B981"
            stroke="#111827"
            strokeWidth="2.5"
          />
          <path
            d="M 102 318 Q 128 290 138 270 Q 123 285 102 310 Z"
            fill="#059669"
            stroke="#111827"
            strokeWidth="2.5"
          />
          <path
            d="M 95 320 Q 52 310 48 292 Q 68 302 95 318 Z"
            fill="#6EE7B7"
            stroke="#111827"
            strokeWidth="2"
          />
          <path
            d="M 103 320 Q 146 310 150 292 Q 130 302 103 318 Z"
            fill="#10B981"
            stroke="#111827"
            strokeWidth="2"
          />
        </g>

        {/* --- Developer Character: Suraj Coding at Desk --- */}
        <g id="suraj-developer">
          {/* Hair & Head Back */}
          <path
            d="M 180 145 C 170 120, 195 90, 240 90 C 285 90, 310 120, 300 145 C 300 160, 305 180, 300 185 C 290 195, 290 205, 280 205 C 265 205, 260 215, 240 215 C 220 215, 215 205, 200 205 C 190 205, 190 195, 180 185 Z"
            fill="#111827"
            stroke="#111827"
            strokeWidth="2"
          />

          {/* Ears */}
          <circle cx="186" cy="165" r="7.5" fill="#FED7AA" stroke="#111827" strokeWidth="2" />
          <circle cx="294" cy="165" r="7.5" fill="#FED7AA" stroke="#111827" strokeWidth="2" />

          {/* Face */}
          <path
            d="M 190 145 C 190 130, 205 125, 240 125 C 275 125, 290 130, 290 145 C 290 178, 275 205, 240 205 C 205 205, 190 178, 190 145 Z"
            fill="#FED7AA"
            stroke="#111827"
            strokeWidth="3"
          />

          {/* Hair Front Bangs / Texture */}
          <path
            d="M 180 135 C 195 110, 220 100, 240 105 C 265 98, 290 115, 300 135 C 285 130, 270 135, 260 130 C 248 135, 235 125, 220 132 C 205 125, 190 138, 180 135 Z"
            fill="#111827"
          />

          {/* Eyeglasses (Round stylish developer glasses) */}
          {/* Left Frame */}
          <circle cx="216" cy="155" r="14" fill="none" stroke="#111827" strokeWidth="3" />
          {/* Right Frame */}
          <circle cx="264" cy="155" r="14" fill="none" stroke="#111827" strokeWidth="3" />
          {/* Bridge */}
          <line x1="230" y1="155" x2="250" y2="155" stroke="#111827" strokeWidth="3" />
          {/* Sides */}
          <line x1="188" y1="155" x2="202" y2="155" stroke="#111827" strokeWidth="2.5" />
          <line x1="278" y1="155" x2="292" y2="155" stroke="#111827" strokeWidth="2.5" />

          {/* Eyes (Focused, smiling) */}
          <circle cx="216" cy="155" r="3.5" fill="#111827" />
          <circle cx="264" cy="155" r="3.5" fill="#111827" />
          {/* Eyebrows */}
          <path d="M 206 138 Q 216 134 226 138" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <path d="M 254 138 Q 264 134 274 138" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" fill="none" />

          {/* Nose */}
          <path d="M 240 160 L 238 168 L 243 169" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />

          {/* Smile */}
          <path d="M 230 182 Q 240 190 250 182" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" fill="none" />

          {/* Hoodie Body (Blue / Navy hoodie) */}
          {/* Neck */}
          <rect x="228" y="200" width="24" height="20" fill="#FED7AA" />

          {/* Hoodie Shoulder & Torso */}
          <path
            d="M 170 235 C 150 245, 120 280, 110 350 L 370 350 C 360 280, 330 245, 310 235 C 295 245, 270 252, 240 252 C 210 252, 185 245, 170 235 Z"
            fill="url(#hoodieGrad)"
            stroke="#111827"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />

          {/* Hoodie Collar & Drawstrings */}
          <path
            d="M 195 228 C 210 245, 270 245, 285 228"
            fill="none"
            stroke="#111827"
            strokeWidth="3.5"
          />
          <line x1="225" y1="245" x2="225" y2="280" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="255" y1="245" x2="255" y2="275" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />

          {/* Arms & Hands Typing on Laptop */}
          {/* Left Arm */}
          <path
            d="M 130 310 C 130 310, 175 325, 215 325"
            stroke="#111827"
            strokeWidth="24"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 130 310 C 130 310, 175 325, 215 325"
            stroke="#1E40AF"
            strokeWidth="18"
            strokeLinecap="round"
            fill="none"
          />

          {/* Right Arm */}
          <path
            d="M 330 310 C 330 310, 290 325, 260 325"
            stroke="#111827"
            strokeWidth="24"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 330 310 C 330 310, 290 325, 260 325"
            stroke="#1E40AF"
            strokeWidth="18"
            strokeLinecap="round"
            fill="none"
          />

          {/* Hands (Skin) */}
          <ellipse cx="225" cy="330" rx="14" ry="9" fill="#FED7AA" stroke="#111827" strokeWidth="2.5" />
          <ellipse cx="255" cy="330" rx="14" ry="9" fill="#FED7AA" stroke="#111827" strokeWidth="2.5" />
        </g>

        {/* --- Laptop Lid Facing Viewer with "SV." logo --- */}
        <g id="about-laptop">
          {/* Laptop Lid Back */}
          <path
            d="M 195 330 L 285 305 L 380 300 L 290 348 Z"
            fill="url(#laptopLidGrad)"
            stroke="#111827"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />

          {/* SV Logo on Laptop Lid */}
          <text
            x="320"
            y="325"
            textAnchor="middle"
            fontFamily="sans-serif"
            fontSize="14"
            fontWeight="bold"
            fill="#111827"
            letterSpacing="1"
            transform="rotate(-5 320 325)"
          >
            SV.
          </text>
        </g>

        {/* --- Coffee Cup with Steam on Desk --- */}
        <g id="about-coffee" transform="translate(130, 95)">
          {/* Steam curls */}
          <path
            d="M 30 205 Q 26 195 31 185 Q 36 175 30 165"
            stroke="#94A3B8"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            className="animate-pulse"
          />
          <path
            d="M 40 205 Q 44 195 39 185 Q 34 175 40 165"
            stroke="#94A3B8"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            className="animate-pulse"
          />

          {/* Cup */}
          <path
            d="M 22 225 L 48 225 C 48 225 48 255 35 255 C 22 255 22 225 22 225 Z"
            fill="#FFFFFF"
            stroke="#111827"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          {/* Rim */}
          <ellipse cx="35" cy="225" rx="13" ry="3.5" fill="#3E2723" stroke="#111827" strokeWidth="2" />
          {/* Cup Handle */}
          <path
            d="M 48 232 C 57 232, 57 248, 48 250"
            fill="none"
            stroke="#111827"
            strokeWidth="3"
          />
        </g>
      </svg>
    </div>
  );
}
