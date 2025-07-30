import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function DonationSection() {
  const [selectedAmount, setSelectedAmount] = useState<string>("");
  const [customAmount, setCustomAmount] = useState<string>("");
  const [donorInfo, setDonorInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const { toast } = useToast();

  const predefinedAmounts = ["500", "1000", "2000"];

  const handleAmountSelect = (amount: string) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    if (value) {
      setSelectedAmount("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = customAmount || selectedAmount;
    
    if (!amount || !donorInfo.name || !donorInfo.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields and select an amount.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Donation Form Submitted",
      description: `Thank you ${donorInfo.name}! Your donation of ₹${amount} is being processed.`,
    });
  };



  return (
    <section id="donation" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Support Our Mission</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your generous donations help us maintain our temple, organize community events,
            and support various charitable initiatives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Donation Form */}
          <Card className="bg-neutral shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-secondary">Make a Donation</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label className="block text-sm font-semibold text-dark mb-2">
                    Donation Amount
                  </Label>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {predefinedAmounts.map((amount) => (
                      <Button
                        key={amount}
                        type="button"
                        variant={selectedAmount === amount ? "default" : "outline"}
                        className={`px-4 py-3 font-semibold ${
                          selectedAmount === amount
                            ? "bg-primary text-white hover:bg-primary/90"
                            : "border-primary text-primary hover:bg-primary hover:text-white"
                        }`}
                        onClick={() => handleAmountSelect(amount)}
                      >
                        ₹{amount}
                      </Button>
                    ))}
                  </div>
                  <Input
                    type="number"
                    placeholder="Custom amount"
                    value={customAmount}
                    onChange={(e) => handleCustomAmountChange(e.target.value)}
                    className="w-full"
                  />
                </div>

                <div>
                  <Label htmlFor="name" className="block text-sm font-semibold text-dark mb-2">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={donorInfo.name}
                    onChange={(e) => setDonorInfo({ ...donorInfo, name: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="block text-sm font-semibold text-dark mb-2">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={donorInfo.email}
                    onChange={(e) => setDonorInfo({ ...donorInfo, email: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="block text-sm font-semibold text-dark mb-2">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={donorInfo.phone}
                    onChange={(e) => setDonorInfo({ ...donorInfo, phone: e.target.value })}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-white py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors"
                  size="lg"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Proceed to Payment
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* QR Code and Alternative Payment Methods */}
          <div className="space-y-8">
            <Card className="bg-neutral shadow-lg text-center">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-secondary">Quick Payment</CardTitle>
                <p className="text-gray-600">Scan QR code to donate instantly</p>
              </CardHeader>
              <CardContent>
                <div className="bg-white p-6 rounded-lg shadow-inner mx-auto max-w-xs">
                  <div className="w-48 h-48 rounded-lg mx-auto overflow-hidden">
                    <img
                      src="@assets/Screenshot 2025-07-30 172406_1753876474977.png"
                      alt="QR Code for Donations"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  UPI ID: ganeshclub@bank<br />
                  Account: XXXX-XXXX-XXXX
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
                      onClick={() => window.open("https://forms.google.com", "_blank")}
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
