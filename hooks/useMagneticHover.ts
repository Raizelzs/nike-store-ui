"use client";

import { MouseEvent, useMemo, useState } from "react";

export function useMagneticHover(intensity = 16) {
  const [transform, setTransform] = useState("perspective(1200px) rotateX(0deg) rotateY(0deg)");

  const handlers = useMemo(
    () => ({
      onMouseMove: (event: MouseEvent<HTMLElement>) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const rotateY = ((x / rect.width) - 0.5) * intensity;
        const rotateX = (0.5 - y / rect.height) * intensity;
        setTransform(`perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
      },
      onMouseLeave: () => {
        setTransform("perspective(1200px) rotateX(0deg) rotateY(0deg)");
      }
    }),
    [intensity]
  );

  return { transform, handlers };
}
