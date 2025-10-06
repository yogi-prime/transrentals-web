import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Smartphone, Zap, MapPin, Wallet, QrCode } from 'lucide-react';

const AppDownloadCTA = () => {
  const features = [
    { icon: Zap, text: 'Faster checkouts' },
    { icon: MapPin, text: 'Live tracking' },
    { icon: Wallet, text: 'Coin wallet' }
  ];

  return (
    <section className="py-section bg-primary/5">
      <div className="container-width">
        <Card className="bg-gradient-card border-2 border-primary/20 overflow-hidden">
          <CardContent className="p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Smartphone className="w-8 h-8 text-primary" />
                  <Badge variant="outline">Mobile App</Badge>
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  Download the TransRentals App
                </h2>
                <p className="text-muted-foreground mb-6">
                  Get the best experience with our mobile app. Book faster, track rides, and manage your account on the go.
                </p>
                
                <div className="space-y-3 mb-8">
                  {features.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                      <div key={index} className="flex items-center gap-3">
                        <IconComponent className="w-5 h-5 text-primary" />
                        <span>{feature.text}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="gap-2">
                    <img src="/api/placeholder/24/24" alt="Google Play" className="w-6 h-6" />
                    Google Play Store
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <img src="/api/placeholder/24/24" alt="App Store" className="w-6 h-6" />
                    App Store
                  </Button>
                </div>
              </div>

              <div className="text-center">
                <div className="inline-block p-6 bg-background rounded-2xl border-2 border-primary/20">
                  <QrCode className="w-32 h-32 text-primary mx-auto" />
                  <p className="text-sm text-muted-foreground mt-4">
                    Scan to download
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AppDownloadCTA;