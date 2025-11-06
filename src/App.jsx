import React from 'react';
import Hero3D from './components/Hero3D';
import Services from './components/Services';
import ProcessTimeline from './components/ProcessTimeline';
import ContactCTA from './components/ContactCTA';

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-white">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-gradient-to-br from-fuchsia-500 to-cyan-400" />
          <span className="font-semibold">Intech</span>
        </a>
        <nav className="hidden gap-6 text-sm md:flex">
          <a href="#services" className="text-white/80 hover:text-white">Layanan</a>
          <a href="#process" className="text-white/80 hover:text-white">Proses</a>
          <a href="#contact" className="text-white/80 hover:text-white">Kontak</a>
        </nav>
        <a href="#contact" className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-black hover:bg-white/90">Konsultasi</a>
      </div>
    </header>
  );
};

function App() {
  return (
    <div className="min-h-screen w-full bg-black">
      <Navbar />
      <main className="w-full">
        <Hero3D />
        <div id="process"><ProcessTimeline /></div>
        <Services />
        <ContactCTA />
        <footer className="border-t border-white/10 bg-black py-10 text-center text-white/60">
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-sm">© {new Date().getFullYear()} Intech. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
