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
      <div className="absolute inset-y-0 right-0 hidden w-[42%] bg-[radial-gradient(circle_at_65%_38%,rgba(255,255,255,0.95),rgba(215,224,235,0.7)_28%,rgba(243,243,241,0)_72%)] md:block" />
      <div className="absolute bottom-16 right-[12%] hidden h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.95),rgba(203,213,225,0.5)_40%,rgba(243,243,241,0)_72%)] blur-2xl md:block" />
      <div className="absolute bottom-12 right-[18%] hidden h-72 w-[2px] rotate-[12deg] bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(250,204,21,0.95),rgba(255,255,255,0))] shadow-[0_0_32px_rgba(251,191,36,0.6)] md:block" />

      <div className="relative mx-auto max-w-7xl px-4 pb-8 pt-12 sm:px-6 md:px-10 md:pb-10 md:pt-20">
        <div className="grid gap-10 border-b border-black/10 pb-12 md:grid-cols-[1.1fr_1.9fr] md:gap-14 md:pb-16">
          <div className="max-w-sm">
            <div className="flex items-start gap-3 sm:items-center">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black text-sm font-black text-white">
                {companyData.mark.slice(0, 1)}
              </div>
              <div className="min-w-0">
                <p className="text-xl font-black tracking-tight sm:text-2xl">{companyData.name}</p>
                <p className="text-base leading-6 text-black/70 sm:text-lg">
                  {footerContent.tagline}
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-xs text-sm leading-7 text-black/60 md:mt-8">
              {footerContent.helperText}
            </p>

            <div className="mt-6 flex flex-wrap gap-3 md:mt-8">
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

            <div className="mt-6 space-y-4 text-sm text-black/65 md:mt-8">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                <span className="min-w-0 break-all">{contactInformation.email}</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <span className="min-w-0 break-words">{contactInformation.phone}</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span className="min-w-0 break-words">{contactInformation.address}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:gap-x-10 lg:grid-cols-4">
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

        <div className="mt-10 md:mt-12">
          <div className="h-16 w-full sm:h-20 md:h-40">
            <TextHoverEffect text="NEXA" />
          </div>
          <div className="mt-3 h-14 w-full sm:mt-4 sm:h-20 md:h-44">
            <TextHoverEffect
              text={footerContent.statement}
              viewBox="0 0 1200 140"
              textLength={1120}
            />
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-black/10 pt-5 text-sm text-black/50 md:mt-10 md:flex-row md:items-center md:justify-between md:gap-4 md:pt-6">
          <p>{footerContent.legal}</p>
          <div className="flex items-start gap-2 md:items-center">
            <Globe className="mt-0.5 h-4 w-4 shrink-0 md:mt-0" />
            <span className="break-words">{companyData.headquarters}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
