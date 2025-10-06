import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Handshake, ArrowRight, TrendingUp, Users, Globe, Star } from 'lucide-react';

const SponsorsAds = () => {
  const sponsors = [
    {
      name: 'HDFC Bank',
      logo: 'https://logos-world.net/wp-content/uploads/2020/11/HDFC-Bank-Logo.png',
      category: 'Banking Partner',
      partnership: 'Payment Solutions'
    },
    {
      name: 'Tata Motors',
      logo: 'https://companieslogo.com/img/orig/TATAMOTORS.NS-f57bcb33.png',
      category: 'Fleet Partner',
      partnership: 'Vehicle Supply'
    },
    {
      name: 'Reliance',
      logo: 'https://logos-world.net/wp-content/uploads/2020/06/Reliance-Industries-Logo.png',
      category: 'Fuel Partner',
      partnership: 'Fuel & Energy'
    },
    {
      name: 'PhonePe',
      logo: 'https://logos-world.net/wp-content/uploads/2020/11/PhonePe-Logo.png',
      category: 'Payment Partner',
      partnership: 'Digital Payments'
    },
    {
      name: 'Microsoft',
      logo: 'https://logos-world.net/wp-content/uploads/2020/09/Microsoft-Logo.png',
      category: 'Technology Partner',
      partnership: 'Cloud Infrastructure'
    },
    {
      name: 'Google',
      logo: 'https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png',
      category: 'Maps Partner',
      partnership: 'Navigation & Maps'
    }
  ];

  const partnerBenefits = [
    {
      icon: Users,
      title: 'Massive Reach',
      description: '10M+ monthly active users across India',
      metric: '10M+'
    },
    {
      icon: Globe,
      title: 'Pan-India Network',
      description: 'Present in 650+ cities and towns',
      metric: '650+'
    },
    {
      icon: TrendingUp,
      title: 'Growing Market',
      description: '40% year-over-year growth',
      metric: '40%'
    },
    {
      icon: Star,
      title: 'Trust & Quality',
      description: '4.7 average customer rating',
      metric: '4.7★'
    }
  ];

  const partnershipTypes = [
    {
      title: 'Brand Sponsorship',
      description: 'Feature your brand across our platform and vehicles',
      features: ['App banner placements', 'Vehicle branding', 'Event sponsorships', 'Co-branded campaigns']
    },
    {
      title: 'Technology Integration',
      description: 'Integrate your services with our platform',
      features: ['API partnerships', 'White-label solutions', 'Data analytics', 'Custom integrations']
    },
    {
      title: 'Corporate Partnership',
      description: 'Strategic business partnerships and collaborations',
      features: ['Fleet partnerships', 'Corporate accounts', 'B2B solutions', 'Bulk services']
    }
  ];

  return (
    <section className="py-section bg-gradient-subtle">
      <div className="container-width">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Handshake className="w-8 h-8 text-primary" />
            <Badge variant="outline" className="text-sm px-3 py-1">
              Strategic Partners
            </Badge>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Sponsors & Partners
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading brands and powered by strategic partnerships
          </p>
        </div>

        {/* Partner Logos */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Our Trusted Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {sponsors.map((sponsor, index) => (
              <Card key={index} className="group hover-lift border-2 hover:border-primary/20 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="h-12 flex items-center justify-center mb-3">
                    <img 
                      src={sponsor.logo} 
                      alt={sponsor.name}
                      className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <h4 className="font-semibold text-sm mb-1">{sponsor.name}</h4>
                  <p className="text-xs text-muted-foreground mb-1">{sponsor.category}</p>
                  <p className="text-xs text-primary font-medium">{sponsor.partnership}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Partner Benefits */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Why Partner With TransRentals?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="text-center hover-lift">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">{benefit.metric}</div>
                    <h4 className="font-semibold mb-2">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Partnership Types */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-center mb-8">Partnership Opportunities</h3>
          <div className="grid lg:grid-cols-3 gap-6">
            {partnershipTypes.map((type, index) => (
              <Card key={index} className="hover-lift border-2 hover:border-primary/20 transition-all duration-300">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-3">{type.title}</h4>
                  <p className="text-muted-foreground mb-4">{type.description}</p>
                  <div className="space-y-2">
                    {type.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-card border-2 border-primary/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4">
              Ready to Partner With TransRentals?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join our growing network of partners and reach millions of customers across India. 
              Let's create value together and drive the future of mobility.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2">
                <Handshake className="w-5 h-5" />
                Partner With Us
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                Advertise With TransRentals
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
            
            <div className="mt-6 text-sm text-muted-foreground">
              For partnership inquiries: partners@transrentals.com | +91-9999-888-777
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SponsorsAds;