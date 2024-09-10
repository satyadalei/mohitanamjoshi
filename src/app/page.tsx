import HeroSection from "@/components/HeroSection";
import BasicLayout from "@/components/layouts/BasicLayout";
export default function Home() {
  return (
    <div>
      {/* <HeroSection /> */}
      <BasicLayout>
        <HeroSection />
      </BasicLayout>
    </div>
  );
}
