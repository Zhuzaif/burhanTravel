import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { ShieldCheck, Target, Users, Globe2 } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted Agency",
    description: "Years of experience in providing safe and reliable travel services across Pakistan.",
  },
  {
    icon: Target,
    title: "Our Mission",
    description: "To make travel accessible, affordable, and memorable for everyone.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Dedicated professionals ready to assist you 24/7 with your travel needs.",
  },
  {
    icon: Globe2,
    title: "Global Reach",
    description: "From domestic tours to international adventures, we cover it all.",
  },
];

export function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542224566-6e85f2e6772f?q=80&w=2000')] bg-cover bg-center opacity-5 mix-blend-luminosity" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-blue-400">Burhan Tours</span>
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            Based in Hafizabad, Punjab, Pakistan, Burhan Tours & Travel is your premier partner for exploring the world. In collaboration with <span className="text-white font-semibold">HudaLabs</span>, we bring cutting-edge technology to traditional travel services, ensuring a seamless experience from booking to destination.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors group"
            >
              <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
