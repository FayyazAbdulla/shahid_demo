"use client";
import { Globe3D, GlobeMarker } from "@/components/ui/3d-globe";

const sampleMarkers: GlobeMarker[] = [
  {
    lat: 40.7128,
    lng: -74.006,
    src: "https://assets.aceternity.com/avatars/1.webp",
    label: "New York",
  },
  {
    lat: 51.5074,
    lng: -0.1278,
    src: "https://assets.aceternity.com/avatars/2.webp",
    label: "London",
  },
  {
    lat: 35.6762,
    lng: 139.6503,
    src: "https://assets.aceternity.com/avatars/3.webp",
    label: "Tokyo",
  },
  {
    lat: -33.8688,
    lng: 151.2093,
    src: "https://assets.aceternity.com/avatars/4.webp",
    label: "Sydney",
  },
  {
    lat: 48.8566,
    lng: 2.3522,
    src: "https://assets.aceternity.com/avatars/5.webp",
    label: "Paris",
  },
  {
    lat: 28.6139,
    lng: 77.209,
    src: "https://assets.aceternity.com/avatars/6.webp",
    label: "New Delhi",
  },
  {
    lat: 55.7558,
    lng: 37.6173,
    src: "https://assets.aceternity.com/avatars/7.webp",
    label: "Moscow",
  },
  {
    lat: -22.9068,
    lng: -43.1729,
    src: "https://assets.aceternity.com/avatars/8.webp",
    label: "Rio de Janeiro",
  },
  {
    lat: 31.2304,
    lng: 121.4737,
    src: "https://assets.aceternity.com/avatars/9.webp",
    label: "Shanghai",
  },
  {
    lat: 25.2048,
    lng: 55.2708,
    src: "https://assets.aceternity.com/avatars/10.webp",
    label: "Dubai",
  },
  {
    lat: -34.6037,
    lng: -58.3816,
    src: "https://assets.aceternity.com/avatars/11.webp",
    label: "Buenos Aires",
  },
  {
    lat: 1.3521,
    lng: 103.8198,
    src: "https://assets.aceternity.com/avatars/12.webp",
    label: "Singapore",
  },
  {
    lat: 37.5665,
    lng: 126.978,
    src: "https://assets.aceternity.com/avatars/13.webp",
    label: "Seoul",
  },
];

export default function Globe3DDemoThird() {
  return (
    <div className="relative w-full min-h-svh bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl -ml-40 -mb-40"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8 py-12 md:py-20">
        {/* Main content container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 w-fit bg-cyan-500/10 backdrop-blur-md border border-cyan-500/20 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-cyan-300">Global Network</span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-balance leading-tight">
                <span className="text-white">Connect </span>
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">globally,</span>
                <br />
                <span className="text-white">instantly</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg text-slate-300 max-w-md leading-relaxed">
              Join millions of users worldwide and share your voice across every continent. Real-time connectivity at your fingertips.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group relative px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 active:scale-95">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get Started
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
              <button className="px-8 py-3.5 bg-slate-700/50 backdrop-blur-sm border border-slate-600 text-white font-semibold rounded-xl hover:bg-slate-600/50 hover:border-slate-500 transition-all duration-300">
                Learn More
              </button>
            </div>

            {/* Stats row */}
            <div className="flex gap-8 pt-8 border-t border-slate-700/50">
              <div>
                <p className="text-2xl font-bold text-cyan-400">200M+</p>
                <p className="text-sm text-slate-400">Active Users</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-cyan-400">195</p>
                <p className="text-sm text-slate-400">Countries</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-cyan-400">99.9%</p>
                <p className="text-sm text-slate-400">Uptime</p>
              </div>
            </div>
          </div>

          {/* Right globe container */}
          <div className="relative h-96 md:h-[500px] lg:h-full min-h-96">
            {/* Glow effect behind globe */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl"></div>
            
            {/* Globe */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Globe3D
                className="h-full w-full"
                markers={sampleMarkers}
                config={{
                  atmosphereColor: "#06b6d4",
                  atmosphereIntensity: 25,
                  bumpScale: 5,
                  autoRotateSpeed: 0.25,
                }}
                onMarkerClick={(marker) => {
                  console.log("Clicked marker:", marker.label);
                }}
                onMarkerHover={(marker) => {
                  if (marker) {
                    console.log("Hovering:", marker.label);
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
