import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Code2, Smartphone, Cloud } from 'lucide-react';

const services = [
  {
    icon: Rocket,
    title: 'Product Strategy',
    desc: 'Riset, validasi, dan perencanaan roadmap untuk produk yang tepat sasaran.',
  },
  {
    icon: Code2,
    title: 'Custom Software',
    desc: 'Web app modern, API scalable, serta arsitektur cloud yang andal.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    desc: 'Aplikasi iOS/Android dengan performa tinggi dan UX premium.',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    desc: 'CI/CD, observability, dan infrastruktur otomatis untuk skala cepat.',
  },
];

const Services = () => {
  return (
    <section id="services" className="relative w-full bg-black py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="font-display text-3xl font-semibold md:text-4xl">Layanan Kami</h2>
            <p className="mt-2 max-w-xl text-white/70">
              Solusi end-to-end dari ide hingga peluncuran. Kami membangun sistem yang stabil,
              aman, dan mudah dikembangkan.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <div className="absolute inset-0 -z-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <s.icon className="h-7 w-7 text-fuchsia-400" />
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
