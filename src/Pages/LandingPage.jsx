import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import Feature2 from "../components/Feature2";
import Benefits from "../components/Benifits";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <div className="flex flex-col bg-white min-h-screen overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>

      {/* Feature Section */}
      <section id="features" className="mt-8 sm:mt-12 lg:mt-16">
        <Feature />
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="mt-8 sm:mt-12 lg:mt-16">
        <Feature2 />
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="mt-8 sm:mt-12 lg:mt-16">
        <Benefits />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="mt-8 sm:mt-12 lg:mt-16">
        <Testimonials />
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="mt-8 sm:mt-12 lg:mt-16">
        <Pricing />
      </section>

      {/* FAQ Section */}
      <section id="faq" className="mt-8 sm:mt-12 lg:mt-16">
        <FAQ />
      </section>

      {/* CTA Section */}
      <section className="mt-8 sm:mt-12 lg:mt-16">
        <CTA />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
