import { motion } from "motion/react";
import { Globe } from "./Globe";
import { ArrowRight, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-black to-black" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] mix-blend-screen" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 w-fit backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-sm font-medium text-gray-300">Trusted Pakistani Travel Agency</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight">
              Explore the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">World</span> with Burhan Tours
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed">
              Premium travel experiences, seamless visa assistance, and unforgettable journeys. Partnered with HudaLabs to bring you the best.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#packages"
                className="group flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all duration-300 hover:scale-105"
              >
                View Packages
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 px-8 py-4 bg-white/5 text-white font-semibold rounded-full border border-white/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                Contact Us
              </a>
            </div>

            <div className="flex items-center gap-6 pt-8 border-t border-white/10 mt-4">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">10k+</span>
                <span className="text-sm text-gray-400">Happy Travelers</span>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">50+</span>
                <span className="text-sm text-gray-400">Destinations</span>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">24/7</span>
                <span className="text-sm text-gray-400">Support</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
            <Globe className="relative z-10 drop-shadow-2xl" />
            
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-1/4 -left-8 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center gap-3 z-20"
            >
              <div className="bg-blue-500/20 p-2 rounded-lg">
                <MapPin className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Hafizabad</p>
                <p className="text-xs text-gray-400">Punjab, Pakistan</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
