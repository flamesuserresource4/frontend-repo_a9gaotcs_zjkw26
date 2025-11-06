import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero3D = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays for depth without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute -bottom-32 left-1/2 h-72 w-[60rem] -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white/80 backdrop-blur-md ring-1 ring-white/15"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
          Intech • Startup Software Futuristik
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          className="font-display text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl"
        >
          Membangun Produk Digital Generasi Berikutnya
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          className="mt-4 max-w-2xl text-balance text-white/80"
        >
          Kami adalah studio pengembangan perangkat lunak yang fokus pada pengalaman pengguna,
          performa tinggi, dan teknologi terkini. Interaktif, minimalis, dan siap skala.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#services"
            className="group rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-white/90"
          >
            Jelajahi Layanan
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white hover:bg-white/10"
          >
            Konsultasi Gratis
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero3D;
