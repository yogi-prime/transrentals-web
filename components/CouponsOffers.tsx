import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Copy, Clock, Percent, Gift, Sparkles, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const CouponsOffers = () => {
  const { toast } = useToast();
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const coupons = [
    {
      id: 1,
      code: 'FIRST50',
      title: 'First Ride Special',
      description: 'Get 50% off on your first booking',
      discount: '50% OFF',
      type: 'First-time user',
      validTill: '2024-12-31',
      minBooking: '₹500',
      maxDiscount: '₹200',
      bgColor: 'bg-gradient-to-r from-primary/10 to-accent/10',
      borderColor: 'border-primary/20',
      icon: Gift
    },
    {
      id: 2,
      code: 'STUDENT25',
      title: 'Student Discount',
      description: 'Special rates for students',
      discount: '25% OFF',
      type: 'Student',
      validTill: '2024-12-31',
      minBooking: '₹300',
      maxDiscount: '₹150',
      bgColor: 'bg-gradient-to-r from-accent/10 to-success/10',
      borderColor: 'border-accent/20',
      icon: Sparkles
    },
    {
      id: 3,
      code: 'CORP20',
      title: 'Corporate Travel',
      description: 'Business travel made affordable',
      discount: '20% OFF',
      type: 'Corporate',
      validTill: '2024-12-31',
      minBooking: '₹1000',
      maxDiscount: '₹500',
      bgColor: 'bg-gradient-to-r from-success/10 to-primary/10',
      borderColor: 'border-success/20',
      icon: Percent
    },
    {
      id: 4,
      code: 'FESTIVAL30',
      title: 'Festival Special',
      description: 'Celebrate with great savings',
      discount: '30% OFF',
      type: 'Festival',
      validTill: '2024-12-25',
      minBooking: '₹800',
      maxDiscount: '₹300',
      bgColor: 'bg-gradient-to-r from-warning/10 to-accent/10',
      borderColor: 'border-warning/20',
      icon: Sparkles
    }
  ];

  const handleCopyCode = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(code);
      toast({
        title: "Code copied!",
        description: `Coupon code ${code} has been copied to your clipboard.`,
      });
      
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (error) {
      toast({
        title: "Copy failed",
        description: "Please copy the code manually.",
        variant: "destructive"
      });
    }
  };

  const getTimeLeft = (validTill: string) => {
    const now = new Date();
    const expiry = new Date(validTill);
    const diffTime = expiry.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays <= 0) return 'Expired';
    if (diffDays === 1) return '1 day left';
    return `${diffDays} days left`;
  };

  return (
    <section className="py-section bg-section-primary">
      <div className="container-width">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-4 bg-gradient-primary rounded-xl shadow-glow">
              <Percent className="w-8 h-8 text-primary-foreground" />
            </div>
            <Badge variant="outline" className="text-base px-4 py-2 bg-gradient-card border-primary/20">
              Limited Time
            </Badge>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gradient-primary mb-6">
            Coupons & Offers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stack multiple coupons and save big on your next ride. 
            Exclusive deals and seasonal offers for maximum savings.
          </p>
        </div>

        {/* Coupons Carousel */}
        <div className="relative">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {coupons.map((coupon) => {
                const IconComponent = coupon.icon;
                const timeLeft = getTimeLeft(coupon.validTill);
                const isExpired = timeLeft === 'Expired';
                
                return (
                  <CarouselItem key={coupon.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className={`${coupon.bgColor} ${coupon.borderColor} border-2 h-full ${isExpired ? 'opacity-60' : ''} hover-lift card-premium hover:shadow-premium transition-all duration-500`}>
                      <CardContent className="p-8">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-6">
                          <div className="flex items-center gap-4">
                            <div className="p-3 rounded-xl bg-gradient-primary shadow-glow">
                              <IconComponent className="w-6 h-6 text-primary-foreground" />
                            </div>
                            <div>
                              <Badge variant="outline" className="text-sm mb-2 bg-gradient-card">
                                {coupon.type}
                              </Badge>
                              <div className="text-3xl font-bold text-gradient-primary">
                                {coupon.discount}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-sm font-medium bg-gradient-card px-3 py-2 rounded-full">
                            <Clock className="w-4 h-4" />
                            <span className={isExpired ? 'text-destructive' : 'text-muted-foreground'}>
                              {timeLeft}
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="mb-8">
                          <h3 className="text-xl font-bold mb-3">{coupon.title}</h3>
                          <p className="text-base text-muted-foreground mb-4 leading-relaxed">
                            {coupon.description}
                          </p>
                          
                          <div className="flex justify-between text-sm font-medium text-muted-foreground bg-background/30 px-4 py-3 rounded-xl">
                            <span>Min: {coupon.minBooking}</span>
                            <span>Max: {coupon.maxDiscount}</span>
                          </div>
                        </div>

                        {/* Code & Copy */}
                        <div className="border-2 border-dashed border-primary/30 rounded-xl p-4 bg-gradient-card shadow-md">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-sm text-muted-foreground mb-2">Coupon Code</div>
                              <div className="font-mono font-bold text-xl text-gradient-primary">
                                {coupon.code}
                              </div>
                            </div>
                            <Button
                              variant="outline"
                              size="lg"
                              onClick={() => handleCopyCode(coupon.code)}
                              disabled={isExpired}
                              className="gap-3 btn-secondary-premium"
                            >
                              {copiedCode === coupon.code ? (
                                <>
                                  <Check className="w-5 h-5" />
                                  Copied
                                </>
                              ) : (
                                <>
                                  <Copy className="w-5 h-5" />
                                  Copy
                                </>
                              )}
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="-left-4" />
            <CarouselNext className="-right-4" />
          </Carousel>
        </div>

        {/* Info */}
        <div className="text-center mt-12 bg-gradient-card card-premium p-8">
          <p className="text-lg font-medium text-muted-foreground">
            💎 Coupons can be stacked with BackrCoin rewards for maximum savings
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Terms and conditions apply. Valid for limited time only.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CouponsOffers;