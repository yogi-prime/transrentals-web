import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Car, 
  MapPin, 
  Plane, 
  Heart, 
  Building2, 
  Package, 
  Wrench,
  ArrowRight 
} from 'lucide-react';

const ScenarioCards = () => {
  const scenarios = [
    {
      id: 'daily-commute',
      title: 'Daily Commute',
      description: 'Reliable rides for your everyday office travel',
      icon: Car,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      borderColor: 'border-primary/20',
      features: ['Fixed routes', 'Monthly packages', 'Peak hour availability'],
      searchParams: 'service=taxi&type=daily',
      popular: true
    },
    {
      id: 'outstation',
      title: 'Outstation Roundtrip',
      description: 'Comfortable long-distance travel with driver',
      icon: MapPin,
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      borderColor: 'border-accent/20',
      features: ['Multi-day packages', 'Experienced drivers', 'Flexible itinerary'],
      searchParams: 'service=car-rental&type=outstation',
      popular: false
    },
    {
      id: 'airport',
      title: 'Airport Transfer',
      description: 'Punctual pickups and drops for flights',
      icon: Plane,
      color: 'text-success',
      bgColor: 'bg-success/10',
      borderColor: 'border-success/20',
      features: ['Flight tracking', 'Meet & greet', '24×7 availability'],
      searchParams: 'service=taxi&type=airport',
      popular: true
    },
    {
      id: 'weddings',
      title: 'Weddings & Events',
      description: 'Premium vehicles for special occasions',
      icon: Heart,
      color: 'text-warning',
      bgColor: 'bg-warning/10',
      borderColor: 'border-warning/20',
      features: ['Decorated cars', 'Luxury fleet', 'Event coordination'],
      searchParams: 'service=luxury&type=wedding',
      popular: false
    },
    {
      id: 'corporate',
      title: 'Corporate Mobility',
      description: 'Business travel solutions with billing',
      icon: Building2,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      borderColor: 'border-primary/20',
      features: ['Corporate billing', 'Employee transport', 'API integration'],
      searchParams: 'service=corporate&type=business',
      popular: false
    },
    {
      id: 'logistics',
      title: 'Logistics/Last-mile',
      description: 'Goods transportation and delivery services',
      icon: Package,
      color: 'text-destructive',
      bgColor: 'bg-destructive/10',
      borderColor: 'border-destructive/20',
      features: ['Load capacity', 'Delivery tracking', 'Packaging support'],
      searchParams: 'service=truck&type=delivery',
      popular: false
    },
    {
      id: 'equipment',
      title: 'Heavy Equipment',
      description: 'Industrial machinery and equipment rental',
      icon: Wrench,
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      borderColor: 'border-accent/20',
      features: ['Certified operators', 'Safety compliance', 'Maintenance included'],
      searchParams: 'service=equipment&type=heavy',
      popular: false
    }
  ];

  const handleScenarioClick = (searchParams: string) => {
    // In a real app, this would navigate to search results with pre-filled filters
    console.log('Navigate to search with params:', searchParams);
  };

  return (
    <section className="py-section bg-gradient-subtle">
      <div className="container-width">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Car className="w-8 h-8 text-primary" />
            <Badge variant="outline" className="text-sm px-3 py-1">
              Use Cases
            </Badge>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Perfect for Every Scenario
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From daily commutes to special events, find the right vehicle for any occasion
          </p>
        </div>

        {/* Scenarios Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {scenarios.map((scenario) => {
            const IconComponent = scenario.icon;
            return (
              <Card 
                key={scenario.id}
                className={`group cursor-pointer hover-lift border-2 ${scenario.borderColor} ${scenario.bgColor} hover:shadow-premium transition-all duration-300`}
                onClick={() => handleScenarioClick(scenario.searchParams)}
              >
                <CardContent className="p-6 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl ${scenario.bgColor} border ${scenario.borderColor} group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`w-6 h-6 ${scenario.color}`} />
                    </div>
                    {scenario.popular && (
                      <Badge variant="outline" className="text-xs">
                        Popular
                      </Badge>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 mb-6">
                    <h3 className="text-lg font-semibold mb-2">{scenario.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {scenario.description}
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-2">
                      {scenario.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-xs text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Button 
                    variant="outline" 
                    className={`w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleScenarioClick(scenario.searchParams);
                    }}
                  >
                    <span>Explore Options</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Can't find your specific use case?
          </p>
          <Button variant="outline" className="gap-2">
            <Building2 className="w-5 h-5" />
            Contact for Custom Solutions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ScenarioCards;