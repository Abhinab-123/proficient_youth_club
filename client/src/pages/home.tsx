import Navigation from "@/components/navigation";
import HomeSection from "@/components/home-section";
import DonationSection from "@/components/donation-section";
import DirectionsSection from "@/components/directions-section";
import CommunitySection from "@/components/community-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HomeSection />
        <DonationSection />
        <DirectionsSection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
}
