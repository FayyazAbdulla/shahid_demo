"use client";

import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import { transformationContent } from "@/environment/data";

export default function SparklesPreview() {
  return (
    <div className="flex h-[40rem] w-full flex-col items-center justify-center overflow-hidden rounded-md bg-black px-6">
      <p className="relative z-20 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">
        {transformationContent.eyebrow}
      </p>
      <h2 className="relative z-20 mt-6 text-center text-3xl font-bold text-white md:text-6xl lg:text-8xl">
        {transformationContent.title}
      </h2>
      <p className="relative z-20 mt-5 max-w-3xl text-center text-sm text-white/70 md:text-lg">
        {transformationContent.description}
      </p>
      <div className="relative h-40 w-[40rem] max-w-full">
        <div className="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
        <div className="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        <div className="absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
        <div className="absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />

        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="h-full w-full"
          particleColor="#FFFFFF"
        />

        <div className="absolute inset-0 h-full w-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]" />
      </div>
    </div>
  );
}
