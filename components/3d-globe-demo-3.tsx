"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Globe3D, GlobeMarker } from "@/components/ui/3d-globe";
import { SparklesCore } from "@/components/ui/sparkles";

const sampleMarkers: GlobeMarker[] = [
  { lat: 40.7128, lng: -74.006, src: "https://assets.aceternity.com/avatars/1.webp", label: "New York" },
  { lat: 51.5074, lng: -0.1278, src: "https://assets.aceternity.com/avatars/2.webp", label: "London" },
  { lat: 35.6762, lng: 139.6503, src: "https://assets.aceternity.com/avatars/3.webp", label: "Tokyo" },
  { lat: -33.8688, lng: 151.2093, src: "https://assets.aceternity.com/avatars/4.webp", label: "Sydney" },
  { lat: 48.8566, lng: 2.3522, src: "https://assets.aceternity.com/avatars/5.webp", label: "Paris" },
  { lat: 28.6139, lng: 77.209, src: "https://assets.aceternity.com/avatars/6.webp", label: "New Delhi" },
  { lat: 55.7558, lng: 37.6173, src: "https://assets.aceternity.com/avatars/7.webp", label: "Moscow" },
  { lat: -22.9068, lng: -43.1729, src: "https://assets.aceternity.com/avatars/8.webp", label: "Rio de Janeiro" },
  { lat: 31.2304, lng: 121.4737, src: "https://assets.aceternity.com/avatars/9.webp", label: "Shanghai" },
  { lat: 25.2048, lng: 55.2708, src: "https://assets.aceternity.com/avatars/10.webp", label: "Dubai" },
  { lat: -34.6037, lng: -58.3816, src: "https://assets.aceternity.com/avatars/11.webp", label: "Buenos Aires" },
  { lat: 1.3521, lng: 103.8198, src: "https://assets.aceternity.com/avatars/12.webp", label: "Singapore" },
  { lat: 37.5665, lng: 126.978, src: "https://assets.aceternity.com/avatars/13.webp", label: "Seoul" },
];

const floatingStats = [
  { label: "Latency", value: "42ms", className: "left-[8%] top-[20%]" },
  { label: "Uptime", value: "99.99%", className: "right-[10%] top-[24%]" },
  { label: "Regions", value: "163", className: "left-[12%] bottom-[20%]" },
  { label: "Events/s", value: "1.8M", className: "right-[12%] bottom-[22%]" },
];

export default function Globe3DDemoThird() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const globeY = useTransform(scrollYProgress, [0, 1], [80, -90]);
  const globeScale = useTransform(scrollYProgress, [0, 1], [0.97, 1.04]);

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
          className="absolute -mr-48 -mt-48 right-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.15, ease: "easeOut" }}
          className="absolute -mb-40 -ml-40 bottom-0 left-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"
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
          className="mb-6 text-center"
        >
          <p className="mb-2 text-xs uppercase tracking-[0.32em] text-cyan-200/75">Realtime Infra View</p>
          <h1 className="bg-gradient-to-r from-white via-cyan-100 to-sky-300 bg-clip-text text-3xl font-black tracking-tight text-transparent md:text-6xl">
            Global Cloud Command
          </h1>
          <p className="mt-2 text-sm text-slate-300 md:text-base">
            Scroll to explore depth. Drag the globe to inspect regions.
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
              markers={sampleMarkers}
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

          {floatingStats.map((item, i) => (
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
