import Credibility from "@/components/Credibility/Credibility";
import HeroSection from "@/components/Hero/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
     <HeroSection />
     <Credibility />
    </main>
  );
}
