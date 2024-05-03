import Credibility from "@/components/Credibility/Credibility";
import HeroSection from "@/components/Hero/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
     <HeroSection />
     <Credibility />
    </main>
  );
}
