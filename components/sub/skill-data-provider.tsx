'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

type SkillDataProviderProps = {
  src: string;
  name: string;
  width: number;
  height: number;
  index: number;
};

export const SkillDataProvider = ({
  src,
  name,
  width,
  height,
  index,
}: SkillDataProviderProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.1;
  const minResponsiveSize = Math.max(24, Math.round(width * 0.3));
  const maxResponsiveSize = width;
  const preferredViewportWidth = (width / 12).toFixed(2);
  const responsiveWidth = `clamp(${minResponsiveSize}px, ${preferredViewportWidth}vw, ${maxResponsiveSize}px)`;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? 'visible' : 'hidden'}
      custom={index}
      transition={{ delay: index * animationDelay }}
      className="flex items-center justify-center"
    >
      <Image
        src={`/skills/${src}`}
        width={width}
        height={height}
        alt={name}
        sizes="(max-width: 640px) 9vw, (max-width: 1024px) 7vw, 90px"
        style={{ width: responsiveWidth, height: 'auto' }}
      />
    </motion.div>
  );
};
