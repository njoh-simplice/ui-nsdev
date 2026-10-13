"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrambleOnLoad } from "@/components/ui/scramble-on-load";

export default function ScrambleOnLoadDemo() {
  // The effect plays once, so changing the key remounts the text to play it again.
  const [run, setRun] = useState(0);

  return (
    <div className="flex w-full flex-col items-center gap-8">
      <div key={run} className="flex flex-col items-center gap-3 text-center">
        <ScrambleOnLoad render={<h2 className="text-4xl font-bold tracking-tight" />}>
          Own every pixel
        </ScrambleOnLoad>
        <ScrambleOnLoad delay={500} render={<p className="max-w-sm text-lg text-text/80" />}>
          A line of text that starts a moment after the heading and settles from left to right.
        </ScrambleOnLoad>
      </div>
      <Button variant="secondary" onClick={() => setRun((value) => value + 1)}>
        Replay
      </Button>
    </div>
  );
}
