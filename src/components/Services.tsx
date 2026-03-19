import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { Plane, Compass, BookOpen, Map, FileText, Ticket } from "lucide-react";

const services = [
  {
    title: "Umrah Packages",
    description: "Spiritual journeys with premium accommodation and guided tours.",
    icon: BookOpen,
    color: "from-emerald-400 to-teal-500",
  },
  {
    title: "Hajj Services",
    description: "Comprehensive Hajj packages ensuring a peaceful pilgrimage.",
    icon: Compass,
    color: "from-blue-400 to-indigo-500",
  },
  {
    title: "International Tours",
    description: "Explore Dubai, Turkey, Malaysia, and more with our curated packages.",
    icon: Plane,
    color: "from-purple-400 to-pink-500",
  },
  {
    title: "Domestic Tours",
    description: "Discover the beauty of Northern Pakistan, Hunza, Skardu, and Swat.",
    icon: Map,
    color: "from-orange-400 to-red-500",
  },
  {
    title: "Visa Assistance",
    description: "Hassle-free visa processing for multiple countries worldwide.",
    icon: FileText,
    color: "from-yellow-400 to-amber-500",
  },
  {
    title: "Ticket Booking",
    description: "Affordable and quick flight bookings for domestic and international routes.",
    icon: Ticket,
    color: "from-cyan-400 to-blue-500",
  },
];

export function Services() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="services" className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Services</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            From spiritual journeys to adventurous getaways, we provide comprehensive travel solutions tailored to your needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-0.5 mb-6 transform group-hover:-translate-y-2 transition-transform duration-500`}>
                  <div className="w-full h-full bg-zinc-900 rounded-[14px] flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
