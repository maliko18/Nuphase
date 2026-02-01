"use client";

import { Button } from "@heroui/react";
import { useEffect, useState, useRef, useMemo } from "react";
import { motion } from "framer-motion";

export default function HeroSectionTyping() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const buttonsRef = useRef<HTMLDivElement>(null);

  const words = ["precise", "reliable", "on-site", "real-time", "mobile"];

  const particles = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 3,
        duration: 3 + Math.random() * 2,
      })),
    [],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
      },
    );

    const currentRef = buttonsRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full opacity-20 dark:opacity-20">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute w-1 h-1 bg-blue-600 dark:bg-blue-400 rounded-full animate-twinkle"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center mt-[-5rem]">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
        >
          <span className="text-black dark:text-white block mb-4">
            Cutting-Edge Mobile
          </span>
          <span className="text-black dark:text-white">Energy Services </span>
          <span className="relative inline-block min-w-[300px] md:min-w-[450px] text-left">
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 dark:from-cyan-400 dark:via-blue-500 dark:to-cyan-400 bg-clip-text text-transparent">
              {displayText}
              <span className="inline-block w-1 h-[0.9em] bg-blue-600 dark:bg-cyan-400 ml-1 animate-blink" />
            </span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-700 dark:text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed"
        >
          State-of-the-art mobile laboratory designed for agility and
          reliability in production operations. Same day report delivery with
          measurements close to sampling point.
        </motion.p>

        <motion.div
          ref={buttonsRef}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-600 dark:to-cyan-600 text-white font-semibold px-8 py-6 text-lg hover:scale-105 transition-transform shadow-xl shadow-blue-500/30"
            >
              Our Services →
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button
              size="lg"
              variant="bordered"
              className="border-2 border-gray-800 dark:border-slate-500 text-gray-800 dark:text-white font-semibold px-8 py-6 text-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-all"
            >
              Contact Us
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats or features */}
        {/* <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="p-6 rounded-2xl bg-gray-100 dark:bg-white/5 backdrop-blur border border-gray-200 dark:border-white/10">
            <div className="text-4xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">
              99.9%
            </div>
            <div className="text-gray-700 dark:text-slate-300">
              Guaranteed Accuracy
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-gray-100 dark:bg-white/5 backdrop-blur border border-gray-200 dark:border-white/10">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              24/7
            </div>
            <div className="text-gray-700 dark:text-slate-300">
              Continuous Monitoring
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-gray-100 dark:bg-white/5 backdrop-blur border border-gray-200 dark:border-white/10">
            <div className="text-4xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">
              ISO
            </div>
            <div className="text-gray-700 dark:text-slate-300">
              Certified Compliant
            </div>
          </div>
        </div>*/}
      </div>

      <style jsx>{`
        @keyframes blink {
          0%,
          49% {
            opacity: 1;
          }
          50%,
          100% {
            opacity: 0;
          }
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-blink {
          animation: blink 1s infinite;
        }

        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
