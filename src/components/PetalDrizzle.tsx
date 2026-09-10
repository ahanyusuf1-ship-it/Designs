import { useEffect, useRef, useMemo } from 'react';

interface PetalSpec {
  id: number;
  left: number; // percentage across screen width
  size: number; // width/height in px
  duration: number; // fall duration in seconds
  delay: number; // stagger delay in seconds
  initialRotate: number;
  endRotate: number;
  swayX: number; // horizontal sway distance in px
  color: string;
  opacity: number;
  shapeType: number; // 0, 1, or 2 for SVG shape variety
}

interface PetalDrizzleProps {
  count?: number;
  className?: string;
  targetFps?: number; // target frame rate (default: 25fps)
  fadeOutId?: string; // element ID to fade out when in view (default: 'card-countdown')
}

const PETAL_COLORS = [
  '#C07A85', // Soft Rose Pink (from Figma ref 08c)
  '#802336', // Deep Maroon
  '#D8C7A5', // Soft Gold
  '#E8C4C8', // Muted Rose Gold
  '#CBB68E', // Warm Champagne Gold
];

export function PetalDrizzle({
  count = 22,
  className = '',
  targetFps = 25,
  fadeOutId = 'card-countdown',
}: PetalDrizzleProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const petalRefs = useRef<(HTMLDivElement | null)[]>([]);

  const petals = useMemo<PetalSpec[]>(() => {
    return Array.from({ length: count }).map((_, i) => {
      const left = Math.round((i / count) * 94 + (Math.sin(i * 3) * 3 + 3));
      const size = 12 + ((i * 7) % 14); // 12px to 26px
      const duration = 7 + ((i * 11) % 5); // 7s to 12s
      const delay = (i * 0.35) % 6; // 0s to 6s
      const initialRotate = -45 + ((i * 23) % 90);
      const endRotate = initialRotate + 90 + ((i * 17) % 180);
      const swayX = 12 + ((i * 13) % 20); // 12px to 32px sway
      const color = PETAL_COLORS[i % PETAL_COLORS.length];
      const opacity = 0.5 + ((i * 9) % 45) / 100; // 0.5 to 0.95
      const shapeType = i % 3;

      return {
        id: i,
        left,
        size,
        duration,
        delay,
        initialRotate,
        endRotate,
        swayX,
        color,
        opacity,
        shapeType,
      };
    });
  }, [count]);

  useEffect(() => {
    let animId: number;
    const startTime = performance.now();
    let lastFrameTime = performance.now();
    const frameInterval = 1000 / targetFps; // 40ms for 25fps

    const renderFrame = (now: number) => {
      animId = requestAnimationFrame(renderFrame);

      const elapsedSinceLast = now - lastFrameTime;
      if (elapsedSinceLast < frameInterval) return;

      // Maintain fixed 25fps frame cadence
      lastFrameTime = now - (elapsedSinceLast % frameInterval);
      const totalElapsedSeconds = (now - startTime) / 1000;

      // Calculate scroll fade-out factor if target element is in view
      let scrollFadeFactor = 1;
      if (fadeOutId) {
        const fadeTargetEl = document.getElementById(fadeOutId);
        if (fadeTargetEl) {
          const rect = fadeTargetEl.getBoundingClientRect();
          const winH = window.innerHeight || 800;
          const fadeStart = winH * 0.95; // begins fading as countdown card enters bottom 95% of viewport
          const fadeEnd = winH * 0.25;   // fully disappears when countdown card is 25% from top

          if (rect.top >= fadeStart) {
            scrollFadeFactor = 1;
          } else if (rect.top <= fadeEnd) {
            scrollFadeFactor = 0;
          } else {
            scrollFadeFactor = (rect.top - fadeEnd) / (fadeStart - fadeEnd);
          }
        }
      }

      petals.forEach((petal, idx) => {
        const el = petalRefs.current[idx];
        if (!el) return;

        if (totalElapsedSeconds < petal.delay || scrollFadeFactor <= 0.001) {
          el.style.opacity = '0';
          return;
        }

        const activeTime = totalElapsedSeconds - petal.delay;
        const progress = (activeTime % petal.duration) / petal.duration;

        // 1. Vertical position (-10vh to 110vh)
        const yVh = -10 + progress * 120;

        // 2. Horizontal sway (sine oscillation)
        const sway = Math.sin(progress * Math.PI * 4) * petal.swayX;

        // 3. Rotation (linear interpolation)
        const rotate = petal.initialRotate + progress * (petal.endRotate - petal.initialRotate);

        // 4. Opacity envelope (fade in 0-0.1, hold 0.1-0.85, fade out 0.85-1.0)
        let currentOpacity = petal.opacity;
        if (progress < 0.1) {
          currentOpacity = (progress / 0.1) * petal.opacity;
        } else if (progress > 0.85) {
          currentOpacity = ((1 - progress) / 0.15) * petal.opacity;
        }

        const finalOpacity = currentOpacity * scrollFadeFactor;

        el.style.transform = `translate3d(${sway.toFixed(1)}px, ${yVh.toFixed(1)}vh, 0px) rotate(${rotate.toFixed(1)}deg)`;
        el.style.opacity = finalOpacity.toFixed(2);
      });
    };

    animId = requestAnimationFrame(renderFrame);

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [petals, targetFps, fadeOutId]);

  return (
    <div ref={containerRef} className={`fixed inset-0 pointer-events-none z-40 overflow-hidden ${className}`}>
      {petals.map((petal, i) => (
        <div
          key={petal.id}
          ref={(el) => { petalRefs.current[i] = el; }}
          style={{
            position: 'absolute',
            left: `${petal.left}%`,
            width: `${petal.size}px`,
            height: `${petal.size * 1.5}px`,
            top: 0,
            opacity: 0,
            transform: `translate3d(0px, -10vh, 0px) rotate(${petal.initialRotate}deg)`,
            willChange: 'transform, opacity',
          }}
        >
          {petal.shapeType === 0 ? (
            <svg viewBox="0 0 40 60" className="w-full h-full drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
              <path
                d="M20 2 C35 15, 38 40, 20 58 C2 40, 5 15, 20 2 Z"
                fill={petal.color}
                opacity={petal.opacity}
              />
            </svg>
          ) : petal.shapeType === 1 ? (
            <svg viewBox="0 0 40 60" className="w-full h-full drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
              <path
                d="M10 2 C32 10, 40 38, 24 58 C8 55, 0 30, 10 2 Z"
                fill={petal.color}
                opacity={petal.opacity}
              />
            </svg>
          ) : (
            <svg viewBox="0 0 30 60" className="w-full h-full drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
              <ellipse
                cx="15"
                cy="30"
                rx="12"
                ry="26"
                fill={petal.color}
                opacity={petal.opacity}
              />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}

export default PetalDrizzle;
