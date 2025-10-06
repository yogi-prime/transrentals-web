import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Coins, Trophy, Star, Gift, ArrowRight } from 'lucide-react';

const BackrCoinRewards = () => {
  const tiers = [
    {
      name: 'Silver',
      icon: Star,
      color: 'text-muted-foreground',
      bgColor: 'bg-muted/30',
      borderColor: 'border-muted-foreground/20',
      coins: '0-999',
      benefits: ['1% cashback', 'Basic support']
    },
    {
      name: 'Gold',
      icon: Trophy,
      color: 'text-warning',
      bgColor: 'bg-warning/10',
      borderColor: 'border-warning/30',
      coins: '1000-4999',
      benefits: ['3% cashback', 'Priority support', 'Early access']
    },
    {
      name: 'Platinum',
      icon: Coins,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      borderColor: 'border-primary/30',
      coins: '5000+',
      benefits: ['5% cashback', 'VIP support', 'Exclusive offers', 'Free upgrades']
    }
  ];

  const steps = [
    {
      step: 1,
      title: 'Book & Travel',
      description: 'Complete your booking and enjoy your ride'
    },
    {
      step: 2,
      title: 'Earn Coins',
      description: 'Get BackrCoins based on your booking value'
    },
    {
      step: 3,
      title: 'Redeem Rewards',
      description: 'Use coins for discounts on future bookings'
    }
  ];

  return (
    <section className="py-section bg-section-primary">
      <div className="container-width">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 bg-gradient-primary rounded-xl shadow-glow">
              <Coins className="w-8 h-8 text-primary-foreground" />
            </div>
            <Badge variant="outline" className="text-base px-4 py-2 bg-gradient-card border-primary/20">
              Loyalty Program
            </Badge>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gradient-primary mb-6">
            BackrCoin Rewards
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Earn coins on every booking and unlock exclusive benefits as you travel more. 
            The ultimate loyalty program designed for frequent travelers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Tiers */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-gradient-primary">Membership Tiers</h3>
            <div className="space-y-6">
              {tiers.map((tier) => {
                const IconComponent = tier.icon;
                return (
                  <Card key={tier.name} className={`${tier.bgColor} ${tier.borderColor} border-2 hover-lift hover:shadow-premium hover:scale-[1.02] transition-all duration-500 card-premium`}>
                    <CardContent className="p-8">
                      <div className="flex items-start gap-6">
                        <div className={`p-4 rounded-2xl ${tier.bgColor} border-2 ${tier.borderColor} shadow-md`}>
                          <IconComponent className={`w-8 h-8 ${tier.color}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-4">
                            <h4 className="text-2xl font-bold">{tier.name}</h4>
                            <Badge variant="outline" className="text-sm px-3 py-1 bg-gradient-card">
                              {tier.coins} coins
                            </Badge>
                          </div>
                          <div className="flex flex-wrap gap-3">
                            {tier.benefits.map((benefit, index) => (
                              <span
                                key={index}
                                className="text-sm font-medium text-foreground bg-gradient-card border border-border px-3 py-2 rounded-full hover-lift"
                              >
                                {benefit}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* How it works */}
          <div className="card-premium p-8 bg-gradient-card">
            <h3 className="text-3xl font-bold mb-8 text-gradient-primary">How it Works</h3>
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={step.step} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-primary text-primary-foreground rounded-2xl flex items-center justify-center font-bold text-lg shadow-glow">
                      {step.step}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-px h-10 bg-gradient-to-b from-primary to-primary/20 mx-auto mt-3"></div>
                    )}
                  </div>
                  <div className="pt-2">
                    <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                    <p className="text-muted-foreground text-lg leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-card card-premium p-12">
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button size="lg" className="btn-premium gap-3 text-lg px-8 py-4">
                <Gift className="w-6 h-6" />
                My Coins
              </Button>
              <Button variant="outline" size="lg" className="btn-secondary-premium gap-3 text-lg px-8 py-4">
                Redeem on Checkout
                <ArrowRight className="w-6 h-6" />
              </Button>
            </div>
            <p className="text-lg text-muted-foreground">
              Start earning coins with your next booking and unlock amazing rewards
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackrCoinRewards;