import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DonationSection() {
  return (
    <section id="donation" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Support Our Celebration</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your generous donations help us organize community events
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* QR Code and Alternative Payment Methods */}
          <div className="space-y-8 w-full col-span-2 md:col-span-1">
            <Card className="bg-neutral shadow-lg text-center">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-secondary">Quick Payment</CardTitle>
                <p className="text-gray-600">Scan QR code to donate instantly</p>
              </CardHeader>
              <CardContent>
                <div className="bg-white p-6 rounded-lg shadow-inner mx-auto max-w-xs">
                  <div className="w-48 h-48 rounded-lg mx-auto overflow-hidden">
                    <img
                      src="/assets/qr-code.png"
                      alt="QR Code for Donations"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  UPI ID:8260978544@ibl
                </p>
              </CardContent>
            </Card>

            {/* Google Form for Verification */}
            <Card className="bg-neutral shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-secondary">Donation Verification</CardTitle>
                <p className="text-gray-600">
                  After making your donation, please fill out our verification form to receive a receipt.
                </p>
              </CardHeader>
              <CardContent>
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="text-center text-gray-500">
                    <ExternalLink className="w-8 h-8 mb-3 mx-auto" />
                    <p className="mb-4">Google Form will be embedded here</p>
                    <Button
                      variant="default"
                      className="bg-primary text-white hover:bg-primary/90"
                      onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSfxd1VQCrk_Lv8GhwqNNAt_yzF_r3ByEvGeXNtVa1yDnsSQlg/viewform?usp=dialog", "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Open Verification Form
                    </Button>
                    <div className="mt-6 pt-6 border-t border-gray-200 text-sm">
                      <p className="text-gray-400">
                        Form includes: Personal Information, Contact Details,
                        Payment Confirmation, and Receipt Request
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
