"use client";

import { memo, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Globe3D, GlobeMarker } from "@/components/ui/3d-globe";
import { SparklesCore } from "@/components/ui/sparkles";
import { companyData, globalOperationsContent } from "@/environment/data";
import { useTypingText } from "@/hooks/use-typing-text";

const layeredTitle = "Built for global scale and uptime";
const layeredDescription =
  "Unified visibility for cloud, product, and AI teams operating as one delivery network.";

const heroMetrics = [
  globalOperationsContent.stats[0],
  globalOperationsContent.stats[1],
  globalOperationsContent.stats[2],
].filter(Boolean);

const floatingMetrics = [
  {
    label: globalOperationsContent.stats[0]?.label ?? "Managed cloud spend",
    value: globalOperationsContent.stats[0]?.value ?? "$24M",
    className: "left-[2%] top-[22%] xl:left-[6%]",
  },
  {
    label: globalOperationsContent.stats[1]?.label ?? "Platform uptime",
    value: globalOperationsContent.stats[1]?.value ?? "99.99%",
    className: "right-[4%] top-[18%] xl:right-[10%]",
  },
  {
    label: globalOperationsContent.stats[2]?.label ?? "Delivery regions",
    value: globalOperationsContent.stats[2]?.value ?? "12",
    className: "left-[8%] bottom-[16%] xl:left-[14%]",
  },
  {
    label: globalOperationsContent.stats[3]?.label ?? "Daily events processed",
    value: globalOperationsContent.stats[3]?.value ?? "1.8B",
    className: "right-[8%] bottom-[12%] xl:right-[16%]",
  },
];

const ContentOverlay = memo(function ContentOverlay() {
  const titleLines = ["Built for", "global scale", "and uptime"];
  const { displayedText: typedTitle, isComplete: isTitleComplete } = useTypingText(
    titleLines.join("\n"),
    { speed: 18, startDelay: 180 },
  );
  const { displayedText: typedDescription } = useTypingText(layeredDescription, {
    speed: 12,
    startDelay: 980,
  });

  const typedLines = typedTitle.split("\n");

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
      className="relative z-20 max-w-[42rem]"
    >
      <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-slate-950/35 px-4 py-2 backdrop-blur-md">
        <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.9)]" />
        <p className="text-[11px] font-semibold uppercase tracking-[0.38em] text-cyan-300">
          {globalOperationsContent.eyebrow}
        </p>
      </div>

      <div className="mt-7 space-y-1">
        {typedLines.map((line, index) => (
          <h1
            key={`${line}-${index}`}
            className="max-w-[12ch] text-[clamp(3.2rem,6vw,6.8rem)] font-black leading-[0.9] tracking-[-0.06em] text-white"
          >
            {line || "\u00A0"}
            {index === typedLines.length - 1 && !isTitleComplete && (
              <span className="ml-2 inline-block h-[0.86em] w-[0.08em] animate-pulse bg-cyan-200 align-[-0.08em]" />
            )}
          </h1>
        ))}
      </div>

      <p className="mt-7 max-w-[32rem] text-base leading-8 text-slate-300 md:text-lg">
        {typedDescription}
        <span className="ml-1 inline-block h-5 w-[0.08em] animate-pulse bg-slate-300 align-[-0.12em]" />
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 backdrop-blur-sm">
          Global cloud ops
        </div>
        <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 backdrop-blur-sm">
          AI delivery teams
        </div>
        <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 backdrop-blur-sm">
          Enterprise resilience
        </div>
      </div>

      <div className="mt-9 grid max-w-3xl gap-3 sm:grid-cols-3">
        {heroMetrics.map((item) => (
          <div
            key={item.label}
            className="rounded-[22px] border border-white/10 bg-slate-950/38 px-4 py-4 backdrop-blur-md"
          >
            <p className="text-[10px] uppercase tracking-[0.28em] text-slate-400">
              {item.label}
            </p>
            <p className="mt-2 text-3xl font-semibold tracking-tight text-cyan-200">{item.value}</p>
          </div>
        ))}
      </div>

      <p className="mt-8 max-w-[30rem] text-sm leading-7 text-slate-400">
        {companyData.description}
      </p>
    </motion.div>
  );
});

export default function Globe3DDemoThird() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const globeY = useTransform(scrollYProgress, [0, 1], [48, -24]);
  const globeScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.08]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-svh w-full overflow-hidden bg-gradient-to-br from-slate-950 via-[#031236] to-slate-950"
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

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_44%,rgba(14,165,233,0.16),transparent_32%),radial-gradient(circle_at_78%_52%,rgba(14,165,233,0.12),transparent_34%),linear-gradient(180deg,rgba(2,6,23,0.16),rgba(2,6,23,0.5))]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[42%] bg-[radial-gradient(circle_at_left_center,rgba(15,23,42,0.52),rgba(15,23,42,0)_76%)]" />

      <div className="relative z-10 min-h-svh px-4 py-14 md:px-8 lg:px-12 lg:py-20 2xl:px-16">
        <motion.div
          style={{ y: globeY, scale: globeScale }}
          className="pointer-events-none absolute inset-y-[-2%] right-[-22%] z-0 w-[118%] md:right-[-18%] md:w-[100%] lg:right-[-12%] lg:w-[78%] xl:right-[-8%] xl:w-[72%] 2xl:right-[-4%]"
        >
          <div className="relative h-full min-h-[34rem] w-full md:min-h-[44rem] xl:min-h-[56rem]">
            <div className="absolute inset-[8%] rounded-full border border-cyan-300/10 blur-[1px]" />
            <div className="absolute inset-[16%] rounded-full border border-cyan-300/10" />
            <div className="absolute inset-[24%] rounded-full border border-cyan-300/8" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.18),transparent_58%)]" />
            <div className="absolute bottom-[8%] left-1/2 h-28 w-[74%] -translate-x-1/2 rounded-full bg-cyan-500/18 blur-3xl" />
            <div className="absolute inset-x-[18%] top-[18%] h-px bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent" />

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
          </div>
        </motion.div>

        <div className="relative z-20 flex min-h-[80vh] items-center">
          <div className="w-full max-w-[46rem] pb-[18rem] pt-4 md:max-w-[48rem] md:pb-[14rem] lg:max-w-[44rem] lg:pb-0 xl:max-w-[48rem]">
            <ContentOverlay />
          </div>
        </div>

        {/* {floatingMetrics.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: [0, -4, 0] }}
            transition={{
              opacity: { delay: 0.45 + index * 0.08, duration: 0.4 },
              y: { duration: 5 + index * 0.8, repeat: Infinity, ease: "easeInOut" },
            }}
            className={`pointer-events-none absolute z-30 hidden rounded-2xl border border-white/10 bg-slate-950/58 px-4 py-3 shadow-[0_20px_60px_rgba(2,6,23,0.35)] backdrop-blur-md lg:block ${item.className}`}
          >
            <p className="text-[10px] uppercase tracking-[0.26em] text-slate-400">{item.label}</p>
            <p className="mt-2 text-2xl font-semibold tracking-tight text-cyan-200">{item.value}</p>
          </motion.div>
        ))} */}
      </div>
    </section>
  );
}
