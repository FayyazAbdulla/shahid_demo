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

export default function Globe3DDemoThird() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const globeY = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const globeScale = useTransform(scrollYProgress, [0, 1], [0.92, 1.08]);

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
        <div className="absolute -mr-48 -mt-48 right-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -mb-40 -ml-40 bottom-0 left-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-svh max-w-7xl flex-col items-center justify-center px-4 py-12 md:px-8">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-black tracking-tight text-white md:text-5xl">Global Cloud Map</h1>
          <p className="mt-2 text-sm text-slate-300 md:text-base">
            Scroll to explore depth. Drag the globe to inspect regions.
          </p>
        </div>

        <motion.div style={{ y: globeY, scale: globeScale }} className="relative h-[70vh] w-full max-w-[1200px]">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 blur-2xl" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Globe3D
              className="h-full w-full"
              markers={sampleMarkers}
              config={{
                atmosphereColor: "#06b6d4",
                atmosphereIntensity: 28,
                bumpScale: 6,
                autoRotateSpeed: 0.22,
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
