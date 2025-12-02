import { useState } from "react";
import { Instagram, MessageCircle, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

type ContactMethod = "whatsapp" | "instagram" | "gmail" | "phone";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    dateTime: "",
    shootType: "",
    notes: "",
  });
  const [selectedMethod, setSelectedMethod] = useState<ContactMethod | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const shootTypes = [
    "Event / Fest",
    "Personal Reel",
    "Group Reel",
    "Travel Vlog",
    "Brand / Business",
    "Other",
  ];

  const contactMethods = [
    { id: "whatsapp" as ContactMethod, icon: MessageCircle, label: "WhatsApp", color: "bg-green-600" },
    { id: "instagram" as ContactMethod, icon: Instagram, label: "Instagram", color: "bg-pink-600" },
    { id: "gmail" as ContactMethod, icon: Mail, label: "Gmail", color: "bg-red-600" },
    { id: "phone" as ContactMethod, icon: Phone, label: "Phone Call", color: "bg-blue-600" },
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.location.trim()) newErrors.location = "Location is required";
    if (!formData.dateTime.trim()) newErrors.dateTime = "Preferred date & time is required";
    if (!formData.shootType) newErrors.shootType = "Please select a shoot type";
    if (!selectedMethod) newErrors.method = "Please select a contact method";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const buildMessage = () => {
    return `Hi Vibe X Visuals!
I want to book a reel shoot.

Name: ${formData.name}
Location: ${formData.location}
Preferred Date/Time: ${formData.dateTime}
Shoot Type: ${formData.shootType}
${formData.notes ? `Extra Notes: ${formData.notes}` : ""}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    const message = buildMessage();
    const encodedMessage = encodeURIComponent(message);

    switch (selectedMethod) {
      case "whatsapp":
        window.open(`https://wa.me/919398526257?text=${encodedMessage}`, "_blank");
        break;

      case "instagram":
        navigator.clipboard.writeText(message);
        window.open("https://instagram.com/vibexvisuals.co", "_blank");
        toast({
          title: "Message copied!",
          description: "Paste it into your Instagram DM to us.",
        });
        break;

      case "gmail":
        window.open(
          `mailto:vibexvisualsco9999@gmail.com?subject=${encodeURIComponent(
            "Reel Shoot Booking"
          )}&body=${encodedMessage}`,
          "_blank"
        );
        break;

      case "phone":
        window.open("tel:+919398526257", "_blank");
        toast({
          title: "Your booking details:",
          description: message,
        });
        break;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-glow-purple">
              Book Your Shoot
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fill these quick details and choose where you want to book – Instagram, WhatsApp, 
              Gmail, or phone call. We'll discuss prices and final details in chat.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 card-glow animate-fade-in-up">
            {/* Name */}
            <div className="mb-6">
              <Label htmlFor="name" className="text-foreground text-lg mb-2 block">
                Name *
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-background border-border text-foreground"
                placeholder="Your name"
              />
              {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
            </div>

            {/* Location */}
            <div className="mb-6">
              <Label htmlFor="location" className="text-foreground text-lg mb-2 block">
                Location / College / Area *
              </Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="bg-background border-border text-foreground"
                placeholder="Where should we come?"
              />
              {errors.location && <p className="text-destructive text-sm mt-1">{errors.location}</p>}
            </div>

            {/* Date & Time */}
            <div className="mb-6">
              <Label htmlFor="dateTime" className="text-foreground text-lg mb-2 block">
                Preferred Date & Time *
              </Label>
              <Input
                id="dateTime"
                value={formData.dateTime}
                onChange={(e) => setFormData({ ...formData, dateTime: e.target.value })}
                className="bg-background border-border text-foreground"
                placeholder="e.g., March 15, 2024 at 3 PM"
              />
              {errors.dateTime && <p className="text-destructive text-sm mt-1">{errors.dateTime}</p>}
            </div>

            {/* Shoot Type */}
            <div className="mb-6">
              <Label htmlFor="shootType" className="text-foreground text-lg mb-2 block">
                Type of Shoot *
              </Label>
              <Select value={formData.shootType} onValueChange={(value) => setFormData({ ...formData, shootType: value })}>
                <SelectTrigger className="bg-background border-border text-foreground">
                  <SelectValue placeholder="Select shoot type" />
                </SelectTrigger>
                <SelectContent>
                  {shootTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.shootType && <p className="text-destructive text-sm mt-1">{errors.shootType}</p>}
            </div>

            {/* Extra Notes */}
            <div className="mb-8">
              <Label htmlFor="notes" className="text-foreground text-lg mb-2 block">
                Extra Notes (Optional)
              </Label>
              <Textarea
                id="notes"
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="bg-background border-border text-foreground min-h-[100px]"
                placeholder="Any special requests or details..."
              />
            </div>

            {/* Contact Method Selection */}
            <div className="mb-8">
              <Label className="text-foreground text-lg mb-4 block">
                How do you want to book? *
              </Label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {contactMethods.map(({ id, icon: Icon, label, color }) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setSelectedMethod(id)}
                    className={`p-4 rounded-xl border-2 transition-all hover-lift ${
                      selectedMethod === id
                        ? "border-primary bg-primary/10"
                        : "border-border bg-card"
                    }`}
                  >
                    <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center mx-auto mb-2`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    <p className="text-sm font-medium text-foreground">{label}</p>
                  </button>
                ))}
              </div>
              {errors.method && <p className="text-destructive text-sm mt-2">{errors.method}</p>}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-6 rounded-xl font-bold shadow-yellow"
            >
              Confirm & Continue
            </Button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Booking;
