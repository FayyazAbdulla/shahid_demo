"use client";

import { useEffect, useState } from "react";

type UseTypingTextOptions = {
  speed?: number;
  startDelay?: number;
};

export function useTypingText(
  text: string,
  { speed = 35, startDelay = 0 }: UseTypingTextOptions = {},
) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setDisplayedText("");
    setIsComplete(false);

    if (!text) {
      setIsComplete(true);
      return;
    }

    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let cancelled = false;
    let index = 0;

    const tick = () => {
      if (cancelled) return;

      index += 1;
      setDisplayedText(text.slice(0, index));

      if (index >= text.length) {
        setIsComplete(true);
        return;
      }

      timeoutId = setTimeout(tick, speed);
    };

    timeoutId = setTimeout(tick, startDelay);

    return () => {
      cancelled = true;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [speed, startDelay, text]);

  return { displayedText, isComplete };
}
