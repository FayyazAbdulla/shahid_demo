"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Globe3D, GlobeMarker } from "@/components/ui/3d-globe";
import { SparklesCore } from "@/components/ui/sparkles";
import { globalOperationsContent } from "@/environment/data";
import { useTypingText } from "@/hooks/use-typing-text";

export default function Globe3DDemoThird() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const globeY = useTransform(scrollYProgress, [0, 1], [80, -90]);
  const globeScale = useTransform(scrollYProgress, [0, 1], [0.97, 1.04]);
  const { displayedText: typedTitle, isComplete: isTitleComplete } = useTypingText(
    globalOperationsContent.title,
    { speed: 30, startDelay: 250 },
  );
  const { displayedText: typedDescription } = useTypingText(
    globalOperationsContent.description,
    { speed: 16, startDelay: 1450 },
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-svh w-full overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      <div className="absolute inset-0">
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="h-full w-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-slate-950/35" />

      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="absolute right-0 top-0 -mr-48 -mt-48 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.15, ease: "easeOut" }}
          className="absolute bottom-0 left-0 -mb-40 -ml-40 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 mx-auto flex min-h-svh max-w-7xl flex-col items-center justify-center px-4 py-12 md:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
          className="mb-6 max-w-4xl text-center"
        >
          <p className="mb-2 text-xs uppercase tracking-[0.32em] text-cyan-200/75">
            {globalOperationsContent.eyebrow}
          </p>
          <h1 className="bg-gradient-to-r from-white via-cyan-100 to-sky-300 bg-clip-text text-3xl font-black tracking-tight text-transparent md:text-6xl">
            {typedTitle}
            {!isTitleComplete && (
              <span className="ml-1 inline-block h-[0.95em] w-[0.08em] animate-pulse bg-cyan-200 align-[-0.08em]" />
            )}
          </h1>
          <p className="mt-2 text-sm text-slate-300 md:text-base">
            {typedDescription}
            <span className="ml-1 inline-block h-4 w-[0.08em] animate-pulse bg-slate-300 align-[-0.1em]" />
          </p>
        </motion.div>

        <motion.div
          style={{ y: globeY, scale: globeScale }}
          initial={{ opacity: 0, y: 100, scale: 0.82, rotateX: 16 }}
          animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
          transition={{ delay: 0.28, duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[70vh] w-full max-w-[1200px]"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.7, ease: "easeOut" }}
            className="pointer-events-none absolute inset-[10%] rounded-full border border-cyan-300/12"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: [0, 0.45, 0.2], scale: [0.7, 1.04, 1] }}
            transition={{ delay: 0.35, duration: 1.3, ease: "easeOut" }}
            className="pointer-events-none absolute inset-0 rounded-full border border-cyan-300/20"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 blur-2xl" />
          <motion.div
            initial={{ y: -120, scale: 0.82, rotateY: -140, rotateX: 8, rotateZ: -3, opacity: 0 }}
            animate={{ y: 0, scale: 1, rotateY: 0, rotateX: 0, rotateZ: 0, opacity: 1 }}
            transition={{
              y: { type: "spring", stiffness: 95, damping: 11, mass: 1.1 },
              scale: { type: "spring", stiffness: 95, damping: 12, mass: 1.1 },
              rotateY: { duration: 1.1, ease: [0.2, 0.95, 0.3, 1] },
              rotateX: { duration: 0.8, ease: "easeOut" },
              rotateZ: { duration: 0.8, ease: "easeOut" },
              opacity: { duration: 0.45 },
            }}
            className="absolute inset-0 flex items-center justify-center"
            style={{ transformStyle: "preserve-3d" }}
          >
            <Globe3D
              className="h-full w-full"
              markers={globalOperationsContent.markers as GlobeMarker[]}
              config={{
                atmosphereColor: "#06b6d4",
                atmosphereIntensity: 28,
                bumpScale: 6,
                autoRotateSpeed: 0.18,
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scaleX: 0.55, scaleY: 0.7 }}
            animate={{ opacity: [0, 0.35, 0.18], scaleX: [0.55, 1.05, 0.92], scaleY: [0.7, 1, 0.92] }}
            transition={{ delay: 0.2, duration: 1.2, ease: "easeOut" }}
            className="pointer-events-none absolute bottom-[8%] left-1/2 h-20 w-[62%] -translate-x-1/2 rounded-full bg-cyan-500/25 blur-3xl"
          />

          {globalOperationsContent.stats.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: [0, -4, 0] }}
              transition={{
                opacity: { delay: 0.6 + i * 0.08, duration: 0.4 },
                y: { duration: 5 + i * 0.8, repeat: Infinity, ease: "easeInOut" },
              }}
              className={`pointer-events-none absolute z-20 hidden rounded-xl border border-white/15 bg-slate-900/70 px-3 py-2 backdrop-blur md:block ${item.className}`}
            >
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-300">{item.label}</p>
              <p className="text-sm font-bold text-cyan-200">{item.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
