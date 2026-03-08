"use client";

import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import { serviceSectionContent, services } from "@/environment/data";

export default function DraggableCardDemo() {
  return (
    <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.12),_transparent_36%),linear-gradient(180deg,#f8fafc_0%,#eef2ff_100%)] dark:bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_36%),linear-gradient(180deg,#020617_0%,#0f172a_100%)]">
      <div className="pointer-events-none absolute top-16 mx-auto max-w-2xl px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-600 dark:text-sky-300">
          {serviceSectionContent.eyebrow}
        </p>
        <h2 className="mt-4 text-3xl font-black text-neutral-800 md:text-5xl dark:text-white">
          {serviceSectionContent.title}
        </h2>
        <p className="mt-4 text-sm text-neutral-500 md:text-base dark:text-neutral-300">
          {serviceSectionContent.description}
        </p>
      </div>
      <p className="absolute top-1/2 mx-auto max-w-lg -translate-y-3/4 px-4 text-center text-xl font-black text-neutral-500 md:text-3xl dark:text-neutral-700">
        Drag each capability card to explore the services behind our delivery model.
      </p>
      {services.map((item) => (
        <DraggableCardBody key={item.title} className={item.className}>
          <img
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10 h-80 w-80 object-cover"
          />
          <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
            {item.title}
          </h3>
          <p className="mt-2 max-w-72 text-center text-sm text-neutral-500 dark:text-neutral-400">
            {item.description}
          </p>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
