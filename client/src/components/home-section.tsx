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
            Welcome to <span className="text-primary">Ganesh Club</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join our vibrant community dedicated to celebrating culture, fostering spiritual growth,
            and bringing people together through the divine blessings of Lord Ganesh.
          </p>
        </div>

        {/* Banner Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=800"
            alt="Ganesh temple interior with beautiful decorations"
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Celebrating Traditions</h2>
              <p className="text-lg opacity-90">Building community through faith and fellowship</p>
            </div>
          </div>
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
