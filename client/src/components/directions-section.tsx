import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";

export default function DirectionsSection() {
  const handleGetDirections = () => {
    window.open("https://maps.app.goo.gl/fYmm58vdZYZVMVXM9", "_blank");
  };

  return (
    <section id="directions" className="py-16 bg-neutral">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Visit Our Location</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find us easily with our interactive map and detailed directions.
            We're located in the heart of the community.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Location Details */}
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-secondary">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-dark">Address</p>
                  <p className="text-gray-600 text-sm">
                    Sector-5 Lane<br />
                    Backside of Sector-3 PHD Office<br />
                    Niladri Vihar , C.S. Pur , BBSR

                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-dark">Phone</p>
                  <p className="text-gray-600 text-sm">+91 8260978544</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-dark">Email</p>
                  <p className="text-gray-600 text-sm"></p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-dark">Operating Hours</p>
                  <p className="text-gray-600 text-sm">
                  27th aug 2025<br />
                   wed : 12pm - 2pm
                  </p>
                </div>
              </div>

              <Button
                onClick={handleGetDirections}
                className="w-full mt-6 bg-secondary text-white hover:bg-secondary/90"
              >
                <Navigation className="w-4 h-4 mr-2" />
                Get Directions
              </Button>
            </CardContent>
          </Card>

          {/* Temple Photo */}
          <div className="md:col-span-2 bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-96">
              <img
                src="/assets/ganesh-temple.jpg"
                alt="Ganesh Temple Decoration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
