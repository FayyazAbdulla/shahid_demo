import Component from '@/components/3d-globe-demo-3'
import KeyboardDemo from '@/components/ui/keyboard-demo'
import SparklesPreview from '@/components/ui/sparkles-demo'
import SparklesFullpagePreview from '@/components/ui/sparkles-fullpage-demo'
import TextHoverEffectDemo from '@/components/ui/text-hover-effect-demo'
import WebcamPixelGridDemo from '@/components/ui/webcam-pixel-grid-demo'

export default function Page() {
  return (
    <main className="w-full">
      <Component />
      <KeyboardDemo />
      <SparklesPreview />
      <SparklesFullpagePreview />
      <TextHoverEffectDemo />
      <WebcamPixelGridDemo />
    </main>
  )
}
