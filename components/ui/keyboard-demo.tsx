"use client";

import React from "react";
import { Keyboard, KeyboardInput } from "@/components/ui/keyboard";

type KeyboardDemoProps = {
  active: boolean;
  typedText: string;
  onInput: (input: KeyboardInput) => void;
}

export default function KeyboardDemo({ active, typedText, onInput }: KeyboardDemoProps) {
  return (
    <section className="relative -mt-1 flex w-full max-w-5xl flex-col items-center px-4 pb-2 md:-mt-3 md:px-6 md:pb-4">
      <div className="relative w-full rounded-[32px] border border-slate-300/70 bg-[linear-gradient(180deg,#dbe4ee_0%,#b8c4d1_100%)] px-4 pb-6 pt-4 shadow-[0_24px_60px_rgba(15,23,42,0.14)] md:px-8">
        <div className="mx-auto mb-4 flex w-full max-w-[820px] items-center justify-between rounded-full border border-slate-300/80 bg-white/70 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-slate-500 backdrop-blur">
          <span>{active ? "Keyboard online" : "Scroll further to unlock typing"}</span>
          <span className="font-semibold text-slate-700">{typedText.length} chars</span>
        </div>
        <div className="pointer-events-none absolute inset-x-8 bottom-3 h-10 rounded-full bg-slate-950/10 blur-2xl" />
        <div className="relative flex flex-col items-center gap-4">
          <Keyboard
            enableSound
            showPreview
            interactive={active}
            onInput={onInput}
            className="[zoom:0.72] sm:[zoom:0.9] md:[zoom:1.03] lg:[zoom:1.12]"
          />
          <div className="w-full max-w-[820px] rounded-2xl border border-slate-300/80 bg-slate-950 px-4 py-3 font-mono text-sm text-emerald-300 shadow-sm">
            <span className="text-white/35">$</span> {typedText || "interactive-session"}
          </div>
        </div>
      </div>
    </section>
  );
}
