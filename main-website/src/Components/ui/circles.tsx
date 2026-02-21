import { motion } from "framer-motion"
import { cn } from "../../lib/utils"

interface BackgroundCirclesProps {
  className?: string
}

// Circle line colour – warm muted tone (lighter than black, fits red-tint background)
const CIRCLE_LINE = "#7a6b6b";

export function BackgroundCircles({ className }: BackgroundCirclesProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 flex items-center justify-center overflow-hidden bg-[#4a3636]",
        className
      )}
    >
      {/* Center glow */}
      <div
        className="absolute rounded-full blur-[120px]"
        style={{
          width: "min(75vw, 75vh)",
          height: "min(75vw, 75vh)",
          background: "rgba(85, 120, 140, 0.15)", // #55788C
        }}
      />

      {/* Circles container */}
      <div className="relative h-full w-full">
        {/* Circle 1 – small, energetic */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          style={{
            width: "min(28vw, 28vh)",
            height: "min(28vw, 28vh)",
            background:
              `conic-gradient(from 0deg, transparent 0deg, ${CIRCLE_LINE} 60deg, transparent 120deg, transparent 360deg)`,
            mask:
              "radial-gradient(farthest-side, transparent calc(100% - 2px), black calc(100% - 2px))",
            WebkitMask:
              "radial-gradient(farthest-side, transparent calc(100% - 2px), black calc(100% - 2px))",
          }}
        />

        {/* Circle 2 – dashed motion */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          style={{
            width: "min(48vw, 48vh)",
            height: "min(48vw, 48vh)",
            background:
              `conic-gradient(from 180deg, ${CIRCLE_LINE} 0deg, transparent 40deg, transparent 90deg, ${CIRCLE_LINE} 130deg, transparent 170deg, transparent 270deg, ${CIRCLE_LINE} 310deg, transparent 350deg)`,
            mask:
              "radial-gradient(farthest-side, transparent calc(100% - 2px), black calc(100% - 2px))",
            WebkitMask:
              "radial-gradient(farthest-side, transparent calc(100% - 2px), black calc(100% - 2px))",
          }}
        />

        {/* Circle 3 – dominant arc */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{
            width: "min(68vw, 68vh)",
            height: "min(68vw, 68vh)",
            background:
              `conic-gradient(from 90deg, transparent 0deg, ${CIRCLE_LINE} 30deg, ${CIRCLE_LINE} 60deg, transparent 90deg, transparent 180deg, ${CIRCLE_LINE} 210deg, transparent 240deg, transparent 360deg)`,
            mask:
              "radial-gradient(farthest-side, transparent calc(100% - 2px), black calc(100% - 2px))",
            WebkitMask:
              "radial-gradient(farthest-side, transparent calc(100% - 2px), black calc(100% - 2px))",
          }}
        />

        {/* Circle 4 – wide, subtle */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{
            width: "min(85vw, 85vh)",
            height: "min(85vw, 85vh)",
            background:
              `conic-gradient(from 270deg, ${CIRCLE_LINE} 0deg, transparent 50deg, transparent 120deg, ${CIRCLE_LINE} 150deg, transparent 200deg, transparent 300deg, ${CIRCLE_LINE} 330deg, transparent 360deg)`,
            mask:
              "radial-gradient(farthest-side, transparent calc(100% - 1px), black calc(100% - 1px))",
            WebkitMask:
              "radial-gradient(farthest-side, transparent calc(100% - 1px), black calc(100% - 1px))",
          }}
        />

        {/* Circle 5 – outer atmosphere */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          style={{
            width: "min(98vw, 98vh)",
            height: "min(98vw, 98vh)",
            background:
              `conic-gradient(from 0deg, ${CIRCLE_LINE} 0deg, transparent 30deg, transparent 180deg, ${CIRCLE_LINE} 200deg, transparent 230deg, transparent 360deg)`,
            mask:
              "radial-gradient(farthest-side, transparent calc(100% - 1px), black calc(100% - 1px))",
            WebkitMask:
              "radial-gradient(farthest-side, transparent calc(100% - 1px), black calc(100% - 1px))",
          }}
        />
      </div>

      {/* Vignette – Red tint: #2a1f1f (dark), #4a3636 (muted burgundy) */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 0%, transparent 40%, #2a1f1f 70%, #2a1f1f 100%)",
        }}
      />
    </div>
  )
}

export default function BackgroundCirclesDemo() {
  return <BackgroundCircles />
}

export type { BackgroundCirclesProps }
