"use client";

import React from "react";

export function HeroDeskIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* Soft Pastel Background Blob */}
      <div className="absolute w-[95%] h-[85%] bg-gradient-to-br from-rose-100/70 via-rose-50/50 to-purple-50/40 dark:from-rose-950/30 dark:via-purple-950/20 dark:to-slate-900/40 rounded-[3rem] blur-2xl -z-10 transition-colors" />

      <svg
        viewBox="0 0 620 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-w-[560px] drop-shadow-xl"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="laptopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>
          <linearGradient id="screenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0B132B" />
            <stop offset="100%" stopColor="#111D42" />
          </linearGradient>
          <linearGradient id="phoneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>
          <linearGradient id="phoneScreenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFEBF0" />
            <stop offset="100%" stopColor="#FFF5F7" />
          </linearGradient>
          <linearGradient id="deskShadow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FED7E2" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#FEE2E2" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#EDE9FE" stopOpacity="0.7" />
          </linearGradient>
          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* --- Soft Desk Surface Shadow / Puddle --- */}
        <ellipse cx="330" cy="410" rx="260" ry="48" fill="url(#deskShadow)" />

        {/* --- Floating Decorative Elements (Sparkles & Code Tag) --- */}
        {/* Floating Code Tag: < / > */}
        <g className="animate-float" style={{ animationDuration: "5s" }}>
          <rect
            x="320"
            y="70"
            width="64"
            height="34"
            rx="8"
            fill="#FFFFFF"
            stroke="#111827"
            strokeWidth="2.5"
            filter="url(#softGlow)"
          />
          <text
            x="352"
            y="93"
            textAnchor="middle"
            fontFamily="monospace"
            fontSize="15"
            fontWeight="bold"
            fill="#111827"
          >
            &lt;/&gt;
          </text>
        </g>

        {/* Sparkle 1 */}
        <path
          d="M 270 95 Q 275 80 275 75 Q 275 80 280 95 Q 285 95 295 95 Q 285 95 280 100 Q 275 105 275 115 Q 275 105 270 100 Q 260 95 270 95 Z"
          fill="#F43F5E"
          className="animate-pulse"
        />

        {/* Sparkle 2 */}
        <path
          d="M 430 80 Q 433 70 433 65 Q 433 70 436 80 Q 442 80 448 80 Q 442 80 436 84 Q 433 88 433 95 Q 433 88 430 84 Q 420 80 430 80 Z"
          fill="#111827"
        />

        {/* Sparkle 3 (small pink) */}
        <circle cx="280" cy="160" r="2.5" fill="#F43F5E" />
        <circle cx="435" cy="140" r="2.5" fill="#111827" />
        <circle cx="435" cy="300" r="3" fill="#111827" />

        {/* Sparkle 4 */}
        <path
          d="M 435 290 Q 438 283 438 278 Q 438 283 441 290 Q 446 290 452 290 Q 446 290 441 293 Q 438 297 438 302 Q 438 297 435 293 Q 428 290 435 290 Z"
          fill="#111827"
        />

        {/* --- Potted Plant (Left) --- */}
        <g id="plant" transform="translate(15, 0)">
          {/* Ceramic Pot */}
          <path
            d="M 252 245 L 288 245 L 282 285 L 258 285 Z"
            fill="#FFFFFF"
            stroke="#111827"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          {/* Soil line */}
          <ellipse cx="270" cy="245" rx="18" ry="3.5" fill="#4B5563" />

          {/* Plant Stems & Leaves */}
          <path
            d="M 270 245 Q 268 200 270 190 Q 274 200 270 245 Z"
            fill="#6EE7B7"
            stroke="#111827"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path
            d="M 268 242 Q 250 220 248 205 Q 258 212 268 238 Z"
            fill="#34D399"
            stroke="#111827"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path
            d="M 272 242 Q 290 220 292 205 Q 282 212 272 238 Z"
            fill="#10B981"
            stroke="#111827"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path
            d="M 266 244 Q 242 235 240 222 Q 250 230 266 242 Z"
            fill="#059669"
            stroke="#111827"
            strokeWidth="2"
          />
          <path
            d="M 274 244 Q 298 235 300 222 Q 290 230 274 242 Z"
            fill="#34D399"
            stroke="#111827"
            strokeWidth="2"
          />
        </g>

        {/* --- Central Laptop (Isometric / Perspective 3D) --- */}
        <g id="laptop">
          {/* Laptop Screen Bezel */}
          <path
            d="M 285 130 L 415 125 L 430 245 L 305 255 Z"
            fill="url(#laptopGrad)"
            stroke="#111827"
            strokeWidth="4"
            strokeLinejoin="round"
          />

          {/* Laptop Display (Screen) */}
          <path
            d="M 293 138 L 407 133 L 422 238 L 311 247 Z"
            fill="url(#screenGrad)"
          />

          {/* Webcam dot */}
          <circle cx="350" cy="132" r="1.5" fill="#4B5563" />

          {/* Code syntax lines inside laptop screen */}
          <rect x="296" y="141" width="30" height="4" rx="1.5" fill="#F43F5E" />
          <rect x="330" y="141" width="22" height="4" rx="1.5" fill="#3B82F6" opacity="0.6" />

          <rect x="300" y="152" width="20" height="3" rx="1" fill="#F43F5E" />
          <rect x="323" y="152" width="32" height="3" rx="1" fill="#60A5FA" />
          <rect x="358" y="152" width="12" height="3" rx="1" fill="#FCD34D" />

          <rect x="306" y="160" width="24" height="3" rx="1" fill="#C084FC" />

          <rect x="312" y="168" width="8" height="3" rx="1" fill="#34D399" />
          <rect x="322" y="168" width="45" height="3" rx="1" fill="#F43F5E" />

          <rect x="318" y="176" width="22" height="3" rx="1" fill="#93C5FD" />
          <rect x="342" y="176" width="38" height="3" rx="1" fill="#FDE047" />

          <rect x="318" y="184" width="20" height="3" rx="1" fill="#93C5FD" />
          <rect x="340" y="184" width="20" height="3" rx="1" fill="#34D399" />

          <rect x="318" y="192" width="26" height="3" rx="1" fill="#93C5FD" />
          <rect x="346" y="192" width="34" height="3" rx="1" fill="#FDE047" />

          <rect x="312" y="200" width="14" height="3" rx="1" fill="#34D399" />
          <rect x="306" y="208" width="12" height="3" rx="1" fill="#C084FC" />
          <rect x="300" y="216" width="8" height="3" rx="1" fill="#F43F5E" />

          {/* Laptop Base (Keyboard area) */}
          <path
            d="M 305 255 L 430 245 L 452 278 L 320 292 Z"
            fill="#E2E8F0"
            stroke="#111827"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />

          <path
            d="M 326 260 L 424 252 L 438 274 L 338 283 Z"
            fill="#1E293B"
            stroke="#0F172A"
            strokeWidth="1.5"
          />

          <path
            d="M 370 282 L 405 279 L 409 288 L 374 290 Z"
            fill="#CBD5E1"
            stroke="#64748B"
            strokeWidth="1"
          />
        </g>

        {/* --- Standing Smartphone (Right) --- */}
        <g id="smartphone" transform="translate(40, -10)">
          <rect
            x="395"
            y="95"
            width="68"
            height="124"
            rx="14"
            fill="url(#phoneGrad)"
            stroke="#111827"
            strokeWidth="3.5"
            transform="rotate(6 429 157)"
          />

          <rect
            x="400"
            y="101"
            width="58"
            height="112"
            rx="10"
            fill="url(#phoneScreenGrad)"
            transform="rotate(6 429 157)"
          />

          <rect
            x="422"
            y="105"
            width="14"
            height="2.5"
            rx="1"
            fill="#111827"
            transform="rotate(6 429 157)"
          />

          {/* UI Screen Content */}
          <g transform="rotate(6 429 157)">
            <rect x="404" y="114" width="50" height="28" rx="4" fill="#F43F5E" opacity="0.9" />
            <circle cx="430" cy="123" r="5" fill="#FEF08A" />
            <polygon points="406,140 422,126 438,140" fill="#BE123C" />
            <polygon points="426,140 440,130 452,140" fill="#9F1239" />

            <rect x="404" y="146" width="50" height="6" rx="2" fill="#E2E8F0" />
            <rect x="404" y="155" width="22" height="12" rx="3" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
            <rect x="432" y="155" width="22" height="12" rx="3" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />

            <line x1="406" y1="184" x2="452" y2="184" stroke="#E2E8F0" strokeWidth="1" />
            <circle cx="414" cy="192" r="2.5" fill="#F43F5E" />
            <circle cx="429" cy="192" r="2" fill="#94A3B8" />
            <circle cx="444" cy="192" r="2" fill="#94A3B8" />
          </g>
        </g>

        {/* --- Coffee Mug (Front Right) --- */}
        <g id="mug" transform="translate(15, 5)">
          <path
            d="M 458 245 C 476 245, 476 270, 458 272"
            fill="none"
            stroke="#111827"
            strokeWidth="4"
            strokeLinecap="round"
          />

          <path
            d="M 416 230 L 458 230 C 458 230 458 285 437 285 C 416 285 416 230 416 230 Z"
            fill="#1E293B"
            stroke="#111827"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />

          <ellipse cx="437" cy="230" rx="21" ry="5.5" fill="#334155" stroke="#111827" strokeWidth="2.5" />
          <ellipse cx="437" cy="230" rx="17" ry="4" fill="#3E2723" />

          <text
            x="437"
            y="262"
            textAnchor="middle"
            fontFamily="sans-serif"
            fontSize="14"
            fontWeight="bold"
            fill="#FFFFFF"
            letterSpacing="0.5"
          >
            SV.
          </text>
        </g>
      </svg>
    </div>
  );
}
