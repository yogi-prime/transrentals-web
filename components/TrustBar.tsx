import React from 'react';
import { Shield, Award, Users, Star, CheckCircle, Globe } from 'lucide-react';

const TrustBar = () => {
  const trustItems = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "ISO 27001 Certified",
      subtitle: "Data Security"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "NASSCOM Member",
      subtitle: "Industry Recognition"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "All Vendors KYC Verified",
      subtitle: "100% Compliance"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "4.8/5 Rating",
      subtitle: "50K+ Reviews"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Pan-India Coverage",
      subtitle: "50+ Cities"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "2M+ Happy Customers",
      subtitle: "Trusted by Millions"
    }
  ];

  const mediaLogos = [
    { name: "Economic Times", logo: "ET" },
    { name: "Times of India", logo: "TOI" },
    { name: "Hindu Business Line", logo: "BL" },
    { name: "Business Standard", logo: "BS" },
    { name: "Mint", logo: "MINT" },
    { name: "Forbes India", logo: "FI" }
  ];

  return (
    <div className="bg-gradient-card border-y border-border/30">
      <div className="container mx-auto px-4 py-8">
        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
          {trustItems.map((item, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 mb-3">
                {item.icon}
              </div>
              <div className="space-y-1">
                <div className="text-sm font-semibold text-foreground">
                  {item.title}
                </div>
                <div className="text-xs text-muted-foreground">
                  {item.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Media Mentions */}
        <div className="border-t border-border/30 pt-6">
          <div className="text-center mb-4">
            <p className="text-sm text-muted-foreground">Featured In</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {mediaLogos.map((media, index) => (
              <div key={index} className="group">
                <div className="flex items-center justify-center w-16 h-12 bg-muted/50 rounded-lg border border-border/30 group-hover:border-primary/30 transition-all duration-300">
                  <span className="text-xs font-bold text-muted-foreground group-hover:text-primary">
                    {media.logo}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Insurance & Safety */}
        <div className="mt-6 pt-6 border-t border-border/30">
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              <span>Comprehensive Insurance</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success" />
              <span>Background Verified Drivers</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-accent" />
              <span>24/7 Customer Support</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-warning" />
              <span>Quality Assured Vehicles</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBar;