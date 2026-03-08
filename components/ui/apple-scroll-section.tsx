"use client"

import { ReactNode, useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

type Variant = "fade-up" | "slide-left" | "stagger" | "zoom-in"

type AppleScrollSectionProps = {
  children: ReactNode
  className?: string
  variant?: Variant
  childSelector?: string
  delay?: number
  scrub?: boolean | number
}

const variantMap: Record<Variant, gsap.TweenVars> = {
  "fade-up": {
    autoAlpha: 0,
    y: 72,
  },
  "slide-left": {
    autoAlpha: 0,
    x: 72,
  },
  "stagger": {
    autoAlpha: 0,
    y: 48,
    scale: 0.96,
  },
  "zoom-in": {
    autoAlpha: 0,
    scale: 0.86,
    y: 24,
  },
}

export default function AppleScrollSection({
  children,
  className,
  variant = "fade-up",
  childSelector = "[data-reveal-item]",
  delay = 0,
  scrub = false,
}: AppleScrollSectionProps) {
  const rootRef = useRef<HTMLElement | null>(null)

  useLayoutEffect(() => {
    if (!rootRef.current) return

    const ctx = gsap.context(() => {
      const targets =
        variant === "stagger"
          ? gsap.utils.toArray<HTMLElement>(childSelector, rootRef.current)
          : [rootRef.current]

      gsap.fromTo(
        targets,
        variantMap[variant],
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration: scrub ? undefined : 1.2,
          delay,
          ease: scrub ? "none" : "power3.out",
          stagger: variant === "stagger" ? 0.14 : 0,
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 82%",
            end: scrub ? "top 30%" : "bottom 65%",
            scrub,
            once: !scrub,
          },
        }
      )
    }, rootRef)

    return () => ctx.revert()
  }, [childSelector, delay, scrub, variant])

  return (
    <section ref={rootRef} className={className}>
      {children}
    </section>
  )
}
