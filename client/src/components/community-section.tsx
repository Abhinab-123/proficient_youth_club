import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, File } from "lucide-react";

export default function CommunitySection() {
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

        {/* Google Form Embed */}
        <div className="max-w-3xl mx-auto">
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
                      and Background Information
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
