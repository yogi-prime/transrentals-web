import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Store, 
  Building2, 
  Code, 
  Handshake, 
  ArrowRight, 
  Users, 
  TrendingUp,
  Globe,
  Zap
} from 'lucide-react';

const SecondaryCTAs = () => {
  const ctaCards = [
    {
      id: 'vendor',
      title: 'Become a Vendor',
      subtitle: 'Start earning with your vehicles',
      description: 'Join 5000+ verified vendors and grow your business with TransRentals. Easy onboarding, weekly payouts, and dedicated support.',
      icon: Store,
      color: 'text-primary',
      bgColor: 'bg-primary/5',
      borderColor: 'border-primary/20',
      stats: ['₹75k avg monthly earnings', 'Weekly payouts', '650+ cities'],
      buttonText: 'Join as Vendor',
      buttonIcon: ArrowRight,
      featured: true
    },
    {
      id: 'corporate',
      title: 'Corporate Solutions',
      subtitle: 'Enterprise mobility management',
      description: 'Streamline your business transportation with corporate accounts, bulk billing, and dedicated account management.',
      icon: Building2,
      color: 'text-accent',
      bgColor: 'bg-accent/5',
      borderColor: 'border-accent/20',
      stats: ['200+ enterprise clients', 'Custom billing', 'API integration'],
      buttonText: 'Get Enterprise Quote',
      buttonIcon: Users,
      featured: false
    },
    {
      id: 'api',
      title: 'Partner API/Integrations',
      subtitle: 'Integrate our services',
      description: 'Build with our robust APIs. White-label solutions, real-time booking, fleet management, and custom integrations.',
      icon: Code,
      color: 'text-success',
      bgColor: 'bg-success/5',
      borderColor: 'border-success/20',
      stats: ['RESTful APIs', 'Real-time sync', '99.9% uptime'],
      buttonText: 'View API Docs',
      buttonIcon: Code,
      featured: false
    },
    {
      id: 'franchise',
      title: 'Franchise Inquiry',
      subtitle: 'Start your own TransRentals',
      description: 'Expand TransRentals to your city. Get territory rights, operational support, marketing assistance, and proven business model.',
      icon: Handshake,
      color: 'text-warning',
      bgColor: 'bg-warning/5',
      borderColor: 'border-warning/20',
      stats: ['Territory rights', 'Marketing support', 'Proven model'],
      buttonText: 'Franchise Inquiry',
      buttonIcon: Globe,
      featured: false
    }
  ];

  const benefits = [
    { icon: TrendingUp, text: 'Proven business models' },
    { icon: Users, text: 'Dedicated support teams' },
    { icon: Globe, text: 'Pan-India opportunities' },
    { icon: Zap, text: 'Quick onboarding process' }
  ];

  return (
    <section className="py-section bg-background">
      <div className="container-width">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Building2 className="w-8 h-8 text-primary" />
            <Badge variant="outline" className="text-sm px-3 py-1">
              Business Opportunities
            </Badge>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Partner With TransRentals
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Multiple ways to grow your business and earn with India's leading vehicle rental platform
          </p>
        </div>

        {/* Benefits Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
                <IconComponent className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium">{benefit.text}</span>
              </div>
            );
          })}
        </div>

        {/* CTA Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {ctaCards.map((cta) => {
            const IconComponent = cta.icon;
            const ButtonIconComponent = cta.buttonIcon;
            
            return (
              <Card 
                key={cta.id}
                className={`group cursor-pointer hover-lift border-2 ${cta.borderColor} ${cta.bgColor} hover:shadow-premium transition-all duration-300 ${cta.featured ? 'lg:col-span-1 order-first' : ''}`}
              >
                <CardContent className="p-8">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`p-4 ${cta.bgColor} border-2 ${cta.borderColor} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`w-8 h-8 ${cta.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold">{cta.title}</h3>
                        {cta.featured && (
                          <Badge className="bg-primary text-primary-foreground">
                            Popular
                          </Badge>
                        )}
                      </div>
                      <p className="text-muted-foreground font-medium">{cta.subtitle}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {cta.description}
                  </p>

                  {/* Stats */}
                  <div className="space-y-2 mb-8">
                    {cta.stats.map((stat, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-sm font-medium">{stat}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button 
                    className={`w-full gap-3 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 ${cta.featured ? 'bg-primary text-primary-foreground' : ''}`}
                    variant={cta.featured ? 'default' : 'outline'}
                    size="lg"
                  >
                    <ButtonIconComponent className="w-5 h-5" />
                    {cta.buttonText}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom Contact */}
        <div className="mt-12 text-center">
          <Card className="bg-gradient-card border-2 border-primary/20 inline-block">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Need Custom Solutions?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Contact our business development team for tailored partnerships
              </p>
              <div className="text-sm text-muted-foreground">
                Business Development: <span className="font-medium text-primary">partnerships@transrentals.com</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SecondaryCTAs;