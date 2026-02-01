"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the section is visible
        rootMargin: "0px 0px -100px 0px", // Start animation slightly before fully in view
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-neutral-950 py-20 px-6"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side - Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[4/3] lg:aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20 dark:shadow-blue-500/40">
              {/* Replace with your actual image */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-800 dark:from-blue-500 dark:via-cyan-500 dark:to-blue-700">
                {/* Placeholder - Replace with actual Image component */}
                <div className="w-full h-full flex items-center justify-center text-white text-6xl font-bold">
                  {/* <Image 
                    src="/your-company-image.jpg" 
                    alt="Company"
                    fill
                    className="object-cover"
                  /> */}
                  LOGO
                </div>
              </div>

              {/* Decorative border */}
              <div className="absolute inset-0 border-4 border-white/10 dark:border-white/20 rounded-2xl pointer-events-none" />
            </div>

            {/* Floating accent card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="absolute -bottom-8 -right-8 bg-white dark:bg-neutral-900 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-neutral-800"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    25+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Years Experience
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side - Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* Label */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-block"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                  About Us
                </span>
              </span>
            </motion.div> */}

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
            >
              Mobile Laboratory{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
                At The Wellsite
              </span>
            </motion.h2>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
            >
              <p>
                NuPhase Measurements introduces its state-of-the-art mobile
                laboratory, designed for agility and reliability in production
                operations. Delivering results close to the sampling point
                substantially reduces turn around time and increases
                reliability.
              </p>
              <p>
                Our deliverables include gas composition as per GPA standards,
                oil API, water density at the on-site same day. We enable
                immediate update of parameters for single phase, multiphase flow
                meters and other production allocation systems.
              </p>
            </motion.div>

            {/* Features/Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-2 gap-6 pt-6"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    GPA Standards
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  API accepted standards compliance
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    Same Day Reports
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  On-site delivery of results
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    Reduced HSE Risk
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  No sample transportation needed
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    Portable MicroGC
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Agilent technology on-site
                </p>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="pt-4"
            >
              <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-500 dark:to-cyan-500 text-white font-semibold rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg shadow-blue-500/30">
                Discover Our Services
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
