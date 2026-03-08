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

    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let intervalId: ReturnType<typeof setInterval> | undefined;
    let index = 0;

    timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        index += 1;
        setDisplayedText(text.slice(0, index));

        if (index >= text.length) {
          if (intervalId) clearInterval(intervalId);
          setIsComplete(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [speed, startDelay, text]);

  return { displayedText, isComplete };
}
