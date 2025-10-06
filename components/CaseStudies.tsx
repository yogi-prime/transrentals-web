import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building2, Heart, Calendar, TrendingUp, Users, Clock, ArrowRight, Quote } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'Tech Corp Employee Transport',
      category: 'Corporate',
      client: 'TechSphere Solutions',
      challenge: 'Managing daily transport for 500+ employees across 4 offices in Bangalore',
      solution: 'Deployed dedicated fleet with route optimization and corporate billing',
      results: {
        costSaving: '35%',
        onTimePerformance: '98.5%',
        employeeSatisfaction: '4.8/5',
        carbonReduction: '25%'
      },
      quote: 'TransRentals transformed our employee commute experience. The reliability and cost savings exceeded our expectations.',
      author: 'Priya Sharma, HR Director',
      icon: Building2,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      borderColor: 'border-primary/20'
    },
    {
      id: 2,
      title: 'Royal Wedding Fleet Management',
      category: 'Wedding',
      client: 'The Oberoi Udaivilas',
      challenge: 'Coordinating luxury transportation for 200+ guests over 3 days in Udaipur',
      solution: 'Premium fleet with decorated vehicles, dedicated coordinators, and real-time tracking',
      results: {
        guestSatisfaction: '100%',
        onTimeArrival: '99.2%',
        vehiclesDeployed: '45',
        seamlessEvents: '12'
      },
      quote: 'Flawless execution! Every guest was transported in luxury and comfort. Truly professional service.',
      author: 'Rajesh Khanna, Event Manager',
      icon: Heart,
      color: 'text-warning',
      bgColor: 'bg-warning/10',
      borderColor: 'border-warning/20'
    },
    {
      id: 3,
      title: 'Festival Logistics Operation',
      category: 'Events',
      client: 'Sunburn Music Festival',
      challenge: 'Moving 50,000+ attendees safely during peak festival hours in Goa',
      solution: 'Large-scale fleet deployment with shuttle services and crowd management',
      results: {
        attendeesMoved: '52,000',
        zerooIncidents: '100%',
        peakHourEfficiency: '94%',
        customerRating: '4.7/5'
      },
      quote: 'TransRentals handled the massive logistics challenge with precision. Outstanding crowd management.',
      author: 'Vikram Singh, Festival Director',
      icon: Calendar,
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      borderColor: 'border-accent/20'
    }
  ];

  const successMetrics = [
    { label: 'Enterprise Clients', value: '200+', growth: '+45%' },
    { label: 'Events Managed', value: '1,500+', growth: '+67%' },
    { label: 'Vehicles Deployed', value: '10K+', growth: '+38%' },
    { label: 'Customer Satisfaction', value: '4.8★', growth: '+12%' }
  ];

  return (
    <section className="py-section bg-gradient-subtle">
      <div className="container-width">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <TrendingUp className="w-8 h-8 text-primary" />
            <Badge variant="outline" className="text-sm px-3 py-1">
              Success Stories
            </Badge>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Case Studies & Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from real partnerships. See how we've helped businesses and events succeed.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {successMetrics.map((metric, index) => (
            <Card key={index} className="hover-lift text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                <div className="text-sm text-muted-foreground mb-2">{metric.label}</div>
                <div className="flex items-center justify-center gap-1 text-xs text-success">
                  <TrendingUp className="w-3 h-3" />
                  <span>{metric.growth}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Case Studies */}
        <div className="space-y-8">
          {caseStudies.map((study, index) => {
            const IconComponent = study.icon;
            return (
              <Card 
                key={study.id} 
                className={`${study.bgColor} ${study.borderColor} border-2 hover:shadow-premium transition-all duration-300`}
              >
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-6">
                        <div className={`p-3 rounded-xl ${study.bgColor} border ${study.borderColor}`}>
                          <IconComponent className={`w-6 h-6 ${study.color}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-2xl font-bold">{study.title}</h3>
                            <Badge variant="outline">
                              {study.category}
                            </Badge>
                          </div>
                          <p className="text-muted-foreground font-medium">{study.client}</p>
                        </div>
                      </div>

                      {/* Challenge & Solution */}
                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="font-semibold mb-2 text-destructive">Challenge</h4>
                          <p className="text-muted-foreground">{study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 text-success">Solution</h4>
                          <p className="text-muted-foreground">{study.solution}</p>
                        </div>
                      </div>

                      {/* Quote */}
                      <div className="bg-background/50 border border-primary/20 rounded-lg p-4">
                        <div className="flex gap-3">
                          <Quote className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <p className="italic text-foreground mb-2">"{study.quote}"</p>
                            <p className="text-sm text-muted-foreground font-medium">
                              — {study.author}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Results */}
                    <div>
                      <h4 className="font-semibold mb-4 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-success" />
                        Results Achieved
                      </h4>
                      <div className="space-y-4">
                        {Object.entries(study.results).map(([key, value]) => (
                          <div key={key} className="bg-background/50 rounded-lg p-4">
                            <div className="text-2xl font-bold text-primary mb-1">
                              {value}
                            </div>
                            <div className="text-sm text-muted-foreground capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Card className="bg-gradient-card border-2 border-primary/20 inline-block">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4">
                Ready to Create Your Success Story?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Join hundreds of satisfied clients who trust TransRentals for their transportation needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2">
                  <Building2 className="w-5 h-5" />
                  Get Enterprise Quote
                </Button>
                <Button variant="outline" size="lg" className="gap-2">
                  View More Case Studies
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;