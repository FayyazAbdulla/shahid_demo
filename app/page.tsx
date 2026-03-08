"use client"

import { useEffect, useRef, useState } from 'react'
import Component from '@/components/3d-globe-demo-3'
import AppleScrollSection from '@/components/ui/apple-scroll-section'
import HeroScrollDemo from '@/components/ui/container-scroll-animation-demo'
import DraggableCardDemo from '@/components/ui/draggable-card-demo-2'
import KeyboardDemo from '@/components/ui/keyboard-demo'
import LampDemo from '@/components/ui/lamp-demo'
import SparklesPreview from '@/components/ui/sparkles-demo'
import SparklesFullpagePreview from '@/components/ui/sparkles-fullpage-demo'
import TextHoverEffectDemo from '@/components/ui/text-hover-effect-demo'
import WebcamPixelGridDemo from '@/components/ui/webcam-pixel-grid-demo'
import type { KeyboardInput } from '@/components/ui/keyboard'

export default function Page() {
  const [typedText, setTypedText] = useState('Hello Northstar Labs')
  const [typingActive, setTypingActive] = useState(false)
  const typingSectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = typingSectionRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setTypingActive(entry.isIntersecting)
      },
      {
        threshold: 0.35,
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const handleKeyboardInput = (input: KeyboardInput) => {
    setTypedText((current) => {
      switch (input.type) {
        case 'char':
          return current + input.value
        case 'space':
          return current + ' '
        case 'enter':
          return current + '\n'
        case 'backspace':
          return current.slice(0, -1)
        default:
          return current
      }
    })
  }

  return (
    <main className="w-full overflow-x-clip">
      <AppleScrollSection variant="fade-up" scrub={0.6}>
        <Component />
      </AppleScrollSection>

      <AppleScrollSection variant="fade-up">
        <section
          ref={typingSectionRef}
          className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.1),_transparent_28%),linear-gradient(180deg,#f8fafc_0%,#e2e8f0_100%)] px-4 py-16 md:px-8 md:py-24"
        >
          <div className="mx-auto max-w-7xl">
            <div className="relative rounded-[44px] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.72)_0%,rgba(226,232,240,0.9)_100%)] px-3 pb-8 pt-6 shadow-[0_30px_120px_rgba(15,23,42,0.12)] backdrop-blur md:px-6 md:pb-12 md:pt-8">
              <div className="pointer-events-none absolute inset-x-[8%] bottom-6 h-16 rounded-full bg-slate-950/10 blur-3xl" />
              <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-white/80" />
              <div className="relative flex flex-col items-center">
                <HeroScrollDemo typedText={typedText} active={typingActive} />
                <KeyboardDemo
                  active={typingActive}
                  typedText={typedText}
                  onInput={handleKeyboardInput}
                />
              </div>
              <div className="mx-auto mt-2 h-5 w-[82%] max-w-4xl rounded-[999px] bg-[linear-gradient(180deg,#cbd5e1_0%,#94a3b8_100%)] shadow-[0_18px_30px_rgba(15,23,42,0.14)]" />
            </div>
          </div>
        </section>
      </AppleScrollSection>

      <AppleScrollSection variant="fade-up">
        <DraggableCardDemo />
      </AppleScrollSection>

      <AppleScrollSection variant="slide-left">
        <LampDemo />
      </AppleScrollSection>

      <AppleScrollSection variant="fade-up">
        <SparklesPreview />
      </AppleScrollSection>

      <AppleScrollSection variant="zoom-in">
        <SparklesFullpagePreview />
      </AppleScrollSection>

      <AppleScrollSection variant="zoom-in">
        <WebcamPixelGridDemo />
      </AppleScrollSection>

      <AppleScrollSection variant="fade-up">
        <TextHoverEffectDemo />
      </AppleScrollSection>
    </main>
  )
}
