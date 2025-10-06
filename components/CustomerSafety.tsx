import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, MapPin, Phone, Users, Truck, Clock } from 'lucide-react';

const CustomerSafety = () => {
  const safetyFeatures = [
    {
      icon: Users,
      title: 'Driver KYC',
      description: 'All drivers undergo thorough background verification including police clearance and document validation.',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: MapPin,
      title: 'Live Tracking',
      description: 'Real-time GPS tracking for all rides with location sharing to your trusted contacts.',
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    },
    {
      icon: Phone,
      title: 'SOS Emergency',
      description: 'One-tap emergency button connects you to local authorities and our support team instantly.',
      color: 'text-destructive',
      bgColor: 'bg-destructive/10'
    },
    {
      icon: Shield,
      title: 'Insurance Coverage',
      description: 'Comprehensive insurance protection for passengers and luggage during all rides.',
      color: 'text-success',
      bgColor: 'bg-success/10'
    },
    {
      icon: Truck,
      title: 'Sanitized Vehicles',
      description: 'Regular sanitization and cleanliness checks to ensure hygienic travel experience.',
      color: 'text-warning',
      bgColor: 'bg-warning/10'
    },
    {
      icon: Clock,
      title: '24×7 Support',
      description: 'Round-the-clock customer support with instant response for any safety concerns.',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    }
  ];

  const trustPoints = [
    '100% verified drivers and vendors',
    'End-to-end journey monitoring',
    'Emergency response protocol',
    'Insurance claim assistance',
    'Safety feedback system',
    'Secure payment processing'
  ];

  return (
    <section className="py-section bg-background">
      <div className="container-width">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="w-8 h-8 text-primary" />
            <Badge variant="outline" className="text-sm px-3 py-1">
              Safety First
            </Badge>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Customer Benefits & Safety
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your safety is our priority. Travel with confidence using our comprehensive safety features.
          </p>
        </div>

        {/* Safety Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {safetyFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="group hover-lift border-2 hover:border-primary/20 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Trust Points */}
        <Card className="bg-gradient-card border-2 border-primary/20">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-foreground mb-3">
                Why TransRentals is Trusted
              </h3>
              <p className="text-muted-foreground">
                Built with safety and trust as our foundation
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {trustPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-background/50 rounded-lg">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-sm font-medium">{point}</span>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <div className="inline-flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-success" />
                  <span>ISO 27001 Certified</span>
                </div>
                <div className="w-px h-4 bg-border"></div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-success" />
                  <span>10M+ Safe Trips</span>
                </div>
                <div className="w-px h-4 bg-border"></div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-success" />
                  <span>99.8% Uptime</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CustomerSafety;