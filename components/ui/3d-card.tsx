'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export const CardContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn('relative group/card w-full h-full', className)}>
      {children}
    </div>
  );
};

export const CardBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      className={cn(
        'relative group/card w-full h-full rounded-xl p-6 border transition-all duration-300',
        'bg-[#1a1a2e] border-[#7042f88b] hover:border-[#b49bff]',
        'hover:shadow-2xl hover:shadow-purple-500/20',
        className,
      )}
      style={{
        transformStyle: 'preserve-3d',
      }}
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
        ease: 'easeOut',
      }}
    >
      {children}
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
  ...props
}: {
  as?: React.ElementType;
  children: React.ReactNode;
  translateZ?: number;
  rotateX?: number;
  rotateY?: number;
  className?: string;
  [key: string]: any;
}) => {
  const MotionComponent = motion(Component);

  return (
    <MotionComponent
      className={className}
      style={{
        transform: `translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      }}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};
