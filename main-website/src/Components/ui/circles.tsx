import { motion } from "framer-motion"
import { cn } from "../../lib/utils"

interface BackgroundCirclesProps {
  className?: string
}

export function BackgroundCircles({ className }: BackgroundCirclesProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 flex items-center justify-center overflow-hidden bg-[#B2A592]",
        className
      )}
    >
      {/* Center glow */}
      <div
        className="absolute rounded-full blur-[120px]"
        style={{
          width: "min(60vw, 60vh)",
          height: "min(60vw, 60vh)",
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
            width: "min(20vw, 20vh)",
            height: "min(20vw, 20vh)",
            background:
              "conic-gradient(from 0deg, transparent 0deg, rgba(255, 127, 0, 0.5) 60deg, transparent 120deg, transparent 360deg)",
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
            width: "min(35vw, 35vh)",
            height: "min(35vw, 35vh)",
            background:
              "conic-gradient(from 180deg, rgba(85, 120, 140, 0.45) 0deg, transparent 40deg, transparent 90deg, rgba(255, 127, 0, 0.35) 130deg, transparent 170deg, transparent 270deg, rgba(220, 0, 0, 0.3) 310deg, transparent 350deg)",
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
            width: "min(50vw, 50vh)",
            height: "min(50vw, 50vh)",
            background:
              "conic-gradient(from 90deg, transparent 0deg, rgba(255, 127, 0, 0.45) 30deg, rgba(220, 0, 0, 0.6) 60deg, transparent 90deg, transparent 180deg, rgba(85, 120, 140, 0.35) 210deg, transparent 240deg, transparent 360deg)",
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
            width: "min(65vw, 65vh)",
            height: "min(65vw, 65vh)",
            background:
              "conic-gradient(from 270deg, rgba(85, 120, 140, 0.35) 0deg, transparent 50deg, transparent 120deg, rgba(255, 127, 0, 0.3) 150deg, transparent 200deg, transparent 300deg, rgba(220, 0, 0, 0.25) 330deg, transparent 360deg)",
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
            width: "min(80vw, 80vh)",
            height: "min(80vw, 80vh)",
            background:
              "conic-gradient(from 0deg, rgba(85, 120, 140, 0.25) 0deg, transparent 30deg, transparent 180deg, rgba(255, 127, 0, 0.2) 200deg, transparent 230deg, transparent 360deg)",
            mask:
              "radial-gradient(farthest-side, transparent calc(100% - 1px), black calc(100% - 1px))",
            WebkitMask:
              "radial-gradient(farthest-side, transparent calc(100% - 1px), black calc(100% - 1px))",
          }}
        />
      </div>

      {/* Vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 0%, transparent 40%, #26332A 70%, #1e2922 100%)",
        }}
      />
    </div>
  )
}

export default function BackgroundCirclesDemo() {
  return <BackgroundCircles />
}

export type { BackgroundCirclesProps }
