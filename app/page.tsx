import Component from '@/components/3d-globe-demo-3'
import HeroScrollDemo from '@/components/ui/container-scroll-animation-demo'
import DraggableCardDemo from '@/components/ui/draggable-card-demo-2'
import KeyboardDemo from '@/components/ui/keyboard-demo'
import SparklesPreview from '@/components/ui/sparkles-demo'
import SparklesFullpagePreview from '@/components/ui/sparkles-fullpage-demo'
import TextHoverEffectDemo from '@/components/ui/text-hover-effect-demo'
import WebcamPixelGridDemo from '@/components/ui/webcam-pixel-grid-demo'

export default function Page() {
  return (
    <main className="w-full">
      <Component />
      <HeroScrollDemo />
      <DraggableCardDemo />
      <KeyboardDemo />
      <SparklesPreview />
      <SparklesFullpagePreview />
      <TextHoverEffectDemo />
      <WebcamPixelGridDemo />
    </main>
  )
}
