import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    step: '01',
    title: 'Discovery',
    desc: 'Memahami tujuan bisnis, target pengguna, dan metrik keberhasilan.',
  },
  {
    step: '02',
    title: 'Design & Prototyping',
    desc: 'Membuat arsitektur informasi, UI/UX, dan prototipe interaktif.',
  },
  {
    step: '03',
    title: 'Build',
    desc: 'Implementasi agile dengan standar keamanan dan kualitas kode tinggi.',
  },
  {
    step: '04',
    title: 'Launch & Iterate',
    desc: 'Peluncuran, observasi, dan iterasi berkelanjutan berbasis data.',
  },
];

const ProcessTimeline = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-black via-black to-zinc-950 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <h2 className="font-display text-3xl font-semibold md:text-4xl">Proses Kolaborasi</h2>
          <p className="mt-2 max-w-2xl text-white/70">
            Transparan, terukur, dan berfokus pada dampak. Kami bekerja sebagai perpanjangan tim Anda.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-white/10 sm:left-1/2" />

          <div className="space-y-10">
            {steps.map((s, idx) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className={`relative grid grid-cols-1 items-center gap-6 sm:grid-cols-2 ${idx % 2 === 0 ? '' : 'sm:[&>*]:order-last'}`}
              >
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <div className="text-sm text-fuchsia-400">{s.step}</div>
                  <h3 className="mt-1 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-white/70">{s.desc}</p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="h-24 w-24 rounded-full bg-gradient-to-br from-fuchsia-500/30 to-cyan-400/30 blur-xl" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
