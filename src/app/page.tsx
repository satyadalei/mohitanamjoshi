import Clients from "@/components/hero/Clients";
import HeroSection from "@/components/HeroSection";
import BasicLayout from "@/components/layouts/BasicLayout";
import Services from "@/components/Services";
export default function Home() {
  return (
    <div>
      {/* <HeroSection /> */}
      <BasicLayout>
        <HeroSection />
        <span className="hidden relative md:flex justify-center">
          <div
            className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
          ></div>

          <span className="relative z-10 bg-white px-6"></span>
        </span>
        <Services />
        <Clients />
      </BasicLayout>
    </div>
  );
}
