import React from "react";
import { Github, Globe, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import {
  companyData,
  contactInformation,
  footerContent,
  footerNavigation,
  socialLinks,
} from "@/environment/data";

const socialIconMap: Record<string, React.ReactNode> = {
  LinkedIn: <Linkedin className="h-4 w-4" />,
  GitHub: <Github className="h-4 w-4" />,
  X: <Globe className="h-4 w-4" />,
};

export default function TextHoverEffectDemo() {
  return (
    <footer className="relative overflow-hidden bg-[#f3f3f1] text-black">
      <div className="absolute inset-y-0 right-0 w-[42%] bg-[radial-gradient(circle_at_65%_38%,rgba(255,255,255,0.95),rgba(215,224,235,0.7)_28%,rgba(243,243,241,0)_72%)]" />
      <div className="absolute bottom-16 right-[12%] h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.95),rgba(203,213,225,0.5)_40%,rgba(243,243,241,0)_72%)] blur-2xl" />
      <div className="absolute bottom-12 right-[18%] h-72 w-[2px] rotate-[12deg] bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(250,204,21,0.95),rgba(255,255,255,0))] shadow-[0_0_32px_rgba(251,191,36,0.6)]" />

      <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-16 md:px-10 md:pt-20">
        <div className="grid gap-14 border-b border-black/10 pb-16 md:grid-cols-[1.1fr_1.9fr]">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black text-sm font-black text-white">
                {companyData.mark.slice(0, 1)}
              </div>
              <div>
                <p className="text-2xl font-black tracking-tight">{companyData.name}</p>
                <p className="text-lg text-black/70">{footerContent.tagline}</p>
              </div>
            </div>

            <p className="mt-8 max-w-xs text-sm leading-7 text-black/60">
              {footerContent.helperText}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/70 text-black transition-colors hover:bg-black hover:text-white"
                >
                  {socialIconMap[item.label] ?? <Globe className="h-4 w-4" />}
                </a>
              ))}
            </div>

            <div className="mt-8 space-y-4 text-sm text-black/65">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4" />
                <span>{contactInformation.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4" />
                <span>{contactInformation.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4" />
                <span>{contactInformation.address}</span>
              </div>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {footerNavigation.map((group) => (
              <div key={group.title}>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/40">
                  {group.title}
                </p>
                <div className="mt-5 space-y-3">
                  {group.links.map((link) => (
                    <a
                      key={link}
                      href="#"
                      className="block text-[1.05rem] font-medium text-black/80 transition-colors hover:text-black"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <div className="h-28 w-full md:h-40">
            <TextHoverEffect text="NEXA" />
          </div>
          <div className="mt-4 h-24 w-full md:h-44">
            <TextHoverEffect
              text={footerContent.statement}
              viewBox="0 0 1200 140"
              textLength={1120}
            />
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-black/10 pt-6 text-sm text-black/50 md:flex-row md:items-center md:justify-between">
          <p>{footerContent.legal}</p>
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            <span>{companyData.headquarters}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
