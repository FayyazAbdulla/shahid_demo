"use client";

import React from "react";
import { motion } from "motion/react";
import { LampContainer } from "@/components/ui/lamp";
import { aiAutomationContent } from "@/environment/data";

export default function LampDemo() {
  return (
    <LampContainer>
      <div className="relative z-20 mx-auto max-w-4xl px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">
          {aiAutomationContent.eyebrow}
        </p>
        <motion.h2
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-200 via-cyan-100 to-slate-500 bg-clip-text py-4 text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          {aiAutomationContent.title}
        </motion.h2>
        <p className="mx-auto mt-6 max-w-2xl text-sm text-slate-300 md:text-lg">
          {aiAutomationContent.description}
        </p>
      </div>
    </LampContainer>
  );
}
