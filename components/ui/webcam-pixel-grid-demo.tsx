"use client";

import { WebcamPixelGrid } from "@/components/ui/webcam-pixel-grid";
import { companyData, contactInformation, ctaContent, testimonials } from "@/environment/data";

export default function WebcamPixelGridDemo() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black">
      <div className="absolute inset-0">
        <WebcamPixelGrid
          gridCols={60}
          gridRows={40}
          maxElevation={50}
          motionSensitivity={0.25}
          elevationSmoothing={0.2}
          colorMode="webcam"
          backgroundColor="#030303"
          mirror={true}
          gapRatio={0.05}
          invertColors={false}
          darken={0.6}
          borderColor="#ffffff"
          borderOpacity={0.06}
          className="h-full w-full"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
        <div className="max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/70 backdrop-blur-sm">
            {ctaContent.eyebrow}
          </div>

          <h1 className="mb-6 text-xl font-bold tracking-tight text-white sm:text-6xl md:text-8xl">
            {ctaContent.title}
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-base text-white/60 sm:text-xl">
            {ctaContent.description}
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`mailto:${contactInformation.email}`}
              className="group relative inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-8 text-base font-medium text-black transition-all hover:scale-105 hover:bg-white/90"
            >
              {ctaContent.primaryCta}
            </a>
            <a
              href={`tel:${contactInformation.phone.replace(/\s+/g, "")}`}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 text-base font-medium text-white backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/10"
            >
              {ctaContent.secondaryCta}
            </a>
          </div>

          <div className="mt-10 grid gap-4 text-left md:grid-cols-2">
            {testimonials.map((item) => (
              <div key={item.author} className="rounded-3xl border border-white/10 bg-black/30 p-5 backdrop-blur-sm">
                <p className="text-sm text-white/80">"{item.quote}"</p>
                <p className="mt-4 text-sm font-semibold text-white">{item.author}</p>
                <p className="text-xs uppercase tracking-[0.25em] text-white/50">{item.role}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-8 text-xs uppercase tracking-[0.35em] text-white/50">
          {companyData.name} • {contactInformation.address}
        </p>
      </div>
    </div>
  );
}
