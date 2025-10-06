import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { MapPin, Clock, Users, Star, ArrowRight, Calendar } from 'lucide-react';

const FeaturedTours = () => {
  const tours = [
    {
      id: 1,
      title: 'Golden Triangle Tour',
      location: 'Delhi → Agra → Jaipur',
      duration: '4 Days 3 Nights',
      priceFrom: '₹15,999',
      rating: 4.8,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&h=300&fit=crop',
      highlights: ['Taj Mahal', 'Red Fort', 'Hawa Mahal', 'Local cuisine'],
      category: 'Heritage'
    },
    {
      id: 2,
      title: 'Kerala Backwaters',
      location: 'Kochi → Alleppey → Munnar',
      duration: '5 Days 4 Nights',
      priceFrom: '₹22,500',
      rating: 4.9,
      reviews: 189,
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&h=300&fit=crop',
      highlights: ['Houseboat stay', 'Spice plantations', 'Hill stations', 'Ayurveda'],
      category: 'Nature'
    },
    {
      id: 3,
      title: 'Rajasthan Royal',
      location: 'Jaipur → Udaipur → Jodhpur',
      duration: '6 Days 5 Nights',
      priceFrom: '₹28,999',
      rating: 4.7,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1597149111400-db0cd0c4ea9c?w=400&h=300&fit=crop',
      highlights: ['Palace hotels', 'Desert safari', 'Cultural shows', 'Royal cuisine'],
      category: 'Luxury'
    },
    {
      id: 4,
      title: 'Goa Beach Paradise',
      location: 'North Goa → South Goa',
      duration: '3 Days 2 Nights',
      priceFrom: '₹12,500',
      rating: 4.6,
      reviews: 298,
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&h=300&fit=crop',
      highlights: ['Beach resorts', 'Water sports', 'Nightlife', 'Portuguese heritage'],
      category: 'Beach'
    },
    {
      id: 5,
      title: 'Himachal Adventure',
      location: 'Shimla → Manali → Dharamshala',
      duration: '7 Days 6 Nights',
      priceFrom: '₹19,999',
      rating: 4.8,
      reviews: 167,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      highlights: ['Mountain views', 'Adventure sports', 'Hill stations', 'Local culture'],
      category: 'Adventure'
    }
  ];

  const travelStories = [
    {
      title: '10 Hidden Gems in Rajasthan You Must Visit',
      category: 'Travel Guide',
      readTime: '8 min read',
      date: 'Dec 10, 2024'
    },
    {
      title: 'Complete Kerala Itinerary: From Backwaters to Hill Stations',
      category: 'Itinerary',
      readTime: '12 min read',
      date: 'Dec 8, 2024'
    },
    {
      title: 'Best Time to Visit Golden Triangle: Weather & Tips',
      category: 'Travel Tips',
      readTime: '6 min read',
      date: 'Dec 5, 2024'
    },
    {
      title: 'Photography Guide: Capturing India\'s Heritage Sites',
      category: 'Photography',
      readTime: '10 min read',
      date: 'Dec 3, 2024'
    }
  ];

  return (
    <section className="py-section bg-background">
      <div className="container-width">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="w-8 h-8 text-primary" />
            <Badge variant="outline" className="text-sm px-3 py-1">
              Curated Experiences
            </Badge>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Featured Tours & Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover handpicked itineraries and inspiring travel stories from across India
          </p>
        </div>

        {/* Tours Carousel */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-semibold">Curated Itineraries</h3>
            <Button variant="outline" className="gap-2">
              View All Tours
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {tours.map((tour) => (
                <CarouselItem key={tour.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="group cursor-pointer hover-lift border-2 hover:border-primary/20 transition-all duration-300 overflow-hidden">
                    <div className="relative">
                      <div 
                        className="h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                        style={{ backgroundImage: `url(${tour.image})` }}
                      >
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-primary/90 text-primary-foreground">
                            {tour.category}
                          </Badge>
                        </div>
                        <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-medium">
                          {tour.priceFrom}
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      {/* Title & Location */}
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold mb-2">{tour.title}</h4>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{tour.location}</span>
                        </div>
                      </div>

                      {/* Details */}
                      <div className="flex items-center justify-between mb-4 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          <span>{tour.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-warning fill-current" />
                          <span className="font-medium">{tour.rating}</span>
                          <span className="text-muted-foreground">({tour.reviews})</span>
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-1">
                          {tour.highlights.slice(0, 3).map((highlight, index) => (
                            <span
                              key={index}
                              className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full"
                            >
                              {highlight}
                            </span>
                          ))}
                          {tour.highlights.length > 3 && (
                            <span className="text-xs text-muted-foreground px-2 py-1">
                              +{tour.highlights.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* CTA */}
                      <Button className="w-full group-hover:bg-primary/90 transition-colors duration-300">
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4" />
            <CarouselNext className="-right-4" />
          </Carousel>
        </div>

        {/* Travel Stories */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-semibold">Travel Stories & Tips</h3>
            <Button variant="outline" className="gap-2">
              Read All Stories
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {travelStories.map((story, index) => (
              <Card key={index} className="group cursor-pointer hover-lift border-2 hover:border-primary/20 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="outline" className="text-xs">
                      {story.category}
                    </Badge>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      <span>{story.date}</span>
                    </div>
                  </div>
                  <h4 className="font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                    {story.title}
                  </h4>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{story.readTime}</span>
                    </div>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;