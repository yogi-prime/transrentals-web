import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, Filter, MapPin, Car, ArrowRight, ThumbsUp } from 'lucide-react';

const RatingsReviews = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const overallRating = {
    average: 4.7,
    totalReviews: 12847,
    breakdown: {
      5: 68,
      4: 23,
      3: 7,
      2: 1,
      1: 1
    }
  };

  const cities = ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Pune'];
  const services = ['Car Rental', 'Taxi', 'Self Drive', 'Luxury', 'Bus', 'Truck'];

  const reviews = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      date: '2 days ago',
      service: 'Car Rental',
      city: 'Mumbai',
      review: 'Excellent service! The driver was punctual, professional, and the car was in perfect condition. Used it for my business trip and everything went smoothly.',
      helpful: 12,
      verified: true,
      photos: ['https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300&h=200&fit=crop']
    },
    {
      id: 2,
      name: 'Priya Sharma',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      date: '5 days ago',
      service: 'Airport Transfer',
      city: 'Delhi',
      review: 'Amazing experience! Booked for airport pickup and the driver was waiting with a name board. Clean car, comfortable ride, and reached on time.',
      helpful: 8,
      verified: true,
      photos: []
    },
    {
      id: 3,
      name: 'Arjun Patel',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      rating: 4,
      date: '1 week ago',
      service: 'Outstation',
      city: 'Bangalore',
      review: 'Good service for outstation trip to Mysore. Driver was experienced and knew the routes well. Car could have been a bit cleaner but overall satisfied.',
      helpful: 15,
      verified: true,
      photos: ['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop']
    },
    {
      id: 4,
      name: 'Sneha Reddy',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      date: '1 week ago',
      service: 'Wedding',
      city: 'Hyderabad',
      review: 'Booked luxury cars for our wedding. All vehicles arrived decorated and on time. Drivers were courteous and professional. Highly recommend!',
      helpful: 22,
      verified: true,
      photos: [
        'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=300&h=200&fit=crop',
        'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=300&h=200&fit=crop'
      ]
    },
    {
      id: 5,
      name: 'Vikram Singh',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      rating: 4,
      date: '2 weeks ago',
      service: 'Corporate',
      city: 'Chennai',
      review: 'Regular user for office commute. Generally good service with few hiccups during peak hours. Customer support is responsive.',
      helpful: 6,
      verified: true,
      photos: []
    },
    {
      id: 6,
      name: 'Meera Nair',
      avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      date: '2 weeks ago',
      service: 'Self Drive',
      city: 'Pune',
      review: 'Self-drive option is fantastic! Car was well-maintained, fuel efficient, and pickup/drop was hassle-free. Great for weekend getaways.',
      helpful: 18,
      verified: true,
      photos: []
    }
  ];

  const highlights = [
    { text: 'Punctual & Professional Drivers', percentage: 94 },
    { text: 'Clean & Well-Maintained Vehicles', percentage: 91 },
    { text: 'Easy Booking Process', percentage: 96 },
    { text: 'Responsive Customer Support', percentage: 89 },
    { text: 'Value for Money', percentage: 87 },
    { text: 'Safety & Security', percentage: 93 }
  ];

  return (
    <section className="py-section bg-background">
      <div className="container-width">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-8 h-8 text-warning fill-current" />
            <Badge variant="outline" className="text-sm px-3 py-1">
              Customer Feedback
            </Badge>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Ratings & Reviews
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real feedback from real customers across India
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Overall Rating */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-center">Overall Rating</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-6xl font-bold text-primary mb-2">
                {overallRating.average}
              </div>
              <div className="flex items-center justify-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star}
                    className={`w-6 h-6 ${star <= Math.floor(overallRating.average) ? 'text-warning fill-current' : 'text-muted-foreground'}`}
                  />
                ))}
              </div>
              <p className="text-muted-foreground">
                Based on {overallRating.totalReviews.toLocaleString()} reviews
              </p>

              {/* Rating Breakdown */}
              <div className="mt-6 space-y-2">
                {Object.entries(overallRating.breakdown).reverse().map(([rating, percentage]) => (
                  <div key={rating} className="flex items-center gap-3">
                    <span className="text-sm w-3">{rating}</span>
                    <Star className="w-4 h-4 text-warning fill-current" />
                    <Progress value={percentage} className="flex-1 h-2" />
                    <span className="text-sm text-muted-foreground w-8">{percentage}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Highlights */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>What Customers Love</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm font-medium">{highlight.text}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-primary">{highlight.percentage}%</span>
                      <ThumbsUp className="w-4 h-4 text-success" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters & Reviews */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Customer Reviews</CardTitle>
              <Button variant="outline" size="sm" className="gap-2">
                <Filter className="w-4 h-4" />
                Filter
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {/* Filter Tabs */}
            <Tabs value={selectedFilter} onValueChange={setSelectedFilter} className="mb-6">
              <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="5">5 Star</TabsTrigger>
                <TabsTrigger value="4">4 Star</TabsTrigger>
                <TabsTrigger value="photos">With Photos</TabsTrigger>
                <TabsTrigger value="verified">Verified</TabsTrigger>
                <TabsTrigger value="recent">Recent</TabsTrigger>
              </TabsList>
            </Tabs>

            {/* Reviews List */}
            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="border-b border-border pb-6 last:border-b-0">
                  <div className="flex gap-4">
                    {/* Avatar */}
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={review.avatar} />
                      <AvatarFallback>{review.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>

                    {/* Content */}
                    <div className="flex-1">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold">{review.name}</h4>
                            {review.verified && (
                              <Badge variant="outline" className="text-xs">
                                Verified
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Car className="w-3 h-3" />
                              <span>{review.service}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              <span>{review.city}</span>
                            </div>
                            <span>{review.date}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star 
                              key={star}
                              className={`w-4 h-4 ${star <= review.rating ? 'text-warning fill-current' : 'text-muted-foreground'}`}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Review Text */}
                      <p className="text-muted-foreground mb-3">
                        {review.review}
                      </p>

                      {/* Photos */}
                      {review.photos.length > 0 && (
                        <div className="flex gap-2 mb-3">
                          {review.photos.map((photo, index) => (
                            <div 
                              key={index}
                              className="w-20 h-16 bg-cover bg-center rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                              style={{ backgroundImage: `url(${photo})` }}
                            ></div>
                          ))}
                        </div>
                      )}

                      {/* Actions */}
                      <div className="flex items-center gap-4 text-sm">
                        <button className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
                          <ThumbsUp className="w-4 h-4" />
                          <span>Helpful ({review.helpful})</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* See More */}
            <div className="text-center mt-8">
              <Button variant="outline" className="gap-2">
                See All Reviews
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RatingsReviews;