'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="section-wrapper min-h-[90vh] flex items-center justify-center overflow-hidden bg-background relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base Gradient */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background"
        />
        
        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="content-wrapper relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="text-heading-1 font-bold tracking-tight">
              Transform Your{' '}
              <span className="bg-gradient-to-r from-primary via-primary to-primary bg-clip-text text-transparent">
                Digital Presence
              </span>
            </h1>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              From YouTube Growth to SEO Success - We Handle It All
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary text-inverted hover:bg-primary-hover transition-colors text-body-lg font-medium shadow-lg hover:shadow-xl"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-border text-foreground hover:border-primary hover:text-primary transition-colors text-body-lg font-medium bg-background/80 backdrop-blur-sm"
            >
              View Portfolio
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 pt-8"
          >
            <div className="text-center">
              <div className="text-heading-3 font-bold text-foreground">200%</div>
              <div className="text-muted-foreground">Average Growth</div>
            </div>
            <div className="text-center">
              <div className="text-heading-3 font-bold text-foreground">50+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 