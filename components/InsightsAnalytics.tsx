import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { BarChart3, Clock, DollarSign, TrendingUp, ArrowRight, Target } from 'lucide-react';

const InsightsAnalytics = () => {
  const metrics = [
    {
      title: 'On-Time Performance',
      value: '94.8%',
      description: 'Vehicles arrive within promised time window',
      progress: 94.8,
      icon: Clock,
      color: 'text-success',
      trend: '+2.3% this month'
    },
    {
      title: 'Average Pickup Time',
      value: '8.5 min',
      description: 'From booking confirmation to pickup',
      progress: 85,
      icon: Target,
      color: 'text-primary',
      trend: '-1.2 min improved'
    },
    {
      title: 'Price Fairness Index',
      value: '96.2%',
      description: 'Customers rate our pricing as fair',
      progress: 96.2,
      icon: DollarSign,
      color: 'text-warning',
      trend: '+4.1% satisfaction up'
    }
  ];

  const insights = [
    {
      title: 'Route Optimization',
      description: 'AI-powered route planning reduces travel time by 15%'
    },
    {
      title: 'Dynamic Pricing',
      description: 'Real-time pricing ensures competitive rates across markets'
    },
    {
      title: 'Demand Forecasting',
      description: 'Machine learning predicts peak hours for better availability'
    },
    {
      title: 'Quality Monitoring',
      description: 'Continuous feedback loops improve service quality'
    }
  ];

  return (
    <section className="py-section bg-background">
      <div className="container-width">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BarChart3 className="w-8 h-8 text-primary" />
            <Badge variant="outline" className="text-sm px-3 py-1">
              Data-Driven
            </Badge>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Insights & Analytics Preview
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparency through data. See how we use analytics to optimize your travel experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Metrics */}
          <div className="space-y-6">
            {metrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <Card key={index} className="hover-lift border-2 hover:border-primary/20 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <IconComponent className={`w-6 h-6 ${metric.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold">{metric.title}</h3>
                          <span className="text-2xl font-bold text-primary">{metric.value}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{metric.description}</p>
                        <Progress value={metric.progress} className="h-2 mb-2" />
                        <div className="flex items-center gap-2 text-xs">
                          <TrendingUp className="w-3 h-3 text-success" />
                          <span className="text-success">{metric.trend}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* How We Use Data */}
          <div>
            <Card className="bg-gradient-card border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-6 h-6 text-primary" />
                  How We Use Data to Improve Your Rides
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {insights.map((insight, index) => (
                  <div key={index} className="flex gap-3 p-4 bg-background/50 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                    <div>
                      <h4 className="font-semibold mb-1">{insight.title}</h4>
                      <p className="text-sm text-muted-foreground">{insight.description}</p>
                    </div>
                  </div>
                ))}
                
                <div className="pt-4 border-t border-border">
                  <Button className="w-full gap-2" variant="outline">
                    Learn More About Our Data Approach
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-muted/30 rounded-lg">
            <div className="text-2xl font-bold text-primary mb-1">99.2%</div>
            <div className="text-sm text-muted-foreground">System Uptime</div>
          </div>
          <div className="text-center p-4 bg-muted/30 rounded-lg">
            <div className="text-2xl font-bold text-primary mb-1">2.3s</div>
            <div className="text-sm text-muted-foreground">Avg Response Time</div>
          </div>
          <div className="text-center p-4 bg-muted/30 rounded-lg">
            <div className="text-2xl font-bold text-primary mb-1">15M+</div>
            <div className="text-sm text-muted-foreground">Data Points Daily</div>
          </div>
          <div className="text-center p-4 bg-muted/30 rounded-lg">
            <div className="text-2xl font-bold text-primary mb-1">24/7</div>
            <div className="text-sm text-muted-foreground">Monitoring</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsAnalytics;