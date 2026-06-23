"use client";

import { useState, useEffect } from "react";

export default function LoadingScreen({ onComplete }) {
  const [text, setText] = useState("");
  const fullText = "Welcome to My Portfolio";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index >= fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 1500);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white">
      {/* Typing + cursor */}
      <div className="text-5xl font-bold font-mono mb-10">
        {text}
        <span className="animate-blink text-blue-400">|</span>
      </div>

      {/* Loading bar */}
      <div className="w-96 h-1 bg-gray-800 rounded-full overflow-hidden">
        <div className="h-full w-1/3 bg-blue-600 animate-loading-bar rounded-full"></div>
      </div>
    </div>
  );
}