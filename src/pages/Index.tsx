import { Link } from "react-router-dom";
import { Calendar, Camera, Zap, Instagram, MessageCircle, Mail, Phone, Video, Users, Compass, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  const howItWorks = [
    {
      icon: Calendar,
      title: "You book a slot",
      description: "Choose WhatsApp, Instagram, Gmail, or phone to connect with us.",
    },
    {
      icon: Camera,
      title: "We come to your location",
      description: "Our reelmaker shoots your content in your vibe, on the spot.",
    },
    {
      icon: Zap,
      title: "Reel in minutes",
      description: "Edited and delivered quickly – ready to post!",
    },
  ];

  const shootTypes = [
    {
      icon: Users,
      title: "Events & College Fests",
      description: "Capture the energy of your event with cinematic reels that stand out.",
    },
    {
      icon: Camera,
      title: "Personal Photoshoots",
      description: "Professional content for your personal brand or portfolio.",
    },
    {
      icon: TrendingUp,
      title: "Instagram Reels & Trends",
      description: "Stay on-trend with viral-worthy content shot and edited perfectly.",
    },
    {
      icon: Compass,
      title: "Travel Vlogs",
      description: "Document your adventures with stunning travel content.",
    },
    {
      icon: Video,
      title: "Creator Companion Days",
      description: "A full day of content creation for creators and influencers.",
    },
  ];

  const whyUs = [
    "On-spot shooting, no studio needed",
    "Fast delivery – reels in minutes",
    "Chill, student-friendly team",
    "Prices discussed directly on chat (no confusing packages)",
  ];

  const contactMethods = [
    {
      icon: Instagram,
      label: "Instagram",
      value: "@vibexvisuals.co",
      link: "https://instagram.com/vibexvisuals.co",
      color: "bg-pink-600 hover:bg-pink-700",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+91 9398526257",
      link: "https://wa.me/919398526257?text=Hi%20Vibe%20X%20Visuals%2C%20I%20want%20to%20book%20a%20reel%20shoot.",
      color: "bg-green-600 hover:bg-green-700",
    },
    {
      icon: Mail,
      label: "Gmail",
      value: "vibexvisualsco9999@gmail.com",
      link: "mailto:vibexvisualsco9999@gmail.com?subject=Reel%20Shoot%20Booking%20-%20Vibe%20X%20Visuals",
      color: "bg-red-600 hover:bg-red-700",
    },
    {
      icon: Phone,
      label: "Phone Call",
      value: "+91 9398526257",
      link: "tel:+919398526257",
      color: "bg-blue-600 hover:bg-blue-700",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-hero pt-20">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-black mb-6 text-glow-purple">
                Reels that match your{" "}
                <span className="text-primary text-glow-yellow">vibe.</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Our reelmaker comes to your location, shoots your content, and delivers 
                cinematic reels in minutes.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <Zap className="text-primary" size={24} />
                  <span className="text-lg">On-spot shooting</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="text-primary" size={24} />
                  <span className="text-lg">Super-fast delivery</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="text-primary" size={24} />
                  <span className="text-lg">Perfect for events, personal shoots & creators</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/booking">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded-xl font-bold shadow-yellow">
                    Book Your Reel
                  </Button>
                </Link>
                <a href="#contact">
                  <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6 rounded-xl font-bold">
                    View Contact Options
                  </Button>
                </a>
              </div>
            </div>

            {/* Right: Mock Phone Frame */}
            <div className="animate-fade-in-up hidden lg:block">
              <div className="relative">
                <div className="w-full max-w-md mx-auto bg-gradient-card rounded-3xl p-8 card-glow animate-glow-pulse">
                  <div className="aspect-[9/16] bg-background rounded-2xl flex items-center justify-center border-2 border-primary/30">
                    <div className="text-center p-8">
                      <Video className="text-primary mx-auto mb-4" size={64} />
                      <p className="text-2xl font-bold text-glow-yellow">Your Reel Here</p>
                      <p className="text-muted-foreground mt-2">Cinematic. Fast. Professional.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-glow-purple">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <div
                key={index}
                className="text-center p-8 bg-card rounded-2xl card-glow hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-yellow">
                  <step.icon className="text-primary-foreground" size={36} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground text-lg">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Shoot */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-glow-purple">
            What We Shoot
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shootTypes.map((type, index) => (
              <div
                key={index}
                className="bg-background p-6 rounded-2xl border border-border hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <type.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">{type.title}</h3>
                <p className="text-muted-foreground">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Vibe X Visuals */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-glow-purple">
            Why Vibe X Visuals?
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            We're not your typical video production company. We're a team of young creators 
            who understand what content needs to stand out in 2025.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {whyUs.map((reason, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border-l-4 border-primary card-glow animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <p className="text-lg font-medium">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-glow-purple">
            Let's Connect
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Reach out through any platform you prefer. Prices and final details will be 
            discussed directly in chat.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${method.color} p-6 rounded-2xl text-white hover-lift transition-all`}>
                  <method.icon className="mx-auto mb-4" size={40} />
                  <h3 className="font-bold text-lg mb-2 text-center">{method.label}</h3>
                  <p className="text-sm text-center opacity-90">{method.value}</p>
                </div>
              </a>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-12 text-lg">
            Prices and final details will be discussed directly in chat.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
