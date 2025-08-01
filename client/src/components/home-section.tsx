import { Button } from "@/components/ui/button";
import { Heart, Users } from "lucide-react";

export default function HomeSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="pt-20 bg-gradient-to-br from-neutral to-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6">
          ॐ<span className="text-primary"> श्री गणेशाय नमः</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            
          </p>
        </div>

        {/* Banner Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="/assets/invitation-card.jpg"
            alt="Ganesh Chaturthi Festival Invitation"
            className="w-full h-auto object-contain bg-gradient-to-br from-amber-50 to-orange-50"
          />
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-12">
          <Button
            onClick={() => scrollToSection("donation")}
            className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors"
            size="lg"
          >
            <Heart className="w-5 h-5 mr-2" />
            Make a Donation
          </Button>
          <Button
            onClick={() => scrollToSection("community")}
            className="bg-secondary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary/90 transition-colors"
            size="lg"
          >
            <Users className="w-5 h-5 mr-2" />
            Join Our Community
          </Button>
        </div>
      </div>
    </section>
  );
}
