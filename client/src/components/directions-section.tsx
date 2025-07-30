import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";

export default function DirectionsSection() {
  const handleGetDirections = () => {
    const address = "123 Temple Street, Community Area, City, State 12345";
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, "_blank");
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
                    123 Temple Street<br />
                    Community Area<br />
                    City, State 12345
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-dark">Phone</p>
                  <p className="text-gray-600 text-sm">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-dark">Email</p>
                  <p className="text-gray-600 text-sm">info@ganeshclub.org</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-dark">Operating Hours</p>
                  <p className="text-gray-600 text-sm">
                    Mon-Fri: 6:00 AM - 9:00 PM<br />
                    Sat-Sun: 5:00 AM - 10:00 PM
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

          {/* Google Maps Embed */}
          <div className="md:col-span-2 bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799160891!2d-74.25987368715491!3d40.697670063539654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1647834806560!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="Ganesh Club Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
