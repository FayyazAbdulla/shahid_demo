"use client";

import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import { productOfferings, productSectionContent } from "@/environment/data";

export default function SparklesPreview() {
  return (
    <div className="relative flex min-h-[40rem] w-full flex-col items-center justify-center overflow-hidden rounded-md bg-black px-6 py-16">
      <div className="absolute inset-0 h-screen w-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="h-full w-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="relative z-20 max-w-5xl text-center text-white">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-300">
          {productSectionContent.eyebrow}
        </p>
        <h2 className="mt-6 text-3xl font-bold md:text-6xl">
          {productSectionContent.title}
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-sm text-white/75 md:text-lg">
          {productSectionContent.description}
        </p>
        <div className="mt-10 grid gap-4 text-left md:grid-cols-3">
          {productOfferings.map((item) => (
            <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-lg font-semibold">{item.title}</p>
              <p className="mt-3 text-sm text-white/70">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
