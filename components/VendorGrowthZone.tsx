import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { TrendingUp, Users, Clock, Shield, CheckCircle, ArrowRight, Star, Calendar } from 'lucide-react';

const VendorGrowthZone = () => {
  const earnings = [
    { month: 'Jan', amount: 45000 },
    { month: 'Feb', amount: 52000 },
    { month: 'Mar', amount: 58000 },
    { month: 'Apr', amount: 65000 },
    { month: 'May', amount: 72000 },
    { month: 'Jun', amount: 78000 }
  ];

  const onboardingSteps = [
    {
      step: 1,
      title: 'Register & Verify',
      description: 'Complete KYC with documents',
      time: '15 mins',
      icon: Shield
    },
    {
      step: 2,
      title: 'Vehicle Details',
      description: 'Add your fleet information',
      time: '30 mins',
      icon: Users
    },
    {
      step: 3,
      title: 'Go Live',
      description: 'Start receiving bookings',
      time: 'Instant',
      icon: CheckCircle
    }
  ];

  const benefits = [
    { title: 'Pan-India Reach', value: '650+ cities', growth: '+15%' },
    { title: 'Average Monthly Earnings', value: '₹75,000', growth: '+23%' },
    { title: 'Booking Fulfillment', value: '94%', growth: '+8%' },
    { title: 'Customer Rating', value: '4.6★', growth: '+12%' }
  ];

  const kycItems = [
    'Driving License Verification',
    'Vehicle Registration (RC)',
    'Insurance Documents',
    'PAN Card & Aadhaar',
    'Bank Account Details',
    'Police Verification (for chauffeurs)'
  ];

  return (
    <section className="py-section bg-section-dark">
      <div className="container-width">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-4 bg-gradient-primary rounded-xl shadow-glow">
              <TrendingUp className="w-8 h-8 text-primary-foreground" />
            </div>
            <Badge variant="outline" className="text-base px-4 py-2 bg-background/10 border-background/30 text-background">
              Partner Program
            </Badge>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-background to-background/80 bg-clip-text text-transparent">
            Vendor Growth Zone
          </h2>
          <p className="text-xl text-background/70 max-w-3xl mx-auto leading-relaxed">
            Join 5000+ verified vendors and grow your business with TransRentals. 
            Unlock new revenue streams and scale your fleet effortlessly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Earnings Chart & Benefits */}
          <div className="space-y-10">
            {/* Mock Earnings Chart */}
            <Card className="bg-gradient-card shadow-premium border-background/20">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <TrendingUp className="w-6 h-6 text-primary" />
                  Vendor Earnings Growth
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-6">
                  {earnings.map((data, index) => (
                    <div key={data.month} className="flex items-center gap-6">
                      <div className="w-16 text-base font-medium text-muted-foreground">
                        {data.month}
                      </div>
                      <div className="flex-1">
                        <Progress 
                          value={(data.amount / 80000) * 100} 
                          className="h-4 bg-muted/30"
                        />
                      </div>
                      <div className="text-base font-bold min-w-20 text-right">
                        ₹{data.amount.toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-6 bg-success/10 rounded-2xl border border-success/20">
                  <div className="flex items-center gap-3 text-success mb-2">
                    <TrendingUp className="w-5 h-5" />
                    <span className="font-bold text-lg">73% average growth</span>
                  </div>
                  <p className="text-base text-muted-foreground">
                    Most vendors see 50-100% earnings increase in first 6 months
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="hover-lift card-premium bg-gradient-card border-primary/20">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {benefit.value}
                    </div>
                    <div className="text-base text-muted-foreground mb-3">
                      {benefit.title}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-success">
                      <TrendingUp className="w-4 h-4" />
                      {benefit.growth}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Onboarding & KYC */}
          <div className="space-y-10">
            {/* Onboarding Steps */}
            <Card className="bg-gradient-card shadow-premium border-background/20">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Clock className="w-6 h-6 text-primary" />
                  Quick Onboarding
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8 pt-0">
                {onboardingSteps.map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <div key={step.step} className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 bg-gradient-primary text-primary-foreground rounded-2xl flex items-center justify-center font-bold text-lg shadow-glow">
                          {step.step}
                        </div>
                        {index < onboardingSteps.length - 1 && (
                          <div className="w-px h-10 bg-gradient-to-b from-primary to-primary/20 mx-auto mt-3"></div>
                        )}
                      </div>
                      <div className="pt-2 flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <h4 className="font-bold text-xl">{step.title}</h4>
                          <Badge variant="outline" className="text-sm bg-gradient-card">
                            <Clock className="w-3 h-3 mr-1" />
                            {step.time}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground text-base leading-relaxed">{step.description}</p>
                      </div>
                      <IconComponent className="w-6 h-6 text-primary mt-3" />
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* KYC Checklist */}
            <Card className="bg-gradient-card shadow-premium border-background/20">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Shield className="w-6 h-6 text-primary" />
                  KYC Requirements
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-4">
                  {kycItems.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 bg-background/50 rounded-xl hover-lift">
                      <CheckCircle className="w-5 h-5 text-success" />
                      <span className="text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Payout Info */}
        <Card className="mb-20 bg-gradient-card shadow-premium border-background/20">
          <CardContent className="p-12">
            <div className="grid md:grid-cols-3 gap-12 text-center">
              <div className="space-y-4">
                <Calendar className="w-12 h-12 text-primary mx-auto" />
                <h3 className="text-2xl font-bold mb-3">Weekly Payouts</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Get paid every Tuesday for completed trips with instant settlement
                </p>
              </div>
              <div className="space-y-4">
                <Star className="w-12 h-12 text-primary mx-auto" />
                <h3 className="text-2xl font-bold mb-3">Rating Impact</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Higher ratings = more bookings & better rates across all categories
                </p>
              </div>
              <div className="space-y-4">
                <TrendingUp className="w-12 h-12 text-primary mx-auto" />
                <h3 className="text-2xl font-bold mb-3">Growth Support</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Dedicated partner success team to help you grow and scale
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center bg-gradient-card card-premium p-12">
          <Button size="lg" className="btn-premium gap-3 text-lg px-10 py-5">
            Start Selling on TransRentals
            <ArrowRight className="w-6 h-6" />
          </Button>
          <p className="text-lg text-background/70 mt-6">
            Join thousands of successful partners earning with TransRentals
          </p>
        </div>
      </div>
    </section>
  );
};

export default VendorGrowthZone;