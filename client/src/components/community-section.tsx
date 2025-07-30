import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, HandHeart, GraduationCap, Users, ExternalLink, File } from "lucide-react";

export default function CommunitySection() {
  const benefits = [
    {
      icon: Calendar,
      title: "Regular Events",
      description: "Participate in festivals, cultural programs, and spiritual gatherings.",
    },
    {
      icon: HandHeart,
      title: "Community Service",
      description: "Join our charitable initiatives and help those in need.",
    },
    {
      icon: GraduationCap,
      title: "Learning Opportunities",
      description: "Attend workshops, spiritual discourses, and cultural classes.",
    },
    {
      icon: Users,
      title: "Networking",
      description: "Connect with like-minded individuals and build lasting friendships.",
    },
  ];

  const membershipTiers = [
    {
      name: "Regular Member",
      description: "Access to all events and activities",
      price: "₹500/year",
      borderColor: "border-primary",
    },
    {
      name: "Premium Member",
      description: "Priority booking and special privileges",
      price: "₹1000/year",
      borderColor: "border-accent",
    },
    {
      name: "Lifetime Member",
      description: "One-time payment with lifetime benefits",
      price: "₹10,000",
      borderColor: "border-secondary",
    },
  ];

  const handleOpenRegistrationForm = () => {
    window.open("https://forms.google.com", "_blank");
  };

  return (
    <section id="community" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Join Our Community</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Become part of our vibrant community and participate in cultural events,
            spiritual activities, and charitable initiatives throughout the year.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Community Benefits */}
          <div className="space-y-8">
            <Card className="bg-neutral shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-secondary">Why Join Us?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-dark mb-2">{benefit.title}</h4>
                        <p className="text-gray-600 text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Membership Tiers */}
            <Card className="bg-neutral shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-secondary">Membership Options</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {membershipTiers.map((tier, index) => (
                  <div
                    key={index}
                    className={`bg-white p-4 rounded-lg border-l-4 ${tier.borderColor}`}
                  >
                    <h4 className="font-semibold text-dark">{tier.name}</h4>
                    <p className="text-gray-600 text-sm mb-1">{tier.description}</p>
                    <p className="font-semibold text-primary">{tier.price}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Google Form Embed */}
          <Card className="bg-neutral shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-secondary">Registration Form</CardTitle>
              <p className="text-gray-600">
                Fill out the form below to join our community. We'll get back to you within 24 hours.
              </p>
            </CardHeader>
            <CardContent>
              <div className="bg-white rounded-lg overflow-hidden shadow-inner min-h-96">
                <div className="p-8 text-center text-gray-500">
                  <File className="w-16 h-16 mb-4 mx-auto" />
                  <h4 className="text-lg font-semibold mb-3">Google Form Integration</h4>
                  <p className="mb-6">The community registration form will be embedded here</p>

                  {/* Fallback link to external form */}
                  <Button
                    onClick={handleOpenRegistrationForm}
                    className="bg-primary text-white hover:bg-primary/90"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Open Registration Form
                  </Button>

                  <div className="mt-6 pt-6 border-t border-gray-200 text-sm">
                    <p className="text-gray-400">
                      Form includes: Personal Information, Contact Details,
                      Membership Preferences, and Background Information
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
