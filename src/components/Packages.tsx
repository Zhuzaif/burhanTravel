import React from "react";
import { motion, useMotionValue, useTransform, useSpring } from "motion/react";
import { useInView } from "react-intersection-observer";
import { Calendar, MapPin, DollarSign } from "lucide-react";

const packages = [
  {
    title: "Dubai Desert Safari",
    location: "Dubai, UAE",
    price: "From PKR 150,000",
    duration: "5 Days / 4 Nights",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000",
  },
  {
    title: "Istanbul & Cappadocia",
    location: "Turkey",
    price: "From PKR 250,000",
    duration: "7 Days / 6 Nights",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=1000",
  },
  {
    title: "Hunza Valley Tour",
    location: "Northern Pakistan",
    price: "From PKR 45,000",
    duration: "6 Days / 5 Nights",
    image: "https://images.unsplash.com/photo-1586521995568-39abaa0c2311?q=80&w=1000",
  },
];

function PackageCard({ pkg, index }: { pkg: typeof packages[0]; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      style={{ perspective: 1000 }}
      className="relative group cursor-pointer"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative w-full h-[450px] rounded-3xl overflow-hidden shadow-2xl bg-zinc-900 border border-white/10"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={pkg.image}
            alt={pkg.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>

        <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end" style={{ transform: "translateZ(50px)" }}>
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-medium text-blue-300 uppercase tracking-wider">{pkg.location}</span>
          </div>
          
          <h3 className="text-3xl font-bold text-white mb-4 leading-tight">{pkg.title}</h3>
          
          <div className="flex items-center gap-6 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-gray-400" />
              <span className="text-sm text-gray-300">{pkg.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-gray-400" />
              <span className="text-sm text-gray-300 font-semibold">{pkg.price}</span>
            </div>
          </div>

          <a
            href="#contact"
            className="w-full py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold rounded-xl text-center transition-colors"
          >
            Book Now
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Packages() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="packages" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-blue-400">Packages</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Discover our handpicked travel packages designed to give you the best experience at competitive prices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <PackageCard key={pkg.title} pkg={pkg} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
