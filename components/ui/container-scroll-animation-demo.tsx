"use client";

import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { companyData, heroContent } from "@/environment/data";

type HeroScrollDemoProps = {
  typedText?: string;
  active?: boolean;
}

export default function HeroScrollDemo({
  typedText = "",
  active = false,
}: HeroScrollDemoProps) {
  const lines = typedText.split("\n");

  return (
    <div className="flex w-full max-w-5xl flex-col items-center overflow-hidden">
      <ContainerScroll
        titleComponent={
          <div className="mx-auto max-w-4xl px-4">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-sky-600">
              {heroContent.showcaseLabel}
            </p>
            <h2 className="text-4xl font-semibold text-black dark:text-white">
              {heroContent.showcaseTitle}
              <br />
              <span className="mt-2 block text-4xl font-bold leading-none md:text-[5.5rem]">
                {companyData.tagline}
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base text-neutral-600 dark:text-neutral-300 md:text-lg">
              Scroll into the workstation view, then type on the keyboard below to shape the live product narrative on screen.
            </p>
          </div>
        }
      >
        <div className="flex h-full flex-col justify-between bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.22),_transparent_45%),linear-gradient(135deg,#06131d_0%,#0f172a_45%,#111827_100%)] p-4 text-white md:p-8">
          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs uppercase tracking-[0.3em] text-white/70 backdrop-blur">
            <span>{active ? "Interactive session active" : "Scroll to activate the typing demo"}</span>
            <span className={active ? "text-emerald-300" : "text-amber-300"}>
              {active ? "Live input" : "Standby"}
            </span>
          </div>

          <div className="mt-4 grid flex-1 gap-5 md:grid-cols-[1.5fr_0.5fr]">
            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/70 shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-300" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <p className="text-[11px] uppercase tracking-[0.3em] text-white/45">
                  northstar-workstation.tsx
                </p>
              </div>

              <div className="grid h-full min-h-[18rem] gap-6 bg-[linear-gradient(180deg,rgba(8,15,30,0.96)_0%,rgba(2,6,23,1)_100%)] p-5 md:grid-rows-[auto_1fr] md:p-6">
                <div className="flex flex-wrap gap-3 text-xs text-cyan-100/80">
                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1">
                    Product Engineering
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                    Cloud Delivery
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                    AI Workflows
                  </span>
                </div>

                <div className="rounded-3xl border border-cyan-400/10 bg-black/30 p-4 font-mono text-sm leading-7 text-cyan-50 md:text-base">
                  {lines.map((line, index) => (
                    <div key={`${line}-${index}`} className="flex">
                      <span className="mr-3 text-cyan-400">&gt;</span>
                      <span className="whitespace-pre-wrap break-words">{line || " "}</span>
                      {index === lines.length - 1 && (
                        <span className="ml-1 inline-block h-5 w-2 animate-pulse rounded-sm bg-cyan-300 align-middle" />
                      )}
                    </div>
                  ))}
                  {!typedText && (
                    <div className="flex text-white/45">
                      <span className="mr-3 text-cyan-400">&gt;</span>
                      <span>{active ? "Start typing on the keyboard below..." : "Waiting for interactive mode..."}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Workstation</p>
                <h3 className="mt-4 text-2xl font-semibold">
                  Monitor and keyboard now operate as one connected demo surface.
                </h3>
                <p className="mt-4 text-sm text-white/70">
                  Type below and watch the editor update instantly, like a live software workstation in front of the user.
                </p>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-slate-950/60 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-white/45">Current characters</p>
                <p className="mt-3 text-4xl font-semibold text-white">{typedText.length}</p>
                <p className="mt-3 text-sm text-white/60">
                  Letters, space, enter, and backspace stay synced between the visual keyboard and the screen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ContainerScroll>
      <div className="-mt-8 flex flex-col items-center md:-mt-12">
        <div className="h-8 w-8 rounded-b-md bg-[linear-gradient(180deg,#64748b_0%,#334155_100%)] shadow-[0_10px_20px_rgba(15,23,42,0.25)] md:h-10 md:w-10" />
        <div className="mt-[-2px] h-4 w-40 rounded-full bg-[linear-gradient(180deg,#94a3b8_0%,#64748b_100%)] shadow-[0_10px_18px_rgba(15,23,42,0.18)] md:h-5 md:w-52" />
      </div>
    </div>
  );
}
