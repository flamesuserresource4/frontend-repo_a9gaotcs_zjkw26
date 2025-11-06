import React from 'react';
import { motion } from 'framer-motion';

const ContactCTA = () => {
  return (
    <section id="contact" className="relative w-full overflow-hidden bg-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_30rem_at_center,rgba(217,70,239,0.18),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 backdrop-blur-md">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-2xl font-semibold md:text-3xl"
          >
            Siap membangun sesuatu yang berdampak bersama Intech?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-2 max-w-2xl text-white/75"
          >
            Ceritakan kebutuhan Anda dan tim kami akan kembali dengan rekomendasi solusi terbaik dalam 24 jam.
          </motion.p>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2"
          >
            <input
              className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none ring-0 placeholder:text-white/40"
              placeholder="Nama"
            />
            <input
              className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none ring-0 placeholder:text-white/40"
              placeholder="Email"
              type="email"
            />
            <textarea
              className="sm:col-span-2 rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none ring-0 placeholder:text-white/40"
              rows={4}
              placeholder="Ceritakan project Anda"
            />
            <div className="sm:col-span-2 mt-2">
              <button
                type="submit"
                className="w-full rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90"
              >
                Kirim Pesan
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
