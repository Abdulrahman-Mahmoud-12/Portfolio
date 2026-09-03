"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certifications } from "@/content/site";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <SectionHeading number="08" title="Certifications" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <motion.div key={cert.name}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="card card-gradient-border overflow-hidden hover:border-accent/20 hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Certificate image */}
              {cert.image ? (
                <div className="relative h-36 w-full overflow-hidden bg-surface">
                  <Image src={cert.image} alt={cert.name} fill sizes="(max-width:640px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-base via-bg-base/20 to-transparent" />
                </div>
              ) : (
                <div className="h-28 bg-gradient-to-br from-accent/10 via-surface to-accent-2/5 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <Award size={26} className="text-accent" />
                  </div>
                </div>
              )}

              {/* Info */}
              <div className="p-5">
                <h3 className="text-white font-bold text-sm leading-snug mb-1.5">{cert.name}</h3>
                <p className="text-muted text-xs">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
