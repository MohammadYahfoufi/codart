'use client';

import React from 'react';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from 'framer-motion';
import { cn } from '@/lib/utils';

export const CardContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn('relative group/card w-full h-full', className)}
      style={{ perspective: 1200 }}
    >
      {children}
    </div>
  );
};

export const CardBody = ({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const rotateX = useSpring(0, { stiffness: 150, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 150, damping: 20 });
  const scale = useSpring(1, { stiffness: 200, damping: 18 });
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);
  const glareOpacity = useSpring(0, { stiffness: 150, damping: 24 });
  const glareBackground = useMotionTemplate`
    radial-gradient(
      550px circle at ${glareX}% ${glareY}%,
      rgba(255, 255, 255, 0.38),
      transparent 65%
    )
  `;

  const handleMouseMove = React.useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const rotateMax = 14;
      const percentX = (x / rect.width) * 100;
      const percentY = (y / rect.height) * 100;

      const rotateYValue = ((percentX - 50) / 50) * rotateMax;
      const rotateXValue = ((percentY - 50) / 50) * -rotateMax;

      rotateX.set(rotateXValue);
      rotateY.set(rotateYValue);
      glareX.set(percentX);
      glareY.set(percentY);
    },
    [glareX, glareY, rotateX, rotateY],
  );

  const handleMouseEnter = React.useCallback(() => {
    scale.set(1.04);
    glareOpacity.set(1);
  }, [glareOpacity, scale]);

  const handleMouseLeave = React.useCallback(() => {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
    glareOpacity.set(0);
    glareX.set(50);
    glareY.set(50);
  }, [glareOpacity, glareX, glareY, rotateX, rotateY, scale]);

  return (
    <motion.div
      ref={ref}
      className={cn(
        'relative w-full h-full rounded-2xl p-6 border border-white/10 transition-colors duration-300',
        'bg-[#1a1a2e] shadow-[0_20px_60px_-30px_rgba(80,60,210,0.65)]',
        className,
      )}
      style={{
        ...(style ?? {}),
        transformStyle: 'preserve-3d',
        transformPerspective: 1200,
        rotateX,
        rotateY,
        scale,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          background: glareBackground,
          opacity: glareOpacity,
          mixBlendMode: 'screen',
        }}
      />
      <div
        className="relative z-10 flex h-full flex-col justify-between space-y-4"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {children}
      </div>
    </motion.div>
  );
};

export const CardItem = ({
  as: Component = 'div',
  children,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  className,
  style,
  ...props
}: {
  as?: React.ElementType;
  children: React.ReactNode;
  translateZ?: number;
  rotateX?: number;
  rotateY?: number;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any;
}) => {
  const MotionComponent = motion(Component);
  const transformParts = [
    style?.transform,
    `translateZ(${translateZ}px)`,
    rotateX ? `rotateX(${rotateX}deg)` : '',
    rotateY ? `rotateY(${rotateY}deg)` : '',
  ].filter(Boolean);

  return (
    <MotionComponent
      className={className}
      style={{
        ...(style ?? {}),
        transform: transformParts.join(' '),
      }}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};
