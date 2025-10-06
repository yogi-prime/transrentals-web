import React from 'react';
import { Check, X } from 'lucide-react';

const ComparisonSection = () => {
  const features = [
    { 
      feature: 'Pricing Transparency',
      transRentals: true,
      others: false,
      description: 'No hidden charges, upfront pricing'
    },
    {
      feature: 'Vendor Verification',
      transRentals: true,
      others: false,
      description: '100% KYC verified partners'
    },
    {
      feature: 'Pan-India Coverage',
      transRentals: true,
      others: false,
      description: '50+ cities, consistent service'
    },
    {
      feature: 'Coin Rewards',
      transRentals: true,
      others: false,
      description: 'Earn on every booking'
    },
    {
      feature: 'Stackable Coupons',
      transRentals: true,
      others: false,
      description: 'Multiple discounts together'
    },
    {
      feature: '24/7 Support',
      transRentals: true,
      others: true,
      description: 'Round-the-clock assistance'
    },
    {
      feature: 'Fleet Diversity',
      transRentals: true,
      others: false,
      description: '10+ vehicle categories'
    },
    {
      feature: 'Real-time Tracking',
      transRentals: true,
      others: true,
      description: 'Live location updates'
    },
    {
      feature: 'Corporate Accounts',
      transRentals: true,
      others: false,
      description: 'Dedicated business solutions'
    },
    {
      feature: 'Fast Vendor Payouts',
      transRentals: true,
      others: false,
      description: 'Weekly automated settlements'
    }
  ];

  return (
    <div className="bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose TransRentals?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how we compare to other platforms and why millions choose us for their mobility needs
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card-premium overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-gradient-hero border-b border-border/30">
              <div className="text-lg font-bold text-muted-foreground">
                Features
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient-primary mb-1">
                  TransRentals
                </div>
                <div className="text-sm text-primary">India's #1 Platform</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-muted-foreground mb-1">
                  Others
                </div>
                <div className="text-sm text-muted-foreground">Traditional Platforms</div>
              </div>
            </div>

            {/* Comparison Rows */}
            <div className="divide-y divide-border/30">
              {features.map((item, index) => (
                <div key={index} className="grid grid-cols-3 gap-4 p-4 hover:bg-muted/20 transition-colors duration-200">
                  <div className="space-y-1">
                    <div className="font-semibold text-foreground">
                      {item.feature}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {item.description}
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    {item.transRentals ? (
                      <div className="flex items-center justify-center w-8 h-8 bg-success/10 rounded-full">
                        <Check className="w-5 h-5 text-success" />
                      </div>
                    ) : (
                      <div className="flex items-center justify-center w-8 h-8 bg-destructive/10 rounded-full">
                        <X className="w-5 h-5 text-destructive" />
                      </div>
                    )}
                  </div>
                  
                  <div className="flex justify-center">
                    {item.others ? (
                      <div className="flex items-center justify-center w-8 h-8 bg-success/10 rounded-full">
                        <Check className="w-5 h-5 text-success" />
                      </div>
                    ) : (
                      <div className="flex items-center justify-center w-8 h-8 bg-destructive/10 rounded-full">
                        <X className="w-5 h-5 text-destructive" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Stats */}
            <div className="p-6 bg-gradient-hero border-t border-border/30">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">2M+</div>
                  <div className="text-sm text-muted-foreground">Happy Customers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent mb-1">4.8★</div>
                  <div className="text-sm text-muted-foreground">Average Rating</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-success mb-1">99%</div>
                  <div className="text-sm text-muted-foreground">On-time Delivery</div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              Join millions who've made the smart choice
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-premium">
                Start Your Journey
              </button>
              <button className="btn-secondary-premium">
                Compare All Features
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonSection;