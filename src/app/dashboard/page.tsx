import React from "react";
import { Header } from "@/components/organism/header/Header";
import { LandingSection } from "@/app/dashboard/components/LandingSection";
import { AnimationSection } from "@/app/dashboard/components/AnimationSection";
import { Contact } from "@/app/dashboard/components/Contact";
import { Footer } from "@/components/organism/footer/Footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <LandingSection />
      <AnimationSection />
      <Contact />
      <Footer />
    </div>
  );
}
