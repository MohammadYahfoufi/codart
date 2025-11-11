'use client';

import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight } from '@/lib/motion';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { FormEvent, useState } from 'react';

// 3D Model Component
const PlanetModel = () => {
  const { scene } = useGLTF('/stylized_planet.glb');

  return (
    <primitive
      object={scene}
      scale={[2, 2, 2]}
      position={[0, 0, 0]}
      rotation={[0, 0, 0]}
    />
  );
};

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
      setStatusMessage(null);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setStatusMessage(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error();

      setSubmitStatus('success');
      setStatusMessage(
        "✅ Message sent successfully! I'll get back to you soon.",
      );
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
      setStatusMessage('❌ Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-20 px-10"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col lg:flex-row items-center justify-center gap-10 w-full max-w-6xl"
      >
        {/* Contact Form */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 w-full lg:w-1/2"
        >
          <div className="flex flex-col gap-2">
            <p className="text-[#b49bff] text-sm uppercase tracking-wider">
              GET IN TOUCH
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Contact.
            </h2>
            <p className="text-[18px] font-medium text-gray-300 tracking-wide">
              Ready to start your next project? Let&apos;s discuss how I can
              help bring your ideas to life.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg">
                <svg
                  className="h-5 w-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white font-semibold">contact@codart.dev</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg">
                <svg
                  className="h-5 w-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-white font-semibold">Available Worldwide</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-gray-300 text-sm">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="What's your name?"
                required
                className="w-full px-4 py-3 bg-[#1a1a2e] border border-[#7042f88b] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#b49bff] transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-gray-300 text-sm">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="What's your email?"
                required
                className="w-full px-4 py-3 bg-[#1a1a2e] border border-[#7042f88b] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#b49bff] transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-gray-300 text-sm">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                rows={4}
                required
                className="w-full px-4 py-3 bg-[#1a1a2e] border border-[#7042f88b] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#b49bff] transition-colors resize-none"
              />
            </div>

            {/* Status Messages */}
            {submitStatus !== 'idle' && statusMessage && (
              <div
                className={`flex items-start justify-between gap-3 p-3 rounded-lg text-sm ${
                  submitStatus === 'success'
                    ? 'bg-green-500/20 border border-green-500/50 text-green-400'
                    : 'bg-red-500/20 border border-red-500/50 text-red-400'
                }`}
              >
                <span>{statusMessage}</span>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitStatus('idle');
                    setStatusMessage(null);
                  }}
                  aria-label="Dismiss message"
                  className="text-current hover:opacity-80 transition-opacity"
                >
                  ✕
                </button>
              </div>
            )}

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
              className={`w-full py-3 px-6 font-semibold rounded-lg transition-all duration-300 ${
                isSubmitting
                  ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:from-purple-600 hover:to-cyan-600'
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>

            <p className="text-center text-sm text-gray-500">
              ⚡ I typically respond within 24 hours
            </p>
          </form>
        </motion.div>

        {/* 3D Planet Model */}
        <motion.div
          variants={slideInFromRight(0.5)}
          className="w-full lg:w-1/2 flex justify-center items-center"
        >
          <div className="w-96 h-96 lg:w-[500px] lg:h-[500px]">
            <Canvas
              camera={{ position: [0, 0, 5], fov: 50 }}
              style={{ background: 'transparent' }}
            >
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <pointLight
                position={[-10, -10, -5]}
                intensity={0.5}
                color="#b49bff"
              />
              <PlanetModel />
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                enableRotate={true}
                minPolarAngle={Math.PI / 2}
                maxPolarAngle={Math.PI / 2}
                autoRotate={true}
                autoRotateSpeed={2}
              />
            </Canvas>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
